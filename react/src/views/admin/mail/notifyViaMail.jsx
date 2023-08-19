import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../../axios-client';

export default function NotifyViaMail() {

    const [users, setUsers] = useState([]);
    const [delivered, setDelivered] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [write, setWrite] = useState(false);
    const [sending, setSending] = useState(true);

    const [m_title, setMTitle] = useState('');
    const [m_body, setMBody] = useState('');

    const year = useRef();
    const dept = useRef();
    const serial = useRef();
    const userType = useRef();
    const title = useRef();
    const body = useRef();


    useEffect(() => {
        getUsers();
    }, [])

    const removeUserFromLIst = (id) => {
        console.log(id);
        console.log(users);
        // assigning the list to temp variable
        const temp = [...users];
        let ind_c = 0, ind;
        temp.map((u) => {
            if (u.id == id) {
                ind = ind_c;
            }
            ind_c++;
        });
        console.log(ind);
        // removing the element using splice
        temp.splice(ind, 1);
        console.log(temp);
        console.log(users);
        setUsers(temp);
    }

    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/member-user')
            .then(({ data }) => {
                console.log('data is : ');
                console.log(data);
                setUsers(data);
                setLoading(false)
            })
            .catch(err => {
                console.log('users request error: ');
                console.log(err);
                response = err.response;
                console.log(response);
                setLoading(false)
            })
    }

    const mailSend = () => {
        if (!window.confirm("Are you Sure you want to Send the mail to the selected users.")) {
            return;
        }
        setSending(true);
        toggleWrite();
        users.map((u) => {
            console.log(u.name);
            const load = {
                email: u.email,
                title: m_title,
                body: m_body,
            }
            axiosClient.post('/common-mail', load)
                .then(() => {
                    console.log(u.name+' -> Mail send successfully');
                    setDelivered(delivered+1);
                    console.log('New length : '+delivered);
                    setSending(false);
                })
                .catch(err => {
                    console.log(u.name+" -> send-mail err :" + err);
                    setSending(false);
                    
                })
        });
    }

    const search = () => {
        console.log('search click');
        console.log(year.current.value);
        console.log(dept.current.value);
        console.log(serial.current.value);
        console.log('with');
        setError(null);

        if (year.current.value.length > 2) {
            setError('Year box contain exact 2 digit.');
        }
        else if (dept.current.value.length > 2) {
            setError('Department box contain exact 2 digit.s' + dept.current.value + 'f');
        }
        else if (serial.current.value.length > 2) {
            setError('Serial box contain exact 2 digit.');
        } else {
            const payload = {
                u_type: userType.current.value,
                year: year.current.value,
                dept: dept.current.value,
                serial: serial.current.value
            }

            axiosClient.post('/user-query', payload)
                .then(({ data }) => {
                    console.log('data is : ');
                    console.log(data);
                    setUsers(data);
                })
        }
    }


    const toggleWrite = () => {
        setWrite(!write);
    }
    const closebtn = () => {
        setMTitle('');
        setMBody('');
        toggleWrite();
    }

    return (
        <div >
            <div className=" relative">
                {/* Email Writing Section */}
                {!write
                    ?
                    // Button to write email
                    <div onClick={toggleWrite} className=" absolute bg-blue-800/[.50] py-2 px-6 rounded-2xl cursor-pointer bottom-0 right-2 text-4xl">
                        {sending
                        ? <h3 className='flex flex-col justify-center text-blue-800 text-lg'>
                            <div className="">Sending...</div>
                            <div className="">{delivered}/{users.length}</div>
                        </h3>
                        :
                            <h1 className='flex justify-center text-blue-800 font-bold'>+</h1>
                        }

                    </div>
                    :
                    // Writing form
                    <div className=" absolute bg-white rounded-lg h-[80%] w-[70%] bottom-0 right-2 text-4xl">
                        {/* top head */}
                        <div className=" rounded-sm bg-blue-500 h-7 flex flex-row justify-between pl-2">
                            {/* text  */}
                            <h3 className='text-lg'>Write your mail:</h3>
                            {/* Button */}
                            <div className="flex flex-row space-x-1">
                                {/* Minimize button */}
                                <div onClick={toggleWrite} className="bg-blue-300 px-2 text-lg font-bold cursor-pointer rounded-sm">-</div>
                                {/* cancle Button */}
                                <div onClick={closebtn} className="bg-blue-300 px-2 text-lg text-red-600 font-bold cursor-pointer rounded-sm">x</div>
                            </div>
                        </div>
                        {/* Mail content */}
                        <div className=" px-3">

                            {/* Mail Title  */}
                            <div className='inp-component'>
                                <label className="block text-sm font-medium text-slate-700">Mail Title</label>
                                <div className="mt-1">
                                    <input value={m_title} onChange={ev => setMTitle(ev.target.value)} type="text" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter mail title." />
                                </div>
                            </div>
                            {/* Mail Body  */}
                            <div className='inp-component'>
                                <label className="block text-sm font-medium text-slate-700">Mail Body</label>
                                <div className="mt-1">
                                    <textarea value={m_body} onChange={ev => setMBody(ev.target.value)} type="text" className="line-clamp-3 px-3 py-2 h-32 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your Name." />
                                </div>
                            </div>
                            {/* Send Button */}
                            <div className="flex justify-end">
                                <div onClick={mailSend} className="cursor-pointer p-1 text-xl bg-blue-800 w-24 flex justify-center text-white font-semibold rounded-md mt-2">
                                    Send
                                </div>

                            </div>
                        </div>
                    </div>
                }
                {/* Content */}
                <div className="">
                    {/* Heading */}
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row">
                            <select ref={userType} className='p-1 rounded-md bg-blue-100 text-blue-800 text-2xl font-semibold' name="userType" id="userType">
                                <option value="%"><h2 className='text-2xl font-semibold text-blue-900'>All</h2></option>
                                <option value="Advisor"><h2 className='text-2xl font-semibold text-blue-900'>Advisor</h2></option>
                                <option value="Team"><h2 className='text-2xl font-semibold text-blue-900'>Team</h2></option>
                                <option value="Member"><h2 className='text-2xl font-semibold text-blue-900'>Memeber</h2></option>

                            </select>
                            {users && <div className="text-blue-800 text-2xl font-semibold">({users.length})</div>
                            }
                        </div>
                        <div className="">
                            {error &&
                                <div className=" flex flex-row justify-between bg-red-500 p-3 rounded-xl">
                                    {error}
                                    <div onClick={() => { setError(null) }} className='px-4 text-white cursor-pointer'>X</div>
                                </div>
                            }
                            <div className="flex flex-col space-y-2 items-center sm:flex-row sm:space-x-1">
                                <h4 className=' text-blue-800 font-semibold self-center'>Search by(year/dept/serial):</h4>
                                <div className='flex flex-row space-x-2 items-center'>
                                    <input ref={year} className='w-10 h-7 rounded-sm pl-1' type="number" placeholder='19' />
                                    <input ref={dept} className='w-10 h-7 rounded-sm pl-1' type="number" placeholder='01' />
                                    <input ref={serial} className='w-10 h-7 rounded-sm pl-1' type="number" placeholder='40' />
                                </div>
                                <div onClick={ev => search()} className=' bg-blue-700 cursor-pointer text-white font-semibold w-20 self-end px-2 py-1 rounded-md'>Search</div>
                            </div>
                        </div>
                    </div>



                    {/* members list */}
                    <div className="overflow-auto flex flex-col mt-4 h-80">
                        {loading
                            ? <div className=" flex m-auto text-blue-800 text-5xl">Loading...</div>
                            :
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {
                                    users.map(u => (
                                        <div className=' flex flex-col m-2 bg-blue-50 p-2 rounded-md'>
                                            <div className="flex flex-row items-center">
                                                <h3 className='font-semibold text-blue-700 mr-2'>Student Id:</h3>
                                                <p className=' text-blue-700'>{u.s_id}</p>
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <h3 className='font-semibold text-blue-700 mr-2'>Name:</h3>
                                                <p className=' text-blue-700'>{u.name}</p>
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <h3 className='font-semibold text-blue-700 mr-2'>CPC Position:</h3>
                                                <p className=' text-blue-700'>{u.cpc_position}</p>
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <h3 className='font-semibold text-blue-700 mr-2'>Email:</h3>
                                                <p className=' text-blue-700'>{u.email}</p>
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <h3 className='font-semibold text-blue-700 mr-2'>Dept:</h3>
                                                <p className=' text-blue-700'>{u.department}</p>
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <h3 className='font-semibold text-blue-700 mr-2'>Session:</h3>
                                                <p className=' text-blue-700'>{u.session}</p>
                                            </div>
                                            <div className='flex flex-row space-x-4 my-3 justify-end'>
                                                <div onClick={ev => removeUserFromLIst(u.id)} className="cursor-pointer bg-orange-400 text-white px-2 py-1 font-semibold rounded-lg">Remove from this list</div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

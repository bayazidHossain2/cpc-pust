import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../../axios-client';

export default function Member() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const year = useRef();
    const dept = useRef();
    const serial = useRef();

    useEffect(() => {
        getUsers();
    }, [])


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

    const onReject = (u) => {
        if (!window.confirm("Are you Sure you want to reject this user?")) {
            return;
        }
        setLoading(true);

        axiosClient.delete(`/users/${u.id}`)
            .then(() => {
                // Todo show notification
                getUsers();
                const load = {
                    mail: u.email
                }
                axiosClient.post('/send-mail-rejected', load)
                    .then(() => {
                        console.log('Mail send successfully');
                        setLoading(false);
                    })
                    .catch(err => {
                        console.log("send-mail err :" + err);
                        setLoading(false);
                    })

            })
    }

    const search = () => {
        console.log('search click');
        console.log(year.current.value);
        console.log(dept.current.value);
        console.log(serial.current.value);
        console.log('with');
        setError(null);
        if (year.current.value == '' && dept.current.value == '' && serial.current.value == '') {
            setError('Atlist one box must be filled.');
        }
        else if (year.current.value.length > 2) {
            setError('Year box contain exact 2 digit.');
        }
        else if(dept.current.value.length > 2){
            setError('Department box contain exact 2 digit.s'+dept.current.value+'f');
        }
        else if(serial.current.value.length > 2){
            setError('Serial box contain exact 2 digit.');
        }else{
            const payload ={
                year: year.current.value,
                dept: dept.current.value,
                serial: serial.current.value
            }

            axiosClient.post('/member-user-query',payload)
                .then(({data}) => {
                    console.log('data is : ');
                    console.log(data);
                    setUsers(data);
                })
        }
    }



    return (
        <div>
            {/* Heading */}
            <div className="flex flex-row justify-between items-center">
                <h2 className='text-2xl font-semibold text-blue-900'>Members</h2>
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
            <div className="overflow-auto flex flex-col mt-4 h-96">
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
                                        <div onClick={ev => onRemove(u)} className="cursor-pointer bg-red-600 text-white px-2 py-1 font-semibold rounded-lg">Delete this account</div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                }
            </div>
        </div>
    )
}

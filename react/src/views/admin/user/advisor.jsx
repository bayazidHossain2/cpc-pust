import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../../axios-client';

export default function Advisor() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getUsers();
    }, [])


    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/advisor-user')
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

    const onRemove = (u) => {
        if (!window.confirm("Are you Sure you want to Delete this user?")) {
            return;
        }
        setLoading(true);

        axiosClient.delete(`/users/${u.id}`)
            .then(() => {
                // Todo show notification
                getUsers();
                // const load = {
                //     mail: u.email
                // }
                // axiosClient.post('/send-mail-rejected', load)
                //     .then(() => {
                //         console.log('Mail send successfully');
                //         setLoading(false);
                //     })
                //     .catch(err => {
                //         console.log("send-mail err :" + err);
                //         setLoading(false);
                //     })

            })
    }



    return (
        <div className='h-full'>
            {/* Heading */}
            <div className="">
                <h2 className='text-2xl font-semibold text-blue-900'>

                    <div className="flex flex-row">
                        <div className="">Advisor's</div>
                        {users && <div className="">({users.length})</div>
                        }
                    </div>
                </h2>
            </div>
            {/* members list */}
            <div className="overflow-auto flex flex-col mt-4 h-[90%] bg-white">
                {loading
                    ? <div className=" flex m-auto text-blue-800 text-5xl">Loading...</div>
                    :
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {
                            users.map(u => (
                                <div className=' flex flex-col m-2 bg-blue-50 p-2 rounded-md'>

                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Name:</h3>
                                        <p className=' text-blue-700'>{u.name}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Email:</h3>
                                        <p className=' text-blue-700'>{u.email}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Dept:</h3>
                                        <p className=' text-blue-700'>{u.department}</p>
                                    </div>

                                    <div className='flex flex-row space-x-4 my-3 justify-end'>
                                        <div onClick={ev => onRemove(u)} className="cursor-pointer bg-red-600 text-white px-2 py-1 font-semibold rounded-lg">Delete</div>
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

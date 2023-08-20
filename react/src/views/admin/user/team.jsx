import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../../axios-client';

export default function Team() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getUsers();
    }, [])


    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/team-user')
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
        if (!window.confirm("Are you Sure you want to remove this user from team?")) {
            return;
        }
        setLoading(true);
        const load = {
            id: u.id,
            position: 'Member'
        }
        axiosClient.post(`/remove-from-team`, load)
            .then(() => {
                // Todo show notification
                getUsers();
            })
    }



    return (
        <div className='h-full'>
            {/* Heading */}
            <div className="">
                <h2 className='text-2xl font-semibold text-blue-900'>

                    <div className="flex flex-row">
                        <div className="">Team Members</div>
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
                                        <h3 className='font-semibold text-blue-700 mr-2'>Student Id:</h3>
                                        <p className=' text-blue-700'>{u.s_id}</p>
                                    </div>
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
                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Session:</h3>
                                        <p className=' text-blue-700'>{u.session}</p>
                                    </div>
                                    <div className='flex flex-row space-x-4 my-3 justify-end'>
                                        <div onClick={ev => onRemove(u)} className="cursor-pointer bg-red-600 text-white px-2 py-1 font-semibold rounded-lg">Remove from team</div>
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

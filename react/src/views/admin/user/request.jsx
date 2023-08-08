import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../../axios-client';

export default function Request() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getUsers();
    }, [])


    const getUsers = () => {
        setLoading(true)
        axiosClient.get('/requested-user')
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

    const onApprove = (u, position) => {
        console.log('ki je print hoy bujhi na');
        console.log(u.s_id);
        // console.log(positionRef);
        // console.log(positionRef.current);
        console.log(position);
        setLoading(true);
        const payload = {
            id: u.id,
            email: u.email,
            position: position
        }
        axiosClient.post('/approve-user',payload)
        .then((data) => {
            console.log('approve response');
            console.log(data);
            getUsers();
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



    return (
        <div>
            {/* Heading */}
            <div className="">
                <h2 className='text-2xl font-semibold text-blue-900'>Member Request</h2>
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
                                        <h3 className='font-semibold text-blue-700 mr-2'>Email:</h3>
                                        <p className=' text-blue-700'>{u.email}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Varifyed at:</h3>
                                        <p className=' text-blue-700'>{u.email_varified_at ? u.email_varified_at : "Not Varified"}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Requested at:</h3>
                                        <p className=' text-blue-700'>{u.created_at}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Dept:</h3>
                                        <p className=' text-blue-700'>{u.department}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Session:</h3>
                                        <p className=' text-blue-700'>{u.session}</p>
                                    </div>
                                    <div className="flex flex-row justify-between items-center mt-5">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Approve as:</h3>
                                        <div className="flex flex-col space-y-2">
                                            <div onClick={ev => onApprove(u, 'Advisor')} className=" cursor-pointer bg-green-400 text-white px-2 py-1 font-bold rounded-lg">Advisor</div>
                                            <div onClick={ev => onApprove(u, 'Team')} className=" cursor-pointer bg-green-500 text-white px-2 py-1 font-bold rounded-lg">Team</div>
                                            <div onClick={ev => onApprove(u, 'Member')} className=" cursor-pointer bg-green-600 text-white px-2 py-1 font-bold rounded-lg">Member</div>

                                        </div>
                                    </div>

                                    <div className='flex flex-row space-x-4 my-3 justify-end'>
                                        <div onClick={ev => onReject(u)} className="cursor-pointer bg-red-600 text-white px-2 py-1 font-bold rounded-lg">Reject</div>
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

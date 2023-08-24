import React, { useEffect, useState } from 'react'
import axiosClient from '../../../axios-client';
import { useNavigate } from 'react-router-dom';

export default function AllMails() {

    const [mails, setMails] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getMails();
    }, [])


    const getMails = () => {
        setLoading(true)
        axiosClient.get('/all-mails')
            .then(({ data }) => {
                console.log('data is : ');
                console.log(data);
                setMails(data);
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

    const onResend = (m) => {
        console.log(m.title+' body : '+m.body);
        navigate('/resendMail', { state: {id: m.id, title: m.title, body: m.body} })
    }
    const onDelete = (m) => {
        if (!window.confirm("Are you Sure you want to delete this mail information?")) {
            return;
        }
        setLoading(true);
        const load = {
            mail_id: m.id,
        }
        axiosClient.post(`/delete-mail`, load)
            .then(() => {
                // Todo show notification
                getMails();
            })
    }
    return (
        <div className='h-full'>
            {/* Heading */}
            <div className="">
                <h2 className='text-2xl font-semibold text-blue-900'>

                    <div className="flex flex-row">
                        <div className="">Previously send Email</div>
                        {mails && <div className="">({mails.length})</div>
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
                            mails.map(m => (
                                <div className=' flex flex-col m-2 bg-blue-50 p-2 rounded-md'>
                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Title:</h3>
                                        <p className=' text-blue-700'>{m.title}</p>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <h3 className='font-semibold text-blue-700 mr-2'>Body:</h3>
                                        <p className=' text-blue-700'>{m.body}</p>
                                    </div>

                                    <div className="flex flex-row justify-end space-x-2 items-center mt-5">
                                        <div onClick={ev => onResend(m)} className=" cursor-pointer bg-green-600 text-white px-2 py-1 font-bold rounded-lg">Resend</div>
                                        <div onClick={ev => onDelete(m)} className="cursor-pointer bg-red-600 text-white px-2 py-1 font-bold rounded-lg">Delete</div>
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

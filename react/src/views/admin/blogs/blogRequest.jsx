import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../../axios-client';

export default function BlogRequests() {
    const [loading, setLoading] = useState(false);
    const [catagories, setCatagories] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const blogCatagory = useRef();


    useEffect(() => {
        // getUsers();
        getBlogsCatagory();
        getBlogs('requested');
    }, [])
    const getBlogsCatagory = () => {
        axiosClient.get('/all-blogs-catagory')
            .then(({ data }) => {
                console.log('catagory data is  : ' + data);
                console.log(data);
                setCatagories(data);
            })
    }

    const getBlogs = (pram) => {
        console.log('Search call with : ' + pram);
        const payload = {
            type: pram,
        }
        axiosClient.post('/blog-query', payload)
            .then(({ data }) => {
                console.log(data);
                setBlogs(data);
            })
    }

    const onApprove = (bid) => {
        const payload = {
            id: bid,
            field: 'is_varified',
            value: 'yes',
        }
        axiosClient.post('/update-blog',payload)
            .then(() => {
                console.log('approve success');
                getBlogs('requested');
            })
    }


    return (
        <div className='h-full'>
            <div className="h-[100%] relative">

                {/* Content */}
                <div className="flex flex-col  h-[100%]">


                    {/* Heading */}
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-items-center">

                            <h2 className='text-2xl font-semibold text-blue-900'>Requested Blog</h2>
                            
                            {/* {users && <div className="text-blue-800 text-2xl font-semibold">({users.length})</div>
                            } */}
                        </div>
                    </div>

                    {/* members list */}
                    <div className="h-[94%] bg-white">
                        <div className="overflow-auto flex flex-col mt-4 max-h-[95%]">
                            {loading
                                ? <div className=" flex m-auto text-blue-800 text-5xl">Loading...</div>
                                :
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {
                                        blogs.map(b => (
                                            <div className=' flex flex-col m-2 bg-blue-50 p-2 rounded-md'>
                                                <div className="flex flex-row items-center">
                                                    <h3 className='font-semibold text-blue-700 mr-2'>Blog Id:</h3>
                                                    <p className=' text-blue-700'>{b.id}</p>
                                                </div>
                                                <div className="flex flex-row items-center">
                                                    <h3 className='font-semibold text-blue-700 mr-2'>Blog Writer Id:</h3>
                                                    <p className=' text-blue-700'>{b.writter_id}</p>
                                                </div>
                                                <div className="flex flex-row items-center">
                                                    <h3 className='font-semibold text-blue-700 mr-2'>Catagory Id:</h3>
                                                    <p className=' text-blue-700'>{b.catagory_id}</p>
                                                </div>
                                                <div className="flex flex-row items-center">
                                                    <h3 className='font-semibold text-blue-700 mr-2'>Blog Content:</h3>
                                                    <p className=' text-blue-700'>{b.blog_content}</p>
                                                </div>
                                                <div className="flex flex-row items-center">
                                                    <h3 className='font-semibold text-blue-700 mr-2'>Is varified:</h3>
                                                    <p className=' text-blue-700'>{b.is_varified}</p>
                                                </div>
                                                <div className='flex flex-row space-x-4 my-3 justify-end'>
                                                    <div onClick={ev => removeUserFromLIst(u.id)} className="cursor-pointer bg-red-600 text-white px-2 py-1 font-semibold rounded-lg">Reject</div>
                                                    <div onClick={ev => onApprove(b.id)} className="cursor-pointer bg-green-600 text-white px-2 py-1 font-semibold rounded-lg">Approve</div>
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
        </div>
    )
}

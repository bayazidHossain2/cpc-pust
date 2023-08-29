import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../../axios-client';

export default function AllBlogs() {
    const [loading, setLoading] = useState(false);
    const [catagories, setCatagories] = useState([]);
    const blogCatagory = useRef();


    useEffect(() => {
        // getUsers();
        getBlogsCatagory();
    }, [])
    const getBlogsCatagory = () => {
        axiosClient.get('/all-blogs-catagory')
            .then(({data}) => {
                console.log('catagory data is  : '+data);
                console.log(data);
                setCatagories(data);
            })
    }


    return (
        <div className='h-full'>
            <div className="h-[100%] relative">
                
                {/* Content */}
                <div className="flex flex-col  h-[100%]">


                    {/* Heading */}
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row">
                            
                            <select ref={blogCatagory} className='p-1 rounded-md bg-blue-100 text-blue-800 text-2xl font-semibold' name="userType" id="userType">
                                <option value="%"><h2 className='text-2xl font-semibold text-blue-900'>All</h2></option>
                                {
                                    catagories.map(c => (

                                        <option value={c.catagory}><h2 className='text-2xl font-semibold text-blue-900'>{c.catagory}</h2></option>
                                    ))

                                }
                                
                            </select>
                            {/* {users && <div className="text-blue-800 text-2xl font-semibold">({users.length})</div>
                            } */}
                        </div>
                        <div className="">
                            
                            <div className="flex flex-col space-y-2 items-center sm:flex-row sm:space-x-1">
                                <h4 className='text-blue-800 font-semibold self-center'>Search by(year/dept/serial/event-id):</h4>
                                
                                <div onClick={ev => search()} className=' bg-blue-700 cursor-pointer text-white font-semibold w-20 self-end px-2 py-1 rounded-md'>Search</div>
                            </div>
                        </div>
                    </div>

                    {/* members list */}
                    <div className="h-[94%] bg-white">
                        <div className="overflow-auto flex flex-col mt-4 max-h-[95%]">
                            {loading
                                ? <div className=" flex m-auto text-blue-800 text-5xl">Loading...</div>
                                :
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {/* {
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
                                    } */}

                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

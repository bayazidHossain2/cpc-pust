import React, { Component, useState } from 'react'
import ss from '/profile/subirsaha.jpg'
import edit_icon from '/Logo/edit.png'
import avater from '/profile/avater.webp'
import { useStateContext } from '../../contexts/contextProvider'
import { useNavigate } from "react-router-dom";
import axiosClient from '../../axios-client'

export default function Profile() {

    const { user } = useStateContext();
    const navigate = useNavigate();
    const [type, setType] = useState('')
    const [nameBox, setnameBox] = useState(false);
    const [imgBox, setimgBox] = useState(false);
    const [linksBox, setlinksBox] = useState(false);
    const [contuctBox, setcontuctBox] = useState(false);

    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [image, setImage] = useState(null);
    const [linkedin, setLinkedin] = useState();
    const [git, setGit] = useState();
    const [studentId, setStudentId] = useState();
    const [session, setSession] = useState();
    const [phone, setPhone] = useState();
    const [passingYear, setPassingYear] = useState();



    const closeBox = () => {
        setType('');
        setnameBox(false);
        setimgBox(false);
        setlinksBox(false);
        setcontuctBox(false);
    }
    const onEdit = () => {
        setName(user.name);
        setDept(user.department);
        setType('Edit Name and Department')
        setnameBox(true);
    }
    const onImg = () => {
        setImage('');
        setType('Edit Image');
        setimgBox(true);
    }
    const onLinkEdit = () => {
        setLinkedin(user.linked_in);
        setGit(user.git);
        setType('Edit Links');
        setlinksBox(true);
    }
    const onContuctEdit = () => {
        setType('Edit Contact Information');
        setcontuctBox(true);
        setStudentId(user.s_id);
        setSession(user.session);
        setPhone(user.phone);
        setPassingYear(user.passing_year);
    }

    // Save Name Functions
    const updateName = () => {
        const payload = {
            id: user.id,
            name: name,
            dept: dept
        }
        console.log(payload);
        axiosClient.post('/update-user-name', payload)
            .then(() => {
                console.log('Name update success');
                closeBox();
                navigate('/profile')
            })
    }

    // Save image Functions
    const updateProfile = () => {
        if (image == null) {
            closeBox();
            return;
        }

        console.log('value of image is : ');
        console.log(image);
        const data = new FormData();
        data.append('id', user.id);
        data.append('image', image);
        console.log(data);
        axiosClient.post('/update-user-profile', data)
            .then(() => {
                console.log('profile update success');
                closeBox();
                navigate('/profile')
            })
    }
    // Save Links Functions
    const updateLinks = () => {
        const payload = {
            id: user.id,
            linked_in: linkedin,
            git: git
        }
        console.log(payload);
        axiosClient.post('/update-user-links', payload)
            .then(() => {
                console.log('Name update success');
                closeBox();
                navigate('/profile')
            })
    }
    // Save Contact Functions
    const updateContact = () => {
        const payload = {
            id: user.id,
            s_id: studentId,
            session: session,
            phone: phone,
            passingYear: passingYear,
        }
        console.log(payload);
        axiosClient.post('/update-user-contact', payload)
            .then(() => {
                console.log('Name update success');
                closeBox();
                navigate('/profile')
            })
    }
    console.log(user);
    return (
        <div className="relative">

            <div className={type ? " opacity-50 pointer-events-none cursor-default" : 'bg-slate-200 p-10'}>
                <div className="flex flex-col bg-slate-100 w-[80%] rounded-xl p-20 mx-auto">
                    <div className="flex flex-row justify-between">
                        {/* Name Details */}
                        <div className="flex flex-col mt-6">
                            <h2 className='text-3xl font-bold'>{user.name}</h2>
                            <h2 className='text-xl font-semibold'>Department of {user.department}</h2>
                            <h2 className='text-xl'>Pabna Universiry of Science and Technology</h2>
                            <button onClick={onEdit} className=' self-start bg-blue-900 text-white px-2 py-1 rounded-md text-xl mt-2'>Edit</button>
                        </div>
                        {/* Profile image */}
                        <div className=" border-4 border-blue-600 self-center rounded-xl">
                            {user.profile_image ?
                                <img onClick={onImg} src={"http://localhost:8000/image/profile/" + user.profile_image} className='h-40 w-40 rounded-xl p-1' />
                                : <img onClick={onImg} src={avater} className='h-40 w-40 rounded-xl p-1' />
                            }
                        </div>
                    </div>
                    <h2 className='text-xl mt-10 font-bold'>Skills</h2>

                    <hr className='my-16' />
                    <div className="flex flex-col justify-between lg:flex-row">
                        <div className="min-w-[45%] border-2 p-5 m-5 border-blue-900 rounded-xl">
                            <div className="flex flex-row justify-between">
                                <h2 className='text-xl font-bold'>Links</h2>
                                <img onClick={onLinkEdit} className='w-10 h-10 px-1 pb-2 rounded-lg hover:bg-blue-200' src={edit_icon} />
                            </div>
                            <div className="flex flex-col mt-5 space-y-3">
                                <a href={user.linked_in} target="_blank" className='text-sm cursor-pointer w-[80%] text-center font-bold px-2 py-2 border-4 border-blue-900 rounded-xl text-white bg-blue-950 hover:bg-blue-800'>{user.linked_in ? 'View My Linked In Profile' : 'Linked In Profile not found'}</a>
                                <a href={user.git} target="_blank" className='text-sm cursor-pointer w-[80%] text-center font-bold px-2 py-2 border-4 border-gray-700 rounded-xl text-white bg-gray-800 hover:bg-gray-600'>{user.git ? 'View My Git Hub Profile' : 'Git Profile not found'}</a>
                                <h2 className='text-lg font-semibold'>Online Judge</h2>
                                <button className='text-sm  font-bold px-2 py-2 border-4 border-gray-400 rounded-xl text-white bg-gray-600 hover:bg-gray-700'>View My Code Forces Profile</button>
                                <button className='text-sm  font-bold px-2 py-2 border-4 border-gray-400 rounded-xl text-white bg-gray-600 hover:bg-gray-700'>View My UVA Profile</button>
                                <button className='text-sm  font-bold px-2 py-2 border-4 border-gray-400 rounded-xl text-white bg-gray-600 hover:bg-gray-700'>View My Lead Code Profile</button>
                                <button className='text-sm  font-bold px-2 py-2 border-4 border-gray-400 rounded-xl text-white bg-gray-600 hover:bg-gray-700'>View My Light OJ Profile</button>
                                <button className='text-sm  font-bold px-2 py-2 border-4 border-gray-400 rounded-xl text-white bg-gray-600 hover:bg-gray-700'>View My Code Panja Profile</button>
                            </div>
                        </div>
                        <div className=" min-w-[45%] border-2 p-5 m-5 border-blue-900 rounded-xl">
                            <div className="flex flex-row justify-between">
                                <h2 className='text-xl font-bold'>Contact</h2>
                                <img onClick={onContuctEdit} className='w-10 h-10 px-1 pb-2 rounded-lg hover:bg-blue-200' src={edit_icon} />
                            </div>
                            <div className="flex flex-col space-y-3">
                                <div className="flex flex-col">
                                    <h3 className=' text-blue-900 font-bold'>Student ID:</h3>
                                    <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>{user.s_id}</div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className=' text-blue-900 font-bold'>Session:</h3>
                                    <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>{user.session}</div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className=' text-blue-900 font-bold'>Phone:</h3>
                                    <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>
                                        {user.phone ? user.phone : 'Not Available'}

                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className=' text-blue-900 font-bold'>Email:</h3>
                                    <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>{user.email}</div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className=' text-blue-900 font-bold'>Passing Year:</h3>
                                    <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>
                                        {user.passing_year ? user.passing_year : 'Not Available'}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Box Container  */}
            <div className={type ? "fixed rounded-lg pb-16 bg-slate-300 bg-opacity-80 p-8 top-24 min-h-fit w-[60%] left-[20%]" : " hidden "}>
                <div className="flex flex-col">
                    <div className="flex flex-row mb-4 justify-between">
                        <h2 className=' text-2xl font-bold text-blue-900'>{type}</h2>
                        <button onClick={closeBox} className=' bg-slate-800 rounded-md text-white px-3'>Close</button>
                    </div>
                    {/* Content */}
                    {nameBox ?
                        // Edit Name 
                        <div className="flex flex-col space-y-2">
                            <div className="flex flex-col">
                                <h3 className='text-xl text-blue-900 font-semibold'>Name:</h3>
                                <input value={name} onChange={ev => setName(ev.target.value)} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="text" />
                            </div>
                            <div className="flex flex-col">
                                <h3 className='text-xl text-blue-900 font-semibold'>Department:</h3>
                                <input value={dept} onChange={ev => setDept(ev.target.value)} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="text" />
                            </div>
                            <button onClick={updateName} className='w-28 py-2 self-end font-bold bg-green-600 rounded-md text-white px-3'>Save</button>

                        </div>
                        : imgBox ?
                            // Edit Image 
                            <div className="flex flex-col space-y-2">
                                <img src="" alt="" />
                                {user.profile_image ?
                                    <div className="flex flex-row justify-center ">
                                        <img className='max-h-80 border-4 border-blue-300 rounded-sm ' src={"http://localhost:8000/image/profile/" + user.profile_image} alt="your profile image" />
                                    </div>
                                    :
                                    <div className="flex flex-row w-[50%] bg-pink-200 p-10 h-80 self-center rounded-xl border-4 border-pink-600">
                                        <h3 className='text-xl text-center self-center'>You don't set any image to your profile yet.</h3>
                                    </div>
                                }
                                <div className="flex flex-col">
                                    <h3 className='text-xl text-blue-900 font-semibold'>Upload a image</h3>
                                    <input onChange={(ev) => {
                                        setImage(ev.target.files[0]);
                                        console.log(ev.target.files[0])
                                    }} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="file" />
                                </div>
                                <button onClick={updateProfile} className='w-28 py-2 self-end font-bold bg-green-600 rounded-md text-white px-3'>Save</button>

                            </div>
                            : linksBox ?
                                // Edit Links
                                <div className="flex flex-col space-y-2">
                                    <div className="flex flex-col space-y-2 overflow-y-scroll max-h-[60vh]">
                                        <div className="flex flex-col">
                                            <h3 className='text-xl text-blue-900 font-semibold'>Linked In Profile URL:</h3>
                                            <input value={linkedin} onChange={ev => setLinkedin(ev.target.value)} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="text" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h3 className='text-xl text-blue-900 font-semibold'>Git Profile URL:</h3>
                                            <input value={git} onChange={ev => setGit(ev.target.value)} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="text" />
                                        </div>
                                    </div>
                                    <button onClick={updateLinks} className='w-28 py-2 self-end font-bold bg-green-600 rounded-md text-white px-3'>Save</button>

                                </div>
                                : contuctBox ?
                                    // Edit Contuct
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex flex-col space-y-2 overflow-y-scroll max-h-[60vh]">
                                            <div className="flex flex-col">
                                                <h3 className='text-xl text-blue-900 font-semibold'>Student Id:</h3>
                                                <input value={studentId} onChange={ev => setStudentId(ev.target.value)} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="text" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className='text-xl text-blue-900 font-semibold'>Session:</h3>
                                                <input value={session} onChange={ev => setSession(ev.target.value)} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="text" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className='text-xl text-blue-900 font-semibold'>Phone:</h3>
                                                <input value={phone} onChange={ev => setPhone(ev.target.value)} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="text" />
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 className='text-xl text-blue-900 font-semibold'>Passing Year:</h3>
                                                <input value={passingYear} onChange={ev => setPassingYear(ev.target.value)} className='text-lg px-2 py-2 border-2 border-blue-900 rounded-xl text-black' type="text" />
                                            </div>
                                        </div>
                                        <button onClick={updateContact} className='w-28 py-2 self-end font-bold bg-green-600 rounded-md text-white px-3'>Save</button>

                                    </div>
                                    :
                                    <div className="">

                                    </div>

                    }
                </div>
            </div>
        </div>

    )
}

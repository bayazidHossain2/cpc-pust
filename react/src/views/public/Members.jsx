import React, { useEffect, useRef, useState } from 'react'
import nkp from '/profile/nitun.jpg'
import avater from '/profile/avater.webp'
import axiosClient from '../../axios-client';

export default function MembersU() {
  const [people, setPeople] = useState([]);
  const [details, setDetails] = useState(false);
  const [userD, setUserD] = useState();
  const [type, setType] = useState('People');

  const yearRef = useRef();
  const deptRef = useRef();
  const serialRef = useRef();


  useEffect(() => {
    // getUsers();
    getMembers();
  }, [])
  const getAdvisors = () => {
    console.log('Member search click');
    setPeople([]);
    setType('Advisors');
    axiosClient.get('/advisor-user')
      .then(({ data }) => {
        console.log('data is : ');
        console.log(data);
        setPeople(data);
      })
  }
  const getTeam = () => {
    console.log('Member search click');
    setPeople([]);
    setType('Team Members');
    const payload = {
      u_type: 'Team',
    }
    axiosClient.post('/user-query', payload)
      .then(({ data }) => {
        console.log('data is : ');
        console.log(data);
        setPeople(data);
      })
  }
  const getMembers = () => {
    console.log('Member search click');
    setPeople([]);
    setType('People');
    const payload = {
      u_type: 'Member',
    }
    axiosClient.post('/member-user-query', payload)
      .then(({ data }) => {
        console.log('data is : ');
        console.log(data);
        setPeople(data);
      })
  }

  const getPeople = (uid) => {
    console.log('uid is : ' + uid);
    setDetails(true);
    setUserD(null);
    const payload = {
      id: uid,
    }
    axiosClient.post('/get-user', payload)
      .then(({ data }) => {
        console.log('data is : ');
        console.log(data);
        setUserD(data);
      })
  }
  const getSearch = () => {
    setPeople(null);
    const payload = {
      year: yearRef.current.value,
      dept: deptRef.current.value,
      serial: serialRef.current.value,
    }
    axiosClient.post('/member-user-query', payload)
      .then(({ data }) => {
        console.log('data is : ');
        console.log(data);
        setPeople(data);
      })
  }

  return (
    <div className="relative">
      <div className={details ? 'flex flex-row opacity-50 pointer-events-none cursor-default' : 'flex flex-row bg-slate-200'}>
        {/* Search option */}
        <div className=" hidden w-1/3 h-full shadow-md lg:block m-10 p-10 rounded-lg bg-slate-50">
          <h2 className='text-xl font-bold'>Filter</h2>
          <div className="flex flex-col mt-2 space-y-2">
            <button onClick={getAdvisors} className='border-2 border-blue-600 py-1 bg-blue-50 rounded-md hover:bg-blue-200'>Advisors Only</button>
            <button onClick={getTeam} className='border-2 border-blue-600 py-1 bg-blue-50 rounded-md hover:bg-blue-200'>Team Only</button>
            <button onClick={getMembers} className='border-2 border-blue-600 py-1 bg-blue-50 rounded-md hover:bg-blue-200'>All Member</button>
          </div>
          <h2 className='text-xl font-bold mt-10'>Search</h2>
          <div className="flex flex-col my-2 space-y-2">
            <div className="flex flex-row w-full space-x-2">
              <div className="">
                <h2 className=' font-bold text-blue-900 px-1'>Year : </h2>
                <input ref={yearRef} className='text-lg w-full px-2 py-1 border-2 border-blue-900 rounded-xl text-black' placeholder='19..' type="text" />
              </div>
              <div className="">
                <h2 className=' font-bold text-blue-900 px-1'>Dept. : </h2>
                <input ref={deptRef} className='text-lg w-full px-2 py-1 border-2 border-blue-900 rounded-xl text-black' placeholder='01..' type="text" />
              </div>
              <div className="">
                <h2 className=' font-bold text-blue-900 px-1'>Serial : </h2>
                <input ref={serialRef} className='text-lg w-full px-2 py-1 border-2 border-blue-900 rounded-xl text-black' placeholder='01..' type="text" />
              </div>
            </div>
            {/* Search Button */}
            <button onClick={getSearch} className='w-[30%] border-2 text-white font-semibold self-end border-blue-600 py-1 bg-blue-900 rounded-md hover:bg-blue-800' >Search</button>
          </div>
        </div>
        {/* People */}
        <div className="w-full shadow-md min-h-[80vh] my-10 mr-10 p-10 rounded-lg bg-slate-50">
          <h2 className='text-xl font-bold'>{type}</h2>
          {/* Peoples Container */}
          <div className="grid grid-cols-1 mt-5 gap-6 md:grid-cols-2">
            {(people == null) ?
              <div className="">
                No User Found
              </div>
              :
              people.map(user => (
                // {/* Component */}
                <div className="flex flex-row space-x-2 bg-slate-200 border-2 border-slate-300 rounded-md shadow-md p-5">
                  <div onClick={(ev) => { ev.preventDefault(); getPeople(user.id) }} className="w-1/3 cursor-pointer hover:border-blue-600">
                    {user.profile_image ?
                      <img className='border-2 border-blue-800 rounded-md shadow-md hover:border-4' src={'http://localhost:8000/image/profile/' + user.profile_image} alt="" />
                      :
                      <img className='border-2 border-blue-800 rounded-md shadow-md hover:border-4' src={avater} alt="" />
                    }
                  </div>
                  <div className="">
                    <h2 onClick={(ev) => { ev.preventDefault(); getPeople(user.id) }} className=' text-xl font-bold text-blue-900 px-1 rounded-md  hover:bg-blue-200'>{user.name}</h2>
                    <div className="flex flex-row">
                      <h2 className=' text-md font-semibold text-blue-900 px-1'>Dept:</h2>
                      <h2 className=' text-md text-blue-900 px-1'> {user.department}</h2>
                    </div>
                    <div className="flex flex-row">
                      <h2 className=' text-md font-semibold text-blue-900 px-1'>Session:</h2>
                      <h2 className=' text-md text-blue-900 px-1'> {user.session}</h2>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* Box Container  */}
      {userD ?
        <div className={details ? "absolute rounded-lg pb-16 shadow-xl bg-slate-300 bg-opacity-90 p-8 top-10 right-10 left-10 min-h-fit mx-auto w-[70%] " : " hidden "}>
          <div className="flex flex-col">
            <div className="flex flex-row mb-4 justify-between">
              <h2 className=' text-2xl font-bold text-blue-900'>Profile Details</h2>
              <button onClick={() => setDetails(false)} className=' bg-slate-800 rounded-md text-white px-3'>Close</button>
            </div>
            {/* Content Profile*/}
            <div className="flex flex-col shadow-md bg-slate-100 w-[90%] rounded-xl p-20 mx-auto">
              <div className="flex flex-row justify-between">
                {/* Name Details */}
                <div className="flex flex-col mt-6">
                  <h2 className='text-3xl font-bold'>{userD.name}</h2>
                  <h2 className='text-xl font-semibold'>Department of {userD.department}</h2>
                  <h2 className='text-xl'>Pabna Universiry of Science and Technology</h2>
                </div>
                {/* Profile image */}
                <div className=" border-4 border-blue-600 self-center rounded-xl">
                  {userD.profile_image ?
                    <img src={"http://localhost:8000/image/profile/" + userD.profile_image} className='h-40 w-40 rounded-xl p-1' />
                    : <img src={avater} className='h-40 w-40 rounded-xl p-1' />
                  }
                </div>
              </div>
              <h2 className='text-xl mt-10 font-bold'>Skills</h2>

              <hr className='my-16' />
              <div className="flex flex-col justify-between lg:flex-row">
                <div className="min-w-[45%] border-2 p-5 m-5 border-blue-900 rounded-xl">
                  <div className="flex flex-row justify-between">
                    <h2 className='text-xl font-bold'>Links</h2>
                  </div>
                  <div className="flex flex-col mt-5 space-y-3">
                    <a href={userD.linked_in} target="_blank" className='text-sm cursor-pointer w-[80%] text-center font-bold px-2 py-2 border-4 border-blue-900 rounded-xl text-white bg-blue-950 hover:bg-blue-800'>{userD.linked_in ? 'View My Linked In Profile' : 'Linked In Profile not found'}</a>
                    <a href={userD.git} target="_blank" className='text-sm cursor-pointer w-[80%] text-center font-bold px-2 py-2 border-4 border-gray-700 rounded-xl text-white bg-gray-800 hover:bg-gray-600'>{userD.git ? 'View My Git Hub Profile' : 'Git Profile not found'}</a>
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
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-col">
                      <h3 className=' text-blue-900 font-bold'>Student ID:</h3>
                      <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>{userD.s_id}</div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className=' text-blue-900 font-bold'>Session:</h3>
                      <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>{userD.session}</div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className=' text-blue-900 font-bold'>Phone:</h3>
                      <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>
                        {userD.phone ? userD.phone : 'Not Available'}

                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className=' text-blue-900 font-bold'>Email:</h3>
                      <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>{userD.email}</div>
                    </div>
                    <div className="flex flex-col">
                      <h3 className=' text-blue-900 font-bold'>Passing Year:</h3>
                      <div className='text-sm px-2 py-2 border-2 border-blue-900 rounded-xl text-black font-semibold'>
                        {userD.passing_year ? userD.passing_year : 'Not Available'}

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        :
        <div className=""></div>
      }
    </div>
  )
}

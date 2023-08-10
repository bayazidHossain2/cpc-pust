import React, { useEffect, useState } from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/contextProvider'
import menue_btn_logo from "../assets/images/menue_btn_logo.webp";
import axiosClient from '../axios-client';


export default function DefaultLayout() {


  const { user, token, setUser, setToken } = useStateContext()
  const [bottomMenue, setBottomMenue] = useState(false);
  const [usersActive, setUserActive] = useState(false);
  const [eventsActive, setEventsActive] = useState(false);
  const [blogsActive, setBlogsActive] = useState(false);
  const [mailActive, setMailActive] = useState(false)


  useEffect(() => {
    axiosClient.get('/user')
    .then(({data}) => {
      setUser(data);
      console.log('data added');
    })
  }, [])

  if (!token) {
    return <Navigate to="/login" />
  }

 

  const onLogout = (ev) => {
    ev.preventDefault()

    console.log('logout click');

    axiosClient.post('/logout')
    .then(() => {
      setUser({})
      setToken(null)
      console.log('logout Success');
    })
    .catch(err => {
      response = err.response;
      console.log('log out fail');
      console.log(response);
    })
  }


 

  const menueToggle = (ev) => {

    ev.preventDefault();
    setBottomMenue(!bottomMenue);

  }

  const usersListener = () => {

    console.log('Onclicked');
    setUserActive(!usersActive);
  }

  const eventsListener = () => {
    setEventsActive(!eventsActive);
  }
  const blogsListener = () => {
    setBlogsActive(!blogsActive);
  }

  const mailListener = () => {
    setMailActive(!mailActive);
  }


  return (
    <div className=' relative'>
      {/* Manue option  */}
      <div onClick={menueToggle} className=" w-10 h-10 rounded-lg absolute bottom-6 right-6 md:hidden">
        <img src={menue_btn_logo} alt="img" />
      </div>
      {/* Bottom menue for small screen */}
      <div className=" bg-blue-400 bg-opacity-50 absolute bottom-10 right-16 rounded-lg md:hidden">
        <div className={bottomMenue ? "" : "hidden"}>
          <div className=' flex flex-col space-y-3 p-3 text-white'>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/dashboard">Dashboard</Link>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/users">Users</Link>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/events">Eventsss</Link>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/blogs">Blogs</Link>
            <Link className=' bg-blue-700 p-2 rounded-md ' to="/notify">Notify Via Mailing</Link>
          </div>
        </div>

      </div>
      {/* Aside Menue for big screen */}
      <div className='flex flex-row w-full h-screen'>
        <aside className='hidden flex-col space-y-3 bg-blue-500 text-white p-4 w-1/4 md:pt-8 md:pl-4 md:flex'>
          <h3 className=' text-2xl font-bold mt-3 mx-auto'>Admin</h3>
          <ul className="overflow-auto flex flex-col space-y-3">
            {/* Dashboard */}
            <li onClick={usersListener} className='flex flex-row items-center hover:text-slate-200 p-2 text-left font-bold cursor-pointer '>
              <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              Dashboard

            </li>
            {/* Users */}
            <li className='flex flex-col p-2 text-left font-bold cursor-pointer '>
              <div onClick={usersListener}  className="flex flex-row items-center ">
                <svg className={usersActive ? 'w-8 h-8' : 'w-6 h-6'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>

                Users
              </div>
              {/* User sub item */}
              <div className={usersActive ? '' : 'hidden'}>
                <ol className='ml-6 font-semibold flex flex-col space-y-2'>
                  <li>
                    <Link to="/advisor">Advisor</Link>
                  </li>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/member">Member</Link>
                  </li>
                  <li>
                    <Link to="/userrequest">Requested User</Link>
                  </li>
                </ol>
              </div>
            </li>

            {/* Events */}
            <li className='flex flex-col p-2 text-left font-bold cursor-pointer '>
              <div  onClick={eventsListener} className="flex flex-row items-center ">
              <svg className={eventsActive ? 'w-8 h-8' : "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
              </svg>

                Events
              </div>
              {/* events sub item */}
              <div className={eventsActive ? '' : 'hidden'}>
                <ol className='ml-6 font-semibold flex flex-col space-y-2'>
                  <li>
                    <Link to="/blogs">Create new events +</Link>
                  </li>
                  <li>
                    <Link to="/blogs">All events</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Running events</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Previous events</Link>
                  </li>
                </ol>
              </div>
            </li>

            {/* blogs */}
            <li className='flex flex-col p-2 text-left font-bold cursor-pointer '>
              <div onClick={blogsListener} className="flex flex-row items-center ">
              <svg  className={blogsActive ? 'w-8 h-8' : "w-6 h-6"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>

                Blogs
              </div>
              {/* blogs sub item */}
              <div className={blogsActive ? '' : 'hidden'}>
                <ol className='ml-6 font-semibold flex flex-col space-y-2'>
                  <li>
                    <Link to="/blogs">Add new Catagory +</Link>
                  </li>
                  <li>
                    <Link to="/blogs">All blogs</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Publish request</Link>
                  </li>
                </ol>
              </div>
            </li>
            

            {/* Mailing */}
            <li onClick={mailListener} className='flex flex-row items-center p-2 text-left font-bold cursor-pointer '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={mailActive ? "w-8 h-8" : 'w-6 h-6'}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
              </svg>

              Notify via Mailing</li>

          </ul>

        </aside>

        <div className="content flex flex-col bg-blue-50 w-full">

          {/* Heading section */}
          <header className=' bg-blue-300 m-3 p-6 rounded-lg py-6 flex flex-row justify-between items-center'>
            <div>
              <h3 className=' text-xl font-bold text-blue-950'>Heding Text</h3>
            </div>
            <div className='flex flex-col'>
              <h5 className=' text-blue-950 font-semibold'>{user.name}</h5>
              <button onClick={onLogout} className=' px-2 py-1 rounded-sm bg-blue-200 text-red-700'>Logout</button>
            </div>
          </header>
          {/* Container Body section */}
          <main className='m-3 mt-3 p-4 rounded-sm h-full  bg-blue-100'>

            <Outlet />
          </main>
        </div>
      </div>

    </div>
  )
}

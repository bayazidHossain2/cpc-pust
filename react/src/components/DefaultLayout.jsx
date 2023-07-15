import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/contextProvider'

export default function DefaultLayout() {


    const {user, token} = useStateContext()

    if(!token){
        return <Navigate to="/login" />
    }

    const onLogout = (ev) => {
      ev.preventDefault()
    }

    
  return (
    <div className='flex flex-row w-full h-screen'>
      <aside className=' flex flex-col space-y-3 bg-blue-500 text-white p-4 w-1/4 md:pt-8 md:pl-8'>
        <h3 className=' text-2xl font-bold mt-3 mx-auto'>Admin</h3>
        <Link className=' bg-blue-800 p-2 rounded-md ' to="/dashboard">Dashboard</Link>
        <Link className=' bg-blue-800 p-2 rounded-md ' to="/users">Users</Link>
        <Link className=' bg-blue-800 p-2 rounded-md ' to="/users">Enents</Link>
        <Link className=' bg-blue-800 p-2 rounded-md ' to="/users">Blogs</Link>
        <Link className=' bg-blue-800 p-2 rounded-md ' to="/users">Notify Via Mailing</Link>
      </aside>

      <div className="content flex flex-col bg-blue-50 w-full">
        <header className=' bg-blue-300 m-3 p-6 rounded-lg py-6 flex flex-row justify-between items-center'>
          <div>
            <h3 className=' text-xl font-bold text-blue-950'>Heding Text</h3>
          </div>
          <div className='flex flex-col'>
            <h5 className=' text-blue-950 font-semibold'>{user.name}</h5>
            <button onClick={onLogout} className=' text-red-700'>Logout</button>
          </div>
        </header>
        <main className='m-3 mt-7 p-4 rounded-sm h-full bg-blue-100'>

          <Outlet />  
        </main>
      </div>


    </div>
  )
}

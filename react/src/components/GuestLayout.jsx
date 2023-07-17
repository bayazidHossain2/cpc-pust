import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/contextProvider'

export default function GuestLayout() {
  const { token } = useStateContext()
  if (token) {
    return <Navigate to="/" />
  }


  return (
    <div>
      <div className=" bg-stone-200">
        <header className="h-16 bg-pink-50"></header>
        <div className=' flex flex-col w-[90%] mt-16 mb-16 mx-auto bg-white p-6 rounded-lg sm:w-[70%] md:space-x-4 md:flex-row'>
          <div className=" w-full md:w-1/2">
            <h3 className=" text-3xl font-bold text-blue-900">Welcome To</h3>
            <h4 className="text-xl font-bold text-blue-500">Computer & Programming Club, PUST</h4>
            <p className=' text-sm font-bold text-blue-400'>Please login to continue</p>
          </div>
          <div className=" w-full md:w-1/2 mt-8">

            <Outlet />
          </div>
        </div>
        <footer className=' h-48 bg-pink-50'>
          This is footer
        </footer>
      </div>

    </div>
  )
}

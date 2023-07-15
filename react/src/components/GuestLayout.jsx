import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/contextProvider'

export default function GuestLayout() {
    const {token} = useStateContext()
    if(token){
        return <Navigate to="/" /> 
    }


  return (
    <div>

        <h1 className='p-10 bg-indigo-600 text-6xl font-bold text-white h-screen'> Hello</h1>Guest User
        <Outlet />
      
    </div>
  )
}

import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div>
      <form>
        {/* Name  */}
        <div className='inp-component'>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <div className="mt-1">
            <input ref={nameRef} type="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your Name." />
          </div>
        </div>
        {/* Email  */}
        <div className='inp-component mt-4'>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <div className="mt-1">
            <input ref={emailRef} type="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your email." />
          </div>
        </div>

        {/* Department */}
        <div className='inp-component mt-4'>
          <label className="block text-sm font-medium text-slate-700">Department</label>
          <div className="mt-1">
            <select name="dept" id="dept" className=' px-3 py-2 bg-white border shadow-sm border-slate-300 text-slate-500 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' >
              <option className='' value="">Chose your Department</option>
              <option id='1' value="Computer Science and Engineering">Computer Science and Engineering</option>
              <option id='2' value="Electrical and Electronic Engineering">Electrical and Electronic Engineering</option>
              <option id='3' value="Information and Communication Engineering">Information and Communication Engineering</option>
            </select>
          </div>
        </div>

        {/* Student id and Session */}
        <div className="flex flex-row space-x-6">
          {/* Student id  */}
          <div className='inp-component mt-4'>
            <label className="block text-sm font-medium text-slate-700">Student id</label>
            <div className="mt-1">
              <input ref={emailRef} type="number" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your roll." />
            </div>
          </div>
          {/* Session  */}
          <div className='inp-component mt-4'>
            <label className="block text-sm font-medium text-slate-700">Session</label>
            <div className="mt-1">
              <input ref={emailRef} type="text" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="2018-19" />
            </div>
          </div>
        </div>
        {/* password  */}
        <div className="inp-component mt-4">
          <label className="block text-sm font-medium text-slate-700">Password</label>
          <div className="mt-1">
            <input ref={passwordRef} type="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password." />
          </div>
        </div>
        {/* Confirm Password  */}
        <div className="inp-component mt-4">
          <label className="block text-sm font-medium text-slate-700">Confirm Password</label>
          <div className="mt-1">
            <input ref={passwordRef} type="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password again." />
          </div>
        </div>

        <div className="mt-1 text-right">
          <Link className=" hover:text-blue-500 pt-2.5 text-sm leading-5 rounded-md font-semibold text-blue-300 cursor-pointer" to="/login">Already have an account? goto sign in.
          </Link>
        </div>
        <div className="mt-6 text-right">
          <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

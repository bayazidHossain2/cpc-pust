import React, { useRef} from 'react'

export default function Login() {

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div >
      <div className="">
        <form>
          <div className=''>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <div className="mt-1">
              <input ref={emailRef} type="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your email." onChange={({value}) => {
                console.log(value);
              }} />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <div className="mt-1">
            <input ref={passwordRef} type="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password." />
           </div>
          </div>
          <div className="mt-6 text-right">
            <button className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

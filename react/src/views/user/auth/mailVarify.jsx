import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../../../axios-client';

export default function MailVarify() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const varifyRef = useRef();

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [varifySucc, setVarifySucc] = useState(false);

  const submit = (ev) => {
    // ev.eventPreventDefault();
    setLoading(true);
    setErrors(null);
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      v_code: varifyRef.current.value,
    }

    console.log(payload);

    axiosClient.post('/varify', payload)
      .then(({ data }) => {
        console.log('varification success');
        console.log(data.user);
        console.log(data.token);
        setLoading(false);
        setVarifySucc(true);
      })
      .catch(err => {
        console.log("varification err :" + err);
        const response = err.response;
        console.log(response);
        if (response && response.status === 422) {
          if (response.data.errors) {
            setErrors(response.data.errors);
          } else {
            setErrors({
              email: [response.data.message]
            });
          }
          console.log('----Error seted success');
          window.scrollTo(0, 0)
        }
        setLoading(false);
      })
  }
  return (
    <div >
      {/* Error section */}
      {errors &&
        <div className=" bg-red-500 my-5 p-3 rounded-lg">

          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))

          }
        </div>

      }
      <div className="">
        {varifySucc
          ? <div className=" bg-green-300 p-5 rounded-lg">
            <p> Your Signup application and Mail vairfication done successfully. Now wait at least 5-6 Hour to admin approval.</p>


            <p className="my-3"> After admin approval you will get an mail notification. Then you can login and access user features.</p>

            <div className="flex justify-center text-2xl font-bold pt-10">Thank You very much.</div>
            <div className="flex justify-center text-lg font-semibold pb-8">Stay with CPC, PUST.</div>
          </div>

          : <form>
            <div className=''>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <div className="mt-1">
                <input ref={emailRef} type="email" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your email." onChange={({ value }) => {
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

            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-700">Varification Code</label>
              <div className="mt-1">
                <input ref={varifyRef} type="number" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password." />
              </div>
            </div>

            <div className="mt-1 text-right">
              <Link className=" hover:text-blue-500 pt-2.5 text-sm leading-5 rounded-md font-semibold text-blue-300 cursor-pointer" to="/login">Go Back Login .
              </Link>
            </div>
            <div className="mt-1 text-right">
              <Link className=" hover:text-blue-500 pt-2.5 text-sm leading-5 rounded-md font-semibold text-blue-300 cursor-pointer" to="/signup">New User? Create an account.
              </Link>
            </div>
            <div className={loading ? " opacity-50 pointer-events-none cursor-default mt-6 text-right" : "mt-6 text-right"}>
              <div onClick={submit} className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                Varify and Login
              </div>
            </div>
          </form>
        }
      </div>
    </div>
  )
}

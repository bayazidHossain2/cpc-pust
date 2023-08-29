import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axiosClient from '../../../axios-client';
import { useStateContext } from '../../../contexts/contextProvider';

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const departmentRef = useRef();
  const sidRef = useRef();
  const sessionRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const varifyRef = useRef();

  const [varifySucc, setVarifySucc] = useState(false);

  const { setUser, setToken } = useStateContext()

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mailVarify, setMailVarify] = useState(false);
  const [deptName, setDeptName] = useState(null);
  const [r_email, setremail] = useState(null);
  const [r_password, setrpassword] = useState(null);


  useEffect(() => {
    axiosClient.get('/dept-name')
      .then(({ data }) => {
        //setUser(data);
        console.log('data added');
        console.log(data);
        setDeptName(data);
      })
  }, [])

  const submit = () => {
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      department: departmentRef.current.value,
      sid: sidRef.current.value,
      session: sessionRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: confirmPasswordRef.current.value,
    }
    setLoading(true);
    setErrors(null);
    setremail(emailRef.current.value);
    setrpassword(passwordRef.current.value)

    axiosClient.post('/signup', payload)
      .then(({ data }) => {
        console.log('-----------------')
        console.log(data.user);
        console.log(data.token);
        console.log(data.v_code);

        setLoading(false);
        setMailVarify(true);

      })
      .catch(err => {

        console.log("err :" + err);
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
          setErrors(response.data.errors);
        }
        setLoading(false);
      })

    console.log(payload);
  }

  const varification_submit = (ev) => {
    // ev.eventPreventDefault();
    setLoading(true);
    setErrors(null);
    console.log('reading mail');
    console.log(r_email);
    console.log('reading mail');
    const payload = {
      email: r_email,
      password: r_password,
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
    <div>
      {varifySucc
        ? <div className=" bg-green-300 p-5 rounded-lg">
          <p> Your Signup application and Mail vairfication done successfully. Now wait at least 5-6 Hour to admin approval.</p>


          <p className="my-3"> After admin approval you will get an mail notification. Then you can login and access user features.</p>

          <div className="flex justify-center text-2xl font-bold pt-10">Thank You very much.</div>
          <div className="flex justify-center text-lg font-semibold pb-8">Stay with CPC, PUST.</div>
        </div>
        :
        <div>
          {/* Error section */}
          {errors &&
            <div className=" bg-red-500 my-5 p-3 rounded-lg">

              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))

              }
            </div>

          }
          {mailVarify ?
            // Varify Email
            <div className="">
              <h2 className=' font-bold text-xl text-blue-950'>Mail Varification :</h2>
              <div className={loading ? " opacity-50 pointer-events-none cursor-default mt-6 text-right" : "mt-6 text-right"}>
                <div className="my-6 flex flex-col">
                  <label className="block text-sm font-medium text-slate-700 self-start">Varification Code</label>
                  <div className="mt-1">
                    <input ref={varifyRef} type="number" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password." />
                  </div>
                </div>

                <div onClick={varification_submit} className=" bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                  Varify
                </div>
              </div>
            </div>
            :
            <form>
              <h2 className=' font-bold text-xl text-blue-950'>Registration :</h2>
              {/* Name  */}
              <div className='inp-component'>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <div className="mt-1">
                  <input ref={nameRef} type="text" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your Name." />
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
                  <select ref={departmentRef} name="dept" id="dept" className=' px-3 py-2 bg-white border shadow-sm border-slate-300 text-slate-500 focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1' >
                    <option className='' value="">Chose your Department</option>
                    {deptName &&
                      deptName.map(u => (
                        <option id={u.id} value={u.dept}>{u.id}. {u.dept}</option>

                      ))
                    }
                  </select>
                </div>
              </div>

              {/* Student id and Session */}
              <div className="flex flex-row space-x-6">
                {/* Student id  */}
                <div className='inp-component mt-4'>
                  <label className="block text-sm font-medium text-slate-700">Student id</label>
                  <div className="mt-1">
                    <input ref={sidRef} type="number" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your roll." />
                  </div>
                </div>
                {/* Session  */}
                <div className='inp-component mt-4'>
                  <label className="block text-sm font-medium text-slate-700">Session</label>
                  <div className="mt-1">
                    <input ref={sessionRef} type="text" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="2018-19" />
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
                  <input ref={confirmPasswordRef} type="password" className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter your password again." />
                </div>
              </div>

              <div className="mt-1 text-right">
                <Link className=" hover:text-blue-500 pt-2.5 text-sm leading-5 rounded-md font-semibold text-blue-300 cursor-pointer" to="/login">Already have an account? goto sign in.
                </Link>
              </div>

              {loading &&
                <div className="mt-1 text-center">
                  <div className=" text-blue-500 pt-2.5 text-sm leading-5 rounded-md font-semibold" >Wait for surver response...
                  </div>
                </div>
              }

              <div className={loading ? " opacity-50 pointer-events-none cursor-default mt-6 text-right" : "mt-6 text-right"}>
                <div onClick={submit} className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                  Sign up
                </div>
              </div>
            </form>}
        </div>
      }
    </div>
  )
}

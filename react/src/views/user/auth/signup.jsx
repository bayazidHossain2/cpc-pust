import React, { useRef, useState } from 'react'
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

  const { setUser, setToken } = useStateContext()

  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mailVarify, setMailVarify] = useState(false);

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
    axiosClient.post('/signup', payload)
      .then(({ data }) => {
        console.log('-----------------')
        console.log(data.user);
        console.log(data.token);
        console.log(data.v_code);
        // setUser(data.user)
        // setToken(data.token)

        const load = {
          code: data.v_code,
          mail: emailRef.current.value,
        }
        axiosClient.post('/send-mail', load)
        .then(() => {
          console.log('Mail send successfully');
        })
        .catch(err => {
          console.log("send-mail err :"+err);
        })

        setLoading(false);
        setMailVarify(true);
        
      })
      .catch(err => {

        console.log("err :"+err);
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
          setErrors(response.data.errors);
        }
        setLoading(false);
      })

    console.log(payload);
  }
  return (
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
        <div className="">
          <div className={loading ? " opacity-50 pointer-events-none cursor-default mt-6 text-right" : "mt-6 text-right"}>
          
          <Link className=" bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white" to="/mail-varify">
            Go to Mail Varify.
          </Link>
        </div>
        </div>
        :
        <form>
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

        {loading&&
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
  )
}


// $table->id();
//             $table->string('name');
//             $table->string('email')->unique();
//             $table->timestamp('email_verified_at')->nullable();
//             $table->string('password');
//             $table->rememberToken();
//             $table->timestamps();
//             $table->string('department');
//             $table->integer('s_id');
//             $table->string('session');
//             $table->integer('v_code')->nullable();
//             $table->string('profile_image')->nullable();
//             $table->string('profession')->nullable();
//             $table->string('cpc_position')->nullable();
//             $table->string('passing_year')->nullable();
//             $table->unsignedBigInteger('current_job_id')->nullable();
//             $table->foreign('current_job_id')->references('job_id')->on('job_history');
//             $table->string('phone')->nullable();
//             $table->string('linked_in')->nullable();
//             $table->string('git')->nullable();
import React, { useEffect, useRef, useState } from 'react'
import nkp from '/profile/nitun.jpg'
import avater from '/profile/avater.webp'
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/contextProvider';

export default function BlogsU() {
  const [people, setPeople] = useState([]);
  const [details, setDetails] = useState(false);
  const [userD, setUserD] = useState();
  const [type, setType] = useState('Blogs');

  const {user} = useStateContext();
  const [catagory, setCatagory] = useState([]);
  const [error, setError] = useState('');

  const titleRef = useRef();
  const selectedCatagoryRef = useRef();
  const blogContentRef = useRef();
  const yearRef = useRef();
  const deptRef = useRef();
  const serialRef = useRef();


  useEffect(() => {
    // getUsers();
    // getMembers();
    getBlogCatagory();
    getCatagorizedBlogs('all', '');
  }, [])

  const getBlogCatagory = () => {
    axiosClient.get('/all-blogs-catagory')
      .then(({ data }) => {
        console.log('blog Catagory is : ');
        console.log(data);
        setCatagory(data);
      })
  }
  const getCatagorizedBlogs = (id, catagory) => {
    console.log('Member search click');
    setPeople([]);
    setType('Blogs about: ' + catagory);
    const payload = {
      type: id
    }
    axiosClient.post('/blog-query', payload)
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
  const scrollToTop = () => {
    window.scroll({
      top: 109,
      left: 0,
      behavior: 'smooth'
    });
  }
  const onPost = () => {
    console.log('post clicked');
    setError('');
    if (titleRef.current.value == '') {
      scrollToTop();
      setError('Write a switable Title of your blog first.')
      return
    } else if (selectedCatagoryRef.current.value == '') {
      scrollToTop();
      setError('Chose a switable blog Catagory of your blog first.')
      return
    }else if(blogContentRef.current.value == ''){
      scrollToTop();
      setError('Write blog content first.')
      return
    }
    const payload = {
      title: titleRef.current.value,
      catagory_id: selectedCatagoryRef.current.value,
      content: blogContentRef.current.value,
      uid: user.id,
    }
    axiosClient.post('/blog-post', payload)
      .then(() => {
        setDetails(false);
      })
  }

  return (
    <div className="relative">
      <div className={details ? 'flex flex-row opacity-50 pointer-events-none cursor-default ' : 'flex flex-col md:flex-row   bg-slate-200'}>
        {/* Search option */}
        <div className="w-[90vw] md:w-1/3 h-full shadow-md m-10 p-10 rounded-lg bg-slate-50">
          <h2 className='text-xl font-bold mt-2'>Search</h2>
          <div className="flex flex-col my-2 space-y-2">

            <input ref={yearRef} className='text-lg w-full px-2 py-1 border-2 border-blue-900 rounded-xl text-black' placeholder='write title...' type="text" />
            {/* Search Button */}
            <button onClick={getSearch} className='w-[30%] border-2 text-white font-semibold self-end border-blue-600 py-1 bg-blue-900 rounded-md hover:bg-blue-800' >Search</button>
          </div>
          <h2 className='text-xl font-bold'>Blog Catagories</h2>
          <div className="flex flex-col mt-2 space-y-2">

            <button onClick={(ev) => { ev.preventDefault(); getCatagorizedBlogs('all', ''); }} className='border-2 border-blue-600 py-2 font-semibold bg-blue-50 rounded-md hover:bg-blue-200'>All Catagory Blogs</button>

            {catagory.map(cat => (
              <button onClick={(ev) => { ev.preventDefault(); getCatagorizedBlogs(cat.id, cat.catagory); }} className='border-2 border-blue-600 py-2 font-semibold bg-blue-50 rounded-md hover:bg-blue-200'>{cat.catagory}</button>
            ))
            }
          </div>
          <hr className='my-5 h-1 bg-black' />
          <div className="text-center">
            <button onClick={(ev) => { ev.preventDefault(); setDetails(true); }} className='text-center bg-blue-900 py-2 px-5 rounded-xl font-semibold text-lg text-white '>Write a Blogs</button>
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
      <div className={details ? "absolute rounded-lg pb-16 shadow-xl bg-slate-300 bg-opacity-90 p-8 top-10 right-10 left-10 min-h-fit mx-auto w-[70%] " : " hidden "}>
        <div className="flex flex-col">
          <div className="flex flex-row mb-4 justify-between">
            <h2 className=' text-2xl font-bold text-blue-900'>Profile Details</h2>
            <button onClick={() => setDetails(false)} className=' bg-slate-800 rounded-md text-white px-3'>Close</button>
          </div>
          {/* Blog input */}
          <div className="flex flex-col shadow-md bg-slate-100 w-[90%] rounded-xl p-20 mx-auto">
            {/* Error Message */}
            {error &&
              <div className="flex flex-row justify-between rounded-md my-2 border-2 border-red-500 bg-red-100 p-2">
                {error}
                <button onClick={ev => { ev.preventDefault(); setError('') }} className='p-1 ml-3 hover:bg-blue-200 rounded-sm'>X</button>
              </div>
            }
            {/*Blog Title input */}
            <div className="flex flex-col">
              <h3 className='text-xl text-blue-900 font-semibold'>Blog Title:</h3>
              <input ref={titleRef} className='p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-100 disabled:border-blue-900 focus:outline-none focus:border-blue-900 focus:ring-blue-900 block w-full rounded-md' type="text" />
            </div>
            {/* catagory input */}
            <div className='inp-component mt-4'>
              <h3 className='text-xl text-blue-900 font-semibold'>Blog Catagory:</h3>
              <div className="mt-1">
                <select ref={selectedCatagoryRef} name="dept" id="dept" className='p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-100 disabled:border-blue-900 focus:outline-none focus:border-blue-900 focus:ring-blue-900 block w-full rounded-md' >
                  <option className='' value="">Chose your Department</option>
                  {catagory &&
                    catagory.map(cat => (
                      <option id={cat.id} value={cat.id}>{cat.id}. {cat.catagory}</option>

                    ))
                  }
                </select>
              </div>
            </div>
            {/* Blog Content */}
            <div className="flex flex-col mt-4">
              <h3 className='text-xl text-blue-900 font-semibold'>Blog Content:</h3>
              <textarea ref={blogContentRef} type="text" className="overflow-y-scroll h-[60vh] line-clamp-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-100 disabled:border-blue-900 focus:outline-none focus:border-blue-900 focus:ring-blue-900 block w-full rounded-md text-lg" placeholder="Write your blog content here..." />
            </div>
            {/* Blog post button */}
            <button onClick={onPost} className='w-[25vh] mt-5 py-2 text-xl self-end font-bold bg-green-600 rounded-md text-white px-3'>Post</button>

          </div>
        </div>
      </div>

    </div>
  )
}

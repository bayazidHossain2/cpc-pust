import React, { useEffect, useRef, useState } from 'react'
import nkp from '/profile/nitun.jpg'
import avater from '/profile/avater.webp'
import axiosClient from '../../axios-client';
import { useStateContext } from '../../contexts/contextProvider';
import JoditEditor from 'jodit-react';

export default function BlogsU() {
  const [blogs, setBlogs] = useState([]);
  const [details, setDetails] = useState(false);
  const [userD, setUserD] = useState();
  const [type, setType] = useState('Blogs');

  const { user } = useStateContext();
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
    setBlogs([]);
    setType('Blogs about: ' + catagory);
    const payload = {
      type: id
    }
    axiosClient.post('/blog-query', payload)
      .then(({ data }) => {
        console.log('data is : ');
        console.log(data);
        setBlogs(data);
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
    } else if (blogContentRef.current.value == '') {
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
        {/* Blogs */}
        <div className="w-full shadow-md min-h-[80vh] my-10 mr-10 p-10 rounded-lg bg-slate-50">
          <h2 className='text-xl font-bold'>{type}</h2>
          {/* Blogs Container */}
          <div className="grid grid-cols-1 mt-5 gap-6">
            {(blogs == null) ?
              <div className="">
                No User Found
              </div>
              :
              blogs.map(blog => (
                // {/* Blog Component */}
                <div className="flex flex-col bg-slate-200 border-2 border-slate-300 rounded-md shadow-md p-5">
                  <div className="flex flex-row justify-between">
                    <div className="">
                      <h2 onClick={(ev) => { ev.preventDefault(); getPeople(user.id) }} className=' text-xl font-bold text-blue-900 px-1 rounded-md  hover:bg-blue-200'>{blog.blog_title}</h2>
                      <div className="flex flex-row">
                        <h2 className=' text-lg font-semibold text-blue-900 px-1'>Written by:</h2>
                        <h2 className=' text-md font-semibold text-blue-900 px-1'> {blog.writter_name}</h2>
                      </div>
                      <div className="flex flex-row">
                        <h2 className=' text-md font-semibold text-blue-900 px-1'>Posting time:</h2>
                        <h2 className=' text-md text-blue-900 px-1'> {blog.created_at}</h2>
                      </div>
                    </div>
                    <div className="">
                      <svg className='h-10 p-1 py-2 rounded-sm hover:bg-blue-200' fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="-29.35 -29.35 352.20 352.20" space="preserve" stroke="#000000" stroke-width="0.002935"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="12.327"> <g> <g> <g> <path d="M171.603,0h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705 c8.612,0,15.618-7.006,15.618-15.618V15.618C187.221,7.006,180.215,0,171.603,0z"></path> <path d="M171.603,106.279h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705 c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,113.285,180.215,106.279,171.603,106.279z"></path> <path d="M171.603,212.559h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705 c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,219.564,180.215,212.559,171.603,212.559z"></path> </g> </g> </g> </g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M171.603,0h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705 c8.612,0,15.618-7.006,15.618-15.618V15.618C187.221,7.006,180.215,0,171.603,0z"></path> <path d="M171.603,106.279h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705 c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,113.285,180.215,106.279,171.603,106.279z"></path> <path d="M171.603,212.559h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705 c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,219.564,180.215,212.559,171.603,212.559z"></path> </g> </g> </g> </g></svg>
                    </div>
                  </div>
                  {/* Content */}
                  <div className=' bg-slate-50 mt-5 rounded-lg p-5' dangerouslySetInnerHTML={{ __html: blog.blog_content }} />
                  <hr className='my-5 h-[2px] bg-black' />
                  {/* Voting and commenting Option */}
                  <div className="flex flex-row font-bold justify-between space-x-6">
                    <div className="flex flex-row p-2 rounded-xl w-1/4 items-center bg-slate-300">
                      <p>123</p>
                      <svg className='h-8 mx-2' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"></path></g></svg>
                      <p className='hidden lg:block'>Up Vote</p>
                    </div>
                    <div className="flex flex-row font-bold p-2 rounded-xl w-1/4 items-center bg-slate-300">
                      <p>123</p>
                      <svg className='h-8 mx-2' fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10zM15 12h-1v8h-4v-8H6.081L12 4.601 17.919 12H15z"></path></g></svg>
                      <p className='hidden lg:block'>Down Vote</p>
                    </div>
                    <div className="flex flex-row font-bold p-2 rounded-xl w-1/2 items-center bg-slate-300">
                      <p>123456</p>
                      <svg className='h-8 mx-2' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>comment-3</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" type="MSPage"> <g id="Icon-Set" type="MSLayerGroup" transform="translate(-204.000000, -255.000000)" fill="#000000"> <path d="M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z" id="comment-3" type="MSShapeGroup"> </path> </g> </g> </g></svg>
                      <p className='hidden lg:block'>Comments</p>
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
              {/* <textarea ref={blogContentRef} type="text" className="overflow-y-scroll h-[60vh] line-clamp-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-100 disabled:border-blue-900 focus:outline-none focus:border-blue-900 focus:ring-blue-900 block w-full rounded-md text-lg" placeholder="Write your blog content here..." /> */}
              <JoditEditor ref={blogContentRef} type="text" />
            </div>
            {/* Blog post button */}
            <button onClick={onPost} className='w-[25vh] mt-5 py-2 text-xl self-end font-bold bg-green-600 rounded-md text-white px-3'>Post</button>

          </div>
        </div>
      </div>

    </div>
  )
}

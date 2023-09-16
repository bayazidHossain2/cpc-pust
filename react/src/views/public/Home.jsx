import React, { useEffect, useRef, useState } from 'react'
import bgimage from '/coverBG.jpg'
import logo_acm from '/Logo/acm_logo.png'
import logo_dev from '/Logo/dev_logo.png'
import logo_job from '/Logo/job_logo.png'
import logo_res from '/Logo/res_logo.png'
import ss from '/profile/subirsaha.jpg'
import nkp from '/profile/nitun.jpg'
import hsi from '/profile/hsi.jpg'
import msa from '/profile/msa.jpg'
import abr from '/profile/abr.jpg'
import mah from '/profile/mah.jpg'
import kbi from '/profile/kbi.jpg'
import tnt from '/profile/tnt.jpg'
import td from '/profile/td.jpg'
import ih from '/profile/ih.jpg'



export default function HomeU() {

  const imageRef = useRef();
  const [pre, setpre] = useState();

  const onPrev = (e) => {
    // setpre(imageRef.current.value);
    console.log(e.target.files);
  }

  return (
    <div className=' bg-slate-200'>
      <div className="h-screen bg-purple-700">
        <div className="h-[93%] bg-red-500 w-full">
          {/* Home Screen image Slider */}
          <div className="flex flex-row h-[80%] mx-auto  bg-cover bg-center bg-no-repeat"
            style={
              {
                background: `url(${bgimage})`,
              }
            }>

            {/* For text */}
            <div className=" w-2/3 bg-gradient-to-r from-white to-transparent">
              <div className=" h-full w-full mx-32 my-10 flex flex-col ">
                <h3 className=' text-3xl font-semibold text-blue-700'>Pabna University of Science & Technology</h3>
                <h1 className=' text-6xl font-bold text-blue-800 mt-2'>Computer &</h1>
                <h1 className=' text-6xl font-bold text-blue-800'>Programming</h1>
                <h1 className=' text-6xl font-bold text-blue-800 mb-2'>Club</h1>
                <p class="mt-4 w-1/2 text-2xl text-gray-700">
                  CPC PUST is the most primitive and extensive club of our University.
                  We work together to explore every field of Computer Science. Join us to know more.
                </p>
              </div>
            </div>
          </div>
          {/* Home screen component slider */}
          <div className="h-[20%]">
            {/* <img src={bgimage} alt="" /> */}
          </div>
        </div>
      </div>
      {/* wings Designs */}
      <div className="flex flex-col h-screen">
        <div className='flex flex-row space-x-2 bg-gradient-to-r h-20 from-transparent p-6 mt-10 w-[50%] justify-center self-center items-center via-white to-transparent'>
          <h2 className=' text-slate-500 text-3xl font-bold'>Our</h2>
          <h2 className=' text-blue-800 text-3xl font-bold'>Wings</h2>
        </div>
        <div className="grid grid-cols-4 h-[70%] w-[80%] mt-10 mx-auto">
          {/* Wings Component 1*/}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50 m-5">
            <div className="flex flex-col h-[80%] text-center p-8 space-y-5 ">
              <img src={logo_acm} className='h-16 w-16 self-center' />
              <h1 className='text-2xl font-bold'>ACM Task Force</h1>
              <p>Where programmers become Gladiators. We organize workshop, classes, contests and many more.</p>
            </div>
            <button className=' border-2 border-blue-800 rounded-lg py-1 px-2 m-10 hover:border-blue-500 hover:text-blue-500'>Read More</button>
          </div>
          {/* Wings Component 2*/}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50 m-5">
            <div className="flex flex-col h-[80%] text-center p-8 space-y-5 ">
              <img src={logo_dev} className='h-16 w-16 self-center' />
              <h1 className='text-2xl font-bold'>Development</h1>
              <p>The best way to get a project done faster is to start sooner Start development today.</p>
            </div>
            <button className=' border-2 border-blue-800 rounded-lg py-1 px-2 m-10 hover:border-blue-500 hover:text-blue-500'>Read More</button>
          </div>
          {/* Wings Component 3*/}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50 m-5">
            <div className="flex flex-col h-[80%] text-center p-8 space-y-5 ">
              <img src={logo_res} className='h-16 w-16 self-center' />
              <h1 className='text-2xl font-bold'>Research & Journal</h1>
              <p>Why do we do basic research? To learn about ourselves. Start learning yourself today.</p>
            </div>
            <button className=' border-2 border-blue-800 rounded-lg py-1 px-2 m-10 hover:border-blue-500 hover:text-blue-500'>Read More</button>
          </div>
          {/* Wings Component 4*/}
          <div className="flex flex-col justify-between rounded-xl bg-slate-50 m-5">
            <div className="flex flex-col h-[80%] text-center p-8 space-y-5 ">
              <img src={logo_acm} className='h-16 w-16 self-center' />
              <h1 className='text-2xl font-bold'>Job Career (JCIC)</h1>
              <p>Worried about your career Lets learn how to build a better and skilled career.</p>
            </div>
            <button className=' border-2 border-blue-800 rounded-lg py-1 px-2 m-10 hover:border-blue-500 hover:text-blue-500'>Read More</button>
          </div>
        </div>
        <div className=" text-slate-500 text-4xl self-center">-- - --</div>
      </div>
      {/* Advisors Designs */}
      <div className="flex flex-col min-h-screen">
        <div className='flex flex-row space-x-2 bg-gradient-to-r h-20 from-transparent p-6 mt-10 w-[50%] justify-center self-center items-center via-white to-transparent'>
          <h2 className=' text-slate-500 text-3xl font-bold'>Meet The</h2>
          <h2 className=' text-blue-800 text-3xl font-bold'>Advisors</h2>
        </div>
        <h4 className='self-center mt-2 text-slate-400'>The advising teachers of PUST Computer & Programming Club</h4>
        <div className="flex flex-col h-[70%] w-[80%] bg-slate-50 m-5 rounded-xl mt-10 mx-auto">
          {/* Colored Banner */}
          <div className="flex text-center h-32 bg-blue-900 rounded-xl">
            <h1 className='mx-auto p-10 text-4xl text-blue-950 font-bold'>COMPUTER & PROGRAMMING CLUB | ADVISOR PANEL</h1>
          </div>
          {/* Convainner */}
          <div className="flex flex-row self-center mt-[-70px]">
            {/* Convainner Component 1*/}
            <div className="flex flex-col h-[80%] text-center p-8">
              <div className="border-4 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-40 w-40 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-bold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm font-bold mt-[-8px]'>CONVENER</h3>
            </div>
            {/* Convainner Component 2*/}
            <div className="flex flex-col h-[80%] text-center p-8">
              <div className="border-4 border-blue-600 self-center rounded-full">
                <img src={nkp} className='h-40 w-40 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-bold text-blue-800'>NITUN KUMAR PODDER</h2>
              {/* Position */}
              <h3 className='text-sm font-bold mt-[-8px]'>CO-CONVENER</h3>
            </div>

          </div>

          {/* General Advisors */}
          <div className="flex flex-col mx-12">
            {/* Row 1 */}
            <div className="flex flex-row self-center">
              {/* Advisor Component 1*/}
              <div className="flex flex-col h-[80%] text-center px-8 py-4">
                <div className="border-2 border-blue-600 self-center rounded-full">
                  <img src={hsi} className='h-32 w-32 rounded-full p-1' />
                </div>
                {/* Name */}
                <h2 className='text-lg font-bold text-blue-800'>S. M. Hasan Sazzad Iqbal</h2>
                {/* Position */}
                <h3 className='text-sm font-bold mt-[-8px]'>ADVISOR</h3>
              </div>
              {/* Advisor Component 2*/}
              <div className="flex flex-col h-[80%] text-center px-8 py-4">
                <div className="border-2 border-blue-600 self-center rounded-full">
                  <img src={msa} className='h-32 w-32 rounded-full p-1' />
                </div>
                {/* Name */}
                <h2 className='text-lg font-bold text-blue-800'>Md. Shafiul Azam</h2>
                {/* Position */}
                <h3 className='text-sm font-bold mt-[-8px]'>ADVISOR</h3>
              </div>
              {/* Advisor Component 3*/}
              <div className="flex flex-col h-[80%] text-center px-8 py-4">
                <div className="border-2 border-blue-600 self-center rounded-full">
                  <img src={abr} className='h-32 w-32 rounded-full p-1' />
                </div>
                {/* Name */}
                <h2 className='text-lg font-bold text-blue-800'>Dr. Md. Abdur Rahim</h2>
                {/* Position */}
                <h3 className='text-sm font-bold mt-[-8px]'>ADVISOR</h3>
              </div>
              {/* Advisor Component 4*/}
              <div className="flex flex-col h-[80%] text-center px-8 py-4">
                <div className="border-2 border-blue-600 self-center rounded-full">
                  <img src={mah} className='h-32 w-32 rounded-full p-1' />
                </div>
                {/* Name */}
                <h2 className='text-lg font-bold text-blue-800'>Md. Mahmudul Hasan</h2>
                {/* Position */}
                <h3 className='text-sm font-bold mt-[-8px]'>ADVISOR</h3>
              </div>
              {/* Advisor Component 5*/}
              <div className="flex flex-col h-[80%] text-center px-8 py-4">
                <div className="border-2 border-blue-600 self-center rounded-full">
                  <img src={kbi} className='h-32 w-32 rounded-full p-1' />
                </div>
                {/* Name */}
                <h2 className='text-lg font-bold text-blue-800'>Md. Khaled Ben Islam</h2>
                {/* Position */}
                <h3 className='text-sm font-bold mt-[-8px]'>ADVISOR</h3>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex flex-row self-center">
              {/* Advisor Component 6*/}
              <div className="flex flex-col h-[80%] text-center px-8 py-4">
                <div className="border-2 border-blue-600 self-center rounded-full">
                  <img src={tnt} className='h-32 w-32 rounded-full p-1' />
                </div>
                {/* Name */}
                <h2 className='text-lg font-bold text-blue-800'>Taskin Noor Turna</h2>
                {/* Position */}
                <h3 className='text-sm font-bold mt-[-8px]'>ADVISOR</h3>
              </div>
              {/* Advisor Component 7*/}
              <div className="flex flex-col h-[80%] text-center px-8 py-4">
                <div className="border-2 border-blue-600 self-center rounded-full">
                  <img src={td} className='h-32 w-32 rounded-full p-1' />
                </div>
                {/* Name */}
                <h2 className='text-lg font-bold text-blue-800'>Tarun Debnath</h2>
                {/* Position */}
                <h3 className='text-sm font-bold mt-[-8px]'>ADVISOR</h3>
              </div>
              {/* Advisor Component 8*/}
              <div className="flex flex-col h-[80%] text-center px-8 py-4">
                <div className="border-2 border-blue-600 self-center rounded-full">
                  <img src={ih} className='h-32 w-32 rounded-full p-1' />
                </div>
                {/* Name */}
                <h2 className='text-lg font-bold text-blue-800'>Md. Imran Hossain</h2>
                {/* Position */}
                <h3 className='text-sm font-bold mt-[-8px]'>ADVISOR</h3>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-slate-500 text-4xl self-center">-- - --</div>
      </div>


      {/* Team Designs */}
      <div className="flex flex-col min-h-screen">
        <div className='flex flex-row space-x-2 bg-gradient-to-r h-20 from-transparent p-6 mt-10 w-[50%] justify-center self-center items-center via-white to-transparent'>
          <h2 className=' text-slate-500 text-3xl font-bold'>Meet The</h2>
          <h2 className=' text-blue-800 text-3xl font-bold'>Team</h2>
        </div>
        <h4 className='self-center mt-2 text-slate-400'>The core members of PUST Computer & Programming Club</h4>
        <div className="flex flex-col h-[70%] w-[80%] bg-slate-50 m-5 rounded-xl mt-10 mx-auto">
          {/* Colored Banner */}
          <div className="flex text-center h-32 bg-blue-900 rounded-xl">
            <h1 className='mx-auto p-10 text-4xl text-blue-950 font-bold'>#TEAM 2023 CPC PUST | Members</h1>
          </div>
          {/*  Panel */}
          <div className="flex flex-row items-end w-[60%] self-center mt-[-60px]">
            {/* President Component 1*/}
            <div className="flex flex-col w-1/5 text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-24 w-24 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 2*/}
            <div className="flex flex-col w-1/5 text-center">
              <div className="border-4 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-28 w-28 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>Vice President</h3>
            </div>
            {/* President Component 3*/}
            <div className="flex flex-col w-1/5 text-center">
              <div className="border-4 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-30 w-30 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>President</h3>
            </div>
            {/* President Component 4*/}
            <div className="flex flex-col w-1/5 text-center">
              <div className="border-4 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-28 w-28 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>Vice President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col w-1/5 text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-24 w-24 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            

          </div>

          {/* General Team Member */}
          <div className="grid grid-cols-8 gap-y-4 m-8 mx-12">
            
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
            {/* President Component 5*/}
            <div className="flex flex-col text-center">
              <div className="border-2 border-blue-600 self-center rounded-full">
                <img src={ss} className='h-20 w-20 rounded-full p-1' />
              </div>
              {/* Name */}
              <h2 className='text-lg font-semibold text-blue-800'>SUBIR SAHA</h2>
              {/* Position */}
              <h3 className='text-sm mt-[-8px]'>General President</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[50%] justify-between text-slate-500 text-2xl mt-5 mb-[10vh] self-center">
          <button className='border-2 border-orange-600 px-2 bg-orange-50 rounded-lg hover:bg-orange-200'>{'<<Prev'}</button>
          <h2 className=' text-3xl text-orange-600 font-semibold'>#TEAM 2022</h2>
          <button className='border-2 border-orange-600 px-2 bg-orange-50 rounded-lg hover:bg-orange-200'>{'Next>>'}</button>
          
        </div>
      </div>


      
    </div>
  )
}

import React from 'react'
import bgimage from '/coverBG.jpg'

export default function HomeU() {
  return (
    <div>
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
      <h2>This is Home page</h2>
    </div>
  )
}

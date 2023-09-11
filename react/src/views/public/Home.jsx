import React from 'react'
// import bgimage from '../../../public/image/coverBG.jpg'

export default function HomeU() {
  return (
    <div>
      <div className="h-screen bg-purple-700">
        <div className="h-[93%] bg-red-500 w-full">
          {/* Home Screen image Slider */}
          <div className="flex flex-row h-[80%] ">
            {/* For text */}
            <div className=" w-1/2 bg-gradient-to-r from-blue-500 via-transparent"></div>
          </div>
          {/* Home screen component slider */}
          <div className="h-[20%]"></div>
        </div>
      </div>
      <h2>This is Home page</h2>
    </div>
  )
}

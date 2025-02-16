import React from 'react'

const Hero = () => {
  return (
    <div>
<div className="font-poppins relative w-full md:h-[42rem] h-96">
        <div className="relative w-full md:h-full h-full">
        <video className='' src="./7578550.mp4" type="video/mp4" frameborder="0" allowfullscreen autoPlay loop
          muted></video>
          <div className="absolute inset-0 bg-white bg-opacity-0 flex justify-center items-center text-white">
            <h1 className="text-gray-800 opacity-50 text-2xl font-bold md:text-5xl text-center">
              Buy and Rent Properties in Gurgaon
            </h1>
          </div>
          <div className='absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <button className="font-Pacifico px-5 inset-0 py-2 md:py-4 md:px-10 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-500 transition-all">
          Get in Touch
        </button>
          </div>
      
    
        </div>

      {/* Get in Touch Button */}
      
    </div>
    
  </div>
)
}

export default Hero
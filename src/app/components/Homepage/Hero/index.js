import React from 'react'

const Hero = () => {
  return (
    <div>
<div className="font-poppins relative w-full md:h-[42rem] h-96">
        <div className="relative w-full md:h-full h-96">
        <video className='w-full md:h-full h-96 object-cover' src="./7578550.mp4" type="video/mp4" frameborder="0" allowfullscreen autoPlay loop
          muted></video>

          {/* <img src="https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Property 1" 
          
          className="w-full md:h-full h-96 object-cover" /> */}
          <div className="absolute inset-0 bg-white bg-opacity-40 flex justify-center items-center text-white">
            <h1 className="opacity-25 text-gray-900 text-2xl font-bold md:text-5xl text-center">
              Buy and Rent Properties in Gurgaon
            </h1>
          </div>
          <div className='absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <button className="px-5 inset-0 py-2 md:py-4 md:px-10 bg-gray-600 text-white font-semibold rounded-full hover:bg-gray-500 transition-all">
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
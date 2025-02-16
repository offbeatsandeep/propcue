import React from 'react'

const Testimonials = () => {
  return (
    <div className='flex flex-col font-poppins  bg-slate-200 items-center h-[32rem] py-2'>
      {/* slide #1 */}

      <h1 className='py-5 md:text-4xl text-3xl font-extrabold'> What our clients say </h1>

      <div className='py-20 flex flex-col align-middle justify-center items-center'>

        <div className='flex flex-col space-y-3 items-center py-5'>
          <img className='rounded-full bottom-3'
            src="https://i.pravatar.cc/100" alt="1" srcset="" />
          <h1 className='text-lg md:text-2xl '> Sunny Mehta </h1>
          <p className='text-center text-sm md:text-xl px-5 p-3 font-medium'> "Working with Pawan was an amazing experience. From the start, they took the time
            to understand exactly what we were looking for and helped us find a home that perfectly
            suited our needs..." </p>
        </div>

        <div className='flex space-x-1 py-2'>
          <div className='size-1 text-gray-50 rounded-full bg-black'></div>
          <div className='size-1 rounded-full bg-black'></div>
          <div className='size-1 rounded-full bg-black'></div>
        </div>
      </div>

    </div>
  )
}

export default Testimonials

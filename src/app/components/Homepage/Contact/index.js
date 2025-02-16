import React from 'react'

const Contact = () => {
  return (
    <div className='font-poppins h-full w-full py-16 flex flex-col justify-center items-center'>
      <h1 className='py-5 md:text-4xl text-3xl font-extrabold'>
        Enqurire 
      </h1>
      <div className='md:flex p-1 bg-gray-100 rounded-md'>
          <img className='p-5 object-covrer size-96' src="./inbox.svg" alt=""  />
      <form className='w-96 flex flex-col items-center space-y-3 px-5 py-6 bg-gray-200' action="" method="post">
        <h1 className='py-5 md:text-4xl text-2xl font-extrabold'>
        Form
      </h1>
          <input  placeholder='What is your Name ? :' className='w-full p-3 rounded-md' type="email" name="text" id="email" />
          <input placeholder='What is your Mobile number ? :'className='w-full p-3 rounded-md' type="email" name="mobile" id="mobile" />
          <input placeholder='What is your Email ? :' className='w-full p-3 rounded-md' type="tel" name="mobile" id="mobile" />
          <button className='hover:bg-gray-800 hover:text-white px-12 py-2 border-gray-800 border-2 rounded-full text-gray-600 ' type="submit">Send</button>
        </form>
      </div>
      </div>

  )
}

export default Contact
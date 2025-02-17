import React from 'react'

const Contact = () => {
  return (
    <div className=' h-full w-full py-16 flex flex-col justify-center items-center'>
     

      <h1 className='py-5 md:text-4xl text-3xl font-extrabold'>
        Enqurire
      </h1>
      <div className='md:flex p-1 bg-gray-100 rounded-md'>
        <img className='p-5 object-covrer md:size-96 size-72 mx-auto' src="./inbox.svg" alt="" />
        <form className='w-96 flex flex-col items-center space-y-3 px-5 py-6 bg-white' action="" method="post">
          <h1 className='py-5 md:text-4xl text-2xl font-extrabold'>
            Form
          </h1>
          <input placeholder='What is your Name ? :' className='form-input bg-gray-100 w-full p-3 rounded-full' type="email" name="text" id="email" />
          <input placeholder='What is your Mobile number ? :' className='form-input bg-gray-100 w-full p-3 rounded-full' type="email" name="mobile" id="mobile" />
          <input placeholder='What is your Email ? :' className='form-input bg-gray-100 w-full p-3 rounded-full' type="tel" name="mobile" id="mobile" />
          <button className='hover:bg-gray-800 hover:text-white px-12 py-2 border-gray-800 border-2 rounded-full text-gray-600 ' type="submit">Send</button>
        </form>
      </div>
    </div>

  )
}

export default Contact
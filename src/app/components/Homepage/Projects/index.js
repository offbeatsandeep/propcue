import React from 'react'

const Project = () => {
  return (
    <div className='font-montserrat flex flex-col items-center w-full justify-center'>
      <h1 className='text-center py-5 md:text-3xl text-2xl font-extrabold'>
        Properties
      </h1>
      <div className='flex bg-gray-100 items-center w-full h-96 overflow-x-scroll whitespace-nowrap scrollbar-hide'>
        <div className='bg-gray-600  ml-4 rounded-md shrink-0'>
          <div className=''>
            <a className='hover:cursor-pointer' href="http://">
              <img className='md:h-64 h-48 object-cover'
                src="https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" srcset="" />
              <div className='flex flex-col items-center py-2'>
                <h1 className='text-gray-300 text-sm font-medium'> 1 BHK flat fully furnished </h1>
                <h2 className='text-gray-300 text-sm font-medium'>Sector 2, Gurgaon </h2>
              </div>
            </a>
          </div>
        </div>
        <div className='bg-gray-600 ml-4 rounded-md shrink-0'>
          <div className=''>
            <a className='hover:cursor-pointer' href="http://">
              <img className='md:h-64 h-48 object-cover'
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" srcset="" />
              <div className='flex flex-col items-center py-2'>
                <h1 className='text-gray-300 text-sm font-medium'> 1 BHK flat fully furnished </h1>
                <h2 className='text-gray-300 text-sm font-medium'>Sector 2, Gurgaon </h2>
              </div>
            </a>
          </div>
        </div>
        <div className='bg-gray-600  ml-4 rounded-md shrink-0'>
          <div className=''>
            <a className='hover:cursor-pointer' href="http://">
              <img className='md:h-64 h-48 object-cover'
                src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" srcset="" />
              <div className='flex flex-col items-center py-2'>
                <h1 className='text-gray-300 text-sm font-medium'> 1 BHK flat fully furnished </h1>
                <h2 className='text-gray-300 text-sm font-medium'>Sector 2, Gurgaon </h2>
              </div>
            </a>
          </div>
        </div>

        <div className='bg-gray-600  ml-4 rounded-md shrink-0'>
          <div className=''>
            <a className='hover:cursor-pointer' href="http://">
              <img className='md:h-64 h-48 object-cover'
                src="https://images.pexels.com/photos/3623770/pexels-photo-3623770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" srcset="" />
              <div className='flex flex-col items-center py-2'>
                <h1 className='text-gray-300 text-sm font-medium'> 1 BHK flat fully furnished </h1>
                <h2 className='text-gray-300 text-sm font-medium'>Sector 2, Gurgaon </h2>
              </div>
            </a>
          </div>
        </div>

        <div className='bg-gray-600  ml-4 rounded-md shrink-0'>
          <div className=''>
            <a className='hover:cursor-pointer' href="http://">
              <img className='md:h-64 h-48 object-cover' src="https://images.pexels.com/photos/3209035/pexels-photo-3209035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" srcset="" />
              <div className='flex flex-col items-center py-2'>
                <h1 className='text-gray-300 text-sm font-medium'> 1 BHK flat fully furnished </h1>
                <h2 className='text-gray-300 text-sm font-medium'>Sector 2, Gurgaon </h2>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
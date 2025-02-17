import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };


  return (

<div className="slider-container flex flex-col items-center justify-center py-16 bg-gray-300">

  {/* slide #1 */}
  <h1 className='text-center py-5 md:text-3xl text-2xl font-extrabold'> What our clients say </h1>
  <Slider  className='md:w-[90rem] w-[24rem] md:px-16' {...settings}>
   {/* slider 1 */}
   <div className='mx-auto'>
      <div className='p-9  w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col space-y-3 items-center py-5'>
          <img className='rounded-full '
            src="https://i.pravatar.cc/100" alt="1" srcset="" />
          <h1 className='text-md md:text-xl'> Sunny Mehta </h1>
          <p className='text-center text-xm md:text-md px-10 font-medium'> "Working with Pawan was an amazing experience. From the start, they took the time
            to understand exactly what we were looking for and helped us find a home that perfectly
            suited our needs..." </p>
        </div>
      </div>
    </div>
    {/* slider 2 */}
    
    <div>
      <div className='flex flex-col align-middle justify-center items-center'>

        <div className='flex flex-col space-y-3 items-center py-5'>
          <img className='rounded-full'
            src="https://i.pravatar.cc/100" alt="1" srcset="" />
          <h1 className='text-lg md:text-2xl '> Pratik Aggarwal </h1>
          <p className='text-center text-sm md:text-xl px-10 font-medium'> "Working with Pawan was an amazing experience. From the start, they took the time
            to understand exactly what we were looking for and helped us find a home that perfectly
            suited our needs..." </p>
        </div>
      </div>

    </div>

    {/* slider 3 */}
    <div>
      <div className='flex flex-col align-middle justify-center items-center'>

        <div className='flex flex-col space-y-3 items-center py-5'>
          <img className='rounded-full'
            src="https://i.pravatar.cc/100" alt="1" srcset="" />
          <h1 className='text-lg md:text-2xl '> Satish Soni </h1>
          <p className='text-center text-sm md:text-xl px-10 font-medium'> "Working with Pawan was an amazing experience. From the start, they took the time
            to understand exactly what we were looking for and helped us find a home that perfectly
            suited our needs..." </p>
        </div>
      </div>
    </div>

  </Slider>
</div>

   )
}

export default Testimonials

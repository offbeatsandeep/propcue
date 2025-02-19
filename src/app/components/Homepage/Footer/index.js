import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-primary font-montserrat flex justify-around flex-col md:flex-row w-full h-full md:px-12 py-6'>
      <nav>
      <ul className='px-10 py-10 md:px-16'>
        <h1 className='text-white py-5 md:text-2xl text-md font-bold'> CONTACT INFO </h1>
        <div className='flex items-center gap-4'>
          <TfiHeadphoneAlt className='size-16 md:size-24 text-white' />
          <div>
            <li>
              <a className='text-white text-sm' href=''>Connect with us</a>
            </li>
            <li>
              <a className='text-white text-sm' href=''> +91 9785107911
              </a>
            </li>
          </div>
        </div>
        <address className='text-white py-3'>
          1st Floor, Mini Secretariat, <br /> Near Rajeev Chowk.
          Gurugram-122001
        </address>
      </ul>
      </nav>

      <nav>
      <ul className='px-10 py-10 md:px-16'>
        <h1 className='text-white py-5 md:text-2xl text-sm font-bold'> Our links </h1>

        <li>
          <a className='text-white text-sm' href=''>Privacy & Policy</a>
        </li>
        <li>
          <a className='text-white text-sm' href=''>Terms and conditions</a>
        </li>
        <li>
          <a className='text-white text-sm' href=''>About us</a>
        </li>
        <li>
          <a className='text-white text-sm' href=''>Projects</a>
        </li>
        <div className='flex gap-3 flex-col'>
        <h1 className='text-white py-1 md:text-2xl text-sm font-bold'> Follow us </h1>
        <div className='flex gap-3'>
        <a href="https://facebook.com/propcue">
            <FaFacebookSquare className='text-white text-2xl' />
        </a>
        <a href="https://x.com/propcue">
            <FaXTwitter className='text-white text-2xl' />
        </a>
        <a href="https://www.instagram.com/propcue">
            <FaInstagram className='text-white text-2xl' />
        </a>
        </div>
        </div>
      </ul>
      </nav>
      <hr className='text-white' />
      <div className='py-5 flex flex-col md:flex-row gap-1 items-center justify-baseline'>
      <h1 className='text-gray-200 text-sm px-10 pt-1.5'>
        Copyright © 2025
        </h1> 
      <h1 className='text-gray-200 px-10 text-md'>
       Propcue estate pvt Ltd.
        </h1> 
      </div>
    </div>

  )
}

export default Footer
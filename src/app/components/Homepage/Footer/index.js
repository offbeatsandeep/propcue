import React from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
  return (
    <div className='flex justify-around flex-col md:flex-row font-poppins w-full h-full md:px-12 py-6 bg-gray-800'>
      <nav>
      <ul className='px-10 md:px-16'>
        <h1 className='text-white py-5 md:text-2xl text-md font-bold'> CONTACT INFO </h1>
        <div className='flex items-center gap-4'>
          <TfiHeadphoneAlt className='size-16 md:size-24 text-white' />
          <div>
            <li>
              <a className='text-white text-sm' href=''>HOTLINE free 24/7</a>
            </li>
            <li>
              <a className='text-white text-sm' href=''> +91 899-99-99999
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
      <ul className='px-10 md:px-16'>
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
      <div className='flex gap-1'>
      <h2 className='text-gray-200 p-10'>
        Copyright © 2025
        </h2> 
      <h2 className='text-gray-200 p-10'>
       Propcue estate LTD.
        </h2> 
      </div>
    </div>

  )
}

export default Footer
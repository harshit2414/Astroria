import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>

            {/* ---------Left section------------- */}

            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Astrovia is your trusted platform for connecting with certified astrologers and spiritual guides. We aim to bring clarity and peace by helping you explore your destiny, understand your zodiac, and book personalized sessions anytime, anywhere.</p>
            </div>

            {/* ---------Center section------------- */}
            

            <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>contact us</li>
                <li>Privacy policy</li>
            </ul>
                

            </div>

            {/* ---------Right section------------- */}

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li> here we have to paste contact no</li>
                    <li>here we have to paste mail id</li>
                </ul>
                

            </div>

        </div>

        <div>
            {/* --------------Copyright Text----------- */}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Astrovia All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
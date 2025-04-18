import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
            <p>Welcome to Astrovia, your trusted companion in navigating life’s journey through astrology and spiritual wisdom. At Astrovia, we understand the curiosity and uncertainty individuals face when it comes to love, career, relationships, and personal growth.</p>
            <p>Astrovia is committed to excellence in astrology services. We continuously strive to enhance our platform, integrating traditional wisdom with modern tools to provide a personalized and enlightening experience. Whether you're exploring your birth chart or seeking guidance for an important decision, Astrovia is here to illuminate your path every step of the way.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our vision at Astrovia is to create a seamless spiritual experience for every seeker. We aim to bridge the gap between individuals and expert astrologers, making it easy for you to access meaningful insights and cosmic clarity — anytime, anywhere.</p>
          </div>
        </div>

        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
        </div>

        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Convenience</b>
            <p>Access trusted astrologers, tarot readers, and spiritual guides anytime, from the comfort of your home.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Personalization</b>
            <p>Receive tailored predictions, daily horoscopes, and personalized remedies based on your unique birth chart.</p>
          </div>
        </div>
    </div>
  )
}

export default About
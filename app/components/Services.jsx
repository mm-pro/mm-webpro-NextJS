import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[10%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-2xl font-Ovo relative'>What I Offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Services</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-4'>
        {serviceData.map(({icon, title, description, link}, index)=>(
          <div key={index} className='border border-gray-400 rounded-lg px-8 py-8 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
            <Image src={icon} alt='title' className='w-10'/>
            <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>{description}</p>
            <a href={link} className='flex items-center gap-4 text-sm mt-5'>
              Read more <Image src={assets.rightArrow} alt='' className='w-4'/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
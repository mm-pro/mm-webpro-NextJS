import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-full flex flex-col items-center justify-center gap-4'>

        <div className='flex items-end xs:mt-32 md:mt-24'>
          <Image src={assets.profileImage} alt='' className='rounded-full w-32'/>
        </div>

        <h3 className='flex items-end gap-2 text-xl md:text-3xl mb-3 font-Ovo'>
              Hi👋 I'm Dinh (Just call me Dan) 
        </h3>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-Ovo'>
          Software Developer based in Sweden
        </h1>
        <p className='max-w-2xl mx-auto font-Ovo'>
          I'm passionate about building software that solves real-world problems and makes people's lives easier.
        </p>

        <div className='flex flex-row items-center gap-4 mt-4'>
          <a href="#contact" className='px-5 sm:px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 hover:bg-amber-300 duration-500 hover:scale-105'>Contact me <Image src={assets.arrowRightUp} alt='' className='w-4'/></a>
          <a href="/Resume.pdf" download className='px-5 sm:px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-amber-300 duration-500 hover:scale-105'>My resume <Image src={assets.downloadIcon} alt='' className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header
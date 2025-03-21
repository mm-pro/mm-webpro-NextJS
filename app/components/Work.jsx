import { workData, assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


const Work = () => {

  return (
    <div id='work' className='w-full px-[10%] lg:px-[20%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-2xl font-Ovo relative'>My portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My best work</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-13 font-Ovo'>
        Welcome to my development portfolio! These are successful products of my work.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-4'>
        {workData.map((project, index)=>(
          <div key={index} className='rounded-lg relative h-full cursor-pointer group border-2 overflow-hidden border-gray-400 '>

            <Image src={project.bgImage.src} alt='' width={500} height={300} className='w-full h-full left-0 top-0 -z-10 hover:scale-105 duration-500 transition-all' />

            <div className='bg-gray-300 w-[80%] md:w-[60%] lg:w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 p-3 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='text-xs sm:text-sm font-semibold text-center'>{project.title}</h2>
                <p className=' text-xs sm:text-sm text-gray-700 text-center'>{project.description}</p>
              </div>
              <a href={project.link} className='rounded-lg p-2 flex items-center justify-center group-hover:bg-amber-300 duration-500' >
                <Image src={assets.sendIcon} alt='' className='w-4 sm:w-5'/>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Work
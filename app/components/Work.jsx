import { workData, assets } from '@/assets/assets'
import React, { useState }from 'react'
import Image from 'next/image'


const Work = () => {

    const [visibleProjects, setVisibleProjects] = useState(2);

    // Function to handle "Show more" click
    const handleShowMore = () => {
      setVisibleProjects((prev) => prev + 2); // Increase the number of visible projects by 2
    };

  return (
    <div id='work' className='w-full px-[10%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-2xl font-Ovo relative'>My portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My best work</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-13 font-Ovo'>
        Welcome to my development portfolio! These are successful products of my work.
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-4'>
        {workData.slice(0, visibleProjects).map((project, index)=>(
          <div key={index} className='rounded-lg relative h-full cursor-pointer group border-2 overflow-hidden border-gray-400 '>

            <Image src={project.bgImage.src} alt='' width={500} height={300} className='w-full h-full left-0 top-0 -z-10 hover:scale-105 duration-500 transition-all' />

            <div className='bg-gray-300 w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.description}</p>
              </div>
              <a href={project.link} className='rounded-lg p-2 flex items-center justify-center group-hover:bg-amber-300 duration-500' >
                <Image src={assets.sendIcon} alt='' className='w-6'/>
              </a>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < workData.length && (
        <button
          onClick={handleShowMore}
          className='mx-auto mt-10 px-10 py-3 border border-gray-500 rounded-full flex items-center hover:bg-amber-300 duration-500 hover:scale-105'
        >
          Show more ...
        </button> 
      )}

    </div>
  )
}

export default Work
import React from 'react'
import { careerData} from '@/assets/assets'
import Image from 'next/image'

const Career = () => {
  return (
    <div id='career' className='w-full px-10 md:px-[10%] lg:px-[20%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-2xl font-Ovo relative'>The brief of work experience</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Career</h2>

        <div className='relative mt-12'>
            <ol className='border-l-2 border-gray-300'>
                {careerData.map((job, index)=>(
                    <li className='mb-8 last:mb-0 ml-4' key={index}>
                        <span className='flex absolute -left-5 justify-center items-center w-10 h-10 bg-amber-200  rounded-full'>
                            <div className='w-7 h-7 rounded-full bg-amber-400 flex justify-center items-center'>
                                <Image src={job.icon} alt='' className='w-4 h-4'/>
                            </div>     
                        </span>
                        <h2 className="flex items-center ml-4 py-1 font-semibold text-gray-800">
                            {job.companyName}
                        </h2>
                        <div className="block mx-2 font-semibold font-Ovo leading-8 text-gray-800">
                            {job.role}&nbsp;&nbsp;{job.dates}
                        </div>
                        {!!job.stack.length && (
                        <ul className="flex flex-wrap gap-1 my-2">
                            {job.stack.map((tech, index) => (
                            <li
                                key={index}
                                className="inline-flex items-center px-2 rounded-md bg-green-100"
                            >
                                <span><Image src={tech.icon} alt='' className='w-4'/></span>
                                <span className='font-Ovo ml-1'>{tech.name}</span>
                            </li>
                            ))}
                        </ul>
                        )}
                        <div className='mb-4 font-Ovo text-gray-600'>
                            {job.description}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    </div>
  )
}

export default Career
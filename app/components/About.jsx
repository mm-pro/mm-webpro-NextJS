import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
  return (
    <div id='about' className='w-full px-[10%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-2xl font-Ovo relative'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-8'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.midasImage} alt='user' className='w-full rounded-3xl' />
            </div>
            <div className='flex-1'>
                <p className='mb-4 max-w-2xl font-Ovo'>
                I'm a Software developer with over 7 years experiences focused on Frontend development. 
                I am very familiar with coding in Node.js, React.js/Next.js, React Native, Vue.js, SvelteKit and Python/Django. 
                I have contributed to develop lots of innovative project and would like to work on super excited Gambling & Web3 AI hybrid project.
                I am trying to learn and use the cutting-edge AI technology to solve business process automation. 
                Adept at creating responsive and intuitive user interfaces, optimizing application performance, and ensuring cross-device compatibility. 
                I am Vietnamese and I am living in Sweden since 2024.
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl' >
                    {infoList.map(({icon, title, description}, index) => (
                        <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                            <Image src={icon} alt={title} className='w-7'/>
                            <h3 className='mb-2 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    )
                    )}
                </ul>
                <h4 className='my-4 text-gray-700 font-Ovo font-semibold'>Tools I Use</h4>
                <ul className='flex flex-wrap gap-1 items-center justify-start'>
                    {toolsData.map((tool, index) => ( 
                        <li className='flex items-center justify-center w-10 sm:min-w-12 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                            <Image src={tool} alt='tool' className='w-7'/>
                        </li>  
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About
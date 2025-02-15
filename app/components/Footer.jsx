import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
        <hr />
        <div className='m-12'>
            <ul className='flex items-center justify-center gap-4'>
                <li className='p-3 rounded-full border border-gray-500 flex items-center justify-between hover:bg-amber-300 duration-500'>
                    <a title='Email' href="mailto:dinhcoder833@gmail.com" target='_blank'>
                        <Image src={assets.emailIcon} alt='' className='w-6' />
                    </a>
                </li>
                <li className='p-3 rounded-full border border-gray-500 flex items-center justify-between hover:bg-amber-300 duration-500'>
                    <a title='Github' href="https://github.com/mm-pro" target='_blank'>
                        <Image src={assets.githubIcon} alt='' className='w-6'/>
                    </a>
                </li>
                <li className='p-3 rounded-full border border-gray-500 flex items-center justify-between hover:bg-amber-300 duration-500'>
                    <a title='LinkedIn' href="https://www.linkedin.com/in/%C4%91inh-v%C4%83n-th%E1%BB%83-5593491aa/" target='_blank'>
                        <Image src={assets.linkedinIcon} alt='' className='w-6'/>
                    </a>
                    </li>
                <li className='p-3 rounded-full border border-gray-500 flex items-center justify-between hover:bg-amber-300 duration-500'>
                    <a title='Bluesky' href="https://bsky.app/profile/dinh110.bsky.social" target='_blank'>
                        <Image src={assets.blueskyIcon} alt='' className='w-6'/>
                    </a>
                </li>
                <li className='p-3 rounded-full border border-gray-500 flex items-center justify-between hover:bg-amber-300 duration-500'>
                    <a title='Discord' href="https://discord.com/spirit109" target='_blank'>
                        <Image src={assets.discordIcon} alt='' className='w-6'/>
                    </a>
                </li>
            </ul>
        </div>
        <p className='text-center mb-2'>Created by Dan @2025</p>
        <p className='flex items-center justify-center mb-10'>Made with&nbsp;<Image src={assets.tailwindcssIcon} alt='' className='w-6'/>&nbsp;TailwindCSS&nbsp;+&nbsp;<Image src={assets.nextjsIcon} alt='' className='w-6'/>&nbsp;Next.js</p>
    </div>
  )
}

export default Footer
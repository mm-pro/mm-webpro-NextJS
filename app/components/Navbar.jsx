import React, { useEffect, useRef ,useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'


const Navbar = () => {

    const sideMenuRef = useRef();
    const [isScroll, setIsScroll] = useState(false);

    const openMenu = () => {
        sideMenuRef.current.style.right = '0';
    }
    const closeMenu = () => {
        sideMenuRef.current.style.right = '-64rem';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                setIsScroll(true);
            }else {
                setIsScroll(false);
            }
        });
    }, [])

  return (
    <>
     <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
            <Image src={assets.logo} alt='' className='w-16 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50"}`}>
            <li><a href="#top" className='font-Ovo'>Home</a></li>
            <li><a href="#about" className='font-Ovo'>About me</a></li>
            <li><a href="#services" className='font-Ovo'>Services</a></li>
            <li><a href="#career" className='font-Ovo'>Career</a></li>
            <li><a href="#work" className='font-Ovo'>My work</a></li>
            <li><a href="#contact" className='font-Ovo'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
            <button className='flex hover:scale-110 duration-500'>
                <Image src={assets.moonIcon} alt='' className='w-6' />
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2 border border-gray-500 rounded-full ml-4 font-Ovo hover:scale-105 duration-500'>Contact <Image src={assets.arrowRightUp} alt='' className='w-3' /></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={assets.menuIcon} alt='' className='w-6' />
            </button>
        </div>

        {/* ------ Mobile menu ------ */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            
            <div className='absolute top-6 right-6' onClick={closeMenu}>
                <Image src={assets.closeBlack} alt='' className='w-5 cursor-pointer' />
            </div>
            
            <li><a href="#top" className='font-Ovo' onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className='font-Ovo' onClick={closeMenu}>About me</a></li>
            <li><a href="#services" className='font-Ovo' onClick={closeMenu}>Services</a></li>
            <li><a href="#work" className='font-Ovo' onClick={closeMenu}>My work</a></li>
            <li><a href="#contact" className='font-Ovo' onClick={closeMenu}>Contact me</a></li>
        </ul>

     </nav>
    </>
  )
}

export default Navbar
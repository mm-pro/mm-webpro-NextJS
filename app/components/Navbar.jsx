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
        ${isScroll ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-md" : ""}`}>
        <a href="#top" className='flex px-10'>
            <Image src={assets.logo} alt='' className='w-12 cursor-pointer' />
        </a>

        <ul className={`hidden md:flex items-center gap-4 rounded-full px-12 py-2 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50"}`}>
            <li>
                <a href="#top" className='flex'>
                    <p className="m-2 group relative">
                        <span className='font-Ovo'>Home</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            <li>
                <a href="#about" className='flex'>
                    <p className="m-2 group relative">
                        <span className='font-Ovo'>About</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            <li>
                <a href="#services" className='flex'>
                    <p className="m-2 group relative">
                        <span className='font-Ovo'>Services</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            <li>
                <a href="#career" className='flex'>
                    <p className="m-2 group relative">
                        <span className='font-Ovo'>Career</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            <li>
                <a href="#work" className='flex'>
                    <p className="m-2 group relative">
                        <span className='font-Ovo'>My Work</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            <li>
                <a href="#contact" className='flex'>
                    <p className="m-2 group relative">
                        <span className='font-Ovo'>Contact</span>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                    </p>
                </a>
            </li>
            
        </ul>

        <div className='flex items-center gap-4'>

            <a href="#contact" className='hidden lg:flex items-center gap-4 px-8 py-2 border border-gray-500 rounded-full font-Ovo hover:scale-105 hover:bg-amber-200 duration-500'>
                Contact <Image src={assets.arrowRightUp} alt='' className='w-3' />
            </a>

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
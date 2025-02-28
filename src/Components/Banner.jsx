import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link, animateScroll as scroll } from "react-scroll";

const Banner = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div name="home" className='h-screen flex flex-col justify-center items-center font-sans'>
            <div className='mx-20'>
                <p className='text-[#C23B22] font-bold font-sans' data-aos='fade-down' data-aos-duration="1500">Hi, I am </p>
                <h1 className='text-[#e1e6f5] font-bold text-4xl md:text-5xl' data-aos='fade-right' data-aos-duration="2000">Mohiul Islam Miraz</h1>
                <h2 className='text-[#8892b0] font-bold text-4xl md:text-5xl' data-aos='fade-left' data-aos-duration='2000'>I am a Backend Developer,</h2>
                <p className='w-2/3 py-5 text-[#8892b0] font-sans'>
                    Aspiring Software Engineer, primarily focused on backend development with a solid understanding of frontend technologies.
                </p>
                <Link activeClass='active' to='work' smooth={true} duration={1000}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] duration-300 font-sans'>View My Work
                        <span className='group-hover:ml-6 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Banner

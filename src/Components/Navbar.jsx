import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    const [navView, setNavView] = useState(false);

    const handleNav = () => {
        setNavView(!navView)
    }

    return (
        <div className='fixed w-full h-[80px] px-20 flex justify-center items-center z-10 font-sans bg-[#0a192f]'>

            <ul className='hidden md:flex'>
                <li><Link className='hover:text-[#f3f3f3]' activeClass='active' to='home' smooth={true} duration={1000}>Home</Link></li>
                <li><Link className='hover:text-[#f3f3f3]' activeClass='active' to='about' smooth={true} duration={1000}>About</Link></li>
                <li><Link className='hover:text-[#f3f3f3]' activeClass='active' to='skills' smooth={true} duration={1000}>Skills</Link></li>
                <li><Link className='hover:text-[#f3f3f3]' activeClass='active' to='skills' smooth={true} duration={1000}>Profiles</Link></li>
                <li><Link className='hover:text-[#f3f3f3]' activeClass='active' to='work' smooth={true} duration={1000}>Projects</Link></li>
                <li><Link className='hover:text-[#f3f3f3]' activeClass='active' to='contact' smooth={true} duration={1000}>Contact</Link></li>
            </ul>

            <div className='md:hidden z-20 text-3xl mr-auto' onClick={handleNav}>
                {!navView ? <FaBars /> : <FaTimes />}
            </div>
            
            <ul className={!navView ? 'absolute top-0 right-0 left-0 flex flex-col items-center justify-center transition-all duration-700 -translate-y-[100vh]'
                : 'md:hidden absolute w-full h-screen top-0 right-0 left-0 flex flex-col justify-center items-center bg-[#0a192f] backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 transition-all duration-700 translate-y-0'}>

                <li className='py-6 text-3xl font-light'><Link onClick={handleNav} activeClass='active' to='home' smooth={true} duration={1000}>Home</Link></li>
                <li className='py-6 text-3xl font-light'><Link onClick={handleNav} activeClass='active' to='about' smooth={true} duration={1000}>About</Link></li>
                <li className='py-6 text-3xl font-light'><Link onClick={handleNav} activeClass='active' to='skills' smooth={true} duration={1000}>Skills</Link></li>
                <li className='py-6 text-3xl font-light'><Link onClick={handleNav} activeClass='active' to='skills' smooth={true} duration={1000}>Profiles</Link></li>
                <li className='py-6 text-3xl font-light'><Link onClick={handleNav} activeClass='active' to='work' smooth={true} duration={1000}>Projects</Link></li>
                <li className='py-6 text-3xl font-light'><Link onClick={handleNav} activeClass='active' to='contact' smooth={true} duration={1000}>Contact</Link></li>
            </ul>

            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#171515]'>
                        <a href="https://github.com/miraz23" rel='noreferrer' target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#0A66C2]'>
                        <a href="https://www.linkedin.com/in/mohiul-islam-miraz/" rel='noreferrer' target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#BB001B]'>
                        <a href="mailto:mohiulislam23@gmail.com" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                            Email <MdEmail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
                        <a href="#" className='flex justify-between items-center w-full text-gray-300'>
                            Resume <BsFillFileEarmarkPersonFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

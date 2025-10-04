import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CodeforcesLogo from '../asset/Profiles/codeforces.png'
import LeetcodeLogo from '../asset/Profiles/leetcode.png'
import IeeeLogo from '../asset/Profiles/ieee.png'

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div name='profiles' className='mx-10 md:mx-20 font-sans'>
            <div className='flex flex-col justify-center items-center max-w-[1080px] mx-auto'>
                <div className='py-10 mt-25'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C23B22]'>Profiles</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center mx-auto'>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md cursor-pointer'>
                        <a href="https://codeforces.com/profile/mohiul_islam">
                            <div data-aos='zoom-in-up' data-aos-duration='1500'>
                                <img src={CodeforcesLogo} className='w-25 mx-auto' alt="html icon" />
                                <p className='my-6'>Codeforces <br /> (500+ Solve)</p>
                            </div>
                        </a>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <a href="https://leetcode.com/u/mohiul_islam/">
                            <div data-aos='zoom-in-up' data-aos-duration='1500'>
                                <img src={LeetcodeLogo} className='w-21 mx-auto' alt="css icon" />
                                <p className='my-6'>Leetcode <br /> (100+ Solve)</p>
                            </div>
                        </a>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <a href="https://ieee-collabratec.ieee.org/app/p/mohiul-islam-miraz">
                            <div data-aos='zoom-in-up' data-aos-duration='1500'>
                                <img src={IeeeLogo} className='w-45 mx-auto' alt="css icon" />
                                <p className='my-6'>IEEE IIUC SBC<br />(Webmaster)</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
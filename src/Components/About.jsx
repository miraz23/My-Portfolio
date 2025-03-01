import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div name="about" className='mx-20 py-20 font-sans'>
            <div className='lg:text-center pb-20'>
                <p className='text-4xl font-bold inline border-b-8 border-[#C23B22]'>About</p>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-16  max-w-[1080px] mx-auto'>
                <div className='lg:w-1/3 lg:text-right text-2xl lg:text-4xl font-bold py-7 lg:py-0 order-2 lg:order-1' data-aos='fade-up' data-aos-duration='1000'>
                    <p>Passionate about solving<span className='text-[#C23B22]'> complex problems</span> and building scalable<span className='text-[#C23B22]'> backend systems</span>.</p>
                </div>
                <div className='w-[250px] h-[250px] flex justify-center order-1' data-aos='fade-up' data-aos-duration='1000'>
                    <img src="profile.png" alt="" className='rounded-full'/>
                </div>
                <div className='lg:w-1/3 order-3' data-aos='fade-up' data-aos-duration='1000'>
                    <p>I'm constantly seeking opportunities to expand my knowledge and stay up to date with industry trends. Collaborating with diverse teams and leveraging their strengths to drive success is something I truly enjoy. I would welcome the opportunity to connect and explore potential collaborations.</p>
                </div>
            </div>
        </div>
    );
};

export default About;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div name="about" className='flex flex-col justify-center items-center mx-10 md:mx-20 font-sans'>
            <div className='pb-10 mt-25'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C23B22]'>About</p>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-16  max-w-[1080px] mx-auto'>
                <div className='lg:w-1/3 text-center lg:text-right text-2xl lg:text-4xl font-bold py-7 lg:py-0 order-2 lg:order-1' data-aos='fade-up' data-aos-duration='1000'>
                    <p>Passionate about solving<span className='text-[#C23B22]'> complex problems</span> and building scalable<span className='text-[#C23B22]'> backend systems</span>.</p>
                </div>
                <div className='w-[200px] h-[200px] md:w-[250px] md:h-[250px] flex justify-center order-1' data-aos='fade-up' data-aos-duration='1000'>
                    <img src="profile.png" alt="" className='rounded-full'/>
                </div>
                <div className='lg:w-1/3 text-center lg:text-left order-3' data-aos='fade-up' data-aos-duration='1000'>
                    <p>Full-Stack Developer with 1.5 years of hands-on experience in building scalable applications using MERN, Django, PostgreSQL and AWS. Skilled in end-to-end software development, RESTful API design, firebase and custom authentication, integrating payment gateways and cloud services. Strong foundation in agile/scrum methodologies, project management with Jira and collaborative development environments.</p>
                </div>
            </div>
        </div>
    );
};

export default About;

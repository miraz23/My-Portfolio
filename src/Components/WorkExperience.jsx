import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import workExperiences from '../data/WorkData';

const WorkExperience = () => {
    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div name="experience" className='flex flex-col justify-center items-center mx-10 md:mx-20 font-sans py-20'>
            <div className='pb-10'>
                <p className='text-4xl font-bold inline border-b-4 border-[#C23B22]'>Work Experience</p>
            </div>

            <div className='max-w-5xl mx-auto'>
                <div className='relative'>
                    {/* Vertical Timeline Line */}
                    <div className='absolute left-[30.5px] md:left-[38.5px] lg:left-[39px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C23B22] via-[#C23B22] to-[#C23B22]'></div>
                    
                    {workExperiences.map((exp, index) => (
                        <div 
                            key={index}
                            className='relative flex items-start mb-16 last:mb-0'
                            data-aos='fade-up' 
                            data-aos-duration='1000'
                            data-aos-delay={index * 200}
                        >
                            {/* Timeline Checkpoint */}
                            <div className='relative z-10 flex flex-col items-center'>
                                {/* Company Logo/Icon */}
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-white dark:bg-gray-800 border-4 border-white dark:border-gray-700 shadow-lg flex items-center justify-center mb-2 overflow-hidden'>
                                    <img 
                                        src={exp.logo} 
                                        alt={`${exp.company} logo`}
                                        className='w-full h-full object-contain p-2'
                                    />
                                </div>
                                
                                {/* Timeline Node */}
                                <div className='w-4 h-4 bg-[#C23B22] rounded-full border-2 border-white dark:border-gray-800 shadow-md'></div>
                            </div>

                            {/* Content Card */}
                            <div className='ml-8 md:ml-12 flex-1'>
                                <div className='bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700'>
                                    <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4'>
                                        <div>
                                            <h3 className='text-2xl font-bold text-[#C23B22]'>{exp.position}</h3>
                                            <div className='flex items-center gap-2'>
                                                <p className='text-xl font-semibold text-gray-700 dark:text-gray-300'>{exp.company}</p>
                                                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-[#C23B22]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='text-left lg:text-right mt-2 md:mt-0'>
                                            <p className='text-gray-600 dark:text-gray-400 font-medium'>{exp.duration}</p>
                                        </div>
                                    </div>
                                    
                                    <ul className='space-y-2'>
                                        {exp.achievements.map((achievement, achIndex) => (
                                            <li 
                                                key={achIndex}
                                                className='flex items-start text-gray-700 dark:text-gray-300'
                                                data-aos='fade-right'
                                                data-aos-duration='800'
                                                data-aos-delay={index * 200 + achIndex * 100}
                                            >
                                                <span className='text-[#C23B22] mr-3 mt-1'>•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
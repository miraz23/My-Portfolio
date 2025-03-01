import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HtmlLogo from '../asset/html.png';
import CssLogo from '../asset/css.png';
import BootstrapLogo from '../asset/bootstrap.png';
import TailwindLogo from '../asset/tailwind.png';
import PythonLogo from '../asset/python.png';
import CppLogo from '../asset/cpp.png';
import DjangoLogo from '../asset/django.png';
import DrfLogo from '../asset/drf.png';
import JavaScript from '../asset/javascript.png';
import ReactLogo from '../asset/react.png';
import NodeJsLogo from '../asset/node.png';
import PostgresqlLogo from '../asset/postgresql.png';
import MysqlLogo from '../asset/mysql.png';
import MssqlLogo from '../asset/mssql.png';
import GithubLogo from '../asset/github.png';
import GitLogo from '../asset/git.png';

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div name='skills' className='mx-20 font-sans'>
            <div className='flex flex-col justify-center max-w-[1080px] mx-auto'>
                <div className='py-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#C23B22]'>Skills</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={HtmlLogo} className='w-20 mx-auto' alt="html icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={CssLogo} className='w-20 mx-auto' alt="css icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={BootstrapLogo} className='w-20 mx-auto' alt="css icon" />
                            <p className='my-4'>Bootstrap</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={TailwindLogo} className='w-20 mx-auto' alt="tailwind icon" />
                            <p className='my-4'>Tailwind CSS</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={CppLogo} className='w-20 mx-auto' alt="tailwind icon" />
                            <p className='my-4'>C/C++</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={PythonLogo} className='w-20 mx-auto' alt="tailwind icon" />
                            <p className='my-4'>Python</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={DjangoLogo} className='w-20 mx-auto' alt="tailwind icon" />
                            <p className='my-4'>Django</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={DrfLogo} className='w-20 mx-auto' alt="tailwind icon" />
                            <p className='my-4'>DRF</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={JavaScript} className='w-20 mx-auto' alt="javascript icon" />
                            <p className='my-4'>JavaScript</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={ReactLogo} className='w-20 mx-auto' alt="react icon" />
                            <p className='my-4'>ReactJs</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={NodeJsLogo} className='w-20 mx-auto' alt="nodejs icon" />
                            <p className='my-4'>Nodejs</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={PostgresqlLogo} className='w-20 mx-auto' alt="nodejs icon" />
                            <p className='my-4'>PostgreSQL</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={MysqlLogo} className='w-20 mx-auto' alt="nodejs icon" />
                            <p className='my-4'>MySQL </p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={MssqlLogo} className='w-20 mx-auto' alt="nodejs icon" />
                            <p className='my-4'>MS SQL</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={GithubLogo} className='w-20 mx-auto' alt="github icon" />
                            <p className='my-4'>Github</p>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-[#040c16] hover:scale-110 duration-300 rounded-md'>
                        <div data-aos='zoom-in-up' data-aos-duration='1500'>
                            <img src={GitLogo} className='w-20 mx-auto' alt="firebase icon" />
                            <p className='my-4'>Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills

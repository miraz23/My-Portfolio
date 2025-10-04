import React, { useEffect, useState } from "react";
import data from "../data/ProjectData";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectDetails from "./ProjectDetails";
import { HiArrowNarrowRight } from 'react-icons/hi'

const Projects = () => {
  const [projects] = useState(data);
  const [ShowDetails, setShowDetails] = useState(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleShowDetails = (id) => {
    setShowDetails(true);
    setActiveId(id);
  };

  return (
    <div name="projects" className="flex flex-col justify-center items-center mx-10 md:mx-20 font-sans">
      <div className="max-w-[1080px] mx-auto">
        <div className="pb-10 mt-25 text-center">
          <p className='text-4xl font-bold inline border-b-4 border-[#C23B22] leading-13'>Featured Projects</p>
        </div>
        
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div onClick={() => handleShowDetails(project.id)}>
              <div className="group flex justify-center items-center mx-auto relative z-[1]" key={index} data-aos="fade-zoom-in" data-aos-delay="50" data-aos-duration="1000">
                <figure>
                  <img className="rounded-[8px]" src={project.imgUrl} alt="figure"/>
                </figure>
                <div className="w-full h-full backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[8px] absolute top-0 left-0 z-[5] hidden group-hover:flex group-active:flex items-center justify-center">
                  <button onClick={() => handleShowDetails(project.id)} className="text-white bg-[#0a192f] hover:bg-[#53565a] py-2 px-4 rounded-[8px] font-500 ease-in duration-200 cursor-pointer">
                    See details
                  </button>
                </div>
              </div>
            </div>
          )).reverse()}
        </div>
      </div>
      {ShowDetails && <ProjectDetails setShowDetails={setShowDetails} activeId={activeId} />}
      <a href='https://github.com/miraz23?tab=repositories' target='_blank' rel='noreferrer'>
          <button className='text-white group border-2 px-6 py-3 mt-10 flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] active:bg-[#C23B22] active:border-[#C23B22] duration-300 font-sans'>Explore More
              <span className='group-hover:ml-6 group-active:ml-6 duration-300'><HiArrowNarrowRight className='ml-3' /></span>
          </button>
      </a>
    </div>
  );
};

export default Projects;

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <div name="contact" className="mx-10 md:mx-20 font-sans">
      <div className="flex flex-col justify-center items-center">
        <form action="" className="flex flex-col w-full max-w-[600px]" method="POST">
          <div className="text-center mt-25 pb-10">
            <p className='text-4xl font-bold inline border-b-4 border-[#C23B22]'>Contact</p>
          </div>
          <input className="bg-gray-300 text-slate-700 p-2 rounded-lg" type="text" placeholder="Name" name="name" required={true}/>
          <input className="my-4 p-2 bg-gray-300 text-slate-700 rounded-lg" type="email" placeholder="Email" name="email"/>
          <textarea className="bg-gray-300 text-slate-700 p-2 rounded-lg" name="message" placeholder="Your Message" rows="5"></textarea>

          <button className="text-white group border-2 px-4 py-3 mt-8 m-auto flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] duration-300 font-sans">
            Let's Connect
            <span className="group-hover:ml-4 duration-300">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </form>
      </div>
      <div className="text-center mt-10 mb-2">
        <p>© 2025 <span>Mohiul Islam Miraz</span> | All rights reseved.</p>
      </div>
    </div>
  );
};

export default Contact;

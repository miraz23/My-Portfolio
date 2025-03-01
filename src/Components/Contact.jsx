import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <div name="contact" className="flex flex-col justify-center items-center pt-20 mx-20 font-sans">
      <form action="" className="flex flex-col w-full max-w-[600px]" method="POST">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#C23B22]">Contact</p>
          <p className="py-4">Submit the form to get in touch with me</p>
        </div>
        <input className="bg-gray-300 text-slate-700 p-2 rounded-lg" type="text" placeholder="Name" name="name" required={true}/>
        <input className="my-4 p-2 bg-gray-300 text-slate-700 rounded-lg" type="email" placeholder="Email" name="email"/>
        <textarea className="bg-gray-300 text-slate-700 p-2 rounded-lg" name="message" placeholder="Your Message" rows="5"></textarea>

        <button className="text-white group border-2 px-4 py-3 my-8 m-auto flex items-center hover:bg-[#C23B22] hover:border-[#C23B22] duration-300 font-sans">
          Let's Connect
          <span className="group-hover:ml-4 duration-300">
            <HiArrowNarrowRight className="ml-4" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Contact;

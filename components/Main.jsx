import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home"className="w-full h-screen text-center bg-primary">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          
          <h1 className="py-4  text-gray-300">
            Hi, I&apos;m <span className="text-[#5651e5]">Norbert</span>
          </h1>
          <h1 className="py-2 text-gray-300">A Front-End Web Developer</h1>
          <p className=" pb-6 pt-8 text-gray-300 max-w-[90%] m-auto font-[OpenSans]">
            As an aspiring front-end engineer, I’m excited to start my first
            role and become part of the future of technology. Think you need
            someone like me? Get in touch.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 text-gray-200">
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-md shadow-gray-400  p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

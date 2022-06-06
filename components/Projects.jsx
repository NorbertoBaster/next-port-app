import React from "react";
import pic01 from "../public/assets/projects/pic01.jpg";
import pic02 from "../public/assets/projects/pic02.jpg";
import pic03 from "../public/assets/projects/pic03.jpg";
import pic04 from "../public/assets/projects/pic04.jpg";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className=" grid md:grid-cols-2 gap-8 ">
          <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image className="rounded-xl" src={pic01} alt="/" />
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image src={pic02} alt="/" />
          </div>
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image src={pic03} alt="/" />
          </div>
          <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image src={pic04} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

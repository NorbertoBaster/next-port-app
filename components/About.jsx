import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-gray-300">Who I am</h2>
          <p className="py-2 text-gray-400">Self taught front-end developer</p>
          <p className="py-2 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            esse, eum quibusdam vel iste voluptas minima sequi tenetur! Quasi ad
            id adipisci quisquam rerum pariatur repellat itaque excepturi soluta
            deserunt.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-1-5 ease-in duration-300">
          <Image
            className="rounded-xl -z-50"
            src="/assets/IMG_1859Artboard-1-copy.png"
            height="300"
            width="300"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

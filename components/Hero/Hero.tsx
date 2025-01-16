import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full flex justify-center items-center h-[90vh] bg-black">
      <div className="flex flex-col w-3/5 justify-center items-center">
        <h1 className="text-white text-center font-sans text-2xl leading-10 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
        <p className="text-white text-center font-sans text-sm leading-5">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <button className="w-auto border-2 border-white text-white my-7 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all">
          Explore New
        </button>
      </div>
    </div>
  );
};

export default Hero;

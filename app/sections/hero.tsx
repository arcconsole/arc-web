import ArcButton from "@/components/ui/arc-button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full justify-between items-center text-white min-h-dvh md:min-h-screen pl-5 lg:pl-32 relative overflow-hidden max-sm:pt-16">
      <div className="absolute z-[-1] bg-[#6004A7] backdrop-blur-3xl blur-[150px] w-[800px] h-[750px] rounded-full top-[5%] -right-24 animate-pulse duration-[3500] ease-linear"></div>
      <div className="absolute z-[-1] bg-[#6004A7] backdrop-blur-3xl blur-[150px] w-[500px] h-[500px] rounded-full top-[15%] -right-14 "></div>
      <div className="flex flex-col gap-16">
        <h1 className="md:text-6xl text-4xl font-ethnocentric">
          Powering the <br /> Future of Gaming.
        </h1>
        <div>
          <hr className="w-3/6 mb-4" />
          <p className="text-xl">
            Designed for Gamers, Powered by Innovation, Built Around You.
          </p>
        </div>
        <ArcButton className="w-fit" side="right">
          Join the Tribe.
        </ArcButton>
      </div>
      <div className="flex items-end justify-end relative text-[16rem] text-[#67378D] font-ethnocentric z-10 leading-none w-full lg:w-1/2">
        <Image
          src="/hero.webp"
          alt="Hero Image"
          width={600}
          height={600}
          className="rounded-lg z-50 relative"
          draggable={false}
          priority
        />
        <div className="absolute top-0 right-0 font-bold flex justify-between w-full">
          <span>N</span>
          <span>E</span>
        </div>
        <div className="absolute bottom-0 right-0 font-bold flex justify-between w-full">
          <span>M</span>
          <span>C</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

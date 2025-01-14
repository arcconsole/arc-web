import Image from "next/image";
import React from "react";

const Nemo = () => {
  return (
    <div className="flex flex-col gap-24 md:flex-row justify-between max-w-7xl w-full items-center mx-auto my-32 md:my-0 md:h-screen text-white relative p-4">
      <div className="absolute z-[-1] bg-[#6004A7] backdrop-blur-3xl blur-[150px] w-[800px] h-[500px] rounded-full top-[20%] -left-32 -translate-x-[25%] animate-pulse duration-[3500] ease-linear"></div>
      <div className="absolute z-[-1] bg-[#6004A7] backdrop-blur-3xl blur-[150px] w-[500px] h-[350px] opacity-50 rounded-full top-[25%] -left-24 -translate-x-[25%] "></div>
      <div className="w-full md:w-auto flex justify-center mb-8 md:mb-0">
        <Image
          src="/nemo.webp"
          alt="Nemo Image"
          width={500}
          height={500}
          className="rounded-lg"
          draggable={false}
        />
      </div>
      <div className="flex flex-col gap-8 w-full md:w-[35%] pl-5 md:pl-0 text-left pr-12">
        <h1 className="text-4xl font-ethnocentric uppercase"> arc Nemo</h1>
        <div className="">
          <p className="font-poppins">
            Dive into an immersive gaming experience with Arc Nemo, the console
            designed to seamlessly blend stunning visuals and lightning-fast
            performance.
          </p>
          <br />
          <p className="">
            Best in class native Android handheld console powered by{" "}
            <span className="font-bold">Snapdragon 8 Gen 2</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nemo;

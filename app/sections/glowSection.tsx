import ArcButton from "@/components/ui/arc-button";
import React from "react";

const GlowSection = () => {
  return (
    <div className="w-full flex justify-center items-center gap-16 text-white relative  md:py-8 -translate-y-32 z-[-1]">
      <div className="absolute z-[-1] bg-[#6004A7] backdrop-blur-3xl blur-[150px] w-[800px] h-[750px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse duration-[3500] ease-linear"></div>
      <div className="absolute z-[-1] bg-[#6004A7] backdrop-blur-3xl blur-[150px] w-[500px] h-[500px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <ArcButton className="w-fit" side="right">
        Join the Tribe.
      </ArcButton>
    </div>
  );
};

export default GlowSection;

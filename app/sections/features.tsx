"use client";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row w-full justify-between items-center text-white">
      <div className="felx flex-col gap-8 justify-center items-center w-full md:w-1/2 p-8">
        <h1>Product Features</h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2>Customizable</h2>
            <p>
              Customize your gaming experience with Arc Nemo's customizable
              controls and interface.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2>Performance</h2>
            <p>
              Powered by Snapdragon 8 Gen 2, Arc Nemo delivers lightning-fast
              performance and stunning visuals.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/fatures_image.webp"
        alt="Features Image"
        width={350}
        height={350}
        draggable={false}
      />
    </div>
  );
};

export default Features;

"use client";
import React from "react";
import Image from "next/image";
import { heroImages } from "@/constants";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  MotionConfig,
} from "framer-motion";

import { Reveal } from "./Reveal";

const Hero4 = () => {
  return (
    <section id="home" className="overflow-hidden sm:pb-16 pb-6 relative z-1 ">
      <div className="grid md:grid-cols-4 grid-cols-2 gap-0 rounded-xl   ">
        {/*
 <div
        style={{
          display: "grid",
          gridGap: "0px",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px,auto))",
        }}
      >

*/}
        {heroImages.map((images) => {
          const { img, alt, id, desc } = images;
          return (
            <div key={id} className=" relative  ">
              {/* Overlay */}

              <div className="absolute w-full h-full ">
                <Reveal>
                  <p className="sm:text-[20px] font-medium  bg-secondary text-white  rounded-r-xl px-4 py-[0.5px]    absolute sm:bottom-6 bottom-4">
                    {desc}
                  </p>
                </Reveal>
              </div>

              <img alt={alt} src={img} className=" w-full object-cover   " />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero4;

{
  /*  <p className="text-[20px] font-medium px-4 py-[0.5px] bg-secondary text-white rounded-full absolute w-full bottom-4">
                  {desc}
                </p> */
}

{
  /*  <div key={id} className="relative ">
              <div className="absolute w-full h-full ">
                <p className=" bg-secondary text-white rounded-full absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-0">
                  {desc}
                </p>
              </div>

              <img alt={alt} src={img} className=" w-full object-cover " />
            </div> */
}

{
  /*  <div key={id} className="relative ">
              <div className="absolute w-full h-full ">
                <p className=" bg-secondary text-white rounded-full absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-0">
                  {desc}
                </p>
              </div>

              <img alt={alt} src={img} className=" w-full object-cover " />
            </div> */
}

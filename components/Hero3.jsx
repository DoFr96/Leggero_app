"use client";
import React from "react";
import Image from "next/image";
import boatMain from "../public/images/boatMain.jpg";
import paddleBoard from "../public/images/paddleBoard.jpg";
import scooter from "../public/images/scooter.jpg";
import kayak from "../public/images/kayak.jpeg";
import { heroImages } from "@/constants";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  MotionConfig,
} from "framer-motion";

import { Reveal } from "./Reveal";

const Hero3 = () => {
  return (
    <section id="home" className="overflow-hidden sm:pb-16 pb-6 z-1 -mt-1">
      <div className="sm:grid hidden md:grid-cols-4 grid-cols-2 gap-0    ">
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
            <div
              key={id}
              className="flex flex-col  justify-center items-center"
            >
              <div className="relative -z-10">
                <Image
                  alt={alt}
                  src={img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p className="text-[20px] font-medium px-4 py-[0.5px] bg-secondary text-white rounded-full -mt-[100px] z-10">
                {desc}
              </p>
            </div>
          );
        })}
      </div>
      <div className="sm:hidden grid md:grid-cols-4 grid-cols-2 gap-0    ">
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
            <div
              key={id}
              style={{
                position: "relative",
                height: "250px",
              }}
              className="flex justify-center items-end  "
            >
              {" "}
              <Image
                alt={alt}
                src={img}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                style={{
                  objectFit: "cover",
                  zIndex: -1,
                  // cover, contain, none
                }}
                className=""
              />
              <Reveal>
                <p className="text-[16px] font-medium px-4 py-[0.5px] bg-secondary text-white rounded-full mb-5">
                  {desc}
                </p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero3;

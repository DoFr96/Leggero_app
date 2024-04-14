"use client";
import React from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  MotionConfig,
} from "framer-motion";
import { Reveal } from "./Reveal";

const Pricing = () => {
  return (
    <section
      id="price"
      className="sm:px-16 px-6 sm:max-w-[1280px] mx-auto  overflow-hidden mt-20"
    >
      <Reveal>
        <h3 className="sm:text-[50px] sm:leading-[70px] leading-[50px] text-[37px] text-center font-medium w-full mb-10">
          Pricing
        </h3>
      </Reveal>
    </section>
  );
};

export default Pricing;

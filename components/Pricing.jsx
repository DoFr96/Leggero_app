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
import Image from "next/image";
import sup1 from "../public/images/latest/sup1.jpg";
import kajakk from "../public/images/latest/kajakk.png";
import romobil from "../public/images/latest/romobil.png";

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
      <Reveal>
        <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start sm:pb-0 pb-2">
          <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
            <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
              <Image
                src={sup1}
                alt="sup"
                class="rounded-3xl"
                width={70}
                height={70}
              />
              <div class="ml-5">
                <span class="block text-2xl font-semibold">Paddle board</span>
                <span>
                  <span class="font-medium text-gray-500 text-xl align-top">
                    &euro;&thinsp;
                  </span>
                  <span class="text-3xl font-bold">10 </span>
                </span>
                <span class="text-gray-500 font-medium">/ hour</span>
              </div>
            </div>

            <a
              href="#/"
              class="flex justify-center items-center bg-secondary rounded-xl py-2 px-4 text-center text-white text-xl"
            >
              Rent
            </a>
          </div>

          <div class="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
            <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
              <Image
                src={kajakk}
                alt="sup"
                class="rounded-3xl"
                width={70}
                height={70}
              />
              <div class="ml-5">
                <span class="block text-3xl font-semibold text-white">
                  Electric scooter
                </span>
                <span>
                  <span class="font-medium text-xl align-top">
                    &euro;&thinsp;
                  </span>
                  <span class="text-3xl font-bold text-white">10</span>
                </span>
                <span class="font-medium">/ hour</span>
              </div>
            </div>

            <a
              href="#/"
              class="flex justify-center items-center bg-secondary rounded-xl py-3 px-4 text-center text-white text-2xl"
            >
              Rent
            </a>
          </div>

          <div class="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
            <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
              <Image
                src={romobil}
                alt="sup"
                class="rounded-3xl"
                width={70}
                height={70}
              />
              <div class="ml-5">
                <span class="block text-2xl font-semibold">Kayak</span>
                <span>
                  <span class="font-medium text-gray-500 text-xl align-top">
                    &euro;&thinsp;
                  </span>
                  <span class="text-3xl font-bold">10</span>
                </span>
                <span class="text-gray-500 font-medium">/ hour</span>
              </div>
            </div>

            <a
              href="#/"
              class="flex justify-center items-center bg-secondary rounded-xl py-2 px-4 text-center text-white text-xl"
            >
              Rent
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Pricing;

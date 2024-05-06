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

      <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start pb-1 ">
        {/* Paddle board section here */}

        <div class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <Reveal>
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
                  <span class="text-3xl font-bold">10</span>
                </span>
                <span class="text-gray-500 font-medium">/ hour</span>
              </div>
            </div>

            <button class="flex justify-center items-center bg-secondary rounded-xl py-2 px-4 text-center text-white text-xl transition-colors w-full duration-300 ease-in-out hover:bg-secHover">
              <a
                href="https://api.whatsapp.com/send?phone=385995163294&text=I%20want%20to%20rent%20paddle%20board%20for%20a%20day"
                className="w-full"
              >
                Rent
              </a>
            </button>
          </Reveal>
        </div>

        {/* Scooter section here */}

        <div class="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <Reveal>
            <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
              <Image
                src={romobil}
                alt="scooter"
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

            <button class="w-full flex justify-center items-center bg-secondary rounded-xl py-3 px-4 text-center text-white text-2xl transition-colors duration-300 ease-in-out hover:bg-secHover">
              {" "}
              <a
                href="https://api.whatsapp.com/send?phone=385995163294&text=I%20want%20to%20rent%20electric%20scooter%20for%20a%20day"
                className="w-full"
              >
                Rent
              </a>
            </button>
          </Reveal>
        </div>

        {/* Kayak section here */}

        <div class="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <Reveal>
            <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
              <Image
                src={kajakk}
                alt="kayak"
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

            <button class="w-full flex justify-center items-center bg-secondary rounded-xl py-2 px-4 text-center text-white text-xl transition-colors duration-300 ease-in-out hover:bg-secHover">
              {" "}
              <a
                href="https://api.whatsapp.com/send?phone=385995163294&text=I%20want%20to%20rent%20kayak%20for%20a%20day"
                className="w-full"
              >
                Rent
              </a>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

{
  /*  <a
        href="https://api.whatsapp.com/send?phone=385916005586&text=Send
      %20a%20quote"
      >
        Send Message with 385 message but whatssap
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=385916005586&text=Send
      %20a%20quote"
      >
        Send Message with 385 message but whatssap and dynamic atribute
      </a>

      <a href="whatsapp://send?text=Hello World!&phone=+385915085318">
        Ping me on WhatsApp +385
      </a>
      <a href="whatsapp://send?text=Hello World!&phone=385915085318">
        Ping me on WhatsApp 385
      </a> */
}

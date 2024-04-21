"use client";
import React from "react";
import Image from "next/image";
import boatMain from "../public/images/boatMain.jpg";
import marlin20 from "../public/images/marlin20.jpg";
import paddleboard1_1 from "../public/images/paddleboard1_1.jpg";
import girlonpaddleboard from "../public/images/girlonpaddleboard.jpg";
import lubenice from "../public/images/lubenicesvivan8_10.jpg";
import scooter from "../public/images/elscooter8_10.jpg";
import malilosinj from "../public/images/malilosinj1_1.jpg";
import valun from "../public/images/valun1_1.jpg";
import sup from "../public/images/sup8_10.jpg";
import seakayak from "../public/images/seakayak1_1.jpg";
import crestown from "../public/images/latest/crestown8_10.jpg";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  MotionConfig,
} from "framer-motion";
import { Reveal } from "./Reveal";

const Experience = () => {
  return (
    <section
      id="experience"
      className="sm:px-16 px-6 sm:max-w-[1280px] mx-auto  overflow-hidden mt-20"
    >
      <Reveal>
        <h3 className="sm:text-[50px] sm:leading-[70px] leading-[50px] text-[37px] text-center font-medium w-full mb-10">
          Experience To Remember
        </h3>
      </Reveal>

      <div className="flex sm:flex-row flex-col justify-between items-start ">
        <div className="sm:mr-20 sm:mb-0 mb-10 sm:w-1/3    ">
          <Reveal>
            <h4 className="text-[20px] font-medium ">Valun</h4>
          </Reveal>

          <Reveal>
            <p className="mb-5">
              The small fishing village of Valun is located on the southern
              coast of the Cres Bay. Between the hill and the coast itself where
              on the hill terraced houses rise from the sea to the top of the
              hill.
            </p>
          </Reveal>

          <Reveal>
            <h4 className="text-[20px] font-medium">Lubenice</h4>
          </Reveal>

          <Reveal>
            <p className="mb-5">
              There is this beautiful pebble beach - one of the most beautiful
              hidden beaches in the world. The German magazine Bild ranked it
              15th in the competition of the 40 most beautiful beaches in the
              world.
            </p>
          </Reveal>

          <Reveal>
            <h4 className="text-[20px] font-medium ">Cres</h4>
          </Reveal>

          <Reveal>
            <p className="mb-5">
              The best way to experience the city and its medieval architecture
              is to take a walk through numerous small streets in the old city
              centre. Narrow and high small houses attaching to each other and
              streets winding in a maze.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  sm:w-2/3">
          <div className="grid gap-4">
            <Reveal>
              <div>
                {/* 8:10 format */}
                <Image
                  width={0}
                  src={lubenice}
                  height={0}
                  alt="alt"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl group-hover:scale-110 transition duration-500"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                {/* 1:1 format */}
                <Image
                  width={0}
                  src={seakayak}
                  height={0}
                  alt="alt"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl group-hover:scale-110 transition duration-500"
                />
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4">
            <Reveal>
              <div>
                {/* 1:1 format */}
                <Image
                  width={0}
                  src={malilosinj}
                  height={0}
                  alt="alt"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl group-hover:scale-110 transition duration-500"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                {/* 8:10 format */}
                <Image
                  width={0}
                  src={scooter}
                  height={0}
                  alt="alt"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl group-hover:scale-110 transition duration-500"
                />
              </div>
            </Reveal>
          </div>
          <div className="grid gap-4">
            <Reveal>
              <div>
                {/* 8:10 format */}
                <Image
                  width={0}
                  src={sup}
                  height={0}
                  alt="alt"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl group-hover:scale-110 transition duration-500"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                {/* 1:1 format */}
                <Image
                  width={0}
                  src={valun}
                  height={0}
                  alt="alt"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl group-hover:scale-110 transition duration-500"
                />
              </div>
            </Reveal>
          </div>
          <div className="grid gap-4">
            <Reveal>
              <div>
                {/* 1:1 format */}
                <Image
                  width={0}
                  src={marlin20}
                  height={0}
                  alt="alt"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl group-hover:scale-110 transition duration-500"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                {/* 8:10 format */}
                <Image
                  width={0}
                  src={crestown}
                  height={0}
                  alt="alt"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl group-hover:scale-110 transition duration-500"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

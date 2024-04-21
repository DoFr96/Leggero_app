"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Slider from "react-slick";
import { programs } from "../constants";
import { Reveal } from "./Reveal";
import { heroImages } from "@/constants";
import { boatList } from "../constants";
import { GoPeople } from "react-icons/go";
import { IoBoatOutline } from "react-icons/io5";
import { PiEngineBold } from "react-icons/pi";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  MotionConfig,
} from "framer-motion";

const Collection = () => {
  const slider = React.useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    variableWidth: true,
  };
  return (
    <section
      id="collection"
      className="sm:px-10 px-6 sm:max-w-[1280px] mx-auto  overflow-hidden"
    >
      <div className="flex justify-center items-center my-5">
        <Reveal>
          <h3 className="sm:text-[50px] sm:leading-[70px] leading-[50px] text-[37px] text-center font-medium w-full z-10   ">
            Our Collection of Boats
          </h3>
        </Reveal>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  sm:gap-5 gap-3 p-2">
        {boatList.map((boats) => {
          const { id, name, motor, people, price, alt, img, length, time } =
            boats;
          return (
            <Reveal key={id}>
              <div className="group px-1 py-3 bg-collection1/30 flex flex-col rounded-xl shadow-md mb-3 transition-colors duration-300 ease-in-out hover:bg-collection2/40   ">
                <div className="flex flex-col justify-start items-center px-5  ">
                  {/* Person Length Name Motor */}
                  <div className="flex flex-row justify-start items-center gap-3 mb-5 ">
                    {/* People and length */}
                    <div className="flex flex-col justify-start  items-center ">
                      {/* People */}
                      <div className="flex flex-row justify-center items-center gap-1 bg-secondary px-3 mb-[4px]    rounded-xl text-white font-semibold ">
                        <p>{people}</p>
                        <GoPeople />
                      </div>
                      <div className="flex flex-row justify-center items-center gap-1 ">
                        <IoBoatOutline />
                        <p className="text-black/30 font-medium">{length}</p>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-start ">
                      <h3 className="text-[20px] font-semibold">{name}</h3>
                      <div className="flex flex-row justify-center items-center gap-1">
                        <PiEngineBold />
                        <p className="text-black/30 font-medium">{motor}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full overflow-hidden rounded-xl ">
                    <Image
                      width={0}
                      src={img}
                      height={0}
                      alt={alt}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-xl group-hover:scale-110 overflow-hidden select-none transition duration-500"
                    />
                  </div>
                  {/* time and price */}
                  <div className="flex flex-row gap-3 items-center justify-center my-5">
                    <div className="flex flex-col text-[17px]">
                      {time.map((itemTime, index) => {
                        return <p key={index}>{itemTime} </p>;
                      })}
                    </div>
                    <div className="flex flex-col ">
                      {" "}
                      {price.map((itemPrice, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-row items-center justify-center"
                          >
                            <p className="font-semibold text-secondary text-[17px]">
                              {itemPrice}
                            </p>
                            <p className="">&euro; per day</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <a
                    href={`https://api.whatsapp.com/send?phone=385995163294&text=${name}`}
                  >
                    Dynamic atribute
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?phone=385995163294&text=I%20want%20to%20rent%20a%20${name}%20for%20a%20day`}
                  >
                    Dynamic extra
                  </a>
                  <button className="bg-secondary rounded-xl font-medium text-[18px] py-[0.5px] w-[40%] mb-2 text-white hover:bg-secHover hover:text-white  transition-colors duration-300 ease-in-out ">
                    Rent
                  </button>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;

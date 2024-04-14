"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Slider from "react-slick";
import { Reveal } from "../../components/Reveal";
import { boatList } from "../../constants";
import { GoPeople } from "react-icons/go";
import { IoBoatOutline } from "react-icons/io5";
import { PiEngineBold } from "react-icons/pi";

const page = () => {
  return (
    <div className="sm:p-16 p-6 sm:max-w-[1280px] mx-auto  overflow-hidden">
      <div className="grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1  sm:gap-5 gap-3 p-2">
        {boatList.map((boats) => {
          const { id, name, motor, people, price, alt, img, length, time } =
            boats;
          return (
            <div
              key={id}
              className="px-1 py-3 bg-gray-100 flex flex-col rounded-xl shadow-md mb-3     "
            >
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
                <div className="relative ">
                  <Image
                    width={0}
                    src={img}
                    height={0}
                    alt={alt}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-xl"
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
                        <div key={index} className="flex flex-row items-center">
                          <p className="font-semibold text-secondary text-[17px]">
                            {itemPrice}
                          </p>
                          <p className="">€ per day</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <button className="bg-secondary rounded-xl font-medium text-[18px] py-[0.5px] w-[40%] mb-2 text-white ">
                  Rent
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;

"use client";
import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  MotionConfig,
} from "framer-motion";
import { Reveal } from "./Reveal";

const ContactInfo = () => {
  return (
    <section className="border-b-[0.5px] border-gray-200">
      <div className="sm:px-16 px-6  sm:max-w-[1280px] mx-auto  overflow-hidden flex justify-between ">
        <div className="flex flex-row justify-start items-center xs:gap-5 gap-3">
          <Reveal>
            <div className="flex items-center justify-center gap-1">
              <FaPhoneSquareAlt />
              <a href="tel:+385 99 5163294" className="text-info text-[14px]">
                +385 99 5163294
              </a>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex items-center justify-center gap-1">
              <MdEmail />
              <a
                href="mailto:rentaboatleggero@gmail.com"
                className="text-info text-[14px] sm:block hidden"
              >
                rentaboatleggero@gmail.com
              </a>
              <a
                href="mailto:rentaboatleggero@gmail.com"
                className="text-info text-[14px] sm:hidden block "
              >
                rentaboatleggero
              </a>
            </div>
          </Reveal>
        </div>

        <div className="sm:flex hidden flex-row justify-center items-center gap-3">
          <Reveal>
            <a
              href="https://www.instagram.com/rentaboatcres/?igsh=NnRyMjFzMWx1YnFp"
              target="_blank"
            >
              <IoLogoInstagram className="text-[20px]" />
            </a>
          </Reveal>

          <Reveal>
            <a
              href="https://www.facebook.com/share/RvSpm1cJbsXHMWQk/?mibextid=LQQJ4d"
              target="_blank"
            >
              <FaFacebook className="text-[20px]" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

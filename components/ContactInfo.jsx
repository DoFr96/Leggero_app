import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";

const ContactInfo = () => {
  return (
    <section className="border-b-[0.5px] border-gray-100">
      <div className="sm:px-16 px-6  sm:max-w-[1280px] mx-auto  overflow-hidden flex justify-between ">
        <div className="flex flex-row justify-start items-center xs:gap-5 gap-3">
          <div className="flex items-center justify-center gap-1">
            <FaPhoneSquareAlt />
            <a href="tel:+385 99 5163294" className="text-info text-[14px]">
              +385 99 5163294
            </a>
          </div>
          <div className="flex items-center justify-center gap-1">
            <MdEmail />
            <a
              href="mailto:rentaboatleggero@gmail.com"
              className="text-info text-[14px]"
            >
              rentaboatleggero@gmail.com
            </a>
          </div>
        </div>

        <div className="sm:flex hidden flex-row justify-center items-center gap-3">
          <a href="https://www.instagram.com" target="_blank">
            <IoLogoInstagram className="text-[20px]" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <FaYoutube className="text-[20px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

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
const Experience = () => {
  return (
    <section
      id="offer"
      className="sm:px-16 px-6 sm:max-w-[1280px] mx-auto  overflow-hidden mt-20"
    >
      <h3 className="sm:text-[50px] sm:leading-[70px] leading-[50px] text-[37px] text-center font-medium w-full mb-10">
        Experience to remember
      </h3>

      <div className="flex sm:flex-row flex-col justify-between items-start ">
        <div className="sm:mr-20 sm:mb-0 mb-10 sm:w-1/3    ">
          <h4 className="text-[20px] font-medium ">Valun</h4>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            nulla cum aperiam ratione porro fugit?
          </p>
          <h4 className="text-[20px] font-medium">Lubenice</h4>
          <p className="mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            ea quas autem quis itaque corporis!
          </p>
          <h4 className="text-[20px] font-medium ">Mali Losinj</h4>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
            minus voluptas vitae amet error consectetur?
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4  sm:w-2/3">
          <div class="grid gap-4">
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
          </div>
          <div class="grid gap-4">
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
          </div>
          <div class="grid gap-4">
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
          </div>
          <div class="grid gap-4">
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
            <div>
              {/* 8:10 format */}
              <Image
                width={0}
                src={boatMain}
                height={0}
                alt="alt"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="rounded-xl group-hover:scale-110 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

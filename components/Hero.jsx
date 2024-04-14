import React from "react";
import Image from "next/image";
import boatMain from "../public/images/boatMain.jpg";
import paddleBoard from "../public/images/paddleBoard.jpg";
import scooter from "../public/images/scooter.jpg";
import kayak from "../public/images/kayak.jpeg";
const Hero = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-0  sm:py-16 py-6 ">
      <div className="bg-red-400">Boats</div>
      <div className="bg-yellow-400">Paddle boards</div>
      <div className="bg-blue-400">Kayak</div>
      <div className="bg-green-400">Electric scooter</div>

      <div
        style={{
          display: "grid",
          gridGap: "0px",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px,auto))",
        }}
      >
        <Image
          alt="Boat"
          src={boatMain}
          fill
          style={{
            objectFit: "cover",
            // cover, contain, none
            zIndex: -1,
          }}
        />
      </div>

      <div
        style={{ position: "relative" }}
        className="flex justify-center items-center"
      >
        <Image
          alt="Boat"
          src={boatMain}
          fill
          style={{
            objectFit: "cover",
            // cover, contain, none
            zIndex: -1,
          }}
        />
        <p className="text-[40px] z-10">Boat</p>
      </div>
      <div style={{ position: "relative" }}>
        <Image
          alt="Boat"
          src={paddleBoard}
          fill
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
      <div style={{ position: "relative" }}>
        <Image
          alt="Boat"
          src={kayak}
          fill
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>

      <div
        style={{
          position: "relative",

          zIndex: -1,
        }}
        className="bg-green-200"
      >
        <Image
          alt="Boat"
          src={scooter}
          fill
          style={{
            objectFit: "cover", // cover, contain, none
          }}
        />
      </div>
    </div>
  );
};

export default Hero;

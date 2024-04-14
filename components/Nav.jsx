"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialMedia } from "@/constants";
import { navLinks } from "@/constants";
import { FaLocationDot } from "react-icons/fa6";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
  MotionConfig,
} from "framer-motion";
import { navLinksAccount } from "@/constants";
import { Reveal } from "./Reveal";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);

    if (!open) {
      document.querySelector("body").classList.add("overflow-hidden");
    }
    if (open) {
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  };

  {
    /* Animation section is this */
  }

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <nav className="   pt-2 flex flex-row justify-between items-center sm:px-16 px-6 sm:max-w-[1280px] mx-auto  overflow-hidden shadow-lg shadow-black/50  pb-2 z-10 mb-1 ">
      <div>
        <Reveal>
          <Link href={"/"}>
            <h1 className="text-[20px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f5af19] to-secondary uppercase">
              Leggero
            </h1>
          </Link>
        </Reveal>
      </div>{" "}
      <Reveal>
        <div className="sm:flex hidden flex-row flex-1 justify-end items-center gap-20 font-medium    ">
          <div className="flex gap-5 text-[20px] rounded-full border shadow-gray-50 px-3">
            {/* navigation on desktop mode */}
            {navLinks.map((link, index) => {
              const { title, href } = link;
              return (
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    originX: 0,
                  }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "tween" }}
                  className=""
                  key={index}
                >
                  <a href={href} className="hover:text-black/30">
                    {title}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="text-[18px] sm:flex hidden flex-row justify-center items-center gap-1">
          <FaLocationDot className="text-secondary" />
          <p>Cres Kovačine</p>
        </div>
      </Reveal>
      {/* here is menu for mobile phone */}
      {/* here is menu for mobile phone */}
      {/* here is menu for mobile phone */}
      {/* here is menu for mobile phone */}
      {/* here is menu for mobile phone */}
      <div className={`  sm:hidden flex flex-1 justify-end items-center`}>
        <div
          className="  hover:bg-secondary/30 rounded-full z-[999]  "
          onClick={toggleMenu}
        >
          <AnimatedHamburgerButton open={open} />
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className={` bg-white  fixed right-0 top-0 w-full h-screen origin-top text-black p-10 z-[998] `}
            >
              <div className="flex flex-col justify-center items-center -mt-20 h-full ">
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col justify-center gap-3 font-medium text-[25px] text-black "
                >
                  {/*  links for mobile navbar */}
                  {navLinks.map((link, index) => {
                    const { title, href, icon } = link;
                    return (
                      <motion.div
                        variants={mobileLinkVars}
                        key={index}
                        className="overflow-hidden"
                      >
                        {/*  once clicked rerenders toggle so it closes down navbar */}
                        <a
                          href={href}
                          className="  flex flex-row justify-start items-center gap-2"
                          onClick={() => {
                            toggleMenu();
                          }}
                        >
                          {" "}
                          <span className=" text-secondary">{icon}</span>
                          <motion.span
                            whileHover={{
                              scale: 1.1,
                              originX: 0,
                            }}
                            whileTap={{ scale: 0.8 }}
                            transition={{ type: "tween" }}
                          >
                            {" "}
                            {title}
                          </motion.span>{" "}
                        </a>
                      </motion.div>
                    );
                  })}

                  <motion.hr
                    variants={mobileLinkVars}
                    className="h-[2.5px] bg-secondary"
                  />
                  {/* social media links for mobile navbar */}
                  <div className="flex flex-row justify-center items-center md:mt-0 mt-4">
                    {socialMedia.map((social, index) => (
                      <motion.div
                        key={index}
                        variants={mobileLinkVars}
                        whileHover={{
                          scale: 1.1,
                          originX: 0,
                        }}
                        whileTap={{ scale: 0.8 }}
                        transition={{ type: "tween" }}
                        className={` object-contain cursor-pointer  hover:opacity-70 overflow-hidden  ${
                          index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                        }`}
                        onClick={() => window.open(social.link)}
                      >
                        {social.icon}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Nav;

export const AnimatedHamburgerButton = ({ open }) => {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    if (open === false) {
      setActivated(false);
    }
  }, [open]);

  console.log(open);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,

        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={activated ? "open" : "closed"}
        onClick={() => setActivated((pv) => !pv)}
        className="relative h-14 w-14 rounded-full "
      >
        {/* top bar */}
        <motion.span
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
          className="absolute h-1 w-8 bg-secondary"
          style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
        />
        {/* middle bar */}
        <motion.span
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
          className="absolute h-1 w-8 bg-secondary"
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        />
        {/* bottom bar */}
        <motion.span
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              left: "50.5%",
              bottom: ["35%", "50%", "54%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              left: "calc(50% + 10px)",
              bottom: ["54%", "50%", "35%"],
            },
          }}
          className="absolute h-1 w-4 bg-secondary"
          style={{
            left: "calc(50% + 10px)",
            bottom: "35%",
            x: "-65%",
            y: "50%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

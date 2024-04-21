import { FaCheck } from "react-icons/fa6";
import { LiaStarSolid } from "react-icons/lia";

import { IoHomeOutline } from "react-icons/io5";
import { GrCatalog } from "react-icons/gr";
import { IoPricetagOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { PiSignIn } from "react-icons/pi";
import { RiAccountPinBoxLine } from "react-icons/ri";

import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { BsTiktok } from "react-icons/bs";

import { TbSpeedboat } from "react-icons/tb";
import { PiBoatBold } from "react-icons/pi";

export const socialMedia = [
  {
    id: "instagram",
    icon: <IoLogoInstagram size={30} style={{ fill: "black" }} />,
    link: "https://www.instagram.com/",
  },
  {
    id: "facebook",
    icon: <BsTiktok size={30} style={{ fill: "black" }} />,
    link: "https://www.tiktok.com/",
  },
  {
    id: "twitter",
    icon: <FaYoutube size={30} style={{ fill: "red" }} />,
    link: "https://www.youtube.com/",
  },
];

export const navLinks = [
  { title: "Home", href: "/", icon: <IoHomeOutline /> },
  {
    title: "Collection",
    href: "/#collection",
    icon: <TbSpeedboat />,
  },
  { title: "Experience", href: "/#experience", icon: <GrCatalog /> },
  { title: "Pricing", href: "/#price", icon: <IoPricetagOutline /> },
];

export const navLinksAccount = [
  { title: "Login", href: "/login", icon: <PiSignIn /> },
  { title: "Register", href: "/register", icon: <RiAccountPinBoxLine /> },
];

export const heroImages = [
  {
    id: "boat_section",
    img: `/images/latest/boatwebP.webp`,
    alt: "boat",
    desc: "Boats",
  },
  {
    id: "paddleBoard_section",
    img: `/images/latest/paddleboard1_1webP.webp`,
    alt: "paddle board",
    desc: "Paddle Boards",
  },

  {
    id: "kayak_section",
    img: `/images/latest/kayak1_1webP.webp`,
    alt: "kayak",
    desc: "Kayaks",
  },
  {
    id: "scooter",
    img: `/images/latest/elscooterwebP0.webp`,
    alt: "scooter",
    desc: "Electric Scooters",
  },
];

export const boatList = [
  {
    id: "bsc",
    name: "BSC",
    motor: "Evinrude E-tec 150ks",
    people: "10",
    length: "5,71m",
    img: `/images/bsc_11.jpg`,
    alt: "bsc_boat",
    time: ["01.05. - 30.06.", "01.07. - 31.08.", "01.09. - 30.09."],
    price: ["230", "280", "230"],
  },
  {
    id: "marlin_20",
    name: "Marlin 20",
    motor: "Suzuki 150ks",
    people: "12",
    length: "6,00m",
    img: `/images/marlin20_1.jpg`,
    alt: "marlin_boat",
    time: ["01.05. - 30.06.", "01.07. - 31.08.", "01.09. - 30.09."],
    price: ["250", "300", "250"],
  },
  {
    id: "dulkan_420_dz",
    name: "Dulkan 420 DZ",
    motor: "Suzuki DF 6ks ",
    people: "6",
    length: "4,20m",
    img: `/images/dulkan420dz_11.jpg`,
    alt: "dulkan_boat",
    time: ["01.05. - 30.06.", "01.07. - 31.08.", "01.09. - 30.09."],
    price: ["60", "90", "60"],
  },
  {
    id: "dulkan_420_dz2",
    name: "Dulkan 420 DZ",
    motor: "Johnson 10 R4",
    people: "6",
    length: "4,20m",
    img: `/images/dulkan420dz_11.jpg`,
    alt: "dulkan2_boat",
    time: ["01.05. - 30.06.", "01.07. - 31.08.", "01.09. - 30.09."],
    price: ["80", "100", "80"],
  },
  {
    id: "gruppo_mare_pholas_23",
    name: "Gruppo M. P. 23",
    motor: "Evinrude E225DPX",
    people: "12",
    length: "6,98m",
    img: `/images/gruppomarepholas23.jpg`,
    alt: "gruppo_boat",
    time: ["01.05. - 30.06.", "01.07. - 31.08.", "01.09. - 30.09."],
    price: ["300", "350", "300"],
  },
  {
    id: "blumax_open_550",
    name: "Blumax Open 550",
    motor: "Yamaha F70",
    people: "7",
    length: "5,65m",
    img: `/images/blumaxopen550_1.jpg`,
    alt: "blumax_boat",
    time: ["01.05. - 30.06.", "01.07. - 31.08.", "01.09. - 30.09."],
    price: ["160", "200", "160"],
  },
  {
    id: "lomac_520",
    name: "Lomac 520",
    motor: "Yamaha F70",
    people: "6",
    length: "5,14m",
    img: `/images/lomac1_1.jpg`,
    alt: "lomac_boat",
    time: ["01.05. - 30.06.", "01.07. - 31.08.", "01.09. - 30.09."],
    price: ["60", "90", "60"],
  },
];

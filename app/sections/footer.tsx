import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  const links = ["Products", "Downloads", "Community", "Service"];

  const socials = [
    {
      icon: <FaLinkedin />,
      link: "#",
    },
    {
      icon: <FaInstagram />,
      link: "#",
    },
    {
      icon: <FaXTwitter />,
      link: "#",
    },
    {
      icon: <CiMail />,
      link: "#",
    },
  ];

  return (
    <div className="bg-[#5C357B] flex flex-col md:flex-row justify-between items-center py-4">
      <div className="container mx-auto flex flex-col md:flex-row min-h-28 max-w-[94vw] items-center justify-between px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 mb-4 md:mb-0"
          prefetch={false}
        >
          <Image
            src={"/arc_logo.svg"}
            alt="Acme Inc"
            width={60}
            height={60}
            className="rounded-full"
          ></Image>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="flex flex-col md:flex-row items-center gap-6 text-base font-medium font-poppins mb-4 md:mb-0">
          {links.map((link) => (
            <Link key={link} href="#" className="text-white" prefetch={false}>
              {link}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-center md:items-end justify-center gap-4 text-white text-sm font-poppins">
          <div className="flex items-center gap-4 text-2xl">
            {socials.map((social) => (
              <Link key={social.link} href={social.link} prefetch={false}>
                {social.icon}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs font-light">
            <span>Terms and Conditions</span> <span>Service Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

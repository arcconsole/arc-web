import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = ["Products", "Downloads", "Community", "Service"];
  return (
    <div className="bg-[#5C357B] felx justify-between items-center">
      <div className="container mx-auto flex min-h-28 max-w-[94vw] items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Image
            src={"/arc_logo.svg"}
            alt="Acme Inc"
            width={60}
            height={60}
            className="rounded-full"
          ></Image>
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className=" items-center gap-6 text-base font-medium font-poppins flex">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="hover:text-gray-900 text-white"
              prefetch={false}
            >
              {link}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-white">gubgbrug</div>
      </div>
    </div>
  );
};

export default Footer;

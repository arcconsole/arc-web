"use client";

import React, { useState } from "react";
import ArcButton from "./ui/arc-button";
import { Input } from "./ui/input";
import ShineBorder from "./ui/shine-border";
import { CircleX } from "lucide-react";
import Confetti, { ConfettiRef } from "./ui/confetti";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
const WaitlistDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setConfettiHidden(true);
    setIsOpen(false);
    setIsFlipped(false);
  };
  const confettiRef = React.useRef<ConfettiRef>(null);
  const [confettiHidden, setConfettiHidden] = useState(true);
  const [confettiKey, setConfettiKey] = useState(0);
  const formRef = React.useRef<HTMLFormElement>(null!);

  const handelFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };
    console.log("Form data:", data);
    const sheet_url = process.env.NEXT_PUBLIC_SHEET_URL;
    if (!sheet_url) {
      console.error("Sheet URL not found");
      return;
    }
    fetch(sheet_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: "no-cors",
    })
      .then(() => {
        setConfettiHidden(false);
        setConfettiKey((prevKey) => prevKey + 1);
        confettiRef.current?.fire({});
        setTimeout(() => {
          setIsFlipped(true);
        }, 700);
      })
      .catch((err) => {
        console.error("Error submitting form", err);
      });
  };

  return (
    <>
      <ArcButton className="w-fit" side="left" onClick={handleButtonClick}>
        Join the Tribe.
      </ArcButton>
      {isOpen && (
        <div
          style={{ perspective: "1000px" }}
          className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center"
        >
          {/* Front Side */}
          <motion.div
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              position: "relative",
            }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl w-full max-h-[80vh] h-full"
          >
            <ShineBorder
              borderRadius={15}
              borderWidth={1}
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className=" text-white p-4 rounded shadow-lg w-full h-full  bg-[#0D0613] relative overflow-hidden flex flex-col items-center justify-center gap-12"
            >
              <div className="absolute  bg-[#251243] backdrop-blur-3xl blur-3xl w-[200px] h-[400px] rounded-full top-1/2 -translate-y-1/2 -left-24"></div>

              <span
                className="close cursor-pointer absolute top-20 right-10 z-10"
                onClick={handleClose}
              >
                <CircleX />
              </span>
              <div className="flex flex-col text-center gap-5">
                <h1 className="text-6xl font-hepta">Join the Waitlist</h1>
                <p>Sign up to get latest updates straight to your inbox.</p>
              </div>
              <div className="bg-gradient-to-r from-[#542679] to-transparent w-full sm:w-3/6 px-4 sm:px-32 p-4 sm:p-8 rounded-3xl">
                <form
                  ref={formRef}
                  onSubmit={handelFormSubmit}
                  className="space-y-4 relative"
                >
                  {/* Name Input */}
                  <div>
                    <Input
                      name="name"
                      type="text"
                      placeholder="Name"
                      className="w-full h-12 px-4 py-3 bg-black text-white placeholder-gray-400 border border-purple-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                  {/* Phone Number Input */}
                  <div>
                    <Input
                      name="phone"
                      type="number"
                      placeholder="Phone Number"
                      className="w-full h-12 px-4 py-3 bg-black text-white placeholder-gray-400 border border-purple-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                  {/* Email Input */}
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="w-full h-12 px-4 py-3 bg-black text-white placeholder-gray-400 border border-purple-600 rounded-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                  {/* Submit Button */}
                  <div className="flex justify-center pt-5">
                    <ArcButton btnType="submit" side="left">
                      Join Now!
                    </ArcButton>
                  </div>
                </form>
              </div>
              <Confetti
                key={confettiKey}
                ref={confettiRef}
                className={cn(
                  "absolute left-0 top-0 z-0 size-full ",
                  confettiHidden ? "hidden" : ""
                )}
              />
            </ShineBorder>
          </motion.div>

          {/* Back Side */}
          <motion.div
            initial={{ rotateY: -180 }}
            animate={{ rotateY: isFlipped ? 0 : -180 }}
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              position: "absolute",
            }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl w-full max-h-[80vh] h-full"
          >
            <ShineBorder
              borderRadius={15}
              borderWidth={1}
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className=" text-white p-4 rounded shadow-lg w-full h-full  bg-[#0D0613] relative overflow-hidden flex flex-col items-center justify-center gap-12"
            >
              <div className="absolute  bg-[#251243] backdrop-blur-3xl blur-3xl w-[200px] h-[400px] rounded-full top-1/2 -translate-y-1/2 -left-24"></div>

              <span
                className="close cursor-pointer absolute top-20 right-10 z-10"
                onClick={handleClose}
              >
                <CircleX />
              </span>
              <div className="flex flex-col text-center gap-8">
                <h1 className="text-6xl font-hepta">Join the Tribe</h1>
                <p className="text-xl">Join our community to get updates!</p>
              </div>
              <ArcButton side="left">Join Now!</ArcButton>
            </ShineBorder>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default WaitlistDialog;

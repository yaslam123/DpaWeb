"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { HeroVideoDialog } from "./ui/hero-video-dialog";

function KnowYourRights() {
  // Variants for animations
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const headerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.05,
      },
    },
  };

  const charVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full py-20 lg:py-30 ">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="grid container grid-cols-1 gap-8 lg:grid-cols-2 dark:border-zinc-800 p-8"
        >
          <div className="flex flex-col">
            <div className="flex flex-col space-y-6">
              <motion.div variants={textVariant}>
                <Badge
                  variant="outline"
                  className="text-zinc-700 justify-center"
                >
                  // Know Your Rights
                </Badge>
              </motion.div>
              <motion.h1
                className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl font-bold tracking-wide"
                initial="hidden"
                animate="visible"
                variants={headerVariant}
              >
                {"Know Your".split("").map((char, index) => (
                  <motion.span key={`line1-${index}`} variants={charVariant}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <br />
                {"Personal Data".split("").map((char, index) => (
                  <motion.span key={`line2-${index}`} variants={charVariant}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
              <p className="max-w-[42rem] leading-normal text-justify text-black text-lg sm:text-lg sm:leading-8">
                Your Name ,Your Phone Number, Your Email, Your ID Card or
                Passport, Your Bank Account, Your Identity. And any other
                information that can identify a person. Do you know, citizen,
                that this is your private data? Therefore, The Government of
                Somalia has enacted the Data Protection Act, signed by President
                Hassan Sheikh Mohamud on March 20, 2023, which established the
                Data Protection Authority. The Data Protection Act, Law No. 005,
                mandates private institutions, government entities, and NGOs to
                protect personal data.
              </p>
            </div>
          </div>
          <div className="flex relative items-center">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/Zqwynk2okxQ?si=AP2IWNG1fkoXF3si"
              thumbnailSrc="/images/Covers/img-3.jpg"
              thumbnailAlt="Hero Video"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default KnowYourRights;

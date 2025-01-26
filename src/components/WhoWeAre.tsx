"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { TransitionPanel } from "./ui/transition-panel";

import { TfiTarget } from "react-icons/tfi";
import { FiEye } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";

function AboutTheInsti() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ITEMS = [
    {
      title: "Mission",
      subtitle: "Our Mission",
      content:
        "The Data Protection Authority (DPA) is dedicated to fostering a culture of accountability and trust by ensuring that all businesses, private entities, and public institutions govern and process personal data responsibly, transparently, and in full compliance with legal and ethical standards. Our mission extends to empowering individuals with their data rights while advancing innovation in privacy protection.",
      icon: <TfiTarget className="w-6 h-6" />,
    },
    {
      title: "Vision",
      subtitle: "Our Vision",
      content:
        "To be the trusted guardian of data privacy, ensuring the transparency, integrity, and security of Somalis’ personal information in an increasingly digital world.",
      icon: <FiEye className="w-6 h-6" />,
    },
    {
      title: "Values",
      subtitle: "Our Core Values",
      content: [
        "Transparency and Accountability",
        "Innovation and Adaptability",
        "Integrity and Confidentiality",
        "Data Governance Ethics",
      ],
      icon: <IoDiamondOutline className="w-6 h-6" />,
    },
  ];

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
    <section className="w-full py-20 lg:py-30">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariant}
          className="grid container p-8 grid-cols-1 gap-8 lg:grid-cols-2 dark:border-zinc-800"
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col space-y-4">
              <motion.div variants={textVariant}>
                <Badge
                  variant="outline"
                  className="text-zinc-700 justify-center"
                >
                  About The Institution
                </Badge>
              </motion.div>
              <motion.h1
                className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl font-bold tracking-wide"
                initial="hidden"
                animate="visible"
                variants={headerVariant}
              >
                {"The Data Protection".split("").map((char, index) => (
                  <motion.span key={`line1-${index}`} variants={charVariant}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                <br />
                {"Authority of Somalia".split("").map((char, index) => (
                  <motion.span key={`line2-${index}`} variants={charVariant}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <motion.div variants={textVariant}>
              <div className="mb-4 flex space-x-2">
                {ITEMS.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`rounded-md lg:px-6 lg:py-4 px-3 py-1   flex items-center space-x-2 text-md font-medium ${
                      activeIndex === index
                        ? "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400"
                    }`}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>
              <div className="overflow-hidden border-t border-dashed border-zinc-200 dark:border-zinc-700">
                <TransitionPanel
                  activeIndex={activeIndex}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  variants={{
                    enter: { opacity: 0, y: -50, filter: "blur(4px)" },
                    center: { opacity: 1, y: 0, filter: "blur(0px)" },
                    exit: { opacity: 0, y: 50, filter: "blur(4px)" },
                  }}
                >
                  {ITEMS.map((item, index) => (
                    <div key={index} className="py-2">
                      <h3 className="mb-2 text-black dark:text-zinc-100">
                        {item.subtitle}
                      </h3>
                      {Array.isArray(item.content) ? (
                        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                          {item.content.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {item.content}
                        </p>
                      )}
                    </div>
                  ))}
                </TransitionPanel>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col py-10">
            <p className="max-w-[42rem] leading-normal text-justify text-black text-lg sm:text-lg sm:leading-8">
              {" "}
              The Somalia Data Protection Authority (DPA) is the national
              independent authority responsible for protecting personal privacy
              and monitoring that all organizations are compliant with the Data
              Protection Act (no.005 which was passed in March 2023). <br />
              The role of DPA is to implement the Data Protection Act, as well
              as providing services that facilitate protection of personal data,
              such as; awareness campaigns, registration, trainings, creating
              and passing regulations specific to storing and processing data.
              <br />
              All citizens have the right to the privacy of their personal data,
              and that is a fundamental right. The Data Protection Authority has
              been entrusted by the federal government of Somalia to safeguard
              that right, and is responsible for ensuring compliance with the
              Data Protection Act. The Act gives citizens’ the autonomy to
              decide how their data is processed, used and who it is shared
              with.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutTheInsti;

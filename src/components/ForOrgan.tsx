"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const organizationItems = [
  {
    title: "Data Protection Basics",
    description:
      "Data Protection Basics: is a comprehensive guide aimed at demystifying the essentials of data protection.",
    href: "/fto/DPB",
  },
  {
    title: "Know Your Obligations",
    description:
      "This section contains information about the obligations placed on organisations under data protection authorities.",
  },
  {
    title: "What do you need to know about data",
    description:
      "This is critical information that individuals should understand regarding data handling, especially in the context of privacy.",
  },
  {
    title: "Direct Marketing: Opt-In and Opt-Out",
    description:
      "Involves emails, texts, calls, and mail. Clear Opt-In and Opt-Out options ensure privacy and legal compliance.",
    href: "/fto/DM",
  },
  {
    title: "Code of Conduct & Registration",
    description:
      "Mandates lawful data processing, registration with the authority, and regular public updates.",
    href: "/fto/COC",
  },
  {
    title: "Education",
    description:
      "Educational institutions handle a vast amount of personal data related to students, staff, and faculty.",
    href: "/fto/Education",
  },
  {
    title: "Health",
    description:
      "Healthcare providers must prioritize the confidentiality and security of patient data to maintain trust and comply with legal requirements.",
    href: "/fto/Health",
  },
  {
    title: "Telecommunications",
    description:
      "Telecom companies handle vast amounts of user data, including personal information and communication records.",
    href: "/fto/Telecom",
  },
  {
    title: "Banking and Finance",
    description:
      "Banking providers must prioritize the confidentiality and security of client data to maintain trust and comply with legal requirements.",
    href: "/fto/Banking",
  },
  {
    title: "DPIA & Privacy by Design and Default",
    description:
      "When a data controller is involved in processing activities that are likely to result in high risk to the rights.",
    href: "/fto/DPIA",
  },

  {
    title: "E-Governance and Online Data Collection",
    description:
      "E-Governance refers to the use of digital technologies and the internet to provide public services.",
    href: "/fto/E-Governance",
  },
  {
    title: "Compliance Checklist",
    description:
      "Ensures data law compliance with policy, inventory, consent, rights, security, audits, training, and breach response.",
    href: "/fto/Compliance-Checklist",
  },
];

function ForOrgan() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDataDialogOpen, setIsDataDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const openDataDialog = () => {
    setIsDataDialogOpen(true);
  };

  const closeDataDialog = () => {
    setIsDataDialogOpen(false);
  };

  // Variants for animations
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="mil-Bg py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textVariant}
        className="container mx-auto px-8"
      >
        <div className="flex flex-col space-y-6">
          <motion.div variants={textVariant}>
            <Badge variant="outline" className="text-zinc-700 justify-center">
              // Know Your Obligations
            </Badge>
          </motion.div>
          <motion.h1
            className="xl:text-5xl lg:text-4xl md:text-5xl text-3xl font-bold tracking-wide"
            initial="hidden"
            animate="visible"
          >
            For Organizations
          </motion.h1>
        </div>
        <div className="flex flex-col lg:flex-row mt-20">
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            {organizationItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-row p-5 border border-gray-300 rounded-lg"
              >
                {item.title === "Know Your Obligations" ? (
                  <div
                    onClick={openDialog}
                    className="group flex h-[100%] w-full cursor-pointer"
                  >
                    <div className="flex w-full flex-row items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:bg-primary group-hover:rotate-180 group-hover:ease-in-out">
                        <FaArrowRight
                          style={{ color: "white", fontSize: "18px" }}
                        />
                      </div>
                      <div className="flex w-[80%] flex-col">
                        <h2 className="text-[20px] font-extrabold group-hover:text-primary">
                          {item.title}
                        </h2>
                        <p className="text-justify text-black">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : item.title === "What do you need to know about data" ? (
                  <div
                    onClick={openDataDialog}
                    className="group flex h-[100%] w-full cursor-pointer"
                  >
                    <div className="flex w-full flex-row items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:bg-primary group-hover:rotate-180 group-hover:ease-in-out">
                        <FaArrowRight
                          style={{ color: "white", fontSize: "18px" }}
                        />
                      </div>
                      <div className="flex w-[80%] flex-col">
                        <h2 className="text-[20px] font-extrabold group-hover:text-primary">
                          {item.title}
                        </h2>
                        <p className="text-justify text-black">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a href={item.href} className="group flex h-[100%] w-full">
                    <div className="flex w-full flex-row items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition duration-300 group-hover:bg-primary group-hover:rotate-180 group-hover:ease-in-out">
                        <FaArrowRight
                          style={{ color: "white", fontSize: "18px" }}
                        />
                      </div>
                      <div className="flex w-[80%] flex-col">
                        <h2 className="text-[20px] font-extrabold group-hover:text-primary">
                          {item.title}
                        </h2>
                        <p className="text-justify text-black">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Dialog */}
      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
          <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
            <div className="overflow-y-auto rounded-xl mil-Bg">
              <DialogHeader className="contents space-y-0 text-left">
                <DialogTitle className="text-3xl  px-6 py-6">
                  Know Your Obligations
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="px-6">
                    <div className="space-y-12">
                      <div>
                        <h1 className="text-base">
                          This section contains information about the
                          obligations placed on organisations under data
                          protection law.
                        </h1>
                      </div>
                      <div className="flex flex-col space-y-6">
                        <a href="/fto/Access-Portability">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">
                              Access and Portability
                            </span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                        <a href="/fto/Accountability-Obligation">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">
                              Accountability obligation
                            </span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                        <a href="/fto/Lawful-Processing">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">
                              Lawful processing
                            </span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                        <a href="/fto/Data-Processor">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">
                              Data Processor
                            </span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                        <a href="/fto/Data-Controller">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">
                              Data Controller
                            </span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                        <a href="/fto/DPO">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">
                              Data Protection Officers
                            </span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="px-6 py-6 sm:justify-end">
                <DialogClose asChild>
                  <Button size="lg" type="button">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      )}
      {isDataDialogOpen && (
        <Dialog open={isDataDialogOpen} onOpenChange={closeDataDialog}>
          <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
            <div className="overflow-y-auto rounded-xl mil-Bg">
              <DialogHeader className="contents space-y-0 text-left">
                <DialogTitle className="text-3xl  px-6 py-6">
                  What do you need to know about data
                </DialogTitle>
                <DialogDescription asChild>
                  <div className="px-6">
                    <div className="space-y-12">
                      <div>
                        <h1 className="text-base">
                          This section contains information about the what you
                          know about data under data protection law.
                        </h1>
                      </div>
                      <div className="flex flex-col space-y-6">
                        <a href="/fto/DRESC">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">DRESC</span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                        <a href="/fto/Data-Transfer">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">
                              Data Tranfer
                            </span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                        <a href="/fto/Data-Breach">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">
                              Data Breach
                            </span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                        <a href="/fto/CBDT">
                          <Button
                            size="lg"
                            className="group gap-4 px-0"
                            variant="link"
                          >
                            <span className="text-lg font-semibold">
                              Cross Border Data Tranfer
                            </span>
                            <ArrowRight
                              className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                              size={16}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className="px-6 py-6 sm:justify-end">
                <DialogClose asChild>
                  <Button size="lg" type="button">
                    Cancel
                  </Button>
                </DialogClose>
              </DialogFooter>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

export default ForOrgan;

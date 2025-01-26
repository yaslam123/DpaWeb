"use client";

import { motion } from "framer-motion";

import { ArrowDown } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const Docs = () => {
  // Animation variants for page transition
  const pageVariant = {
    hidden: { opacity: 0, y: 50 }, // Initial state (off-screen, faded out)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }, // Final state (onscreen, faded in)
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariant}
      className="w-full py-20 lg:py-30"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col overflow-clip rounded-xl border border-gray-300 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="Feature 1"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <div>
                <Badge variant="outline" className="text-zinc-700 font-medium">
                  // Our Act
                </Badge>
              </div>
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                The Data Protection Act
              </h3>
              <p className="text-muted-foreground text-justify lg:text-lg">
                The Data Protection Authority (DPA), founded in 2023 under Law
                005, is an independent nationwide authority dedicated to
                safeguarding individual privacy. Aligned with international
                privacy principles, DPA focuses on responsible data management
                and the protection of personal information of Somali people in
                the digital age.
              </p>
              <div className="flex flex-row space-x-8">
                <a href="/docs/act/Somalia Data Protection Act-2.pdf" download>
                  <Button size="lg" className="group gap-4">
                    <span>Download in English</span>
                    <ArrowDown
                      className="opacity-60 transition-transform group-hover:translate-y-0.5"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Button>
                </a>
                <a
                  href="/docs/act/Soo Gudbin Qaraar Gole ( Ansixinta Sharciga Dhowrista Xogta Dadweynaha )_0001.pdf"
                  download
                >
                  <Button size="lg" variant="outline" className="group gap-4">
                    <span>Download in Somali</span>
                    <ArrowDown
                      className="opacity-60 transition-transform group-hover:translate-y-0.5"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse overflow-clip rounded-xl border border-gray-300 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center space-y-4 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <div>
                <Badge variant="outline" className="text-zinc-700 font-medium">
                  // Our Regulations
                </Badge>
              </div>
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Data Protection Authority Regulations
              </h3>
              <p className="text-muted-foreground text-justify lg:text-lg">
                Somalia’s Data Protection Regulation (DPR) is legislation that
                is designed to protect the data of Somalia citizens. DPR
                implementation affects every single organization and business
                that interacts with in Somali, regardless of where they may be
                located.
              </p>
              <div className="flex flex-row space-x-8">
                <a href="/docs/regulations/DPA implementation.pdf" download>
                  <Button size="lg" className="group gap-4">
                    <span>Download in English</span>
                    <ArrowDown
                      className="opacity-60 transition-transform group-hover:translate-y-0.5"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-2.svg"
                alt="Feature 2"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="flex flex-col overflow-clip rounded-xl border border-gray-300 md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="Feature 1"
                className="aspect-[16/9] h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4 px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <div>
                <Badge variant="outline" className="text-zinc-700 font-medium">
                  // Our Procedures
                </Badge>
              </div>
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                The Data Protection Authority Procedures
              </h3>
              <p className="text-muted-foreground text-justify lg:text-lg">
                ADR in the context of data protection refers to Alternative
                Dispute Resolution. It involves mechanisms and processes used by
                data protection authorities or relevant entities to resolve
                disputes, conflicts, or disagreements arising from issues
                related to the processing, handling, or protection of personal
                data, without resorting to formal legal proceedings.
              </p>
              <div className="flex flex-row space-x-8">
                <a href="/docs/procedures/ADR PROCEDURE .pdf" download>
                  <Button size="lg" className="group gap-4">
                    <span>Download in English</span>
                    <ArrowDown
                      className="opacity-60 transition-transform group-hover:translate-y-0.5"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Button>
                </a>
                <a href="/docs/procedures/xalinta khilaafaadyada.pdf" download>
                  <Button size="lg" variant="outline" className="group gap-4">
                    <span>Download in Somali</span>
                    <ArrowDown
                      className="opacity-60 transition-transform group-hover:translate-y-0.5"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Docs;

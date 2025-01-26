"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "./button";
import { TextEffect } from "./text-effect";

function AnimatedHero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Data", "Rights"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-5 lg:pt-40 items-left justify-left flex-col px-4">
          <div className="flex gap-4 space-y-2 flex-col">
            <span className="text-lg leading-relaxed  text-zinc-300 max-w-2xl text-left">
              {" "}
              Safeguarding Your Privacy
            </span>
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-normal text-left font-regular">
              <span className="relative flex w-full justify-left overflow-hidden text-left md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    Your {title}
                  </motion.span>
                ))}
              </span>
              <span className="font-semibold">
                Our <span className=" text-[#47BDFF]">Responsibility</span>{" "}
              </span>
            </h1>

            {/* <p className="text-md md:text-xl leading-relaxed md:text-justify tracking-tight text-zinc-300 max-w-2xl text-left">
              Safeguarding your privacy with integrity, empowering you to take
              control of your personal information, and ensuring it is protected
              every step of the way.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedHero;

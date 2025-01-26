"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SVGProps } from "react";
import Image from "next/image";

// Define types
interface Logo {
  id: number;
  name: string;
  src: string;
}

interface LogoColumnProps {
  logos: Logo[];
  columnIndex: number;
  currentTime: number;
}

// Main component
export function LogoCarousel() {
  const [columns, setColumns] = useState(4);
  const [logoColumns, setLogoColumns] = useState<Logo[][]>([]);
  const [time, setTime] = useState(0);
  const CYCLE_DURATION = 2000; // 2 seconds per logo

  // Define logos using public SVGs
  const logos = useMemo<Logo[]>(
    () => [
      { id: 1, name: "Dub", src: "/images/LOGO/DPA - LOGO-lock.png" },
      { id: 2, name: "Supabase", src: "/images/LOGO/DPA - LOGO-lock.png" },
      { id: 3, name: "Vercel", src: "/images/LOGO/DPA - LOGO-lock.png" },
      { id: 4, name: "Resend", src: "/images/LOGO/DPA - LOGO-lock.png" },
      { id: 5, name: "Shadcn", src: "/images/LOGO/DPA - LOGO-lock.png" },
      { id: 6, name: "Dub", src: "/images/LOGO/DPA - LOGO-lock.png" },
      { id: 7, name: "Supabase", src: "/images/LOGO/DPA - LOGO-lock.png" },
      { id: 8, name: "Vercel", src: "/images/LOGO/DPA - LOGO-lock.png" },
      { id: 9, name: "Resend", src: "/images/LOGO/DPA - LOGO-lock.png" },
      { id: 10, name: "Shadcn", src: "/images/LOGO/DPA - LOGO-lock.png" },
    ],
    []
  );

  // Adjust columns dynamically based on screen size
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumns(4); // `xl` and `lg`
      else if (window.innerWidth >= 768) setColumns(3); // `md`
      else setColumns(2); // `sm` and smaller
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Distribute logos across columns
  const distributeLogos = useCallback(
    (logos: Logo[]) => {
      const shuffled = [...logos].sort(() => Math.random() - 0.5);
      const result: Logo[][] = Array.from({ length: columns }, () => []);

      shuffled.forEach((logo, index) => {
        result[index % columns].push(logo);
      });

      // Ensure equal length columns
      const maxLength = Math.max(...result.map((col) => col.length));
      result.forEach((col) => {
        while (col.length < maxLength) {
          col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
        }
      });

      return result;
    },
    [columns]
  );

  // Initialize logo columns
  useEffect(() => {
    setLogoColumns(distributeLogos(logos));
  }, [logos, distributeLogos]);

  // Update time for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex xl:gap-40 lg:gap-34 md:gap-12 sm:gap-12 flex-wrap justify-center relative h-full w-full">
      {logoColumns.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
        />
      ))}
    </div>
  );
}

// Column component
function LogoColumn({ logos, columnIndex, currentTime }: LogoColumnProps) {
  const CYCLE_DURATION = 2000;
  const columnDelay = columnIndex * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (CYCLE_DURATION * logos.length);
  const currentIndex = Math.floor(adjustedTime / CYCLE_DURATION);
  const currentLogo = logos[currentIndex];

  return (
    <motion.div
      className="relative h-32 w-44 overflow-hidden md:h-24 md:w-48 sm:h-24 sm:w-48 xs:h-32 xs:w-52"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "10%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src={currentLogo.src}
            alt={currentLogo.name}
            width={120}
            height={40}
            className="h-auto w-auto max-h-[80%] max-w-[80%] object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

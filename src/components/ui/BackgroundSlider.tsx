"use client";

import { useState, forwardRef, useImperativeHandle } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Sample Product Images
const productImages = [
  "/images/Covers/Both.jpg",
  "/images/Covers/DG.jpg",
  "/images/Covers/D2.jpg",
];

const BackgroundSlider = forwardRef((_, ref) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);

  // Expose swiper methods to parent component
  useImperativeHandle(ref, () => ({
    slideNext: () => swiperRef?.slideNext(),
    slidePrev: () => swiperRef?.slidePrev(),
  }));

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000 }}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        className="w-full h-full"
      >
        {productImages.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="w-full h-full bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${image})`,
              }}
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }} // Custom ease-in-out
            >
              {/* Dark Overlay */}
              <div className="mil-overlay"></div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

BackgroundSlider.displayName = "BackgroundSlider";

export default BackgroundSlider;

import React, { ReactNode } from "react";

interface BannerProps {
  title?: ReactNode; // Accepts JSX elements or strings
  subtitle?: string;
}

function Banner({ title = "Get in", subtitle = "Touch" }: BannerProps) {
  return (
    <div className="mil-Banner pt-[105px] lg:pt-[106px]">
      <div className="container mx-auto">
        <div className="items-center justify-between py-10 md:flex md:h-[300px] md:py-0 p-8">
          <div className="relative ltr:md:text-left rtl:md:text-right ">
            <h1 className="mb-3 text-lg font-extrabold text-white sm:mb-4">
              {title}
            </h1>
            <h4 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-[40px] lg:!leading-[50px]">
              {subtitle}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;

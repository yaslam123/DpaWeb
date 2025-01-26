"use client";

import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";

export default function AboutAi() {
  return (
    <Card className="w-full h-[500px] bg-[#000000] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex flex-col p-8 md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            AI and the Data Protection Ecosystem
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg text-justify">
            Artificial Intelligence is revolutionizing data protection by
            enabling advanced breach detection, automated compliance, and
            enhanced monitoring. However, it also raises concerns about privacy,
            bias, and transparency in its operations. Balancing innovation with
            ethical practices is essential to ensure AI strengthens, rather than
            compromises data privacy.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-64 md:h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}

"use client";

import { motion } from "framer-motion";
import { FeaturesSectionWithCardGradient } from "./ui/card-gradient";
import { Badge } from "./ui/badge";
import { DataSubject, DataController, DataProcessor } from "./utils/labelMorph";

function YourData() {
  return (
    <div className="w-full py-20 lg:py-30">
      <div className="container mx-auto items-center">
        <div className="flex flex-col space-y-4 mb-24">
          <div>
            <Badge
              variant="outline"
              className="text-zinc-700 font-medium justify-center"
            >
              // Your Data, Your Powers
            </Badge>
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            Your Data, Your Rights
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Section - Takes 2/3 of width */}
          <div className="flex-1 lg:w-2/3 flex flex-col gap-6">
            <FeaturesSectionWithCardGradient />
          </div>

          {/* Right Section - Takes 1/3 of width */}
          <div className="lg:w-1/3 flex flex-col gap-6 w-full">
            <div className="">
              <DataSubject />
            </div>

            <div className="">
              <DataController />
            </div>

            <div className="">
              <DataProcessor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourData;

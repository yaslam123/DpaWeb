import React from "react";
import { Badge } from "./ui/badge";
import { FeaturesSectionWithHoverEffects } from "./ui/Principles-Features";

function Principles() {
  return (
    <div className="w-full py-20 lg:py-30">
      <div className="container mx-auto">
        <div className="flex flex-col mb-[30px] space-y-4 p-8">
          <div>
            <Badge variant="outline" className="text-zinc-700 font-medium">
              // Our Principles
            </Badge>
          </div>

          <h1 className="text-5xl font-bold tracking-tight">Our Principles</h1>
        </div>
        <div className="container p-8">
          <FeaturesSectionWithHoverEffects />
        </div>
      </div>
    </div>
  );
}

export default Principles;

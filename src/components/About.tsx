"use client";

import { useState } from "react";

import { AboutText } from "./ui/aboutText";
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "./ui/disclosure";

// Data for Disclosures
const disclosureData = [
  {
    id: "mission",
    title: "Mission",
    content:
      "DPA’s mission is to ensure that all businesses, private entities, and public institutions govern and process personal data in a responsible, transparent and lawful manner.",
  },
  {
    id: "vision",
    title: "Vision",
    content:
      "To be the trusted guardian of data privacy, ensuring the transparency, integrity, and security of Somalis’ personal information in an increasingly digital world.",
  },
  {
    id: "values",
    title: "Values",
    content:
      "We value Transparency, Accountability, and Innovation to maintain the highest standards of data privacy and protection.",
  },
];

function About() {
  const [activeDisclosure, setActiveDisclosure] = useState<string | null>(null);

  const handleDisclosureToggle = (id: string) => {
    setActiveDisclosure(activeDisclosure === id ? null : id);
  };

  return (
    <div className="w-full py-20 lg:py-30">
      <div className="container mx-auto">
        <div className="grid container grid-cols-1 gap-8 items-center lg:grid-cols-2 dark:border-zinc-800">
          <div className="bg-zinc-100 rounded-md aspect-square dark:bg-zinc-800">
            <img
              src="/images/Covers/4.jpg"
              className="w-full h-full"
              alt="Data Protection Authority"
            />
          </div>
          <div className="flex flex-col">
            <AboutText
              pill={{
                text: "// About us",
                href: "#",
                variant: "default",
                size: "md",
              }}
              content={{
                title: "Data Protection",
                titleHighlight: "Authority of Somalia",
                description:
                  "Data Protection Authority of Somalia is the national independent authority responsible for protecting personal privacy and monitoring that all organizations are compliant with the Data Protection Act (no.005 which was passed in March 2023).",
              }}
            />

            <div className="flex flex-col space-y-5 px-4 md:px-8 lg:px-12">
              {disclosureData.map(({ id, title, content }) => (
                <Disclosure
                  key={id}
                  open={activeDisclosure === id}
                  onOpenChange={() => handleDisclosureToggle(id)}
                  className="w-full rounded-md border border-zinc-200 px-3 dark:border-zinc-700"
                >
                  <DisclosureTrigger>
                    <span className="text-lg font-medium">{title}</span>
                  </DisclosureTrigger>
                  <DisclosureContent>
                    <div className="overflow-hidden pb-3">
                      <div className="pt-1">
                        <p className="text-neutral-600 tracking-wide mt-4 text-base font-normal text-justify relative">
                          {content}
                        </p>
                      </div>
                    </div>
                  </DisclosureContent>
                </Disclosure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

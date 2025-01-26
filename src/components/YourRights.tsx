"use client";

import { Badge } from "./ui/badge";
import {
  ScanFace,
  BookOpenCheck,
  FileWarning,
  Eraser,
  FolderX,
  CheckCheck,
  Scale,
} from "lucide-react";

const features = [
  {
    title: "Right of Access",
    description:
      "Individuals have the right to know whether their personal data is being processed, where, and for what purpose. They can request a copy of their personal data.",
    icon: <ScanFace className="size-4 md:size-6" />,
  },
  {
    title: "Right to Rectification",
    description:
      "Individuals can have inaccurate personal data corrected and incomplete data completed.",
    icon: <BookOpenCheck className="size-4 md:size-6" />,
  },
  {
    title: "Right to Object",
    description:
      "Individuals have the right to object to the processing of their personal data for direct marketing, research, or in a few other contexts.",
    icon: <FileWarning className="size-4 md:size-6" />,
  },
  {
    title: "Right to Erasure (Right to be Forgotten)",
    description:
      "Under certain conditions, individuals can request the deletion of their personal data.",
    icon: <Eraser className="size-4 md:size-6" />,
  },
  {
    title: "Right to Restrict Processing",
    description:
      "Individuals have the right to block or suppress processing of their personal data under certain conditions.",
    icon: <FolderX className="size-4 md:size-6" />,
  },
  {
    title: "Right to Data Portability",
    description:
      "Individuals can request and receive their personal data for their own purposes across different services.",
    icon: <CheckCheck className="size-4 md:size-6" />,
  },

  {
    title: "Rights in Relation to Automated Decision Making and Profiling",
    description:
      "Individuals have the right not to be subject to a decision based solely on automated processing, including profiling, that produces legal effects concerning them or similarly significantly affects them. The Somalia data protection act granted this right.",
    icon: <Scale className="size-4 md:size-6" />,
  },
];

const YourRights = () => {
  return (
    <section className="w-full pb-20 lg:pb-30">
      <div className="container mx-auto p-8">
        <div className="flex flex-col space-y-4">
          <div>
            <Badge variant="outline" className="text-zinc-700 justify-center">
              // Your Data, Your Rights
            </Badge>
          </div>
          <h1 className="text-5xl font-bold tracking-tight">Your Rights</h1>
          <p className="max-w-[42rem] leading-normal text-justify text-black text-lg sm:text-lg sm:leading-8">
            Find out more about your personal data rights.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-y-6 mt-14 lg:mt-20">
          {features.map((feature, idx) => (
            <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
              <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-100 md:size-12">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-semibold md:mb-2 md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourRights;

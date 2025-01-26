import { cn } from "../../lib/utils";

import { GoLaw } from "react-icons/go";
import { DiGhostSmall } from "react-icons/di";
import { MdDataObject } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { BsDatabaseDash } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GrInsecure } from "react-icons/gr";
import { GiFairyWings } from "react-icons/gi";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Storage Limitation",
      description: "Don’t store personal data you do not need anymore.",
      icon: <BsDatabaseDash className="w-8 h-8 text-[#47BDFF]" />,
    },
    {
      title: "Purpose Limitation",
      description:
        "Personal data should be collected for a specific and lawful purpose.",
      icon: <DiGhostSmall className="w-8 h-8 text-[#47BDFF]" />,
    },
    {
      title: "Data Accuracy",
      description:
        "Information should be accurate, up-to-date, and kept for a limited time, ensuring accuracy.",
      icon: <TiTickOutline className="w-8 h-8 text-[#47BDFF]" />,
    },
    {
      title: "Lawfulnesss",
      description:
        "Information should be processed legally and ethically while upholding justice.",
      icon: <GoLaw className="w-8 h-8 text-[#47BDFF]" />,
    },

    {
      title: "Data Minimization",
      description:
        "Personal data should be minimal and be the exact amount of data that is needed.",
      icon: <MdDataObject className="w-8 h-8 text-[#47BDFF]" />,
    },
    {
      title: "Fairness and Accountability",
      description:
        "Process personal data with fairness and accountability, adhering to privacy principles.",
      icon: <GiFairyWings className="w-8 h-8 text-[#47BDFF]" />,
    },

    {
      title: "Confidentiality and Security",
      description:
        "Entities must safeguard individuals' data, uphold their rights, and implement measures for data integrity.",
      icon: <GrInsecure className="w-8 h-8 text-[#47BDFF]" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-gray-300/60  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

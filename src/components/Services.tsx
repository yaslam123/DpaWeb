import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { Badge } from "./ui/badge";
import {
  UserPenIcon,
  FileText,
  MessageCircleWarning,
  DatabaseZap,
  FolderSearch,
} from "lucide-react";

// Service Cards Configuration
const services = [
  {
    Icon: FileText,
    name: "Data Controllers & Processors Registration",
    description:
      "A Registration Process for data controllers and processors, ensuring compliance with legal obligations and promoting transparency in data management.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-2 lg:row-span-1", // Spans 2 columns (top row)
  },
  {
    Icon: UserPenIcon,
    name: "Data Protection Officers (DPOs) Registration",
    description:
      "Data Protection Officers (DPOs) play a vital role in overseeing data security and compliance efforts.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1 lg:row-span-1", // Fills the remaining 1 column (top row)
  },
  {
    Icon: DatabaseZap,
    name: "Data Breach Reporting",
    description:
      "In the event of a data breach, timely reporting is crucial to mitigate risks and ensure accountability.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1 lg:row-span-1", // 2nd column of 2nd row
  },
  {
    Icon: MessageCircleWarning,
    name: "Complaint Handling",
    description:
      "We are committed to addressing data-related grievances efficiently and transparently.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1 lg:row-span-1", // 1st column of 2nd row
  },

  {
    Icon: FolderSearch,
    name: "Audit Filing",
    description:
      "Audits are an essential component of ensuring compliance with data protection regulations.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-span-1 lg:row-span-1", // 3rd column of 2nd row
  },
];

// Services Component (Grid Layout)
function Services() {
  return (
    <section className="mil-Bg py-20 lg:py-30">
      <div className="container mx-auto items-center">
        <div className="flex flex-col space-y-4 mb-24">
          <div>
            <Badge variant="outline" className="text-zinc-700 font-medium">
              // What We Do
            </Badge>
          </div>

          <h1 className="text-5xl font-bold tracking-tight">
            Explore Our Services
          </h1>
        </div>
        <BentoGrid className="grid-cols-1 lg:grid-cols-3 gap-4">
          {services.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

export default Services;

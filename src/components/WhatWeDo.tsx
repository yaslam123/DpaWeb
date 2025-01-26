"use client";

import { Badge } from "./ui/badge";

import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { GiAirForce } from "react-icons/gi";

import { ArrowRight } from "lucide-react";

import { Button } from "./ui/button";

const posts = [
  {
    id: "post-1",
    title: "Regulation",
    summary:
      "The Data Protection Authority (DPA) in Somalia regulates andoversees data protection, ensuring that organizations and entitiesadhere to established guidelines and laws governing the responsible handling of personal information.",
    image: "/images/Others/Regulations.jpg",
  },
  {
    id: "post-2",
    title: "Awareness Campaign",
    summary:
      "The Data Protection Authority (DPA) in Somalia enhances awareness through educational campaigns, training programs, and public outreach, aiming to inform and equip individuals and organizations with the knowledge needed to uphold data protection principles and foster a culture of privacy.",
    image: "/images/Others/Awareness.jpg",
  },
  {
    id: "post-3",
    title: "Enforcement and Compliance",
    summary:
      "The DPA plays a crucial role in enforcing data protection regulations, holding organizations accountable for their data management practices. It strives to ensure compliance with both national laws and international privacy principles, promoting transparency and trust in the handling of sensitive information.",
    image: "/images/Others/Complaince.jpg",
  },
];
function WhoWeAre() {
  return (
    <section className="mil-Bg w-full py-20 lg:py-20">
      <div className="flex flex-col gap-16 lg:px-16">
        <div className="flex flex-col space-y-4 p-8">
          <div>
            <Badge variant="outline" className="text-zinc-700 font-medium">
              // What We Do
            </Badge>
          </div>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            What We Do
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-6 p-8">
          {posts.map((post) => (
            <a
              key={post.id}
              className="flex flex-col overflow-clip rounded-xl border border-gray-300"
            >
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-xl lg:mb-6">
                  {post.title}
                </h3>
                <div className="mil-divider-sm mt-[10px] mb-[30px]" />
                <p className="mb-3 text-muted-foreground md:mb-4 lg:mb-6">
                  {post.summary}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;

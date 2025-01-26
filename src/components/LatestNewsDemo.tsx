"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    id: "post-1",
    title: "The New General Manager of the Data Protection Authority.",
    summary:
      "Mr. Mohamed Nur Ali, officially assumed office today,with the handover conducted by the Deputy General Manager, Mr. Daud Abdi Hussein (Shigaye)",
    published: "05 Dec 2024",
    href: "https://www.facebook.com/share/p/14iRvKtRUB/",
    image: "/images/Covers/Third.jpg",
  },
  {
    id: "post-2",
    title:
      "The annual conference of the Communication and Technology Professionals Community (#SomNOG7)",
    summary:
      "Eng. Mohamed Nur Ali Olow, General Manager of the Data Protection Authority, delivered a key speech during the meeting.",
    published: "26 Dec 2024",
    href: "https://www.facebook.com/share/p/12Kxm1cYDfk/",
    image: "/images/News/SOMNOG.jpg",
  },
  {
    id: "post-3",
    title:
      "New DPA Director Eng. Maxamed Nuur Cali Welcomed, Tours Organization's Priorities",
    summary:
      "The Deputy Manager of the Data Protection Authority (DPA) welcomed the new General Manager, Eng. Mohamed Nur Ali, to the agency's headquarters.",
    published: "02 Dec 2024",
    href: "https://www.facebook.com/share/p/1GnfFFvyNr/",
    image: "/images/News/Dep.jpg",
  },
];

const LatestNewsDemo = () => {
  return (
    <section className="py-20 lg:py-32 mil-Bg">
      <div className="container mx-auto">
        <div className="flex flex-col space-y-6 ">
          <div>
            <Badge variant="outline" className="text-zinc-700 font-medium">
              News & Media
            </Badge>
          </div>
          <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
            Latest News
          </h1>
        </div>

        <div className="flex justify-end py-2 mb-8">
          <a href="/news">
            <Button className="group font-medium" variant="ghost">
              See More
              <ArrowRight
                className="ms-2 opacity-60 transition-transform group-hover:scale-105 group-hover:translate-x-1"
                size={16}
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
          </a>
        </div>

        <div className="grid gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {posts.map((post) => (
            <a key={post.id} href={post.href} className="group flex flex-col">
              <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
                <div className="h-full w-full transition duration-300 group-hover:scale-105">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-[3/2] h-full w-full object-cover object-center"
                  />
                </div>
              </div>

              <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-2xl lg:pt-4 lg:text-2xl">
                {post.title}
              </div>
              <div className="mb-4 line-clamp-2 text-sm text-muted-foreground md:mb-5 md:text-base">
                {post.summary}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col gap-px">
                  <span className="text-xs text-muted-foreground">
                    {post.published}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsDemo;

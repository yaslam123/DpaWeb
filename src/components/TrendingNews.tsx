"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "./ui/badge";

const data = [
  {
    id: "item-1",
    title:
      "Director-General of National Data Protection Authority Meets with Minister of Ports to Discuss Collaboration",
    summary:
      "his morning, the Director-General of the National Data Protection Authority, Mr. Mohamed Nur Ali Olow, visited the Mogadishu Port, where he was welcomed by the Minister of Ports and Marine Transport of the Federal Government of Somalia, Mr. Maxamuud Aadan Geesood.",
    href: "https://www.shadcnblocks.com",
    image: "/images/News/Dir&Mins.jpg",
  },
  {
    id: "item-2",
    title: "The Prime Minister of Somalia, H.E. Hamza Abdi Barre.",
    summary:
      "The Prime Minister of the Federal Republic of Somalia, Mr. Hamza Abdi Barre, today laid the foundation stone for the new building of the Data Protection Authority (DPA) Somalia.",
    href: "https://www.facebook.com/dpasomalia/posts/pfbid0tKaT3YGEqTR6cwPwNa4B5uPqGSZczgwaJ6fQq4RQgQ1yn3ELJHVNAxVdHPUSibwAl",
    image: "/images/news/OPM.jpg",
  },
  {
    id: "item-3",
    title: "The Deputy General Manager of the Data Protection Authority.",
    summary:
      "The Deputy Director of the Data Protection Authority, Mr. Daa'uud Cabdi Xuseen (Shigaye), participated in the Annual Conference of the Network of African Data Protection Authorities (NADPA), which took place in Nairobi, Kenya.",
    href: "https://www.facebook.com/share/p/18cH1bYpR1/",
    image: "/images/News/NADPA.jpg",
  },
  {
    id: "item-4",
    title:
      "The Data Protection Authority is honored to host Mr. Mohamed Mahmoud Ali.",
    summary:
      "The Data Protection Authority had the great honor of hosting Mr. Maxamed Maxamuud Cali “Afgooye,” the former National Auditor General, today.",
    href: "https://www.facebook.com/dpasomalia/posts/pfbid0ftgV9jFvffQCEg6roajiqgu3YxFuPYkbGu6ierfkh1YKfqme3xe4ATCR3Dna8Pfyl",
    image: "/images/News/Afgoye.jpg",
  },
  {
    id: "item-5",
    title:
      "Deputy Director of Data Protection Authority Launches Staff Capacity-Building Training",
    summary:
      "The Deputy Director of the Data Protection Authority, Mr. Da’ud Shigaye, today inaugurated a capacity-building training aimed at enhancing the knowledge and skills of the organization's staff.",
    href: "https://www.facebook.com/share/p/15FA85VBTT/",
    image: "/images/News/Dep2.jpg",
  },
];

const TrendingNews = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-20 lg:py-30 mil-Bg">
      <div className="container mx-auto p-8">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div className="flex flex-col space-y-6">
            <div>
              <Badge variant="outline" className="text-zinc-700 font-medium">
                News & Media
              </Badge>
            </div>
            <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
              Trending News
            </h1>
          </div>
          {/* Navigation Buttons */}
          <div className="mt-8 flex shrink-0 items-center justify-start gap-6">
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
        {/* Carousel */}
        <div className="w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
          >
            <CarouselContent className="ml-[1rem] mr-[1rem]">
              {data.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-[20px] md:max-w-[452px]"
                >
                  <a
                    href={item.href}
                    className="group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                        <div className="flex-1">
                          <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                      {item.title}
                    </div>
                    <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                      {item.summary}
                    </div>
                    <div className="flex items-center text-sm">
                      Read more{" "}
                      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TrendingNews;

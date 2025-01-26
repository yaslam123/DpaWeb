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
import { motion } from "framer-motion";

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
  {
    id: "post-4",
    title:
      "The Acting General Manager of the Data Protection Authority (DPA Somalia)",
    summary:
      "Mr. Da'ud Shigaye, participated in the 2nd Somali National Cybersecurity Forum held in Mogadishu.",
    published: "11 Nov 2024",
    href: "https://www.facebook.com/share/p/15QJCkrKc6/",
    image: "/images/News/SNCF.jpg",
  },
  {
    id: "post-5",
    title: "A delegation from the DPA Somalia",
    summary:
      "A delegation from the DPA Somalia, participated in the 3rd DP and Policy Framework Reform Workshop of the East African Community (EAC) held in Kigali, Rwanda.",
    published: "22 Oct 2024",
    href: "https://www.facebook.com/dpasomalia/posts/pfbid0gxbyCeC941Vo9fq3VES7SCLQFiQiPY7jaX2Zsz7meEr4xpoHh2v6xfa9xjHiHjprl",
    image: "/images/News/EAC.jpg",
  },
  {
    id: "post-6",
    title: "Dr. Vincent Olatunji, Head of Nigeria's Data Protection Authority",
    summary:
      "The Director of the Nigerian Data Protection Authority, Dr. Vincent Olatunji, welcomed a delegation from the Somali Data Protection Authority, accompanied by Somalia's Ambassador to Nigeria, Mr. Jamaal Maxamed Barrow, in Abuja.",
    published: "04 Sep 2024",
    href: "https://www.facebook.com/share/p/15u4JYQj1b/",
    image: "/images/News/Nigeria.jpg",
  },
  {
    id: "post-7",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-8",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-9",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-10",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-11",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
  {
    id: "post-12",
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    summary:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    label: "Ut varius dolor turpis",
    author: "Jane Doe",
    published: "1 Jan 2024",
    href: "#",
    image: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
  },
];

const LatestNews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Calculate the current posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Scroll to top when the page changes
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Event handlers
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  // Animation variants for page transition
  const pageVariant = {
    hidden: { opacity: 0, y: 50 }, // Initial state (off-screen, faded out)
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    }, // Final state (onscreen, faded in)
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={pageVariant}
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto p-8">
        <div className="flex flex-col space-y-6 mb-8 md:mb-14 lg:mb-16 ">
          <div>
            <Badge variant="outline" className="text-zinc-700 font-medium">
              News & Media
            </Badge>
          </div>
          <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
            Latest News
          </h1>
        </div>
        <div className="grid gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
          {currentPosts.map((post) => (
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
        {/* Pagination */}
        <div className="mt-8 border-t border-border py-2 md:mt-10 lg:mt-12">
          <Pagination>
            <PaginationContent className="w-full justify-between">
              <PaginationItem>
                <PaginationPrevious onClick={handlePrevious} />
              </PaginationItem>
              <div className="hidden items-center gap-1 md:flex">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      onClick={() => handlePageChange(index + 1)}
                      href="#"
                      className={`${
                        currentPage === index + 1
                          ? "font-bold #47BDFF"
                          : "text-gray-500"
                      }`}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </div>
              <PaginationItem>
                <PaginationNext onClick={handleNext} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </motion.section>
  );
};

export default LatestNews;

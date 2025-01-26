import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React from "react";

function index() {
  return (
    <>
      <Banner
        title={
          <>
            <span className="text-[#47BDFF]">For Organizations</span>
          </>
        }
        subtitle="Know Your Obligtions"
      />
      <section className="mil-Bg py-32">
        <div className="container mx-auto px-8">
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col space-y-8">
              <h1 className="text-5xl font-normal">Data Protection Basics</h1>
              <p className="text-lg">
                Data Protection Basics: is a comprehensive guide aimed at
                demystifying the essentials of data protection. It covers a
                range of topics including applicable laws, definitions of key
                terms such as 'personal data' and 'processing,' identification
                of data controllers, and their corresponding obligations. The
                guide also clarifies the necessity of a 'legal basis' for
                processing personal data, outlines the rights of data subjects,
                and offers insights into electronic direct marketing regulations
                and the use of cookies and similar technologies. Whether you're
                a data subject or a data controller, this guide serves as a
                valuable resource to understand the foundational principles of
                data protection.
              </p>
            </div>
            <div className="items-end space-x-8 ">
              <a href="/docs/Data Protection Basics.pdf" download>
                <Button size="lg" className="group gap-4">
                  <span className="text-md">
                    Data Protection Basics: Full Guidance Note
                  </span>
                  <ArrowDown
                    className="opacity-60 transition-transform group-hover:translate-y-0.5"
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;

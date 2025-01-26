import Banner from "@/components/Banner";
import { Check } from "lucide-react";
import React from "react";

function index() {
  return (
    <>
      <Banner
        title={<span className="text-[#47BDFF]">For Organizations</span>}
        subtitle="Know Your Obligations"
      />
      <section className="mil-Bg py-32">
        <div className="container mx-auto p-8">
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col space-y-6">
              <h1 className="text-5xl text-black font-bold">
                Accountability obligation
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                Accountability is a common principle for organizations across
                many disciplines; the principle embodies that organizations live
                up to expectations for instance in the delivery of their
                products and their behavior towards those they interact with.
                The Data Protection Act (DPA) integrates accountability as a
                principle which requires that organizations put in place
                appropriate technical and organizational measures and be able to
                demonstrate what they did and its effectiveness when requested.
                Organizations, and not data protection authorities, must
                demonstrate that they are compliant with the law. Such measures
                include:
              </p>
            </div>

            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              {/* <h2 className="text-2xl text-black font-bold">Principles:</h2> */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Adequate documentation on what personal data is processed.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    How, to what purpose, and how long data will be processed
                    for.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Documented processes and procedures aiming at tackling data
                    protection issues at an early state when building
                    information systems or responding to a data breach.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    The presence of a Data Protection Officer (if required) who
                    is integrated in the organization planning and operations
                    etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;

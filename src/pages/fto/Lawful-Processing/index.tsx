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
                Lawful processing
              </h1>
            </div>

            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Lawful basis for processing personal data
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                In order to process personal data, you must have a lawful basis
                to do so. The lawful grounds for processing personal data are
                set out in Article 14 of the DPA. These are:
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              {/* <h2 className="text-2xl text-black font-bold">Principles:</h2> */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    The consent of the individual.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Performance of a contract.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Compliance with a legal obligation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Necessary to protect the vital interests of a person.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Necessary for the performance of a task carried out in the
                    public interest.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    In the legitimate interests of company/organization (except
                    where those interests are overridden by the interests or
                    rights and freedoms of the data subject).
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Providing Transparent Information
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Businesses and organizations that process personal data must
                provide individuals with information on the type of processing
                that is taking place and who is carrying it out. At a minimum,
                this information must clearly state:
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              {/* <h2 className="text-2xl text-black font-bold">Principles:</h2> */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Who you (the organization) are.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Performance of a contract.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Why you are processing the data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    What legal basis you rely on to legitimize the processing.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Whether or not the data will be transferred on to other
                    organization's or individuals.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    How long the data will be stored.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    The existence of the individual’s rights under data
                    protection, including the rights to access, correction,
                    erasure, restriction, objection and portability.
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

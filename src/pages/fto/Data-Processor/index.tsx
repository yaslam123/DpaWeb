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
              <h1 className="text-5xl text-black font-bold">Data Processor</h1>
              <p className="text-[18px] font-semibold text-gray-600">
                A data processor is any natural or legal person, public
                authority, agency, or other body which processes personal data
                on behalf of the data controller. Unlike data controllers, data
                processors do not have the authority to decide the purpose and
                means of the processing of personal data.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Responsibilities of Data Processors
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Data processors have specific obligations and responsibilities
                to ensure the protection of personal data. These include:
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Processing Data in Accordance with Instructions
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Personal data only according to the documented instructions
                    provided by the data controller. Any deviation from these
                    instructions requires explicit authorization from the data
                    controller.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Implementing Appropriate Security Measures
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implement appropriate technical and organizational measures
                    to ensure a level of security appropriate to the risk. This
                    includes protecting data against unauthorized or unlawful
                    processing and accidental loss, destruction, or damage.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Maintaining Records of Processing Activities
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Data processors must maintain records of all categories of
                    processing activities carried out on behalf of the data
                    controller. This record should include details such as the
                    purposes of processing, categories of data subjects and
                    personal data, and any transfers of personal data to a third
                    country.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Assisting the Data Controller
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Data processors must assist data controllers in ensuring
                    compliance with their obligations under data protection
                    laws. This includes aiding in responding to data subject
                    rights requests, data breach notifications, and conducting
                    data protection impact assessments.
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

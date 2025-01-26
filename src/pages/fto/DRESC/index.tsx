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
          {/* Main Title and Introduction */}
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col space-y-6">
              <h1 className="text-5xl text-black font-bold">
                Data Rights in E-Commerce & Self-Assessment Checklist
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                Data Rights in E-Commerce empower individuals to control how
                their data is collected, used, stored, and shared, ensuring a
                lawful basis for data collection, secure processing, purpose
                limitation, and protection during data transfers. The
                Self-Assessment Checklist helps organizations ensure compliance
                with data protection laws by listing categories of personal
                data, identifying data sources, documenting legal bases for
                processing, and defining retention periods, thereby facilitating
                effective data management and protection.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Data Rights in E-Commerce
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Data rights empower individuals to control how their data is
                collected, used, stored, and shared.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Key Aspects::</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Data Collection:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensure lawful basis for collecting data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Data Processing:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Securely process data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Purpose Limitation:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Use data only for specified purposes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Data Subject Rights:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Uphold rights like access, rectification, and erasure.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Data Transfers:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensure protection for international transfers.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Data Breach Notification:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Report breaches to authorities and individuals.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Privacy Policies:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Provide clear information about data usage.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">Challenges:</h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Complexity of requests, data accuracy, technical limitations,
                balancing interests.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Best Practices:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Develop a comprehensive privacy policy.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Invest in data management systems.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Train employees on data protection.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Monitor and improve practices.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-2xl text-black font-bold">
                Self-Assessment Checklist
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                A self-assessment checklist helps organizations ensure
                compliance with data protection laws.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Checklist:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Categories of Personal Data and Data Subjects:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    List categories and elements of data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Source of Personal Data:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Identify data sources.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Purposes for Data Processing:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    List processing purposes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Legal Basis for Processing:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Document legal bases for processing.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Special Categories of Personal Data:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Detail nature and legal basis.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Retention Period:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Define retention periods for each data category.
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

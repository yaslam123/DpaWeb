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
              <h1 className="text-3xl text-black font-bold">
                Data Protection and Privacy
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                Educational institutions handle a vast amount of personal data
                related to students, staff, and faculty. Ensuring the protection
                and privacy of this data is critical.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h1 className="text-3xl text-black font-bold">
                Data Collection and Processing in Education:
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                Student Information: Personal details, academic records, health
                information. Staff Data: Employment records, performance
                evaluations, personal contact information. Learning Platforms:
                Data generated from online learning tools and platforms.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Best Practices:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Explicit Consent:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Obtain clear consent from students and parents for data
                    collection
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Data Minimization:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Collect only necessary data for educational purposes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Security Measures:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implement robust security protocols to protect data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Access Control</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Limit access to sensitive information to authorized
                    personnel.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Transparency:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Clearly inform students and staff about data usage and
                    rights.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Regular Audits:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Conduct regular data protection audits to ensure compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Benefits:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Protects student and staff privacy.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Builds trust within the educational community.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensures compliance with data protection laws.
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

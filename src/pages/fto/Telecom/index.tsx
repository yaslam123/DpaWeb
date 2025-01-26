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
                Telecommunications User Data Protection
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                Telecom companies handle vast amounts of user data, including
                personal information and communication records. Protecting this
                data is essential for maintaining user trust and compliance .
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h1 className="text-3xl text-black font-bold">
                Data Collection and Processing in Telecommunications
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                User Data: Personal details, call records, text messages,
                internet usage. Operational Data: Network logs, service usage
                patterns, billing information. Customer Service Data:
                Interaction records, support tickets, feedback.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Best Practices:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Data Encryption:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Encrypt user data to protect it from unauthorized access.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Access Control:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implement strict access controls and authentication
                    mechanisms to limit data access to authorized personnel.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">User Consent:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Obtain user consent for data collection and processing
                    activities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Transparency:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Clearly inform users about data usage and their rights.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Data Minimization:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Collect only necessary data and ensure it is used for
                    specified purposes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Incident Management:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Develop a data breach response plan to handle security
                    incidents.
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
                    Enhances trust in telecom services.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Protects user privacy and communication confidentiality.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensures compliance with telecommunications data protection
                    regulations.
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

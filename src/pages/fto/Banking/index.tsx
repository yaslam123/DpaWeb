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
                Banking: Data Security and Compliance
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                The banking and finance sector handles sensitive financial
                information that requires stringent protection measures.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h1 className="text-3xl text-black font-bold">
                Data Collection and Processing in Banking:
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                Customer Data: Personal information, account details,
                transaction history. Financial Transactions: Payment data,
                credit card information, loan applications. Operational Data:
                Employee records, internal financial data, audit logs.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Best Practices:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Data Encryption:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Encrypt sensitive financial data during storage and
                    transmission.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Access Control:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implement strict access controls and authentication
                    mechanisms.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Fraud Prevention:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Use advanced monitoring tools to detect and prevent fraud.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Compliance:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensure compliance with financial data protection regulations
                    (e.g., AML, GDPR).
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
                    Collect only necessary financial data and limit retention
                    periods.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Customer Education:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Educate customers about data protection best practices.
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
                    Enhances data security and reduces the risk of data
                    breaches.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Builds customer trust and confidence in financial
                    institutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensures compliance with regulatory requirements.
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

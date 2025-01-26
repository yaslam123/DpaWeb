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
                Compliance Checklist for Data Protection & Risk Management
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                The Compliance Checklist for Data Protection ensures
                organizations adhere to data protection laws and safeguard
                personal data. It includes developing a data protection policy,
                conducting a data inventory, and establishing legal grounds for
                processing. Key steps involve obtaining explicit consent,
                facilitating data subject rights, and implementing security
                measures. Regular audits, employee training, and third-party
                management are also crucial, along with maintaining detailed
                records and addressing data breaches promptly. This approach
                helps organizations manage data responsibly and mitigate risks
                effectively.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Compliance Checklist for Data Protection
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Ensuring compliance with data protection laws is essential for
                safeguarding personal data.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Checklist:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Data Protection Policy:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Develop and communicate a clear policy.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Data Inventory and Mapping:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Identify and map personal data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Legal Basis for Processing:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Establish and document legal grounds for data processing.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Consent Management:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Obtain and record explicit consent.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Data Subject Rights:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Establish procedures for data access, rectification, and
                    erasure.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Data Security Measures:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implement technical and organizational security measures.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Third-Party Management:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Assess and audit third-party vendors.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Data Protection Impact Assessments (DPIAs):
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Conduct DPIAs for high-risk activities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Regular Audits and Reviews:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Conduct regular audits and use findings to improve
                    practices.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Employee Training and Awareness:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Provide ongoing training on data protection.
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Risk Management</h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Risk management involves identifying, assessing, and controlling
                threats to an organization's data security and privacy.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Components:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Risk Identification:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Determine potential risks.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Risk Assessment:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Analyze and prioritize risks.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Risk Mitigation:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Develop and implement mitigation strategies.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Monitoring and Review:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Continuously monitor risks and update strategies.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Employee Training and Awareness:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Provide ongoing training on data protection.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Employee Training and Awareness:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Provide ongoing training on data protection.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Steps:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Conduct a Risk Assessment:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Perform and update risk assessments regularly.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Develop a Risk Management Plan:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Establish policies and response plans.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Importance:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Minimizes losses and enhances decision-making.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensures compliance and operational efficiency.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Builds stakeholder confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">Challenges:</h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Uncertainty, resource constraints, changing environment,
                    cultural resistance.
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

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
              <h1 className="text-5xl text-black font-bold">Data Controller</h1>
              <p className="text-[18px] font-semibold text-gray-600">
                In the realm of data protection, a "Data Controller" is a key
                entity responsible for determining the purposes and means of
                processing personal data. This role is crucial for ensuring that
                personal information is handled in compliance with applicable
                data protection laws and regulations.
              </p>
            </div>

            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">
                Responsibilities of a Data Controller:
              </h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Defining Data Processing Activities:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    The Data Controller decides why and how personal data is
                    processed. This includes specifying the types of data
                    collected, the purposes for which it is used, and the
                    methods of processing.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Ensuring Lawful Processing:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    The Data Controller must ensure that all data processing
                    activities have a lawful basis. Common legal grounds include
                    the consent of the data subject, the necessity of processing
                    for the performance of a contract, compliance with a legal
                    obligation, protection of vital interests, performance of a
                    task carried out in the public interest, or legitimate
                    interests pursued by the controller or a third party.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Obtaining Consent:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    When processing is based on consent, the Data Controller is
                    responsible for obtaining and documenting the data subject's
                    consent. This consent must be informed, freely given, and
                    revocable at any time.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Transparency and Communication:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    The Data Controller must provide clear and transparent
                    information to data subjects about how their data will be
                    processed. This includes privacy notices that detail the
                    identity of the controller, the purposes of processing, the
                    legal basis for processing, data retention periods, and the
                    rights of data subjects.
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
                    The Data Controller is obligated to uphold the rights of
                    data subjects. These rights include access to personal data,
                    rectification of inaccurate data, erasure of data (the right
                    to be forgotten), restriction of processing, data
                    portability, and the right to object to processing.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Data Security:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implementing appropriate technical and organizational
                    measures to protect personal data from unauthorized access,
                    accidental loss, or destruction is a critical
                    responsibility. This includes ensuring data integrity,
                    confidentiality, and availability.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Record Keeping:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    The Data Controller must maintain records of data processing
                    activities, including details of data categories, purposes
                    of processing, data recipients, data transfers, and security
                    measures in place.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Data Protection Impact Assessments (DPIAs):
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    When processing activities are likely to result in high
                    risks to the rights and freedoms of individuals, the Data
                    Controller must conduct a Data Protection Impact Assessment
                    to identify and mitigate those risks.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Liaison with Data Protection Authorities:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    The Data Controller must cooperate with the Data Protection
                    Authority (DPA) in Somalia. This includes reporting data
                    breaches, responding to investigations, and complying with
                    any enforcement actions or guidelines issued by the DPA.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Training and Awareness:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensuring that employees and other relevant stakeholders are
                    aware of data protection obligations and best practices is
                    also a key responsibility of the Data Controller.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">Key Duties</h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Data controllers have specific duties to ensure the security and
                compliance of data handling processes:
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Risk Assessment:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Conduct a thorough risk assessment before handling data to
                    identify potential threats and vulnerabilities. This
                    includes evaluating the security measures of any third
                    parties involved.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Ensuring Lawful Processing:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Establish data handling agreements that define the terms and
                    conditions for data processing, including the security
                    measures that must be in place.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Monitoring and Auditing:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Regularly monitor and audit data handling processes to
                    ensure compliance with established protocols and detect any
                    anomalies or breaches.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Incident Response:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Develop and implement an incident response plan to address
                    any data breaches or security incidents promptly. This
                    includes notifying affected data subjects and relevant
                    authorities.
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

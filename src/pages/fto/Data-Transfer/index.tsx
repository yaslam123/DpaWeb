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
              <h1 className="text-5xl text-black font-bold">Data Transfer</h1>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Understanding Data Transfer
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Data transfer involves the movement of data from one location to
                another, which could be within the same organization or across
                different entities. In today's digital age, the seamless and
                secure transfer of data is crucial for effective communication
                and operational efficiency.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Importance of Secure Data Transfer
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Ensuring the security of data during transfer is vital to
                protect sensitive information from unauthorized access and
                breaches. At DPA Somalia, we emphasize the following key
                aspects:
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              {/* <h2 className="text-2xl text-black font-bold">Key Aspects::</h2> */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Confidentiality:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Data should only be accessible to authorized individuals.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Integrity:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Data should remain accurate and unaltered during transfer.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Availability:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Data should be available to authorized users when needed.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Best Practices for Secure Data Transfer
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                To maintain the security and integrity of data, we recommend the
                following best practices:
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              {/* <h2 className="text-2xl text-black font-bold">Best Practices:</h2> */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Encryption:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Always use encryption to protect data during transfer. This
                    ensures that even if data is intercepted, it cannot be read
                    without the proper decryption key.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Authentication:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implement strong authentication mechanisms to verify the
                    identity of users accessing the data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Access Control:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Limit access to data to only those who need it for their
                    work. Use role-based access control to manage permissions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Regular Audits:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Conduct regular audits of data transfer processes to
                    identify and address potential vulnerabilities.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Use Secure Channels:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Transfer data over secure channels such as HTTPS, VPNs, or
                    other encrypted protocols.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-2xl text-black font-bold">
                Responsibilities and Duties
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                As part of our commitment to data protection, DPA Somalia
                outlines the following responsibilities and duties for
                organizations handling data transfers.
                <br /> Data Controllers: Responsible for determining the
                purposes and means of data processing, including the transfer of
                data. They must ensure compliance with data protection
                regulations and implement appropriate safeguards. <br /> Data
                Processors: Handle data on behalf of data controllers. They must
                adhere to the instructions provided by data controllers and
                ensure the security of data during transfer. <br /> Employees:
                All employees involved in data transfer must be trained in data
                protection principles and follow the established protocols to
                ensure data security.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-2xl text-black font-bold">
                Legal and Regulatory Compliance
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Organizations must comply with relevant data protection laws and
                regulations when transferring data. In Somalia, this includes
                adhering to the Data Protection Act, which mandates the secure
                handling and transfer of personal data. Non-compliance can
                result in legal penalties and damage to an organization's
                reputation.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-2xl text-black font-bold">
                Practical Advice for Organizations
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Data Transfer Agreements: Establish clear agreements with third
                parties involved in data transfer. These agreements should
                outline the responsibilities and expectations for data security.
                Monitoring and Reporting: Implement monitoring systems to detect
                and respond to suspicious activities during data transfer.
                Establish reporting mechanisms for any data breaches or security
                incidents. Employee Training: Regularly train employees on data
                protection and secure data transfer practices. Awareness and
                education are key to preventing data breaches. Data
                Minimization: Transfer only the data that is necessary for the
                intended purpose. Reducing the amount of data transferred
                minimizes the risk of exposure. By following these guidelines,
                organizations can ensure the secure transfer of data and
                maintain compliance with data protection laws. For further
                information or assistance, please contact DPA Somalia at [dpa
                infor].
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;

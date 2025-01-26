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
                Access and Portability
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                Despite having certain similarities, the rights to data
                portability and access are separate. Making sure people are
                aware of both rights is important so that there is no
                misunderstanding about which right is being used.
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Responding to access and portability requests
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Every person has the right to ask for free and easily available
                access to their personal data. Should you obtain one of these
                requests, you must:
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              {/* <h2 className="text-2xl text-black font-bold">Principles:</h2> */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Inform the person if their personal data is being processed.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Without excessive delay and, in any case, within a month,
                    provide a copy of the personal data being processed
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold text-gray-600">
                    Tell them about the processing, including its goals, the
                    categories of personal data it is processing, who will
                    receive their data, and so forth.
                  </p>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <p className="text-[18px] font-semibold text-gray-600">
                While a person has the right to access any or all of their
                personal data, in cases where a controller handles a significant
                amount of that person's data, the controller should be able to
                ask the person to specify their request by identifying the data
                or processing activities they wish to access or learn about.
                This request for clarification should not be used to delay
                responding to the request; it should only be made when it is
                logically necessary. When a controller requests such
                clarification, the person should respond as quickly as possible.
                The controller shall continue to make an effort to comply with
                the initial request, even if the person declines to provide
                additional information. When the processing is governed by a
                contract or consent, the individual may request a "portable"
                copy of their personal data to be delivered to them or another
                organization.
              </p>
              <p className="text-[18px] font-semibold text-gray-600">
                The term "right to data portability" refers to this. A format
                that is widely used and machine readable should be utilized to
                provide the data.
              </p>
              <p className="text-[18px] font-semibold text-gray-600">
                Since the DPA does not specify a specific process for submitting
                a legitimate request for access or portability, an individual
                may submit a request verbally or in writing. It is advised that
                controllers note the timing and specifics of any spoken requests
                so they can make sure they follow through and don't
                misunderstand them. Controllers might wish to send follow-up
                letters to individuals to make sure they have grasped the
                request correctly.
              </p>
              <p className="text-[18px] font-semibold text-gray-600">
                Similar to the previous point about the possible structure of a
                request, if controllers have a specific staff member or point of
                contact assigned to handle inquiries, getting in touch with them
                will typically be the most effective approach for someone to
                receive a response to promptly, but it should not be considered
                mandatory.
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">
                Limitations on access or portability requests
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Under Article 20(1) DPA, in limited circumstances, where an
                access request is ‘manifestly unfounded or excessive’, a
                controller may, where appropriate, refuse to act on a request.
                This is, however, a high threshold to meet, and the controller
                must be able to prove that the request was manifestly unfounded
                or excessive, in particular taking into account whether the
                request is repetitive. There should be very few cases where a
                controller can justify a refusal of a request on this basis.
                There is a general limitation on the exercise of the right of
                access under Article 20(1) DPA, which states that the right to
                obtain a copy of the personal data undergoing processing should
                not negatively impact (‘adversely affect’) the rights and
                freedoms of others, such as privacy, trade secrets, or
                intellectual property rights. However, where a controller does
                have concerns about the impact of complying with a request,
                their response should not simply be a refusal to provide all
                information to the individual, but to endeavor to comply with
                the request insofar as possible whilst ensuring adequate
                protection for the rights and freedoms of others. Whilst the
                rights of access and portability are fundamental data protection
                rights, they are not absolute ones, and are subject to a number
                of limited exceptions. If a controller considers that it is
                justified in withholding certain information in response to an
                access or portability request it must identify an exemption
                under the Data Protection Act 2023, provide an explanation as to
                why it applies, and demonstrate that reliance on the exemption
                is necessary and proportionate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;

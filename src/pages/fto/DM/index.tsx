"use client";

import React from "react";
import Banner from "@/components/Banner";
import { Check } from "lucide-react";

const cardData = {
  optIn: [
    {
      title: "Explicit Consent",
      description:
        "Individuals must actively agree to receive marketing communications.",
    },
    {
      title: "Clear Information",
      description:
        "Provide clear information about the types of communications and their frequency.",
    },
    {
      title: "Affirmative Action",
      description: "Consent should be given through an affirmative action.",
    },
  ],
  optOut: [
    {
      title: "Easy Access",
      description:
        "Provide a simple method for individuals to opt-out, such as an unsubscribe link.",
    },
    {
      title: "Immediate Action",
      description: "Ensure that opt-out requests are processed promptly.",
    },
    {
      title: "Confirmation",
      description:
        "Send a confirmation message acknowledging the opt-out request.",
    },
    {
      title: "Respecting Preferences",
      description:
        "Ensure preferences are respected across all marketing channels.",
    },
  ],
  dataCollection: {
    types: [
      {
        title: "Personal Data",
        description: "Names, email addresses, payment details.",
      },
      {
        title: "Behavioral Data",
        description: "Page views, clicks, session duration.",
      },
      {
        title: "Transactional Data",
        description: "Purchase history, order details.",
      },
      {
        title: "Demographic Data",
        description: "Age, gender, location.",
      },
      {
        title: "Technical Data",
        description: "IP addresses, browser types.",
      },
      {
        title: "Preference Data",
        description: "Interests and preferences.",
      },
    ],
    bestPractices: [
      {
        title: "Transparency and Consent",
        description:
          "Inform users about data collection practices and obtain explicit consent.",
      },
      {
        title: "Data Minimization",
        description: "Collect only the necessary data.",
      },
      {
        title: "Security Measures",
        description: "Implement robust security measures to protect data.",
      },
      {
        title: "User Control",
        description: "Provide mechanisms for users to manage their data.",
      },
      {
        title: "Compliance",
        description: "Ensure compliance with data protection laws.",
      },
      {
        title: "Data Accuracy",
        description: "Maintain accurate and up-to-date data.",
      },
      {
        title: "Anonymization and Aggregation",
        description: "Protect privacy by anonymizing data.",
      },
      {
        title: "Clear Privacy Policies",
        description: "Develop comprehensive privacy policies.",
      },
    ],
  },
};

function Index() {
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
                Direct Marketing: Opt-In, Opt-Out & Online Data Collection
              </h1>
              <p className="text-[18px] font-semibold text-gray-600">
                When a data controller is involved in processing activities that
                are likely to result in high risk to the rights and freedoms of
                individuals due to the nature, scope, context, and purposes of
                the processing, specific actions must be taken to ensure
                compliance with data protection regulations.
              </p>
            </div>

            {/* Opt-In and Opt-Out */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Opt-In Section */}
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl text-black font-bold">
                  Opt-In Mechanism
                </h2>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-gray-600" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[18px] font-semibold">
                      Explicit Consent:
                    </p>
                    <p className="text-[18px] font-semibold text-gray-600">
                      Individuals must actively agree to receive marketing
                      communications.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-gray-600" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[18px] font-semibold">
                      Clear Information:
                    </p>
                    <p className="text-[18px] font-semibold text-gray-600">
                      Provide clear information about the types of
                      communications and their frequency.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-gray-600" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[18px] font-semibold">
                      Affirmative Action:
                    </p>
                    <p className="text-[18px] font-semibold text-gray-600">
                      Consent should be given through an affirmative action.
                    </p>
                  </div>
                </div>
              </div>

              {/* Opt-Out Section */}
              <div className="flex flex-col space-y-6">
                <h2 className="text-3xl text-black font-bold">
                  Opt-Out Mechanism
                </h2>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-gray-600" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[18px] font-semibold">Easy Access:</p>
                    <p className="text-[18px] font-semibold text-gray-600">
                      Provide a simple method for individuals to opt-out, such
                      as an unsubscribe link.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-gray-600" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[18px] font-semibold">
                      Immediate Action:
                    </p>
                    <p className="text-[18px] font-semibold text-gray-600">
                      Ensure that opt-out requests are processed promptly.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-gray-600" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[18px] font-semibold">Confirmation:</p>
                    <p className="text-[18px] font-semibold text-gray-600">
                      Send a confirmation message acknowledging the opt-out
                      request.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-gray-600" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[18px] font-semibold">
                      Respecting Preferences:
                    </p>
                    <p className="text-[18px] font-semibold text-gray-600">
                      Ensure preferences are respected across all marketing
                      channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Online Data Collection */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Online Data Collection
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                Online data collection involves gathering information from users
                through websites, mobile apps, social media, and other digital
                platforms.
              </p>
            </div>
            {/* Types of Data */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-3xl text-black font-bold">
                Types of Data Collected
              </h3>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Personal Data:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Names, email addresses, payment details.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Behavioral Data:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Page views, clicks, session duration.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Transactional Data:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Purchase history, order details.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Demographic Data:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Age, gender, location.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Technical Data:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    IP addresses, browser types.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Preference Data:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Interests and preferences.
                  </p>
                </div>
              </div>
            </div>
            {/* Best Practices */}
            <div className="flex flex-col space-y-6">
              <h3 className="text-3xl text-black font-bold">Best Practices</h3>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Transparency and Consent:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Inform users about data collection practices and obtain
                    explicit consent.
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
                    Collect only the necessary data.
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
                    Implement robust security measures to protect data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">User Control:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Provide mechanisms for users to manage their data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Compliance:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensure compliance with data protection laws.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">Data Accuracy:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Maintain accurate and up-to-date data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Anonymization and Aggregation:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Protect privacy by anonymizing data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold">
                    Clear Privacy Policies:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Develop comprehensive privacy policies.
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

export default Index;

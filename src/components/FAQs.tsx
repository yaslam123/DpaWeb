"use client";

import FaqSection from "./ui/faq-section";

const DEMO_FAQS = [
  {
    question: "What is the role of the DPA?",
    answer:
      "The DPA plays a crucial role in overseeing and regulating data protection within Somalia. It ensures that organizations adhere to robust data protection standards, conducts audits, and takes enforcement actions in cases of non-compliance.",
  },
  {
    question: "How can the DPA help individuals protect their privacy?",
    answer:
      "The DPA provides guidance on privacy rights, handles complaints, and conducts public awareness initiatives. Individuals can reach out to us for support in understanding and exercising their privacy rights.",
  },
  {
    question:
      "What steps should organizations take to ensure compliance with data protection regulations?",
    answer:
      "Organizations should conduct regular assessments, implement comprehensive data protection measures, and stay informed about evolving privacy standards. The DPA offers guidance and resources to assist entities in achieving and maintaining compliance.",
  },
  {
    question:
      "What should I do if I suspect a data breach has occurred involving my personal information?",
    answer:
      "If you suspect a data breach, contact the DPA immediately. We will guide you on the necessary steps to take, and we have mechanisms in place to investigate and address potential breaches promptly.",
  },
  {
    question: "Can the DPA impose fines for data protection violations?",
    answer:
      "Yes, the DPA has the authority to impose fines and other enforcement measures in cases of data protection violations. These measures are designed to ensure compliance and deter future non-compliance.",
  },
  {
    question:
      "How does the DPA handle complaints from individuals regarding privacy concerns?",
    answer:
      "Individuals can submit privacy-related complaints to the DPA. We conduct thorough investigations and take appropriate actions to address and resolve complaints in accordance with privacy regulations.",
  },
  {
    question:
      "Is the DPA involved in policy advocacy related to data protection?",
    answer:
      "Yes, the DPA actively engages in policy advocacy, working with government bodies, policymakers, and international organizations to shape and enhance privacy-related legislation that reflects contemporary challenges.",
  },
  {
    question:
      "Is the DPA involved in policy advocacy related to data protection?",
    answer:
      "Yes, the DPA actively engages in policy advocacy, working with government bodies, policymakers, and international organizations to shape and enhance privacy-related legislation that reflects contemporary challenges.",
  },
  {
    question:
      "What initiatives does the DPA have in place to raise public awareness about data protection?",
    answer:
      "The DPA conducts extensive public awareness campaigns, workshops, and collaborates withstakeholders to ensure individuals are well-informed about their privacy rights and the importance of responsible data handling.",
  },
  {
    question:
      "How can I stay updated on the latest developments and guidelines from the DPA?",
    answer:
      "Stay informed by regularly visiting our official website, subscribing to newsletters, and following our official social media channels. We provide updates, guidelines, and relevant information to keep the public and organizations informed about data protection matters.",
  },
];

export function FAQs() {
  return (
    <div className="bg-[#f2f2f2] w-full py-20 lg:py-30">
      <FaqSection
        title="Frequently Asked Questions"
        description="Everything you need to know about our institution"
        items={DEMO_FAQS}
        contactInfo={{
          title: "Still have questions?",
          description: "We're here to help you",
          buttonText: "Contact Support",
          onContact: () => console.log("Contact support clicked"),
        }}
      />
    </div>
  );
}

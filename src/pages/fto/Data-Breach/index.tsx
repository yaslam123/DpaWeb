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
              <h1 className="text-5xl text-black font-bold">Data Breach</h1>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                Understanding Data Breach
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                A data breach is a security incident in which sensitive,
                protected, or confidential data is accessed, disclosed, or
                stolen by unauthorized individuals. Data breaches can have
                serious consequences, including financial losses, reputational
                damage, and legal penalties. Understanding the causes and
                implementing effective strategies to prevent and respond to data
                breaches is crucial for any organization.
              </p>
              <p className="text-[18px] font-semibold text-gray-600">
                In Somalia, safeguarding personal and sensitive data is critical
                for maintaining trust and ensuring compliance with data
                protection regulations. Understanding and effectively managing
                data breaches helps protect individuals' rights and promotes a
                secure and trustworthy data environment.
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-3xl text-black font-bold">
                What Constitutes a Data Breach?
              </h2>
              <p className="text-[18px] font-semibold text-gray-600">
                A data breach can involve various types of data, including:
              </p>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              {/* <h2 className="text-2xl text-black font-bold">Key Aspects::</h2> */}
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Personal Data:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Information that can identify an individual, such as names,
                    addresses, phone numbers, and email addresses.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Financial Data:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Credit card numbers, bank account details, and other
                    financial information.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Health Data:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Medical records and health-related information.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Confidential Business Information:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Trade secrets, proprietary information, and other sensitive
                    business data.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">
                Common Causes of Data Breaches:
              </h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold "> Cyber Attacks:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Hacking, phishing, and malware attacks designed to steal
                    data.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Insider Threats:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Unauthorized access or data theft by employees or other
                    insiders.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Human Error:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Accidental data disclosure due to negligence or mistakes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Physical Theft:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Theft of devices or documents containing sensitive
                    information.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Weak Security Practices:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Inadequate security measures, such as weak passwords or
                    unencrypted data. Physical Theft: Theft of devices or
                    documents containing sensitive information.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">
                Steps to Prevent Data Breaches:
              </h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Strong Password Policies:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implement and enforce strong password policies, including
                    the use of complex passwords and regular password changes.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Employee Training:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Educate employees on recognizing phishing attempts and other
                    social engineering tactics.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Access Controls:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Use role-based access control (RBAC) to limit access to
                    sensitive data to only those who need it for their work.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Regular Software Updates:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Ensure all software and systems are kept up-to-date with the
                    latest security patches.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Data Encryption:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Encrypt sensitive data both in transit and at rest to
                    protect it from unauthorized access.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Multi-Factor Authentication (MFA):
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implement MFA to add an extra layer of security beyond just
                    passwords.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">
                Impact of a Data Breach:
              </h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Loss of Privacy:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Unauthorized access to personal information can lead to
                    identity theft and privacy violations.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">Financial Loss:</p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Both individuals and organizations can suffer financial
                    losses due to data breaches.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Reputation Damage:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Organizations can face significant reputational harm, losing
                    trust with customers and partners.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Legal Consequences:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Non-compliance with data protection laws can result in legal
                    penalties and fines.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 border-b border-dotted border-gray-300/90 pb-4">
              <h2 className="text-2xl text-black font-bold">
                Responding to a Data Breach:
              </h2>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Immediate Containment and Assessment:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Contain the Breach: Take immediate steps to stop the breach
                    and prevent further data loss.
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Assess the Impact: Determine the extent of the breach, what
                    data was affected, and the potential risks.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Notification and Communication:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Inform Affected Individuals: Notify individuals whose
                    personal data has been compromised, providing them with
                    information on the breach and steps they can take to protect
                    themselves.
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Report to Authorities: Report the breach to Somalia's Data
                    Protection Authority as required by law.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Investigation and Remediation:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Conduct an Investigation: Investigate the cause of the
                    breach and identify vulnerabilities that were exploited.
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Implement Remediation Measures: Address the vulnerabilities
                    and enhance security measures to prevent future breaches.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <p className="text-[18px] font-semibold ">
                    Review and Update Policies:
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Policy Review: Review and update data protection and
                    security policies to strengthen defences.
                  </p>
                  <p className="text-[18px] font-semibold text-gray-600">
                    Employee Training: Provide training to employees on data
                    protection best practices and how to prevent breaches.
                    mplement Remediation Measures: Address the vulnerabilities
                    and enhance security measures to prevent future breaches.
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

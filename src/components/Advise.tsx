"use client";

import {
  Timer,
  Zap,
  ZoomIn,
  Link,
  Drama,
  TextSelect,
  IdCard,
  PhoneCall,
  MailWarning,
  SquareAsterisk,
  Landmark,
  School,
  UsersRound,
  ScanHeart,
} from "lucide-react";
import { Badge } from "./ui/badge";

const Advise = () => {
  const advises = [
    {
      title: "Spam Links",
      description:
        "Spam links on Facebook can lead to phishing, malware, and data breaches. Use advanced spam filters, keep security software updated, and educate users to report suspicious links to enhance security.",
      icon: <Link className="size-6" />,
    },
    {
      title: "Identity theft",
      description:
        "Identity theft on Facebook can lead to financial loss. Scammers might steal accounts and ask friends for money. Use strong passwords and two-factor authentication to prevent this.",
      icon: <Drama className="size-6" />,
    },
    {
      title: "Spam Text",
      description:
        "Spam texts on Facebook, WhatsApp, and Messenger can lead to phishing and identity theft. Avoid clicking unknown links, block and report suspicious contacts, and keep apps updated to stay safe.",
      icon: <TextSelect className="size-6" />,
    },
    {
      title: "Keeping Personal Information",
      description:
        "Always keep your bank account details, ID, and passport secret, safe, and hidden. Avoid sharing this information online or with untrusted sources. Store physical documents securely and use strong, unique passwords for online accounts.",
      icon: <IdCard className="size-6" />,
    },
    {
      title: "Nuisance Calls",
      description:
        "Keep your phone number private and avoid sharing it with untrusted sources. Use call-blocking features and apps to filter out unwanted calls. Report nuisance calls to your service provider and authorities.",
      icon: <PhoneCall className="size-6" />,
    },
    {
      title: "Phishing Messages",
      description:
        "Avoid clicking links or downloading attachments from unknown sources. Verify the sender before sharing personal information. Use spam filters and keep your security software updated.",
      icon: <MailWarning className="size-6" />,
    },
    {
      title: "OTP",
      description:
        "Always keep your One-Time Password (OTP) private and never share it with anyone. Only enter your OTP on trusted and secure websites. Enable two-factor authentication for added security and be cautious of unsolicited messages requesting your OTP.",
      icon: <SquareAsterisk className="size-6" />,
    },
    {
      title: "Handling Bank Lines",
      description:
        "Keep your personal and financial information private. Avoid discussing sensitive details aloud. Be mindful of your surroundings and protect your belongings. Use online banking services to minimize time spent in bank lines.",
      icon: <Landmark className="size-6" />,
    },
    {
      title: "School ID and Certifications",
      description:
        "Keep your school ID and certifications safe. Avoid sharing them with untrusted sources or posting them online. Store physical copies securely and make digital backups. Use your school ID only when necessary.",
      icon: <School className="size-6" />,
    },
    {
      title: "Public Information Security",
      description:
        "Protect your personal information in public settings. Avoid sharing sensitive details aloud or online. Use secure networks, be cautious with public Wi-Fi, and always log out of public devices. Regularly update your passwords.",
      icon: <UsersRound className="size-6" />,
    },
    {
      title: "Protecting Health Records",
      description:
        "Keep your health records private and secure. Avoid sharing them with untrusted sources or online. Store physical copies safely and use secure, password-protected systems for digital records. Verify the identity of anyone requesting your health information.",
      icon: <ScanHeart className="size-6" />,
    },
  ];

  return (
    <section className="mil-Bg w-full py-20 lg:py-30">
      <div className="container mx-auto p-8">
        <div className="flex flex-col space-y-4">
          <div>
            <Badge variant="outline" className="text-zinc-700 justify-center">
              // Your Data, Your Rights
            </Badge>
          </div>
          <h1 className="text-5xl font-bold tracking-tight">Advices</h1>
        </div>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-4">
          {advises.map((advise, idx) => (
            <div key={idx} className={`rounded-lg bg-gray-200 p-5`}>
              <span className="mb-8 flex size-12 items-center justify-center rounded-full bg-gray-100">
                {advise.icon}
              </span>
              <h3 className="mb-2 text-xl font-medium">{advise.title}</h3>
              <p className="leading-7 text-muted-foreground">
                {advise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advise;

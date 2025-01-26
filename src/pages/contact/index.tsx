import Banner from "@/components/Banner";
import { FAQs } from "@/components/FAQs";
import ContactForm from "@/components/contactForm";
import Cta from "@/components/cta";
import React from "react";

function Contact() {
  return (
    <>
      <Banner
        title={
          <>
            <span className="text-[#47BDFF]">Contact Us</span>
          </>
        }
        subtitle="Get in touch with us"
      />

      <ContactForm />
      <FAQs />
    </>
  );
}

export default Contact;

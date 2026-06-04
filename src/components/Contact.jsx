import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import ContactInfoCard from "./ContactComponents/ContactInfoCard";
import SecureContactForm from "./ContactComponents/SecureContactForm";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="text-white relative overflow-hidden">
      <div className="container relative z-10 py-16 px-4 max-w-6xl mx-auto">
        <SectionHeader
          icon={Mail}
          subtitle="04 / COLLABORATION GATEWAY"
          titleLight="Contact"
          titleColored="Me"
          description="Open to internships, part-time roles, freelance opportunities, and open-source collaborations in frontend development."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 items-start">
          <div className="md:col-span-5 lg:col-span-5 w-full">
            <ContactInfoCard />
          </div>
          <div className="md:col-span-7 lg:col-span-7 w-full">
            <SecureContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

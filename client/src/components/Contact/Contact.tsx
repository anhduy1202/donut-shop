import React from "react";
import { SectionHeading } from "../Heading/Heading";
import { SectionSpacing } from "../Spacing/Spacing";

const Contact: React.FC = () => {
  return (
    <SectionSpacing>
      <SectionHeading content="Contact" />
      <div className="text-black mt-4 mb-14 text-14 font-lemonada font-semibold">
        <p> Phone: 714-123-123 </p>
        <p> Email: donutshop@gmail.com </p>
      </div>
    </SectionSpacing>
  );
};

export default Contact;

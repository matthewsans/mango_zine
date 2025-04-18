import React from "react";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id} className="section">
      {children}
    </section>
  );
};

export default Section;

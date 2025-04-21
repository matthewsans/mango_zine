import React from "react";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, children }) => {
  const isHome = id === "home";

  return (
    <section
      id={id}
      className={`section ${isHome ? "hero-section" : "card-section"}`}
    >
      {children}
    </section>
  );
};

export default Section;


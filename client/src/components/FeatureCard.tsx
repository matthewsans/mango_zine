import React from "react";

type FeatureCardProps = {
  children: React.ReactNode;
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ children, className }) => {
  return (
    <article className={`feature-card ${className || ""}`}>
      {children}
    </article>
  );
};

export default FeatureCard;

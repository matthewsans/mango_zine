import React from "react";
import './FeatureCard.css';

type FeatureCardProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties; // ✨ added this
};

const FeatureCard: React.FC<FeatureCardProps> = ({ children, className, style }) => {
  return (
    <article className={`feature-card ${className || ""}`} style={style}>
      {children}
    </article>
  );
};

export default FeatureCard;

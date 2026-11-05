"use client";

import React from "react";
import ShaderShowcase from "@/components/ui/hero";

export interface HeroProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const Hero = ({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: HeroProps) => {
  return (
    <ShaderShowcase
      badge={eyebrow}
      title={title}
      subtitle={subtitle}
      primaryCta={ctaLabel ? { label: ctaLabel, href: ctaHref || "/contact" } : undefined}
    />
  );
};

export { Hero as VerveHero, ShaderShowcase };
export default Hero;

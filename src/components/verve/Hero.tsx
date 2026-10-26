"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShaderBackground } from "@/components/ui/ShaderBackground";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const Hero = ({
  title = (
    <span className="flex flex-col gap-2.5 sm:gap-3.5 tracking-normal">
      <span className="block">
        <span className="text-white">Complete Tech Solutions: </span>
        <span className="text-[#38bdf8] drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">Social Media</span>
        <span className="text-white/50">,</span>
      </span>
      <span className="block lg:whitespace-nowrap">
        <span className="text-[#38bdf8] drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">Web Development</span>
        <span className="text-white/50">, </span>
        <span className="text-[#38bdf8] drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">SEO</span>
        <span className="text-white/50">, </span>
        <span className="text-[#38bdf8] drop-shadow-[0_0_20px_rgba(56,189,248,0.35)]">Digital &amp; Performance Marketing</span>
      </span>
    </span>
  ),
  subtitle = "We’re a Tech Solution Agency based in Vapi, Gujarat, India. We help businesses to uplift their online presence and to boost their Lead Generation process.",
  ctaLabel = "Get Started",
  ctaHref = "/contact",
}: HeroProps) => {
  return (
    <section id="hero-section" className="overflow-hidden relative w-full">
      <ShaderBackground className="min-h-[90vh] md:h-[90vh] flex flex-col justify-center items-center">
        <div className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16 md:pt-36 md:pb-20 text-center flex flex-col items-center justify-center">
          {/* Main Clean Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-[2rem] lg:text-[2.35rem] xl:text-[2.6rem] font-bold text-white leading-normal max-w-6xl xl:max-w-7xl">
            {title}
          </h1>

          {/* Clean Subtitle */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed">
            {subtitle}
          </p>

          {/* Clean CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 sm:mt-10">
            <Link href={ctaHref}>
              <Button
                size="lg"
                className="rounded-full px-7 py-5 text-sm sm:text-base font-semibold bg-white text-black hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/25"
              >
                {ctaLabel}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-7 py-5 text-sm sm:text-base font-medium text-white border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 backdrop-blur-md transition-all duration-200"
              >
                Book a call
              </Button>
            </Link>
          </div>
        </div>
      </ShaderBackground>
    </section>
  );
};

export { Hero as VerveHero };
export default Hero;

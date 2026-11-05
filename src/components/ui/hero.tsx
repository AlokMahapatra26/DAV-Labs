"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react";
import { motion } from "framer-motion";

// Safe component typing to support extended shader canvas attributes
const MeshGradientShader = MeshGradient as unknown as React.ComponentType<Record<string, unknown>>;
const PulsingBorderShader = PulsingBorder as unknown as React.ComponentType<Record<string, unknown>>;

const PARTICLES = [
  { left: "28%", top: "35%", x: 5 },
  { left: "52%", top: "22%", x: -7 },
  { left: "72%", top: "58%", x: 8 },
  { left: "34%", top: "70%", x: -4 },
  { left: "48%", top: "42%", x: 6 },
  { left: "64%", top: "32%", x: -6 },
];

export interface ShaderShowcaseProps {
  badge?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  rotatingText?: string;
  showHeader?: boolean;
  className?: string;
}

export default function ShaderShowcase({
  badge = "✨ Next-Gen Tech Solutions Agency",
  title,
  subtitle = "We’re a Tech Solution Agency based in Vapi, Gujarat, India. We help businesses to uplift their online presence and to boost their Lead Generation process.",
  primaryCta = { label: "Get Started", href: "/contact" },
  secondaryCta = { label: "Book a Call", href: "/contact" },
  rotatingText = "DAV LABS • DIGITAL AGENCY • TECH SOLUTIONS •",
  showHeader = false,
  className = "",
}: ShaderShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  const defaultTitle = (
    <>
      <motion.span
        className="block font-light text-white/90 text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-2 tracking-wider"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #06b6d4 30%, #f97316 70%, #ffffff 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          filter: "url(#text-glow)",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        Complete Tech Solutions:
      </motion.span>
      <span className="block font-black text-white drop-shadow-2xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
        Social Media, Web Development, SEO,
      </span>
      <span className="block font-light text-[#38bdf8] italic text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-[0_0_25px_rgba(56,189,248,0.4)]">
        Digital &amp; Performance Marketing
      </span>
    </>
  );

  return (
    <div
      id="hero-section"
      ref={containerRef}
      className={`min-h-screen bg-black relative overflow-hidden flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 px-6 sm:px-10 md:px-16 ${className}`}
    >
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#06b6d4" />
            <stop offset="70%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <MeshGradientShader
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
        speed={0.3}
        backgroundColor="#000000"
      />
      <MeshGradientShader
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
        speed={0.2}
        wireframe="true"
        backgroundColor="transparent"
      />

      {showHeader && (
        <header className="relative z-20 flex items-center justify-between p-6">
          <motion.div
            className="flex items-center group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.svg
              fill="currentColor"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-10 text-white group-hover:drop-shadow-lg transition-all duration-300"
              style={{
                filter: "url(#logo-glow)",
              }}
              whileHover={{
                fill: "url(#logo-gradient)",
                rotate: [0, -2, 2, 0],
                transition: {
                  fill: { duration: 0.3 },
                  rotate: { duration: 0.6, ease: "easeInOut" },
                },
              }}
            >
              <motion.path
                d="M15 85V15h12l18 35 18-35h12v70h-12V35L45 70h-10L17 35v50H15z"
                initial={{ pathLength: 1 }}
                whileHover={{
                  pathLength: [1, 0, 1],
                  transition: { duration: 1.2, ease: "easeInOut" },
                }}
              />
            </motion.svg>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {PARTICLES.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    left: p.left,
                    top: p.top,
                  }}
                  animate={{
                    y: [-10, -20, -10],
                    x: [0, p.x, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          <nav className="flex items-center space-x-2">
            <Link
              href="#services"
              className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Contact
            </Link>
          </nav>

          <div id="gooey-btn" className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
            <Link href="/contact" className="absolute right-0 px-2.5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center justify-center -translate-x-10 group-hover:-translate-x-19 z-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link href="/contact" className="px-6 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-8 flex items-center z-10">
              Connect
            </Link>
          </div>
        </header>
      )}

      <main className="relative z-20 max-w-4xl py-4 sm:py-6 md:py-10">
        <div className="text-left">
          {badge && (
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-white/10"
              style={{
                filter: "url(#glass-effect)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent rounded-full" />
              <span className="text-white/90 text-xs sm:text-sm font-medium relative z-10 tracking-wide">
                {badge}
              </span>
            </motion.div>
          )}

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight tracking-tight max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {title || defaultTitle}
          </motion.h1>

          {subtitle && (
            <motion.p
              className="text-base sm:text-lg md:text-xl font-light text-white/70 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            className="flex items-center gap-4 sm:gap-6 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {secondaryCta && (
              <Link href={secondaryCta.href}>
                <motion.button
                  className="px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-100 cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {secondaryCta.label}
                </motion.button>
              </Link>
            )}
            {primaryCta && (
              <Link href={primaryCta.href}>
                <motion.button
                  className="px-7 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 text-white font-semibold text-sm transition-all duration-300 hover:from-cyan-400 hover:to-orange-400 cursor-pointer shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {primaryCta.label}
                </motion.button>
              </Link>
            )}
          </motion.div>
        </div>
      </main>

      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 pointer-events-none select-none">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center pointer-events-auto">
          <PulsingBorderShader
            colors={["#06b6d4", "#0891b2", "#f97316", "#00FF88", "#FFD700", "#FF6B35", "#ffffff"]}
            colorBack="#00000000"
            speed={1.5}
            roundness={1}
            thickness={0.1}
            softness={0.2}
            intensity={5}
            spotsPerColor={5}
            spotSize={0.1}
            pulse={0.1}
            smoke={0.5}
            smokeSize={4}
            scale={0.65}
            rotation={0}
            frame={9161408.251009725}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />

          {/* Rotating Text Around the Pulsing Border */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(1.4)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-[11px] fill-white/80 font-medium tracking-[0.2em]">
              <textPath href="#circle" startOffset="0%">
                {rotatingText}
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  );
}

export { ShaderShowcase, ShaderShowcase as Hero, ShaderShowcase as VerveHero };

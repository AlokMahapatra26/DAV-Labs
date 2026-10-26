"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LOGOS } from "@/components/ui/logo-clouds-utils/logos";

export type LogoEntry = {
  icon: React.ReactNode;
  name?: string;
  id?: string;
};

export type LogoCloudSwapProps = {
  logos?: LogoEntry[];
  title?: string;
  subtitle?: string;
  speed?: number; // duration in seconds
  className?: string;
};

const DEFAULT_LOGOS: LogoEntry[] = LOGOS.map((l) => ({
  icon: (
    <l.Icon
      className="h-12 w-12 sm:h-14 sm:w-14 transition-transform duration-300 group-hover:scale-110"
      style={{ color: l.color }}
      aria-hidden="true"
    />
  ),
  name: l.name,
  id: l.name,
}));

function LogoItem({ logo }: { logo: LogoEntry }) {
  return (
    <div
      aria-label={logo.name ?? "Logo"}
      className="group flex w-28 sm:w-32 md:w-36 shrink-0 cursor-pointer flex-col items-center justify-center gap-3 transition-transform duration-200"
    >
      <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-muted/40 border border-border/50 p-2.5 shadow-sm backdrop-blur-sm group-hover:border-[#8B5CF6]/60 group-hover:bg-[#8B5CF6]/10 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] transition-all duration-300">
        <span className="flex items-center justify-center">
          {logo.icon}
        </span>
      </div>
      {logo.name && (
        <span className="select-none whitespace-nowrap text-xs sm:text-sm font-medium tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-200">
          {logo.name}
        </span>
      )}
    </div>
  );
}

export default function LogoCloudSwap({
  logos = DEFAULT_LOGOS,
  title = "Our Partners in Success",
  subtitle,
  speed = 28,
  className,
}: LogoCloudSwapProps) {
  // Duplicate logos multiple times for infinite seamless loop
  const marqueeLogos = React.useMemo(() => {
    return [...logos, ...logos, ...logos, ...logos];
  }, [logos]);

  return (
    <section
      className={cn("w-full bg-background pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24 overflow-hidden", className)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
            {title.includes("Success") ? (
              <>
                {title.split("Success")[0]}
                <span className="text-[#a300f6] drop-shadow-[0_0_20px_rgba(163,0,246,0.25)]">
                  Success
                </span>
                {title.split("Success")[1]}
              </>
            ) : (
              title
            )}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">{subtitle}</p>
          )}
        </div>

        {/* Single Line Continuous Smooth Scroll from Left to Right */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex items-center gap-10 sm:gap-14 md:gap-16 w-max py-4"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              ease: "linear",
              duration: speed,
              repeat: Infinity,
            }}
          >
            {marqueeLogos.map((logo, i) => (
              <LogoItem key={`${logo.id ?? logo.name}-${i}`} logo={logo} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { LogoCloudSwap };

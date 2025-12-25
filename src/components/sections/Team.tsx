"use client";
import { useRef } from "react";
import Image from "next/image";
import { TextReveal } from "../ui/TextReveal";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const team = [
  {
    name: "Deep Mistry",
    role: "Founding Member (Growth)",
    image: "/assets/deep.png"
  },
  {
    name: "Vikas Prasad",
    role: "Founding Member (Growth)",
    image: "/assets/vikas.jpg"
  },
  {
    name: "Alok Mahapatra",
    role: "Founding Member (Web Developer) ",
    image: "/assets/alok.jpg"
  },
  {
    name: "Raj",
    role: "Founding Member (App Developer)",
    image: "/assets/raj.png"
  },
];

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Parallax values - subtle vertical shifts
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -50]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 50]), springConfig);

  return (
    <section ref={containerRef} className="py-32 bg-background border-t border-border overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="mb-24 md:text-center max-w-2xl mx-auto">
          <TextReveal className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 justify-center">
            Our Team
          </TextReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg"
          >
            A collective of digital natives, code poets, and strategic thinkers.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {team.map((member, idx) => (
            <TeamCard
              key={idx}
              member={member}
              index={idx}
              y={idx % 2 === 0 ? y1 : y2}
            />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[500px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}

function TeamCard({ member, index, y }: { member: any, index: number, y: any }) {
  return (
    <motion.div
      style={{ y }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-card mb-5 border border-border group-hover:border-cyan-500/50 transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
        />

        {/* Hover content */}
        <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
          <p className="text-white text-xs font-medium uppercase tracking-wider"></p>
        </div>
      </div>

      <div className="space-y-1 pl-1">
        <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-500 transition-colors duration-300">{member.name}</h3>
        <p className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors duration-300">{member.role}</p>
      </div>
    </motion.div>
  );
}
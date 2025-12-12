import React from "react";
import {
  IconAppWindow,
  IconBrandInstagram,
  IconSignature,
  IconVideo,
  IconRocket,
} from "@tabler/icons-react";
import { TiltCard } from "@/components/ui/TileCard"; // Import the new component
import { TextReveal } from "../ui/TextReveal";

export function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-20 relative z-10">
      <TextReveal className="font-heading text-3xl md:text-5xl font-bold text-foreground text-center mb-12 justify-center">
        Our Services
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto perspective-1000">


        <TiltCard className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-8 hover:border-cyan-500/50 transition-colors duration-500 group">
          <div className="absolute top-4 right-4 text-muted-foreground group-hover:text-cyan-500 transition-colors duration-500">
            <IconAppWindow size={32} />
          </div>
          <div className="mt-24 relative z-10 pointer-events-none translate-z-20"> {/* translate-z makes text pop out */}
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Website Development</h3>
            <p className="text-muted-foreground">
              From <strong>Modern Landing Pages</strong> that convert to complex web applications.
              We build high-performance digital infrastructure using Next.js.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/20 blur-[60px] rounded-full group-hover:bg-cyan-500/30 transition-all duration-500" />
        </TiltCard>

        {/* 2. SOCIAL MEDIA */}
        <TiltCard className="relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-6 hover:border-pink-500/50 transition-colors duration-500 group">
          <IconBrandInstagram className="text-muted-foreground mb-4 group-hover:text-pink-500 transition-colors" size={32} />
          <h3 className="font-heading text-lg font-bold text-foreground">Social Media Ads</h3>
          <p className="text-muted-foreground text-sm mt-2">Daily advertising management.</p>
          <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </TiltCard>

        {/* 3. BRANDING */}
        <TiltCard className="relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-6 hover:border-yellow-500/50 transition-colors duration-500 group">
          <IconSignature className="text-muted-foreground mb-4 group-hover:text-yellow-500 transition-colors" size={32} />
          <h3 className="font-heading text-lg font-bold text-foreground">Branding</h3>
          <p className="text-muted-foreground text-sm mt-2">Identity, Strategy & Promotions.</p>
          <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </TiltCard>

        {/* 4. DIGITAL MARKETING */}
        <TiltCard className="md:col-span-2 relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-6 hover:border-green-500/50 transition-colors duration-500 group flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground">Digital Marketing Solutions</h3>
            <p className="text-muted-foreground text-sm mt-1">Complete SEO, SEM, and growth strategies.</p>
          </div>
          <div className="bg-accent p-3 rounded-full group-hover:bg-green-500/20 transition-colors">
            <IconRocket className="text-muted-foreground group-hover:text-green-500 transition-colors" size={24} />
          </div>
        </TiltCard>

        {/* 5. CONTENT CREATION */}
        <TiltCard className="relative overflow-hidden rounded-3xl border border-border bg-card hover:bg-accent/50 p-6 hover:border-purple-500/50 transition-colors duration-500 group">
          <IconVideo className="text-muted-foreground mb-4 group-hover:text-purple-500 transition-colors" size={32} />
          <h3 className="font-heading text-lg font-bold text-foreground">Content Creation</h3>
          <p className="text-muted-foreground text-sm mt-2">Graphic design & video editing.</p>
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </TiltCard>

      </div>
    </section>
  );
}
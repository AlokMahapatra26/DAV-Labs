import { VerveHero } from "@/components/verve/Hero";
import LogoCloudSwap from "@/components/ui/logo-clouds";
import AboutSection3 from "@/components/ui/about-section";
import { VerveServices } from "@/components/verve/Services";
import { VerveAbout } from "@/components/verve/About";
import { VerveMarquee } from "@/components/verve/Marquee";
import { VerveFAQ } from "@/components/verve/FAQ";
import { ClientReelReview } from "@/components/stories/ClientReelReview";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <VerveHero 
        title={
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
        }
        subtitle="We’re a Tech Solution Agency based in Vapi, Gujarat, India. We help businesses to uplift their online presence and to boost their Lead Generation process."
        ctaLabel="Get Started"
      />
      <LogoCloudSwap />
      <AboutSection3 />
      <VerveServices />
      <ClientReelReview />
      <VerveFAQ />
      <VerveAbout />
    </div>
  );
}
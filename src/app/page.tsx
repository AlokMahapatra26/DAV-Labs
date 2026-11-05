import ShaderShowcase from "@/components/ui/hero";
import LogoCloudSwap from "@/components/ui/logo-clouds";
import AboutSection3 from "@/components/ui/about-section";
import { VerveServices } from "@/components/verve/Services";
import { VerveAbout } from "@/components/verve/About";
import { VerveFAQ } from "@/components/verve/FAQ";
import { ClientReelReview } from "@/components/stories/ClientReelReview";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <ShaderShowcase />
      <LogoCloudSwap />
      <AboutSection3 />
      <VerveServices />
      <ClientReelReview />
      <VerveFAQ />
      <VerveAbout />
    </div>
  );
}

import { VerveHero } from "@/components/verve/Hero";
import { VerveServices } from "@/components/verve/Services";
import { VerveAbout } from "@/components/verve/About";
import { VerveMarquee } from "@/components/verve/Marquee";
import { VerveFAQ } from "@/components/verve/FAQ";


export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <VerveHero />
      <VerveServices />
      <VerveFAQ />
      <VerveAbout />
    </div>
  );
}
import AboutSection3 from "@/components/ui/about-section";
import AboutSection1 from "@/components/ui/about-section-1";

export const metadata = {
  title: "About Us | DAV Labs",
  description: "Learn about our journey, expertise, and how we craft impactful digital growth.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] pt-20 md:pt-24 pb-16">
      <AboutSection3 className="pt-4 sm:pt-8" />
      <AboutSection1 />
    </div>
  );
}

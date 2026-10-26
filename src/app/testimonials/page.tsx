import ClientFeedback from "@/components/ui/testimonial";

export const metadata = {
  title: "Testimonials & Client Feedback | DAV Labs",
  description: "See what startups and leading companies say about working with us.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white pt-24 md:pt-28 pb-16">
      <ClientFeedback />
    </div>
  );
}

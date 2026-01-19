import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FluidCursor } from "@/components/ui/FluidCursor";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { ThemeProvider } from "@/components/context/ThemeProvider";
import { Header } from "@/components/layout/Header";
// import { Footer } from "@/components/layout/Footer"; // Old footer
import { VerveFooter } from "@/components/verve/Footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  // Variable font, weights are automatic usually, but we can specify if needed
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: "DAV Labs",
  description: "The new standard in digital experiences.",
};

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bricolage.variable} ${hanken.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          <SmoothScroll />
          {/* <GrainTexture /> */}
          <FluidCursor />
          <WhatsAppButton />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <VerveFooter />
          <Toaster position="top-center" />
          {/* <Footer /> */}
          {/* Footer is now part of page content in this design or we can add VerveFooter here if we want it global */}
        </ThemeProvider>
      </body>
    </html>
  );
}
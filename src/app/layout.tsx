import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FluidCursor } from "@/components/ui/FluidCursor";
import SmoothScroll from "@/components/utils/SmoothScroll";
import { GrainTexture } from "@/components/ui/GrainTexture";
import { ThemeProvider } from "@/components/context/ThemeProvider";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DAV Labs",
  description: "The new standard in digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider>
          <SmoothScroll />
          <GrainTexture />
          <FluidCursor />
          {children}

          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
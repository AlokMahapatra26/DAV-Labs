import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { BackgroundBeams } from "../ui/background-beams";
import { PointerHighlight } from "../ui/pointer-highlight";
PointerHighlight

export function Hero() {
  return (

    <div id="hero" className="h-screen w-full flex md:items-center md:justify-center bg-background antialiased relative overflow-hidden bg-grid-zinc-100 dark:bg-grid-white/[0.02]">

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center h-full pt-20 md:pt-0">

        <h1 className="font-heading text-5xl md:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground pb-4">

          DAV Labs

          <br />
        </h1>

        <div className="mt-6 font-normal text-lg md:text-xl text-muted-foreground max-w-2xl text-center mx-auto leading-relaxed">
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
            pointerClassName="text-yellow-500"
          ><span className="relative z-10">We craft pixel-perfect digital experiences, from modern landing pages to full-stack web apps and digital marketing.</span></PointerHighlight>
        </div>

        <div className="flex justify-center mt-10 gap-6">
          <Link href="#contact">
            <span className="inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-border bg-gradient-to-r from-accent via-primary/20 to-accent bg-[length:200%_100%] px-8 font-medium text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg cursor-pointer">
              Get Started
            </span>
          </Link>

          <Button asChild variant="outline" className="h-14 rounded-full px-8 border-border text-foreground hover:bg-accent bg-transparent text-lg">
            <Link href="#work">
              View Work
            </Link>
          </Button>

        </div>

      </div>
      <BackgroundBeams />
    </div>

  );
}
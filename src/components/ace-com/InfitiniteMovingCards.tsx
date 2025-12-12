"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-background items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "DAV Labs transformed our outdated website into a high-performance lead generation machine. Their attention to detail and modern design aesthetic is unmatched in the industry.",
    name: "Aditya Sharma",
    title: "CEO, FinEdge Solutions",
  },
  {
    quote:
      "We needed a complex cross-platform app delivered in a tight timeframe. The team didn't just meet the deadline; they delivered a product that is smoother and faster than we imagined.",
    name: "Priya Deshmukh",
    title: "Co-Founder, UrbanCart",
  },
  {
    quote:
      "Our digital marketing ROI doubled within three months of working with them. They don't just run ads; they build data-driven strategies that actually convert.",
    name: "Vikram Malhotra",
    title: "Marketing Director, HealthPlus",
  },
  {
    quote:
      "Professional, creative, and highly responsive. The branding and UI/UX design they created for our startup perfectly captures our vision for the future.",
    name: "Ananya Gupta",
    title: "Founder, GreenSpace",
  },
  {
    quote:
      "I was skeptical about outsourcing critical tech development, but DAV Labs felt like an extension of our own team. Their technical expertise in Next.js is world-class.",
    name: "Rohan Mehta",
    title: "CTO, InnovateX",
  },
];
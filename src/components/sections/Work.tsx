"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TextReveal } from "../ui/TextReveal";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "Remote Work Collaboration",
    category: "Web App",
    description: "A Complete Solution for companies which operate online.",
    image: "/assets/teletrabago.png",
    link: "https://teletrabago.vercel.app/"
  },
  {
    title: "Course Selling Platform",
    category: "Web App",
    description: "A couse selling platform where individuals can create their courses and sell",
    image: "/assets/kosu.png",
    link: "https://kosu-frontend.vercel.app/"
  },
  {
    title: "Cloud Storage",
    category: "Web App",
    description: "A Simple modern cloud storage service",
    image: "/assets/cloudsaf.png",
    link: "https://cloudsaf-client.vercel.app/"
  },

];

export function Work() {
  return (
    <section id="work" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Title */}
        <TextReveal className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-16">
          Selected Work
        </TextReveal>

        {/* 3D Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <CardContainer key={idx} className="inter-var w-full">
              <CardBody className="bg-card relative group/card border-border w-full h-auto rounded-3xl p-6 border hover:border-cyan-500/50 transition-colors duration-500">

                {/* 1. Title (Pops out slightly) */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-foreground font-heading"
                >
                  {project.title}
                </CardItem>

                {/* 2. Description (Pops out slightly more) */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-muted-foreground text-sm max-w-sm mt-2"
                >
                  {project.description}
                </CardItem>

                {/* 3. Image (Pops out significantly - 100px) */}
                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="relative w-full h-60 rounded-xl overflow-hidden group-hover/card:shadow-xl">
                    <Image
                      src={project.image}
                      height="1000"
                      width="1000"
                      className="h-full w-full object-cover rounded-xl group-hover/card:scale-110 transition-transform duration-500"
                      alt={project.title}
                    />
                    {/* Overlay to darken image slightly until hover */}
                    <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors" />
                  </div>
                </CardItem>

                {/* 4. Footer: Category Badge & Button */}
                <div className="flex justify-between items-center mt-10">

                  {/* Category Badge */}
                  <CardItem
                    translateZ={20}
                    className="px-4 py-2 rounded-full bg-accent text-xs font-bold text-foreground border border-border"
                  >
                    {project.category}
                  </CardItem>

                  {/* Link Button */}
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:bg-cyan-500 hover:text-white transition-colors"
                  >
                    View Project <ArrowUpRight className="w-3 h-3" />
                  </CardItem>
                </div>

              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
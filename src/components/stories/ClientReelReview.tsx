"use client";

import React, { useState } from "react";
import {
    ExternalLink,
    Sparkles,
    ArrowRight,
    Globe,
    Instagram,
    MessageSquareQuote,
    Factory
} from "lucide-react";
import Link from "next/link";

interface ClientReelReviewProps {
    reelUrl?: string;
    reelId?: string;
    clientName?: string;
    clientRole?: string;
    companyName?: string;
    rating?: number;
    quote?: string;
    projectTitle?: string;
    projectCategory?: string;
    liveWebsiteUrl?: string;
    aboutLink?: string;
    logoUrl?: string;
}

export function ClientReelReview({
    reelUrl = "https://www.instagram.com/reel/DbgeYbdONNS/?igsi=bmk1YmNtbTNleWZl",
    reelId = "DbgeYbdONNS",
    clientName = "Salasar Polysacks",
    clientRole = "Premier Manufacturer",
    companyName = "Salasar Polysacks (Est. 2005)",
    rating = 5,
    quote = "DAV Labs Solutions engineered an outstanding, ultra-fast web platform for Salasar Polysacks. From showcasing our core HDPE products (Tarpaulins, Woven Bags, Baby Cones) to building an instant RFQ inquiry system, the website has greatly expanded our client reach across India.",
    projectTitle = "Salasar Polysacks — Modern Industrial Next.js Platform & Product Catalog",
    projectCategory = "Industrial Packaging & Manufacturing Web Systems",
    liveWebsiteUrl = "https://www.salasarpolysacks.com/",
    aboutLink = "/work/salasar-polysacks",
    logoUrl = "https://www.salasarpolysacks.com/logo.jpg"
}: ClientReelReviewProps) {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    const embedUrl = `https://www.instagram.com/reel/${reelId}/embed`;

    const productsList = [
        {
            name: "HDPE Woven Bags",
            desc: "High-strength, UV-stabilized bags for heavy-duty industrial packaging (Cement, Fertilizer, Grains, Chemicals)."
        },
        {
            name: "Waterproof Tarpaulins",
            desc: "Multi-layered, heavy-duty HDPE tarpaulins engineered for agricultural, construction, and industrial weather protection."
        },
        {
            name: "HDPE Baby Cones",
            desc: "High-precision winding cones designed for textile and yarn industries, optimized for smooth unwinding on high-speed machinery."
        },
        {
            name: "HDPE Slitted Rolls",
            desc: "High-tensile strength slitted rolls custom manufactured for industrial wrapping and flexible packaging needs."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 md:w-[450px] h-80 md:h-[450px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold uppercase tracking-tight text-foreground">
                        Client Video <span className="text-primary">Review</span>
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base mt-3 leading-relaxed">
                        Watch the client testimonial and explore how DAV Labs built the modern web architecture for <span className="text-foreground font-semibold">Salasar Polysacks</span>.
                    </p>
                </div>

                {/* Main 2-Column Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
                    
                    {/* LEFT COLUMN: Instagram Video Reel Player */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[360px] sm:max-w-[380px]">
                            {/* Outer Decorative Glow Frame */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/40 rounded-[2.5rem] blur-lg opacity-70 group-hover:opacity-100 transition duration-1000" />

                            {/* Phone Mockup Container */}
                            <div className="relative bg-card border border-border/80 rounded-[2.2rem] p-3 shadow-2xl backdrop-blur-xl overflow-hidden">
                                {/* Smartphone Speaker Bar */}
                                <div className="w-24 h-4 bg-muted/60 rounded-full mx-auto mb-2 flex items-center justify-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-primary/40" />
                                    <div className="w-8 h-1 rounded-full bg-border" />
                                </div>

                                {/* Reel Iframe Container */}
                                <div className="relative w-full h-[540px] sm:h-[580px] rounded-[1.6rem] overflow-hidden bg-black flex items-center justify-center">
                                    {/* Loading State */}
                                    {!iframeLoaded && (
                                        <div className="absolute inset-0 bg-muted/20 animate-pulse flex flex-col items-center justify-center p-6 text-center z-10">
                                            <Instagram className="w-12 h-12 text-primary/60 animate-bounce mb-3" />
                                            <p className="text-xs text-muted-foreground font-medium">Loading Reel Review...</p>
                                        </div>
                                    )}

                                    {/* Instagram Embed Iframe */}
                                    <iframe
                                        src={embedUrl}
                                        className="w-full h-full border-0 rounded-[1.6rem]"
                                        allow="encrypted-media"
                                        onLoad={() => setIframeLoaded(true)}
                                        title="Client Instagram Video Review"
                                    />
                                </div>

                                {/* External Instagram Link Bar */}
                                <div className="mt-3 flex items-center justify-between px-2 pt-1">
                                    <span className="text-[11px] text-muted-foreground font-mono flex items-center gap-1">
                                        <Instagram className="w-3.5 h-3.5 text-pink-500" />
                                        Instagram Reel
                                    </span>
                                    <a
                                        href={reelUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[11px] font-semibold text-primary hover:underline flex items-center gap-1 transition-all"
                                    >
                                        Open on Instagram
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Video Details & Project About Action */}
                    <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                        
                        {/* Project Heading */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight">
                                {projectTitle}
                            </h3>
                            <div className="flex items-center gap-2 mt-1.5">
                                <span className="text-xs text-primary font-mono uppercase tracking-wider">
                                    {projectCategory}
                                </span>
                                <span className="text-muted-foreground text-xs">•</span>
                                <a
                                    href={liveWebsiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 underline decoration-primary/40 underline-offset-2"
                                >
                                    salasarpolysacks.com
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        {/* Testimonial Quote Card */}
                        <div className="relative bg-card/60 border border-border/80 p-5 md:p-6 rounded-2xl shadow-md backdrop-blur-sm">
                            <MessageSquareQuote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
                            <p className="text-muted-foreground text-sm md:text-base italic leading-relaxed relative z-10 pr-6">
                                "{quote}"
                            </p>

                            {/* Client Representative Info */}
                            <div className="flex items-center gap-3.5 mt-5 pt-4 border-t border-border/60">
                                <div className="w-12 h-12 rounded-xl bg-white border border-border p-1.5 shadow-md overflow-hidden shrink-0">
                                    <img
                                        src={logoUrl || "https://www.salasarpolysacks.com/logo.jpg"}
                                        alt={`${clientName} Logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-foreground text-sm md:text-base">
                                        {clientName}
                                    </h4>
                                    <p className="text-xs text-muted-foreground">
                                        {clientRole} • <span className="text-foreground/80 font-medium">{companyName}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons: About Project & Live Site */}
                        <div className="pt-3 flex flex-wrap items-center gap-4">
                            <Link
                                href={aboutLink}
                                className="flex-1 sm:flex-none px-6 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                            >
                                <span>About Project Details</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href={liveWebsiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 sm:flex-none px-5 py-3.5 border border-border hover:bg-muted/60 rounded-xl font-medium text-sm text-foreground transition-all flex items-center justify-center gap-2"
                            >
                                <Globe className="w-4 h-4 text-primary" />
                                <span>Visit Live Website</span>
                                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

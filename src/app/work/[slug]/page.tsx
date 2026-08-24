import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ExternalLink,
    ArrowLeft,
    ShieldCheck,
    Globe,
    BookOpen,
    Factory,
    PackageCheck,
    Cpu,
    FileText,
    List,
    Clock
} from "lucide-react";
import { defaultStories, ClientStory } from "@/lib/stories-data";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const story = defaultStories.find((s) => s.slug === slug) || defaultStories[0];
    return {
        title: `${story.clientName} - Wikipedia Client Case Study | DAV Labs Solutions`,
        description: `Detailed encyclopedic overview and technical case study of ${story.clientName}, manufactured products, and web architecture engineered by DAV Labs Solutions.`,
    };
}

export default async function DynamicWorkWikiPage({ params }: PageProps) {
    const { slug } = await params;
    
    // Find story matching slug or default to Salasar Polysacks
    const story: ClientStory = defaultStories.find((s) => s.slug === slug) || defaultStories[0];

    const products = story.productsList || [
        {
            name: "HDPE Woven Bags",
            desc: "High-tensile strength, UV-stabilized woven bags for cement, fertilizers, food grains, and heavy chemical packaging."
        },
        {
            name: "Waterproof Tarpaulins",
            desc: "Multi-layered HDPE/PP tarpaulins offering all-weather waterproofing and UV resistance for agriculture and construction."
        },
        {
            name: "HDPE Baby Cones",
            desc: "Precision-molded HDPE cones engineered for textile winding looms, ensuring smooth unwinding at high speeds."
        },
        {
            name: "HDPE Slitted Rolls",
            desc: "Custom width slitted rolls for automated industrial wrapping lines and flexible protective packaging."
        }
    ];

    const techStackList = story.techStack || [
        "Next.js 16",
        "TypeScript",
        "Tailwind CSS",
        "Cloudinary CDN",
        "Framer Motion",
        "B2B RFQ System"
    ];

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-20 font-sans">
            
            {/* Top Wikipedia Notice Header */}
            <div className="border-b border-border/80 bg-muted/30 py-3">
                <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-2">
                    <div className="flex items-center gap-2">
                        <Link href="/testimonials" className="hover:text-primary transition-colors flex items-center gap-1 font-medium">
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Back to Stories & Reviews
                        </Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            Last updated by DAV Labs Solutions
                        </span>
                        <a
                            href={story.liveWebsiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline flex items-center gap-1 font-semibold"
                        >
                            {story.liveWebsiteUrl.replace("https://", "").replace("http://", "").replace(/\/$/, "")}
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Wikipedia Container */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 pt-6">

                {/* Article Header Controls (Wikipedia Nav Tabs) */}
                <div className="border-b border-border flex flex-wrap items-center justify-between pb-2 mb-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground">
                            {story.clientName}
                        </h1>
                        <p className="text-xs font-serif italic text-muted-foreground mt-1">
                            From DAV Labs Solutions Client Archive, the technical case study & enterprise overview
                        </p>
                    </div>

                    {/* Wikipedia Action Tabs */}
                    <div className="flex items-center gap-1 text-xs font-sans mt-4 sm:mt-0">
                        <span className="px-3 py-1.5 bg-card border border-border border-b-primary font-bold text-primary rounded-t-lg">
                            Article
                        </span>
                        <span className="px-3 py-1.5 text-muted-foreground hover:text-foreground cursor-pointer">
                            Technical Case Study
                        </span>
                        <span className="px-3 py-1.5 text-muted-foreground hover:text-foreground cursor-pointer">
                            View Source
                        </span>
                        <a
                            href={story.liveWebsiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 flex items-center gap-1 ml-2"
                        >
                            <Globe className="w-3 h-3" />
                            Live Site
                        </a>
                    </div>
                </div>

                {/* 2-Column Wikipedia Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* LEFT COLUMN: Main Wikipedia Article Body */}
                    <div className="lg:col-span-8 space-y-8 leading-relaxed">

                        {/* WIKIPEDIA DISCLAIMER BOX */}
                        <div className="p-4 bg-muted/40 border-l-4 border-primary text-xs text-muted-foreground rounded-r-lg space-y-1">
                            <div className="font-bold text-foreground flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 text-primary" />
                                Encyclopedic Summary & Technical Case Study
                            </div>
                            <p>
                                This article documents the industrial operations of <strong>{story.clientName}</strong> and the digital web platform architected for them by <strong>DAV Labs Solutions</strong>.
                            </p>
                        </div>

                        {/* LEAD PARAGRAPH */}
                        <p className="text-base md:text-lg text-foreground/90 font-serif leading-relaxed">
                            <strong>{story.clientName}</strong> is a {story.clientRole.toLowerCase()} specializing in high-performance digital products and manufacturing operations. {story.overview || `Founded as a leader in their industry, the enterprise produces heavy-duty solutions used across agriculture, textile, construction, and commercial sectors nationwide.`}<sup><a href="#cite-1" className="text-primary font-mono text-xs hover:underline">[1]</a></sup>
                        </p>

                        {/* WIKIPEDIA TABLE OF CONTENTS (TOC) */}
                        <div className="bg-card border border-border/80 p-5 rounded-xl max-w-md my-6 shadow-sm">
                            <div className="flex items-center gap-2 border-b border-border/60 pb-2 mb-3">
                                <List className="w-4 h-4 text-primary" />
                                <span className="font-bold text-sm uppercase tracking-wider font-sans text-foreground">
                                    Contents
                                </span>
                            </div>
                            <ol className="text-xs font-sans space-y-2 text-muted-foreground list-none pl-0">
                                <li>
                                    <a href="#overview" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                        <span className="font-mono text-primary">1</span> Overview & Background
                                    </a>
                                </li>
                                <li>
                                    <a href="#products" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                        <span className="font-mono text-primary">2</span> Key Offerings & Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#architecture" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                        <span className="font-mono text-primary">3</span> Technical Architecture by DAV Labs Solutions
                                    </a>
                                </li>
                                <li>
                                    <a href="#testimonial" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                        <span className="font-mono text-primary">4</span> Client Review & Feedback
                                    </a>
                                </li>
                                <li>
                                    <a href="#references" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                        <span className="font-mono text-primary">5</span> References & Notes
                                    </a>
                                </li>
                            </ol>
                        </div>

                        {/* SECTION 1: OVERVIEW */}
                        <section id="overview" className="space-y-4 pt-2">
                            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-1.5 flex items-center gap-2">
                                <span className="font-mono text-primary text-lg">1.</span> Overview & Enterprise Background
                            </h2>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                Operating in competitive B2B sectors, {story.clientName} has established a strong digital and operational footprint serving enterprise clients. Partnering with <strong>DAV Labs Solutions</strong>, they built an ultra-fast web application designed to showcase their product catalog, video reels, and enable automated request-for-quote (RFQ) workflows.
                            </p>
                        </section>

                        {/* SECTION 2: PRODUCTS */}
                        <section id="products" className="space-y-4 pt-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-1.5 flex items-center gap-2">
                                <span className="font-mono text-primary text-lg">2.</span> Core Manufactured Offerings & Range
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                {products.map((p, idx) => (
                                    <div key={idx} className="p-4 bg-card border border-border rounded-xl">
                                        <h3 className="font-bold text-foreground text-sm uppercase tracking-wider flex items-center gap-2 mb-1.5">
                                            <PackageCheck className="w-4 h-4 text-primary" />
                                            {p.name}
                                        </h3>
                                        <p className="text-xs text-muted-foreground leading-normal">
                                            {p.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* SECTION 3: TECHNICAL ARCHITECTURE BY DAV LABS SOLUTIONS */}
                        <section id="architecture" className="space-y-4 pt-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-1.5 flex items-center gap-2">
                                <span className="font-mono text-primary text-lg">3.</span> Technical Architecture by DAV Labs Solutions
                            </h2>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                To transition {story.clientName} into a modern web application, <strong>DAV Labs Solutions</strong> engineered a custom architecture:
                            </p>

                            <ul className="text-xs md:text-sm text-muted-foreground space-y-2 list-disc pl-5">
                                <li>
                                    <strong>Next.js App Router:</strong> Server-side rendering and static generation for sub-second initial page loads.
                                </li>
                                <li>
                                    <strong>Cloudinary CDN Streaming:</strong> Fast delivery of high-definition video assets and product gallery images.
                                </li>
                                <li>
                                    <strong>Interactive UI Navigator:</strong> Modern responsive component architecture with custom theme system.
                                </li>
                                <li>
                                    <strong>Automated B2B RFQ Dispatch:</strong> Direct lead dispatch via email and mobile integration for rapid sales inquiries.
                                </li>
                            </ul>
                        </section>

                        {/* SECTION 4: CLIENT TESTIMONIAL */}
                        <section id="testimonial" className="space-y-4 pt-4">
                            <h2 className="text-2xl font-serif font-bold text-foreground border-b border-border pb-1.5 flex items-center gap-2">
                                <span className="font-mono text-primary text-lg">4.</span> Client Review & Feedback
                            </h2>

                            <blockquote className="p-5 bg-card border-l-4 border-primary rounded-r-xl text-sm italic text-foreground leading-relaxed">
                                "{story.quote}"
                                <footer className="text-xs font-sans font-bold text-muted-foreground not-italic mt-3">
                                    — {story.clientName} ({story.companyName})
                                </footer>
                            </blockquote>
                        </section>

                        {/* SECTION 5: REFERENCES */}
                        <section id="references" className="space-y-3 pt-6 border-t border-border">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground font-sans">
                                References & Notes
                            </h3>
                            <ol className="text-xs font-mono text-muted-foreground space-y-1.5 list-decimal pl-5">
                                <li id="cite-1">
                                    {story.clientName} Official Website:{" "}
                                    <a
                                        href={story.liveWebsiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        {story.liveWebsiteUrl}
                                    </a>
                                </li>
                                <li id="cite-2">
                                    DAV Labs Solutions Web Architecture Archive.
                                </li>
                            </ol>
                        </section>

                    </div>

                    {/* RIGHT COLUMN: Authentic Wikipedia Infobox */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28 bg-card border border-border rounded-xl shadow-lg overflow-hidden text-xs">
                            
                            {/* Infobox Header with Blurred Background */}
                            <div className="relative border-b border-border p-5 text-center overflow-hidden">
                                {story.bgImageUrl && (
                                    <img
                                        src={story.bgImageUrl}
                                        alt="Manufacturing Background"
                                        className="absolute inset-0 w-full h-full object-cover blur-md scale-110 opacity-30"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />

                                {/* Logo & Name */}
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center mx-auto mb-3 p-2 shadow-xl overflow-hidden">
                                        <img
                                            src={story.logoUrl || "https://www.salasarpolysacks.com/logo.jpg"}
                                            alt={`${story.clientName} Logo`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="font-serif font-bold text-lg text-foreground tracking-tight">
                                        {story.clientName}
                                    </h3>
                                    <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                                        Enterprise Client Case Study
                                    </p>
                                </div>
                            </div>

                            {/* Infobox Key Details Table */}
                            <div className="divide-y divide-border">
                                <div className="grid grid-cols-12 p-2.5">
                                    <span className="col-span-5 font-bold text-muted-foreground">Type</span>
                                    <span className="col-span-7 text-foreground font-medium">Private Limited</span>
                                </div>

                                <div className="grid grid-cols-12 p-2.5">
                                    <span className="col-span-5 font-bold text-muted-foreground">Industry</span>
                                    <span className="col-span-7 text-foreground">{story.projectCategory}</span>
                                </div>

                                <div className="grid grid-cols-12 p-2.5">
                                    <span className="col-span-5 font-bold text-muted-foreground">Role</span>
                                    <span className="col-span-7 text-foreground font-medium">{story.clientRole}</span>
                                </div>

                                <div className="grid grid-cols-12 p-2.5">
                                    <span className="col-span-5 font-bold text-muted-foreground">Platform Developer</span>
                                    <span className="col-span-7 font-bold text-primary">DAV Labs Solutions</span>
                                </div>

                                <div className="grid grid-cols-12 p-2.5">
                                    <span className="col-span-5 font-bold text-muted-foreground">Tech Stack</span>
                                    <span className="col-span-7 font-mono text-[11px]">{techStackList.slice(0, 3).join(", ")}</span>
                                </div>

                                <div className="grid grid-cols-12 p-2.5">
                                    <span className="col-span-5 font-bold text-muted-foreground">Website</span>
                                    <a
                                        href={story.liveWebsiteUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="col-span-7 text-primary font-medium hover:underline truncate"
                                    >
                                        {story.liveWebsiteUrl.replace("https://", "").replace("http://", "").replace(/\/$/, "")} ↗
                                    </a>
                                </div>
                            </div>

                            {/* Infobox CTA Footer */}
                            <div className="p-4 bg-muted/40 border-t border-border space-y-2">
                                <a
                                    href={story.liveWebsiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-1.5 transition-colors"
                                >
                                    <Globe className="w-3.5 h-3.5" />
                                    <span>Visit Official Website</span>
                                </a>
                                <Link
                                    href="/contact"
                                    className="w-full py-2 bg-card border border-border hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg font-medium text-xs flex items-center justify-center gap-1 transition-colors"
                                >
                                    <span>Request Similar Project</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

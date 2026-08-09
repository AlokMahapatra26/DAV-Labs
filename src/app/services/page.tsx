"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
    Code2, 
    BarChart3, 
    Palette, 
    ArrowRight, 
    Server, 
    ChevronRight, 
    Building2,
    Bell,
    CreditCard,
    BookOpen,
    Briefcase,
    ShieldCheck,
    FileText,
    Award,
    Sparkles,
    CheckCircle2,
    TrendingUp,
    Globe,
    Zap,
    ShoppingCart,
    Layout,
    Wrench,
    Smartphone,
    Database,
    Search,
    Target,
    Share2,
    Megaphone,
    Camera,
    PenTool,
    Image as ImageIcon,
    Video,
    Receipt,
    Lock,
    Mail,
    KeyRound,
    Calculator,
    MousePointerClick,
    HardDrive,
    BadgeCheck
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

function getServiceDetails(serviceName: string, catIdx: number, idx: number) {
    const s = serviceName.toLowerCase();
    
    const defaultGradients = [
        "from-amber-500 to-orange-600",
        "from-purple-500 to-fuchsia-600",
        "from-cyan-500 to-blue-600",
        "from-emerald-400 to-teal-600",
        "from-rose-500 to-red-600",
        "from-indigo-500 to-violet-600",
        "from-yellow-400 to-amber-500",
        "from-pink-500 to-rose-600",
    ];
    const defaultBg = defaultGradients[(catIdx * 3 + idx) % defaultGradients.length];

    if (s.includes("designing") || s.includes("ui/ux")) return { Icon: Layout, bg: "from-purple-500 to-fuchsia-600" };
    if (s.includes("development") && !s.includes("app")) return { Icon: Code2, bg: "from-amber-500 to-orange-600" };
    if (s.includes("speed")) return { Icon: Zap, bg: "from-yellow-400 to-amber-500" };
    if (s.includes("commerce") || s.includes("shopify")) return { Icon: ShoppingCart, bg: "from-emerald-400 to-teal-600" };
    if (s.includes("maintenance")) return { Icon: Wrench, bg: "from-indigo-500 to-violet-600" };
    if (s.includes("app")) return { Icon: Smartphone, bg: "from-cyan-500 to-blue-600" };
    if (s.includes("erp") || s.includes("custom software")) return { Icon: Database, bg: "from-rose-500 to-red-600" };
    
    if (s.includes("seo") || s.includes("search engine optimization")) return { Icon: Search, bg: "from-emerald-400 to-teal-600" };
    if (s.includes("sem") || (s.includes("marketing") && s.includes("search"))) return { Icon: Target, bg: "from-amber-500 to-orange-600" };
    if (s.includes("optimization")) return { Icon: TrendingUp, bg: "from-cyan-400 to-teal-500" };
    if (s.includes("social")) return { Icon: Share2, bg: "from-purple-500 to-fuchsia-600" };
    if (s.includes("branding")) return { Icon: Award, bg: "from-indigo-500 to-violet-600" };
    if (s.includes("instagram")) return { Icon: Camera, bg: "from-pink-500 to-rose-600" };
    if (s.includes("facebook") || s.includes("ads")) return { Icon: Megaphone, bg: "from-blue-500 to-indigo-600" };
    if (s.includes("linkedin")) return { Icon: Briefcase, bg: "from-sky-500 to-blue-600" };
    
    if (s.includes("brochure") || s.includes("catalog")) return { Icon: BookOpen, bg: "from-amber-500 to-orange-600" };
    if (s.includes("logo")) return { Icon: PenTool, bg: "from-purple-500 to-fuchsia-600" };
    if (s.includes("banner") || s.includes("image")) return { Icon: ImageIcon, bg: "from-cyan-500 to-blue-600" };
    if (s.includes("video")) return { Icon: Video, bg: "from-rose-500 to-red-600" };
    if (s.includes("writing") || s.includes("content")) return { Icon: FileText, bg: "from-emerald-400 to-teal-600" };
    if (s.includes("google") || s.includes("ppc")) return { Icon: MousePointerClick, bg: "from-yellow-400 to-amber-500" };
    
    if (s.includes("gst")) return { Icon: Receipt, bg: "from-amber-500 to-orange-600" };
    if (s.includes("msme") || s.includes("udyam")) return { Icon: Building2, bg: "from-emerald-400 to-teal-600" };
    if (s.includes("iec")) return { Icon: Globe, bg: "from-cyan-500 to-blue-600" };
    if (s.includes("company")) return { Icon: Building2, bg: "from-indigo-500 to-violet-600" };
    if (s.includes("trademark")) return { Icon: BadgeCheck, bg: "from-purple-500 to-fuchsia-600" };
    if (s.includes("pan") || s.includes("tan")) return { Icon: CreditCard, bg: "from-yellow-400 to-amber-500" };
    if (s.includes("dsc")) return { Icon: KeyRound, bg: "from-rose-500 to-red-600" };
    if (s.includes("tax")) return { Icon: Calculator, bg: "from-pink-500 to-rose-600" };
    
    if (s.includes("hosting")) return { Icon: HardDrive, bg: "from-cyan-500 to-blue-600" };
    if (s.includes("domain")) return { Icon: Globe, bg: "from-indigo-500 to-violet-600" };
    if (s.includes("ssl")) return { Icon: Lock, bg: "from-emerald-400 to-teal-600" };
    if (s.includes("email")) return { Icon: Mail, bg: "from-purple-500 to-fuchsia-600" };

    return { Icon: Sparkles, bg: defaultBg };
}

const serviceCategories = [
    {
        title: "Web & App Solutions",
        description: "End-to-end development and engineering to power your digital presence and operational capabilities.",
        icon: <Code2 className="w-8 h-8" />,
        services: [
            "Website Designing",
            "Website Development",
            "Page Speed Optimization",
            "E-Commerce",
            "UI/UX Design",
            "Website Maintenance",
            "Mobile App Development",
            "Optical-ERP Solution",
            "Custom Software",
        ]
    },
    {
        title: "Digital Marketing",
        description: "Data-driven marketing strategies designed to cut through the noise, target high-intent users, and drive ROI.",
        icon: <BarChart3 className="w-8 h-8" />,
        services: [
            "Search Engine Optimization",
            "Search Engine Marketing",
            "Social Media Optimization",
            "Social Media Handling",
            "Corporate Branding (CRM)",
            "Social Media Marketing",
            "Instagram Marketing",
            "Facebook Ads",
            "LinkedIn Ads",
        ]
    },
    {
        title: "Graphics Solutions",
        description: "Creative design services that communicate your brand's unique identity and build instant trust.",
        icon: <Palette className="w-8 h-8" />,
        services: [
            "Brochure/Catalog Design",
            "Logo Designing",
            "Product Catalog Design",
            "Banner Designing",
            "Visiting/Business Card",
            "Corporate Video Shooting",
            "Content Writing",
            "Google Ads/ PPC",
        ]
    },
    {
        title: "Business Registration Services",
        description: "Comprehensive registration, compliance, and legal identity solutions to seamlessly launch and scale your business.",
        icon: <Building2 className="w-8 h-8" />,
        services: [
            "GST Registration",
            "MSME/Udyam",
            "IEC",
            "Company Registration",
            "Trademark",
            "PAN/TAN",
            "DSC",
            "Professional Tax",
        ]
    },
    {
        title: "Servers & Others",
        description: "Reliable infrastructure, secure hosting, and essential registration services for your business.",
        icon: <Server className="w-8 h-8" />,
        services: [
            "Web Hosting",
            "Domain Registration & Renewal",
            "SSL Certificate",
            "Professional Email Solution",
            "E-Mail Secure Service",
            "Trademark",
        ]
    }
];

export default function ServicesPage() {
    // Smooth scrolling for anchor links if someone lands on the page with a hash
    useEffect(() => {
        if (typeof window !== "undefined" && window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "center" });
                    // Add a brief highlight effect
                    element.classList.add("ring-2", "ring-primary", "ring-offset-4", "ring-offset-background");
                    setTimeout(() => {
                        element.classList.remove("ring-2", "ring-primary", "ring-offset-4", "ring-offset-background");
                    }, 2000);
                }, 100);
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-border/50 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase text-foreground mb-4 tracking-tight">
                            Our <span className="text-primary">Solutions</span>
                        </h1>
                        <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-widest leading-relaxed">
                            Comprehensive Digital Services To Elevate Your Business
                        </p>
                    </motion.div>

                    <motion.p
                        className="text-sm md:text-base text-muted-foreground max-w-lg text-left md:text-right mt-6 md:mt-0 leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        We solve complex problems with elegant code, data-backed design, and proven marketing strategies. Explore our comprehensive suite of solutions below.
                    </motion.p>
                </div>

                {/* Categories & Cards */}
                <div className="space-y-24 mb-24">
                    {serviceCategories.map((category, catIdx) => (
                        <motion.section 
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-6 mb-10">
                                <div className="p-4 bg-primary/10 text-primary rounded-2xl border border-primary/20">
                                    {category.icon}
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold uppercase text-foreground mb-2">
                                        {category.title}
                                    </h2>
                                    <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Service Cards Grid - Matching Reference Style */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {category.services.map((service, idx) => {
                                    const serviceId = service.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                                    const { Icon: CornerIcon, bg } = getServiceDetails(service, catIdx, idx);

                                    return (
                                        <Link 
                                            key={idx} 
                                            id={serviceId}
                                            href="/contact"
                                            className="group relative bg-card border border-border/60 rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[220px] scroll-mt-32 overflow-hidden cursor-pointer"
                                        >
                                            <div className="z-10">
                                                <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug pr-4">
                                                    {service}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed font-normal mb-6">
                                                    Expert {service.toLowerCase()} solutions tailored to drive measurable results and operational excellence for your brand.
                                                </p>
                                            </div>

                                            {/* Bottom-Right Triangular Ribbon Corner Badge */}
                                            <div className="absolute bottom-0 right-0 w-14 h-14 md:w-16 md:h-16 overflow-hidden rounded-br-2xl md:rounded-br-3xl pointer-events-none z-10">
                                                <div className={`w-full h-full bg-gradient-to-tl ${bg} flex items-end justify-end p-2.5 [clip-path:polygon(100%_0,0_100%,100%_100%)] shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                                                    <CornerIcon className="w-4 h-4 md:w-4.5 md:h-4.5 text-white z-20" />
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 text-center shadow-lg"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0" />
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase mb-6 tracking-tight">
                            Ready to <span className="text-primary">Transform</span> Your Business?
                        </h2>
                        <p className="text-base text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto">
                            The market is crowded. To win, you need a partner who cares as much about your success as you do. Let's build something extraordinary together.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-widest px-10 py-6 text-sm transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/20">
                                Get a Free Consultation
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

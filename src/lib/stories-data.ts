export interface ProductItem {
    name: string;
    desc: string;
}

export interface ClientStory {
    id: string;
    slug: string;
    clientName: string;
    clientRole: string;
    companyName: string;
    rating: number;
    quote: string;
    projectTitle: string;
    projectCategory: string;
    reelUrl: string;
    reelId: string;
    liveWebsiteUrl: string;
    logoUrl?: string;
    bgImageUrl?: string;
    productsList?: ProductItem[];
    techStack?: string[];
    overview?: string;
    challenges?: string[];
    solutions?: string[];
    createdAt?: string;
    isFeatured?: boolean;
}

export const defaultStories: ClientStory[] = [
    {
        id: "salasar-polysacks-001",
        slug: "salasar-polysacks",
        clientName: "Salasar Polysacks",
        clientRole: "Premier Manufacturer",
        companyName: "Salasar Polysacks (Est. 2005)",
        rating: 5,
        quote: "DAV Labs engineered an outstanding, ultra-fast web platform for Salasar Polysacks. From showcasing our core HDPE products (Tarpaulins, Woven Bags, Baby Cones) to building an instant RFQ inquiry system, the website has greatly expanded our client reach across India.",
        projectTitle: "Salasar Polysacks — Modern Industrial Next.js Platform & Product Showcase",
        projectCategory: "Industrial Packaging & Manufacturing Web Systems",
        reelUrl: "https://www.instagram.com/reel/DbgeYbdONNS/?igsi=bmk1YmNtbTNleWZl",
        reelId: "DbgeYbdONNS",
        liveWebsiteUrl: "https://www.salasarpolysacks.com/",
        logoUrl: "https://www.salasarpolysacks.com/logo.jpg",
        bgImageUrl: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827089/71_sonqlg.jpg",
        productsList: [
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
        ],
        techStack: [
            "Next.js 16",
            "TypeScript",
            "Tailwind CSS",
            "Cloudinary CDN",
            "Framer Motion",
            "ISO 9001:2015 Showcase",
            "B2B RFQ System"
        ],
        overview: "Salasar Polysacks is a leading manufacturer of high-density polyethylene (HDPE) and polypropylene (PP) products established in 2005. DAV Labs Solutions designed, developed, and deployed their complete modern enterprise web platform, highlighting their extensive industrial manufacturing capabilities, product catalog, and ISO 9001:2015 quality certifications.",
        challenges: [
            "Displaying extensive HDPE/PP product categories clearly to B2B buyers nationwide.",
            "Integrating high-definition video of factory extrusion & loom machinery.",
            "Fast RFQ inquiry system for instant quote requests across India."
        ],
        solutions: [
            "Next.js SSR & App Router for lightning-fast sub-second loading.",
            "Cloudinary CDN streaming for high-speed factory video playback.",
            "Custom interactive product modals & responsive industrial theme."
        ],
        createdAt: "2026-02-24",
        isFeatured: true
    }
];

export function extractReelId(url: string): string {
    if (!url) return "DbgeYbdONNS";
    const match = url.match(/reel\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : "DbgeYbdONNS";
}

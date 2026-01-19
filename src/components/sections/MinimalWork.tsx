import Link from "next/link";

export function MinimalWork() {
    const projects = [
        {
            title: "Fintech Dashboard",
            description: "A comprehensive financial analytics platform for enterprise clients. Features real-time data visualization, automated reporting, and secure role-based access control.",
            tech: ["Next.js", "TypeScript", "D3.js", "Supabase"],
            link: "/work/fintech-dashboard"
        },
        {
            title: "Global Logistics App",
            description: "Real-time tracking and fleet management solution. Reduced delivery times by 20% through optimized route planning algorithms.",
            tech: ["React Native", "Node.js", "PostgreSQL", "Redis"],
            link: "/work/logistics-app"
        },
        {
            title: "Healthcare Portal",
            description: "Secure patient management system connecting doctors and patients. HIPAA compliant with end-to-end encryption for sensitive data.",
            tech: ["React", "Python", "Django", "AWS"],
            link: "/work/healthcare-portal"
        }
    ];

    return (
        <section className="py-10">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-heading font-bold">Selected Projects</h2>
                <Link href="/work" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    View All
                </Link>
            </div>

            <div className="space-y-12">
                {projects.map((project, index) => (
                    <div key={index} className="group">
                        <Link href={project.link} className="block">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                {project.title}
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">↗</span>
                            </h3>
                        </Link>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((t) => (
                                <span key={t} className="text-xs font-mono bg-secondary/50 px-2 py-1 rounded text-secondary-foreground">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

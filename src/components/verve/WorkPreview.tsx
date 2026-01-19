import Link from "next/link";
import { Button } from "@/components/ui/button";

export function VerveWorkPreview() {
    const projects = [
        {
            title: "Fintech Evolution",
            category: "Web Platform",
            image: "bg-gradient-to-br from-blue-900 to-slate-900", // Placeholder gradient
        },
        {
            title: "Luxury Fashion",
            category: "E-Commerce",
            image: "bg-gradient-to-br from-purple-900 to-slate-900", // Placeholder gradient
        },
    ];

    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase text-primary">Selected Work</h2>
                    <Link href="/work">
                        <Button variant="link" className="text-foreground hover:text-primary uppercase tracking-widest font-bold">
                            View All Projects
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className={`aspect-[4/3] ${project.image} mb-6 overflow-hidden relative`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-full">View Case</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold uppercase mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground uppercase tracking-widest">{project.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import Link from "next/link";

export function MinimalHero() {
    return (
        <section className="pt-32 pb-10">
            <div className="flex flex-col items-start text-left">
                <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6 text-foreground">
                    Hi, We&apos;re <span className="text-primary">DAV Labs</span>.
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    A full-stack digital product studio. We build high-performance web applications,
                    scalable backends, and intuitive user interfaces to solve real-world problems.
                </p>

                <div className="flex gap-4 mt-8">
                    <Link
                        href="/contact"
                        className="text-primary font-bold hover:underline underline-offset-4 decoration-2"
                    >
                        Get in Touch
                    </Link>
                    <span className="text-muted-foreground">•</span>
                    <Link
                        href="/work"
                        className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                        View Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

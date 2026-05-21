export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase text-foreground mb-8">
                    About <span className="text-primary">Us</span>
                </h1>
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm text-left mt-12">
                    <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Who We Are</h2>
                    <p className="mb-8 text-muted-foreground leading-relaxed">
                        Davalbs is a digital agency focused on building modern websites, automation tools, and custom software that help businesses work faster and grow smarter.
                    </p>

                    <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">What We Do</h2>
                    <p className="mb-8 text-muted-foreground leading-relaxed">
                        We design and develop clean, performance-focused websites, WhatsApp automation systems, business tools, and custom workflow-based solutions.
                    </p>

                    <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">Our Approach</h2>
                    <p className="mb-4 text-muted-foreground leading-relaxed">
                        We keep things simple, practical, and result-oriented. Every project is built with:
                    </p>
                    <ul className="list-disc pl-5 mb-8 space-y-2 text-muted-foreground marker:text-primary">
                        <li>Clean UI</li>
                        <li>Strong backend</li>
                        <li>Fast performance</li>
                        <li>Long-term scalability</li>
                    </ul>

                    <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">Why Clients Choose Us</h2>
                    <ul className="list-disc pl-5 mb-2 space-y-2 text-muted-foreground marker:text-primary">
                        <li>Transparent work</li>
                        <li>Fast delivery</li>
                        <li>Affordable and professional</li>
                        <li>Real support</li>
                        <li>Custom solutions for businesses</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export function MinimalServices() {
    const services = [
        {
            id: "01",
            title: "Strategy",
            description: "Brand Strategy, Digital Strategy, Content Strategy, Art Direction",
        },
        {
            id: "02",
            title: "Design",
            description: "UI/UX Design, Website Design, Mobile App Design, Design Systems",
        },
        {
            id: "03",
            title: "Development",
            description: "Web Development, Mobile Development, eCommerce, CMS Integration",
        },
        {
            id: "04",
            title: "Marketing",
            description: "SEO, Social Media Marketing, Email Marketing, PPC",
        },
    ];

    return (
        <section className="py-20 border-b border-border">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="col-span-1 md:col-span-4">
                        <h2 className="text-sm font-bold uppercase tracking-widest mb-10">Our Services</h2>
                    </div>
                    <div className="col-span-1 md:col-span-8">
                        <div className="grid grid-cols-1 gap-0">
                            {services.map((service) => (
                                <div key={service.id} className="group border-t border-border py-10 flex flex-col md:flex-row justify-between items-start md:items-center transition-colors hover:bg-muted/30 px-4 -mx-4">
                                    <div className="flex items-baseline gap-4 mb-4 md:mb-0">
                                        <span className="text-xs font-mono text-muted-foreground">{service.id}</span>
                                        <h3 className="text-3xl font-heading font-medium">{service.title}</h3>
                                    </div>
                                    <p className="text-agency-sm text-muted-foreground max-w-xs text-right">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

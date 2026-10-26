export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase text-foreground mb-8">
                        Terms of <span className="text-primary">Service</span>
                    </h1>
                    <div className="prose prose-sm md:prose-base dark:prose-invert text-muted-foreground max-w-none space-y-10 mt-8">
                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Service Agreement</h2>
                            <p className="text-base text-muted-foreground">By using our website or services, you agree to our service terms.</p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Project & Payment</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground marker:text-primary">
                                <li>Work starts after advance/agreement</li>
                                <li>Scope changes can affect cost/timeline</li>
                                <li>Delivery happens after full approval</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Ownership</h2>
                            <p className="text-base text-muted-foreground">Client owns all final deliverables after full payment clearance.</p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Support</h2>
                            <p className="text-base text-muted-foreground">Free support period depends on the project scope.</p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Contact</h2>
                            <p className="text-base text-muted-foreground">
                                For any concerns, contact <a href="mailto:contact@davlabs.com" className="text-primary font-bold hover:underline">contact@davlabs.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

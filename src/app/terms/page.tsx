export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
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
                            <li>Work starts after initial confirmation/payment</li>
                            <li>Revisions as per project scope</li>
                            <li>Additional work may have extra cost</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Intellectual Property</h2>
                        <p className="text-base text-muted-foreground">Final deliverables belong to the client after full payment.</p>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Liability Limit</h2>
                        <p className="text-base text-muted-foreground">We provide services &ldquo;as is&rdquo; and are not responsible for client-side misuse or third-party failures.</p>
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
    );
}

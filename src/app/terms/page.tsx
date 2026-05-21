export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase text-foreground mb-8">
                    Terms of <span className="text-primary">Service</span>
                </h1>
                <div className="prose prose-sm md:prose-base dark:prose-invert text-muted-foreground max-w-none">
                    <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
                        <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Service Agreement</h2>
                        <p className="mb-8">By using our website or services, you agree to our service terms.</p>

                        <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">Project & Payment</h2>
                        <ul className="list-disc pl-5 mb-8 space-y-2 marker:text-primary">
                            <li>Work starts after initial confirmation/payment</li>
                            <li>Revisions as per project scope</li>
                            <li>Additional work may have extra cost</li>
                        </ul>

                        <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">Intellectual Property</h2>
                        <p className="mb-8">Final deliverables belong to the client after full payment.</p>

                        <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">Liability Limit</h2>
                        <p className="mb-8">We provide services &ldquo;as is&rdquo; and are not responsible for client-side misuse or third-party failures.</p>

                        <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">Contact</h2>
                        <p className="mb-2">
                            For any concerns, contact <a href="mailto:contact@davlabs.com" className="text-primary font-bold hover:underline">contact@davlabs.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase text-foreground mb-8">
                        Privacy <span className="text-primary">Policy</span>
                    </h1>
                    <div className="prose prose-sm md:prose-base dark:prose-invert text-muted-foreground max-w-none space-y-10 mt-8">
                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Data We Collect</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground marker:text-primary">
                                <li>Name, email, phone provided by user</li>
                                <li>Website form data</li>
                                <li>No sensitive or personal documents unless shared voluntarily</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">How We Use Data</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground marker:text-primary">
                                <li>To respond to inquiries</li>
                                <li>To provide requested services</li>
                                <li>To improve user experience</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">We Do NOT</h2>
                            <ul className="list-disc pl-5 space-y-2 text-base text-muted-foreground marker:text-primary">
                                <li>Sell user data</li>
                                <li>Share with third-party advertising</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">User Rights</h2>
                            <p className="text-base text-muted-foreground">Users can request to edit or delete their data anytime.</p>
                        </div>

                        <div>
                            <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Contact & Office</h2>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                H.O 111, Sadlani Plaza, Near Telephone Exchange, Opp Vimal Arced, Char Rasta, GIDC, Vapi- 396 195.
                            </p>
                            <p className="text-base text-muted-foreground mt-2">
                                For privacy inquiries, email us at <a href="mailto:contact@davlabs.in" className="text-primary font-bold hover:underline">contact@davlabs.in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase text-foreground mb-8">
                    Privacy <span className="text-primary">Policy</span>
                </h1>
                <div className="prose prose-sm md:prose-base dark:prose-invert text-muted-foreground max-w-none">
                    <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
                        <h2 className="text-xl md:text-2xl text-foreground mb-4 font-bold uppercase tracking-wider">Data We Collect</h2>
                        <ul className="list-disc pl-5 mb-8 space-y-2 marker:text-primary">
                            <li>Name, email, phone provided by user</li>
                            <li>Website form data</li>
                            <li>No sensitive or personal documents unless shared voluntarily</li>
                        </ul>

                        <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">How We Use Data</h2>
                        <ul className="list-disc pl-5 mb-8 space-y-2 marker:text-primary">
                            <li>To respond to inquiries</li>
                            <li>To provide requested services</li>
                            <li>To improve user experience</li>
                        </ul>

                        <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">We Do NOT</h2>
                        <ul className="list-disc pl-5 mb-8 space-y-2 marker:text-primary">
                            <li>Sell user data</li>
                            <li>Share with third-party advertising</li>
                        </ul>

                        <h2 className="text-xl md:text-2xl text-foreground mt-10 mb-4 font-bold uppercase tracking-wider">User Rights</h2>
                        <p className="mb-2">Users can request to edit or delete their data anytime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

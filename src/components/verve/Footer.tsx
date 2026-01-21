import Link from "next/link";

export function VerveFooter() {
    return (
        <footer className="py-8 px-4 bg-background flex justify-center">
            <div className="container max-w-5xl">
                <div className="bg-card border border-border rounded-3xl p-8 md:p-10 text-center shadow-sm">
                    <h2 className="text-xl md:text-3xl font-heading font-bold uppercase mb-8">
                        Lets Work <span className="text-primary">Together</span>
                    </h2>

                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-10">
                        <div className="text-center">
                            <h4 className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">Email Us</h4>
                            <a href="mailto:contact@davlabs.in" className="text-base font-bold hover:text-primary transition-colors">contact@davlabs.in</a>
                        </div>
                        <div className="text-center">
                            <h4 className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">Call Us</h4>
                            <div className="flex flex-col">
                                <a href="tel:+918469159877" className="text-base font-bold hover:text-primary transition-colors">+91 84691 59877</a>
                                <a href="tel:+918849561649" className="text-base font-bold hover:text-primary transition-colors">+91 88495 61649</a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-dashed border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-3">
                            <img src="/logo.png" alt="DAV Labs" className="h-8 w-auto object-contain opacity-80" />
                            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                                © {new Date().getFullYear()} DAV Labs
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <a href="https://www.instagram.com/davlabs.solutions/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">Instagram</a>
                            <a href="https://www.linkedin.com/in/davlabs-solution-83b3a53a5/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

import Link from "next/link";

export function VerveFooter() {
    return (
        <footer className="bg-background border-t border-dashed border-white/20 pt-12 pb-6">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-4xl font-heading font-bold uppercase mb-8">
                    Lets Work <span className="text-primary">Together</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                    <div className="text-left">
                        <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Email Us</h4>
                        <a href="mailto:contact@davlabs.in" className="text-lg font-bold hover:text-primary transition-colors">contact@davlabs.in</a>
                    </div>
                    <div className="text-left">
                        <h4 className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Call Us</h4>
                        <a href="tel:+919876543210" className="text-lg font-bold hover:text-primary transition-colors">+91 84691 59877</a>
                        <br /><a href="tel:+91876543210" className="text-lg font-bold hover:text-primary transition-colors">+91 88495 61649</a>
                    </div>
                </div>

                <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <img src="/logo.png" alt="DAV Labs" className="h-12 w-auto object-contain opacity-80" />
                        <p className="text-xs text-muted-foreground uppercase">
                            © {new Date().getFullYear()} DAV Labs.
                        </p>
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="https://www.instagram.com/davlabs.solutions/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase hover:text-primary transition-colors">Instagram</a>
                        <a href="https://www.linkedin.com/in/davlabs-solution-83b3a53a5/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase hover:text-primary transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

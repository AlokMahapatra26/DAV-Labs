import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-20 pb-10">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-4 flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-4xl font-heading font-bold tracking-tighter mb-6 leading-[0.8]">
                                DAV<br />LABS
                            </h2>
                            <p className="text-sm text-muted-foreground max-w-xs">
                                Crafting digital experiences that merge functionality with radical aesthetics.
                            </p>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground">Sitemap</h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
                            <li><Link href="/services" className="text-sm hover:underline">Services</Link></li>
                            <li><Link href="/agency" className="text-sm hover:underline">Agency</Link></li>
                            <li><Link href="/tools" className="text-sm hover:underline">Tools</Link></li>
                            <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground">Socials</h4>
                        <ul className="space-y-3">
                            <li><a href="https://www.instagram.com/davlabs.solutions/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/in/davlabs-solution-83b3a53a5/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>

                    {/* Newsletter / Contact */}
                    <div className="col-span-1 md:col-span-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-muted-foreground">Stay Updated</h4>
                        <p className="text-sm mb-4">
                            Join our newsletter for the latest insights on design and technology.
                        </p>
                        <form className="flex gap-2 border-b border-foreground pb-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent border-none outline-none w-full text-sm placeholder:text-muted-foreground"
                            />
                            <button type="submit" className="text-xs font-bold uppercase hover:text-muted-foreground">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-end border-t border-border pt-8">
                    <p className="text-xs text-muted-foreground uppercase">
                        © {new Date().getFullYear()} DAV Labs. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="text-xs text-muted-foreground uppercase hover:text-foreground">Privacy Policy</Link>
                        <Link href="/terms" className="text-xs text-muted-foreground uppercase hover:text-foreground">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, Mail, MapPin, Phone, Loader2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    service: formData.subject, // Mapping subject to service as per API
                    message: formData.message,
                    phone: "Not provided"
                }),
            });

            if (response.ok) {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="mb-12 border-b border-dashed border-border pb-8">
                    <h1 className="text-3xl md:text-5xl font-heading font-medium uppercase text-foreground mb-4">
                        Let's <span className="text-primary">Talk</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Have a project in mind? We'd love to hear from you.
                        Fill out the form or send us an email directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div className="group border-b border-dashed border-border pb-8">
                            <h3 className="text-sm font-mono text-muted-foreground mb-2">EMAIL US</h3>
                            <a href="mailto:contact@davlabs.in" className="flex items-center gap-4 text-2xl md:text-4xl font-heading font-bold text-foreground hover:text-primary transition-colors">
                                contact@davlabs.in
                                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>

                        { /*<div className="group border-b border-dashed border-border pb-8">
                            <h3 className="text-sm font-mono text-muted-foreground mb-2">VISIT US</h3>
                            <p className="text-xl md:text-2xl font-heading text-foreground leading-relaxed">
                                123 Innovation Drive<br />
                                Tech City, TC 90210
                            </p>
                        </div>*/}

                        {/*<div className="flex gap-4 pt-4">
                            <div className="w-12 h-12 rounded-full border border-dashed border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-solid transition-all cursor-pointer">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="w-12 h-12 rounded-full border border-dashed border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-solid transition-all cursor-pointer">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div className="w-12 h-12 rounded-full border border-dashed border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-solid transition-all cursor-pointer">
                                <Phone className="w-5 h-5" />
                            </div>
                        </div>*/}
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card border border-dashed border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent" />

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-transparent border-b border-border py-4 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                                        placeholder="Raju Ganguly"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        suppressHydrationWarning
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-border py-4 text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                                        placeholder="raju@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                                <select
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full bg-transparent border-b border-border py-4 text-lg focus:outline-none focus:border-primary transition-colors text-foreground appearance-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>New Project</option>
                                    <option>Careers</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-transparent border-b border-border py-4 text-lg min-h-[150px] focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full md:w-auto px-10 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Contact Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                    <ContactCard
                        icon={<Phone className="w-6 h-6" />}
                        title="Call Us"
                        description="Speak directly with our team"
                        value="+91 88495 61649"
                        action="Call Now"
                        href="tel:+918849561649"
                    />
                    <ContactCard
                        icon={<Mail className="w-6 h-6" />}
                        title="Email Us"
                        description="Send us your requirements"
                        value="contact@davlabs.in"
                        action="Send Email"
                        href="mailto:contact@davlabs.in"
                    />
                    <ContactCard
                        icon={<MessageCircle className="w-6 h-6" />}
                        title="WhatsApp"
                        description="Quick chat on WhatsApp"
                        value="+91 88495 61649"
                        action="Chat Now"
                        href="https://wa.me/918849561649"
                    />
                </div>
            </div>
        </div>
    );
}

function ContactCard({ icon, title, description, value, action, href }: any) {
    return (
        <div className="flex flex-col items-center text-center p-8 rounded-xl border border-dashed border-border bg-card hover:bg-muted/30 transition-colors group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-lg font-heading font-medium uppercase mb-2">{title}</h3>
            <p className="text-xs text-muted-foreground mb-4">{description}</p>
            <p className="text-sm font-mono font-bold mb-6 text-foreground/80">{value}</p>
            <a href={href} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="outline" className="w-full rounded-full border-dashed border-border hover:bg-primary hover:text-white hover:border-solid transition-all uppercase text-xs font-bold tracking-widest py-6">
                    {action}
                </Button>
            </a>
        </div>
    );
}

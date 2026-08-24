"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Plus, Film, Globe, Building2, Quote, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { ClientStory } from "@/lib/stories-data";

interface StoryEditorModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (storyData: Partial<ClientStory>) => void;
}

export function StoryEditorModal({ isOpen, onClose, onSave }: StoryEditorModalProps) {
    const [clientName, setClientName] = useState("");
    const [clientRole, setClientRole] = useState("Premier Manufacturer");
    const [companyName, setCompanyName] = useState("");
    const [projectTitle, setProjectTitle] = useState("");
    const [projectCategory, setProjectCategory] = useState("Industrial Manufacturing & Web Systems");
    const [reelUrl, setReelUrl] = useState("");
    const [liveWebsiteUrl, setLiveWebsiteUrl] = useState("");
    const [logoUrl, setLogoUrl] = useState("");
    const [quote, setQuote] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!clientName.trim() || !projectTitle.trim() || !reelUrl.trim()) {
            toast.error("Please fill in Client Name, Project Title, and Reel URL");
            return;
        }

        onSave({
            clientName,
            clientRole,
            companyName: companyName || clientName,
            projectTitle,
            projectCategory,
            reelUrl,
            liveWebsiteUrl: liveWebsiteUrl || "https://www.salasarpolysacks.com/",
            logoUrl: logoUrl || "https://www.salasarpolysacks.com/logo.jpg",
            quote: quote || "DAV Labs Solutions delivered an exceptional high-performance digital platform.",
        });

        toast.success("New Client Video Review published successfully!");
        onClose();
        resetForm();
    };

    const resetForm = () => {
        setClientName("");
        setClientRole("Premier Manufacturer");
        setCompanyName("");
        setProjectTitle("");
        setProjectCategory("Industrial Manufacturing & Web Systems");
        setReelUrl("");
        setLiveWebsiteUrl("");
        setLogoUrl("");
        setQuote("");
    };

    // Lock background page scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/75 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-card border border-border rounded-3xl shadow-2xl overflow-hidden z-10 my-8"
                    >
                        {/* Modal Header */}
                        <div className="bg-gradient-to-r from-primary/20 via-purple-500/10 to-primary/10 p-6 border-b border-border relative flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                                    <Film className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-foreground">
                                        Add Client Video Story
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        Publish a new Instagram Reel review & client case study
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5">
                                        Client Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={clientName}
                                        onChange={(e) => setClientName(e.target.value)}
                                        placeholder="e.g. Salasar Polysacks"
                                        className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5">
                                        Client Role / Designation
                                    </label>
                                    <input
                                        type="text"
                                        value={clientRole}
                                        onChange={(e) => setClientRole(e.target.value)}
                                        placeholder="e.g. Premier Manufacturer"
                                        className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5">
                                        Project Title *
                                    </label>
                                    <input
                                        type="text"
                                        value={projectTitle}
                                        onChange={(e) => setProjectTitle(e.target.value)}
                                        placeholder="e.g. Salasar Polysacks - Next.js Industrial Platform"
                                        className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:border-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5">
                                        Project Category
                                    </label>
                                    <input
                                        type="text"
                                        value={projectCategory}
                                        onChange={(e) => setProjectCategory(e.target.value)}
                                        placeholder="e.g. Industrial Packaging & Web Systems"
                                        className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5 flex items-center gap-1">
                                    <Film className="w-3.5 h-3.5 text-pink-500" />
                                    Instagram Reel Video URL *
                                </label>
                                <input
                                    type="url"
                                    value={reelUrl}
                                    onChange={(e) => setReelUrl(e.target.value)}
                                    placeholder="https://www.instagram.com/reel/DbgeYbdONNS/"
                                    className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:border-primary font-mono text-xs"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5 flex items-center gap-1">
                                        <Globe className="w-3.5 h-3.5 text-primary" />
                                        Live Website URL
                                    </label>
                                    <input
                                        type="url"
                                        value={liveWebsiteUrl}
                                        onChange={(e) => setLiveWebsiteUrl(e.target.value)}
                                        placeholder="https://www.salasarpolysacks.com/"
                                        className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:border-primary font-mono text-xs"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5">
                                        Logo URL (Optional)
                                    </label>
                                    <input
                                        type="url"
                                        value={logoUrl}
                                        onChange={(e) => setLogoUrl(e.target.value)}
                                        placeholder="https://www.salasarpolysacks.com/logo.jpg"
                                        className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:border-primary font-mono text-xs"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1.5 flex items-center gap-1">
                                    <Quote className="w-3.5 h-3.5 text-primary" />
                                    Client Testimonial Quote
                                </label>
                                <textarea
                                    rows={3}
                                    value={quote}
                                    onChange={(e) => setQuote(e.target.value)}
                                    placeholder="Enter client review feedback..."
                                    className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-xl text-sm outline-none focus:border-primary"
                                />
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-4 border-t border-border">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 py-3 border border-border rounded-xl font-medium text-sm hover:bg-muted transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                                >
                                    <CheckCircle2 className="w-4 h-4" />
                                    Publish Client Story
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

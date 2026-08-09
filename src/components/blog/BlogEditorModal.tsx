"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Image as ImageIcon, Eye, Edit3, Save, Check } from "lucide-react";
import { QuillEditor } from "./QuillEditor";
import { BlogPost, generateSlug } from "@/lib/blog-store";
import { toast } from "sonner";

interface BlogEditorModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialPost?: BlogPost | null;
    onSave: (postData: {
        title: string;
        slug?: string;
        category: string;
        excerpt: string;
        content: string;
        coverImage?: string;
        author?: string;
    }) => void;
}

const CATEGORIES = [
    "Artificial Intelligence",
    "Web Development",
    "Infrastructure",
    "Programming Languages",
    "Design & UI/UX",
    "Tech Trends",
];

const PRESET_COVER_IMAGES = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
];

export function BlogEditorModal({ isOpen, onClose, initialPost, onSave }: BlogEditorModalProps) {
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [excerpt, setExcerpt] = useState("");
    const [content, setContent] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [author, setAuthor] = useState("DAV Labs Team");
    const [activeTab, setActiveTab] = useState<"editor" | "preview">("editor");

    useEffect(() => {
        if (initialPost) {
            setTitle(initialPost.title || "");
            setSlug(initialPost.slug || "");
            setCategory(initialPost.category || CATEGORIES[0]);
            setExcerpt(initialPost.excerpt || "");
            setContent(initialPost.content || "");
            setCoverImage(initialPost.coverImage || "");
            setAuthor(initialPost.author || "DAV Labs Team");
        } else {
            setTitle("");
            setSlug("");
            setCategory(CATEGORIES[0]);
            setExcerpt("");
            setContent("");
            setCoverImage(PRESET_COVER_IMAGES[0]);
            setAuthor("DAV Labs Team");
        }
        setActiveTab("editor");
    }, [initialPost, isOpen]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setTitle(val);
        if (!initialPost) {
            setSlug(generateSlug(val));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) {
            toast.error("Please provide a blog title.");
            return;
        }
        if (!content.trim() || content === "<p><br></p>") {
            toast.error("Please add content to the blog post using React Quill.");
            return;
        }

        onSave({
            title: title.trim(),
            slug: slug.trim() ? generateSlug(slug) : generateSlug(title),
            category,
            excerpt: excerpt.trim() || title,
            content,
            coverImage: coverImage.trim() || PRESET_COVER_IMAGES[0],
            author,
        });

        toast.success(initialPost ? "Blog post updated successfully!" : "New blog post published!");
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 overflow-y-auto">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.96, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.96, opacity: 0, y: 20 }}
                        className="relative w-full max-w-4xl bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-border/80 bg-muted/20">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-heading font-bold uppercase tracking-tight">
                                        {initialPost ? "Edit Blog Post" : "Create New Blog Post"}
                                    </h2>
                                    <p className="text-xs text-muted-foreground">
                                        Powered by React Quill Rich Text Editor
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Tab Switcher */}
                                <div className="flex bg-muted/60 p-1 rounded-xl border border-border/50 text-xs">
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("editor")}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                                            activeTab === "editor"
                                                ? "bg-card text-foreground shadow-sm"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        <Edit3 className="w-3.5 h-3.5" />
                                        Editor
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab("preview")}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-all ${
                                            activeTab === "preview"
                                                ? "bg-card text-foreground shadow-sm"
                                                : "text-muted-foreground hover:text-foreground"
                                        }`}
                                    >
                                        <Eye className="w-3.5 h-3.5" />
                                        Preview
                                    </button>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/50 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Body / Scrollable Form */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {activeTab === "editor" ? (
                                <form id="blog-editor-form" onSubmit={handleSubmit} className="space-y-6">
                                    {/* Title & Category Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                                Blog Title *
                                            </label>
                                            <input
                                                type="text"
                                                value={title}
                                                onChange={handleTitleChange}
                                                placeholder="e.g. Next-Gen Web Development in 2026"
                                                className="w-full px-4 py-2.5 bg-muted/20 border border-border/80 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                                Category
                                            </label>
                                            <select
                                                value={category}
                                                onChange={(e) => setCategory(e.target.value)}
                                                className="w-full px-4 py-2.5 bg-muted/20 border border-border/80 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                                            >
                                                {CATEGORIES.map((cat) => (
                                                    <option key={cat} value={cat}>
                                                        {cat}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Slug & Author Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                                URL Slug
                                            </label>
                                            <input
                                                type="text"
                                                value={slug}
                                                onChange={(e) => setSlug(e.target.value)}
                                                placeholder="auto-generated-slug"
                                                className="w-full px-4 py-2 bg-muted/20 border border-border/80 rounded-xl text-sm font-mono focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                                Author Name
                                            </label>
                                            <input
                                                type="text"
                                                value={author}
                                                onChange={(e) => setAuthor(e.target.value)}
                                                placeholder="e.g. DAV Labs Team"
                                                className="w-full px-4 py-2 bg-muted/20 border border-border/80 rounded-xl text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Excerpt */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                                            Short Excerpt / Summary
                                        </label>
                                        <textarea
                                            value={excerpt}
                                            onChange={(e) => setExcerpt(e.target.value)}
                                            rows={2}
                                            placeholder="Write a concise overview for blog cards..."
                                            className="w-full px-4 py-2.5 bg-muted/20 border border-border/80 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm resize-none"
                                        />
                                    </div>

                                    {/* Cover Image Selection */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
                                            <span>Cover Image URL</span>
                                            <span className="text-[10px] text-muted-foreground font-normal">Select preset or paste image link</span>
                                        </label>
                                        <div className="flex gap-3 mb-3 overflow-x-auto pb-2">
                                            {PRESET_COVER_IMAGES.map((imgUrl, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => setCoverImage(imgUrl)}
                                                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                                                        coverImage === imgUrl ? "border-primary ring-2 ring-primary/30 scale-105" : "border-border/50 opacity-70 hover:opacity-100"
                                                    }`}
                                                >
                                                    {/* eslint-disable-next-next/no-img-element */}
                                                    <img src={imgUrl} alt={`Preset ${idx + 1}`} className="w-full h-full object-cover" />
                                                    {coverImage === imgUrl && (
                                                        <div className="absolute inset-0 bg-primary/30 flex items-center justify-center text-white">
                                                            <Check className="w-4 h-4" />
                                                        </div>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="relative">
                                            <ImageIcon className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                            <input
                                                type="url"
                                                value={coverImage}
                                                onChange={(e) => setCoverImage(e.target.value)}
                                                placeholder="https://..."
                                                className="w-full pl-10 pr-4 py-2 bg-muted/20 border border-border/80 rounded-xl text-xs focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* React Quill Editor */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center justify-between">
                                            <span>Blog Body Content (React Quill) *</span>
                                            <span className="text-[11px] text-primary font-normal">Use rich formatting, images & headers</span>
                                        </label>
                                        <QuillEditor value={content} onChange={setContent} />
                                    </div>
                                </form>
                            ) : (
                                /* Preview Tab */
                                <div className="space-y-6 max-w-3xl mx-auto py-4">
                                    <div className="border-b border-border/60 pb-6">
                                        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                                            <span className="text-primary">{category}</span>
                                            <span>•</span>
                                            <span>Preview Mode</span>
                                        </div>
                                        <h1 className="text-3xl md:text-4xl font-heading font-bold uppercase leading-tight">
                                            {title || "Untitled Post"}
                                        </h1>
                                        {excerpt && (
                                            <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                                                {excerpt}
                                            </p>
                                        )}
                                    </div>

                                    {coverImage && (
                                        <div className="rounded-2xl overflow-hidden border border-border/60 max-h-80">
                                            {/* eslint-disable-next-next/no-img-element */}
                                            <img src={coverImage} alt="Blog Cover" className="w-full h-full object-cover" />
                                        </div>
                                    )}

                                    <div
                                        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-a:text-primary pt-4"
                                        dangerouslySetInnerHTML={{ __html: content || "<p>No content written yet.</p>" }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between px-6 py-4 border-t border-border/80 bg-muted/20">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-5 py-2.5 border border-border/80 hover:bg-muted/50 rounded-xl text-sm font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                form="blog-editor-form"
                                className="px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-sm font-medium transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
                            >
                                <Save className="w-4 h-4" />
                                {initialPost ? "Update Post" : "Publish Post"}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

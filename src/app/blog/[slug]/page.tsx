"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Edit3, Trash2, Tag, Lock, Plus, Share2, Check } from "lucide-react";
import { useBlogStore, BlogPost } from "@/lib/blog-store";
import { BlogEditorModal } from "@/components/blog/BlogEditorModal";
import { toast } from "sonner";

export default function BlogPostDetail() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const { getPostBySlug, isAdmin, updatePost, deletePost, isLoaded } = useBlogStore();
    const [post, setPost] = useState<BlogPost | null | undefined>(undefined);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isLoaded && slug) {
            const found = getPostBySlug(slug);
            setPost(found || null);
        }
    }, [isLoaded, slug, getPostBySlug]);

    if (!isLoaded || post === undefined) {
        return (
            <div className="container mx-auto px-4 pt-36 pb-20 min-h-screen flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (post === null) {
        return (
            <div className="container mx-auto px-4 pt-36 pb-20 min-h-screen text-center">
                <h1 className="text-3xl font-heading font-bold mb-4">Article Not Found</h1>
                <p className="text-muted-foreground mb-8">The requested blog post could not be located.</p>
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium text-sm"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Articles
                </Link>
            </div>
        );
    }

    const handleCopyShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        toast.success("Article link copied to clipboard!");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete "${post.title}"?`)) {
            deletePost(post.slug);
            toast.success("Blog post deleted successfully.");
            router.push("/blog");
        }
    };

    const handleSavePost = (updatedData: {
        title: string;
        slug?: string;
        category: string;
        excerpt: string;
        content: string;
        coverImage?: string;
        author?: string;
    }) => {
        const updated = updatePost(post.slug, updatedData);
        if (updated) {
            setPost(updated);
            if (updated.slug !== post.slug) {
                router.push(`/blog/${updated.slug}`);
            }
        }
    };

    return (
        <div className="container mx-auto px-4 pt-32 pb-24 min-h-screen">
            {/* Top Navigation & Admin Controls */}
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4 mb-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </Link>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleCopyShare}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-card border border-border/80 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Share2 className="w-3.5 h-3.5" />}
                        {copied ? "Copied" : "Share"}
                    </button>

                    {isAdmin && (
                        <div className="flex items-center gap-2 bg-muted/40 p-1 rounded-xl border border-primary/30">
                            <button
                                onClick={() => setIsEditorOpen(true)}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm"
                            >
                                <Edit3 className="w-3.5 h-3.5" />
                                Edit
                            </button>
                            <button
                                onClick={handleDelete}
                                className="p-1.5 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                                title="Delete Article"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto">
                <header className="mb-10 text-center">
                    {/* Category & Meta */}
                    <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {post.category}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground font-mono mb-8">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            {post.readTime || "4 min read"}
                        </span>
                        <span>•</span>
                        <span>By {post.author || "DAV Labs Team"}</span>
                    </div>

                    {post.excerpt && (
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto border-t border-b border-border/50 py-4">
                            {post.excerpt}
                        </p>
                    )}
                </header>

                {/* Cover Image */}
                {post.coverImage && (
                    <div className="mb-12 rounded-3xl overflow-hidden border border-border/80 shadow-2xl max-h-[480px]">
                        {/* eslint-disable-next-next/no-img-element */}
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* React Quill Output Render Container */}
                <div className="bg-card/40 border border-border/60 rounded-3xl p-6 md:p-12 shadow-sm">
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:font-bold prose-a:text-primary hover:prose-a:underline prose-img:rounded-2xl prose-pre:bg-muted/80 prose-pre:border prose-pre:border-border"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </article>

            {/* Editor Modal */}
            <BlogEditorModal
                isOpen={isEditorOpen}
                onClose={() => setIsEditorOpen(false)}
                initialPost={post}
                onSave={handleSavePost}
            />
        </div>
    );
}

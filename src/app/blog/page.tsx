"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    Plus,
    Search,
    Lock,
    Unlock,
    Edit3,
    Trash2,
    Sparkles,
    Calendar,
    Clock,
    Tag,
    ArrowUpRight,
    LogOut,
} from "lucide-react";
import { useBlogStore, BlogPost } from "@/lib/blog-store";
import { AdminLoginModal } from "@/components/blog/AdminLoginModal";
import { BlogEditorModal } from "@/components/blog/BlogEditorModal";
import { toast } from "sonner";

export default function BlogPage() {
    const { posts, isAdmin, isLoaded, loginAdmin, logoutAdmin, createPost, updatePost, deletePost } = useBlogStore();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isEditorModalOpen, setIsEditorModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

    // Extract unique categories
    const categories = useMemo(() => {
        const set = new Set<string>();
        posts.forEach((p) => {
            if (p.category) set.add(p.category);
        });
        return ["All", ...Array.from(set)];
    }, [posts]);

    // Filtered posts based on search & category
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            const matchesSearch =
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [posts, selectedCategory, searchQuery]);

    const handleCreateNew = () => {
        setEditingPost(null);
        setIsEditorModalOpen(true);
    };

    const handleEdit = (post: BlogPost, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setEditingPost(post);
        setIsEditorModalOpen(true);
    };

    const handleDelete = (slug: string, title: string, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (confirm(`Are you sure you want to delete "${title}"?`)) {
            deletePost(slug);
            toast.success("Blog post deleted successfully.");
        }
    };

    const handleSavePost = (postData: {
        title: string;
        slug?: string;
        category: string;
        excerpt: string;
        content: string;
        coverImage?: string;
        author?: string;
    }) => {
        if (editingPost) {
            updatePost(editingPost.slug, postData);
        } else {
            createPost(postData);
        }
    };

    if (!isLoaded) {
        return (
            <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm text-muted-foreground font-medium">Loading Insights...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 pt-28 pb-20 min-h-screen">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border/60 pb-8">
                <div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight">
                        Insights & <span className="text-primary">Articles</span>
                    </h1>
                    <p className="text-muted-foreground mt-2 max-w-xl text-sm md:text-base">
                        Explore cutting-edge perspectives on Artificial Intelligence, Web Systems, Edge Computing, and Engineering Architecture.
                    </p>
                </div>

                {/* Admin Access Bar */}
                <div className="flex items-center gap-3 shrink-0">
                    {isAdmin ? (
                        <div className="flex items-center gap-3 bg-muted/40 p-1.5 rounded-2xl border border-primary/30">
                            <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                Admin Active
                            </span>
                            <button
                                onClick={handleCreateNew}
                                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-primary/20"
                            >
                                <Plus className="w-4 h-4" />
                                New Post
                            </button>
                            <button
                                onClick={logoutAdmin}
                                title="Logout Admin"
                                className="p-2 text-muted-foreground hover:text-destructive rounded-xl hover:bg-muted/80 transition-colors"
                            >
                                <LogOut className="w-4 h-4" />
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={() => setIsLoginModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-2.5 bg-card hover:bg-muted/60 border border-border/80 rounded-2xl text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-all"
                        >
                            <Lock className="w-4 h-4 text-primary" />
                            <span>Admin Login</span>
                        </button>
                    )}
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
                {/* Categories */}
                <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-2 py-1 text-xs font-bold uppercase tracking-wider transition-all shrink-0 bg-transparent ${
                                selectedCategory === cat
                                    ? "text-black dark:text-white underline underline-offset-4 decoration-2 decoration-primary"
                                    : "text-muted-foreground hover:text-black dark:hover:text-white"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative min-w-[260px]">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search articles..."
                        className="w-full pl-10 pr-4 py-2 bg-transparent border border-border/80 rounded-xl text-xs focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-black dark:text-white"
                    />
                </div>
            </div>

            {/* Posts Grid */}
            {filteredPosts.length === 0 ? (
                <div className="text-center py-20 bg-card border border-border/60 rounded-3xl p-8">
                    <p className="text-lg font-heading font-medium text-muted-foreground">
                        No blog posts found matching your search.
                    </p>
                    {isAdmin && (
                        <button
                            onClick={handleCreateNew}
                            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-xs font-bold uppercase tracking-wider"
                        >
                            <Plus className="w-4 h-4" />
                            Create First Article
                        </button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post, idx) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group relative bg-card border border-border/80 hover:border-primary/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                        >
                            {/* Card Image */}
                            <div className="relative h-44 w-full overflow-hidden bg-muted">
                                {post.coverImage ? (
                                    /* eslint-disable-next-next/no-img-element */
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/5 to-muted flex items-center justify-center">
                                        <Sparkles className="w-8 h-8 text-primary/40" />
                                    </div>
                                )}

                                {/* Category Tag */}
                                <div className="absolute top-3 left-3">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-black dark:text-white drop-shadow-md">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Admin Floating Overlay Controls */}
                                {isAdmin && (
                                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={(e) => handleEdit(post, e)}
                                            title="Edit Post"
                                            className="p-1.5 hover:bg-white/20 rounded-lg text-white transition-colors"
                                        >
                                            <Edit3 className="w-3.5 h-3.5" />
                                        </button>
                                        <button
                                            onClick={(e) => handleDelete(post.slug, post.title, e)}
                                            title="Delete Post"
                                            className="p-1.5 hover:bg-destructive/80 rounded-lg text-destructive-foreground transition-colors"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    {/* Meta Row */}
                                    <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2.5 font-mono">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3 text-primary" />
                                            {post.date}
                                        </span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3 text-primary" />
                                            {post.readTime || "4 min read"}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <Link href={`/blog/${post.slug}`} className="block group-hover:text-primary transition-colors">
                                        <h2 className="text-lg font-heading font-bold uppercase line-clamp-2 mb-2 leading-snug">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    {/* Excerpt */}
                                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Read Article Link */}
                                <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                                    <span className="text-[11px] text-muted-foreground font-medium">By {post.author || "DAV Labs"}</span>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary group-hover:translate-x-1 transition-transform"
                                    >
                                        Read Article
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Modals */}
            <AdminLoginModal
                isOpen={isLoginModalOpen}
                onClose={() => setIsLoginModalOpen(false)}
                onLogin={loginAdmin}
            />

            <BlogEditorModal
                isOpen={isEditorModalOpen}
                onClose={() => setIsEditorModalOpen(false)}
                initialPost={editingPost}
                onSave={handleSavePost}
            />
        </div>
    );
}

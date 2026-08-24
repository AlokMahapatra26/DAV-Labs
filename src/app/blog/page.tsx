"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Sparkles, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { useBlogStore } from "@/lib/blog-store";

export default function BlogPage() {
    const { posts, isLoaded } = useBlogStore();

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

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
        </div>
    );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Lock,
    Mail,
    KeyRound,
    CheckCircle2,
    ShieldAlert,
    Eye,
    EyeOff,
    Plus,
    FileText,
    Film,
    Trash2,
    Edit3,
    LogOut,
    ExternalLink,
    Globe,
    Building2,
    Loader2
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

import { BlogPost, useBlogStore } from "@/lib/blog-store";
import { useStoriesStore } from "@/lib/stories-store";
import { BlogEditorModal } from "@/components/blog/BlogEditorModal";
import { StoryEditorModal } from "@/components/stories/StoryEditorModal";
import { ClientStory } from "@/lib/stories-data";

export default function AdminPortalPage() {
    const { posts, isAdmin, loginAdmin, logoutAdmin, createPost, updatePost, deletePost } = useBlogStore();
    const { stories, addStory, deleteStory } = useStoriesStore();

    // Supabase Auth State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);

    // Active Tab in Admin Portal
    const [activeTab, setActiveTab] = useState<"blogs" | "stories">("blogs");

    // Modal states
    const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
    const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

    const envEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "contact@davlabs.in";
    const envPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "DAV@11223344";

    // Check existing Supabase session on mount
    useEffect(() => {
        const checkSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (session?.user) {
                    setUserEmail(session.user.email || envEmail);
                    loginAdmin(envPassword);
                }
            } catch (err) {
                console.log("Supabase session check fallback", err);
            }
        };
        checkSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                setUserEmail(session.user.email || envEmail);
                loginAdmin(envPassword);
            }
        });

        return () => subscription.unsubscribe();
    }, [loginAdmin, envEmail, envPassword]);

    const handleSupabaseLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError(null);

        if (!email.trim() || !password.trim()) {
            setLoginError("Please enter both email and password.");
            return;
        }

        setIsLoading(true);

        try {
            // First check if credentials match ENV configured admin login
            if (email.trim().toLowerCase() === envEmail.toLowerCase() && password === envPassword) {
                loginAdmin(envPassword);
                setUserEmail(envEmail);
                toast.success("Admin Portal unlocked!");
                setIsLoading(false);
                return;
            }

            // Attempt Supabase Auth Sign In
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password: password,
            });

            if (error) {
                setLoginError(error.message || "Invalid login credentials.");
                toast.error(error.message || "Login failed.");
            } else if (data.session) {
                setUserEmail(data.session.user.email || email);
                loginAdmin(envPassword);
                toast.success("Signed in with Supabase Auth!");
            }
        } catch (err: any) {
            setLoginError(err.message || "Authentication error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignOut = async () => {
        try {
            await supabase.auth.signOut();
        } catch (e) {
            console.log(e);
        }
        logoutAdmin();
        setUserEmail(null);
        toast.info("Logged out from Admin Portal.");
    };

    // BLOG HANDLERS
    const handleOpenCreateBlog = () => {
        setEditingBlog(null);
        setIsBlogModalOpen(true);
    };

    const handleOpenEditBlog = (post: BlogPost) => {
        setEditingBlog(post);
        setIsBlogModalOpen(true);
    };

    const handleDeleteBlog = (slug: string, title: string) => {
        if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
            deletePost(slug);
            toast.success("Blog post deleted successfully.");
        }
    };

    // STORY HANDLERS
    const handleOpenCreateStory = () => {
        setIsStoryModalOpen(true);
    };

    const handleDeleteStory = (id: string, name: string) => {
        if (window.confirm(`Are you sure you want to delete "${name}" story?`)) {
            deleteStory(id);
            toast.success("Client story deleted successfully.");
        }
    };

    // If NOT Admin, render Supabase Email + Password Login Form
    if (!isAdmin) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden pt-20">
                {/* Background Glows */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    className="relative w-full max-w-md bg-card border border-border/80 rounded-3xl overflow-hidden z-10 p-6 md:p-8"
                >
                    <div className="flex flex-col items-center text-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                            <Lock className="w-8 h-8" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-foreground">
                            Admin Login Portal
                        </h1>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">
                            Sign in to manage Blogs and Client Video Stories.
                        </p>
                    </div>

                    <form onSubmit={handleSupabaseLogin} className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                                Admin Email
                            </label>
                            <div className="relative flex items-center">
                                <Mail className="w-4 h-4 absolute left-3.5 text-muted-foreground pointer-events-none" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (loginError) setLoginError(null);
                                    }}
                                    placeholder="contact@davlabs.in"
                                    className="w-full pl-10 pr-4 py-3 bg-muted/30 border border-border/80 rounded-xl text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary font-mono text-xs"
                                    required
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <KeyRound className="w-4 h-4 absolute left-3.5 text-muted-foreground pointer-events-none" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        if (loginError) setLoginError(null);
                                    }}
                                    placeholder="Enter password..."
                                    className="w-full pl-10 pr-11 py-3 bg-muted/30 border border-border/80 rounded-xl text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3.5 p-1 text-muted-foreground hover:text-foreground transition-colors rounded-lg focus:outline-none"
                                    title={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {loginError && (
                            <div className="flex items-center gap-1.5 text-destructive text-xs mt-2 bg-destructive/10 p-2.5 rounded-xl border border-destructive/20">
                                <ShieldAlert className="w-4 h-4 shrink-0" />
                                <span>{loginError}</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-heading font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            {isLoading ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                            ) : (
                                <>
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Sign In to Admin Portal</span>
                                </>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    // If ADMIN LOGGED IN, render full Admin Control Dashboard
    return (
        <div className="min-h-screen bg-background pt-24 pb-20 font-sans">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                
                {/* Admin Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 bg-card border border-border p-6 rounded-3xl mb-8">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                                Admin Session Active
                            </span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-1">
                            DAV Labs Solutions Admin Dashboard
                        </h1>
                        {userEmail && (
                            <p className="text-xs text-muted-foreground font-mono mt-0.5">
                                Logged in as: <span className="text-primary font-bold">{userEmail}</span>
                            </p>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/blog"
                            target="_blank"
                            className="px-4 py-2 border border-border hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            <span>View Blog</span>
                        </Link>
                        <Link
                            href="/testimonials"
                            target="_blank"
                            className="px-4 py-2 border border-border hover:bg-muted text-muted-foreground hover:text-foreground text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors"
                        >
                            <Film className="w-3.5 h-3.5" />
                            <span>View Stories</span>
                        </Link>
                        <button
                            onClick={handleSignOut}
                            className="px-4 py-2 bg-destructive/10 text-destructive hover:bg-destructive/20 text-xs font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5"
                        >
                            <LogOut className="w-3.5 h-3.5" />
                            <span>Sign Out</span>
                        </button>
                    </div>
                </div>

                {/* Dashboard Tabs: Blogs vs Client Video Stories */}
                <div className="flex border-b border-border mb-8 gap-2">
                    <button
                        onClick={() => setActiveTab("blogs")}
                        className={`px-6 py-3 font-heading font-bold text-sm uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
                            activeTab === "blogs"
                                ? "border-primary text-primary bg-primary/5 rounded-t-xl"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        <FileText className="w-4 h-4" />
                        <span>Blog Articles ({posts.length})</span>
                    </button>

                    <button
                        onClick={() => setActiveTab("stories")}
                        className={`px-6 py-3 font-heading font-bold text-sm uppercase tracking-wider border-b-2 transition-all flex items-center gap-2 ${
                            activeTab === "stories"
                                ? "border-primary text-primary bg-primary/5 rounded-t-xl"
                                : "border-transparent text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        <Film className="w-4 h-4" />
                        <span>Client Video Stories ({stories.length})</span>
                    </button>
                </div>

                {/* TAB 1: BLOG MANAGEMENT */}
                {activeTab === "blogs" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-heading font-bold text-foreground">
                                    Blog Articles
                                </h2>
                                <p className="text-xs text-muted-foreground">
                                    Create, edit, or remove articles from the public blog page.
                                </p>
                            </div>
                            <button
                                onClick={handleOpenCreateBlog}
                                className="px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2 transition-all"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Create New Post</span>
                            </button>
                        </div>

                        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                            <div className="divide-y divide-border">
                                {posts.map((post) => (
                                    <div
                                        key={post.slug}
                                        className="p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                                    >
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase">
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-muted-foreground font-mono">
                                                    {post.date}
                                                </span>
                                            </div>
                                            <h3 className="font-heading font-bold text-foreground text-base">
                                                {post.title}
                                            </h3>
                                            <p className="text-xs text-muted-foreground line-clamp-1">
                                                {post.excerpt}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                target="_blank"
                                                className="p-2 border border-border hover:bg-muted text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                                                title="View Article"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => handleOpenEditBlog(post)}
                                                className="p-2 border border-border hover:bg-muted text-muted-foreground hover:text-primary rounded-lg transition-colors"
                                                title="Edit Article"
                                            >
                                                <Edit3 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDeleteBlog(post.slug, post.title)}
                                                className="p-2 border border-border hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-lg transition-colors"
                                                title="Delete Article"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 2: CLIENT VIDEO STORIES MANAGEMENT */}
                {activeTab === "stories" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-xl font-heading font-bold text-foreground">
                                    Client Video Reviews & Case Studies
                                </h2>
                                <p className="text-xs text-muted-foreground">
                                    Add new Instagram Reel video reviews and client Wikipedia case studies.
                                </p>
                            </div>
                            <button
                                onClick={handleOpenCreateStory}
                                className="px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md flex items-center gap-2 transition-all"
                            >
                                <Plus className="w-4 h-4" />
                                <span>Add Client Story</span>
                            </button>
                        </div>

                        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                            <div className="divide-y divide-border">
                                {stories.map((story) => (
                                    <div
                                        key={story.id}
                                        className="p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-white border border-border p-1 shadow-sm overflow-hidden shrink-0 flex items-center justify-center">
                                                {story.logoUrl ? (
                                                    <img
                                                        src={story.logoUrl}
                                                        alt={story.clientName}
                                                        className="w-full h-full object-contain"
                                                    />
                                                ) : (
                                                    <Building2 className="w-6 h-6 text-primary" />
                                                )}
                                            </div>
                                            <div className="space-y-0.5">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-heading font-bold text-foreground text-base">
                                                        {story.clientName}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        ({story.companyName})
                                                    </span>
                                                </div>
                                                <p className="text-xs font-mono text-primary">
                                                    {story.projectTitle}
                                                </p>
                                                <p className="text-[11px] text-muted-foreground italic line-clamp-1">
                                                    "{story.quote}"
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0">
                                            <Link
                                                href={`/work/${story.slug}`}
                                                target="_blank"
                                                className="px-3 py-1.5 border border-border hover:bg-muted text-xs font-semibold rounded-lg flex items-center gap-1 transition-colors"
                                                title="View Wikipedia Case Study"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                <span>Case Study</span>
                                            </Link>
                                            <button
                                                onClick={() => handleDeleteStory(story.id, story.clientName)}
                                                className="p-2 border border-border hover:bg-destructive/10 text-muted-foreground hover:text-destructive rounded-lg transition-colors"
                                                title="Delete Story"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>

            {/* MODALS */}
            <BlogEditorModal
                isOpen={isBlogModalOpen}
                onClose={() => setIsBlogModalOpen(false)}
                onSave={(data) => {
                    if (editingBlog) {
                        updatePost(editingBlog.slug, data);
                    } else {
                        createPost(data);
                    }
                }}
                initialPost={editingBlog}
            />

            <StoryEditorModal
                isOpen={isStoryModalOpen}
                onClose={() => setIsStoryModalOpen(false)}
                onSave={(data) => {
                    addStory(data);
                }}
            />
        </div>
    );
}

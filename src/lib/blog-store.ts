"use client";

import { useState, useEffect, useCallback } from "react";
import { blogPosts as defaultBlogPosts } from "./blog-data";

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    content: string;
    coverImage?: string;
    author?: string;
    readTime?: string;
}

const STORAGE_KEY = "dav_labs_blog_posts_v1";
const ADMIN_AUTH_KEY = "dav_labs_admin_auth_v1";
const ADMIN_PASSWORD = "admin123";

// Helper to estimate reading time
export function calculateReadTime(content: string): string {
    const plainText = content.replace(/<[^>]*>/g, "");
    const words = plainText.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    return `${minutes} min read`;
}

// Helper to generate clean slug
export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

export function getStoredPosts(): BlogPost[] {
    if (typeof window === "undefined") return defaultBlogPosts;
    try {
        const item = localStorage.getItem(STORAGE_KEY);
        if (!item) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBlogPosts));
            return defaultBlogPosts;
        }
        return JSON.parse(item);
    } catch (e) {
        console.error("Error reading blog posts from localStorage", e);
        return defaultBlogPosts;
    }
}

export function saveStoredPosts(posts: BlogPost[]) {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
        window.dispatchEvent(new Event("dav-blog-update"));
    } catch (e) {
        console.error("Error saving blog posts to localStorage", e);
    }
}

export function isStoredAdmin(): boolean {
    if (typeof window === "undefined") return false;
    try {
        return sessionStorage.getItem(ADMIN_AUTH_KEY) === "true";
    } catch {
        return false;
    }
}

export function setStoredAdmin(isAdmin: boolean) {
    if (typeof window === "undefined") return;
    try {
        if (isAdmin) {
            sessionStorage.setItem(ADMIN_AUTH_KEY, "true");
        } else {
            sessionStorage.removeItem(ADMIN_AUTH_KEY);
        }
        window.dispatchEvent(new Event("dav-admin-update"));
    } catch (e) {
        console.error("Error setting admin status", e);
    }
}

export function useBlogStore() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const refreshPosts = useCallback(() => {
        setPosts(getStoredPosts());
    }, []);

    const refreshAdmin = useCallback(() => {
        setIsAdmin(isStoredAdmin());
    }, []);

    useEffect(() => {
        refreshPosts();
        refreshAdmin();
        setIsLoaded(true);

        const handleBlogUpdate = () => refreshPosts();
        const handleAdminUpdate = () => refreshAdmin();

        window.addEventListener("dav-blog-update", handleBlogUpdate);
        window.addEventListener("dav-admin-update", handleAdminUpdate);

        return () => {
            window.removeEventListener("dav-blog-update", handleBlogUpdate);
            window.removeEventListener("dav-admin-update", handleAdminUpdate);
        };
    }, [refreshPosts, refreshAdmin]);

    const loginAdmin = (password: string): boolean => {
        if (password === ADMIN_PASSWORD) {
            setStoredAdmin(true);
            return true;
        }
        return false;
    };

    const logoutAdmin = () => {
        setStoredAdmin(false);
    };

    const createPost = (newPostData: Omit<BlogPost, "slug" | "date" | "readTime"> & { slug?: string }): BlogPost => {
        const currentPosts = getStoredPosts();
        const slug = newPostData.slug?.trim() || generateSlug(newPostData.title);
        
        // Ensure unique slug
        let finalSlug = slug;
        let counter = 1;
        while (currentPosts.some((p) => p.slug === finalSlug)) {
            finalSlug = `${slug}-${counter}`;
            counter++;
        }

        const dateStr = new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

        const newPost: BlogPost = {
            ...newPostData,
            slug: finalSlug,
            date: dateStr,
            author: newPostData.author || "DAV Labs Team",
            readTime: calculateReadTime(newPostData.content),
        };

        const updated = [newPost, ...currentPosts];
        saveStoredPosts(updated);
        return newPost;
    };

    const updatePost = (slug: string, updatedFields: Partial<BlogPost>): BlogPost | null => {
        const currentPosts = getStoredPosts();
        const index = currentPosts.findIndex((p) => p.slug === slug);
        if (index === -1) return null;

        const updatedPost: BlogPost = {
            ...currentPosts[index],
            ...updatedFields,
            readTime: updatedFields.content 
                ? calculateReadTime(updatedFields.content) 
                : currentPosts[index].readTime,
        };

        currentPosts[index] = updatedPost;
        saveStoredPosts(currentPosts);
        return updatedPost;
    };

    const deletePost = (slug: string): boolean => {
        const currentPosts = getStoredPosts();
        const updated = currentPosts.filter((p) => p.slug !== slug);
        if (updated.length !== currentPosts.length) {
            saveStoredPosts(updated);
            return true;
        }
        return false;
    };

    return {
        posts,
        isAdmin,
        isLoaded,
        loginAdmin,
        logoutAdmin,
        createPost,
        updatePost,
        deletePost,
        getPostBySlug: (slug: string) => posts.find((p) => p.slug === slug),
    };
}

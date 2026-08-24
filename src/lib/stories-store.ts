"use client";

import { useState, useEffect, useCallback } from "react";
import { ClientStory, defaultStories, extractReelId } from "./stories-data";

const STORIES_STORAGE_KEY = "dav_labs_client_stories_v2";

export function generateStorySlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

export function getStoredStories(): ClientStory[] {
    if (typeof window === "undefined") return defaultStories;
    try {
        const item = localStorage.getItem(STORIES_STORAGE_KEY);
        if (!item) {
            localStorage.setItem(STORIES_STORAGE_KEY, JSON.stringify(defaultStories));
            return defaultStories;
        }
        const parsed = JSON.parse(item);
        return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultStories;
    } catch (e) {
        console.error("Error reading stories from localStorage", e);
        return defaultStories;
    }
}

export function saveStoredStories(stories: ClientStory[]) {
    if (typeof window === "undefined") return;
    try {
        localStorage.setItem(STORIES_STORAGE_KEY, JSON.stringify(stories));
        window.dispatchEvent(new Event("dav-stories-update"));
    } catch (e) {
        console.error("Error saving stories to localStorage", e);
    }
}

export function useStoriesStore() {
    const [stories, setStories] = useState<ClientStory[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeStoryId, setActiveStoryId] = useState<string>("");

    const refreshStories = useCallback(() => {
        const current = getStoredStories();
        setStories(current);
        if (current.length > 0 && !activeStoryId) {
            setActiveStoryId(current[0].id);
        }
        setIsLoaded(true);
    }, [activeStoryId]);

    useEffect(() => {
        refreshStories();

        const handleStoriesUpdate = () => refreshStories();
        window.addEventListener("dav-stories-update", handleStoriesUpdate);

        return () => {
            window.removeEventListener("dav-stories-update", handleStoriesUpdate);
        };
    }, [refreshStories]);

    const activeStory = stories.find((s) => s.id === activeStoryId) || stories[0] || defaultStories[0];

    const getStoryBySlug = (slug: string): ClientStory | undefined => {
        return stories.find((s) => s.slug === slug || s.id === slug);
    };

    const addStory = (newStoryData: Partial<ClientStory>): ClientStory => {
        const current = getStoredStories();
        const reelUrl = newStoryData.reelUrl || "https://www.instagram.com/reel/DbgeYbdONNS/";
        const reelId = extractReelId(reelUrl);
        const title = newStoryData.projectTitle || newStoryData.clientName || "Client Project";
        const slug = newStoryData.slug || generateStorySlug(title);

        const newStory: ClientStory = {
            id: `story-${Date.now()}`,
            slug: slug,
            clientName: newStoryData.clientName || "Client Partner",
            clientRole: newStoryData.clientRole || "Client Representative",
            companyName: newStoryData.companyName || "Enterprise Client",
            rating: newStoryData.rating || 5,
            quote: newStoryData.quote || "DAV Labs Solutions delivered exceptional technical quality and modern design.",
            projectTitle: title,
            projectCategory: newStoryData.projectCategory || "Digital Architecture",
            reelUrl: reelUrl,
            reelId: reelId,
            liveWebsiteUrl: newStoryData.liveWebsiteUrl || "https://www.salasarpolysacks.com/",
            logoUrl: newStoryData.logoUrl || "",
            bgImageUrl: newStoryData.bgImageUrl || "",
            productsList: newStoryData.productsList || [],
            techStack: newStoryData.techStack || ["Next.js", "TypeScript", "Tailwind CSS"],
            overview: newStoryData.overview || "High-performance digital platform engineered by DAV Labs Solutions.",
            challenges: newStoryData.challenges || ["Modernizing enterprise web presence."],
            solutions: newStoryData.solutions || ["Built custom Next.js application."],
            createdAt: new Date().toISOString().split("T")[0],
            isFeatured: newStoryData.isFeatured ?? true
        };

        const updated = [newStory, ...current];
        saveStoredStories(updated);
        setActiveStoryId(newStory.id);
        return newStory;
    };

    const updateStory = (id: string, updatedFields: Partial<ClientStory>): boolean => {
        const current = getStoredStories();
        const index = current.findIndex((s) => s.id === id);
        if (index === -1) return false;

        if (updatedFields.reelUrl) {
            updatedFields.reelId = extractReelId(updatedFields.reelUrl);
        }

        const updated = [...current];
        updated[index] = { ...updated[index], ...updatedFields };

        saveStoredStories(updated);
        return true;
    };

    const deleteStory = (id: string): boolean => {
        const current = getStoredStories();
        const updated = current.filter((s) => s.id !== id);
        if (updated.length === current.length) return false;

        saveStoredStories(updated);
        if (activeStoryId === id && updated.length > 0) {
            setActiveStoryId(updated[0].id);
        }
        return true;
    };

    return {
        stories,
        activeStory,
        activeStoryId,
        setActiveStoryId,
        isLoaded,
        getStoryBySlug,
        addStory,
        updateStory,
        deleteStory
    };
}

"use client";

import React from "react";
import { ClientReelReview } from "@/components/stories/ClientReelReview";
import { useStoriesStore } from "@/lib/stories-store";
import { Film } from "lucide-react";

export default function TestimonialsPage() {
    const { stories, activeStory, setActiveStoryId } = useStoriesStore();

    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            
            {/* If multiple client stories exist, render sleek story pills selector (without Admin UI) */}
            {stories.length > 1 && (
                <div className="container mx-auto px-4 md:px-6 mb-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-center">
                        {stories.map((story) => {
                            const isActive = story.id === activeStory.id;
                            return (
                                <button
                                    key={story.id}
                                    onClick={() => setActiveStoryId(story.id)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 ${
                                        isActive
                                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                            : "bg-muted/40 border border-border hover:bg-muted text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    <span className={`w-2 h-2 rounded-full ${isActive ? "bg-white animate-pulse" : "bg-primary/40"}`} />
                                    {story.clientName}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Active Selected Client Reel Review */}
            {activeStory && (
                <ClientReelReview
                    reelUrl={activeStory.reelUrl}
                    reelId={activeStory.reelId}
                    clientName={activeStory.clientName}
                    clientRole={activeStory.clientRole}
                    companyName={activeStory.companyName}
                    projectTitle={activeStory.projectTitle}
                    projectCategory={activeStory.projectCategory}
                    liveWebsiteUrl={activeStory.liveWebsiteUrl}
                    quote={activeStory.quote}
                    logoUrl={activeStory.logoUrl}
                    aboutLink={`/work/${activeStory.slug}`}
                />
            )}
        </div>
    );
}

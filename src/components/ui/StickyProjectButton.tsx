"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StickyProjectButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
            <Link href="/contact">
                <Button className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/85 font-bold text-xs md:text-sm px-6 py-4 uppercase tracking-widest transition-colors duration-300 shadow-xl border border-primary/20 backdrop-blur-md">
                    Start A Project
                </Button>
            </Link>
        </div>
    );
}

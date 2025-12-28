"use client";
import React from "react";
import { IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export function Footer() {
  const instagramUrl = "https://www.instagram.com/";
  const linkedinUrl = "https://linkedin.com/yourpage";

  return (
    <footer className="w-full border-t border-border bg-background py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground text-sm">
          © 2025 DAV Labs. All rights reserved.
        </div>
        <div className="flex gap-4">
          {/* Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-xl
              bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500
              shadow-md filter grayscale hover:grayscale-0 hover:scale-110 transition-all"
          >
            <IconBrandInstagram className="text-white w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-xl
              bg-[#0A66C2] shadow-md filter grayscale hover:grayscale-0 hover:scale-110 transition-all"
          >
            <IconBrandLinkedin className="text-white w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

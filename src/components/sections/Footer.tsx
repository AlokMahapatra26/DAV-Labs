import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground text-sm">
          © 2024 DAV Labs. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Twitter</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": { name: "Home" },
  "/services": { name: "Services" },
  "/agency": { name: "Agency" },
  "/tools": { name: "Tools" },
  "/testimonials": { name: "Stories" },
  "/blog": { name: "Blogs" },
  "/contact": { name: "Contact" },
};

export function MorphicNavbar() {
  const pathname = usePathname();

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="mx-auto max-w-fit px-4 py-2">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between overflow-hidden rounded-full border border-border bg-background/80 backdrop-blur-md p-1">
          {Object.entries(navItems).map(([path, { name }], index, array) => {
            const isActive = isActiveLink(path);

            return (
              <Link
                className={clsx(
                  "flex items-center justify-center px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground rounded-full shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full"
                )}
                href={path}
                key={path}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default MorphicNavbar;

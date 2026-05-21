"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type DropdownItem = {
  name: string;
  path: string;
};

type NavItem = {
  path: string;
  name: string;
  hasMegaMenu?: boolean;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
};

const navItems: NavItem[] = [
  { path: "/", name: "Home" },
  { path: "/services", name: "Our Solutions", hasMegaMenu: true },
  { 
    path: "/agency", 
    name: "Agency", 
    hasDropdown: true,
    dropdownItems: [
      { name: "About Us", path: "/about" },
      { name: "Contact Us", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" }
    ]
  },
  { path: "/tools", name: "Tools" },
  { path: "/testimonials", name: "Stories" },
  { path: "/blog", name: "Blogs" },
  { path: "/contact", name: "Contact" },
];

const megaMenuItems = [
  {
    title: "Web & App Solutions",
    links: [
      "Website Designing",
      "Website Development",
      "Page Speed Optimization",
      "E-Commerce",
      "UI/UX Design",
      "Website Maintenance",
      "Mobile App Development",
      "Optical-ERP Solution",
      "Custom Software",
    ]
  },
  {
    title: "Digital Marketing",
    links: [
      "Search Engine Optimization",
      "Search Engine Marketing",
      "Social Media Optimization",
      "Social Media Handling",
      "Corporate Branding (CRM)",
      "Social Media Marketing",
      "Instagram Marketing",
      "Facebook Ads",
      "LinkedIn Ads",
    ]
  },
  {
    title: "Graphics Solutions",
    links: [
      "Brochure/Catalog Design",
      "Logo Designing",
      "Product Catalog Design",
      "Banner Designing",
      "Visiting/Business Card",
      "Corporate Video Shooting",
      "Content Writing",
      "Google Ads/ PPC",
    ]
  },
  {
    title: "Servers & Others",
    links: [
      "Web Hosting",
      "Domain Registration & Renewal",
      "SSL Certificate",
      "Professional Email Solution",
      "E-Mail Secure Service",
      "Trademark",
    ]
  }
];

export function MorphicNavbar() {
  const pathname = usePathname();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="mx-auto max-w-fit px-4 py-2 relative z-[60]">
      <div className="flex items-center justify-center">
        {/* Removed overflow-hidden so the dropdown can overflow out of the navbar */}
        <div className="flex items-center justify-between rounded-full border border-border bg-background/80 backdrop-blur-md p-1">
          {navItems.map((item) => {
            const isActive = isActiveLink(item.path);

            return (
              <div 
                key={item.path}
                className="relative group"
                onMouseEnter={() => (item.hasMegaMenu || item.hasDropdown) && setHoveredMenu(item.path)}
                onMouseLeave={() => (item.hasMegaMenu || item.hasDropdown) && setHoveredMenu(null)}
              >
                <Link
                  className={clsx(
                    "flex items-center gap-1.5 justify-center px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300",
                    isActive
                      ? "bg-primary text-primary-foreground rounded-full shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-full"
                  )}
                  href={item.path}
                >
                  {item.name}
                  {(item.hasMegaMenu || item.hasDropdown) && <ChevronDown size={14} className="opacity-60" />}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasMegaMenu && (
                  <div 
                    className={clsx(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[95vw] md:w-[900px] transition-all duration-300 origin-top",
                      hoveredMenu === item.path 
                        ? "opacity-100 visible translate-y-0" 
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="bg-background border border-border shadow-2xl rounded-2xl p-8 cursor-default">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {megaMenuItems.map((column, idx) => (
                          <div key={idx} className="flex flex-col">
                            <h3 className="text-primary font-bold uppercase tracking-wider mb-5 border-b border-border/50 pb-2 text-sm">
                              {column.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                              {column.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <Link 
                                    href={`/services#${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group/link"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-primary/30 group-hover/link:bg-primary group-hover/link:scale-150 transition-all"></span>
                                    {link}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Standard Dropdown */}
                {item.hasDropdown && item.dropdownItems && (
                  <div 
                    className={clsx(
                      "absolute top-full left-1/2 -translate-x-1/2 pt-6 w-48 transition-all duration-300 origin-top",
                      hoveredMenu === item.path 
                        ? "opacity-100 visible translate-y-0" 
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    )}
                  >
                    <div className="bg-background border border-border shadow-xl rounded-xl p-3 flex flex-col gap-1">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link 
                          key={idx}
                          href={dropdownItem.path}
                          className="px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors flex items-center"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default MorphicNavbar;

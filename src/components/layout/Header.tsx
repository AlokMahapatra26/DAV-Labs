"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface NavSubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavSubItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Social Media Marketing", href: "/services#social-media" },
      { label: "Website Development", href: "/services#web-development" },
      { label: "Search Engine Optimization", href: "/services#seo" },
      { label: "Personal Branding", href: "/services#personal-branding" },
      { label: "Web & App Solutions", href: "/services" },
      { label: "Google Ads & Performance", href: "/services" },
    ],
  },
  {
    label: "Portfolio",
    href: "/testimonials",
    children: [
      { label: "Testimonials", href: "/testimonials" },
      { label: "Case Studies", href: "/services" },
      { label: "Client Stories", href: "/agency" },
    ],
  },
  { label: "Clients", href: "/testimonials" },
  {
    label: "Career",
    href: "/agency",
    children: [
      { label: "Life at DAV Labs", href: "/agency" },
      { label: "Open Positions", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (pathname === "/") {
        const hero = document.getElementById("hero-section");
        if (hero) {
          const rect = hero.getBoundingClientRect();
          // Exactly when hero section bottom passes under navbar (height ~80px)
          setIsScrolled(rect.bottom <= 80);
        } else {
          setIsScrolled(window.scrollY > 200);
        }
      } else {
        setIsScrolled(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isActive = (item: NavItem) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(item.href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "!bg-white !text-black shadow-[0_4px_25px_rgba(0,0,0,0.08)] border-b border-gray-100"
            : "bg-transparent border-b border-transparent shadow-none"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Left Section: Logo with Smooth Crossfade */}
          <div className="flex items-center gap-8 xl:gap-12">
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative h-10 md:h-12 w-32 md:w-36 flex items-center">
                <img
                  src="/davlabs-logo-dark.png"
                  alt="DAV Labs Logo"
                  className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-300 ${
                    isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                />
                <img
                  src="/davlabs-logo-light.png"
                  alt="DAV Labs Logo"
                  className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-300 ${
                    isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
              {navItems.map((item) => {
                const active = isActive(item);
                const hasChildren = Boolean(item.children && item.children.length > 0);

                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => hasChildren && setActiveDropdown(item.label)}
                    onMouseLeave={() => hasChildren && setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 select-none ${
                        isScrolled
                          ? active
                            ? "!text-[#8B5CF6] font-bold"
                            : "!text-black hover:!text-[#8B5CF6]"
                          : active
                          ? "!text-white font-bold"
                          : "!text-white/80 hover:!text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 stroke-[2.2] transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          } ${
                            isScrolled
                              ? "!text-black group-hover:!text-[#8B5CF6]"
                              : "!text-white/70 group-hover:!text-white"
                          }`}
                        />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    {hasChildren && (
                      <div
                        className={`absolute top-full left-0 pt-3 transition-all duration-200 origin-top z-50 ${
                          activeDropdown === item.label
                            ? "opacity-100 visible translate-y-0 pointer-events-auto"
                            : "opacity-0 invisible -translate-y-1 pointer-events-none"
                        }`}
                      >
                        <div
                          className={`backdrop-blur-xl rounded-2xl p-2 min-w-[240px] border transition-colors duration-200 ${
                            isScrolled
                              ? "!bg-white border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.1)]"
                              : "bg-[#121318]/95 border-white/10 shadow-2xl"
                          }`}
                        >
                          {item.children!.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group/item ${
                                isScrolled
                                  ? "!text-zinc-800 hover:!bg-zinc-100 hover:!text-[#8B5CF6]"
                                  : "!text-zinc-300 hover:!bg-white/10 hover:!text-white"
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span>{child.label}</span>
                              <ArrowRight
                                className={`w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all ${
                                  isScrolled ? "text-[#8B5CF6]" : "text-white"
                                }`}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Section: Clean CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center rounded-full font-semibold text-sm px-6 py-2.5 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap ${
                isScrolled
                  ? "!bg-black !text-white hover:!bg-zinc-800"
                  : "!bg-white !text-black hover:!bg-zinc-100"
              }`}
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className={`inline-flex items-center justify-center rounded-full font-semibold text-xs px-3.5 py-1.5 shadow-sm transition-all duration-200 ${
                isScrolled
                  ? "!bg-black !text-white hover:!bg-zinc-800"
                  : "!bg-white !text-black hover:!bg-zinc-100"
              }`}
            >
              Contact
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors duration-200 ${
                isScrolled ? "!text-black hover:!text-zinc-700" : "!text-white hover:!text-zinc-200"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex justify-end"
                onClick={() => setMobileMenuOpen(false)}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 280 }}
                  className="w-full max-w-[340px] h-full bg-white dark:bg-[#0f1015] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Top Bar inside Drawer */}
                  <div>
                    <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-zinc-800">
                      <img
                        src="/davlabs-logo-light.png"
                        alt="DAV Labs Logo"
                        className="h-8 md:h-9 w-auto object-contain block dark:hidden [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.1))]"
                      />
                      <img
                        src="/davlabs-logo-dark.png"
                        alt="DAV Labs Logo"
                        className="h-8 md:h-9 w-auto object-contain hidden dark:block"
                      />
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1.5 rounded-lg text-gray-500 hover:text-black dark:hover:text-white"
                      >
                        <X size={22} />
                      </button>
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-col gap-1 py-6">
                      {navItems.map((item) => {
                        const hasChildren = Boolean(item.children && item.children.length > 0);
                        const isExpanded = mobileExpanded === item.label;
                        const active = isActive(item);

                        return (
                          <div key={item.label} className="border-b border-gray-50 dark:border-zinc-900/60 last:border-none">
                            {hasChildren ? (
                              <div>
                                <button
                                  onClick={() => setMobileExpanded(isExpanded ? null : item.label)}
                                  className={`w-full flex items-center justify-between py-3 text-[16px] font-medium transition-colors ${
                                    active ? "text-[#007799] font-semibold" : "text-[#103A40] dark:text-zinc-200"
                                  }`}
                                >
                                  <span>{item.label}</span>
                                  <ChevronDown
                                    className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180 text-[#FF6A00]" : ""}`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      className="overflow-hidden pl-4 pb-3 flex flex-col gap-2"
                                    >
                                      {item.children!.map((child) => (
                                        <Link
                                          key={child.label}
                                          href={child.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="text-sm py-1.5 text-gray-600 dark:text-zinc-400 hover:text-[#FF6A00]"
                                        >
                                          {child.label}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-3 text-[16px] font-medium transition-colors ${
                                  active ? "text-[#007799] font-semibold" : "text-[#103A40] dark:text-zinc-200 hover:text-[#007799]"
                                }`}
                              >
                                {item.label}
                              </Link>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Action inside Drawer */}
                  <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-sm py-3 transition-colors shadow-md"
                    >
                      Book a Call
                    </Link>
                    <p className="text-center text-xs text-gray-400 dark:text-zinc-500 mt-4">
                      DAV Labs
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

export default Header;

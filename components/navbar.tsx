"use client";

import React, { useEffect, useState } from "react";
import { links } from "./navbar-links";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileMenu from "./navbar-mobile"; // Import the MobileMenu component
import { Bars3Icon } from "@heroicons/react/24/outline"; // Ensure @heroicons/react is installed

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={cn(
        "z-50 fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out flex justify-between items-center text-white px-8 h-[80px] bg-pink-400",
        showNavbar ? "transform translate-y-0" : "transform -translate-y-full"
      )}
    >
      <h1 className="text-xl font-bold">Logo</h1>
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="focus:outline-none"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
      <div className="hidden md:flex md:space-x-8">
        <ul className="flex items-center gap-x-8">
          {links.map((link) => (
            <li key={link.url} className="font-medium">
              <Link
                className="hover:bg-pink-500/30 hover:text-white hover:rounded-lg p-4"
                href={link.url}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
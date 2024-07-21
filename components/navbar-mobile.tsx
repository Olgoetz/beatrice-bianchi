"use client";

import React from "react";
import Link from "next/link";
import { links } from "./navbar-links";
import { cn } from "@/lib/utils";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Ensure you have @heroicons/react installed
import { MailIcon, Phone } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className="absolute inset-0 max-w-xs mx-auto flex flex-col md:flex-row justify-center gap-2 md:gap-8 items-center py-10 text-white ">
        <div className="flex items-center gap-4">
          <MailIcon size={20} />
          hello@xyc.it
        </div>
        <div className="flex items-center gap-4">
          <Phone size={20} />
          123456789
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-pink-400 flex flex-col items-center justify-center space-y-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden min-h-screen`}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute top-7 right-7"
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>

        <ul className="flex flex-col items-center justify-center h-full text-2xl  space-y-20">
          {links.map((link) => (
            <li key={link.url} className="font-medium">
              <Link
                className="hover:bg-pink-500/30 hover:text-white hover:rounded-lg p-4"
                href={link.url}
                onClick={onClose}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;

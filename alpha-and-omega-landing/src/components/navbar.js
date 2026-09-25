"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Apps", href: "/apps" },
  { label: "Games", href: "/games" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-white">AOG</h1>
            </div>

            <div className="hidden items-center space-x-4 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white transition-colors duration-300 hover:text-blue-500"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white transition hover:border-blue-400 hover:text-blue-400 md:hidden"
            >
              <span className="sr-only">Open menu</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    isOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    isOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {isOpen && (
            <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white transition-colors duration-300 hover:text-blue-500"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
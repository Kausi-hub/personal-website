'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Programs', href: '/programs' },
  { label: 'Innovation', href: '/innovation' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />

            <div className="hidden sm:block">
              <div className="text-lg font-bold leading-none">
                Kausalya Singuru
              </div>

              <div className="text-xs text-muted-foreground">
                Engineering Leadership Portfolio
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle Navigation"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-md p-2 transition-colors hover:bg-muted md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
    <AnimatePresence>
    {isOpen && (
        <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
            opacity: 1,
            height: 'auto',
        }}
        exit={{
            opacity: 0,
            height: 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden border-t border-border bg-card md:hidden"
        >
        <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
                {item.label}
            </Link>
            ))}
        </div>
        </motion.div>
    )}
    </AnimatePresence>
    </nav>
  );
}
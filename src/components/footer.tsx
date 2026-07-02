'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent" />
              <div>
                <h3 className="text-lg font-bold">Kausalya Singuru</h3>
                <p className="text-xs text-muted-foreground">
                  Engineering Leadership Portfolio
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Engineering leader delivering electrified propulsion, systems
              engineering, controls, integration, and verification &amp;
              validation solutions from concept through production.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Explore</h3>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/leadership"
                  className="transition-colors hover:text-foreground"
                >
                  Leadership Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/expertise"
                  className="transition-colors hover:text-foreground"
                >
                  Functional Expertise
                </Link>
              </li>

              <li>
                <Link
                  href="/programs"
                  className="transition-colors hover:text-foreground"
                >
                  Programs &amp; Case Studies
                </Link>
              </li>

              <li>
                <Link
                  href="/timeline"
                  className="transition-colors hover:text-foreground"
                >
                  Career Timeline
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold">Connect</h3>

            <p className="text-sm text-muted-foreground">
              Connect with me to discuss leadership opportunities, systems
              engineering, controls, integration, verification &amp; validation,
              and electrified propulsion development.
            </p>

            <div className="flex gap-4">
              <a
                         aria-label="Contact"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Kausalya Singuru. All rights reserved.
          </p>

          <p className="mt-2">
            Electrified Propulsion • Systems Engineering • Controls • System
            Integration • Verification &amp; Validation • Engineering Leadership
          </p>
        </div>
      </div>
    </footer>
  );
}
import { Mail, MapPin, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
export default function ContactPage() {
  return (
    <div className="section-container section-padding">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-5xl font-bold">
          Let&apos;s Connect
        </h1>

        <p className="mb-10 text-lg text-muted-foreground">
          Interested in engineering leadership, systems engineering,
          electrified propulsion, controls, integration, or validation?
          I&apos;d be happy to connect.
        </p>

        <div className="space-y-6">
          <div className="glass-card flex items-center gap-4 p-6">
            <Mail className="h-6 w-6 text-primary" />
            <span>kausalyap@gmail.com</span>
          </div>

          <div className="glass-card flex items-center gap-4 p-6">
            <Linkedin className="h-6 w-6 text-primary" />
            <span>linkedin.com/in/kausalyap</span>
          </div>

          <div className="glass-card flex items-center gap-4 p-6">
            <Globe className="h-6 w-6 text-primary" />
            <a
                href="https://kausi-hub.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline"
            >
                kausi-hub.github.io
            </a>
          </div>

          <div className="glass-card flex items-center gap-4 p-6">
            <MapPin className="h-6 w-6 text-primary" />
            <span>Detroit, Michigan</span>
          </div>
        </div>
      </div>
    </div>
  );
}
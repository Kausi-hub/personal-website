'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Users,
  Cog,
  Zap,
  Lightbulb,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const highlights = [
  {
    icon: <Users className="h-6 w-6" />,
    value: '20+',
    label: 'Years Experience',
  },
  {
    icon: <Cog className="h-6 w-6" />,
    value: '40+',
    label: 'Engineers Led',
  },
  {
    icon: <Award className="h-6 w-6" />,
    value: '20+',
    label: 'Patents',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    value: 'Multiple',
    label: 'Vehicle Launches',
  },
];

const expertise = [
  'Systems Engineering',
  'Controls & Calibration',
  'Embedded Software Development',
  'Diagnostics Development & Verification',
  'Mechatronic System Integration',
  'Verification & Validation',
  'Electrified Propulsion',
  'Autonomous Systems',
  'Engineering Leadership',
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="section-container section-padding">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mb-4 inline-flex rounded-full border px-4 py-2 text-sm text-muted-foreground">
            Engineering Leadership Portfolio
          </div>

          <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-6xl lg:text-5xl">
            Kausalya Singuru
          </h1>

          <h2 className="gradient-heading mb-6 text-1xl font-bold sm:text-4xl lg:text-3xl">
            Delivering Electrified Vehicle Systems From Concept to Launch
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Engineering leader with expertise in Systems Engineering,
            Electrified Propulsion, Autonomous Software, Controls Development, System
            Integration, Calibration, Verification & Validation, and
            Organizational Leadership.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/leadership">Leadership Portfolio</Link>
            </Button>

            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="section-container py-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="glass-card p-4 text-center"
            >
              <div className="mb-4 flex justify-center text-primary">
                {item.icon}
              </div>

              <div className="text-3xl font-bold">
                {item.value}
              </div>

              <div className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="section-container section-padding">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Core Expertise
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-muted-foreground">
            Driving innovation across vehicle architecture,
            software-defined systems, electrified propulsion,
            controls, validation, and engineering operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((area) => (
            <div
              key={area}
              className="glass-card p-6 text-center"
            >
              <h3 className="font-semibold">{area}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="section-container section-padding">
        <div className="glass-card p-10">
          <div className="mb-6 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              Engineering Leadership
            </h2>
          </div>

          <p className="mb-6 text-muted-foreground">
            Built and led multidisciplinary engineering teams across
            Systems Engineering, Controls, Software, Integration,
            Calibration, and Validation organizations.
          </p>

          <Button asChild>
            <Link href="/leadership">
              Leadership Experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Programs */}
      <section className="section-container section-padding">
        <div className="glass-card p-10">
          <div className="mb-6 flex items-center gap-3">
            <Cog className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              Featured Programs
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">GM RWD Platform</h3>
              <p className="text-sm text-muted-foreground">
                Systems Integration & Calibration Leadership
              </p>
            </div>

            <div>
              <h3 className="font-semibold">EDU Platform</h3>
              <p className="text-sm text-muted-foreground">
                Electrified Propulsion Integration
              </p>
            </div>

            <div>
              <h3 className="font-semibold">AMG eLSD</h3>
              <p className="text-sm text-muted-foreground">
                Controls and Vehicle Validation
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Autonomous Motion Control
              </h3>
              <p className="text-sm text-muted-foreground">
                Vehicle Dynamics and Controls Integration
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button asChild>
              <Link href="/programs">
                View Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
       <section className="section-container section-padding">
        <div className="glass-card p-10">
          <div className="mb-6 flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">
              Innovation & Patents
            </h2>
          </div>

          <p className="mb-6 text-muted-foreground">
            Inventor on multiple patents spanning autonomous driving,
            motion controls, wireless charging, vehicle dynamics,
            propulsion systems, and software architecture.
          </p>

          <Button asChild>
            <Link href="/innovation">
              View Innovation Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        </section>
      </section>

      {/* Contact CTA */}
      <section className="section-container pb-24">
        <div className="glass-card p-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Let&apos;s Connect
          </h2>

          <p className="mb-8 text-muted-foreground">
            Interested in discussing engineering leadership,
            systems engineering, electrified propulsion, mechatronics development,
            controls, validation, or advanced vehicle programs?
          </p>

        <div className="mb-8">
        <a
            href="https://kausi-hub.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
        >
            kausi-hub.github.io
        </a>
        </div>
        
        <Button asChild size="lg">
        <Link href="/contact">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        </Button>

        </div>
      </section>
    </div>
  );
}
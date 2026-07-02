import { Award, GraduationCap, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="section-container section-padding">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-5xl font-bold">About Me</h1>

        <p className="mb-8 text-lg text-muted-foreground">
          Engineering leader with 20+ years of experience delivering
          Systems Engineering, Controls, System Integration, Calibration, and Verification &
          Validation solutions in the Propulsion & Autonomous domains.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card p-6 text-center">
            <Users className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h3 className="font-semibold">20+ Years</h3>
            <p className="text-sm text-muted-foreground">
              Automotive Engineering Experience
            </p>
          </div>

          <div className="glass-card p-6 text-center">
            <Award className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h3 className="font-semibold">20+ Patents</h3>
            <p className="text-sm text-muted-foreground">
              Innovation & Technical Leadership
            </p>
          </div>

          <div className="glass-card p-6 text-center">
            <GraduationCap className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h3 className="font-semibold">MBA + MS</h3>
            <p className="text-sm text-muted-foreground">
              Engineering & Business Education
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-4 text-3xl font-bold">
            Professional Background
          </h2>

          <p className="mb-4 text-muted-foreground">
            My career spans vehicle controls, autonomous systems,
            electrified propulsion, systems engineering,
            software integration, calibration, and validation.
          </p>

          <p className="text-muted-foreground">
            I have led multidisciplinary engineering teams,
            delivered production vehicle programs, and developed
            innovative technologies in vehicle dynamics,
            autonomous driving, wireless charging, and motion control.
          </p>
        </div>
      </div>
    </div>
  );
}
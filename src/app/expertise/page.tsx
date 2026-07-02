import {
  Cpu,
  Settings,
  Zap,
  TestTube,
  GitBranch,
  Users,
} from 'lucide-react';

const expertiseAreas = [
  {
    title: 'Systems Engineering',
    icon: Cpu,
    description:
      'Requirements development, system architecture, MBSE, feature decomposition, traceability, verification planning, and cross-functional coordination.',
  },
  {
    title: 'Electrified Propulsion',
    icon: Zap,
    description:
      'Electric Drive Units (EDU), AWD, RWD, eLSD, propulsion controls, powertrain integration, system validation, and launch readiness.',
  },
  {
    title: 'Controls & Calibration',
    icon: Settings,
    description:
      'Control algorithm development, calibration strategy, drivability optimization, motion control, vehicle dynamics, and performance tuning.',
  },
  {
    title: 'System Integration',
    icon: GitBranch,
    description:
      'Mechatronics (Hardware&Software) integration, subsystem coordination, issue resolution, release management, and production deployment.',
  },
  {
    title: 'Verification & Validation',
    icon: TestTube,
    description:
      'MIL, SIL, HIL, vehicle testing, validation planning, defect management, requirements verification, and launch validation.',
  },
  {
    title: 'Engineering Leadership',
    icon: Users,
    description:
      'Technical leadership, organizational development, strategy, budgeting, talent development, and execution of complex vehicle programs.',
  },
];

export default function ExpertisePage() {
  return (
    <div className="section-container section-padding">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-5xl font-bold">
          Functional Expertise
        </h1>

        <p className="mb-12 max-w-4xl text-lg text-muted-foreground">
          More than two decades of experience delivering advanced
          vehicle technologies across systems engineering,
          electrified propulsion, controls, mechatronics integration,
          verification & validation, software development,
          autonomous systems, and engineering leadership.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {expertiseAreas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="glass-card p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Icon className="h-8 w-8 text-primary" />

                  <h2 className="text-2xl font-bold">
                    {area.title}
                  </h2>
                </div>

                <p className="text-muted-foreground">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 glass-card p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Core Competencies
          </h2>
            <div className="mt-12 glass-card p-8">
            <h2 className="mb-6 text-3xl font-bold">
                Tools & Technical Skills
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                <div>
                <h3 className="mb-3 text-xl font-semibold">
                    Engineering & Development
                </h3>

                <ul className="space-y-2 text-muted-foreground">
                    <li>• Model-Basedt (MBD) & Embedded C</li>
                    <li>• ASPICE Process Maturity, ISO 26262 Functional Safety</li>
                    <li>• Systems Engineering & MBSE</li>
                    <li>• Test-Driven Development</li>
                </ul>
                </div>

                <div>
                <h3 className="mb-3 text-xl font-semibold">
                    Verification & Validation
                </h3>

                <ul className="space-y-2 text-muted-foreground">
                    <li>• Model, SOftware, & Hardware-in-the-Loop (MIL, SIL, HIL)</li>
                    <li>• Hardware-in-the-Loop (HIL)</li>
                    <li>• Closed-Course & On-Road Vehicle Testing</li>
                    <li>• Release Readiness & Quality Gates</li>
                </ul>
                </div>

                <div>
                <h3 className="mb-3 text-xl font-semibold">
                    Data Analysis & Reporting
                </h3>

                <ul className="space-y-2 text-muted-foreground">
                    <li>• Data Analytics</li>
                    <li>• KPI & Metrics Development</li>
                    <li>• Executive Readiness Reviews</li>
                    <li>• Release Decision Reporting</li>
                    <li>• Performance Trending</li>
                    <li>• Validation Dashboards</li>
                </ul>
                </div>

                <div>
                <h3 className="mb-3 text-xl font-semibold">
                    Engineering Tools
                </h3>

                <ul className="space-y-2 text-muted-foreground">
                    <li>• MATLAB & Simulink, dSPACE, Carsim</li>
                    <li>• Python</li>
                    <li>• Vector CANoe, CAPL</li>
                    <li>• Vector CANape, AVL CRETA</li>
                    <li>• Vector vTESTstudio</li>
                    <li>• CAN / UDS Diagnostics, Vector DIVA</li>
                </ul>
                </div>
            </div>
            </div>
        </div>

        <div className="mt-12 glass-card p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Areas of Industry Impact
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 font-semibold">
                Vehicle Systems
              </h3>

              <ul className="space-y-2 text-muted-foreground">
                <li>• Electrified Driveline Systems</li>
                <li>• Powertrain Controls</li>
                <li>• Motion Control Systems</li>
                <li>• Vehicle Dynamics</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">
                Product Development
              </h3>

              <ul className="space-y-2 text-muted-foreground">
                <li>• Architecture Definition</li>
                <li>• Requirements Engineering</li>
                <li>• System Integration</li>
                <li>• Validation Planning</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-2 font-semibold">
                Leadership
              </h3>

              <ul className="space-y-2 text-muted-foreground">
                <li>• Team Development</li>
                <li>• Technical Strategy</li>
                <li>• Cross-Functional Leadership</li>
                <li>• Organizational Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default function ProgramsPage() {
  const programs = [
    {
      title: 'Smartbar, PTU, Low Voltage actuator systems - Scout Motors, STLA',
      description:
        'Controls implementation, integration, and validation - in Tier-1 capacity'
    },
    {
      title: 'Rear/All Wheel Drive System - GM Chevy Equinox & 9B',
      description:
        'Systems Integration and Calibration leadership supporting production deployment - in Tier-1 capacity'
    },
    {
      title: 'Electric Drive Unit & eBeam - Platform',
      description:
        'Electrified propulsion integration and controls development - Platform Tier 1'
    },
    {
      title: 'eLimited Slip Differential - AMG',
      description:
        'Performance controls, integration, and validation - in Tier-1 capacity'
    },
    {
      title: 'General Motors Autonomous Motion Control System',
      description:
        'Vehicle dynamics & controls integration for autonomous systems - Development at OEM'
    },
    {
      title: 'General Motors Tranmission Control Module - SW validation',
      description:
        'TCM cybersecurity and diagnostics validation - in Tier-2 capacity'
    },
    {
      title: 'Maserati & Jeep Wagoneer Cluster Software',
      description:
        'Cluster Software development - Development at OEM'
    },
    {
      title: 'Memory Seat Module Software - Faurecia',
      description:
        'Development of memory seat module software and actuator controls - in consulting capacity'
    },
    {
      title: 'ADAS software development & scenario based testing - General Motors CAV programs',
      description:
        'Development of software rapid prototypes and scenario based testing of ADAS features - in consulting capacity'
    }
  ];

  return (
    <div className="section-container section-padding">
      <h1 className="mb-6 text-5xl font-bold">
        Programs & Case Studies
      </h1>

      <div className="grid gap-6">
        {programs.map((program) => (
          <div
            key={program.title}
            className="glass-card p-8"
          >
            <h2 className="mb-2 text-2xl font-bold">
              {program.title}
            </h2>

            <p className="text-muted-foreground">
              {program.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
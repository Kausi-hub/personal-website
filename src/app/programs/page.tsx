export default function ProgramsPage() {
  const programs = [
    {
      year: "Present",
      title: "Smartbar, PTU, Low Voltage actuator systems - Scout Motors, STLA",
      description:
        "Controls implementation, integration, and validation - in Tier-1 capacity"
    },
    {
      year: "2024",
      title: "Electric Drive Unit & eBeam - Platform",
      description:
        "Electrified propulsion integration and controls development - Platform Tier 1"
    },
    {
      year: "2022",
      title: "Rear/All Wheel Drive System - GM Chevy Equinox & 9B",
      description:
        "Systems Integration and Calibration leadership supporting production deployment - in Tier-1 capacity"
    },
    {
      year: "2021",
      title: "eLimited Slip Differential - AMG",
      description:
        "Performance controls, integration, and validation - in Tier-1 capacity"
    },
    {
      year: "2018",
      title: "General Motors Autonomous Motion Control System",
      description:
        "Vehicle dynamics & controls integration for autonomous systems - Development at OEM"
    },
    {
      year: "2016",
      title: "General Motors Transmission Control Module - SW Validation",
      description:
        "TCM cybersecurity and diagnostics validation - in Tier-2 capacity"
    },
    {
      year: "2015",
      title: "Maserati & Jeep Wagoneer Cluster Software",
      description:
        "Cluster Software development - Development at OEM"
    },
    {
      year: "2009",
      title: "Memory Seat Module Software - Faurecia",
      description:
        "Development of memory seat module software and actuator controls - in consulting capacity"
    },
    {
      year: "2005",
      title:
        "ADAS Software Development & Scenario Based Testing - General Motors CAV Programs",
      description:
        "Development of software rapid prototypes and scenario based testing of ADAS features - in consulting capacity"
    }
  ];

  return (
    <div className="section-container section-padding">
      <h1 className="mb-16 text-center text-5xl font-bold">
        Programs & Case Studies
      </h1>

      <div className="relative mx-auto max-w-7xl">
        <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 bg-border lg:block" />

        <div className="space-y-6">
          {programs.map((program, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={program.title}
                className="relative grid items-center lg:grid-cols-2"
              >
                <div
                  className={`${
                    isLeft
                      ? "lg:pr-6": "lg:pr-6 lg:opacity-0 lg:pointer-events-none"
                  }`}
                >
                  {isLeft && (
                    <div className="glass-card p-4">
                      <h2 className="mb-1 text-xl font-bold">
                        {program.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {program.description}
                      </p>
                    </div>
                  )}
                </div>

                <div
                  className={`${
                    !isLeft
                      ? "lg:pl-6": "lg:pl-6 lg:opacity-0 lg:pointer-events-none"
                  }`}
                >
                  {!isLeft && (
                    <div className="glass-card p-4">
                      <h2 className="mb-1 text-xl font-bold">
                        {program.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {program.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex lg:flex-col lg:items-center">
                  <div className="z-10 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-lg shadow-primary/40" />
                  <span className="mt-2 rounded-full bg-background px-2 py-0.5 text-sm font-semibold shadow-sm">
                    {program.year}
                  </span>
                </div>

                <div className="glass-card p-4 lg:hidden">
                  <div className="mb-3 text-sm font-semibold text-primary">
                    {program.year}
                  </div>
                  <h2 className="mb-1 text-xl font-bold">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {program.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
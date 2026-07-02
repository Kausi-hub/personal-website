export default function ProgramsPage() {
  const programs = [
    {
      title: 'Smartbar, PTU, Low Voltage actuator systems - Scout Motors, STLA',
      description:
        'Controls implementation, integration, and validation'
    },
    {
      title: 'GM RWD Platform',
      description:
        'Systems Integration and Calibration leadership supporting production deployment.'
    },
    {
      title: 'EDU Platform',
      description:
        'Electrified propulsion integration and controls development.'
    },
    {
      title: 'AMG eLSD',
      description:
        'Performance controls, integration, and validation.'
    },
    {
      title: 'Autonomous Motion Control - General Motors',
      description:
        'Vehicle dynamics & controls integration for autonomous systems.'
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
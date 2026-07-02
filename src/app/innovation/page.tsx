import { Award, Lightbulb, ExternalLink } from 'lucide-react';

const patents = [
  {
    title: 'Methods and Systems for Alignment of Wireless Charging Modules',
    patent: 'US 11351880',
    year: '2022',
  },
  {
    title: 'Method and Apparatus for Determining a Velocity of a Vehicle',
    patent: 'US 11332152',
    year: '2022',
  },
  {
    title: 'Lateral Control for Vehicle Wireless Charging Guidance',
    patent: 'US 16/566,122',
    year: '2022',
  },
  {
    title: 'Apparatus and Method that Determine Parking Feasibility',
    patent: 'US 11292454',
    year: '2022',
  },
  {
    title: 'Method and Apparatus for Selecting a Charging Station',
    patent: 'US 11203268',
    year: '2021',
  },
  {
    title: 'Method and Apparatus that Direct Lateral Control During Backward Motion',
    patent: 'US 10974758',
    year: '2021',
  },
  {
    title: 'Controlling a Vehicle Based on Trailer Position',
    patent: 'US 10926759',
    year: '2021',
  },
  {
    title: 'Moisture Detection and Regulation in a Vehicle Interior Component',
    patent: 'US 10668845',
    year: '2020',
  },
  {
    title: 'Method and Apparatus for Monitoring a Vehicle Brake',
    patent: 'US 10501064',
    year: '2019',
  },
  {
    title: 'System and Method to Detect and Avoid Spilled Cargo',
    patent: 'US 16/655,828',
    year: '2019',
  },
  {
    title: 'Novel Software Architecture of Integrated Motion Controls',
    patent: 'US 16/511,616',
    year: '2019',
  },
  {
    title: 'Method and Apparatus for Longitudinal Motion Control of a Vehicle',
    patent: 'US 16/270,073',
    year: '2019',
  },
  {
    title: 'System and Method for Autonomous Control of a Vehicle',
    patent: 'US 20200101979',
    year: '2018',
  },
  {
    title:
      'Method and System for Customizing a Driving Behavior of an Autonomous Vehicle',
    patent: 'US 20190344797',
    year: '2018',
  },
];

export default function InnovationPage() {
  return (
    <div className="section-container section-padding">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-5xl font-bold">
          Innovation &amp; Patents
        </h1>

        <p className="mb-8 max-w-4xl text-lg text-muted-foreground">
          Inventor on multiple patents spanning autonomous driving,
          motion controls, wireless charging, vehicle dynamics,
          propulsion systems, integrated software architectures,
          and advanced driver assistance technologies.
        </p>

        {/* ORCID */}
        <div className="glass-card mb-12 p-6">
          <h2 className="mb-3 text-2xl font-bold">
            Research &amp; Professional Profile
          </h2>

          <p className="mb-4 text-muted-foreground">
            View my ORCID profile for research activities,
            technical publications, and professional contributions.
          </p>

          <a
            href="https://orcid.org/0009-0008-9320-0939"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
          >
            ORCID: 0009-0008-9320-0939
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Summary Metrics */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="glass-card p-6 text-center">
            <Award className="mx-auto mb-4 h-10 w-10 text-primary" />
            <div className="text-3xl font-bold">14+</div>
            <div className="text-sm text-muted-foreground">
              Patents & Applications
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <Lightbulb className="mx-auto mb-4 h-10 w-10 text-primary" />
            <div className="text-3xl font-bold">20+</div>
            <div className="text-sm text-muted-foreground">
              Years of Innovation
            </div>
          </div>

          <div className="glass-card p-6 text-center">
            <Award className="mx-auto mb-4 h-10 w-10 text-primary" />
            <div className="text-3xl font-bold">
              Autonomous & Electrified
            </div>
            <div className="text-sm text-muted-foreground">
              Vehicle Technologies
            </div>
          </div>
        </div>

        {/* Patent Portfolio */}
        <h2 className="mb-6 text-3xl font-bold">
          Patent Portfolio
        </h2>

        <div className="grid gap-4">
          {patents.map((patent) => (
            <div
              key={patent.title}
              className="glass-card p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold">{patent.title}</h3>
                </div>

                <div className="flex gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    {patent.patent}
                  </span>

                  <span className="rounded-full bg-muted px-3 py-1 text-sm">
                    {patent.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Areas */}
        <div className="mt-12 glass-card p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Key Innovation Areas
          </h2>

          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-primary/10 px-4 py-2">
              Autonomous Driving
            </span>

            <span className="rounded-full bg-primary/10 px-4 py-2">
              Vehicle Controls
            </span>

            <span className="rounded-full bg-primary/10 px-4 py-2">
              Motion Control
            </span>

            <span className="rounded-full bg-primary/10 px-4 py-2">
              Wireless Charging
            </span>

            <span className="rounded-full bg-primary/10 px-4 py-2">
              Vehicle Dynamics
            </span>

            <span className="rounded-full bg-primary/10 px-4 py-2">
              Systems Engineering
            </span>

            <span className="rounded-full bg-primary/10 px-4 py-2">
              Software Architecture
            </span>

            <span className="rounded-full bg-primary/10 px-4 py-2">
              ADAS
            </span>

            <span className="rounded-full bg-primary/10 px-4 py-2">
              Electrified Propulsion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Users, Target, Briefcase } from 'lucide-react';

export default function LeadershipPage() {
  return (
    <div className="section-container section-padding">
      <h1 className="mb-6 text-5xl font-bold">
        Engineering Leadership
      </h1>

      <p className="mb-12 max-w-3xl text-lg text-muted-foreground">
        Building teams, developing technical talent, and delivering
        complex vehicle systems from concept through production.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="glass-card p-6">
          <Users className="mb-4 h-8 w-8 text-primary" />
          <h3 className="mb-2 font-semibold">
            Organization Growth
          </h3>
          <p className="text-muted-foreground">
            Scaled engineering organizations and developed
            high-performing technical leaders.
          </p>
        </div>

        <div className="glass-card p-6">
          <Target className="mb-4 h-8 w-8 text-primary" />
          <h3 className="mb-2 font-semibold">
            Strategic Planning
          </h3>
          <p className="text-muted-foreground">
            Established roadmaps, technical direction,
            and engineering processes.
          </p>
        </div>

        <div className="glass-card p-6">
          <Briefcase className="mb-4 h-8 w-8 text-primary" />
          <h3 className="mb-2 font-semibold">
            Program Delivery
          </h3>
          <p className="text-muted-foreground">
            Delivered global vehicle programs across systems,
            software, controls, and integration.
          </p>
        </div>
      </div>
    </div>
  );
}
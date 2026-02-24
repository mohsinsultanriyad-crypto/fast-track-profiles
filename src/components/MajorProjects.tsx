const clients = [
  "Saudi Aramco",
  "SABIC",
  "Ma'aden",
  "SEC (Saudi Electricity Company)",
  "Larsen & Toubro (L&T)",
  "Euroblast",
  "Petro Rabigh",
  "Jubail Industrial Projects",
  "Yanbu Industrial Projects",
];

const MajorProjects = () => {
  return (
    <section className="page-break section-padding bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-2">Major Projects & Clients</h2>
        <div className="accent-bar mb-4" />
        <p className="body-text mb-10 text-lg font-medium">
          Projects supporting leading industrial clients
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {clients.map((client) => (
            <div
              key={client}
              className="flex items-center gap-4 p-5 bg-card rounded-lg border border-border"
            >
              <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
              <span className="font-semibold text-foreground">{client}</span>
            </div>
          ))}
        </div>

        {/* Project highlights */}
        <div className="mt-12">
          <h3 className="heading-md mb-6">Project Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "CCTV & Access Control — Jubail Industrial City",
                scope: "Design, supply, installation & commissioning of 1,200+ IP cameras, access control for 45 gates, and central monitoring station.",
              },
              {
                title: "Fiber Optic Backbone — Aramco Facility",
                scope: "Installation of 180 km single-mode fiber optic backbone network with OTDR testing and full documentation.",
              },
              {
                title: "Integrated Security System — SABIC Plant",
                scope: "Turnkey security solution including perimeter detection, fire alarm, PA/VA system, and 24/7 monitoring center.",
              },
              {
                title: "Network Infrastructure — SEC Substation",
                scope: "Complete structured cabling, industrial Ethernet switches, and wireless coverage across 12 substations.",
              },
            ].map((project) => (
              <div key={project.title} className="card-corporate">
                <h4 className="font-bold text-foreground mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground">{project.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorProjects;

import { CheckCircle, Award, Settings, Users } from "lucide-react";
import serverRackImg from "@/assets/server-rack.jpg";
import testingImg from "@/assets/testing-equipment.jpg";

const capabilities = [
  {
    icon: Settings,
    title: "Engineering & Design",
    items: ["System architecture & design", "BOQ preparation & estimation", "As-built documentation", "AutoCAD & Revit BIM design"],
  },
  {
    icon: CheckCircle,
    title: "Installation & Commissioning",
    items: ["Turnkey project execution", "Cable installation & termination", "System integration & testing", "SAT/FAT procedures"],
  },
  {
    icon: Award,
    title: "Standards & Compliance",
    items: ["ISO 9001 Quality Management", "SASO / Saudi building codes", "NFPA & IEC standards", "Aramco engineering standards"],
  },
  {
    icon: Users,
    title: "Support & Maintenance",
    items: ["24/7 technical support", "Preventive maintenance programs", "Spare parts management", "Remote monitoring & diagnostics"],
  },
];

const TechnicalCapabilities = () => {
  return (
    <section className="page-break section-padding bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-2">Technical Capabilities</h2>
        <div className="accent-bar mb-10" />

        {/* Image strip */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="rounded-lg overflow-hidden">
            <img src={serverRackImg} alt="Server rack with network equipment" className="w-full h-48 object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <img src={testingImg} alt="Engineer using testing equipment on site" className="w-full h-48 object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div key={cap.title} className="card-corporate">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <cap.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{cap.title}</h3>
              </div>
              <ul className="space-y-2">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;

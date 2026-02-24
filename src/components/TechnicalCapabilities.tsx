import { CheckCircle, Award, Settings, Users } from "lucide-react";
import serverRackImg from "@/assets/server-rack.jpg";
import testingImg from "@/assets/testing-equipment.jpg";
import fiberImg from "@/assets/fiber-splicing.jpg";
import networkImg from "@/assets/network-infrastructure.jpg";

const capabilities = [
  {
    icon: Settings,
    title: "Engineering & Design",
    image: networkImg,
    imageAlt: "Technician with fiber optic cables",
    items: ["System architecture & design", "BOQ preparation & estimation", "As-built documentation", "AutoCAD & Revit BIM design"],
  },
  {
    icon: CheckCircle,
    title: "Installation & Commissioning",
    image: fiberImg,
    imageAlt: "Fiber optic cable splicing",
    items: ["Turnkey project execution", "Cable installation & termination", "System integration & testing", "SAT/FAT procedures"],
  },
  {
    icon: Award,
    title: "Standards & Compliance",
    image: serverRackImg,
    imageAlt: "Server rack with network equipment",
    items: ["ISO 9001 Quality Management", "SASO / Saudi building codes", "NFPA & IEC standards", "Aramco engineering standards"],
  },
  {
    icon: Users,
    title: "Support & Maintenance",
    image: testingImg,
    imageAlt: "Engineer using testing equipment",
    items: ["24/7 technical support", "Preventive maintenance programs", "Spare parts management", "Remote monitoring & diagnostics"],
  },
];

const TechnicalCapabilities = () => {
  return (
    <section className="page-break section-padding bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-2">Technical Capabilities</h2>
        <div className="accent-bar mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div key={cap.title} className="card-corporate p-0 overflow-hidden">
              <img src={cap.image} alt={cap.imageAlt} className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;

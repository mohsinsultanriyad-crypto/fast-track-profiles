import { Droplets, Zap, Factory, Mountain, Building2, Hammer } from "lucide-react";
import refineryBanner from "@/assets/refinery-banner.jpg";

const industries = [
  { icon: Droplets, title: "Oil & Gas", desc: "Upstream, midstream & downstream facilities" },
  { icon: Factory, title: "Petrochemical", desc: "Refineries & chemical processing plants" },
  { icon: Zap, title: "Power & Utilities", desc: "Power generation & transmission networks" },
  { icon: Mountain, title: "Mining & Minerals", desc: "Mining operations & processing plants" },
  { icon: Building2, title: "Government & Defense", desc: "Critical infrastructure & military installations" },
  { icon: Hammer, title: "Construction & EPC", desc: "Mega-projects & industrial complexes" },
];

const IndustriesServed = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-2">Industries Served</h2>
        <div className="accent-bar mb-10" />

        {/* Banner image */}
        <div className="rounded-lg overflow-hidden mb-10">
          <img src={refineryBanner} alt="Panoramic view of oil refinery in daylight" className="w-full h-52 object-cover" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="p-6 bg-muted rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ind.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-1">{ind.title}</h3>
              <p className="text-xs text-muted-foreground">{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;

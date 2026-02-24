import { ShieldCheck, Clock, Award, Wrench, Users, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Proven Track Record", desc: "500+ projects delivered across Saudi Arabia's most demanding industrial environments." },
  { icon: Award, title: "Certified Excellence", desc: "ISO-certified operations compliant with Aramco, SABIC, and international engineering standards." },
  { icon: Wrench, title: "Turnkey Capability", desc: "End-to-end project delivery from design and engineering to installation and maintenance." },
  { icon: Users, title: "Expert Workforce", desc: "200+ certified engineers and technicians with deep industry-specific expertise." },
  { icon: Clock, title: "On-Time Delivery", desc: "Consistent project completion within schedule and budget across all contract types." },
  { icon: HeartHandshake, title: "Long-Term Partnerships", desc: "Trusted by Saudi Arabia's largest industrial operators for repeat engagements." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-2 text-center">Why Choose FASTEP ARABIA</h2>
        <div className="accent-bar mx-auto mb-10" />

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="text-center p-6">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

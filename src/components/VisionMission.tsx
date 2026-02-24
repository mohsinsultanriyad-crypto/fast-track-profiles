import { Eye, Target, Shield } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="page-break section-padding bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-2 text-center">Vision & Mission</h2>
        <div className="accent-bar mx-auto mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="card-corporate">
            <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="heading-md mb-4">Our Vision</h3>
            <p className="body-text">
              To be the Kingdom's most trusted and innovative engineering contractor in 
              security systems and network infrastructure — recognized for technical excellence, 
              reliability, and commitment to industrial safety across all major sectors.
            </p>
          </div>

          {/* Mission */}
          <div className="card-corporate">
            <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="heading-md mb-4">Our Mission</h3>
            <p className="body-text">
              To deliver world-class integrated security and communication solutions through 
              certified engineering expertise, advanced technologies, and unwavering commitment 
              to quality — enabling our clients to operate safely and efficiently.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-12">
          <h3 className="heading-md text-center mb-8">Core Values</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: "Safety First", desc: "Zero-incident culture across all operations" },
              { icon: Target, title: "Excellence", desc: "Exceeding international quality standards" },
              { icon: Eye, title: "Integrity", desc: "Transparent and ethical business practices" },
              { icon: Shield, title: "Innovation", desc: "Leveraging cutting-edge technologies" },
            ].map((val) => (
              <div key={val.title} className="text-center p-5 bg-card rounded-lg border border-border">
                <val.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-bold text-sm text-foreground mb-1">{val.title}</div>
                <div className="text-xs text-muted-foreground">{val.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

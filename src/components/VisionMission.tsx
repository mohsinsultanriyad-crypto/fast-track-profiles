import { Eye, Target, Shield } from "lucide-react";
import networkTowerImg from "@/assets/network-tower.jpg";
import accessControlImg from "@/assets/access-control.jpg";
import controlRoomImg from "@/assets/control-room.jpg";
import cctvImg from "@/assets/cctv-security.jpg";

const VisionMission = () => {
  return (
    <section className="page-break section-padding bg-muted">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-2 text-center">Vision & Mission</h2>
        <div className="accent-bar mx-auto mb-10" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="card-corporate flex flex-col p-0 overflow-hidden">
            <img src={networkTowerImg} alt="Network tower at industrial facility in daylight" className="w-full h-44 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="heading-md !mb-0">Our Vision</h3>
              </div>
              <p className="body-text">
                To be the Kingdom's most trusted and innovative engineering contractor in 
                security systems and network infrastructure — recognized for technical excellence, 
                reliability, and commitment to industrial safety across all major sectors.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="card-corporate flex flex-col p-0 overflow-hidden">
            <img src={accessControlImg} alt="Access control device at facility entrance" className="w-full h-44 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="heading-md !mb-0">Our Mission</h3>
              </div>
              <p className="body-text">
                To deliver world-class integrated security and communication solutions through 
                certified engineering expertise, advanced technologies, and unwavering commitment 
                to quality — enabling our clients to operate safely and efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values with image strip */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img src={controlRoomImg} alt="Security monitoring control room" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={cctvImg} alt="CCTV camera at industrial facility" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h3 className="heading-md mb-6">Core Values</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, title: "Safety First", desc: "Zero-incident culture across all operations" },
                { icon: Target, title: "Excellence", desc: "Exceeding international quality standards" },
                { icon: Eye, title: "Integrity", desc: "Transparent and ethical business practices" },
                { icon: Shield, title: "Innovation", desc: "Leveraging cutting-edge technologies" },
              ].map((val) => (
                <div key={val.title} className="text-center p-4 bg-card rounded-lg border border-border">
                  <val.icon className="w-7 h-7 text-accent mx-auto mb-2" />
                  <div className="font-bold text-sm text-foreground mb-1">{val.title}</div>
                  <div className="text-xs text-muted-foreground">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;

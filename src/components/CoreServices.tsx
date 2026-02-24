import cctvImg from "@/assets/cctv-security.jpg";
import networkImg from "@/assets/network-infrastructure.jpg";
import controlImg from "@/assets/control-room.jpg";
import securityInstallImg from "@/assets/security-install.jpg";
import structuredCablingImg from "@/assets/structured-cabling.jpg";
import accessControlImg from "@/assets/access-control.jpg";
import { Camera, Network, Shield } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "CCTV & Surveillance Systems",
    image: cctvImg,
    imageAlt: "CCTV camera at industrial facility in daylight",
    secondaryImage: securityInstallImg,
    secondaryAlt: "Technician installing CCTV camera",
    items: [
      "IP & Analog CCTV camera systems",
      "Video Management Systems (VMS)",
      "Perimeter intrusion detection",
      "Thermal imaging & analytics",
      "Access control & gate barriers",
      "Central monitoring stations",
    ],
  },
  {
    icon: Shield,
    title: "Integrated Security Solutions",
    image: controlImg,
    imageAlt: "Security monitoring control room with bright lighting",
    secondaryImage: accessControlImg,
    secondaryAlt: "Access control device",
    items: [
      "Fire alarm & detection systems",
      "Public address & voice alarm",
      "Intercom & communication systems",
      "Intrusion detection systems",
      "Guard patrol management",
      "Command & control centers",
    ],
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    image: networkImg,
    imageAlt: "Technician working with fiber optic cables in server room",
    secondaryImage: structuredCablingImg,
    secondaryAlt: "Structured cabling patch panel",
    items: [
      "Fiber optic backbone installation",
      "Structured cabling (Cat6A/Cat7)",
      "Industrial Ethernet networks",
      "Wireless infrastructure (Wi-Fi 6)",
      "Data center connectivity",
      "Network commissioning & testing",
    ],
  },
];

const CoreServices = () => {
  return (
    <section className="page-break section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-2">Core Services</h2>
        <div className="accent-bar mb-10" />

        <div className="space-y-10">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="grid md:grid-cols-2 gap-6 items-stretch"
            >
              <div className={`flex flex-col justify-center ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="heading-md !mb-0">{service.title}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 body-text text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`grid grid-rows-[2fr_1fr] gap-3 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img
                    src={service.secondaryImage}
                    alt={service.secondaryAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;

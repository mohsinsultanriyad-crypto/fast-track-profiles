import logo from "@/assets/fastep-logo.png";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src={logo}
          alt="FASTEP ARABIA Logo"
          className="h-16 mx-auto mb-8 brightness-0 invert object-contain"
        />
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-accent rounded-full mx-auto mb-8" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            { icon: MapPin, title: "Address", value: "Jubail Industrial City\nKingdom of Saudi Arabia" },
            { icon: Phone, title: "Phone", value: "+966 XX XXX XXXX" },
            { icon: Mail, title: "Email", value: "info@fasteparabia.com" },
            { icon: Globe, title: "Website", value: "www.fasteparabia.com" },
          ].map((item) => (
            <div key={item.title} className="p-6">
              <item.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-primary-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/70 whitespace-pre-line">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} FASTEP ARABIA. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

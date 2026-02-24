import engineersImg from "@/assets/engineers-site.jpg";

const AboutSection = () => {
  return (
    <section className="page-break section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <h2 className="heading-lg mb-2">About FASTEP ARABIA</h2>
        <div className="accent-bar mb-8" />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="body-text mb-5">
              FASTEP ARABIA is a leading Saudi-based engineering contractor specializing in 
              integrated security systems, advanced network infrastructure, and industrial 
              technology solutions. With a proven track record across the Kingdom's most 
              critical industrial sectors, we deliver turnkey solutions that meet the highest 
              international standards.
            </p>
            <p className="body-text mb-5">
              Our team of certified engineers and technicians brings deep expertise in designing, 
              installing, and maintaining complex security and communication systems for oil & gas, 
              petrochemical, power generation, and mining facilities.
            </p>
            <p className="body-text">
              We are committed to supporting Saudi Vision 2030 through technology-driven 
              infrastructure development, workforce localization, and sustainable engineering 
              practices that empower the Kingdom's industrial transformation.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={engineersImg}
              alt="Engineers at industrial construction site in daylight"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Projects Completed" },
            { value: "200+", label: "Skilled Professionals" },
            { value: "50+", label: "Industrial Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-muted rounded-lg">
              <div className="text-3xl font-extrabold text-accent mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

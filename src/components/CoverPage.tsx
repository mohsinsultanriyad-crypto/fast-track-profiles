import logo from "@/assets/fastep-logo.png";
import heroImg from "@/assets/hero-industrial.jpg";

const CoverPage = () => {
  return (
    <section className="page-break relative flex flex-col">
      {/* Hero image area */}
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src={heroImg}
          alt="Petrochemical industrial facility in bright daylight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col items-center justify-center section-padding text-center -mt-20 relative z-10">
        <img
          src={logo}
          alt="FASTEP ARABIA Logo"
          className="h-20 md:h-28 mb-8 object-contain"
        />
        <h1 className="heading-xl mb-4">Company Profile</h1>
        <div className="accent-bar mx-auto mb-6" />
        <p className="body-text max-w-2xl text-lg">
          Integrated Security Systems · Network Infrastructure · Industrial Contracting
        </p>
        <p className="text-muted-foreground mt-4 text-sm tracking-widest uppercase">
          Kingdom of Saudi Arabia
        </p>
      </div>
    </section>
  );
};

export default CoverPage;

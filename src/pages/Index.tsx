import CoverPage from "@/components/CoverPage";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import CoreServices from "@/components/CoreServices";
import TechnicalCapabilities from "@/components/TechnicalCapabilities";
import IndustriesServed from "@/components/IndustriesServed";
import MajorProjects from "@/components/MajorProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <main className="w-full max-w-[210mm] mx-auto bg-card shadow-xl">
      <CoverPage />
      <AboutSection />
      <VisionMission />
      <CoreServices />
      <TechnicalCapabilities />
      <IndustriesServed />
      <MajorProjects />
      <WhyChooseUs />
      <ContactSection />
    </main>
  );
};

export default Index;

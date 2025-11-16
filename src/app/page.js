
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WorkflowSection from "./components/WorkflowSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CertificationsSection from "./components/CertificationsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <CertificationsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ServicesSection />
        <WorkflowSection />
        <PricingSection />
        <FAQSection />
        <EmailSection /> 
      </div>
      <Footer />
    </main>
  );
}

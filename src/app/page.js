import HeroSection from "@/sections/homepage/HeroSection";
import KelebihanSection from "@/sections/homepage/KelebihanSection";
import HiringPartnersSection from "@/sections/homepage/HiringPartnersSection";
import WelcomeSection from "@/sections/homepage/WelcomeSection";
import PricingSections from "@/sections/homepage/PricingSections";
import KelasSection from "@/sections/homepage/KelasSection";
import JobConnectorSection from "@/sections/homepage/JobConnectorSection";
import TestimoniSection from "@/sections/homepage/TestimoniSection";
import FaqSection from "@/sections/homepage/FaqSection";
import ContactSection from "@/sections/homepage/ContactSection";

export default function Home() {
  return (
    <main className="homepage-main">
      <HeroSection />
      <div className="white">
        <KelebihanSection />
        <HiringPartnersSection />
        <WelcomeSection />
        <PricingSections />
        <KelasSection />
        <JobConnectorSection />
        <TestimoniSection />
        <FaqSection />
      </div>
      <ContactSection />
    </main>
  );
}

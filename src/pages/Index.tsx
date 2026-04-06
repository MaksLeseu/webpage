import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ScreensSection from "@/components/ScreensSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <AboutSection />
    <FeaturesSection />
    <HowItWorksSection />
    <ScreensSection />
    <PricingSection />
    <CTASection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;

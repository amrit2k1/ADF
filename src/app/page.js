import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CapturingMomentsSection from '@/components/CapturingMomentsSection';
import PreLoader from '@/components/PreLoader';
import ServicesSection from '@/components/ServicesSection';
import TeamSection from '@/components/TeamSection';
import QuoteSection from '@/components/QuoteSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import LocationSection from '@/components/Location';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <>
      
      <div className="relative">
        <Navbar />
        <HeroSection />
        <CapturingMomentsSection />
        <ServicesSection />
        <TeamSection />
        <QuoteSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
        <LocationSection />
        
      </div>
    </>
  );
}
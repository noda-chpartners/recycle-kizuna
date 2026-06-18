import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import PopularMenuSection from './components/PopularMenuSection';
import PurchaseLineupSection from './components/PurchaseLineupSection';
import CleanupAndRenovationSection from './components/CleanupAndRenovationSection';
import CompanyInfoSection from './components/CompanyInfoSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServiceSection />
      <PopularMenuSection />
      <PurchaseLineupSection />
      <CleanupAndRenovationSection />
      <CompanyInfoSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
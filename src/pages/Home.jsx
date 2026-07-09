import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ServicesPreview from '../components/home/ServicesPreview';
import DoctorHighlight from '../components/home/DoctorHighlight';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/common/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <WhyChooseUs />
      <ServicesPreview />
      <DoctorHighlight />
      <TestimonialsPreview />
      <FaqSection />
      <CtaBanner />
    </>
  );
}

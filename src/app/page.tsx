import DiscusForm from '@/components/details-form';
import FactNewsSection from '@/components/fact-news-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import PartnersSection from '@/components/partners-section';
import ProjectSection from '@/components/projects-section';
import Services from '@/components/services';
import ValuesBlock from '@/components/values-block';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ValuesBlock />
      <Services />
      <ProjectSection />
      <PartnersSection />
      <FactNewsSection />
      <DiscusForm />
      <Footer />
    </div>
  );
}

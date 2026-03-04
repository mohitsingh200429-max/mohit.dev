import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Services />
      <Process />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

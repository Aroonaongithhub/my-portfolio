import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Resume />
      <Contact />
    </main>
  );
};

export default Index;
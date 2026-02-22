import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Writing from '@/components/Writing';
import Testimonials from '@/components/Testimonials';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import TargetCursor from '@/components/TargetCursor';

const Index = () => {
  return (
    <main className="overflow-hidden">
      <TargetCursor />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Writing />
      <Testimonials />
      <Resume />
      <Contact />
    </main>
  );
};

export default Index;
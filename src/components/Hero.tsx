import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Engineering with purpose.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden parallax-bg"
      style={{ backgroundImage: `url(/bg.jpg)` }}
    >
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground">
                <span className="">Aroona</span>
                <span className="ml-2 hero-gradient bg-clip-text text-transparent">
                  Vikram
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-xl lg:text-2xl text-primary-foreground/90 font-medium">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>
              
              <p className="text-lg text-primary-foreground/80 max-w-2xl">
                Software Engineer skilled in Reactjs/Nextjs, TypeScript, and modern web technologies. I craft scalable applications, automate workflows, and build AI-driven solutions that deliver seamless user experiences.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="accent-gradient text-accent-foreground hover:scale-105 smooth-transition glow-accent font-semibold px-8"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 smooth-transition"
                onClick={() => window.open('https://flowcv.com/resume/v7jbdoh45i', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:text-black hover:scale-110 smooth-transition"
                onClick={() => window.open('https://github.com/Aroonaongithhub', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground hover:text-blue-600 hover:scale-110 smooth-transition"
                onClick={() => window.open('https://linkedin.com/in/aroona-vikram', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden professional-shadow floating-animation">
                <img
                  src={'/profile-avatar.jpeg'}
                  alt="Aroona Vikram - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full glow-primary opacity-50 animate-pulse-glow" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            size="icon"
            variant="ghost"
            className="text-primary-foreground/60 hover:text-primary-foreground"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
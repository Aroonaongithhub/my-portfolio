import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(textRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(ctaRef.current?.children || [], { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.4")
      .fromTo(socialRef.current?.children || [], { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3")
      .fromTo(imageRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'elastic.out(1, 0.75)' }, "-=1");

  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent blur-[120px] animate-pulse" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold tracking-wide uppercase animate-reveal">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Available for New Projects</span>
              </div>

              <h1
                ref={titleRef}
                className="text-6xl lg:text-8xl font-extrabold text-foreground leading-tight"
              >
                Aroona <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Vikram
                </span>
              </h1>

              <div ref={subtitleRef} className="h-10 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl lg:text-3xl font-heading font-medium text-foreground/80">
                  Engineering with purpose.
                </h2>
              </div>

              <p
                ref={textRef}
                className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
                Software Engineer with 1.5 years delivering production web applications in <span className="text-foreground font-semibold">InsurTech</span> and <span className="text-foreground font-semibold">SaaS</span>. Specialized in <span className="text-foreground font-semibold">React/Next.js</span>, <span className="text-foreground font-semibold">TypeScript</span>, and intelligent workflow automation to solve hard business problems.
              </p>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-glow px-10 h-14 rounded-full text-lg font-bold"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Let's Talk
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 bg-transparent text-foreground hover:bg-primary/5 hover:border-primary transition-all duration-300 px-10 h-14 rounded-full text-lg font-bold"
                onClick={() => window.open('https://flowcv.com/resume/v7jbdoh45i', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div ref={socialRef} className="flex gap-6 justify-center lg:justify-start">
              {[
                { icon: Github, href: 'https://github.com/Aroonaongithhub', color: 'hover:text-primary' },
                { icon: Linkedin, href: 'https://linkedin.com/in/aroona-vikram', color: 'hover:text-primary' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground transition-all duration-300 hover:scale-125 ${social.color}`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div ref={imageRef} className="flex-shrink-0 relative">
            <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-20px] rounded-full border border-accent/10 animate-[spin_15s_linear_infinite_reverse]" />

              <div className="w-full h-full rounded-full overflow-hidden border-4 border-background shadow-premium relative z-10">
                <img
                  src={'/profile-avatar.jpeg'}
                  alt="Aroona Vikram"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Floating Element 1 */}
              {/* <div className="absolute top-0 -right-4 bg-card/80 backdrop-blur-xl border border-border p-4 rounded-2xl shadow-premium z-20 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">1+</span>
                  </div>
                  <span className="text-sm font-semibold">Years Experience</span>
                </div>
              </div> */}

              {/* Floating Element 2 */}
              {/* <div className="absolute bottom-10 -left-10 bg-card/80 backdrop-blur-xl border border-border p-4 rounded-2xl shadow-premium z-20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Github className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold">Open Source Contributor</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Scroll</span>
          <Button
            size="icon"
            variant="ghost"
            className="text-foreground animate-bounce h-10 w-10 rounded-full bg-secondary/50"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
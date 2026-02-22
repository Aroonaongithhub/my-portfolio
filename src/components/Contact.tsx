import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight, MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll('.contact-animate'),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        }
      }
    );
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "aroonavikram@gmail.com",
      href: "mailto:aroonavikram@gmail.com",
      description: "Available for technical inquiries and collaborations."
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "aroona-vikram",
      href: "https://linkedin.com/in/aroona-vikram",
      description: "Let's connect and share industry insights."
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "Aroonaongithhub",
      href: "https://github.com/Aroonaongithhub",
      description: "Explore my open-source contributions and logic."
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative bg-secondary/5 overflow-hidden">

      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-20 contact-animate">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <MessageSquare className="h-4 w-4" />
              Get in touch
            </div>
            <h2 className="text-4xl lg:text-7xl font-extrabold mb-8 tracking-tighter">
              Ready for the Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Chapter?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm always open to discussing new opportunities, creative ideas or projects to be part of your visions.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-1 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-animate group"
              >
                <Card className="bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-8 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <div className="p-4 rounded-2xl bg-secondary/50 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">{info.label}</h3>
                        <p className="text-2xl font-bold mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground/80">{info.description}</p>
                      </div>
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-500" />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* Footer Card */}
          <Card className="bg-primary contact-animate border-none shadow-glow transition-transform hover:scale-[1.01] duration-500">
            <CardContent className="p-12 text-center text-primary-foreground">
              <h3 className="text-3xl font-bold mb-4">Let's build something exceptional.</h3>
              <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">
                Have a project in mind or just want to say hi? My inbox is always open.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-10 h-14 font-black text-primary hover:scale-105 transition-all shadow-lg"
                onClick={() => window.location.href = 'mailto:aroonavikram@gmail.com'}
              >
                Send a Direct Message
              </Button>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Contact;
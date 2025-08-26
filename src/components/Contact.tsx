import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "aroonavikram@gmail.com",
      href: "mailto:aroonavikram@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(+92) 335-2530247",
      href: "tel:+923352530247"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Karachi, Pakistan",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/aroona-vikram",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub", 
      href: "https://github.com/Aroonaongithhub",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-gradient-to-br from-background to-secondary/50"
    >
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Let's <span className="hero-gradient bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-1 gap-12">
              
              {/* Contact Form */}
              {/* <Card className=" professional-shadow h-[750px]">
                <CardContent className="p-8 h-full">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">
                    Send Me a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6 h-full">
                    <div className="grid sm:grid-col-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className='pl-1 pb-1'>Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="smooth-transition focus:ring-primary h-14 w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className='pl-1 pb-1'>Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="smooth-transition focus:ring-primary h-14 w-full"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className='pl-1 pb-1'>Company/Organization</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="smooth-transition focus:ring-primary h-14 w-full"
                        placeholder="Your company or organization"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className='pl-1 pb-1'>Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={8}
                        className="min-h-[120px] smooth-transition focus:ring-primary"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="mt-4 w-full accent-gradient text-accent-foreground hover:scale-105 smooth-transition glow-accent"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card> */}

              {/* Contact Information */}
              <div className="space-y-6">
                
                {/* Contact Details */}
                <Card className="glass-card professional-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-6">
                      Get In Touch
                    </h3>
                    
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <div 
                          key={info.label}
                          className={`flex items-center gap-4 p-4 rounded-lg bg-secondary/30 smooth-transition hover:bg-secondary/50 ${
                            isVisible ? 'animate-slide-in-left' : 'opacity-0'
                          }`}
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          <div className="flex-shrink-0 p-3 rounded-lg accent-gradient text-accent-foreground">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">
                              {info.label}
                            </h4>
                            {info.href ? (
                              <a 
                                href={info.href}
                                className="text-muted-foreground hover:text-primary smooth-transition"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="glass-card professional-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-foreground mb-6">
                      Follow Me
                    </h3>
                    
                    <div className="flex gap-4">
                      {socialLinks.map((social, index) => (
                        <Button
                          key={social.label}
                          size="lg"
                          variant="outline"
                          className={`flex-1 smooth-transition hover:scale-105 ${social.color} ${
                            isVisible ? 'animate-fade-in-up' : 'opacity-0'
                          }`}
                          style={{ animationDelay: `${index * 0.3}s` }}
                          onClick={() => window.open(social.href, '_blank')}
                        >
                          {social.icon}
                          <span className="ml-2">{social.label}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Availability Status */}
                <Card className="glass-card professional-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Available for Opportunities
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      I'm currently open to new opportunities and exciting projects. 
                      Whether you're looking for a full-time developer, freelance work, 
                      or collaboration, I'd love to hear from you!
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Full-time Roles', 'Freelance Projects', 'Collaborations', 'Consulting'].map((type) => (
                        <span 
                          key={type}
                          className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-sm rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
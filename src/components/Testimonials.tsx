import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Fozia Khan",
    position: "Lecturer",
    company: "Sir Syed University of Engineering & Technology (SSUET) Karachi",
    avatar: "#",
    content: "It is my pleasure to recommend Aroona, who was my student in the Artificial Intelligence course. Throughout the course, she demonstrated a strong grasp of complex concepts, exceptional analytical skills, and a keen interest in learning. Aroona consistently performed well in assessments and projects, securing an excellent score in the subject. Her dedication, discipline, and enthusiasm for AI were evident in her active participation and insightful contributions during class discussions. I am confident that her academic abilities, combined with her strong work ethic, will enable her to excel in any future academic or professional endeavor.",
    linkedinUrl: "https://www.linkedin.com/in/fozia-khan-747460199/"
  },
  {
    id: 2,
    name: "Saad Bazaz",
    position: "Co-Founder, CEO",
    company: "Grayhat",
    avatar: "#",
    content: "Aroona is a skilled and driven software engineer. As her team lead, I saw her grow from an intern to a capable full-stack developer, taking ownership of key projects, within a short duration. She led the development of WorkStack, an AI-powered productivity tool, during her FYP, where she implemented secure access controls and built useful automation features. Her work with Next.js, React, and Node.js was solid, and she consistently delivered clean, functional code. Aroona is a quick learner, a reliable team player, and someone who takes initiative to solve problems, and all of the above compensates in any field she chooses to work in.",
    linkedinUrl: "https://www.linkedin.com/in/saadbazaz/"
  },
  {
    id: 3,
    name: "Muhammad Hashim",
    position: "Software Engineer 1",
    company: "Grayhat",
    avatar: "#",
    content: "I had the pleasure of working with Aroona at Grayhat, where she served as a cornerstone of our team. Her energy, empathy, and ingenuity never failed to inspire. One standout moment was when she took ownership of a critical project delay, reorganized the workflow, and led us to deliver ahead of schedule. Beyond her technical and leadership skills, her ability to connect, support, and uplift her peers sets her apart. She also brought a positive and uplifting presence to the team, making our working environment better just by being part of it. I’m confident that Aroona will continue to grow and thrive wherever she goes. Any team would be lucky to have her.",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-hashims/"
  },
  {
    id: 4,
    name: "Syed Abdullah Nasir",
    position: "Software Engineer",
    company: "Grayhat",
    avatar: "#",
    content: "I highly recommend Aroona Vikram, who was a fantastic Part-Time Associate Software Engineer at Grayhat Studio. Aroona consistently impressed me with her skills and dedication, quickly becoming an invaluable part of our team. She has a strong command of a full-stack development stack, including front-end technologies like Next.js and React.js, and back-end tools such as Node.js and Next middleware. Her expertise also extends to AWS EC2, analytics platforms like Posthog and Google Analytics, and authentication with Firebase. Aroona's code was always flawless, demonstrating a deep understanding of complex concepts like custom hooks. She consistently wrote clean, efficient, and well-documented code. On top of her technical abilities, she is a highly collaborative and proactive team player who seamlessly integrated into our team, actively contributing ideas and taking ownership of her work. Aroona would be a tremendous asset to any organization.",
    linkedinUrl: "https://www.linkedin.com/in/san09/"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-card to-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
           Words from Colleagues & Mentors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The voices of people I’ve worked and grown with along the way.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="glass-card group hover:shadow-lg smooth-transition hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/60" />
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground/90 text-base leading-relaxed mb-6">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>

                  {/* LinkedIn Link */}
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground smooth-transition"
                    aria-label={`View ${testimonial.name} on LinkedIn`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more recommendations?
          </p>
          <a
            href="https://www.linkedin.com/in/aroona-vikram/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 smooth-transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            View All LinkedIn Recommendations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

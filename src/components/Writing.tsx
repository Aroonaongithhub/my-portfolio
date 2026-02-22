import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PenTool, ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Writing = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        // Title Animation
        gsap.fromTo(el.querySelector('.writing-header'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: el.querySelector('.writing-header'),
                    start: "top 85%",
                }
            }
        );

        // Article Cards Animation
        const cards = containerRef.current?.querySelectorAll('.article-card');
        if (cards) {
            gsap.fromTo(cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }

    }, []);

    const articles = [
        {
            title: "14 Chrome DevTools Tricks That Will Transform Your Workflow (2025 Edition)",
            date: "Feb 2025",
            readTime: "7 min read",
            description: "A comprehensive guide to the latest and most powerful Chrome DevTools features, designed to supercharge your debugging and development process.",
            platform: "Medium / daily.dev",
            mediumLink: "https://medium.com/@aroona158/14-chrome-devtools-tricks-that-will-transform-your-workflow-2025-edition-df17df255f10",
            dailyDevLink: "https://app.daily.dev/posts/14-chrome-devtools-tricks-that-will-transform-your-workflow-2025-edition--trzmqowte",
            tags: ["Web Dev", "DevTools", "Debugging", "Productivity"],
            image: "/devToolBlog.webp"
        }
    ];

    return (
        <section ref={sectionRef} id="writing" className="py-32 relative overflow-hidden bg-secondary/50">
            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="writing-header text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                        <PenTool className="h-4 w-4" />
                        Thoughts & Articles
                    </div>
                    <h2 className="text-4xl lg:text-7xl font-extrabold mb-8 tracking-tighter">
                        Sharing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Knowledge</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        I write about modern web development, engineering practices, and tools that make us better developers.
                    </p>
                </div>

                {/* Articles Grid */}
                <div ref={containerRef} className="max-w-5xl mx-auto space-y-12">
                    {articles.map((article, index) => (
                        <div key={index} className="article-card group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-border/50 to-transparent hover:from-primary/30 hover:to-accent/30 transition-colors duration-500">
                            <div className="bg-background rounded-[2.4rem] p-8 lg:p-12 h-full flex flex-col md:flex-row gap-12 items-center">

                                {/* Content */}
                                <div className="flex-1 space-y-6">
                                    <div className="flex flex-wrap gap-4 items-center text-sm font-medium text-muted-foreground">
                                        <span className="flex items-center gap-1.5 text-primary">
                                            <BookOpen className="h-4 w-4" />
                                            {article.platform}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                                        <span>{article.date}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="h-4 w-4" />
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-4xl font-black group-hover:text-primary transition-colors duration-300">
                                        {article.title}
                                    </h3>

                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {article.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {article.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground font-bold hover:bg-primary hover:text-primary-foreground transition-colors">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-4 pt-6">
                                        <Button
                                            className="rounded-full px-8 h-12 font-bold shadow-glow hover:scale-105 transition-all"
                                            onClick={() => window.open(article.mediumLink, '_blank')}
                                        >
                                            Read on Medium
                                            <ArrowUpRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full px-8 h-12 font-bold border-border/50 hover:bg-secondary transition-all"
                                            onClick={() => window.open(article.dailyDevLink, '_blank')}
                                        >
                                            Read on daily.dev
                                            <ArrowUpRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Optional Image side */}
                                <div className="hidden md:block w-1/3 aspect-[4/5] rounded-[1.5rem] overflow-hidden relative shadow-premium">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Writing;

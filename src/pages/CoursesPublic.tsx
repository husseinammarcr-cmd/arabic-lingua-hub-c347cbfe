import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { CURRICULUM, getTotalLessonsCount } from '@/lib/curriculum';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  BookOpen,
  GraduationCap,
  MessageCircle,
  Headphones,
  PenTool,
  ArrowRight,
  Users,
  Trophy,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';
import PageBackground from '@/components/PageBackground';
import Header from '@/components/Header';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/AnimatedContainers';
import { TiltCard } from '@/components/animations/TiltCard';
import { usePrefersReducedMotion } from '@/hooks/useAnimations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import levelA1Books from '@/assets/level-a1-books.jpeg';
import levelA2Books from '@/assets/level-a2-books.jpeg';
import levelB1Books from '@/assets/level-b1-books.jpeg';
import levelB2Books from '@/assets/level-b2-books.jpeg';
import levelC1Books from '@/assets/level-c1-books.jpeg';
import levelC2Books from '@/assets/level-c2-books.jpeg';

const levelColors: Record<string, string> = {
  'A1': 'from-emerald-500 to-emerald-600',
  'A2': 'from-sky-500 to-sky-600',
  'B1': 'from-violet-500 to-violet-600',
  'B2': 'from-amber-500 to-amber-600',
  'C1': 'from-rose-500 to-rose-600',
  'C2': 'from-fuchsia-500 to-fuchsia-600',
};

const levelImages: Record<string, string> = {
  'A1': levelA1Books,
  'A2': levelA2Books,
  'B1': levelB1Books,
  'B2': levelB2Books,
  'C1': levelC1Books,
  'C2': levelC2Books,
};

const levelDetails: Record<string, { skills: string[]; examples: string[] }> = {
  'A1': {
    skills: ['Greetings & introductions', 'Numbers & colours', 'Family & friends', 'Food & drink'],
    examples: ['¡Hola! Me llamo...', '¿Cómo estás?', 'Tengo dos hermanos']
  },
  'A2': {
    skills: ['Shopping & prices', 'Travel & directions', 'Hobbies & interests', 'Jobs & work'],
    examples: ['¿Cuánto cuesta?', '¿Dónde está la estación?', 'Trabajo como profesor']
  },
  'B1': {
    skills: ['Expressing opinions', 'Past events', 'Future plans', 'Social situations'],
    examples: ['Creo que...', 'El año pasado visité...', 'Tengo planes de...']
  },
  'B2': {
    skills: ['Advanced discussions', 'Formal writing', 'Understanding news', 'Idiomatic expressions'],
    examples: ['Por otro lado...', 'Llueve a cántaros', 'A quien corresponda']
  },
  'C1': {
    skills: ['Academic writing', 'Literary analysis', 'Professional communication', 'Abstract thinking'],
    examples: ['Desde un punto de vista filosófico...', 'Las implicaciones de esta investigación...']
  },
  'C2': {
    skills: ['Complete mastery', 'Literature & poetry', 'Public speaking', 'Professional translation'],
    examples: ['Los matices de este argumento sugieren...', 'Para trazar un paralelismo entre...']
  },
};

const faqItems = [
  {
    question: 'Are the courses free?',
    answer: 'Yes! All courses and lessons are completely free. We believe that learning Spanish should be accessible to everyone.'
  },
  {
    question: 'Can I get a certificate?',
    answer: 'Yes! Upon successfully completing level C2, you can apply for a free Spanish proficiency certificate. The certificate includes a unique verification code that can be verified on our website.'
  },
  {
    question: 'How long does it take to complete a full level?',
    answer: 'It depends on your learning pace. On average, you can complete one level in 2–3 months by studying 15–30 minutes daily. We have 6 complete levels from A1 to C2.'
  },
  {
    question: 'Do I need prior knowledge of Spanish?',
    answer: 'No! We start from scratch at level A1. If you have prior knowledge, you can take the placement test to find out where to start amongst our six levels.'
  },
  {
    question: 'What types of exercises are available?',
    answer: 'We offer varied exercises including: multiple choice, sentence ordering, fill in the blanks, listening, and translation. Each lesson contains a mix of these exercises.'
  },
  {
    question: 'Can I learn on my mobile?',
    answer: 'Absolutely! The platform is fully compatible with smartphones and tablets. You can learn at any time, from anywhere.'
  },
  {
    question: 'How do I track my learning progress?',
    answer: 'After signing up, you can track your progress, collect XP points, maintain your daily learning streak, and unlock achievements.'
  },
  {
    question: 'Does the content follow international standards?',
    answer: 'Yes, our curriculum is built on the CEFR (Common European Framework of Reference for Languages), the most widely adopted international standard for assessing language levels.'
  }
];

const SITE_URL = 'https://lingospanish.com';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lingo Spanish",
  "url": SITE_URL,
  "logo": `${SITE_URL}/favicon.png`,
  "description": "Learn Spanish online for free — designed for British English speakers"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Lingo Spanish",
  "url": SITE_URL
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Courses", "item": `${SITE_URL}/courses` }
  ]
};

const CoursesPublic = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const prefersReducedMotion = usePrefersReducedMotion();
  const totalLessons = getTotalLessonsCount();

  const handleCTA = () => {
    if (user) {
      navigate('/app/courses');
    } else {
      navigate('/auth');
    }
  };

  return (
    <PageBackground>
      <Helmet>
        <title>Learn Spanish Courses for English Speakers | Lingo Spanish</title>
        <meta name="description" content={`Learn Spanish for free from scratch to mastery. ${totalLessons}+ interactive lessons across 6 CEFR levels designed for British English speakers.`} />
        <link rel="canonical" href={`${SITE_URL}/courses`} />
        
        <meta property="og:title" content="Learn Spanish Courses | Lingo Spanish" />
        <meta property="og:description" content={`Learn Spanish for free. ${totalLessons}+ interactive lessons across 6 CEFR levels.`} />
        <meta property="og:url" content={`${SITE_URL}/courses`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:site_name" content="Lingo Spanish" />
        <meta property="og:locale" content="en_GB" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn Spanish Courses | Lingo Spanish" />
        <meta name="twitter:description" content={`Learn Spanish for free. ${totalLessons}+ interactive lessons.`} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div>
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-5xl">
          <FadeUp>
            <section className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Completely Free</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Learn Spanish Courses
                <span className="block text-primary mt-2">for English Speakers</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                A comprehensive curriculum built on international CEFR standards. {totalLessons} interactive lessons 
                covering vocabulary, grammar, listening, and conversation.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>{totalLessons}+ lessons</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>6 CEFR levels</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Thousands of learners</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span>Free certificate upon completing C2</span>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="xl"
                onClick={handleCTA}
                className="text-lg gap-2"
              >
                {user ? 'Continue Learning' : 'Start Now for Free'}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </section>
          </FadeUp>

          <FadeUp delay={0.1}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground text-center mb-2">
                Learning Levels
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                From beginner to mastery — choose the right level for you
              </p>

              <StaggerContainer className="grid gap-6 md:grid-cols-2">
                {CURRICULUM.map((level) => {
                  const totalLevelLessons = level.units.reduce((sum, unit) => sum + unit.lessons.length, 0);
                  const levelImage = levelImages[level.code];
                  const details = levelDetails[level.code];

                  return (
                    <StaggerItem key={level.id}>
                      <TiltCard className="h-full">
                        <Card className="group overflow-hidden transition-all duration-300 h-full hover:shadow-elevated">
                          <div className={cn("h-32 bg-gradient-to-br relative overflow-hidden", levelColors[level.code])}>
                            <img 
                              src={levelImage} 
                              alt={`Level ${level.code} — ${level.titleEn} — Learn Spanish with Lingo Spanish`}
                              loading="lazy"
                              width={400}
                              height={128}
                              className="absolute inset-0 w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            
                            <div className="absolute top-3 right-3">
                              <span className="text-sm font-bold px-3 py-1 rounded-full bg-white/90 text-foreground shadow-sm">
                                {level.code}
                              </span>
                            </div>
                            
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              initial={{ x: '-100%' }}
                              whileHover={prefersReducedMotion ? {} : { x: '100%' }}
                              transition={{ duration: 0.6 }}
                            />
                          </div>

                          <CardContent className="p-5">
                            <div className="mb-3">
                              <h3 className="text-lg font-bold text-foreground">{level.titleEn}</h3>
                              <p className="text-sm text-muted-foreground">{level.titleAr}</p>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4">{level.descriptionAr}</p>

                            <div className="mb-4">
                              <p className="text-xs font-medium text-foreground mb-2">What you'll learn:</p>
                              <div className="flex flex-wrap gap-2">
                                {details.skills.map((skill, idx) => (
                                  <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                              <p className="text-xs font-medium text-foreground mb-2">Examples:</p>
                              <div className="space-y-1">
                                {details.examples.slice(0, 2).map((example, idx) => (
                                  <p key={idx} className="text-xs text-muted-foreground italic">
                                    "{example}"
                                  </p>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3" />
                                {totalLevelLessons} lessons
                              </span>
                              <span className="flex items-center gap-1">
                                <GraduationCap className="w-3 h-3" />
                                {level.units.length} units
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </TiltCard>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </section>
          </FadeUp>

          <FadeUp delay={0.2}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                An Effective Way to Learn
              </h2>
              
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  { icon: BookOpen, title: 'Vocabulary', desc: 'Learn new words daily' },
                  { icon: PenTool, title: 'Grammar', desc: 'Essential grammar rules' },
                  { icon: Headphones, title: 'Listening', desc: 'Interactive audio exercises' },
                  { icon: MessageCircle, title: 'Conversation', desc: 'Realistic dialogues' },
                ].map((feature, idx) => (
                  <Card key={idx} className="text-center p-4">
                    <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </Card>
                ))}
              </div>
            </section>
          </FadeUp>

          <FadeUp delay={0.3}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground text-center mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Answers to the most common questions
              </p>

              <Card className="max-w-3xl mx-auto">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="text-foreground font-medium">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </section>
          </FadeUp>

          <FadeUp delay={0.4}>
            <section className="text-center py-12 px-6 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to start your learning journey?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Join thousands of learners and start learning Spanish today. Completely free!
              </p>
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleCTA}
                className="text-lg gap-2"
              >
                {user ? 'Continue Learning' : 'Sign Up Now for Free'}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </section>
          </FadeUp>
        </main>
      </div>
    </PageBackground>
  );
};

export default CoursesPublic;

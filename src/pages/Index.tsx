import React, { forwardRef, useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ChevronRight, Award, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import PageBackground from '@/components/PageBackground';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { LazyThreeBackground } from '@/components/animations/LazyThreeBackground';
import { LazyLottieAnimation } from '@/components/animations/LazyLottieAnimation';
import SplashScreen from '@/components/SplashScreen';

const SITE_URL = 'https://lingospanish.com';

// Import feature illustrations
import featureLessons from '@/assets/feature-lessons.png';
import featureXp from '@/assets/feature-xp.png';
import orangeSkating from '@/assets/orange-skating.json';
import streakAnimation from '@/assets/streak-animation.json';
import trophyAnimation from '@/assets/trophy-animation.json';
import { LottieAnimation } from '@/components/animations/LottieAnimation';

interface FeatureCardProps {
  image?: string;
  lottieData?: object;
  title: string;
  subtitle: string;
  delay: number;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ image, lottieData, title, subtitle, delay }, ref) => (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.001, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group bg-card/50 backdrop-blur-[2px] border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="p-6 pb-0">
        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      
      <div className="h-48 md:h-56 flex items-end justify-center overflow-hidden">
        {lottieData ? (
          <LazyLottieAnimation 
            animationData={lottieData}
            loop={true}
            autoplay={true}
            className="w-36 h-36 md:w-44 md:h-44 mb-2"
            rootMargin="100px"
          />
        ) : (
          <img 
            src={image} 
            alt={`${title} - Learning feature on LingoSpanish`}
            loading="lazy"
            width={176}
            height={176}
            className="w-full h-full object-contain object-bottom transform group-hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
    </motion.div>
  )
);

FeatureCard.displayName = 'FeatureCard';

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showSplash, setShowSplash] = useState(() => {
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    return !hasSeenSplash;
  });

  const handleSplashComplete = () => {
    sessionStorage.setItem('hasSeenSplash', 'true');
    setShowSplash(false);
  };

  const features = [
    { 
      image: featureLessons, 
      title: 'Interactive Lessons', 
      subtitle: 'Learn Spanish step by step' 
    },
    { 
      image: featureXp, 
      title: 'Earn XP Points', 
      subtitle: 'Track your progress' 
    },
    { 
      lottieData: streakAnimation, 
      title: 'Daily Streaks', 
      subtitle: 'Build consistent habits' 
    },
    { 
      lottieData: trophyAnimation, 
      title: 'Free Certificate', 
      subtitle: 'Prove your skills' 
    },
  ];

  const organizationSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lingo Spanish",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "description": "A platform to learn Spanish for English speakers"
  }), []);

  const websiteSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lingo Spanish",
    "alternateName": "LingoSpanish",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }), []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <PageBackground>
      <Helmet>
        <title>Lingo Spanish – Learn Spanish for Free</title>
        <meta name="description" content="Learn Spanish in a fun and effective way with LingoSpanish. Interactive lessons, diverse exercises, and daily progress tracking. Designed for English speakers." />
        <link rel="canonical" href={SITE_URL} />
        
        <meta property="og:title" content="Lingo Spanish – Learn Spanish for Free" />
        <meta property="og:description" content="An interactive platform designed for English speakers. Interactive lessons, diverse exercises, and daily progress tracking." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:site_name" content="Lingo Spanish" />
        <meta property="og:locale" content="en_GB" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lingo Spanish – Learn Spanish for Free" />
        <meta name="twitter:description" content="An interactive platform designed for English speakers. Interactive lessons, diverse exercises, and daily progress tracking." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <LazyThreeBackground variant="particles" intensity="medium" loadDelay={2000} />
      
      <div className="relative z-10">
        <Header showAuthButton />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
              Learn Spanish
              <span className="block text-primary mt-2">the Fun & Effective Way</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              An interactive platform designed for English speakers. Step-by-step lessons, diverse exercises, and daily progress tracking.
            </p>
            
            <div className="flex justify-center mb-4 animate-slide-up" style={{ animationDelay: '150ms' }}>
              <LottieAnimation 
                animationData={orangeSkating}
                loop={true}
                autoplay={true}
                className="w-48 h-28 md:w-64 md:h-36"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => navigate(user ? '/app/courses' : '/auth')}
                className="text-lg shadow-lg hover:shadow-xl"
              >
                {user ? 'Continue Learning' : 'Start for Free'}
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => navigate(user ? '/placement-test' : '/auth?returnUrl=/placement-test')}
                className="text-lg border-2"
              >
                Placement Test
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Why LingoSpanish?
            </h2>
            <p className="text-muted-foreground">
              Discover the benefits of learning with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                lottieData={feature.lottieData}
                title={feature.title}
                subtitle={feature.subtitle}
                delay={index * 100}
              />
            ))}
          </div>
        </section>

        {/* Certificate Banner */}
        <section className="container mx-auto px-4 py-8 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 via-amber-400 to-yellow-500 p-6 md:p-8 shadow-lg"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Get a Free Certificate! 🎓
                </h3>
                <p className="text-white/90 mb-4 max-w-xl">
                  Upon completing level C2, you'll receive a Spanish proficiency certificate with a unique verification code
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Official Certificate
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Unique Verification Code
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    Completely Free
                  </span>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <Button 
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate(user ? '/app/courses' : '/auth')}
                  className="bg-white text-amber-600 hover:bg-white/90 shadow-md"
                >
                  {user ? 'Continue Learning' : 'Start Now'}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="relative bg-gradient-to-br from-primary to-[hsl(180_70%_45%)] rounded-3xl overflow-hidden shadow-elevated">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Join Thousands of Learners
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                Start your Spanish learning journey today and discover a fun and effective way to learn
              </p>
              <Button 
                variant="accent" 
                size="xl"
                onClick={() => navigate(user ? '/app/courses' : '/auth')}
                className="shadow-lg hover:shadow-xl"
              >
                {user ? 'Continue Learning' : 'Sign Up for Free'}
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/50 py-8 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <p className="text-muted-foreground">
                  © {new Date().getFullYear()} LingoSpanish. All rights reserved.
                </p>
              </div>
              <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end">
                <a href="/free-lessons" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Free Lessons
                </a>
                <span className="text-border">|</span>
                <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
                <span className="text-border">|</span>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Use
                </a>
                <span className="text-border">|</span>
                <a href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageBackground>
    </>
  );
};

export default Index;

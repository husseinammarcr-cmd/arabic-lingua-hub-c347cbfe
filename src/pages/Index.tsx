import React, { forwardRef, useMemo, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Award, CheckCircle2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import PageBackground from '@/components/PageBackground';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { LazyThreeBackground } from '@/components/animations/LazyThreeBackground';
import { LazyLottieAnimation } from '@/components/animations/LazyLottieAnimation';
import SplashScreen from '@/components/SplashScreen';
import { AclibBanner } from '@/components/AclibBanner';

const SITE_URL = 'https://lingoarab.com';

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
  titleAr: string;
  titleEn: string;
  delay: number;
}

const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ image, lottieData, titleAr, titleEn, delay }, ref) => (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.001, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group bg-card/50 backdrop-blur-[2px] border border-border/50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      {/* Card content */}
      <div className="p-6 pb-0">
        <h3 className="text-xl font-bold text-foreground mb-1">{titleAr}</h3>
        <p className="text-sm text-muted-foreground ltr-text">{titleEn}</p>
      </div>
      
      {/* Illustration container */}
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
            alt={`${titleEn} - ${titleAr} - ميزة تعليمية في LingoArab`}
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
    // Check if user has already seen splash in this session
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
      titleAr: 'دروس تفاعلية', 
      titleEn: 'Interactive Lessons' 
    },
    { 
      image: featureXp, 
      titleAr: 'اكسب نقاط XP', 
      titleEn: 'Earn XP Points' 
    },
    { 
      lottieData: streakAnimation, 
      titleAr: 'سلسلة يومية', 
      titleEn: 'Daily Streaks' 
    },
    { 
      lottieData: trophyAnimation, 
      titleAr: 'شهادة مجانية', 
      titleEn: 'Free Certificate' 
    },
  ];

  // JSON-LD Schemas
  const organizationSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lingo Arab",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "description": "منصة لتعلم اللغة الإنجليزية للناطقين بالعربية"
  }), []);

  const websiteSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lingo Arab",
    "alternateName": "LingoArab",
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
        <title>Lingo Arab – تعلم الإنجليزية مجانا</title>
        <meta name="description" content="تعلم اللغة الإنجليزية بطريقة ممتعة وفعّالة مع LingoArab. دروس تفاعلية، تمارين متنوعة، وتتبع تقدمك يومياً. مصممة خصيصاً للناطقين بالعربية." />
        <link rel="canonical" href={SITE_URL} />
        
        {/* OpenGraph */}
        <meta property="og:title" content="Lingo Arab – تعلم الإنجليزية مجانا" />
        <meta property="og:description" content="منصة تعليمية مصممة خصيصاً للناطقين بالعربية. دروس تفاعلية، تمارين متنوعة، وتتبع تقدمك يومياً." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:site_name" content="Lingo Arab" />
        <meta property="og:locale" content="ar_SA" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lingo Arab – تعلم الإنجليزية مجانا" />
        <meta name="twitter:description" content="منصة تعليمية مصممة خصيصاً للناطقين بالعربية. دروس تفاعلية، تمارين متنوعة، وتتبع تقدمك يومياً." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        
        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      {/* 3D Particles Background - Lazy loaded for better LCP */}
      <LazyThreeBackground variant="particles" intensity="medium" loadDelay={2000} />
      
      <div dir="rtl" className="relative z-10">
        {/* Header */}
        <Header showAuthButton />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-slide-up">
              تعلّم الإنجليزية
              <span className="block text-primary mt-2">بطريقة ممتعة وفعّالة</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              منصة تعليمية مصممة خصيصاً للناطقين بالعربية. دروس تفاعلية، تمارين متنوعة، وتتبع تقدمك يومياً.
            </p>
            
            {/* Lottie Orange Skating Animation */}
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
                {user ? 'تابع التعلم' : 'ابدأ مجاناً'}
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => navigate(user ? '/placement-test' : '/auth?returnUrl=/placement-test')}
                className="text-lg border-2"
              >
                اختبار تحديد المستوى
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              لماذا LingoArab؟
            </h2>
            <p className="text-muted-foreground">
              اكتشف مميزات التعلم معنا
            </p>
          </div>

          {/* Ad Banner */}
          <AclibBanner className="mb-8" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                lottieData={feature.lottieData}
                titleAr={feature.titleAr}
                titleEn={feature.titleEn}
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
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
            
            <div className="relative flex flex-col md:flex-row items-center gap-6">
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 md:w-12 md:h-12 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-right">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  احصل على شهادة مجانية! 🎓
                </h3>
                <p className="text-white/90 mb-4 max-w-xl">
                  عند إكمالك لمستوى C2، ستحصل على شهادة إتقان اللغة الإنجليزية معتمدة برمز تحقق فريد
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/80">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    شهادة رسمية
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    رمز تحقق فريد
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    مجانية بالكامل
                  </span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="flex-shrink-0">
                <Button 
                  variant="secondary"
                  size="lg"
                  onClick={() => navigate(user ? '/app/courses' : '/auth')}
                  className="bg-white text-amber-600 hover:bg-white/90 shadow-md"
                >
                  {user ? 'تابع التعلم' : 'ابدأ الآن'}
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="relative bg-gradient-to-br from-primary to-[hsl(180_70%_45%)] rounded-3xl overflow-hidden shadow-elevated">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                انضم إلى آلاف المتعلمين
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-xl mx-auto">
                ابدأ رحلتك في تعلم الإنجليزية اليوم واكتشف طريقة ممتعة وفعّالة للتعلم
              </p>
              <Button 
                variant="accent" 
                size="xl"
                onClick={() => navigate(user ? '/app/courses' : '/auth')}
                className="shadow-lg hover:shadow-xl"
              >
                {user ? 'تابع التعلم' : 'سجّل الآن مجاناً'}
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
                  © {new Date().getFullYear()} LingoArab. جميع الحقوق محفوظة.
                </p>
                <a 
                  href="https://www.tiktok.com/@lingo.arab" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="تابعنا على تيك توك"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                <a 
                  href="/free-lessons" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  دروس مجانية
                </a>
                <span className="text-border">|</span>
                <a 
                  href="/privacy-policy" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  سياسة الخصوصية
                </a>
                <span className="text-border">|</span>
                <a 
                  href="/terms" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  شروط الاستخدام
                </a>
                <span className="text-border">|</span>
                <a 
                  href="/cookie-policy" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  سياسة ملفات الارتباط
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

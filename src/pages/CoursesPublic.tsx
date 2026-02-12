import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { CURRICULUM, getTotalLessonsCount } from '@/lib/curriculum';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  BookOpen,
  GraduationCap,
  MessageCircle,
  Headphones,
  PenTool,
  CheckCircle2,
  ArrowLeft,
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

// Import level illustrations
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
    skills: ['التحيات والتعريف بالنفس', 'الأرقام والألوان', 'العائلة والأصدقاء', 'الطعام والشراب'],
    examples: ['Hello, my name is...', 'How are you?', 'I have two brothers']
  },
  'A2': {
    skills: ['التسوق والأسعار', 'السفر والتوجيهات', 'الهوايات والاهتمامات', 'الوظائف والعمل'],
    examples: ['How much does this cost?', 'Where is the train station?', 'I work as a teacher']
  },
  'B1': {
    skills: ['التعبير عن الآراء', 'الأحداث الماضية', 'الخطط المستقبلية', 'المواقف الاجتماعية'],
    examples: ['I think that...', 'Last year I visited...', 'I\'m planning to...']
  },
  'B2': {
    skills: ['المناقشات المتقدمة', 'الكتابة الرسمية', 'فهم الأخبار', 'التعبيرات الاصطلاحية'],
    examples: ['On the other hand...', 'It\'s raining cats and dogs', 'To whom it may concern']
  },
  'C1': {
    skills: ['الكتابة الأكاديمية', 'التحليل الأدبي', 'التواصل المهني', 'الفلسفة والتفكير المجرد'],
    examples: ['From a philosophical standpoint...', 'The implications of this research...', 'To elaborate on this point...']
  },
  'C2': {
    skills: ['الإتقان اللغوي الكامل', 'الأدب والشعر', 'الخطابة والإقناع', 'الترجمة الاحترافية'],
    examples: ['The nuances of this argument suggest...', 'To draw a parallel between...', 'In the spirit of diplomatic discourse...']
  },
};

const faqItems = [
  {
    question: 'هل الكورسات مجانية؟',
    answer: 'نعم! جميع الكورسات والدروس متاحة مجاناً بالكامل. نؤمن بأن تعلم اللغة الإنجليزية يجب أن يكون متاحاً للجميع.'
  },
  {
    question: 'هل يمكنني الحصول على شهادة؟',
    answer: 'نعم! عند إكمالك لمستوى C2 بنجاح، يمكنك التقدم للحصول على شهادة إتقان اللغة الإنجليزية مجاناً. الشهادة تتضمن رمز تحقق فريد يمكن التحقق منه عبر موقعنا.'
  },
  {
    question: 'كم من الوقت يستغرق إكمال مستوى كامل؟',
    answer: 'يعتمد ذلك على وتيرة تعلمك. في المتوسط، يمكنك إكمال مستوى واحد خلال 2-3 أشهر بالدراسة اليومية لمدة 15-30 دقيقة. لدينا 6 مستويات كاملة من A1 إلى C2.'
  },
  {
    question: 'هل أحتاج معرفة سابقة بالإنجليزية؟',
    answer: 'لا! نبدأ من الصفر في مستوى A1. إذا كان لديك معرفة سابقة، يمكنك أخذ اختبار تحديد المستوى لمعرفة أين تبدأ من بين مستوياتنا الستة.'
  },
  {
    question: 'ما أنواع التمارين المتوفرة؟',
    answer: 'نقدم تمارين متنوعة تشمل: اختيار من متعدد، ترتيب الجمل، ملء الفراغات، الاستماع، والترجمة. كل درس يحتوي على مزيج من هذه التمارين.'
  },
  {
    question: 'هل يمكنني التعلم من الموبايل؟',
    answer: 'بالتأكيد! المنصة متوافقة تماماً مع الهواتف الذكية والأجهزة اللوحية. يمكنك التعلم في أي وقت ومن أي مكان.'
  },
  {
    question: 'كيف أتابع تقدمي في التعلم؟',
    answer: 'بعد التسجيل، ستتمكن من تتبع تقدمك، جمع نقاط XP، الحفاظ على سلسلة التعلم اليومية، وفتح الإنجازات.'
  },
  {
    question: 'هل المحتوى يتبع معايير دولية؟',
    answer: 'نعم، منهجنا مبني على إطار CEFR الأوروبي المشترك للغات، وهو المعيار الدولي الأكثر اعتماداً لتقييم مستويات اللغة.'
  }
];

// JSON-LD Schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LingoArab",
  "url": "https://lingoarab.com",
  "logo": "https://lingoarab.com/favicon.png",
  "sameAs": [],
  "description": "منصة تعليمية عربية لتعلم اللغة الإنجليزية"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "LingoArab",
  "alternateName": "Lingo Arab",
  "url": "https://lingoarab.com"
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
    {
      "@type": "ListItem",
      "position": 1,
      "name": "الرئيسية",
      "item": "https://lingoarab.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "الكورسات",
      "item": "https://lingoarab.com/courses"
    }
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
        <title>كورسات تعلم الإنجليزية للناطقين بالعربية | Lingo Arab</title>
        <meta name="description" content="تعلم الإنجليزية مجاناً من الصفر إلى الإتقان. 300+ درس تفاعلي في 6 مستويات CEFR مصممة خصيصاً للناطقين بالعربية." />
        <link rel="canonical" href="https://lingoarab.com/courses" />
        
        {/* Open Graph */}
        <meta property="og:title" content="كورسات تعلم الإنجليزية للناطقين بالعربية | Lingo Arab" />
        <meta property="og:description" content="تعلم الإنجليزية مجاناً من الصفر إلى الإتقان. 300+ درس تفاعلي في 6 مستويات CEFR." />
        <meta property="og:url" content="https://lingoarab.com/courses" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://lingoarab.com/og-image.png" />
        <meta property="og:site_name" content="Lingo Arab" />
        <meta property="og:locale" content="ar_SA" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="كورسات تعلم الإنجليزية للناطقين بالعربية | Lingo Arab" />
        <meta name="twitter:description" content="تعلم الإنجليزية مجاناً من الصفر إلى الإتقان. 300+ درس تفاعلي." />
        <meta name="twitter:image" content="https://lingoarab.com/og-image.png" />
        
        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div dir="rtl">
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-5xl">
          {/* Hero Section */}
          <FadeUp>
            <section className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">مجاني بالكامل</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                كورسات تعلم الإنجليزية
                <span className="block text-primary mt-2">للناطقين بالعربية</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                منهج متكامل مبني على معايير CEFR الدولية. {totalLessons} درس تفاعلي 
                يغطي المفردات، القواعد، الاستماع، والمحادثة.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>{totalLessons}+ درس</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span>6 مستويات CEFR</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span>آلاف المتعلمين</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span>شهادة مجانية عند إتمام C2</span>
                </div>
              </div>

              <Button 
                variant="hero" 
                size="xl"
                onClick={handleCTA}
                className="text-lg gap-2"
              >
                {user ? 'متابعة التعلم' : 'ابدأ الآن مجاناً'}
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </section>
          </FadeUp>

          {/* Levels Grid */}
          <FadeUp delay={0.1}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground text-center mb-2">
                مستويات التعلم
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                من المبتدئ إلى الإتقان - اختر المستوى المناسب لك
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
                          {/* Gradient Header with Illustration */}
                          <div className={cn("h-32 bg-gradient-to-br relative overflow-hidden", levelColors[level.code])}>
                            <img 
                              src={levelImage} 
                              alt={`مستوى ${level.code} - ${level.titleAr} - تعلم الإنجليزية من LingoArab`}
                              loading="lazy"
                              width={400}
                              height={128}
                              className="absolute inset-0 w-full h-full object-cover opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            
                            {/* Level Badge */}
                            <div className="absolute top-3 right-3">
                              <span className="text-sm font-bold px-3 py-1 rounded-full bg-white/90 text-foreground shadow-sm">
                                {level.code}
                              </span>
                            </div>
                            
                            {/* Shine effect */}
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                              initial={{ x: '-100%' }}
                              whileHover={prefersReducedMotion ? {} : { x: '100%' }}
                              transition={{ duration: 0.6 }}
                            />
                          </div>

                          <CardContent className="p-5">
                            <div className="mb-3">
                              <h3 className="text-lg font-bold text-foreground">{level.titleAr}</h3>
                              <p className="text-sm text-muted-foreground ltr-text">{level.titleEn}</p>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4">{level.descriptionAr}</p>

                            {/* Skills */}
                            <div className="mb-4">
                              <p className="text-xs font-medium text-foreground mb-2">ماذا ستتعلم:</p>
                              <div className="flex flex-wrap gap-2">
                                {details.skills.map((skill, idx) => (
                                  <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Example phrases */}
                            <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                              <p className="text-xs font-medium text-foreground mb-2">أمثلة:</p>
                              <div className="space-y-1">
                                {details.examples.slice(0, 2).map((example, idx) => (
                                  <p key={idx} className="text-xs text-muted-foreground ltr-text italic">
                                    "{example}"
                                  </p>
                                ))}
                              </div>
                            </div>

                            {/* Stats */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
                              <span className="flex items-center gap-1">
                                <BookOpen className="w-3 h-3" />
                                {totalLevelLessons} درس
                              </span>
                              <span className="flex items-center gap-1">
                                <GraduationCap className="w-3 h-3" />
                                {level.units.length} وحدات
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

          {/* Features */}
          <FadeUp delay={0.2}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground text-center mb-8">
                طريقة تعلم فعّالة
              </h2>
              
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  { icon: BookOpen, title: 'المفردات', desc: 'تعلم كلمات جديدة يومياً' },
                  { icon: PenTool, title: 'القواعد', desc: 'أساسيات النحو والصرف' },
                  { icon: Headphones, title: 'الاستماع', desc: 'تمارين صوتية تفاعلية' },
                  { icon: MessageCircle, title: 'المحادثة', desc: 'حوارات واقعية' },
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

          {/* FAQ Section */}
          <FadeUp delay={0.3}>
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground text-center mb-2">
                الأسئلة الشائعة
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                إجابات على أكثر الأسئلة شيوعاً
              </p>

              <Card className="max-w-3xl mx-auto">
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-right hover:no-underline">
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

          {/* Final CTA */}
          <FadeUp delay={0.4}>
            <section className="text-center py-12 px-6 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                جاهز لبدء رحلة التعلم؟
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                انضم لآلاف المتعلمين وابدأ تعلم الإنجليزية اليوم. مجاني بالكامل!
              </p>
              <Button 
                variant="hero" 
                size="xl"
                onClick={handleCTA}
                className="text-lg gap-2"
              >
                {user ? 'متابعة التعلم' : 'سجّل الآن مجاناً'}
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </section>
          </FadeUp>
        </main>
      </div>
    </PageBackground>
  );
};

export default CoursesPublic;

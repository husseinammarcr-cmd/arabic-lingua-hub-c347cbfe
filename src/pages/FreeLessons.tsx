import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Book, ChevronLeft, GraduationCap, Star, Users, BookOpen, Mic, PenTool, MessageCircle, Globe, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CURRICULUM } from '@/lib/curriculum';
import { useAuth } from '@/contexts/AuthContext';
import Header from '@/components/Header';
// Get first lesson of each unit for public preview
const getFreeLessons = () => {
  const freeLessons: Array<{
    levelCode: string;
    levelTitleAr: string;
    levelTitleEn: string;
    levelColor: string;
    units: Array<{
      unitId: string;
      unitTitleAr: string;
      unitTitleEn: string;
      lessonId: string;
      lessonTitleAr: string;
      lessonTitleEn: string;
      xpReward: number;
    }>;
  }> = [];

  for (const level of CURRICULUM) {
    const units = level.units.map(unit => ({
      unitId: unit.id,
      unitTitleAr: unit.titleAr,
      unitTitleEn: unit.titleEn,
      lessonId: unit.lessons[0].id,
      lessonTitleAr: unit.lessons[0].titleAr,
      lessonTitleEn: unit.lessons[0].titleEn,
      xpReward: unit.lessons[0].xpReward,
    }));

    freeLessons.push({
      levelCode: level.code,
      levelTitleAr: level.titleAr,
      levelTitleEn: level.titleEn,
      levelColor: level.color,
      units,
    });
  }

  return freeLessons;
};

const getLevelGradient = (color: string) => {
  const gradients: Record<string, string> = {
    emerald: 'from-emerald-500 to-emerald-600',
    sky: 'from-sky-500 to-sky-600',
    violet: 'from-violet-500 to-violet-600',
    amber: 'from-amber-500 to-amber-600',
    rose: 'from-rose-500 to-rose-600',
    fuchsia: 'from-fuchsia-500 to-fuchsia-600',
  };
  return gradients[color] || 'from-primary to-primary/80';
};

const getLevelIcon = (code: string) => {
  const icons: Record<string, React.ReactNode> = {
    A1: <BookOpen className="w-5 h-5 text-white" />,
    A2: <Mic className="w-5 h-5 text-white" />,
    B1: <PenTool className="w-5 h-5 text-white" />,
    B2: <MessageCircle className="w-5 h-5 text-white" />,
    C1: <Globe className="w-5 h-5 text-white" />,
    C2: <Award className="w-5 h-5 text-white" />,
  };
  return icons[code] || <Book className="w-5 h-5 text-white" />;
};

const getLevelDescription = (code: string) => {
  const descriptions: Record<string, string> = {
    A1: 'الأساسيات والتحيات اليومية',
    A2: 'المحادثات البسيطة والمواقف اليومية',
    B1: 'التعبير عن الآراء والمواضيع المألوفة',
    B2: 'النقاشات المتقدمة والنصوص المعقدة',
    C1: 'الطلاقة والاستخدام الأكاديمي',
    C2: 'الإتقان والتعبير الاحترافي',
  };
  return descriptions[code] || '';
};

const FreeLessons = () => {
  const { user } = useAuth();
  const freeLessons = getFreeLessons();
  const totalLessons = freeLessons.reduce((acc, level) => acc + level.units.length, 0);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'دروس إنجليزية مجانية - LingoArab',
    description: 'تصفح دروس تعلم اللغة الإنجليزية المجانية للناطقين بالعربية. دروس تفاعلية من المستوى المبتدئ إلى المتقدم.',
    url: 'https://lingoarab.com/free-lessons',
    inLanguage: ['ar', 'en'],
    provider: {
      '@type': 'Organization',
      name: 'LingoArab',
      url: 'https://lingoarab.com',
    },
    hasPart: freeLessons.flatMap(level =>
      level.units.map(unit => ({
        '@type': 'Course',
        name: `${unit.lessonTitleEn} - ${level.levelCode}`,
        description: `${unit.unitTitleAr} - ${unit.lessonTitleAr}`,
        provider: {
          '@type': 'Organization',
          name: 'LingoArab',
        },
        educationalLevel: level.levelCode,
        inLanguage: ['ar', 'en'],
      }))
    ),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'الرئيسية',
        item: 'https://lingoarab.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'دروس مجانية',
        item: 'https://lingoarab.com/free-lessons',
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>دروس إنجليزية مجانية | تعلم الإنجليزية للعرب - LingoArab</title>
        <meta 
          name="description" 
          content="استكشف دروسنا المجانية لتعلم اللغة الإنجليزية. دروس تفاعلية مصممة خصيصاً للناطقين بالعربية من المستوى A1 إلى C2." 
        />
        <meta name="keywords" content="دروس إنجليزية مجانية, تعلم الإنجليزية, تعليم اللغة الإنجليزية, دروس مجانية, LingoArab" />
        <link rel="canonical" href="https://lingoarab.com/free-lessons" />
        <meta property="og:title" content="دروس إنجليزية مجانية | LingoArab" />
        <meta property="og:description" content="استكشف دروسنا المجانية لتعلم اللغة الإنجليزية. دروس تفاعلية مصممة للناطقين بالعربية." />
        <meta property="og:url" content="https://lingoarab.com/free-lessons" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <Header showBack showAuthButton />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <Book className="w-4 h-4 ml-2" />
                {totalLessons} درس مجاني
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-primary to-primary/70 bg-clip-text text-transparent">
                دروس إنجليزية مجانية
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                استكشف عينة من دروسنا التفاعلية المصممة خصيصاً للناطقين بالعربية.
                ابدأ رحلتك في تعلم الإنجليزية اليوم!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to={user ? "/app/courses" : "/auth"}>
                  <Button size="lg" className="gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {user ? "استمر في التعلم" : "ابدأ التعلم مجاناً"}
                  </Button>
                </Link>
                <Link to="/placement-test">
                  <Button size="lg" variant="outline" className="gap-2">
                    حدد مستواك
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">{CURRICULUM.length}</div>
                <div className="text-sm text-muted-foreground">مستويات CEFR</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">{totalLessons}</div>
                <div className="text-sm text-muted-foreground">درس مجاني</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">مجاني</div>
              </div>
            </div>
          </div>
        </section>

        {/* Lessons by Level - Accordion */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-center mb-8">تصفح الدروس حسب المستوى</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {freeLessons.map((level) => (
                <AccordionItem 
                  key={level.levelCode} 
                  value={level.levelCode}
                  className="border rounded-xl overflow-hidden bg-card shadow-sm"
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-muted/50">
                    <div className="flex items-center gap-4 w-full">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getLevelGradient(level.levelColor)} flex items-center justify-center shrink-0 shadow-md`}>
                        {getLevelIcon(level.levelCode)}
                      </div>
                      <div className="text-right flex-1">
                        <p className="font-bold text-base">{level.levelTitleAr}</p>
                        <p className="text-xs text-muted-foreground ltr-text">{level.levelTitleEn}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{getLevelDescription(level.levelCode)}</p>
                      </div>
                      <Badge variant="outline" className="shrink-0">
                        {level.units.length} درس
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {level.units.map((unit) => (
                        <Link
                          key={unit.lessonId}
                          to={`/preview/lesson/${unit.lessonId}`}
                          className="block"
                        >
                          <Card className="h-full hover:shadow-md transition-all duration-200 hover:border-primary/30 group">
                            <CardContent className="p-4 flex items-center gap-3">
                              <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${getLevelGradient(level.levelColor)} flex items-center justify-center shrink-0 opacity-80`}>
                                <Book className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                                  {unit.unitTitleAr}
                                </p>
                                <p className="text-xs text-muted-foreground truncate ltr-text">
                                  {unit.lessonTitleEn}
                                </p>
                              </div>
                              <Badge variant="secondary" className="flex items-center gap-1 shrink-0 text-xs">
                                <Star className="w-3 h-3" />
                                {unit.xpReward}
                              </Badge>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto text-center p-8">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h2 className="text-2xl font-bold mb-4">
                انضم إلى آلاف المتعلمين
              </h2>
              <p className="text-muted-foreground mb-6">
                سجّل الآن للوصول إلى جميع الدروس، تتبع تقدمك، واكسب نقاط XP!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to={user ? "/app/courses" : "/auth"}>
                  <Button size="lg">{user ? "استمر في التعلم" : "إنشاء حساب مجاني"}</Button>
                </Link>
                <Link to={user ? "/app/courses" : "/courses"}>
                  <Button size="lg" variant="outline">
                    استكشف المنهج الكامل
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeLessons;

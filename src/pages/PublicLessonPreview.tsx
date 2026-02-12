import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowLeft, ArrowRight, Lock, ChevronRight, Star, GraduationCap, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import PageBackground from '@/components/PageBackground';
import { CURRICULUM, getLessonById } from '@/lib/curriculum';
import { getLessonContent, VocabItem, SentenceItem } from '@/lib/a1-lessons';
import { AudioButton } from '@/components/AudioButton';
import { useAuth } from '@/contexts/AuthContext';

const SITE_URL = 'https://lingoarab.com';

// Get first lesson of each unit across all levels
const getFirstLessonsOfUnits = () => {
  const lessons: Array<{
    lessonId: string;
    levelCode: string;
    levelTitleAr: string;
    unitTitleAr: string;
    unitTitleEn: string;
    lessonTitleAr: string;
    lessonTitleEn: string;
    unitIndex: number;
    color: string;
  }> = [];

  for (const level of CURRICULUM) {
    for (let i = 0; i < level.units.length; i++) {
      const unit = level.units[i];
      const firstLesson = unit.lessons[0];
      if (firstLesson) {
        lessons.push({
          lessonId: firstLesson.id,
          levelCode: level.code,
          levelTitleAr: level.titleAr,
          unitTitleAr: unit.titleAr,
          unitTitleEn: unit.titleEn,
          lessonTitleAr: firstLesson.titleAr,
          lessonTitleEn: firstLesson.titleEn,
          unitIndex: i + 1,
          color: level.color,
        });
      }
    }
  }

  return lessons;
};

// Check if a lesson is the first in its unit
export const isFirstLessonOfUnit = (lessonId: string): boolean => {
  const firstLessons = getFirstLessonsOfUnits();
  return firstLessons.some(l => l.lessonId === lessonId);
};

const PublicLessonPreview = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const lessonData = getLessonById(lessonId || '');
  const lessonContent = getLessonContent(lessonId || '');

  // Check if this is a first lesson of any unit
  const isPublicLesson = isFirstLessonOfUnit(lessonId || '');

  if (!lessonData) {
    return (
      <PageBackground>
        <Header showBack />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">الدرس غير موجود</h1>
          <Link to="/courses">
            <Button>
              العودة للدورات
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </main>
      </PageBackground>
    );
  }

  // If not a first lesson, show teaser and redirect to auth
  if (!isPublicLesson) {
    return (
      <PageBackground>
        <Helmet>
          <title>{lessonData.lesson.titleAr} - {lessonData.unit.titleAr} | Lingo Arab</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header showBack />
        <main className="container mx-auto px-4 py-16 text-center max-w-lg">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-4">هذا الدرس متاح للأعضاء فقط</h1>
          <p className="text-muted-foreground mb-6">
            سجّل مجاناً للوصول إلى جميع الدروس والتمارين التفاعلية
          </p>
          <div className="flex flex-col gap-3">
            <Button onClick={() => navigate('/auth')} size="lg" className="w-full">
              سجّل الآن مجاناً
              <ChevronRight className="w-4 h-4 mr-2" />
            </Button>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="w-full">
                تصفح الدورات
              </Button>
            </Link>
          </div>
        </main>
      </PageBackground>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${lessonData.lesson.titleAr} - ${lessonData.unit.titleAr}`,
    "description": lessonData.lesson.descriptionAr,
    "provider": {
      "@type": "Organization",
      "name": "Lingo Arab",
      "url": SITE_URL
    },
    "educationalLevel": lessonData.level.code,
    "inLanguage": ["ar", "en"],
    "teaches": lessonData.unit.titleEn,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "courseWorkload": "PT15M"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "الدورات",
        "item": `${SITE_URL}/courses`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `مستوى ${lessonData.level.code}`,
        "item": `${SITE_URL}/courses/${lessonData.level.code.toLowerCase()}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": lessonData.unit.titleAr,
        "item": `${SITE_URL}/preview/lesson/${lessonId}`
      }
    ]
  };

  return (
    <PageBackground>
      <Helmet>
        <title>{lessonData.lesson.titleAr} - {lessonData.unit.titleAr} | تعلم الإنجليزية مجاناً - Lingo Arab</title>
        <meta name="description" content={`تعلم ${lessonData.unit.titleAr} في اللغة الإنجليزية. ${lessonData.lesson.descriptionAr}. دروس تفاعلية مجانية للناطقين بالعربية.`} />
        <link rel="canonical" href={`${SITE_URL}/preview/lesson/${lessonId}`} />
        
        <meta property="og:title" content={`${lessonData.lesson.titleAr} - ${lessonData.unit.titleAr} | Lingo Arab`} />
        <meta property="og:description" content={`تعلم ${lessonData.unit.titleAr} في اللغة الإنجليزية مجاناً. دروس تفاعلية للناطقين بالعربية.`} />
        <meta property="og:url" content={`${SITE_URL}/preview/lesson/${lessonId}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Lingo Arab" />
        <meta property="og:locale" content="ar_SA" />
        
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${lessonData.lesson.titleAr} - Lingo Arab`} />
        <meta name="twitter:description" content={`تعلم ${lessonData.unit.titleAr} في اللغة الإنجليزية مجاناً`} />
        
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header showBack />

      <main className="container mx-auto px-4 py-8 max-w-4xl" dir="rtl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/courses" className="hover:text-primary transition-colors">الدورات</Link>
          <span>/</span>
          <Link to={`/courses`} className="hover:text-primary transition-colors">
            مستوى {lessonData.level.code} - {lessonData.level.titleAr}
          </Link>
          <span>/</span>
          <span className="text-foreground">{lessonData.unit.titleAr}</span>
        </nav>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-sm">
              <GraduationCap className="w-3 h-3 ml-1" />
              مستوى {lessonData.level.code}
            </Badge>
            <Badge variant="outline" className="text-sm">
              <Star className="w-3 h-3 ml-1" />
              +{lessonData.lesson.xpReward} XP
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {lessonData.unit.titleAr}: {lessonData.lesson.titleAr}
          </h1>
          <p className="text-lg text-muted-foreground">
            {lessonData.lesson.descriptionAr}
          </p>
        </motion.div>

        {/* Content Preview */}
        {lessonContent ? (
          <div className="space-y-8">
            {/* Vocabulary Section */}
            {lessonContent.vocab.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  المفردات
                </h2>
                <div className="grid gap-3 md:grid-cols-2">
                  {lessonContent.vocab.slice(0, 6).map((item: VocabItem, index: number) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg font-bold text-primary">{item.english}</span>
                              <AudioButton text={item.english} size="sm" />
                            </div>
                            <p className="text-muted-foreground">{item.arabic}</p>
                            {item.example && (
                              <p className="text-sm mt-2 text-muted-foreground/80 italic">
                                "{item.example}"
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {lessonContent.vocab.length > 6 && (
                  <p className="text-center text-muted-foreground mt-4">
                    و {lessonContent.vocab.length - 6} مفردات أخرى...
                  </p>
                )}
              </motion.section>
            )}

            {/* Sentences Section */}
            {lessonContent.sentences.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4">الجمل والعبارات</h2>
                <Card>
                  <CardContent className="p-4 space-y-4">
                    {lessonContent.sentences.slice(0, 4).map((sentence: SentenceItem, index: number) => (
                      <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0 last:pb-0">
                        <AudioButton text={sentence.english} size="sm" />
                        <div>
                          <p className="font-medium text-foreground">{sentence.english}</p>
                          <p className="text-muted-foreground">{sentence.arabic}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.section>
            )}

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center"
            >
              <h2 className="text-2xl font-bold mb-3">
                {user ? 'أكمل الدرس الآن!' : 'سجّل مجاناً لإكمال الدرس'}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {user 
                  ? 'انتقل إلى التمارين التفاعلية واختبر معلوماتك'
                  : 'احصل على دروس تفاعلية، تمارين متنوعة، وتتبع تقدمك في تعلم الإنجليزية'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {user ? (
                  <Button 
                    size="lg" 
                    onClick={() => navigate(`/lesson/${lessonId}`)}
                    className="gap-2"
                  >
                    ابدأ الدرس الكامل
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                ) : (
                  <>
                    <Button 
                      size="lg" 
                      onClick={() => navigate('/auth')}
                      className="gap-2"
                    >
                      سجّل الآن مجاناً
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => navigate('/auth?mode=login')}
                    >
                      لديك حساب؟ سجّل الدخول
                    </Button>
                  </>
                )}
              </div>
            </motion.section>

            {/* More Lessons Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">دروس أخرى في هذا المستوى</h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {lessonData.level.units.slice(0, 6).map((unit, index) => (
                  <Link 
                    key={unit.id} 
                    to={`/preview/lesson/${unit.lessons[0]?.id}`}
                    className={unit.lessons[0]?.id === lessonId ? 'pointer-events-none' : ''}
                  >
                    <Card className={`transition-all hover:shadow-md ${unit.lessons[0]?.id === lessonId ? 'bg-primary/5 border-primary' : 'hover:border-primary/50'}`}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium">{unit.titleAr}</p>
                            <p className="text-sm text-muted-foreground">{unit.titleEn}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.section>
          </div>
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">محتوى الدرس قيد الإعداد</h2>
              <p className="text-muted-foreground mb-6">
                سيتم إضافة المحتوى التفاعلي قريباً
              </p>
              <Link to="/courses">
                <Button>تصفح الدورات الأخرى</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>
    </PageBackground>
  );
};

export default PublicLessonPreview;

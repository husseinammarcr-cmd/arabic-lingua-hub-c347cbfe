import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { BookOpen, ArrowRight, Lock, ChevronRight, Star, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import PageBackground from '@/components/PageBackground';
import { CURRICULUM, getLessonById } from '@/lib/curriculum';
import { getLessonContent, VocabItem, SentenceItem } from '@/lib/a1-lessons';
import { AudioButton } from '@/components/AudioButton';
import { useAuth } from '@/contexts/AuthContext';

const SITE_URL = 'https://lingospanish.com';

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

  const isPublicLesson = isFirstLessonOfUnit(lessonId || '');

  if (!lessonData) {
    return (
      <PageBackground>
        <Header showBack />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Lesson Not Found</h1>
          <Link to="/courses">
            <Button>
              Back to Courses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </main>
      </PageBackground>
    );
  }

  if (!isPublicLesson) {
    return (
      <PageBackground>
        <Helmet>
          <title>{lessonData.lesson.titleEn} — {lessonData.unit.titleEn} | Lingo Spanish</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header showBack />
        <main className="container mx-auto px-4 py-16 text-center max-w-lg">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-4">This lesson is for members only</h1>
          <p className="text-muted-foreground mb-6">
            Sign up for free to access all lessons and interactive exercises
          </p>
          <div className="flex flex-col gap-3">
            <Button onClick={() => navigate('/auth')} size="lg" className="w-full">
              Sign Up Now for Free
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Link to="/courses">
              <Button variant="outline" size="lg" className="w-full">
                Browse Courses
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
    "name": `${lessonData.lesson.titleEn} — ${lessonData.unit.titleEn}`,
    "description": lessonData.lesson.descriptionAr,
    "provider": { "@type": "Organization", "name": "Lingo Spanish", "url": SITE_URL },
    "educationalLevel": lessonData.level.code,
    "inLanguage": ["en", "es"],
    "teaches": lessonData.unit.titleEn,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
      { "@type": "ListItem", "position": 2, "name": "Courses", "item": `${SITE_URL}/courses` },
      { "@type": "ListItem", "position": 3, "name": `Level ${lessonData.level.code}`, "item": `${SITE_URL}/courses/${lessonData.level.code.toLowerCase()}` },
      { "@type": "ListItem", "position": 4, "name": lessonData.unit.titleEn, "item": `${SITE_URL}/preview/lesson/${lessonId}` }
    ]
  };

  return (
    <PageBackground>
      <Helmet>
        <title>{lessonData.lesson.titleEn} — {lessonData.unit.titleEn} | Learn Spanish Free — Lingo Spanish</title>
        <meta name="description" content={`Learn ${lessonData.unit.titleEn} in Spanish. Free interactive lessons for English speakers.`} />
        <link rel="canonical" href={`${SITE_URL}/preview/lesson/${lessonId}`} />
        
        <meta property="og:title" content={`${lessonData.lesson.titleEn} — ${lessonData.unit.titleEn} | Lingo Spanish`} />
        <meta property="og:description" content={`Learn ${lessonData.unit.titleEn} in Spanish for free. Interactive lessons for English speakers.`} />
        <meta property="og:url" content={`${SITE_URL}/preview/lesson/${lessonId}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Lingo Spanish" />
        <meta property="og:locale" content="en_GB" />
        
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header showBack />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/courses" className="hover:text-primary transition-colors">Courses</Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-primary transition-colors">
            Level {lessonData.level.code} — {lessonData.level.titleEn}
          </Link>
          <span>/</span>
          <span className="text-foreground">{lessonData.unit.titleEn}</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="text-sm">
              <GraduationCap className="w-3 h-3 mr-1" />
              Level {lessonData.level.code}
            </Badge>
            <Badge variant="outline" className="text-sm">
              <Star className="w-3 h-3 mr-1" />
              +{lessonData.lesson.xpReward} XP
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {lessonData.unit.titleEn}: {lessonData.lesson.titleEn}
          </h1>
          <p className="text-lg text-muted-foreground">
            {lessonData.lesson.descriptionAr}
          </p>
        </motion.div>

        {lessonContent ? (
          <div className="space-y-8">
            {lessonContent.vocab.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Vocabulary
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
                              <p className="text-sm mt-2 text-muted-foreground/80 italic">"{item.example}"</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {lessonContent.vocab.length > 6 && (
                  <p className="text-center text-muted-foreground mt-4">
                    and {lessonContent.vocab.length - 6} more vocabulary items...
                  </p>
                )}
              </motion.section>
            )}

            {lessonContent.sentences.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-2xl font-bold mb-4">Sentences & Phrases</h2>
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

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center"
            >
              <h2 className="text-2xl font-bold mb-3">
                {user ? 'Complete the lesson now!' : 'Sign up for free to complete the lesson'}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {user 
                  ? 'Move on to the interactive exercises and test your knowledge'
                  : 'Get interactive lessons, varied exercises, and track your progress learning Spanish'
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {user ? (
                  <Button size="lg" onClick={() => navigate(`/lesson/${lessonId}`)} className="gap-2">
                    Start Full Lesson
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <>
                    <Button size="lg" onClick={() => navigate('/auth')} className="gap-2">
                      Sign Up Now for Free
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => navigate('/auth?mode=login')}>
                      Already have an account? Log in
                    </Button>
                  </>
                )}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-2xl font-bold mb-4">Other lessons at this level</h2>
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
                            <p className="font-medium">{unit.titleEn}</p>
                            <p className="text-sm text-muted-foreground">{unit.titleAr}</p>
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
              <h2 className="text-xl font-bold mb-2">Lesson Content Being Prepared</h2>
              <p className="text-muted-foreground mb-6">Interactive content will be added soon</p>
              <Link to="/courses">
                <Button>Browse Other Courses</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>
    </PageBackground>
  );
};

export default PublicLessonPreview;

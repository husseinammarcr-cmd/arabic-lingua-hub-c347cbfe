import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SITE_URL = 'https://lingoarab.com';

interface FAQItem {
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is LingoArab free to use?',
    questionAr: 'هل LingoArab مجاني؟',
    answer: 'Yes! LingoArab offers free access to all learning content. We believe quality education should be accessible to everyone. Premium features are available for those who want an ad-free experience.',
    answerAr: 'نعم! يوفر LingoArab وصولاً مجانياً لجميع المحتوى التعليمي. نحن نؤمن بأن التعليم الجيد يجب أن يكون متاحاً للجميع. تتوفر ميزات مميزة لمن يرغب في تجربة خالية من الإعلانات.',
  },
  {
    question: 'Do I need an account to start learning?',
    questionAr: 'هل أحتاج إلى حساب للبدء في التعلم؟',
    answer: 'While you can explore some content without an account, creating a free account allows you to track your progress, earn achievements, maintain streaks, and compete on leaderboards.',
    answerAr: 'بينما يمكنك استكشاف بعض المحتوى بدون حساب، فإن إنشاء حساب مجاني يتيح لك تتبع تقدمك، وكسب الإنجازات، والحفاظ على سلسلة التعلم اليومية، والتنافس في لوحة المتصدرين.',
  },
  {
    question: 'What learning levels are available?',
    questionAr: 'ما هي مستويات التعلم المتاحة؟',
    answer: 'We offer courses from complete beginner (A1) to upper-intermediate (B2) levels. Each level is structured into units and lessons that progressively build your English skills.',
    answerAr: 'نقدم دورات من مستوى المبتدئين (A1) إلى المستوى المتوسط المتقدم (B2). كل مستوى منظم في وحدات ودروس تبني مهاراتك في اللغة الإنجليزية بشكل تدريجي.',
  },
  {
    question: 'Can I learn at my own pace?',
    questionAr: 'هل يمكنني التعلم بالسرعة التي تناسبني؟',
    answer: 'Absolutely! LingoArab is designed for self-paced learning. Set your daily goals (5, 10, or 15 minutes), and learn whenever it suits you. Your progress is saved automatically.',
    answerAr: 'بالتأكيد! تم تصميم LingoArab للتعلم الذاتي. حدد أهدافك اليومية (5، 10، أو 15 دقيقة)، وتعلم في الوقت الذي يناسبك. يتم حفظ تقدمك تلقائياً.',
  },
  {
    question: 'Is this platform suitable for beginners?',
    questionAr: 'هل هذه المنصة مناسبة للمبتدئين؟',
    answer: 'Yes! Our platform is perfect for beginners. We start from the basics with Arabic explanations, making it easy for Arabic speakers to understand English concepts from scratch.',
    answerAr: 'نعم! منصتنا مثالية للمبتدئين. نبدأ من الأساسيات مع شروحات بالعربية، مما يسهل على الناطقين بالعربية فهم مفاهيم اللغة الإنجليزية من الصفر.',
  },
  {
    question: 'Will more courses be added in the future?',
    questionAr: 'هل سيتم إضافة المزيد من الدورات في المستقبل؟',
    answer: 'Yes! We are constantly working on new content. More lessons, exercises, and advanced levels are being developed. Stay tuned for updates!',
    answerAr: 'نعم! نحن نعمل باستمرار على محتوى جديد. يتم تطوير المزيد من الدروس والتمارين والمستويات المتقدمة. ترقبوا التحديثات!',
  },
];

const FAQ = () => {
  // JSON-LD Schemas
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.questionAr,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answerAr
      }
    }))
  }), []);

  const breadcrumbSchema = useMemo(() => ({
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
        "name": "الأسئلة الشائعة",
        "item": `${SITE_URL}/faq`
      }
    ]
  }), []);

  const organizationSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LingoArab",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "description": "منصة تعلم اللغة الإنجليزية للناطقين بالعربية"
  }), []);

  return (
    <div className="min-h-screen bg-background">
      <Header showBack showAuthButton />
      <Helmet>
        <title>الأسئلة الشائعة - LingoArab | تعلم الإنجليزية للناطقين بالعربية</title>
        <meta name="description" content="إجابات على الأسئلة الأكثر شيوعاً حول منصة LingoArab لتعلم اللغة الإنجليزية. تعرف على كيفية استخدام المنصة، المستويات المتاحة، وطرق التعلم." />
        <link rel="canonical" href={`${SITE_URL}/faq`} />
        
        {/* OpenGraph */}
        <meta property="og:title" content="الأسئلة الشائعة - Lingo Arab" />
        <meta property="og:description" content="إجابات على الأسئلة الأكثر شيوعاً حول منصة Lingo Arab لتعلم اللغة الإنجليزية" />
        <meta property="og:url" content={`${SITE_URL}/faq`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:site_name" content="Lingo Arab" />
        <meta property="og:locale" content="ar_SA" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="الأسئلة الشائعة - Lingo Arab" />
        <meta name="twitter:description" content="إجابات على الأسئلة الأكثر شيوعاً حول منصة Lingo Arab لتعلم اللغة الإنجليزية" />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        
        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            الأسئلة الشائعة
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول منصة LingoArab لتعلم اللغة الإنجليزية
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-right hover:no-underline py-5">
                    <span className="text-foreground font-medium text-base md:text-lg">
                      {item.questionAr}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {item.answerAr}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-sm text-muted-foreground/70 ltr-text" dir="ltr">
                        <span className="font-medium text-foreground/60">English:</span> {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center p-8 bg-muted/30 rounded-2xl border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-2">
            لم تجد إجابة لسؤالك؟
          </h2>
          <p className="text-muted-foreground">
            تواصل معنا وسنكون سعداء بمساعدتك
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default FAQ;

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

const SITE_URL = 'https://lingospanish.com';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is Lingo Spanish free to use?',
    answer: 'Yes! Lingo Spanish offers free access to all learning content. We believe quality education should be accessible to everyone. Premium features are available for those who want an ad-free experience.',
  },
  {
    question: 'Do I need an account to start learning?',
    answer: 'While you can explore some content without an account, creating a free account allows you to track your progress, earn achievements, maintain streaks, and compete on leaderboards.',
  },
  {
    question: 'What learning levels are available?',
    answer: 'We offer courses from complete beginner (A1) to proficiency (C2) levels. Each level is structured into units and lessons that progressively build your Spanish skills.',
  },
  {
    question: 'Can I learn at my own pace?',
    answer: 'Absolutely! Lingo Spanish is designed for self-paced learning. Set your daily goals (5, 10, or 15 minutes), and learn whenever it suits you. Your progress is saved automatically.',
  },
  {
    question: 'Is this platform suitable for beginners?',
    answer: 'Yes! Our platform is perfect for beginners. We start from the basics with clear English explanations, making it easy for English speakers to understand Spanish concepts from scratch.',
  },
  {
    question: 'Will more courses be added in the future?',
    answer: 'Yes! We are constantly working on new content. More lessons, exercises, and advanced levels are being developed. Stay tuned for updates!',
  },
];

const FAQ = () => {
  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
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
        "name": "Home",
        "item": SITE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "FAQ",
        "item": `${SITE_URL}/faq`
      }
    ]
  }), []);

  const organizationSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lingo Spanish",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "description": "Learn Spanish for British English speakers"
  }), []);

  return (
    <div className="min-h-screen bg-background">
      <Header showBack showAuthButton />
      <Helmet>
        <title>FAQ - Lingo Spanish | Learn Spanish for English Speakers</title>
        <meta name="description" content="Answers to the most frequently asked questions about Lingo Spanish. Learn how to use the platform, available levels, and learning methods." />
        <link rel="canonical" href={`${SITE_URL}/faq`} />
        
        <meta property="og:title" content="FAQ - Lingo Spanish" />
        <meta property="og:description" content="Answers to the most frequently asked questions about Lingo Spanish" />
        <meta property="og:url" content={`${SITE_URL}/faq`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:site_name" content="Lingo Spanish" />
        <meta property="og:locale" content="en_GB" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ - Lingo Spanish" />
        <meta name="twitter:description" content="Answers to the most frequently asked questions about Lingo Spanish" />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
        
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <main className="container mx-auto px-4 py-12 max-w-3xl">
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
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Answers to the most common questions about Lingo Spanish
          </p>
        </motion.div>

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
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-foreground font-medium text-base md:text-lg">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center p-8 bg-muted/30 rounded-2xl border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-2">
            Didn't find your answer?
          </h2>
          <p className="text-muted-foreground">
            Get in touch with us and we'll be happy to help
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default FAQ;

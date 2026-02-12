import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, HelpCircle, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import PageBackground from "@/components/PageBackground";

const SITE_URL = 'https://lingoarab.com';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { icon: Home, label: "الصفحة الرئيسية", path: "/", labelEn: "Home" },
    { icon: BookOpen, label: "الدورات", path: "/courses", labelEn: "Courses" },
    { icon: HelpCircle, label: "الأسئلة الشائعة", path: "/faq", labelEn: "FAQ" },
  ];

  return (
    <PageBackground>
      <Helmet>
        <title>الصفحة غير موجودة | Lingo Arab</title>
        <meta name="description" content="عذراً، الصفحة التي تبحث عنها غير موجودة. يمكنك العودة للصفحة الرئيسية أو تصفح دوراتنا." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={SITE_URL} />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center px-4" dir="rtl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto"
        >
          {/* 404 Number with gradient */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
            className="mb-6"
          >
            <span className="text-[120px] md:text-[160px] font-black leading-none bg-gradient-to-br from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
              404
            </span>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              الصفحة غير موجودة
            </h1>
            <p className="text-muted-foreground text-lg">
              عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2 ltr-text font-mono">
              {location.pathname}
            </p>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => navigate('/')}
              className="gap-2"
            >
              العودة للرئيسية
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-6 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground mb-4">
              أو جرّب أحد هذه الروابط:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {quickLinks.map((link) => (
                <Button
                  key={link.path}
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(link.path)}
                  className="gap-2"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </PageBackground>
  );
};

export default NotFound;

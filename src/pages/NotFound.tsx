import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, HelpCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import PageBackground from "@/components/PageBackground";

const SITE_URL = 'https://lingospanish.com';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const quickLinks = [
    { icon: Home, label: "Home", path: "/" },
    { icon: BookOpen, label: "Courses", path: "/courses" },
    { icon: HelpCircle, label: "FAQ", path: "/faq" },
  ];

  return (
    <PageBackground>
      <Helmet>
        <title>Page Not Found | Lingo Spanish</title>
        <meta name="description" content="Sorry, the page you're looking for doesn't exist. You can return to the homepage or browse our courses." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={SITE_URL} />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-md mx-auto">
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1, duration: 0.5, type: "spring" }} className="mb-6">
            <span className="text-[120px] md:text-[160px] font-black leading-none bg-gradient-to-br from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">404</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Page Not Found</h1>
            <p className="text-muted-foreground text-lg">Sorry, we couldn't find the page you're looking for</p>
            <p className="text-sm text-muted-foreground/70 mt-2 font-mono">{location.pathname}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-8">
            <Button variant="hero" size="xl" onClick={() => navigate('/')} className="gap-2">
              Back to Home <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Or try one of these links:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {quickLinks.map((link) => (
                <Button key={link.path} variant="outline" size="sm" onClick={() => navigate(link.path)} className="gap-2">
                  <link.icon className="w-4 h-4" />{link.label}
                </Button>
              ))}
            </div>
          </motion.div>
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </PageBackground>
  );
};

export default NotFound;

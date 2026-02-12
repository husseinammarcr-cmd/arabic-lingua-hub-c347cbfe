import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Cookie, X, ChevronDown, ChevronUp, Shield, BarChart3, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CONSENT_KEY = 'cookie-consent';

interface CookiePreferences {
  essential: boolean; // Always true, cannot be disabled
  analytics: boolean;
  advertising: boolean;
}

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  advertising: false,
};

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (!savedConsent) {
      // Small delay to prevent banner from showing immediately on page load
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
    setShowBanner(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytics: true,
      advertising: true,
    };
    savePreferences(allAccepted);
  };

  const handleDeclineAll = () => {
    // Only essential cookies (which are always on)
    savePreferences(defaultPreferences);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const cookieTypes = [
    {
      id: 'essential' as const,
      icon: Shield,
      title: 'ملفات تعريف الارتباط الضرورية',
      titleEn: 'Essential Cookies',
      description: 'ضرورية لعمل الموقع بشكل صحيح. تشمل تسجيل الدخول وحفظ التفضيلات.',
      required: true,
    },
    {
      id: 'analytics' as const,
      icon: BarChart3,
      title: 'ملفات التحليلات',
      titleEn: 'Analytics Cookies',
      description: 'تساعدنا على فهم كيفية استخدام الزوار للموقع لتحسين التجربة.',
      required: false,
    },
    {
      id: 'advertising' as const,
      icon: Megaphone,
      title: 'ملفات الإعلانات',
      titleEn: 'Advertising Cookies',
      description: 'تُستخدم لعرض إعلانات مخصصة بناءً على اهتماماتك.',
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
          dir="rtl"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="relative bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-elevated overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleDeclineAll}
                className="absolute top-3 left-3 p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground z-10"
                aria-label="إغلاق"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Main content */}
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pl-8 md:pl-0">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      نحن نستخدم ملفات تعريف الارتباط 🍪
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل استخدام الموقع. 
                      يمكنك قراءة المزيد في{' '}
                      <a 
                        href="/cookie-policy" 
                        className="text-primary hover:underline font-medium"
                      >
                        سياسة ملفات الارتباط
                      </a>
                      .
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSettings(!showSettings)}
                      className="flex-1 md:flex-none gap-1"
                    >
                      إعدادات
                      {showSettings ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDeclineAll}
                      className="flex-1 md:flex-none"
                    >
                      رفض الكل
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleAcceptAll}
                      className="flex-1 md:flex-none"
                    >
                      قبول الكل
                    </Button>
                  </div>
                </div>
              </div>

              {/* Settings Panel */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border bg-muted/30 p-4 md:p-6">
                      <div className="space-y-4">
                        {cookieTypes.map((cookie) => {
                          const Icon = cookie.icon;
                          return (
                            <div
                              key={cookie.id}
                              className="flex items-start gap-4 p-3 rounded-xl bg-background/50 border border-border/50"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className="font-semibold text-foreground text-sm">
                                    {cookie.title}
                                  </h4>
                                  {cookie.required && (
                                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                      مطلوب
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground ltr-text">
                                  {cookie.titleEn}
                                </p>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {cookie.description}
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <Switch
                                  checked={preferences[cookie.id]}
                                  onCheckedChange={(checked) => {
                                    if (!cookie.required) {
                                      setPreferences((prev) => ({
                                        ...prev,
                                        [cookie.id]: checked,
                                      }));
                                    }
                                  }}
                                  disabled={cookie.required}
                                  className={cookie.required ? 'opacity-70' : ''}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Save button */}
                      <div className="mt-4 flex justify-end">
                        <Button
                          variant="default"
                          size="sm"
                          onClick={handleSavePreferences}
                        >
                          حفظ التفضيلات
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Cookie, X, ChevronDown, ChevronUp, Shield, BarChart3, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CONSENT_KEY = 'cookie-consent';

interface CookiePreferences {
  essential: boolean;
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
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (!savedConsent) {
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
    savePreferences(defaultPreferences);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const cookieTypes = [
    {
      id: 'essential' as const,
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Necessary for the website to function properly. Includes login and saving preferences.',
      required: true,
    },
    {
      id: 'analytics' as const,
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use the website to improve the experience.',
      required: false,
    },
    {
      id: 'advertising' as const,
      icon: Megaphone,
      title: 'Advertising Cookies',
      description: 'Used to show personalised adverts based on your interests.',
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
        >
          <div className="container mx-auto max-w-4xl">
            <div className="relative bg-card/95 backdrop-blur-xl border border-border rounded-2xl shadow-elevated overflow-hidden">
              <button
                onClick={handleDeclineAll}
                className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground z-10"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex-1 pr-8 md:pr-0">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      We use cookies 🍪
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We use cookies to improve your experience and analyse site usage. 
                      You can read more in our{' '}
                      <a 
                        href="/cookie-policy" 
                        className="text-primary hover:underline font-medium"
                      >
                        Cookie Policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto flex-wrap">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSettings(!showSettings)}
                      className="flex-1 md:flex-none gap-1"
                    >
                      Settings
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
                      Decline All
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleAcceptAll}
                      className="flex-1 md:flex-none"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>

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
                                      Required
                                    </span>
                                  )}
                                </div>
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

                      <div className="mt-4 flex justify-end">
                        <Button
                          variant="default"
                          size="sm"
                          onClick={handleSavePreferences}
                        >
                          Save Preferences
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

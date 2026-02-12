import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Menu, 
  X, 
  Home, 
  BookOpen, 
  Layers, 
  Info, 
  HelpCircle,
  MessageSquare,
  FileText,
  LayoutDashboard, 
  User,
  Settings, 
  LogOut, 
  LogIn, 
  UserPlus,
  GraduationCap,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  requiresAuth?: boolean;
  hideWhenAuth?: boolean;
}

const publicNavItems: NavItem[] = [
  { label: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
  { label: 'Free Lessons', href: '/free-lessons', icon: <GraduationCap className="w-5 h-5" /> },
  { label: 'Courses', href: '/courses', icon: <BookOpen className="w-5 h-5" /> },
  { label: 'Levels', href: '/learn', icon: <Layers className="w-5 h-5" /> },
  { label: 'Blog', href: '/blog', icon: <FileText className="w-5 h-5" /> },
  { label: 'About', href: '/about', icon: <Info className="w-5 h-5" /> },
  { label: 'FAQ', href: '/faq', icon: <HelpCircle className="w-5 h-5" /> },
  { label: 'Contact', href: '/contact', icon: <MessageSquare className="w-5 h-5" /> },
];

const authNavItems: NavItem[] = [
  { label: 'Dashboard', href: '/app/courses', icon: <LayoutDashboard className="w-5 h-5" />, requiresAuth: true },
  { label: 'Profile', href: '/profile', icon: <User className="w-5 h-5" />, requiresAuth: true },
  { label: 'Certificate', href: '/certificate', icon: <Award className="w-5 h-5" />, requiresAuth: true },
  { label: 'Settings', href: '/settings', icon: <Settings className="w-5 h-5" />, requiresAuth: true },
];

const guestNavItems: NavItem[] = [
  { label: 'Login', href: '/auth', icon: <LogIn className="w-5 h-5" />, hideWhenAuth: true },
  { label: 'Sign Up', href: '/auth?mode=signup', icon: <UserPlus className="w-5 h-5" />, hideWhenAuth: true },
];

export interface SidebarNavRef {
  open: () => void;
}

const SidebarNav = forwardRef<SidebarNavRef>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
  }));

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    if (user && (href === '/courses' || href === '/learn')) {
      navigate('/app/courses');
    } else {
      navigate(href);
    }
    setIsOpen(false);
  };

  const handleLogout = async () => {
    await signOut();
    setIsOpen(false);
    navigate('/');
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className={cn(
              "fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw]",
              "bg-background border-l border-border shadow-2xl",
              "flex flex-col"
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-bold text-foreground">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className={cn(
                  "p-2 rounded-lg text-muted-foreground",
                  "hover:bg-muted hover:text-foreground transition-colors"
                )}
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
              <div className="space-y-1">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2">
                  Navigation
                </p>
                {publicNavItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left",
                      "transition-all duration-200",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <span className={cn(
                      "p-2 rounded-lg",
                      isActive(item.href) ? "bg-primary/20" : "bg-muted"
                    )}>
                      {item.icon}
                    </span>
                    <span className="flex-1">{item.label}</span>
                  </button>
                ))}
              </div>

              {user ? (
                <div className="space-y-1 pt-4 border-t border-border mt-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2">
                    My Account
                  </p>
                  {authNavItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left",
                        "transition-all duration-200",
                        isActive(item.href)
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      <span className={cn(
                        "p-2 rounded-lg",
                        isActive(item.href) ? "bg-primary/20" : "bg-muted"
                      )}>
                        {item.icon}
                      </span>
                      <span className="flex-1">{item.label}</span>
                    </button>
                  ))}
                  
                  <button
                    onClick={handleLogout}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left",
                      "text-destructive hover:bg-destructive/10 transition-all duration-200"
                    )}
                  >
                    <span className="p-2 rounded-lg bg-destructive/10">
                      <LogOut className="w-5 h-5" />
                    </span>
                    <span className="flex-1">Log Out</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-1 pt-4 border-t border-border mt-4">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-3 py-2">
                    Account
                  </p>
                  {guestNavItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left",
                        "transition-all duration-200",
                        "text-foreground hover:bg-muted"
                      )}
                    >
                      <span className="p-2 rounded-lg bg-muted">
                        {item.icon}
                      </span>
                      <span className="flex-1">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </nav>

            <div className="p-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                LingoSpanish © {new Date().getFullYear()}
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
});

SidebarNav.displayName = 'SidebarNav';

export default SidebarNav;

import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Star, LogOut, ChevronLeft, Shield, Menu } from 'lucide-react';
import { NotificationBell } from '@/components/NotificationBell';
import EmailVerificationBanner from '@/components/EmailVerificationBanner';
import ThemeToggle from '@/components/ThemeToggle';
import SidebarNav, { SidebarNavRef } from '@/components/SidebarNav';
import logo from '@/assets/logo.png';

interface HeaderProps {
  showBack?: boolean;
  showUserInfo?: boolean;
  showAuthButton?: boolean;
}

const Header = ({ showBack = false, showUserInfo = false, showAuthButton = false }: HeaderProps) => {
  const navigate = useNavigate();
  const { user, profile, signOut, isAdmin } = useAuth();
  const sidebarRef = useRef<SidebarNavRef>(null);

  return (
    <>
      {showUserInfo && <EmailVerificationBanner />}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border overflow-x-hidden">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ChevronLeft className="w-5 h-5 rotate-180" />
            </Button>
          )}
          <a href="/" className="flex items-center flex-shrink-0">
            <img 
              src={logo} 
              alt="LingoArab Logo" 
              className="h-16 sm:h-14 md:h-10 w-auto -my-3 md:-my-1"
            />
          </a>
          <a 
            href="/about" 
            className="text-muted-foreground hover:text-foreground transition-colors font-medium hidden sm:block"
          >
            من نحن
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          {showUserInfo && profile && (
            <>
              <div className="flex items-center gap-1 bg-xp/10 text-xp px-3 py-1.5 rounded-full font-bold">
                <Star className="w-4 h-4 fill-current" />
                <span>{profile.xp || 0}</span>
              </div>
              
            </>
          )}
          
          <ThemeToggle />
          
          {showUserInfo && user && (
            <>
              <NotificationBell />
              {isAdmin && (
                <Button variant="ghost" size="icon" onClick={() => navigate('/admin')}>
                  <Shield className="w-5 h-5" />
                </Button>
              )}
              <Button variant="ghost" size="icon" onClick={() => navigate('/profile')}>
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {profile?.name?.charAt(0) || 'U'}
                </div>
              </Button>
              <Button variant="ghost" size="icon" onClick={signOut}>
                <LogOut className="w-5 h-5" />
              </Button>
            </>
          )}
          
          {showAuthButton && !user && (
            <Button variant="outline" onClick={() => navigate('/auth')}>
              تسجيل الدخول
            </Button>
          )}
          
          {showAuthButton && user && (
            <Button variant="default" onClick={() => navigate('/app/courses')}>
              تابع التعلم
            </Button>
          )}
          
          <Button variant="ghost" size="icon" onClick={() => sidebarRef.current?.open()}>
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
    <SidebarNav ref={sidebarRef} />
    </>
  );
};

export default Header;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AnimatedCursor } from "@/components/animations/AnimatedCursor";
import { useLenis } from "@/hooks/useLenis";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import VerifyEmail from "./pages/VerifyEmail";
import Learn from "./pages/Learn";
import CoursesPublic from "./pages/CoursesPublic";
import AppCourses from "./pages/AppCourses";
import CourseLevel from "./pages/CourseLevel";
import CourseUnit from "./pages/CourseUnit";
import LessonPlayer from "./pages/LessonPlayer";
import PublicLessonPreview from "./pages/PublicLessonPreview";
import Onboarding from "./pages/Onboarding";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import PlacementTest from "./pages/PlacementTest";
import PlacementTestStart from "./pages/PlacementTestStart";
import PlacementTestResult from "./pages/PlacementTestResult";
import LeaderboardPage from "./pages/LeaderboardPage";
import ChallengesPage from "./pages/ChallengesPage";
import Notifications from "./pages/Notifications";
import Admin from "./pages/Admin";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import FreeLessons from "./pages/FreeLessons";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";
import VerifyCertificate from "./pages/VerifyCertificate";
import Certificate from "./pages/Certificate";

import CookieConsentBanner from "./components/CookieConsentBanner";

const queryClient = new QueryClient();

// Smooth scroll wrapper
const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useLenis();
  return <>{children}</>;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <SmoothScrollProvider>
              <AnimatedCursor />
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <CookieConsentBanner />
                
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />
                  <Route path="/learn" element={<Navigate to="/courses" replace />} />
                  <Route path="/units" element={<Navigate to="/courses" replace />} />
                  <Route path="/learning" element={<Navigate to="/courses" replace />} />
                  <Route path="/courses" element={<CoursesPublic />} />
                  
                  {/* Protected app routes */}
                  <Route path="/app/courses" element={<AppCourses />} />
                  <Route path="/app/courses/:level" element={<CourseLevel />} />
                  <Route path="/app/courses/:level/:unit" element={<CourseUnit />} />
                  
                  {/* Legacy routes - redirect to new paths */}
                  <Route path="/courses/:level" element={<Navigate to="/app/courses" replace />} />
                  <Route path="/courses/:level/:unit" element={<Navigate to="/app/courses" replace />} />
                  
                  <Route path="/lesson/:lessonId" element={<LessonPlayer />} />
                  <Route path="/preview/lesson/:lessonId" element={<PublicLessonPreview />} />
                  <Route path="/placement-test" element={<PlacementTest />} />
                  <Route path="/placement-test/start" element={<PlacementTestStart />} />
                  <Route path="/placement-test/result" element={<PlacementTestResult />} />
                  <Route path="/onboarding" element={<Onboarding />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  
                  <Route path="/leaderboard" element={<LeaderboardPage />} />
                  <Route path="/challenges" element={<ChallengesPage />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/free-lessons" element={<FreeLessons />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogArticle />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsAndConditions />} />
                  <Route path="/cookie-policy" element={<CookiePolicy />} />
                  <Route path="/certificate" element={<Certificate />} />
                  <Route path="/verify-certificate" element={<VerifyCertificate />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </SmoothScrollProvider>
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

import { cn } from '@/lib/utils';

interface PageBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const PageBackground = ({ children, className }: PageBackgroundProps) => {
  return (
    <div
      className={cn(
        "min-h-screen bg-repeat-y relative",
        // Desktop: cover width and centered
        "bg-[length:100%_auto] bg-top",
        className
      )}
      style={{ backgroundImage: "url('/images/learning-bg.png')" }}
    >
      {/* White overlay for text readability - slightly more transparent on mobile */}
      <div className="absolute inset-0 bg-white/60 md:bg-white/70 dark:bg-background/80 md:dark:bg-background/85" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground;

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import PageBackground from '@/components/PageBackground';
import { Target, Eye, Heart, Users, Award, BookOpen } from 'lucide-react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

interface SectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  delay?: number;
}

const Section = ({ title, children, icon, delay = 0 }: SectionProps) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeUpVariants}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className="mb-12"
  >
    <div className="flex items-center gap-3 mb-4">
      {icon && (
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
    </div>
    <div className="text-muted-foreground leading-relaxed text-lg">
      {children}
    </div>
  </motion.section>
);

const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUpVariants}
    transition={{ duration: 0.5, delay }}
    className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
  >
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <PageBackground>
      <div className="min-h-screen">
        <Header showAuthButton />
        
        <main className="container mx-auto px-4 py-12 md:py-20">
          {/* Hero Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h1 
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              About Us
            </motion.h1>
            <motion.p 
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              A comprehensive learning platform designed to help British English speakers master Spanish in an easy and enjoyable way
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Who We Are */}
            <Section title="Who We Are" icon={<Users className="w-5 h-5" />}>
              <p>
                We are a team of language teaching and educational technology specialists who believe that learning Spanish should be accessible to everyone in an easy and effective way. We founded this platform to deliver a unique learning experience tailored for English speakers.
              </p>
            </Section>

            {/* Our Vision */}
            <Section title="Our Vision" icon={<Eye className="w-5 h-5" />} delay={0.1}>
              <p>
                We strive to be the leading and most trusted platform for teaching Spanish to English speakers, by providing high-quality educational content that combines modern methods with cutting-edge technology.
              </p>
            </Section>

            {/* Our Mission */}
            <Section title="Our Mission" icon={<Target className="w-5 h-5" />} delay={0.2}>
              <p>
                Empowering millions of learners to master Spanish and open new horizons in education, work, and global communication. We deliver interactive lessons and customised content suited to all levels and ages.
              </p>
            </Section>

            {/* Why Choose Us */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why Choose Us?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  icon={<BookOpen className="w-6 h-6" />}
                  title="Content for English Speakers"
                  description="Lessons designed specifically for British English speakers, addressing common language challenges with clear explanations."
                  delay={0.4}
                />
                <FeatureCard
                  icon={<Target className="w-6 h-6" />}
                  title="Interactive Learning"
                  description="Diverse exercises and educational games that make learning fun and effective, with step-by-step progress tracking."
                  delay={0.5}
                />
                <FeatureCard
                  icon={<Award className="w-6 h-6" />}
                  title="Motivating Rewards System"
                  description="Earn XP points and achievement badges with every lesson you complete, and compete with other learners on the leaderboard."
                  delay={0.6}
                />
                <FeatureCard
                  icon={<Heart className="w-6 h-6" />}
                  title="Free for Everyone"
                  description="We believe education is a right for all, so we provide most of our content free of charge to all learners."
                  delay={0.7}
                />
              </div>
            </motion.div>

            {/* Who Is This For */}
            <Section title="Who Is This Platform For?" icon={<Users className="w-5 h-5" />} delay={0.4}>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                  <span>Students looking to improve their academic level in Spanish</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                  <span>Professionals seeking better career opportunities that require Spanish proficiency</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                  <span>Beginners who want to start their Spanish learning journey from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                  <span>Anyone looking to develop their language skills in a fun and structured way</span>
                </li>
              </ul>
            </Section>

            {/* CTA Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl p-8 md:p-12 border border-border/50"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Start Your Learning Journey Today
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join thousands of learners who are developing their Spanish skills with us every day
              </p>
              <a 
                href="/auth" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                Sign Up for Free
              </a>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Lingo Spanish. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </PageBackground>
  );
};

export default About;

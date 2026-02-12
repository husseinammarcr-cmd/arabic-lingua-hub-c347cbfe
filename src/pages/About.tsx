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
      <div className="min-h-screen" dir="rtl">
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
              من نحن
            </motion.h1>
            <motion.p 
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
            >
              منصة تعليمية متكاملة تهدف إلى تمكين الناطقين بالعربية من إتقان اللغة الإنجليزية بأسلوب سهل وممتع
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Who We Are */}
            <Section title="من نحن" icon={<Users className="w-5 h-5" />}>
              <p>
                نحن فريق من المتخصصين في تعليم اللغات والتكنولوجيا التعليمية، نؤمن بأن تعلم اللغة الإنجليزية يجب أن يكون متاحاً للجميع بطريقة سهلة وفعّالة. أسسنا هذه المنصة لنقدم تجربة تعليمية فريدة تراعي خصوصية المتعلم العربي وتحترم ثقافته.
              </p>
            </Section>

            {/* Our Vision */}
            <Section title="رؤيتنا" icon={<Eye className="w-5 h-5" />} delay={0.1}>
              <p>
                نسعى لأن نكون المنصة الأولى والأكثر موثوقية لتعليم اللغة الإنجليزية للناطقين بالعربية في العالم العربي، من خلال توفير محتوى تعليمي عالي الجودة يجمع بين الأساليب الحديثة والتقنيات المتطورة.
              </p>
            </Section>

            {/* Our Mission */}
            <Section title="مهمتنا" icon={<Target className="w-5 h-5" />} delay={0.2}>
              <p>
                تمكين الملايين من المتعلمين العرب من إتقان اللغة الإنجليزية وفتح آفاق جديدة أمامهم في التعليم والعمل والتواصل مع العالم. نعمل على تقديم دروس تفاعلية ومحتوى مخصص يناسب جميع المستويات والأعمار.
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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">لماذا تختارنا؟</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FeatureCard
                  icon={<BookOpen className="w-6 h-6" />}
                  title="محتوى مخصص للعرب"
                  description="دروس مصممة خصيصاً للناطقين بالعربية، تراعي التحديات اللغوية الشائعة وتقدم شروحات واضحة بالعربية."
                  delay={0.4}
                />
                <FeatureCard
                  icon={<Target className="w-6 h-6" />}
                  title="تعلم تفاعلي"
                  description="تمارين متنوعة وألعاب تعليمية تجعل التعلم ممتعاً وفعالاً، مع تتبع تقدمك خطوة بخطوة."
                  delay={0.5}
                />
                <FeatureCard
                  icon={<Award className="w-6 h-6" />}
                  title="نظام مكافآت محفز"
                  description="اكسب نقاط XP وشارات إنجاز مع كل درس تكمله، وتنافس مع متعلمين آخرين على لوحة المتصدرين."
                  delay={0.6}
                />
                <FeatureCard
                  icon={<Heart className="w-6 h-6" />}
                  title="مجاني ومتاح للجميع"
                  description="نؤمن بأن التعليم حق للجميع، لذلك نوفر معظم محتوانا مجاناً لجميع المتعلمين."
                  delay={0.7}
                />
              </div>
            </motion.div>

            {/* Who Is This For */}
            <Section title="لمن هذه المنصة؟" icon={<Users className="w-5 h-5" />} delay={0.4}>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                  <span>الطلاب الراغبين في تحسين مستواهم الأكاديمي في اللغة الإنجليزية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                  <span>المهنيون الباحثون عن فرص عمل أفضل تتطلب إتقان الإنجليزية</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                  <span>المبتدئون الذين يرغبون في بدء رحلة تعلم الإنجليزية من الصفر</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                  <span>أي شخص يسعى لتطوير مهاراته اللغوية بطريقة ممتعة ومنظمة</span>
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
                ابدأ رحلتك التعليمية اليوم
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                انضم إلى آلاف المتعلمين الذين يطورون مهاراتهم في اللغة الإنجليزية معنا كل يوم
              </p>
              <a 
                href="/auth" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                سجّل الآن مجاناً
              </a>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 py-8 mt-16">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} LingoArab. جميع الحقوق محفوظة.</p>
          </div>
        </footer>
      </div>
    </PageBackground>
  );
};

export default About;

import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import Header from '@/components/Header';

const CookiePolicy = () => {
  const sections = [
    {
      title: '١. مقدمة',
      content: `ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا. تساعدنا هذه الملفات على تحسين تجربتك وتقديم خدمات أفضل. توضح هذه السياسة كيفية استخدامنا لملفات تعريف الارتباط وخياراتك المتاحة.`
    },
    {
      title: '٢. أنواع ملفات تعريف الارتباط المستخدمة',
      content: `**ملفات تعريف الارتباط الأساسية:** هذه الملفات ضرورية لعمل الموقع بشكل صحيح. تتيح لك التنقل واستخدام الميزات الأساسية مثل تسجيل الدخول والوصول إلى المناطق الآمنة. لا يمكن للموقع العمل بشكل صحيح بدون هذه الملفات.

**ملفات تعريف الارتباط التحليلية:** تساعدنا هذه الملفات على فهم كيفية تفاعل الزوار مع موقعنا من خلال جمع معلومات مجهولة الهوية. نستخدم هذه البيانات لتحسين محتوى الموقع وتجربة المستخدم.`
    },
    {
      title: '٣. كيف نستخدم ملفات تعريف الارتباط',
      content: `نستخدم ملفات تعريف الارتباط للأغراض التالية:

**تذكر تفضيلاتك:** مثل إعدادات اللغة ووضع العرض المفضل لديك.

**الحفاظ على جلسة تسجيل الدخول:** لتبقى مسجلاً الدخول أثناء تصفحك للموقع.

**تحسين الأداء:** لفهم كيفية استخدام الزوار للموقع وتحسين تجربتهم.

**تتبع التقدم التعليمي:** لحفظ تقدمك في الدروس والتمارين.`
    },
    {
      title: '٤. ملفات تعريف الارتباط من جهات خارجية',
      content: `قد نستخدم خدمات من جهات خارجية تضع ملفات تعريف الارتباط الخاصة بها:

**Google Analytics:** لتحليل حركة المرور على الموقع وفهم سلوك المستخدمين. تساعدنا هذه البيانات على تحسين المحتوى والخدمات.

**Cloudflare:** لتوفير الحماية الأمنية وتسريع تحميل الموقع. قد تستخدم ملفات تعريف الارتباط للتعرف على المتصفحات الموثوقة.

**خدمات المصادقة:** عند تسجيل الدخول عبر حسابات خارجية مثل Google، قد يتم استخدام ملفات تعريف الارتباط الخاصة بهذه الخدمات.`
    },
    {
      title: '٥. إدارة ملفات تعريف الارتباط',
      content: `يمكنك التحكم في ملفات تعريف الارتباط بعدة طرق:

**إعدادات المتصفح:** يمكنك ضبط متصفحك لرفض جميع ملفات تعريف الارتباط أو إعلامك عند إرسالها. تختلف الخطوات حسب المتصفح المستخدم.

**حذف ملفات تعريف الارتباط:** يمكنك حذف ملفات تعريف الارتباط المخزنة على جهازك في أي وقت من إعدادات المتصفح.

**ملاحظة مهمة:** قد يؤثر تعطيل ملفات تعريف الارتباط على وظائف الموقع وقد لا تتمكن من استخدام بعض الميزات.`
    },
    {
      title: '٦. تحديثات السياسة',
      content: `قد نقوم بتحديث سياسة ملفات تعريف الارتباط من وقت لآخر لتعكس التغييرات في ممارساتنا أو لأسباب تشغيلية أو قانونية. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ "آخر تحديث". ننصحك بمراجعة هذه السياسة بشكل دوري.`
    },
    {
      title: '٧. تواصل معنا',
      content: `إذا كانت لديك أي أسئلة حول سياسة ملفات تعريف الارتباط الخاصة بنا، يمكنك التواصل معنا عبر:

**البريد الإلكتروني:** privacy@lingoarab.com

**صفحة التواصل:** يمكنك زيارة صفحة "تواصل معنا" على موقعنا لإرسال استفسارك.`
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <Header showBack showAuthButton />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Cookie className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            سياسة ملفات تعريف الارتباط
          </h1>
          <p className="text-muted-foreground">
            آخر تحديث: {new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Sections */}
        <div className="max-w-3xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border/50"
            >
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                  {index + 1}
                </span>
                {section.title.replace(/^[٠-٩]+\.\s*/, '')}
              </h2>
              <div className="text-muted-foreground leading-relaxed space-y-3">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex}>
                    {paragraph.split('**').map((part, partIndex) => 
                      partIndex % 2 === 1 ? (
                        <strong key={partIndex} className="text-foreground font-semibold">{part}</strong>
                      ) : (
                        <span key={partIndex}>{part}</span>
                      )
                    )}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            ↑ العودة للأعلى
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default CookiePolicy;

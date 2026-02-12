import { motion } from 'framer-motion';
import { Cookie } from 'lucide-react';
import Header from '@/components/Header';

const CookiePolicy = () => {
  const sections = [
    {
      title: '1. Introduction',
      content: `Cookies are small text files stored on your device when you visit our website. These files help us improve your experience and provide better services. This policy explains how we use cookies and what choices are available to you.`
    },
    {
      title: '2. Types of Cookies We Use',
      content: `**Essential Cookies:** These cookies are necessary for the website to function properly. They allow you to navigate and use basic features such as logging in and accessing secure areas. The website cannot function properly without these cookies.

**Analytics Cookies:** These cookies help us understand how visitors interact with our website by collecting anonymous information. We use this data to improve website content and user experience.`
    },
    {
      title: '3. How We Use Cookies',
      content: `We use cookies for the following purposes:

**Remembering your preferences:** Such as language settings and your preferred display mode.

**Maintaining your login session:** To keep you logged in as you browse the website.

**Improving performance:** To understand how visitors use the website and improve their experience.

**Tracking learning progress:** To save your progress in lessons and exercises.`
    },
    {
      title: '4. Third-Party Cookies',
      content: `We may use third-party services that set their own cookies:

**Google Analytics:** To analyse website traffic and understand user behaviour. This data helps us improve content and services.

**Cloudflare:** To provide security protection and speed up website loading. Cookies may be used to recognise trusted browsers.

**Authentication Services:** When logging in via external accounts such as Google, cookies from those services may be used.`
    },
    {
      title: '5. Managing Cookies',
      content: `You can control cookies in several ways:

**Browser Settings:** You can set your browser to reject all cookies or notify you when they are sent. The steps vary depending on the browser used.

**Deleting Cookies:** You can delete cookies stored on your device at any time from your browser settings.

**Important Note:** Disabling cookies may affect website functionality and you may not be able to use some features.`
    },
    {
      title: '6. Policy Updates',
      content: `We may update this Cookie Policy from time to time to reflect changes in our practices or for operational or legal reasons. Any changes will be posted on this page with an updated "Last Updated" date. We recommend reviewing this policy periodically.`
    },
    {
      title: '7. Contact Us',
      content: `If you have any questions about our Cookie Policy, you can contact us via:

**Email:** privacy@lingospanish.com

**Contact Page:** You can visit our "Contact Us" page on our website to send your enquiry.`
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showBack showAuthButton />
      
      <main className="container mx-auto px-4 py-8 md:py-12">
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
            Cookie Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

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
                {section.title.replace(/^[0-9]+\.\s*/, '')}
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
            ↑ Back to Top
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default CookiePolicy;

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Header from '@/components/Header';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Introduction',
      content: `Welcome to Lingo Spanish. We value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our learning platform.

By using the Lingo Spanish platform, you consent to the collection and use of information in accordance with this policy. We reserve the right to update this policy from time to time, and we will notify you of any material changes.`,
    },
    {
      title: 'Information We Collect',
      content: `We collect different types of information to provide and improve our services:

**Personal Information:**
• Name and email address when creating your account
• Profile picture (optional)
• Country or region

**Usage Information:**
• Your progress in lessons and levels
• Experience points (XP) and achievements earned
• Daily learning streak
• Time spent learning

**Technical Information:**
• Device type and operating system
• Browser type
• IP address (anonymised)`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect for the following purposes:

• **Providing the service:** To create and manage your account and track your learning progress
• **Personalising the experience:** To deliver content suited to your level and goals
• **Communication:** To send important notifications and updates about your account
• **Improving the platform:** To analyse usage patterns and improve the learning experience
• **Security:** To protect your account and prevent unauthorised use
• **Leaderboard:** To display your ranking compared to other learners (display name and XP only)`,
    },
    {
      title: 'Cookies and Tracking',
      content: `We use cookies and similar technologies to improve your experience:

**Essential Cookies:**
Used to keep you logged in and remember your basic preferences.

**Analytics Cookies:**
Help us understand how learners use the platform to improve the service.

**Local Storage:**
We use your browser's local storage to save your preferences and temporary progress.

You can control cookies through your browser settings, but disabling them may affect some platform functionality.`,
    },
    {
      title: 'Data Security',
      content: `We take strict security measures to protect your information:

• **Encryption:** All transmitted data is encrypted using SSL/TLS protocol
• **Access Control:** Access to your data is restricted to authorised personnel only
• **Secure Authentication:** We use modern authentication systems to protect your account
• **Backup:** We maintain regular backups to ensure the safety of your data
• **Monitoring:** We continuously monitor our systems to detect any suspicious activity

Despite our efforts, 100% data security cannot be guaranteed over the internet. We encourage you to use a strong password and not share it.`,
    },
    {
      title: 'User Rights',
      content: `You have the following rights regarding your personal data:

• **Access:** You can request a copy of the personal data we hold about you
• **Correction:** You can update or correct your information through your profile settings
• **Deletion:** You can request the deletion of your account and all associated data
• **Objection:** You can object to the processing of your data for certain purposes
• **Data Portability:** You can request the transfer of your data in a readable format

To exercise any of these rights, please contact us via our Contact page.`,
    },
    {
      title: 'Third-Party Services',
      content: `We may use trusted third-party services to help provide our services:

• **Hosting Services:** For secure data storage
• **Authentication Services:** For secure login (e.g. Google)
• **Analytics Services:** To understand platform usage and improve it
• **Email Services:** To send notifications and communicate with you

We carefully choose our partners and ensure they comply with privacy and security standards. We do not sell or rent your personal information to any third party.`,
    },
    {
      title: 'Contact Information',
      content: `If you have any questions or enquiries about this Privacy Policy or our data practices, you can contact us:

**Email:** privacy@lingospanish.com

**Contact Page:** You can visit our "Contact Us" page on our website

We will do our best to respond to your enquiries within 48 working hours.

---

**Last Updated:** January 2026

Thank you for your trust in Lingo Spanish, and we look forward to helping you on your Spanish learning journey.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header showBack showAuthButton />

      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-lg">
            We are committed to protecting your privacy and personal data
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm"
            >
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
                  {index + 1}
                </span>
                {section.title}
              </h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content.split('**').map((part, i) =>
                  i % 2 === 1 ? (
                    <strong key={i} className="text-foreground font-medium">
                      {part}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-primary hover:underline text-sm"
          >
            ↑ Back to Top
          </button>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

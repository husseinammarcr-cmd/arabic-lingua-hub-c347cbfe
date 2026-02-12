import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Header from '@/components/Header';

const TermsAndConditions = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By using the Lingo Spanish platform, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, please do not use the platform.

These terms apply to all users, including visitors and registered users. We reserve the right to modify these terms at any time, and you will be notified of any material changes.

Your continued use of the platform after changes are published constitutes acceptance of the updated terms.`,
    },
    {
      title: 'User Accounts',
      content: `**Account Creation:**
• Information provided during registration must be accurate and truthful
• You are responsible for maintaining the confidentiality of your login credentials
• You must be at least 13 years old to use the platform
• Each account is intended for a single user only

**Account Security:**
• You are responsible for all activities that occur through your account
• You must notify us immediately of any unauthorised use of your account
• We reserve the right to suspend or terminate accounts that violate these terms`,
    },
    {
      title: 'Acceptable Use',
      content: `When using Lingo Spanish, you agree to:

**What you should do:**
• Use the platform for legitimate educational purposes only
• Respect the rights of other users
• Maintain a positive learning environment

**What is prohibited:**
• Sharing offensive or inappropriate content
• Attempting to hack or disrupt platform systems
• Using the platform for any illegal activity
• Copying or distributing platform content without permission
• Creating multiple accounts or impersonating others
• Using automated software to interact with the platform`,
    },
    {
      title: 'Intellectual Property',
      content: `**Lingo Spanish Rights:**
All content available on the platform, including text, images, graphics, icons, audio recordings, and software, is protected by intellectual property laws.

**What you are permitted to do:**
• Use the content for personal learning only
• Share links to the platform with others

**What you are not permitted to do:**
• Copy or reproduce educational content
• Sell or distribute any part of the content
• Remove copyright or ownership marks
• Use our trademark without written permission`,
    },
    {
      title: 'Account Termination',
      content: `**Your right to terminate:**
You can terminate your account at any time through your profile settings or by contacting us.

**Our right to terminate:**
We reserve the right to suspend or terminate your account in the following cases:
• Violation of terms of use
• Abusive or destructive behaviour
• Fraud or providing misleading information
• Prolonged inactivity (more than 24 months)

**After termination:**
• Your personal data will be deleted in accordance with our Privacy Policy
• You will not be able to recover your progress or achievements
• Some data may be retained for legal purposes`,
    },
    {
      title: 'Limitation of Liability',
      content: `**Disclaimer:**
The Lingo Spanish platform is provided "as is" without any express or implied warranties. We do not guarantee:
• That the service will always be available or error-free
• The accuracy or completeness of all educational content
• Achievement of specific learning outcomes

**Limitations of liability:**
We shall not be liable for:
• Any direct or indirect damages resulting from use of the platform
• Loss of data or service interruption
• Actions of other users

**Exceptions:**
These limitations do not apply in cases where the law does not permit.`,
    },
    {
      title: 'Changes to Terms',
      content: `We reserve the right to modify these terms at any time. When changes are made:

• We will update the "Last Updated" date at the bottom of this page
• We will notify registered users of material changes
• Changes become effective immediately upon publication on the platform

**Your responsibility:**
We recommend reviewing these terms periodically. Your continued use of the platform after changes are published constitutes acceptance of the updated terms.

If you do not agree with the new changes, you may terminate your account.`,
    },
    {
      title: 'Contact Information',
      content: `If you have any questions or enquiries about these terms of use, you can contact us:

**Email:** legal@lingospanish.com

**Contact Page:** You can visit our "Contact Us" page on our website

We will do our best to respond to your enquiries as soon as possible.

---

**Last Updated:** January 2026

Thank you for choosing Lingo Spanish to learn Spanish!`,
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
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Terms of Use
          </h1>
          <p className="text-muted-foreground text-lg">
            Please read these terms carefully before using the platform
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

export default TermsAndConditions;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Send, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'الاسم يجب أن يكون حرفين على الأقل' })
    .max(100, { message: 'الاسم يجب أن يكون أقل من 100 حرف' }),
  email: z
    .string()
    .trim()
    .email({ message: 'يرجى إدخال بريد إلكتروني صحيح' })
    .max(255, { message: 'البريد الإلكتروني يجب أن يكون أقل من 255 حرف' }),
  subject: z
    .string()
    .trim()
    .min(5, { message: 'الموضوع يجب أن يكون 5 أحرف على الأقل' })
    .max(200, { message: 'الموضوع يجب أن يكون أقل من 200 حرف' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'الرسالة يجب أن تكون 10 أحرف على الأقل' })
    .max(2000, { message: 'الرسالة يجب أن تكون أقل من 2000 حرف' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        });

      if (error) throw error;
      
      setIsSubmitted(true);
      toast.success('تم إرسال رسالتك بنجاح!');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header showBack showAuthButton />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            تواصل معنا
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            نسعد بتواصلك معنا! أرسل لنا رسالتك وسنرد عليك في أقرب وقت ممكن
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-6">
                    <CheckCircle2 className="w-10 h-10 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">
                    تم إرسال رسالتك بنجاح!
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.
                  </p>
                  <Button onClick={handleSendAnother} variant="outline">
                    إرسال رسالة أخرى
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>الاسم الكامل</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="أدخل اسمك"
                                className="bg-background"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>البريد الإلكتروني</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="example@email.com"
                                className="bg-background ltr-text"
                                dir="ltr"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>الموضوع</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="موضوع الرسالة"
                              className="bg-background"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>الرسالة</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="اكتب رسالتك هنا..."
                              className="bg-background min-h-[150px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          جاري الإرسال...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          إرسال الرسالة
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>

          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Email Card */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    البريد الإلكتروني
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    للاستفسارات والدعم الفني
                  </p>
                  <a
                    href="mailto:support@lingoarab.com"
                    className="text-primary hover:underline text-sm ltr-text"
                    dir="ltr"
                  >
                    support@lingoarab.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    وقت الاستجابة
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    نرد على جميع الرسائل خلال 24-48 ساعة عمل
                  </p>
                </div>
              </div>
            </div>

            {/* Info Note */}
            <div className={cn(
              "p-4 rounded-xl border",
              "bg-muted/30 border-border"
            )}>
              <p className="text-sm text-muted-foreground leading-relaxed">
                💡 للحصول على رد أسرع، يرجى تضمين تفاصيل واضحة عن استفسارك أو المشكلة التي تواجهها.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Contact;

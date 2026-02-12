-- Create blog categories table
CREATE TABLE public.blog_categories (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name_ar text NOT NULL,
    name_en text NOT NULL,
    slug text UNIQUE NOT NULL,
    color text DEFAULT '#3b82f6',
    created_at timestamp with time zone DEFAULT now()
);

-- Create blog articles table
CREATE TABLE public.blog_articles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title_ar text NOT NULL,
    title_en text NOT NULL,
    slug text UNIQUE NOT NULL,
    excerpt_ar text NOT NULL,
    excerpt_en text NOT NULL,
    content_ar text NOT NULL,
    content_en text NOT NULL,
    featured_image text,
    category_id uuid REFERENCES public.blog_categories(id) ON DELETE SET NULL,
    author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
    author_name text NOT NULL DEFAULT 'فريق LingoArab',
    is_published boolean DEFAULT false,
    views_count integer DEFAULT 0,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    published_at timestamp with time zone
);

-- Enable RLS
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_articles ENABLE ROW LEVEL SECURITY;

-- RLS policies for categories
CREATE POLICY "Anyone can view categories"
ON public.blog_categories FOR SELECT
USING (true);

CREATE POLICY "Admins can manage categories"
ON public.blog_categories FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS policies for articles
CREATE POLICY "Anyone can view published articles"
ON public.blog_articles FOR SELECT
USING (is_published = true);

CREATE POLICY "Admins can view all articles"
ON public.blog_articles FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can manage articles"
ON public.blog_articles FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create updated_at trigger for articles
CREATE TRIGGER update_blog_articles_updated_at
BEFORE UPDATE ON public.blog_articles
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Seed initial categories
INSERT INTO public.blog_categories (name_ar, name_en, slug, color) VALUES
('نصائح التعلم', 'Learning Tips', 'learning-tips', '#10b981'),
('قواعد اللغة', 'Grammar', 'grammar', '#8b5cf6'),
('المفردات', 'Vocabulary', 'vocabulary', '#f59e0b'),
('الثقافة العربية', 'Arabic Culture', 'culture', '#ec4899'),
('قصص نجاح', 'Success Stories', 'success-stories', '#06b6d4');

-- Seed sample articles
INSERT INTO public.blog_articles (title_ar, title_en, slug, excerpt_ar, excerpt_en, content_ar, content_en, category_id, is_published, published_at)
SELECT 
    '10 نصائح ذهبية لتعلم اللغة العربية بسرعة',
    '10 Golden Tips to Learn Arabic Quickly',
    'learn-arabic-quickly',
    'اكتشف أفضل الطرق والاستراتيجيات لتعلم اللغة العربية بشكل أسرع وأكثر فعالية.',
    'Discover the best methods and strategies to learn Arabic faster and more effectively.',
    '# 10 نصائح ذهبية لتعلم اللغة العربية

## 1. الممارسة اليومية
خصص وقتاً يومياً للتعلم، حتى لو كان 15 دقيقة فقط. الاستمرارية أهم من المدة.

## 2. استخدم التطبيقات التعليمية
استفد من التطبيقات مثل LingoArab للتعلم التفاعلي.

## 3. استمع للمحتوى العربي
شاهد الأفلام والمسلسلات العربية لتحسين مهارات الاستماع.

## 4. تحدث مع الناطقين الأصليين
ابحث عن شركاء للمحادثة لممارسة ما تعلمته.

## 5. اقرأ بصوت عالٍ
هذا يساعد في تحسين النطق والطلاقة.

## 6. احتفظ بدفتر مفردات
دوّن الكلمات الجديدة وراجعها بانتظام.

## 7. تعلم الجذور
فهم جذور الكلمات العربية يسهل تعلم مفردات جديدة.

## 8. لا تخف من الأخطاء
الأخطاء جزء طبيعي من عملية التعلم.

## 9. حدد أهدافاً واقعية
ضع أهدافاً قابلة للتحقيق واحتفل بإنجازاتك.

## 10. استمتع بالرحلة
اجعل التعلم ممتعاً باختيار مواضيع تهمك.',
    '# 10 Golden Tips to Learn Arabic

## 1. Daily Practice
Dedicate time daily to learning, even if just 15 minutes. Consistency matters more than duration.

## 2. Use Educational Apps
Take advantage of apps like LingoArab for interactive learning.

## 3. Listen to Arabic Content
Watch Arabic movies and series to improve listening skills.

## 4. Speak with Native Speakers
Find conversation partners to practice what you have learned.

## 5. Read Aloud
This helps improve pronunciation and fluency.

## 6. Keep a Vocabulary Notebook
Write down new words and review them regularly.

## 7. Learn Root Words
Understanding Arabic root words makes learning new vocabulary easier.

## 8. Do not Fear Mistakes
Mistakes are a natural part of the learning process.

## 9. Set Realistic Goals
Set achievable goals and celebrate your accomplishments.

## 10. Enjoy the Journey
Make learning fun by choosing topics that interest you.',
    id,
    true,
    now()
FROM public.blog_categories WHERE slug = 'learning-tips';
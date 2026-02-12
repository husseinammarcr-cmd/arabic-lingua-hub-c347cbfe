import { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Eye, Tag, Share2, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import Header from '@/components/Header';
import PageBackground from '@/components/PageBackground';
import { useArticle, useIncrementViews, useArticles } from '@/hooks/useBlog';

const SITE_URL = 'https://lingoarab.com';

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: article, isLoading, error } = useArticle(slug || '');
  const { data: relatedArticles } = useArticles(article?.category?.slug);
  const incrementViews = useIncrementViews();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (article?.id) {
      incrementViews.mutate(article.id);
    }
  }, [article?.id]);

  const shareUrl = window.location.href;
  const shareTitle = article?.title_ar || '';

  const handleShare = (platform: string) => {
    const urls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('تم نسخ الرابط');
      setTimeout(() => setCopied(false), 2000);
    } else {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderMarkdown = (content: string) => {
    // Simple markdown to HTML conversion
    return content
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('# ')) {
          return <h1 key={i} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={i} className="text-2xl font-bold mt-6 mb-3">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={i} className="text-xl font-bold mt-4 mb-2">{line.slice(4)}</h3>;
        }
        if (line.trim() === '') {
          return <br key={i} />;
        }
        return <p key={i} className="mb-4 leading-relaxed text-muted-foreground">{line}</p>;
      });
  };

  // Generate Article Schema - must be before any early returns
  const articleSchema = useMemo(() => {
    if (!article) return null;
    const wordCount = article.content_ar?.split(/\s+/).length || 0;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title_ar,
      "alternativeHeadline": article.title_en,
      "description": article.excerpt_ar,
      "image": {
        "@type": "ImageObject",
        "url": article.featured_image || `${SITE_URL}/og-image.png`,
        "width": 1200,
        "height": 630
      },
      "datePublished": article.published_at || article.created_at,
      "dateModified": article.updated_at || article.created_at,
      "author": {
        "@type": "Person",
        "name": article.author_name,
        "url": SITE_URL
      },
      "publisher": {
        "@type": "Organization",
        "name": "Lingo Arab",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/logo.png`,
          "width": 512,
          "height": 512
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${SITE_URL}/blog/${article.slug}`
      },
      "inLanguage": "ar",
      "wordCount": wordCount,
      "articleSection": article.category?.name_ar || "تعلم الإنجليزية",
      "keywords": [
        "تعلم الإنجليزية",
        "اللغة الإنجليزية",
        "LingoArab",
        article.category?.name_ar
      ].filter(Boolean).join(", "),
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".prose"]
      },
      "isAccessibleForFree": true,
      "copyrightHolder": {
        "@type": "Organization",
        "name": "Lingo Arab"
      },
      "copyrightYear": new Date(article.published_at || article.created_at).getFullYear()
    };
  }, [article]);

  // Generate Breadcrumb Schema - must be before any early returns
  const breadcrumbSchema = useMemo(() => {
    if (!article) return null;
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": SITE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "المدونة",
          "item": `${SITE_URL}/blog`
        },
        ...(article.category ? [{
          "@type": "ListItem",
          "position": 3,
          "name": article.category.name_ar,
          "item": `${SITE_URL}/blog?category=${article.category.slug}`
        }] : []),
        {
          "@type": "ListItem",
          "position": article.category ? 4 : 3,
          "name": article.title_ar,
          "item": `${SITE_URL}/blog/${article.slug}`
        }
      ]
    };
  }, [article]);

  const filteredRelated = relatedArticles?.filter(a => a.id !== article?.id).slice(0, 3);

  if (isLoading) {
    return (
      <PageBackground>
        <Header showBack showUserInfo />
        <main className="container mx-auto px-4 py-8">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-64 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </main>
      </PageBackground>
    );
  }

  if (error || !article) {
    return (
      <PageBackground>
        <Header showBack showUserInfo />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
          <Link to="/blog">
            <Button>
              العودة للمدونة
              <ArrowRight className="w-4 h-4 mr-2" />
            </Button>
          </Link>
        </main>
      </PageBackground>
    );
  }


  return (
    <PageBackground>
      <Helmet>
        <title>{article.title_ar} - Lingo Arab</title>
        <meta name="description" content={article.excerpt_ar} />
        <link rel="canonical" href={`${SITE_URL}/blog/${article.slug}`} />
        
        {/* OpenGraph */}
        <meta property="og:title" content={article.title_ar} />
        <meta property="og:description" content={article.excerpt_ar} />
        <meta property="og:url" content={`${SITE_URL}/blog/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.featured_image || `${SITE_URL}/og-image.png`} />
        <meta property="og:site_name" content="Lingo Arab" />
        <meta property="og:locale" content="ar_SA" />
        <meta property="article:published_time" content={article.published_at || article.created_at} />
        <meta property="article:modified_time" content={article.updated_at || article.created_at} />
        <meta property="article:author" content={article.author_name} />
        {article.category && <meta property="article:section" content={article.category.name_ar} />}
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title_ar} />
        <meta name="twitter:description" content={article.excerpt_ar} />
        <meta name="twitter:image" content={article.featured_image || `${SITE_URL}/og-image.png`} />
        
        {/* JSON-LD Schemas */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      
      <Header showBack showUserInfo />
      
      <main className="container mx-auto px-4 py-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/blog" className="hover:text-primary transition-colors">المدونة</Link>
            <span>/</span>
            {article.category && (
              <>
                <Link 
                  to={`/blog?category=${article.category.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {article.category.name_ar}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-foreground truncate max-w-[200px]">{article.title_ar}</span>
          </nav>

          {/* Category Badge */}
          {article.category && (
            <Badge 
              className="mb-4"
              style={{ backgroundColor: article.category.color }}
            >
              <Tag className="w-3 h-3 ml-1" />
              {article.category.name_ar}
            </Badge>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            {article.title_ar}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author_name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(article.published_at || article.created_at)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{article.views_count} مشاهدة</span>
            </div>
          </div>

          {/* Featured Image */}
          {article.featured_image && (
            <div className="mb-8 rounded-2xl overflow-hidden">
              <img 
                src={article.featured_image} 
                alt={article.title_ar}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Share Buttons */}
          <div className="flex items-center gap-3 mb-8 p-4 bg-muted/50 rounded-xl">
            <Share2 className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">شارك المقال:</span>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 rounded-full bg-[#1877F2] hover:bg-[#1877F2]/90 border-0"
                onClick={() => handleShare('facebook')}
              >
                <Facebook className="w-4 h-4 text-white" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 rounded-full bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 border-0"
                onClick={() => handleShare('twitter')}
              >
                <Twitter className="w-4 h-4 text-white" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 rounded-full bg-[#0A66C2] hover:bg-[#0A66C2]/90 border-0"
                onClick={() => handleShare('linkedin')}
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="h-9 w-9 rounded-full"
                onClick={() => handleShare('copy')}
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {renderMarkdown(article.content_ar)}
          </div>

          {/* Related Articles */}
          {filteredRelated && filteredRelated.length > 0 && (
            <div className="mt-16 pt-8 border-t">
              <h2 className="text-2xl font-bold mb-6">مقالات ذات صلة</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {filteredRelated.map((related) => (
                  <Link 
                    key={related.id} 
                    to={`/blog/${related.slug}`}
                    className="group"
                  >
                    <div className="bg-card rounded-xl p-4 border transition-all hover:shadow-lg hover:border-primary/50">
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {related.title_ar}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {related.excerpt_ar}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.article>
      </main>
    </PageBackground>
  );
};

export default BlogArticle;

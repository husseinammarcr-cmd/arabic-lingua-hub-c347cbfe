import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Eye, ArrowRight, BookOpen, Tag, Loader2, Filter } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import PageBackground from '@/components/PageBackground';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useArticles, useCategories } from '@/hooks/useBlog';

const SITE_URL = 'https://lingospanish.com';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lingo Spanish",
  "url": SITE_URL,
  "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png`, "width": 512, "height": 512 },
  "description": "Learn Spanish online for free — designed for English speakers"
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Lingo Spanish Blog — Spanish Learning Articles",
  "description": "Discover articles and tips to improve your Spanish language skills",
  "url": `${SITE_URL}/blog`,
  "inLanguage": "en",
  "isPartOf": { "@type": "WebSite", "name": "Lingo Spanish", "url": SITE_URL },
  "publisher": { "@type": "Organization", "name": "Lingo Spanish", "url": SITE_URL }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` }
  ]
};

const POSTS_PER_PAGE = 6;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categorySlug = searchParams.get('category') || undefined;
  const [currentPage, setCurrentPage] = useState(1);

  const { data: articles, isLoading: articlesLoading } = useArticles(categorySlug);
  const { data: categories, isLoading: categoriesLoading } = useCategories();

  const totalPages = Math.ceil((articles?.length || 0) / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = articles?.slice(startIndex, startIndex + POSTS_PER_PAGE) || [];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Lingo Spanish Articles",
    "numberOfItems": articles?.length || 0,
    "itemListElement": currentPosts.map((article, index) => ({
      "@type": "ListItem",
      "position": startIndex + index + 1,
      "item": {
        "@type": "Article",
        "headline": article.title_ar,
        "description": article.excerpt_ar,
        "url": `${SITE_URL}/blog/${article.slug}`,
        "image": article.featured_image || `${SITE_URL}/og-image.png`,
        "datePublished": article.published_at || article.created_at,
        "author": { "@type": "Person", "name": article.author_name },
        "publisher": { "@type": "Organization", "name": "Lingo Spanish", "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } }
      }
    }))
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleCategoryFilter = (slug?: string) => {
    if (slug) {
      setSearchParams({ category: slug });
    } else {
      setSearchParams({});
    }
    setCurrentPage(1);
  };

  const activeCategory = categories?.find(c => c.slug === categorySlug);

  return (
    <PageBackground>
      <Helmet>
        <title>Blog — Lingo Spanish | Spanish Learning Articles</title>
        <meta name="description" content="Discover articles and tips to improve your Spanish language skills. We share the best strategies and resources for a successful learning journey." />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        
        <meta property="og:title" content="Blog — Lingo Spanish" />
        <meta property="og:description" content="Discover articles and tips to improve your Spanish language skills" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:site_name" content="Lingo Spanish" />
        <meta property="og:locale" content="en_GB" />
        
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />

        <main className="container mx-auto px-4 py-12 pt-24">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Learning Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover articles and tips to improve your Spanish language skills. We share
              the best strategies and resources for a successful learning journey.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Categories:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={!categorySlug ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryFilter()}
                className="rounded-full"
              >
                All
              </Button>
              {categoriesLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                categories?.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={categorySlug === cat.slug ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryFilter(cat.slug)}
                    className="rounded-full gap-2"
                    style={categorySlug === cat.slug ? { backgroundColor: cat.color } : { borderColor: cat.color }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                    {cat.name_ar}
                  </Button>
                ))
              )}
            </div>
          </motion.section>

          {activeCategory && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6 p-4 bg-muted/50 rounded-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5" style={{ color: activeCategory.color }} />
                <span>Showing articles in category: <strong>{activeCategory.name_ar}</strong></span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => handleCategoryFilter()}>
                Clear Filter
              </Button>
            </motion.div>
          )}

          <section className="mb-12">
            {articlesLoading ? (
              <div className="flex justify-center py-16">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
              </div>
            ) : currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentPosts.map((article, index) => (
                  <motion.div
                    key={article.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={fadeUpVariants}
                  >
                    <Link to={`/blog/${article.slug}`}>
                      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
                        <div className="relative h-48 overflow-hidden bg-muted">
                          {article.featured_image ? (
                            <img
                              src={article.featured_image}
                              alt={article.title_ar}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <BookOpen className="w-16 h-16 text-muted-foreground/30" />
                            </div>
                          )}
                          {article.category && (
                            <div className="absolute top-3 right-3">
                              <Badge className="text-xs text-white" style={{ backgroundColor: article.category.color }}>
                                {article.category.name_ar}
                              </Badge>
                            </div>
                          )}
                        </div>

                        <CardContent className="p-5">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(article.published_at || article.created_at)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{article.views_count}</span>
                            </div>
                          </div>

                          <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title_ar}
                          </h2>

                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                            {article.excerpt_ar}
                          </p>

                          <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent group/btn">
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">No Articles</h3>
                <p className="text-muted-foreground">
                  {categorySlug ? 'No articles found in this category' : 'New content coming soon, stay tuned!'}
                </p>
              </div>
            )}
          </section>

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </main>

        <footer className="border-t border-border py-8 mt-12">
          <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
            <p>Lingo Spanish © {new Date().getFullYear()} — All rights reserved</p>
          </div>
        </footer>
      </div>
    </PageBackground>
  );
};

export default Blog;

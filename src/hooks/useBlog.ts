import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface BlogCategory {
  id: string;
  name_ar: string;
  name_en: string;
  slug: string;
  color: string;
  created_at: string;
}

export interface BlogArticle {
  id: string;
  title_ar: string;
  title_en: string;
  slug: string;
  excerpt_ar: string;
  excerpt_en: string;
  content_ar: string;
  content_en: string;
  featured_image: string | null;
  category_id: string | null;
  author_id: string | null;
  author_name: string;
  is_published: boolean;
  views_count: number;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  category?: BlogCategory;
}

export interface CreateArticleInput {
  title_ar: string;
  title_en: string;
  slug: string;
  excerpt_ar: string;
  excerpt_en: string;
  content_ar: string;
  content_en: string;
  featured_image?: string | null;
  category_id?: string | null;
  author_id?: string | null;
  author_name?: string;
  is_published?: boolean;
  published_at?: string | null;
}

export interface CreateCategoryInput {
  name_ar: string;
  name_en: string;
  slug: string;
  color?: string;
}

// Fetch all categories
export const useCategories = () => {
  return useQuery({
    queryKey: ['blog_categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name_ar');

      if (error) throw error;
      return data as BlogCategory[];
    }
  });
};

// Fetch published articles with optional category filter
export const useArticles = (categorySlug?: string) => {
  return useQuery({
    queryKey: ['blog_articles', categorySlug],
    queryFn: async () => {
      let query = supabase
        .from('blog_articles')
        .select(`
          *,
          category:blog_categories(*)
        `)
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (categorySlug) {
        const { data: category } = await supabase
          .from('blog_categories')
          .select('id')
          .eq('slug', categorySlug)
          .single();
        
        if (category) {
          query = query.eq('category_id', category.id);
        }
      }

      const { data, error } = await query;
      if (error) throw error;
      return data as BlogArticle[];
    }
  });
};

// Fetch all articles (for admin)
export const useAllArticles = () => {
  return useQuery({
    queryKey: ['blog_articles_all'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_articles')
        .select(`
          *,
          category:blog_categories(*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as BlogArticle[];
    }
  });
};

// Fetch single article by slug
export const useArticle = (slug: string) => {
  return useQuery({
    queryKey: ['blog_article', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_articles')
        .select(`
          *,
          category:blog_categories(*)
        `)
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;
      return data as BlogArticle | null;
    },
    enabled: !!slug
  });
};

// Increment view count
export const useIncrementViews = () => {
  return useMutation({
    mutationFn: async (articleId: string) => {
      // Get current view count and increment
      const { data: article } = await supabase
        .from('blog_articles')
        .select('views_count')
        .eq('id', articleId)
        .single();
      
      if (article) {
        await supabase
          .from('blog_articles')
          .update({ views_count: (article.views_count || 0) + 1 })
          .eq('id', articleId);
      }
    }
  });
};

// Create article (admin)
export const useCreateArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (article: CreateArticleInput) => {
      const { data, error } = await supabase
        .from('blog_articles')
        .insert([article])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog_articles'] });
      queryClient.invalidateQueries({ queryKey: ['blog_articles_all'] });
    }
  });
};

// Update article (admin)
export const useUpdateArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...article }: Partial<BlogArticle> & { id: string }) => {
      const { data, error } = await supabase
        .from('blog_articles')
        .update(article)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog_articles'] });
      queryClient.invalidateQueries({ queryKey: ['blog_articles_all'] });
    }
  });
};

// Delete article (admin)
export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('blog_articles')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog_articles'] });
      queryClient.invalidateQueries({ queryKey: ['blog_articles_all'] });
    }
  });
};

// Create category (admin)
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (category: CreateCategoryInput) => {
      const { data, error } = await supabase
        .from('blog_categories')
        .insert([category])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog_categories'] });
    }
  });
};

// Delete category (admin)
export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('blog_categories')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog_categories'] });
    }
  });
};

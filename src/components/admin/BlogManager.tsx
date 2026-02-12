import { useState } from 'react';
import { Plus, Edit, Trash2, Eye, EyeOff, Loader2, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import {
  useCategories,
  useAllArticles,
  useCreateArticle,
  useUpdateArticle,
  useDeleteArticle,
  useCreateCategory,
  useDeleteCategory,
  BlogArticle,
  BlogCategory,
  CreateArticleInput,
  CreateCategoryInput
} from '@/hooks/useBlog';

const BlogManager = () => {
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { data: articles, isLoading: articlesLoading } = useAllArticles();
  const createArticle = useCreateArticle();
  const updateArticle = useUpdateArticle();
  const deleteArticle = useDeleteArticle();
  const createCategory = useCreateCategory();
  const deleteCategory = useDeleteCategory();

  const [isArticleDialogOpen, setIsArticleDialogOpen] = useState(false);
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<BlogArticle | null>(null);

  // Article form state
  const [articleForm, setArticleForm] = useState({
    title_ar: '',
    title_en: '',
    slug: '',
    excerpt_ar: '',
    excerpt_en: '',
    content_ar: '',
    content_en: '',
    featured_image: '',
    category_id: '',
    author_name: 'فريق LingoArab',
    is_published: false
  });

  // Category form state
  const [categoryForm, setCategoryForm] = useState({
    name_ar: '',
    name_en: '',
    slug: '',
    color: '#3b82f6'
  });

  const resetArticleForm = () => {
    setArticleForm({
      title_ar: '',
      title_en: '',
      slug: '',
      excerpt_ar: '',
      excerpt_en: '',
      content_ar: '',
      content_en: '',
      featured_image: '',
      category_id: '',
      author_name: 'فريق LingoArab',
      is_published: false
    });
    setEditingArticle(null);
  };

  const handleEditArticle = (article: BlogArticle) => {
    setEditingArticle(article);
    setArticleForm({
      title_ar: article.title_ar,
      title_en: article.title_en,
      slug: article.slug,
      excerpt_ar: article.excerpt_ar,
      excerpt_en: article.excerpt_en,
      content_ar: article.content_ar,
      content_en: article.content_en,
      featured_image: article.featured_image || '',
      category_id: article.category_id || '',
      author_name: article.author_name,
      is_published: article.is_published
    });
    setIsArticleDialogOpen(true);
  };

  const handleSaveArticle = async () => {
    if (!articleForm.title_ar || !articleForm.slug || !articleForm.content_ar) {
      toast.error('يرجى ملء الحقول المطلوبة');
      return;
    }

    try {
      const data: CreateArticleInput = {
        title_ar: articleForm.title_ar,
        title_en: articleForm.title_en,
        slug: articleForm.slug,
        excerpt_ar: articleForm.excerpt_ar,
        excerpt_en: articleForm.excerpt_en,
        content_ar: articleForm.content_ar,
        content_en: articleForm.content_en,
        author_name: articleForm.author_name,
        is_published: articleForm.is_published,
        category_id: articleForm.category_id || null,
        featured_image: articleForm.featured_image || null,
        published_at: articleForm.is_published ? new Date().toISOString() : null
      };

      if (editingArticle) {
        await updateArticle.mutateAsync({ id: editingArticle.id, ...data });
        toast.success('تم تحديث المقال بنجاح');
      } else {
        await createArticle.mutateAsync(data);
        toast.success('تم إنشاء المقال بنجاح');
      }

      setIsArticleDialogOpen(false);
      resetArticleForm();
    } catch (error) {
      toast.error('حدث خطأ أثناء حفظ المقال');
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا المقال؟')) return;
    
    try {
      await deleteArticle.mutateAsync(id);
      toast.success('تم حذف المقال بنجاح');
    } catch (error) {
      toast.error('حدث خطأ أثناء حذف المقال');
    }
  };

  const handleTogglePublish = async (article: BlogArticle) => {
    try {
      await updateArticle.mutateAsync({
        id: article.id,
        is_published: !article.is_published,
        published_at: !article.is_published ? new Date().toISOString() : null
      });
      toast.success(article.is_published ? 'تم إلغاء النشر' : 'تم النشر بنجاح');
    } catch (error) {
      toast.error('حدث خطأ');
    }
  };

  const handleSaveCategory = async () => {
    if (!categoryForm.name_ar || !categoryForm.slug) {
      toast.error('يرجى ملء الحقول المطلوبة');
      return;
    }

    try {
      await createCategory.mutateAsync(categoryForm);
      toast.success('تم إنشاء التصنيف بنجاح');
      setIsCategoryDialogOpen(false);
      setCategoryForm({ name_ar: '', name_en: '', slug: '', color: '#3b82f6' });
    } catch (error) {
      toast.error('حدث خطأ أثناء إنشاء التصنيف');
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا التصنيف؟')) return;
    
    try {
      await deleteCategory.mutateAsync(id);
      toast.success('تم حذف التصنيف بنجاح');
    } catch (error) {
      toast.error('حدث خطأ أثناء حذف التصنيف');
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  return (
    <div className="space-y-6">
      {/* Categories Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Tag className="w-5 h-5" />
              التصنيفات
            </CardTitle>
            <CardDescription>إدارة تصنيفات المقالات</CardDescription>
          </div>
          <Dialog open={isCategoryDialogOpen} onOpenChange={setIsCategoryDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="w-4 h-4 ml-2" />
                تصنيف جديد
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>إضافة تصنيف جديد</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>الاسم بالعربية *</Label>
                    <Input
                      value={categoryForm.name_ar}
                      onChange={(e) => setCategoryForm({ ...categoryForm, name_ar: e.target.value })}
                      placeholder="نصائح التعلم"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>الاسم بالإنجليزية</Label>
                    <Input
                      value={categoryForm.name_en}
                      onChange={(e) => setCategoryForm({ ...categoryForm, name_en: e.target.value })}
                      placeholder="Learning Tips"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>الرابط (slug) *</Label>
                    <Input
                      value={categoryForm.slug}
                      onChange={(e) => setCategoryForm({ ...categoryForm, slug: e.target.value })}
                      placeholder="learning-tips"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>اللون</Label>
                    <div className="flex gap-2">
                      <Input
                        type="color"
                        value={categoryForm.color}
                        onChange={(e) => setCategoryForm({ ...categoryForm, color: e.target.value })}
                        className="w-12 h-10 p-1"
                      />
                      <Input
                        value={categoryForm.color}
                        onChange={(e) => setCategoryForm({ ...categoryForm, color: e.target.value })}
                        className="flex-1"
                      />
                    </div>
                  </div>
                </div>
                <Button onClick={handleSaveCategory} className="w-full" disabled={createCategory.isPending}>
                  {createCategory.isPending && <Loader2 className="w-4 h-4 animate-spin ml-2" />}
                  إضافة التصنيف
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {categoriesLoading ? (
            <div className="flex justify-center py-4">
              <Loader2 className="w-6 h-6 animate-spin" />
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {categories?.map((cat) => (
                <Badge
                  key={cat.id}
                  variant="secondary"
                  className="text-sm py-1.5 px-3 flex items-center gap-2"
                  style={{ borderColor: cat.color }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                  {cat.name_ar}
                  <button
                    onClick={() => handleDeleteCategory(cat.id)}
                    className="hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Articles Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>المقالات</CardTitle>
            <CardDescription>إدارة مقالات المدونة</CardDescription>
          </div>
          <Dialog open={isArticleDialogOpen} onOpenChange={(open) => {
            setIsArticleDialogOpen(open);
            if (!open) resetArticleForm();
          }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 ml-2" />
                مقال جديد
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingArticle ? 'تعديل المقال' : 'إضافة مقال جديد'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>العنوان بالعربية *</Label>
                    <Input
                      value={articleForm.title_ar}
                      onChange={(e) => {
                        setArticleForm({ 
                          ...articleForm, 
                          title_ar: e.target.value,
                          slug: editingArticle ? articleForm.slug : generateSlug(e.target.value)
                        });
                      }}
                      placeholder="عنوان المقال"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>العنوان بالإنجليزية</Label>
                    <Input
                      value={articleForm.title_en}
                      onChange={(e) => setArticleForm({ ...articleForm, title_en: e.target.value })}
                      placeholder="Article Title"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>الرابط (slug) *</Label>
                    <Input
                      value={articleForm.slug}
                      onChange={(e) => setArticleForm({ ...articleForm, slug: e.target.value })}
                      placeholder="article-slug"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>التصنيف</Label>
                    <Select
                      value={articleForm.category_id}
                      onValueChange={(v) => setArticleForm({ ...articleForm, category_id: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر التصنيف" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories?.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.name_ar}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>المقتطف بالعربية *</Label>
                    <Textarea
                      value={articleForm.excerpt_ar}
                      onChange={(e) => setArticleForm({ ...articleForm, excerpt_ar: e.target.value })}
                      placeholder="وصف مختصر للمقال"
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>المقتطف بالإنجليزية</Label>
                    <Textarea
                      value={articleForm.excerpt_en}
                      onChange={(e) => setArticleForm({ ...articleForm, excerpt_en: e.target.value })}
                      placeholder="Short article description"
                      rows={2}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>المحتوى بالعربية * (يدعم Markdown)</Label>
                  <Textarea
                    value={articleForm.content_ar}
                    onChange={(e) => setArticleForm({ ...articleForm, content_ar: e.target.value })}
                    placeholder="# العنوان الرئيسي&#10;## عنوان فرعي&#10;محتوى المقال..."
                    rows={10}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label>المحتوى بالإنجليزية (يدعم Markdown)</Label>
                  <Textarea
                    value={articleForm.content_en}
                    onChange={(e) => setArticleForm({ ...articleForm, content_en: e.target.value })}
                    placeholder="# Main Title&#10;## Subtitle&#10;Article content..."
                    rows={10}
                    className="font-mono text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>رابط الصورة المميزة</Label>
                    <Input
                      value={articleForm.featured_image}
                      onChange={(e) => setArticleForm({ ...articleForm, featured_image: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>اسم الكاتب</Label>
                    <Input
                      value={articleForm.author_name}
                      onChange={(e) => setArticleForm({ ...articleForm, author_name: e.target.value })}
                      placeholder="فريق LingoArab"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={articleForm.is_published}
                      onCheckedChange={(checked) => setArticleForm({ ...articleForm, is_published: checked })}
                    />
                    <Label>نشر المقال فوراً</Label>
                  </div>
                  <Button 
                    onClick={handleSaveArticle} 
                    disabled={createArticle.isPending || updateArticle.isPending}
                  >
                    {(createArticle.isPending || updateArticle.isPending) && (
                      <Loader2 className="w-4 h-4 animate-spin ml-2" />
                    )}
                    {editingArticle ? 'حفظ التغييرات' : 'إنشاء المقال'}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardContent>
          {articlesLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          ) : articles && articles.length > 0 ? (
            <div className="space-y-3">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{article.title_ar}</h3>
                      <Badge variant={article.is_published ? 'default' : 'secondary'}>
                        {article.is_published ? 'منشور' : 'مسودة'}
                      </Badge>
                      {article.category && (
                        <Badge variant="outline" style={{ borderColor: article.category.color }}>
                          {article.category.name_ar}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {article.excerpt_ar}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {article.views_count} مشاهدة • {new Date(article.created_at).toLocaleDateString('ar-SA')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleTogglePublish(article)}
                      title={article.is_published ? 'إلغاء النشر' : 'نشر'}
                    >
                      {article.is_published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleEditArticle(article)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDeleteArticle(article.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              لا توجد مقالات بعد. أضف أول مقال!
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogManager;

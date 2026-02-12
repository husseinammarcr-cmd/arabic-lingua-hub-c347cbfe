import { LessonContent } from './a1-lessons';

export const c2Unit5Lessons: Record<string, LessonContent> = {
  'C2-u05-l01': {
    lessonId: 'C2-u05-l01',
    passingScore: 70,
    vocab: [
      { english: 'Dialect', arabic: 'لهجة', example: 'British and American English are different dialects.' },
      { english: 'Accent', arabic: 'لكنة', example: 'Her Scottish accent is charming.' },
      { english: 'Vernacular', arabic: 'العامية', example: 'The vernacular differs from formal language.' },
      { english: 'Pidgin', arabic: 'لغة مبسطة', example: 'Pidgin English developed for trade.' },
    ],
    sentences: [
      { english: 'Dialects vary by region.', arabic: 'تختلف اللهجات حسب المنطقة.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'Dialect يشمل...',
        data: { options: ['المفردات والقواعد والنطق', 'النطق فقط', 'المفردات فقط', 'القواعد فقط'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما الفرق بين Dialect و Accent؟',
        data: { options: ['Dialect أشمل ويتضمن المفردات', 'لا فرق بينهما', 'Accent أشمل', 'كلاهما متطابق'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u05-l02': {
    lessonId: 'C2-u05-l02',
    passingScore: 70,
    vocab: [
      { english: 'Double negative', arabic: 'نفي مزدوج', example: 'Some dialects use double negatives.' },
      { english: 'Regularization', arabic: 'التقييس', example: 'Irregular verbs get regularized in some dialects.' },
    ],
    sentences: [
      { english: 'Double negatives are common in some dialects.', arabic: 'النفي المزدوج شائع في بعض اللهجات.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'أي جملة تستخدم النفي المزدوج؟',
        data: { options: ['I don\'t have nothing', 'I don\'t have anything', 'I have nothing', 'I have something'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Regularization" في اللغة؟',
        data: { options: ['تطبيق القواعد العامة على الاستثناءات', 'إضافة استثناءات', 'تعقيد القواعد', 'إلغاء القواعد'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u05-l03': {
    lessonId: 'C2-u05-l03',
    passingScore: 70,
    vocab: [
      { english: 'Received Pronunciation', arabic: 'النطق المعياري', example: 'RP is the traditional accent of BBC English.' },
      { english: 'Cockney', arabic: 'لهجة كوكني', example: 'Cockney rhyming slang is unique to London.' },
    ],
    sentences: [
      { english: 'RP is considered standard British pronunciation.', arabic: 'النطق المعياري يعتبر النطق البريطاني القياسي.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هو Received Pronunciation؟',
        data: { options: ['النطق المعياري البريطاني', 'النطق الأمريكي', 'النطق الأسترالي', 'النطق الأيرلندي'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'أين نشأت لهجة Cockney؟',
        data: { options: ['لندن', 'مانشستر', 'ليفربول', 'اسكتلندا'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u05-l04': {
    lessonId: 'C2-u05-l04',
    passingScore: 70,
    vocab: [
      { english: 'Language evolution', arabic: 'تطور اللغة', example: 'Language evolution is a natural process.' },
      { english: 'Code-switching', arabic: 'التبديل اللغوي', example: 'Bilinguals often code-switch.' },
    ],
    sentences: [
      { english: 'Code-switching is common among bilinguals.', arabic: 'التبديل اللغوي شائع بين ثنائيي اللغة.' },
    ],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: تطور اللغة عملية طبيعية',
        data: { answer: 'Language evolution is a natural process', alternatives: ['Language change is a natural process'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Code-switching"؟',
        data: { options: ['التبديل بين اللغات', 'تعلم لغة جديدة', 'نسيان اللغة', 'ترجمة النصوص'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u05-l05': {
    lessonId: 'C2-u05-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Code-switching"؟',
        data: { options: ['التبديل بين اللغات', 'تعلم لغة جديدة', 'نسيان اللغة', 'ترجمة النصوص'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Vernacular"؟',
        data: { options: ['اللغة العامية', 'اللغة الرسمية', 'اللغة الأكاديمية', 'اللغة القانونية'], correct: 0 },
        points: 10
      },
    ],
  },
};

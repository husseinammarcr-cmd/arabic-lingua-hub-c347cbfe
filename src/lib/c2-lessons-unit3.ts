import { LessonContent } from './a1-lessons';

export const c2Unit3Lessons: Record<string, LessonContent> = {
  'C2-u03-l01': {
    lessonId: 'C2-u03-l01',
    passingScore: 70,
    vocab: [
      { english: 'Rhetoric', arabic: 'خطابة/بلاغة', example: 'His rhetoric was powerful and moving.' },
      { english: 'Ethos', arabic: 'مصداقية', example: 'The speaker established ethos through expertise.' },
      { english: 'Pathos', arabic: 'التأثير العاطفي', example: 'The advertisement uses pathos effectively.' },
      { english: 'Logos', arabic: 'المنطق', example: 'Her argument was based on logos.' },
    ],
    sentences: [
      { english: 'Effective rhetoric combines ethos, pathos, and logos.', arabic: 'الخطابة الفعالة تجمع بين المصداقية والعاطفة والمنطق.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Ethos" في الخطابة؟',
        data: { options: ['المصداقية', 'العاطفة', 'المنطق', 'الأسلوب'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما الركن الثلاثي للإقناع؟',
        data: { options: ['Ethos, Pathos, Logos', 'Ethos, Emotion, Logic', 'Ethics, Pathos, Logos', 'Ethos, Passion, Logos'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u03-l02': {
    lessonId: 'C2-u03-l02',
    passingScore: 70,
    vocab: [
      { english: 'Rhetorical question', arabic: 'سؤال بلاغي', example: 'Who doesn\'t want success?' },
      { english: 'Parallelism', arabic: 'التوازي', example: 'I came, I saw, I conquered.' },
    ],
    sentences: [
      { english: 'I came, I saw, I conquered.', arabic: 'أتيت، رأيت، انتصرت.' },
    ],
    exercises: [
      {
        type: 'reorder',
        promptAr: 'رتب لتكوين جملة متوازية',
        data: { words: ['I', 'came,', 'I', 'saw,', 'I', 'conquered'], correctOrder: [0, 1, 2, 3, 4, 5] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو التوازي في البلاغة؟',
        data: { options: ['تكرار بنية الجملة', 'استخدام الأسئلة', 'المبالغة', 'التشبيه'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u03-l03': {
    lessonId: 'C2-u03-l03',
    passingScore: 70,
    vocab: [
      { english: 'Oratory', arabic: 'فن الخطابة', example: 'His oratory skills are exceptional.' },
      { english: 'Eloquence', arabic: 'فصاحة', example: 'She speaks with great eloquence.' },
    ],
    sentences: [
      { english: 'Great orators inspire nations.', arabic: 'الخطباء العظام يلهمون الأمم.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Eloquence"؟',
        data: { options: ['فصاحة', 'هدوء', 'سرعة', 'بطء'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Oratory"؟',
        data: { options: ['فن الخطابة', 'فن الكتابة', 'فن الرسم', 'فن الموسيقى'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u03-l04': {
    lessonId: 'C2-u03-l04',
    passingScore: 70,
    vocab: [
      { english: 'To compel', arabic: 'للإقناع بقوة', example: 'The evidence compels us to act.' },
      { english: 'To advocate', arabic: 'للدفاع عن', example: 'I advocate for change.' },
    ],
    sentences: [
      { english: 'I advocate for positive change.', arabic: 'أنا أدافع عن التغيير الإيجابي.' },
    ],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: أنا أدافع عن التغيير',
        data: { answer: 'I advocate for change', alternatives: ['I advocate change'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "To compel"؟',
        data: { options: ['للإقناع بقوة', 'للاقتراح', 'للتخمين', 'للتجاهل'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u03-l05': {
    lessonId: 'C2-u03-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'أي تقنية تستخدم الأسئلة التي لا تحتاج إجابة؟',
        data: { options: ['Rhetorical question', 'Parallelism', 'Metaphor', 'Simile'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Pathos"؟',
        data: { options: ['التأثير العاطفي', 'المصداقية', 'المنطق', 'الأسلوب'], correct: 0 },
        points: 10
      },
    ],
  },
};

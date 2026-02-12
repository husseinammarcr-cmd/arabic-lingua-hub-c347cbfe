import { LessonContent } from './a1-lessons';

export const c2Unit10Lessons: Record<string, LessonContent> = {
  'C2-u10-l01': {
    lessonId: 'C2-u10-l01',
    passingScore: 70,
    vocab: [
      { english: 'Quintessential', arabic: 'جوهري', example: 'The quintessential example of...' },
      { english: 'Rhetoric', arabic: 'خطابة', example: 'Master the art of rhetoric.' },
      { english: 'Allegory', arabic: 'رمزية', example: 'An allegory for modern society.' },
      { english: 'Protocol', arabic: 'بروتوكول', example: 'Follow proper protocol.' },
    ],
    sentences: [
      { english: 'This is the quintessential example of mastery.', arabic: 'هذا المثال الجوهري للإتقان.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'اختر الكلمة المناسبة: This painting is a/an ___ for human struggle.',
        data: { options: ['allegory', 'protocol', 'rhetoric', 'dialect'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Quintessential"؟',
        data: { options: ['جوهري/نموذجي', 'عادي', 'بسيط', 'معقد'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u10-l02': {
    lessonId: 'C2-u10-l02',
    passingScore: 70,
    vocab: [],
    sentences: [
      { english: 'Seldom have I encountered such brilliance.', arabic: 'نادراً ما صادفت مثل هذا التألق.' },
    ],
    exercises: [
      {
        type: 'reorder',
        promptAr: 'رتب الكلمات لتكوين جملة مقلوبة',
        data: { words: ['Seldom', 'have', 'I', 'encountered', 'such', 'brilliance'], correctOrder: [0, 1, 2, 3, 4, 5] }
      },
      {
        type: 'fill_blank',
        promptAr: 'أكمل: It ___ be said that this is unprecedented.',
        data: { answer: 'could' }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'أي جملة تستخدم القلب النحوي؟',
        data: { options: ['Seldom have I seen...', 'I have seldom seen...', 'Seldom I have seen...', 'Have I seldom seen...'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u10-l03': {
    lessonId: 'C2-u10-l03',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما نوع الخطاب الذي يستخدم Ethos, Pathos, و Logos؟',
        data: { options: ['الخطاب الإقناعي', 'الخطاب السردي', 'الخطاب الوصفي', 'الخطاب التفسيري'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Ethos"؟',
        data: { options: ['المصداقية', 'العاطفة', 'المنطق', 'الأسلوب'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u10-l04': {
    lessonId: 'C2-u10-l04',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: من منظور فلسفي، هذا يثير أسئلة عميقة',
        data: { answer: 'From a philosophical perspective, this raises profound questions', alternatives: ['From a philosophical standpoint, this raises deep questions'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Perspective"؟',
        data: { options: ['منظور', 'رأي', 'فكرة', 'اقتراح'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u10-l05': {
    lessonId: 'C2-u10-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'أي مستوى يمثل الإتقان الكامل للغة؟',
        data: { options: ['C2', 'C1', 'B2', 'B1'], correct: 0 }
      },
      {
        type: 'fill_blank',
        promptAr: 'أكمل: The ___ example of English mastery.',
        data: { answer: 'quintessential' }
      },
      {
        type: 'mcq',
        promptAr: 'ماذا يعني "Transcreation"؟',
        data: { options: ['الترجمة الإبداعية', 'الترجمة الحرفية', 'النسخ', 'التلخيص'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'تهانينا! أكملت مستوى C2. ما الكلمة التي تصف هذا الإنجاز؟',
        data: { options: ['Mastery', 'Beginning', 'Intermediate', 'Elementary'], correct: 0 },
        points: 20
      },
    ],
  },
};

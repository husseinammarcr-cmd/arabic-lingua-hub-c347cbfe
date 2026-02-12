import { LessonContent } from './a1-lessons';

export const c2Unit1Lessons: Record<string, LessonContent> = {
  'C2-u01-l01': {
    lessonId: 'C2-u01-l01',
    passingScore: 70,
    vocab: [
      { english: 'Quintessential', arabic: 'جوهري/نموذجي', example: 'This is the quintessential example of modern architecture.' },
      { english: 'Ephemeral', arabic: 'زائل/عابر', example: 'Fame can be ephemeral in the digital age.' },
      { english: 'Ubiquitous', arabic: 'موجود في كل مكان', example: 'Smartphones have become ubiquitous in modern society.' },
      { english: 'Serendipity', arabic: 'الحظ السعيد', example: 'Their meeting was pure serendipity.' },
      { english: 'Paradigm', arabic: 'نموذج فكري', example: 'This discovery represents a paradigm shift in science.' },
    ],
    sentences: [
      { english: 'This is the quintessential example of innovation.', arabic: 'هذا المثال الجوهري للابتكار.' },
      { english: 'Beauty is ephemeral, but wisdom is eternal.', arabic: 'الجمال زائل، لكن الحكمة أبدية.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما معنى كلمة "Quintessential"؟',
        data: { options: ['جوهري/نموذجي', 'مؤقت', 'غامض', 'بسيط'], correct: 0 }
      },
      {
        type: 'fill_blank',
        promptAr: 'أكمل: Fame can be ___ in the digital age.',
        data: { answer: 'ephemeral' }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما الكلمة التي تعني "موجود في كل مكان"؟',
        data: { options: ['Ubiquitous', 'Ephemeral', 'Quintessential', 'Serendipity'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u01-l02': {
    lessonId: 'C2-u01-l02',
    passingScore: 70,
    vocab: [
      { english: 'Inversion', arabic: 'القلب النحوي', example: 'Never have I seen such beauty.' },
      { english: 'Cleft sentence', arabic: 'الجملة المشقوقة', example: 'It was John who solved the problem.' },
      { english: 'Fronting', arabic: 'التقديم', example: 'Interesting though it may seem...' },
    ],
    sentences: [
      { english: 'Never have I witnessed such eloquence.', arabic: 'لم أشهد أبداً مثل هذه الفصاحة.' },
      { english: 'It was she who discovered the solution.', arabic: 'هي التي اكتشفت الحل.' },
    ],
    exercises: [
      {
        type: 'reorder',
        promptAr: 'رتب الكلمات لتكوين جملة مقلوبة',
        data: { words: ['Never', 'have', 'I', 'seen', 'such', 'beauty'], correctOrder: [0, 1, 2, 3, 4, 5] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'أي جملة تستخدم القلب النحوي؟',
        data: { options: ['Never have I seen this', 'I have never seen this', 'I never have seen this', 'Never I have seen this'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u01-l03': {
    lessonId: 'C2-u01-l03',
    passingScore: 70,
    vocab: [
      { english: 'Discourse', arabic: 'خطاب/حوار', example: 'Academic discourse requires precise language.' },
      { english: 'Inference', arabic: 'استنتاج', example: 'What inference can we draw from this?' },
    ],
    sentences: [
      { english: 'Academic discourse demands precision.', arabic: 'الخطاب الأكاديمي يتطلب الدقة.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما المقصود بـ "Discourse"؟',
        data: { options: ['خطاب/حوار', 'خلاف', 'اتفاق', 'صمت'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Inference"؟',
        data: { options: ['استنتاج', 'افتراض', 'تخمين', 'رأي'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u01-l04': {
    lessonId: 'C2-u01-l04',
    passingScore: 70,
    vocab: [
      { english: 'To elaborate', arabic: 'للتوضيح', example: 'Could you elaborate on that point?' },
      { english: 'To digress', arabic: 'للاستطراد', example: 'I digress, but this is relevant.' },
    ],
    sentences: [
      { english: 'Could you elaborate further?', arabic: 'هل يمكنك التوضيح أكثر؟' },
    ],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: هل يمكنك التوضيح أكثر؟',
        data: { answer: 'Could you elaborate further?', alternatives: ['Can you elaborate more?'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "To digress"؟',
        data: { options: ['للاستطراد', 'للتوضيح', 'للاختصار', 'للتكرار'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u01-l05': {
    lessonId: 'C2-u01-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'أي جملة تستخدم القلب النحوي بشكل صحيح؟',
        data: {
          options: ['Never have I witnessed such eloquence.', 'I have never witnessed such eloquence.', 'Never I have witnessed such eloquence.', 'Have I never witnessed such eloquence.'],
          correct: 0
        }
      },
      {
        type: 'fill_blank',
        promptAr: 'أكمل: Smartphones have become ___ in modern society.',
        data: { answer: 'ubiquitous' }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما الكلمة التي تعني "نموذجي/جوهري"؟',
        data: { options: ['Quintessential', 'Ephemeral', 'Ubiquitous', 'Paradigm'], correct: 0 },
        points: 10
      },
    ],
  },
};

import { LessonContent } from './a1-lessons';

export const c2Unit7Lessons: Record<string, LessonContent> = {
  'C2-u07-l01': {
    lessonId: 'C2-u07-l01',
    passingScore: 70,
    vocab: [
      { english: 'Critique', arabic: 'نقد', example: 'Her critique of the film was insightful.' },
      { english: 'Analysis', arabic: 'تحليل', example: 'A thorough analysis is needed.' },
      { english: 'Evaluation', arabic: 'تقييم', example: 'The evaluation revealed weaknesses.' },
      { english: 'Perspective', arabic: 'منظور', example: 'From a different perspective...' },
    ],
    sentences: [
      { english: 'Critical analysis requires objectivity.', arabic: 'التحليل النقدي يتطلب موضوعية.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'Critique عادة...',
        data: { options: ['أكثر تفصيلاً وبناءً', 'سلبي فقط', 'إيجابي فقط', 'قصير'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما الفرق بين Critique و Criticism؟',
        data: { options: ['Critique أكثر تفصيلاً وبناءً', 'لا فرق', 'Criticism أفضل', 'Critique سلبي فقط'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u07-l02': {
    lessonId: 'C2-u07-l02',
    passingScore: 70,
    vocab: [
      { english: 'Hedging language', arabic: 'لغة التحفظ', example: 'It could be argued that...' },
      { english: 'Assertive language', arabic: 'لغة الجزم', example: 'This clearly demonstrates...' },
    ],
    sentences: [
      { english: 'It could be argued that this is true.', arabic: 'يمكن القول بأن هذا صحيح.' },
    ],
    exercises: [
      {
        type: 'fill_blank',
        promptAr: 'أكمل بلغة التحفظ: It ___ be argued that this is true.',
        data: { answer: 'could' }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'أي عبارة تستخدم لغة التحفظ؟',
        data: { options: ['It could be argued...', 'This clearly shows...', 'Obviously...', 'Without doubt...'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u07-l03': {
    lessonId: 'C2-u07-l03',
    passingScore: 70,
    vocab: [
      { english: 'Counterargument', arabic: 'حجة مضادة', example: 'The counterargument is compelling.' },
      { english: 'Rebuttal', arabic: 'رد', example: 'His rebuttal was effective.' },
    ],
    sentences: [
      { english: 'A strong counterargument challenges the thesis.', arabic: 'الحجة المضادة القوية تتحدى الأطروحة.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Counterargument"؟',
        data: { options: ['حجة تعارض حجة أخرى', 'حجة تدعم', 'مقدمة', 'خاتمة'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Rebuttal"؟',
        data: { options: ['رد على حجة', 'موافقة', 'اقتراح', 'سؤال'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u07-l04': {
    lessonId: 'C2-u07-l04',
    passingScore: 70,
    vocab: [
      { english: 'To scrutinize', arabic: 'للتدقيق', example: 'We must scrutinize the evidence.' },
      { english: 'To deconstruct', arabic: 'لتفكيك', example: 'Let\'s deconstruct this argument.' },
    ],
    sentences: [
      { english: 'We must scrutinize all evidence carefully.', arabic: 'يجب أن ندقق في جميع الأدلة بعناية.' },
    ],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: يجب أن ندقق في الأدلة',
        data: { answer: 'We must scrutinize the evidence', alternatives: ['We need to scrutinize the evidence'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "To deconstruct"؟',
        data: { options: ['تفكيك وتحليل', 'بناء', 'تجميع', 'تبسيط'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u07-l05': {
    lessonId: 'C2-u07-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'أي عبارة تستخدم لغة التحفظ؟',
        data: { options: ['It could be argued that...', 'This clearly shows...', 'Obviously...', 'Without doubt...'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "To scrutinize"؟',
        data: { options: ['للتدقيق والفحص', 'للتجاهل', 'للموافقة', 'للرفض'], correct: 0 },
        points: 10
      },
    ],
  },
};

import { LessonContent } from './a1-lessons';

export const c2Unit9Lessons: Record<string, LessonContent> = {
  'C2-u09-l01': {
    lessonId: 'C2-u09-l01',
    passingScore: 70,
    vocab: [
      { english: 'Terminology', arabic: 'مصطلحات', example: 'Medical terminology is complex.' },
      { english: 'Jargon', arabic: 'لغة متخصصة', example: 'Legal jargon can be confusing.' },
      { english: 'Technical language', arabic: 'لغة تقنية', example: 'Technical language requires precision.' },
      { english: 'Domain-specific', arabic: 'خاص بالمجال', example: 'Domain-specific terms are essential.' },
    ],
    sentences: [
      { english: 'Specialized terminology requires training.', arabic: 'المصطلحات المتخصصة تتطلب تدريباً.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'Jargon عادة...',
        data: { options: ['غير رسمي ويستخدم داخل المهنة', 'رسمي ومعترف به', 'سهل الفهم للجميع', 'قديم ومهجور'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما الفرق بين Terminology و Jargon؟',
        data: { options: ['Terminology أكثر رسمية', 'لا فرق', 'Jargon أفضل', 'كلاهما متطابق'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u09-l02': {
    lessonId: 'C2-u09-l02',
    passingScore: 70,
    vocab: [
      { english: 'Nominalization', arabic: 'التسمية', example: 'Academic writing uses nominalization.' },
      { english: 'Impersonal constructions', arabic: 'تراكيب غير شخصية', example: 'It is believed that...' },
    ],
    sentences: [
      { english: 'It is believed that this theory is correct.', arabic: 'يُعتقد أن هذه النظرية صحيحة.' },
    ],
    exercises: [
      {
        type: 'fill_blank',
        promptAr: 'أكمل: It ___ believed that this theory is correct.',
        data: { answer: 'is' }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'أي عبارة تستخدم تركيباً غير شخصي؟',
        data: { options: ['It is believed that...', 'I believe that...', 'We think that...', 'They say that...'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u09-l03': {
    lessonId: 'C2-u09-l03',
    passingScore: 70,
    vocab: [
      { english: 'Expert panel', arabic: 'لجنة خبراء', example: 'The expert panel discussed the findings.' },
      { english: 'Peer review', arabic: 'مراجعة الأقران', example: 'Peer review ensures quality.' },
    ],
    sentences: [
      { english: 'Peer review is essential for academic quality.', arabic: 'مراجعة الأقران ضرورية للجودة الأكاديمية.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Peer review"؟',
        data: { options: ['تقييم من قبل متخصصين في نفس المجال', 'تقييم ذاتي', 'تقييم إداري', 'تقييم عام'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Expert panel"؟',
        data: { options: ['لجنة من الخبراء', 'لجنة إدارية', 'لجنة طلابية', 'لجنة عامة'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u09-l04': {
    lessonId: 'C2-u09-l04',
    passingScore: 70,
    vocab: [
      { english: 'To consult', arabic: 'للاستشارة', example: 'Please consult the specialist.' },
      { english: 'To collaborate', arabic: 'للتعاون', example: 'Teams must collaborate effectively.' },
    ],
    sentences: [
      { english: 'Effective collaboration leads to success.', arabic: 'التعاون الفعال يؤدي للنجاح.' },
    ],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: يجب أن تتعاون الفرق بفعالية',
        data: { answer: 'Teams must collaborate effectively', alternatives: ['Teams should collaborate effectively'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "To consult"؟',
        data: { options: ['للاستشارة', 'للأمر', 'للرفض', 'للموافقة'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u09-l05': {
    lessonId: 'C2-u09-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'أي عبارة تستخدم تركيباً غير شخصي؟',
        data: { options: ['It is believed that...', 'I believe that...', 'We think that...', 'They say that...'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "To collaborate"؟',
        data: { options: ['للتعاون', 'للتنافس', 'للانفصال', 'للتجاهل'], correct: 0 },
        points: 10
      },
    ],
  },
};

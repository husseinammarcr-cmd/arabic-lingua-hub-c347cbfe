import { LessonContent } from './a1-lessons';

export const c2Unit6Lessons: Record<string, LessonContent> = {
  'C2-u06-l01': {
    lessonId: 'C2-u06-l01',
    passingScore: 70,
    vocab: [
      { english: 'Narrative', arabic: 'سرد', example: 'The narrative unfolds beautifully.' },
      { english: 'Protagonist', arabic: 'بطل الرواية', example: 'The protagonist faces many challenges.' },
      { english: 'Antagonist', arabic: 'الخصم', example: 'The antagonist creates conflict.' },
      { english: 'Plot twist', arabic: 'انقلاب الأحداث', example: 'The plot twist surprised everyone.' },
    ],
    sentences: [
      { english: 'The protagonist overcomes obstacles.', arabic: 'البطل يتغلب على العقبات.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'من هو الـ "Protagonist"؟',
        data: { options: ['الشخصية الرئيسية', 'الخصم', 'الراوي', 'المؤلف'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'من هو الـ "Antagonist"؟',
        data: { options: ['الخصم', 'البطل', 'الراوي', 'المؤلف'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u06-l02': {
    lessonId: 'C2-u06-l02',
    passingScore: 70,
    vocab: [
      { english: 'Present tense narrative', arabic: 'السرد بالمضارع', example: 'He walks into the room and sees...' },
      { english: 'Stream of consciousness', arabic: 'تيار الوعي', example: 'Stream of consciousness mimics thought.' },
    ],
    sentences: [
      { english: 'She walks into the room slowly.', arabic: 'تدخل الغرفة ببطء.' },
    ],
    exercises: [
      {
        type: 'fill_blank',
        promptAr: 'أكمل بالمضارع: She ___ (walk) into the dark room.',
        data: { answer: 'walks' }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Stream of consciousness"؟',
        data: { options: ['تقنية سردية تحاكي التفكير', 'نوع من الشعر', 'أسلوب المقال', 'تقنية المسرح'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u06-l03': {
    lessonId: 'C2-u06-l03',
    passingScore: 70,
    vocab: [
      { english: 'Audiobook', arabic: 'كتاب صوتي', example: 'Audiobooks are great for commuting.' },
      { english: 'Narrator', arabic: 'راوي', example: 'The narrator has a soothing voice.' },
    ],
    sentences: [
      { english: 'The narrator brings the story to life.', arabic: 'الراوي يحيي القصة.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما دور الـ "Narrator"؟',
        data: { options: ['يروي القصة', 'يكتب القصة', 'يحرر القصة', 'ينشر القصة'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Audiobook"؟',
        data: { options: ['كتاب صوتي', 'كتاب إلكتروني', 'كتاب ورقي', 'مجلة'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u06-l04': {
    lessonId: 'C2-u06-l04',
    passingScore: 70,
    vocab: [
      { english: 'Foreshadowing', arabic: 'التمهيد', example: 'The author uses foreshadowing effectively.' },
      { english: 'Flashback', arabic: 'استرجاع', example: 'The flashback reveals the past.' },
    ],
    sentences: [
      { english: 'Foreshadowing hints at future events.', arabic: 'التمهيد يلمح للأحداث القادمة.' },
    ],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: يستخدم المؤلف التمهيد بفعالية',
        data: { answer: 'The author uses foreshadowing effectively', alternatives: ['The writer uses foreshadowing effectively'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Flashback"؟',
        data: { options: ['استرجاع أحداث ماضية', 'التنبؤ بالمستقبل', 'وصف الحاضر', 'تخيل مستقبلي'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u06-l05': {
    lessonId: 'C2-u06-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Plot twist"؟',
        data: { options: ['تحول مفاجئ في الأحداث', 'بداية القصة', 'نهاية القصة', 'شخصية ثانوية'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Foreshadowing"؟',
        data: { options: ['التلميح لأحداث قادمة', 'استرجاع الماضي', 'وصف الحاضر', 'التخيل'], correct: 0 },
        points: 10
      },
    ],
  },
};

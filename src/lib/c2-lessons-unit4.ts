import { LessonContent } from './a1-lessons';

export const c2Unit4Lessons: Record<string, LessonContent> = {
  'C2-u04-l01': {
    lessonId: 'C2-u04-l01',
    passingScore: 70,
    vocab: [
      { english: 'Localization', arabic: 'التوطين', example: 'Localization adapts content for local markets.' },
      { english: 'Transcreation', arabic: 'الترجمة الإبداعية', example: 'Transcreation goes beyond literal translation.' },
      { english: 'Idiom', arabic: 'تعبير اصطلاحي', example: 'Idioms are challenging to translate.' },
      { english: 'Collocation', arabic: 'تلازم لفظي', example: 'Strong collocations sound more natural.' },
    ],
    sentences: [
      { english: 'Transcreation requires creativity.', arabic: 'الترجمة الإبداعية تتطلب إبداعاً.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Transcreation"؟',
        data: { options: ['الترجمة الإبداعية', 'الترجمة الحرفية', 'الترجمة الآلية', 'النسخ'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Localization"؟',
        data: { options: ['تكييف المحتوى للأسواق المحلية', 'الترجمة الحرفية', 'النسخ', 'التلخيص'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u04-l02': {
    lessonId: 'C2-u04-l02',
    passingScore: 70,
    vocab: [
      { english: 'Passive voice', arabic: 'المبني للمجهول', example: 'The book was written by him.' },
      { english: 'Nominalization', arabic: 'التسمية', example: 'The discovery of the cure changed medicine.' },
    ],
    sentences: [
      { english: 'The book was written by a famous author.', arabic: 'الكتاب كُتب بواسطة مؤلف شهير.' },
    ],
    exercises: [
      {
        type: 'fill_blank',
        promptAr: 'حول للمبني للمجهول: He wrote the book → The book ___ by him.',
        data: { answer: 'was written' }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو المبني للمجهول لـ "He wrote the letter"؟',
        data: { options: ['The letter was written by him', 'The letter is written by him', 'The letter written by him', 'He is written the letter'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u04-l03': {
    lessonId: 'C2-u04-l03',
    passingScore: 70,
    vocab: [
      { english: 'Simultaneous interpretation', arabic: 'ترجمة فورية', example: 'Simultaneous interpretation requires intense concentration.' },
      { english: 'Consecutive interpretation', arabic: 'ترجمة تتابعية', example: 'Consecutive interpretation allows for note-taking.' },
    ],
    sentences: [
      { english: 'Simultaneous interpretation is challenging.', arabic: 'الترجمة الفورية صعبة.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'الترجمة الفورية تتم...',
        data: { options: ['أثناء الكلام', 'بعد انتهاء الكلام', 'كتابياً', 'آلياً'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما الفرق الرئيسي بين الترجمة الفورية والتتابعية؟',
        data: { options: ['التوقيت', 'الدقة', 'اللغة', 'الموضوع'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u04-l04': {
    lessonId: 'C2-u04-l04',
    passingScore: 70,
    vocab: [
      { english: 'Untranslatable', arabic: 'غير قابل للترجمة', example: 'Some concepts are nearly untranslatable.' },
      { english: 'Cultural equivalent', arabic: 'المقابل الثقافي', example: 'Finding a cultural equivalent is key.' },
    ],
    sentences: [
      { english: 'Some expressions are culturally untranslatable.', arabic: 'بعض التعبيرات غير قابلة للترجمة ثقافياً.' },
    ],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: بعض المفاهيم صعبة الترجمة',
        data: { answer: 'Some concepts are difficult to translate', alternatives: ['Some concepts are hard to translate'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Cultural equivalent"؟',
        data: { options: ['المقابل الثقافي', 'الترجمة الحرفية', 'النسخ', 'التلخيص'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u04-l05': {
    lessonId: 'C2-u04-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Localization"؟',
        data: { options: ['تكييف المحتوى للأسواق المحلية', 'الترجمة الحرفية', 'النسخ', 'التلخيص'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Transcreation"؟',
        data: { options: ['الترجمة الإبداعية', 'الترجمة الحرفية', 'النسخ', 'التلخيص'], correct: 0 },
        points: 10
      },
    ],
  },
};

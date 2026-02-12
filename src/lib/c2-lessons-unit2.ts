import { LessonContent } from './a1-lessons';

export const c2Unit2Lessons: Record<string, LessonContent> = {
  'C2-u02-l01': {
    lessonId: 'C2-u02-l01',
    passingScore: 70,
    vocab: [
      { english: 'Metaphor', arabic: 'استعارة', example: 'Life is a journey is a common metaphor.' },
      { english: 'Allegory', arabic: 'رمزية', example: 'The novel is an allegory for political oppression.' },
      { english: 'Sonnet', arabic: 'سونيتة', example: 'Shakespeare wrote 154 sonnets.' },
      { english: 'Stanza', arabic: 'مقطع شعري', example: 'The poem has four stanzas.' },
    ],
    sentences: [
      { english: 'This poem uses beautiful metaphors.', arabic: 'هذه القصيدة تستخدم استعارات جميلة.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هي "Metaphor"؟',
        data: { options: ['استعارة', 'تشبيه', 'كناية', 'جناس'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'كم سونيتة كتب شكسبير؟',
        data: { options: ['154', '100', '200', '50'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u02-l02': {
    lessonId: 'C2-u02-l02',
    passingScore: 70,
    vocab: [
      { english: 'Archaic forms', arabic: 'صيغ قديمة', example: 'Thou art my love.' },
      { english: 'Subjunctive mood', arabic: 'صيغة الشرط', example: 'If I were a bird, I would fly.' },
    ],
    sentences: [
      { english: 'If I were a king, I would rule wisely.', arabic: 'لو كنت ملكاً، لحكمت بحكمة.' },
    ],
    exercises: [
      {
        type: 'fill_blank',
        promptAr: 'أكمل: If I ___ a king, I would rule wisely.',
        data: { answer: 'were' }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما الصيغة الصحيحة للشرط؟',
        data: { options: ['If I were', 'If I was', 'If I am', 'If I be'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u02-l03': {
    lessonId: 'C2-u02-l03',
    passingScore: 70,
    vocab: [
      { english: 'Recitation', arabic: 'إلقاء', example: 'Her poetry recitation was moving.' },
      { english: 'Cadence', arabic: 'إيقاع', example: 'The cadence of his voice was hypnotic.' },
    ],
    sentences: [
      { english: 'The recitation moved the audience.', arabic: 'أثر الإلقاء في الجمهور.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Cadence"؟',
        data: { options: ['إيقاع', 'نغمة', 'صوت', 'صدى'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Recitation"؟',
        data: { options: ['إلقاء', 'كتابة', 'قراءة صامتة', 'ترجمة'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u02-l04': {
    lessonId: 'C2-u02-l04',
    passingScore: 70,
    vocab: [
      { english: 'Interpretation', arabic: 'تفسير', example: 'My interpretation of the poem differs.' },
      { english: 'Symbolism', arabic: 'رمزية', example: 'The white dove symbolism represents peace.' },
    ],
    sentences: [
      { english: 'My interpretation differs from yours.', arabic: 'تفسيري يختلف عن تفسيرك.' },
    ],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: تفسيري للقصيدة مختلف',
        data: { answer: 'My interpretation of the poem is different', alternatives: ['My interpretation of the poem differs'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Symbolism"؟',
        data: { options: ['رمزية', 'واقعية', 'حقيقة', 'خيال'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u02-l05': {
    lessonId: 'C2-u02-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هو الـ "Sonnet"؟',
        data: { options: ['قصيدة من 14 بيتاً', 'رواية قصيرة', 'مقال', 'مسرحية'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هي "Allegory"؟',
        data: { options: ['رمزية', 'استعارة', 'تشبيه', 'كناية'], correct: 0 },
        points: 10
      },
    ],
  },
};

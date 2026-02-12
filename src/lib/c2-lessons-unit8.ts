import { LessonContent } from './a1-lessons';

export const c2Unit8Lessons: Record<string, LessonContent> = {
  'C2-u08-l01': {
    lessonId: 'C2-u08-l01',
    passingScore: 70,
    vocab: [
      { english: 'Protocol', arabic: 'بروتوكول', example: 'Diplomatic protocol must be followed.' },
      { english: 'Bilateral', arabic: 'ثنائي', example: 'Bilateral negotiations began.' },
      { english: 'Multilateral', arabic: 'متعدد الأطراف', example: 'Multilateral agreements are complex.' },
      { english: 'Envoy', arabic: 'مبعوث', example: 'The envoy delivered the message.' },
    ],
    sentences: [
      { english: 'Diplomatic protocol ensures smooth relations.', arabic: 'البروتوكول الدبلوماسي يضمن علاقات سلسة.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Bilateral"؟',
        data: { options: ['بين طرفين', 'متعدد الأطراف', 'أحادي', 'دولي'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما الفرق بين Bilateral و Multilateral؟',
        data: { options: ['عدد الأطراف', 'نوع الاتفاق', 'مدة الاتفاق', 'موضوع الاتفاق'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u08-l02': {
    lessonId: 'C2-u08-l02',
    passingScore: 70,
    vocab: [
      { english: 'Conditional diplomacy', arabic: 'الدبلوماسية الشرطية', example: 'Should you agree, we would proceed.' },
      { english: 'Formal register', arabic: 'السجل الرسمي', example: 'Formal register is essential in diplomacy.' },
    ],
    sentences: [
      { english: 'Should you agree, we would be honored to proceed.', arabic: 'إذا وافقتم، سنكون مشرفين بالمتابعة.' },
    ],
    exercises: [
      {
        type: 'reorder',
        promptAr: 'رتب لتكوين جملة دبلوماسية',
        data: { words: ['Should', 'you', 'agree,', 'we', 'would', 'proceed'], correctOrder: [0, 1, 2, 3, 4, 5] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Formal register"؟',
        data: { options: ['الأسلوب الرسمي في الكلام', 'الأسلوب العامي', 'اللغة المحكية', 'اللغة العادية'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u08-l03': {
    lessonId: 'C2-u08-l03',
    passingScore: 70,
    vocab: [
      { english: 'Summit', arabic: 'قمة', example: 'The summit addressed global issues.' },
      { english: 'Accord', arabic: 'اتفاق', example: 'They reached an accord.' },
    ],
    sentences: [
      { english: 'The summit produced significant agreements.', arabic: 'أسفرت القمة عن اتفاقيات مهمة.' },
    ],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'ما هو "Summit" في السياق الدبلوماسي؟',
        data: { options: ['اجتماع قادة رفيعي المستوى', 'اتفاقية تجارية', 'معاهدة سلام', 'مؤتمر صحفي'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Accord"؟',
        data: { options: ['اتفاق', 'خلاف', 'حرب', 'سلام'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u08-l04': {
    lessonId: 'C2-u08-l04',
    passingScore: 70,
    vocab: [
      { english: 'To negotiate', arabic: 'للتفاوض', example: 'We are here to negotiate a solution.' },
      { english: 'To mediate', arabic: 'للتوسط', example: 'The UN will mediate the talks.' },
    ],
    sentences: [
      { english: 'We are here to negotiate in good faith.', arabic: 'نحن هنا للتفاوض بحسن نية.' },
    ],
    exercises: [
      {
        type: 'translation',
        promptAr: 'ترجم: نحن هنا للتفاوض على حل',
        data: { answer: 'We are here to negotiate a solution', alternatives: ['We are here to negotiate for a solution'] }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "To mediate"؟',
        data: { options: ['للتوسط', 'للتفاوض', 'للموافقة', 'للرفض'], correct: 0 },
        points: 10
      },
    ],
  },
  'C2-u08-l05': {
    lessonId: 'C2-u08-l05',
    passingScore: 70,
    vocab: [],
    sentences: [],
    exercises: [
      {
        type: 'mcq',
        promptAr: 'Bilateral يشمل...',
        data: { options: ['طرفين فقط', 'عدة أطراف', 'طرف واحد', 'لا أحد'], correct: 0 }
      },
    ],
    quiz: [
      {
        type: 'mcq',
        promptAr: 'ما معنى "Envoy"؟',
        data: { options: ['مبعوث', 'سفير', 'وزير', 'رئيس'], correct: 0 },
        points: 10
      },
    ],
  },
};

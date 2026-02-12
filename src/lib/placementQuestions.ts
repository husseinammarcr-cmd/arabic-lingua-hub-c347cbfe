// Placement Test Questions - 21 questions across A1-C2 levels
// Mixed vocabulary, grammar, and reading comprehension

export interface PlacementQuestion {
  id: number;
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  type: 'vocabulary' | 'grammar' | 'reading';
  questionAr: string;
  questionEn?: string;
  options: { id: string; text: string; textAr?: string }[];
  correctAnswer: string;
  explanation?: string;
}

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // A1 Level - Basic (Questions 1-4)
  {
    id: 1,
    level: 'A1',
    type: 'vocabulary',
    questionAr: 'ما معنى كلمة "Hello"؟',
    options: [
      { id: 'a', text: 'مرحباً', textAr: 'مرحباً' },
      { id: 'b', text: 'وداعاً', textAr: 'وداعاً' },
      { id: 'c', text: 'شكراً', textAr: 'شكراً' },
      { id: 'd', text: 'آسف', textAr: 'آسف' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 2,
    level: 'A1',
    type: 'grammar',
    questionAr: 'اختر الجملة الصحيحة:',
    options: [
      { id: 'a', text: 'I am a student.' },
      { id: 'b', text: 'I is a student.' },
      { id: 'c', text: 'I are a student.' },
      { id: 'd', text: 'I be a student.' },
    ],
    correctAnswer: 'a',
  },
  {
    id: 3,
    level: 'A1',
    type: 'vocabulary',
    questionAr: 'ما هو عكس كلمة "big" (كبير)؟',
    options: [
      { id: 'a', text: 'tall' },
      { id: 'b', text: 'small' },
      { id: 'c', text: 'long' },
      { id: 'd', text: 'wide' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 4,
    level: 'A1',
    type: 'grammar',
    questionAr: 'أكمل: She ___ a teacher.',
    options: [
      { id: 'a', text: 'am' },
      { id: 'b', text: 'is' },
      { id: 'c', text: 'are' },
      { id: 'd', text: 'be' },
    ],
    correctAnswer: 'b',
  },

  // A2 Level - Elementary (Questions 5-7)
  {
    id: 5,
    level: 'A2',
    type: 'grammar',
    questionAr: 'أكمل: I ___ to school yesterday.',
    options: [
      { id: 'a', text: 'go' },
      { id: 'b', text: 'goes' },
      { id: 'c', text: 'went' },
      { id: 'd', text: 'going' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 6,
    level: 'A2',
    type: 'vocabulary',
    questionAr: 'ما الفرق بين "borrow" و "lend"؟',
    options: [
      { id: 'a', text: 'borrow = يعطي، lend = يأخذ' },
      { id: 'b', text: 'borrow = يستعير، lend = يُعير' },
      { id: 'c', text: 'نفس المعنى' },
      { id: 'd', text: 'borrow = يشتري، lend = يبيع' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 7,
    level: 'A2',
    type: 'grammar',
    questionAr: 'أكمل: This book is ___ than that one.',
    options: [
      { id: 'a', text: 'interesting' },
      { id: 'b', text: 'more interesting' },
      { id: 'c', text: 'most interesting' },
      { id: 'd', text: 'interestinger' },
    ],
    correctAnswer: 'b',
  },

  // B1 Level - Intermediate (Questions 8-11)
  {
    id: 8,
    level: 'B1',
    type: 'grammar',
    questionAr: 'أكمل: If I ___ rich, I would travel the world.',
    options: [
      { id: 'a', text: 'am' },
      { id: 'b', text: 'was' },
      { id: 'c', text: 'were' },
      { id: 'd', text: 'will be' },
    ],
    correctAnswer: 'c',
  },
  {
    id: 9,
    level: 'B1',
    type: 'vocabulary',
    questionAr: 'ما معنى "although"؟',
    options: [
      { id: 'a', text: 'لأن' },
      { id: 'b', text: 'على الرغم من' },
      { id: 'c', text: 'بسبب' },
      { id: 'd', text: 'حتى' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 10,
    level: 'B1',
    type: 'grammar',
    questionAr: 'اختر الجملة الصحيحة:',
    options: [
      { id: 'a', text: 'The house was building in 1990.' },
      { id: 'b', text: 'The house was built in 1990.' },
      { id: 'c', text: 'The house was build in 1990.' },
      { id: 'd', text: 'The house is building in 1990.' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 11,
    level: 'B1',
    type: 'reading',
    questionAr: '"Despite the bad weather, they decided to continue with the trip." - ماذا يعني هذا؟',
    options: [
      { id: 'a', text: 'ألغوا الرحلة بسبب الطقس' },
      { id: 'b', text: 'استمروا في الرحلة رغم الطقس السيء' },
      { id: 'c', text: 'انتظروا تحسن الطقس' },
      { id: 'd', text: 'غيروا وجهة الرحلة' },
    ],
    correctAnswer: 'b',
  },

  // B2 Level - Upper Intermediate (Questions 12-14)
  {
    id: 12,
    level: 'B2',
    type: 'grammar',
    questionAr: 'أكمل: Had I known about the meeting, I ___ attended.',
    options: [
      { id: 'a', text: 'will have' },
      { id: 'b', text: 'would have' },
      { id: 'c', text: 'would' },
      { id: 'd', text: 'had' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 13,
    level: 'B2',
    type: 'vocabulary',
    questionAr: 'ما معنى "to take something for granted"؟',
    options: [
      { id: 'a', text: 'يأخذ شيئاً بالقوة' },
      { id: 'b', text: 'يعتبر شيئاً مسلّماً به' },
      { id: 'c', text: 'يرفض شيئاً' },
      { id: 'd', text: 'يعطي شيئاً بسخاء' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 14,
    level: 'B2',
    type: 'reading',
    questionAr: '"The unprecedented growth in technology has fundamentally altered the way we communicate." - ما المقصود بـ "unprecedented"؟',
    options: [
      { id: 'a', text: 'بطيء' },
      { id: 'b', text: 'متوقع' },
      { id: 'c', text: 'غير مسبوق' },
      { id: 'd', text: 'مؤقت' },
    ],
    correctAnswer: 'c',
  },

  // C1 Level - Advanced (Questions 15-18)
  {
    id: 15,
    level: 'C1',
    type: 'grammar',
    questionAr: 'أكمل: Never ___ such a remarkable performance.',
    options: [
      { id: 'a', text: 'I have seen' },
      { id: 'b', text: 'have I seen' },
      { id: 'c', text: 'I saw' },
      { id: 'd', text: 'did I saw' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 16,
    level: 'C1',
    type: 'vocabulary',
    questionAr: 'ما معنى "ubiquitous"؟',
    options: [
      { id: 'a', text: 'نادر جداً' },
      { id: 'b', text: 'موجود في كل مكان' },
      { id: 'c', text: 'غامض' },
      { id: 'd', text: 'مؤقت' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 17,
    level: 'C1',
    type: 'reading',
    questionAr: '"The paradigm shift in scientific thinking has rendered previous theories obsolete." - ما المقصود بـ "paradigm shift"؟',
    options: [
      { id: 'a', text: 'تغيير بسيط' },
      { id: 'b', text: 'تحول جذري في طريقة التفكير' },
      { id: 'c', text: 'تأكيد للنظريات السابقة' },
      { id: 'd', text: 'رفض العلم' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 18,
    level: 'C1',
    type: 'grammar',
    questionAr: 'اختر الجملة الصحيحة مع التركيب الشرطي المختلط:',
    options: [
      { id: 'a', text: 'If he studied harder, he would pass the exam.' },
      { id: 'b', text: 'If he had studied harder, he would be successful now.' },
      { id: 'c', text: 'If he studies harder, he will pass.' },
      { id: 'd', text: 'If he would study harder, he passed.' },
    ],
    correctAnswer: 'b',
  },

  // C2 Level - Proficiency (Questions 19-21)
  {
    id: 19,
    level: 'C2',
    type: 'vocabulary',
    questionAr: 'ما معنى "quintessential"؟',
    options: [
      { id: 'a', text: 'غير مهم' },
      { id: 'b', text: 'المثال الأكثر نموذجية وتمثيلاً' },
      { id: 'c', text: 'قديم ومهجور' },
      { id: 'd', text: 'معقد جداً' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 20,
    level: 'C2',
    type: 'reading',
    questionAr: '"The nuanced argument, while ostensibly compelling, fails to withstand rigorous scrutiny." - ما معنى هذه الجملة؟',
    options: [
      { id: 'a', text: 'الحجة قوية ومقنعة تماماً' },
      { id: 'b', text: 'الحجة تبدو مقنعة لكنها لا تصمد أمام التدقيق' },
      { id: 'c', text: 'الحجة بسيطة وواضحة' },
      { id: 'd', text: 'الحجة غير مفهومة' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 21,
    level: 'C2',
    type: 'grammar',
    questionAr: 'اختر التركيب الأكثر رسمية ودبلوماسية:',
    options: [
      { id: 'a', text: 'I want to talk about this problem.' },
      { id: 'b', text: 'We need to discuss this issue.' },
      { id: 'c', text: 'I would be grateful if we could address this matter at your earliest convenience.' },
      { id: 'd', text: 'Let\'s fix this problem now.' },
    ],
    correctAnswer: 'c',
  },
];

export const calculateLevel = (score: number, total: number): 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' => {
  const percentage = (score / total) * 100;
  
  if (percentage >= 95) return 'C2';
  if (percentage >= 85) return 'C1';
  if (percentage >= 70) return 'B2';
  if (percentage >= 55) return 'B1';
  if (percentage >= 40) return 'A2';
  return 'A1';
};

export const getLevelRecommendation = (level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'): string => {
  const recommendations: Record<string, string> = {
    'A1': 'أنت في المستوى المبتدئ. ستتعلم أساسيات اللغة الإنجليزية من التحيات والأرقام والتعبيرات اليومية البسيطة.',
    'A2': 'لديك معرفة أساسية جيدة! ستتعلم التعبير عن نفسك في مواقف يومية والتحدث عن الماضي والمستقبل.',
    'B1': 'أنت في المستوى المتوسط. ستتمكن من التعبير عن آرائك والتعامل مع مواقف متنوعة في السفر والعمل.',
    'B2': 'مستواك متقدم! ستتعلم التعبير بطلاقة ومناقشة مواضيع معقدة وفهم نصوص متقدمة.',
    'C1': 'أنت في المستوى المتقدم! ستتقن الكتابة الأكاديمية والتحليل النقدي والتواصل المهني على أعلى مستوى.',
    'C2': 'مستواك احترافي! ستصل لمستوى الناطق الأصلي في الأدب والخطابة والترجمة الإبداعية.',
  };
  return recommendations[level];
};

export const getLevelDescription = (level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'): { title: string; subtitle: string } => {
  const descriptions: Record<string, { title: string; subtitle: string }> = {
    'A1': { title: 'مبتدئ', subtitle: 'Beginner' },
    'A2': { title: 'أساسي', subtitle: 'Elementary' },
    'B1': { title: 'متوسط', subtitle: 'Intermediate' },
    'B2': { title: 'فوق المتوسط', subtitle: 'Upper-Intermediate' },
    'C1': { title: 'متقدم', subtitle: 'Advanced' },
    'C2': { title: 'إتقان', subtitle: 'Proficiency' },
  };
  return descriptions[level];
};

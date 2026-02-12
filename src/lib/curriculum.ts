// Complete A1-B2 English Learning Curriculum for Arabic Speakers

export interface CurriculumLesson {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  xpReward: number;
  hasRealExercises?: boolean;
}

export interface CurriculumUnit {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  icon: string;
  lessons: CurriculumLesson[];
}

export interface CurriculumLevel {
  id: string;
  code: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  color: string;
  units: CurriculumUnit[];
}

// Unit titles per level (Arabic)
const A1_UNITS = [
  { titleAr: 'التحيات والتعارف', titleEn: 'Greetings & Introductions', icon: 'hand-wave' },
  { titleAr: 'الأرقام والوقت', titleEn: 'Numbers & Time', icon: 'clock' },
  { titleAr: 'العائلة والبيت', titleEn: 'Family & Home', icon: 'home' },
  { titleAr: 'المدرسة والعمل', titleEn: 'School & Work', icon: 'briefcase' },
  { titleAr: 'الطعام والشراب', titleEn: 'Food & Drinks', icon: 'utensils' },
  { titleAr: 'الأماكن والاتجاهات', titleEn: 'Places & Directions', icon: 'map' },
  { titleAr: 'الروتين اليومي', titleEn: 'Daily Routine', icon: 'sun' },
  { titleAr: 'الهوايات', titleEn: 'Hobbies', icon: 'gamepad' },
  { titleAr: 'التسوق', titleEn: 'Shopping', icon: 'shopping-cart' },
  { titleAr: 'مراجعة A1', titleEn: 'A1 Review', icon: 'check-circle' },
];

const A2_UNITS = [
  { titleAr: 'الماضي البسيط', titleEn: 'Simple Past', icon: 'history' },
  { titleAr: 'المستقبل والخطط', titleEn: 'Future & Plans', icon: 'calendar' },
  { titleAr: 'السفر', titleEn: 'Travel', icon: 'plane' },
  { titleAr: 'الصحة', titleEn: 'Health', icon: 'heart-pulse' },
  { titleAr: 'الوصف والمقارنات', titleEn: 'Descriptions & Comparisons', icon: 'scale' },
  { titleAr: 'الهاتف والمراسلات', titleEn: 'Phone & Messages', icon: 'phone' },
  { titleAr: 'في المطعم', titleEn: 'At the Restaurant', icon: 'utensils' },
  { titleAr: 'في الفندق', titleEn: 'At the Hotel', icon: 'building' },
  { titleAr: 'العادات والتقاليد', titleEn: 'Customs & Traditions', icon: 'globe' },
  { titleAr: 'مراجعة A2', titleEn: 'A2 Review', icon: 'check-circle' },
];

const B1_UNITS = [
  { titleAr: 'رواية القصص', titleEn: 'Storytelling', icon: 'book-open' },
  { titleAr: 'آراء ونقاش', titleEn: 'Opinions & Discussion', icon: 'message-circle' },
  { titleAr: 'عمل ودراسة', titleEn: 'Work & Study', icon: 'graduation-cap' },
  { titleAr: 'مشكلات وحلول', titleEn: 'Problems & Solutions', icon: 'lightbulb' },
  { titleAr: 'الإعلام والمحتوى', titleEn: 'Media & Content', icon: 'tv' },
  { titleAr: 'التكنولوجيا', titleEn: 'Technology', icon: 'laptop' },
  { titleAr: 'البيئة', titleEn: 'Environment', icon: 'leaf' },
  { titleAr: 'العلاقات', titleEn: 'Relationships', icon: 'users' },
  { titleAr: 'مهارات مقابلات', titleEn: 'Interview Skills', icon: 'user-check' },
  { titleAr: 'مراجعة B1', titleEn: 'B1 Review', icon: 'check-circle' },
];

const B2_UNITS = [
  { titleAr: 'أساليب كتابة', titleEn: 'Writing Styles', icon: 'pen-tool' },
  { titleAr: 'نقاشات متقدمة', titleEn: 'Advanced Discussions', icon: 'message-square' },
  { titleAr: 'مصطلحات العمل', titleEn: 'Business Terms', icon: 'briefcase' },
  { titleAr: 'عروض وتقديم', titleEn: 'Presentations', icon: 'presentation' },
  { titleAr: 'مقالات وتقارير', titleEn: 'Articles & Reports', icon: 'file-text' },
  { titleAr: 'حجج وإقناع', titleEn: 'Arguments & Persuasion', icon: 'target' },
  { titleAr: 'Idioms & Phrasal Verbs', titleEn: 'Idioms & Phrasal Verbs', icon: 'puzzle' },
  { titleAr: 'رسمي/غير رسمي', titleEn: 'Formal/Informal', icon: 'layers' },
  { titleAr: 'اختبار شامل', titleEn: 'Comprehensive Test', icon: 'clipboard-check' },
  { titleAr: 'مراجعة B2', titleEn: 'B2 Review', icon: 'check-circle' },
];

const C1_UNITS = [
  { titleAr: 'التعبير الدقيق', titleEn: 'Nuanced Expression', icon: 'feather' },
  { titleAr: 'الكتابة الأكاديمية', titleEn: 'Academic Writing', icon: 'scroll' },
  { titleAr: 'الإعلام والصحافة', titleEn: 'Media & Journalism', icon: 'newspaper' },
  { titleAr: 'القانون والسياسة', titleEn: 'Law & Politics', icon: 'gavel' },
  { titleAr: 'العلوم والتكنولوجيا', titleEn: 'Science & Technology', icon: 'flask' },
  { titleAr: 'الفلسفة والتفكير المجرد', titleEn: 'Philosophy & Abstract Thinking', icon: 'brain' },
  { titleAr: 'التحليل الأدبي', titleEn: 'Literary Analysis', icon: 'book-open' },
  { titleAr: 'تلازمات متقدمة', titleEn: 'Advanced Collocations', icon: 'link' },
  { titleAr: 'التواصل المهني', titleEn: 'Professional Communication', icon: 'building-2' },
  { titleAr: 'مراجعة C1', titleEn: 'C1 Review', icon: 'check-circle' },
];

const C2_UNITS = [
  { titleAr: 'الإتقان اللغوي', titleEn: 'Language Mastery', icon: 'crown' },
  { titleAr: 'الأدب والشعر', titleEn: 'Literature & Poetry', icon: 'book-heart' },
  { titleAr: 'الخطابة والإقناع', titleEn: 'Rhetoric & Persuasion', icon: 'mic' },
  { titleAr: 'الترجمة المتقدمة', titleEn: 'Advanced Translation', icon: 'languages' },
  { titleAr: 'اللهجات والتنوع اللغوي', titleEn: 'Dialects & Linguistic Diversity', icon: 'globe-2' },
  { titleAr: 'الكتابة الإبداعية', titleEn: 'Creative Writing', icon: 'feather' },
  { titleAr: 'النقد والتحليل', titleEn: 'Criticism & Analysis', icon: 'search' },
  { titleAr: 'التواصل الدبلوماسي', titleEn: 'Diplomatic Communication', icon: 'handshake' },
  { titleAr: 'اللغة في السياقات المتخصصة', titleEn: 'Specialized Contexts', icon: 'briefcase' },
  { titleAr: 'مراجعة C2', titleEn: 'C2 Review', icon: 'award' },
];

// Lesson templates per unit position
const LESSON_TEMPLATES = [
  { suffix: 'المفردات', suffixEn: 'Vocabulary' },
  { suffix: 'القواعد', suffixEn: 'Grammar' },
  { suffix: 'الاستماع', suffixEn: 'Listening' },
  { suffix: 'المحادثة', suffixEn: 'Conversation' },
  { suffix: 'التمارين', suffixEn: 'Practice' },
];

function generateUUID(level: string, unitIndex: number, lessonIndex?: number): string {
  const base = `${level}-u${unitIndex.toString().padStart(2, '0')}`;
  if (lessonIndex !== undefined) {
    return `${base}-l${lessonIndex.toString().padStart(2, '0')}`;
  }
  return base;
}

function generateLessons(levelCode: string, unitIndex: number, unitTitleAr: string): CurriculumLesson[] {
  return LESSON_TEMPLATES.map((template, lessonIndex) => ({
    id: generateUUID(levelCode, unitIndex, lessonIndex + 1),
    titleAr: `${template.suffix}`,
    titleEn: template.suffixEn,
    descriptionAr: `درس ${template.suffix} في وحدة ${unitTitleAr}`,
    xpReward: 10 + (lessonIndex * 2),
    hasRealExercises: levelCode === 'A1' && unitIndex === 1 && lessonIndex === 0,
  }));
}

function generateUnits(levelCode: string, unitTemplates: typeof A1_UNITS): CurriculumUnit[] {
  return unitTemplates.map((unit, index) => ({
    id: generateUUID(levelCode, index + 1),
    titleAr: unit.titleAr,
    titleEn: unit.titleEn,
    descriptionAr: `تعلم ${unit.titleAr} بالإنجليزية`,
    icon: unit.icon,
    lessons: generateLessons(levelCode, index + 1, unit.titleAr),
  }));
}

export const CURRICULUM: CurriculumLevel[] = [
  {
    id: 'level-a1',
    code: 'A1',
    titleAr: 'المبتدئ',
    titleEn: 'Beginner',
    descriptionAr: 'تعلم أساسيات اللغة الإنجليزية من الصفر',
    color: 'emerald',
    units: generateUnits('A1', A1_UNITS),
  },
  {
    id: 'level-a2',
    code: 'A2',
    titleAr: 'فوق المبتدئ',
    titleEn: 'Elementary',
    descriptionAr: 'وسّع مفرداتك وتعلم التعبيرات الأساسية',
    color: 'sky',
    units: generateUnits('A2', A2_UNITS),
  },
  {
    id: 'level-b1',
    code: 'B1',
    titleAr: 'المتوسط',
    titleEn: 'Intermediate',
    descriptionAr: 'تعلم المحادثة والتعبير عن الآراء',
    color: 'violet',
    units: generateUnits('B1', B1_UNITS),
  },
  {
    id: 'level-b2',
    code: 'B2',
    titleAr: 'فوق المتوسط',
    titleEn: 'Upper Intermediate',
    descriptionAr: 'أتقن اللغة للعمل والدراسة',
    color: 'amber',
    units: generateUnits('B2', B2_UNITS),
  },
  {
    id: 'level-c1',
    code: 'C1',
    titleAr: 'المتقدم',
    titleEn: 'Advanced',
    descriptionAr: 'أتقن اللغة بمستوى أكاديمي ومهني عالي',
    color: 'rose',
    units: generateUnits('C1', C1_UNITS),
  },
  {
    id: 'level-c2',
    code: 'C2',
    titleAr: 'الإتقان',
    titleEn: 'Proficiency',
    descriptionAr: 'مستوى الناطق الأصلي - إتقان كامل للغة',
    color: 'fuchsia',
    units: generateUnits('C2', C2_UNITS),
  },
];

// Helper functions
export function getLevelByCode(code: string): CurriculumLevel | undefined {
  return CURRICULUM.find(level => level.code.toLowerCase() === code.toLowerCase());
}

export function getUnitById(levelCode: string, unitId: string): CurriculumUnit | undefined {
  const level = getLevelByCode(levelCode);
  return level?.units.find(unit => unit.id === unitId);
}

export function getLessonById(lessonId: string): { level: CurriculumLevel; unit: CurriculumUnit; lesson: CurriculumLesson } | undefined {
  for (const level of CURRICULUM) {
    for (const unit of level.units) {
      const lesson = unit.lessons.find(l => l.id === lessonId);
      if (lesson) {
        return { level, unit, lesson };
      }
    }
  }
  return undefined;
}

export function getAllLessons(): Array<{ levelCode: string; unitId: string; lesson: CurriculumLesson }> {
  const lessons: Array<{ levelCode: string; unitId: string; lesson: CurriculumLesson }> = [];
  for (const level of CURRICULUM) {
    for (const unit of level.units) {
      for (const lesson of unit.lessons) {
        lessons.push({ levelCode: level.code, unitId: unit.id, lesson });
      }
    }
  }
  return lessons;
}

export function getTotalLessonsCount(): number {
  return CURRICULUM.reduce((total, level) => 
    total + level.units.reduce((unitTotal, unit) => unitTotal + unit.lessons.length, 0), 0
  );
}

// Real exercises for A1 Unit 1 Lesson 1
export const A1_UNIT1_LESSON1_EXERCISES = [
  {
    id: 'ex-a1-u1-l1-1',
    type: 'mcq' as const,
    promptAr: 'ما معنى كلمة "Hello"؟',
    promptEn: 'What does "Hello" mean?',
    data_json: {
      question: 'ما معنى كلمة "Hello"؟',
      options: ['مرحباً', 'وداعاً', 'شكراً', 'من فضلك'],
      correctIndex: 0,
      explanation: '"Hello" تعني "مرحباً" وهي تحية شائعة في الإنجليزية',
    },
  },
  {
    id: 'ex-a1-u1-l1-2',
    type: 'mcq' as const,
    promptAr: 'كيف تقول "صباح الخير" بالإنجليزية؟',
    promptEn: 'How do you say "صباح الخير" in English?',
    data_json: {
      question: 'كيف تقول "صباح الخير" بالإنجليزية؟',
      options: ['Good morning', 'Good night', 'Good evening', 'Goodbye'],
      correctIndex: 0,
      explanation: '"Good morning" هي التحية الصباحية',
    },
  },
  {
    id: 'ex-a1-u1-l1-3',
    type: 'reorder' as const,
    promptAr: 'رتب الكلمات لتكوين جملة صحيحة',
    promptEn: 'Arrange the words to form a correct sentence',
    data_json: {
      words: ['My', 'name', 'is', 'Ahmed'],
      correctOrder: [0, 1, 2, 3],
      translation: 'اسمي أحمد',
    },
  },
  {
    id: 'ex-a1-u1-l1-4',
    type: 'fill_blank' as const,
    promptAr: 'أكمل الجملة: Nice to ___ you!',
    promptEn: 'Complete the sentence',
    data_json: {
      sentence: 'Nice to ___ you!',
      answer: 'meet',
      hint: 'هذه العبارة تُقال عند مقابلة شخص لأول مرة',
      translation: 'سعيد بمقابلتك',
    },
  },
  {
    id: 'ex-a1-u1-l1-5',
    type: 'mcq' as const,
    promptAr: 'ماذا تقول عندما تريد أن تودع شخصاً؟',
    promptEn: 'What do you say when you want to say goodbye?',
    data_json: {
      question: 'ماذا تقول عندما تريد أن تودع شخصاً؟',
      options: ['Goodbye', 'Hello', 'Thank you', 'Please'],
      correctIndex: 0,
      explanation: '"Goodbye" تعني "وداعاً"',
    },
  },
  {
    id: 'ex-a1-u1-l1-6',
    type: 'translation' as const,
    promptAr: 'ترجم إلى الإنجليزية: كيف حالك؟',
    promptEn: 'Translate to English',
    data_json: {
      sourceText: 'كيف حالك؟',
      correctAnswers: ['How are you?', 'How are you'],
      hint: 'How...',
    },
  },
  {
    id: 'ex-a1-u1-l1-7',
    type: 'reorder' as const,
    promptAr: 'رتب الكلمات: you / are / How / ?',
    promptEn: 'Arrange the words',
    data_json: {
      words: ['How', 'are', 'you', '?'],
      correctOrder: [0, 1, 2, 3],
      translation: 'كيف حالك؟',
    },
  },
  {
    id: 'ex-a1-u1-l1-8',
    type: 'mcq' as const,
    promptAr: 'ما هو الرد المناسب على "How are you?"',
    promptEn: 'What is the appropriate response?',
    data_json: {
      question: 'ما هو الرد المناسب على "How are you?"',
      options: ['I am fine, thank you', 'My name is...', 'Goodbye', 'Good morning'],
      correctIndex: 0,
      explanation: 'الرد المناسب هو "I am fine, thank you" أي "أنا بخير، شكراً"',
    },
  },
];

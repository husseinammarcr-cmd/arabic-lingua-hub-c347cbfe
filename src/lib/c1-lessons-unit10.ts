import { LessonContent } from './a1-lessons';

// Unit 10: C1 Review - مراجعة C1
export const C1_U10_L1: LessonContent = {
  lessonId: 'C1-u10-l01',
  passingScore: 75,
  vocab: [
    { english: 'proficiency', arabic: 'إتقان', example: 'Language proficiency.', exampleAr: 'إتقان اللغة.' },
    { english: 'fluency', arabic: 'طلاقة', example: 'Achieve fluency.', exampleAr: 'حقق الطلاقة.' },
    { english: 'comprehension', arabic: 'فهم', example: 'Reading comprehension.', exampleAr: 'الفهم القرائي.' },
    { english: 'articulation', arabic: 'تعبير واضح', example: 'Clear articulation.', exampleAr: 'تعبير واضح.' },
    { english: 'mastery', arabic: 'إتقان', example: 'Mastery of skills.', exampleAr: 'إتقان المهارات.' },
    { english: 'competence', arabic: 'كفاءة', example: 'Professional competence.', exampleAr: 'كفاءة مهنية.' },
    { english: 'expertise', arabic: 'خبرة', example: 'Develop expertise.', exampleAr: 'طوّر الخبرة.' },
    { english: 'sophistication', arabic: 'تطور', example: 'Linguistic sophistication.', exampleAr: 'تطور لغوي.' }
  ],
  sentences: [
    { english: 'Your language proficiency has improved significantly.', arabic: 'إتقانك للغة تحسن بشكل ملحوظ.' },
    { english: 'Fluency comes with consistent practice.', arabic: 'الطلاقة تأتي مع الممارسة المستمرة.' },
    { english: 'You\'ve demonstrated professional competence.', arabic: 'أظهرت كفاءة مهنية.' },
    { english: 'Your linguistic sophistication is impressive.', arabic: 'تطورك اللغوي مثير للإعجاب.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "proficiency"؟', data: { options: ['إتقان', 'بداية', 'محاولة', 'صعوبة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Language _____. (طلاقة)', data: { answer: 'fluency' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'mastery', arabic: 'إتقان' }, { english: 'competence', arabic: 'كفاءة' }, { english: 'expertise', arabic: 'خبرة' }] } },
    { type: 'mcq', promptAr: 'ما معنى "sophistication"؟', data: { options: ['تطور', 'بساطة', 'سهولة', 'صعوبة'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "comprehension"؟', data: { options: ['فهم', 'كتابة', 'نطق', 'استماع'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Clear _____. (تعبير)', data: { answer: 'articulation' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: إتقانك للغة تحسن بشكل ملحوظ.', data: { answer: 'Your language proficiency has improved significantly.' }, points: 15 }
  ]
};

export const C1_U10_L2: LessonContent = {
  lessonId: 'C1-u10-l02',
  passingScore: 75,
  vocab: [
    { english: 'consolidate', arabic: 'يثبت', example: 'Consolidate your learning.', exampleAr: 'ثبّت تعلمك.' },
    { english: 'reinforce', arabic: 'يعزز', example: 'Reinforce vocabulary.', exampleAr: 'عزز المفردات.' },
    { english: 'retain', arabic: 'يحتفظ', example: 'Retain information.', exampleAr: 'احتفظ بالمعلومات.' },
    { english: 'recall', arabic: 'يتذكر', example: 'Easy to recall.', exampleAr: 'سهل التذكر.' },
    { english: 'apply', arabic: 'يطبق', example: 'Apply knowledge.', exampleAr: 'طبق المعرفة.' },
    { english: 'integrate', arabic: 'يدمج', example: 'Integrate skills.', exampleAr: 'ادمج المهارات.' },
    { english: 'synthesize', arabic: 'يركب', example: 'Synthesize ideas.', exampleAr: 'ركب الأفكار.' },
    { english: 'evaluate', arabic: 'يقيم', example: 'Evaluate progress.', exampleAr: 'قيم التقدم.' }
  ],
  sentences: [
    { english: 'Regular practice helps consolidate learning.', arabic: 'الممارسة المنتظمة تساعد على تثبيت التعلم.' },
    { english: 'Reinforce what you\'ve learned through use.', arabic: 'عزز ما تعلمته من خلال الاستخدام.' },
    { english: 'Apply your knowledge in real situations.', arabic: 'طبق معرفتك في مواقف حقيقية.' },
    { english: 'Integrate all skills for effective communication.', arabic: 'ادمج كل المهارات للتواصل الفعال.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "consolidate"؟', data: { options: ['يثبت', 'يبدأ', 'ينسى', 'يغير'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ information. (احتفظ)', data: { answer: 'Retain' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'reinforce', arabic: 'يعزز' }, { english: 'apply', arabic: 'يطبق' }, { english: 'integrate', arabic: 'يدمج' }] } },
    { type: 'mcq', promptAr: 'ما معنى "synthesize"؟', data: { options: ['يركب', 'يفصل', 'يحذف', 'يضيف'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "recall"؟', data: { options: ['يتذكر', 'ينسى', 'يتعلم', 'يدرس'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ progress. (قيم)', data: { answer: 'Evaluate' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الممارسة المنتظمة تساعد على تثبيت التعلم.', data: { answer: 'Regular practice helps consolidate learning.' }, points: 15 }
  ]
};

export const C1_U10_L3: LessonContent = {
  lessonId: 'C1-u10-l03',
  passingScore: 75,
  vocab: [
    { english: 'milestone', arabic: 'إنجاز', example: 'Reach a milestone.', exampleAr: 'حقق إنجازاً.' },
    { english: 'achievement', arabic: 'تحقيق', example: 'Celebrate achievements.', exampleAr: 'احتفل بالتحقيقات.' },
    { english: 'breakthrough', arabic: 'اختراق', example: 'A language breakthrough.', exampleAr: 'اختراق لغوي.' },
    { english: 'progress', arabic: 'تقدم', example: 'Make progress.', exampleAr: 'حقق تقدماً.' },
    { english: 'advancement', arabic: 'تطور', example: 'Personal advancement.', exampleAr: 'تطور شخصي.' },
    { english: 'growth', arabic: 'نمو', example: 'Continuous growth.', exampleAr: 'نمو مستمر.' },
    { english: 'development', arabic: 'تنمية', example: 'Skill development.', exampleAr: 'تنمية المهارات.' },
    { english: 'improvement', arabic: 'تحسن', example: 'Noticeable improvement.', exampleAr: 'تحسن ملحوظ.' }
  ],
  sentences: [
    { english: 'Completing C1 is a significant milestone.', arabic: 'إكمال C1 إنجاز مهم.' },
    { english: 'Your breakthrough moments are memorable.', arabic: 'لحظات اختراقك لا تُنسى.' },
    { english: 'Continuous growth requires dedication.', arabic: 'النمو المستمر يتطلب تفانياً.' },
    { english: 'Your improvement has been remarkable.', arabic: 'تحسنك كان ملحوظاً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "milestone"؟', data: { options: ['إنجاز', 'فشل', 'بداية', 'نهاية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Make _____. (تقدم)', data: { answer: 'progress' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'achievement', arabic: 'تحقيق' }, { english: 'growth', arabic: 'نمو' }, { english: 'development', arabic: 'تنمية' }] } },
    { type: 'mcq', promptAr: 'ما معنى "breakthrough"؟', data: { options: ['اختراق', 'توقف', 'تراجع', 'ثبات'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "advancement"؟', data: { options: ['تطور', 'تراجع', 'توقف', 'نهاية'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Noticeable _____. (تحسن)', data: { answer: 'improvement' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: إكمال C1 إنجاز مهم.', data: { answer: 'Completing C1 is a significant milestone.' }, points: 15 }
  ]
};

export const C1_U10_L4: LessonContent = {
  lessonId: 'C1-u10-l04',
  passingScore: 75,
  vocab: [
    { english: 'autonomous', arabic: 'مستقل', example: 'Become an autonomous learner.', exampleAr: 'كن متعلماً مستقلاً.' },
    { english: 'self-directed', arabic: 'ذاتي التوجيه', example: 'Self-directed learning.', exampleAr: 'تعلم ذاتي التوجيه.' },
    { english: 'resourceful', arabic: 'واسع الحيلة', example: 'Be resourceful.', exampleAr: 'كن واسع الحيلة.' },
    { english: 'adaptable', arabic: 'قابل للتكيف', example: 'Stay adaptable.', exampleAr: 'ابق قابلاً للتكيف.' },
    { english: 'resilient', arabic: 'مرن', example: 'Build resilience.', exampleAr: 'ابن المرونة.' },
    { english: 'proactive', arabic: 'استباقي', example: 'Be proactive.', exampleAr: 'كن استباقياً.' },
    { english: 'persistent', arabic: 'مثابر', example: 'Stay persistent.', exampleAr: 'ابق مثابراً.' },
    { english: 'lifelong learner', arabic: 'متعلم مدى الحياة', example: 'Become a lifelong learner.', exampleAr: 'كن متعلماً مدى الحياة.' }
  ],
  sentences: [
    { english: 'Autonomous learners take charge of their education.', arabic: 'المتعلمون المستقلون يتحملون مسؤولية تعليمهم.' },
    { english: 'Being adaptable helps you succeed.', arabic: 'كونك قابلاً للتكيف يساعدك على النجاح.' },
    { english: 'Resilience is key to overcoming challenges.', arabic: 'المرونة مفتاح التغلب على التحديات.' },
    { english: 'Commit to being a lifelong learner.', arabic: 'التزم بأن تكون متعلماً مدى الحياة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "autonomous"؟', data: { options: ['مستقل', 'تابع', 'ضعيف', 'بطيء'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Be _____. (استباقي)', data: { answer: 'proactive' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'resourceful', arabic: 'واسع الحيلة' }, { english: 'resilient', arabic: 'مرن' }, { english: 'persistent', arabic: 'مثابر' }] } },
    { type: 'mcq', promptAr: 'ما معنى "lifelong learner"؟', data: { options: ['متعلم مدى الحياة', 'طالب', 'معلم', 'خريج'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "adaptable"؟', data: { options: ['قابل للتكيف', 'جامد', 'ثابت', 'صعب'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Stay _____. (مثابر)', data: { answer: 'persistent' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المرونة مفتاح التغلب على التحديات.', data: { answer: 'Resilience is key to overcoming challenges.' }, points: 15 }
  ]
};

export const C1_U10_L5: LessonContent = {
  lessonId: 'C1-u10-l05',
  passingScore: 75,
  vocab: [
    { english: 'congratulations', arabic: 'تهانينا', example: 'Congratulations on completing C1!', exampleAr: 'تهانينا على إكمال C1!' },
    { english: 'accomplish', arabic: 'ينجز', example: 'You accomplished your goal.', exampleAr: 'أنجزت هدفك.' },
    { english: 'triumph', arabic: 'انتصار', example: 'A personal triumph.', exampleAr: 'انتصار شخصي.' },
    { english: 'culmination', arabic: 'تتويج', example: 'The culmination of hard work.', exampleAr: 'تتويج العمل الجاد.' },
    { english: 'extraordinary', arabic: 'استثنائي', example: 'Extraordinary achievement.', exampleAr: 'إنجاز استثنائي.' },
    { english: 'remarkable', arabic: 'مميز', example: 'Remarkable progress.', exampleAr: 'تقدم مميز.' },
    { english: 'exceptional', arabic: 'متميز', example: 'Exceptional skills.', exampleAr: 'مهارات متميزة.' },
    { english: 'commendable', arabic: 'جدير بالثناء', example: 'Commendable effort.', exampleAr: 'جهد جدير بالثناء.' }
  ],
  sentences: [
    { english: 'Congratulations on this extraordinary achievement!', arabic: 'تهانينا على هذا الإنجاز الاستثنائي!' },
    { english: 'This is the culmination of your dedication.', arabic: 'هذا تتويج لتفانيك.' },
    { english: 'Your progress has been remarkable.', arabic: 'تقدمك كان مميزاً.' },
    { english: 'You\'ve demonstrated exceptional skills.', arabic: 'أظهرت مهارات متميزة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "culmination"؟', data: { options: ['تتويج', 'بداية', 'وسط', 'نهاية'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ achievement. (استثنائي)', data: { answer: 'Extraordinary' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'triumph', arabic: 'انتصار' }, { english: 'remarkable', arabic: 'مميز' }, { english: 'exceptional', arabic: 'متميز' }] } },
    { type: 'mcq', promptAr: 'ما معنى "commendable"؟', data: { options: ['جدير بالثناء', 'سيء', 'عادي', 'ضعيف'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "accomplish"؟', data: { options: ['ينجز', 'يفشل', 'يحاول', 'يتوقف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ effort. (جدير بالثناء)', data: { answer: 'Commendable' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: تهانينا على هذا الإنجاز الاستثنائي!', data: { answer: 'Congratulations on this extraordinary achievement!' }, points: 15 }
  ]
};

export const c1Unit10Lessons: Record<string, LessonContent> = {
  'C1-u10-l01': C1_U10_L1,
  'C1-u10-l02': C1_U10_L2,
  'C1-u10-l03': C1_U10_L3,
  'C1-u10-l04': C1_U10_L4,
  'C1-u10-l05': C1_U10_L5,
};

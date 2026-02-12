import { LessonContent } from './a1-lessons';

// Unit 9: Personal Development - التنمية الشخصية
export const B1_U9_L1: LessonContent = {
  lessonId: 'B1-u09-l01',
  passingScore: 70,
  vocab: [
    { english: 'goal', arabic: 'هدف', example: 'Set a goal.', exampleAr: 'حدد هدفاً.' },
    { english: 'motivation', arabic: 'تحفيز', example: 'Find your motivation.', exampleAr: 'ابحث عن تحفيزك.' },
    { english: 'habit', arabic: 'عادة', example: 'Build good habits.', exampleAr: 'ابنِ عادات جيدة.' },
    { english: 'discipline', arabic: 'انضباط', example: 'Discipline is key.', exampleAr: 'الانضباط مفتاح.' },
    { english: 'mindset', arabic: 'عقلية', example: 'Change your mindset.', exampleAr: 'غيّر عقليتك.' },
    { english: 'growth', arabic: 'نمو', example: 'Focus on growth.', exampleAr: 'ركز على النمو.' },
    { english: 'self-improvement', arabic: 'تحسين الذات', example: 'Work on self-improvement.', exampleAr: 'اعمل على تحسين الذات.' },
    { english: 'potential', arabic: 'إمكانية', example: 'Reach your potential.', exampleAr: 'حقق إمكانياتك.' }
  ],
  sentences: [
    { english: 'Set clear goals for yourself.', arabic: 'حدد أهدافاً واضحة لنفسك.' },
    { english: 'Good habits lead to success.', arabic: 'العادات الجيدة تؤدي للنجاح.' },
    { english: 'A growth mindset helps you learn.', arabic: 'العقلية النامية تساعدك على التعلم.' },
    { english: 'Self-improvement is a lifelong journey.', arabic: 'تحسين الذات رحلة مدى الحياة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "motivation"؟', data: { options: ['تحفيز', 'هدف', 'عادة', 'انضباط'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Build good _____. (عادات)', data: { answer: 'habits' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'goal', arabic: 'هدف' }, { english: 'discipline', arabic: 'انضباط' }, { english: 'growth', arabic: 'نمو' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "عقلية"؟', data: { options: ['mindset', 'mindful', 'mind', 'mine'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "potential"؟', data: { options: ['إمكانية', 'هدف', 'عادة', 'نمو'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Work on _____-improvement. (الذات)', data: { answer: 'self' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: حدد هدفاً.', data: { answer: 'Set a goal.' }, points: 15 }
  ]
};

export const B1_U9_L2: LessonContent = {
  lessonId: 'B1-u09-l02',
  passingScore: 70,
  vocab: [
    { english: 'time management', arabic: 'إدارة الوقت', example: 'Learn time management.', exampleAr: 'تعلم إدارة الوقت.' },
    { english: 'priority', arabic: 'أولوية', example: 'Set your priorities.', exampleAr: 'حدد أولوياتك.' },
    { english: 'schedule', arabic: 'جدول', example: 'Follow a schedule.', exampleAr: 'اتبع جدولاً.' },
    { english: 'deadline', arabic: 'موعد نهائي', example: 'Meet the deadline.', exampleAr: 'التزم بالموعد النهائي.' },
    { english: 'procrastination', arabic: 'تسويف', example: 'Avoid procrastination.', exampleAr: 'تجنب التسويف.' },
    { english: 'efficient', arabic: 'فعّال', example: 'Be more efficient.', exampleAr: 'كن أكثر فعالية.' },
    { english: 'organize', arabic: 'ينظم', example: 'Organize your tasks.', exampleAr: 'نظم مهامك.' },
    { english: 'focus', arabic: 'تركيز', example: 'Improve your focus.', exampleAr: 'حسّن تركيزك.' }
  ],
  sentences: [
    { english: 'Time management is essential for success.', arabic: 'إدارة الوقت ضرورية للنجاح.' },
    { english: 'Set your priorities and stick to them.', arabic: 'حدد أولوياتك والتزم بها.' },
    { english: 'Procrastination wastes valuable time.', arabic: 'التسويف يضيع وقتاً ثميناً.' },
    { english: 'Being organized helps you work efficiently.', arabic: 'التنظيم يساعدك على العمل بفعالية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "procrastination"؟', data: { options: ['تسويف', 'تنظيم', 'تركيز', 'فعالية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Meet the _____. (موعد نهائي)', data: { answer: 'deadline' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "أولوية"؟', data: { options: ['priority', 'primary', 'prior', 'private'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['tasks', 'your', 'organize'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "efficient"؟', data: { options: ['فعّال', 'بطيء', 'كسول', 'متأخر'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Improve your _____. (تركيز)', data: { answer: 'focus' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: تعلم إدارة الوقت.', data: { answer: 'Learn time management.' }, points: 15 }
  ]
};

export const B1_U9_L3: LessonContent = {
  lessonId: 'B1-u09-l03',
  passingScore: 70,
  vocab: [
    { english: 'skill', arabic: 'مهارة', example: 'Learn a new skill.', exampleAr: 'تعلم مهارة جديدة.' },
    { english: 'talent', arabic: 'موهبة', example: 'Develop your talent.', exampleAr: 'طور موهبتك.' },
    { english: 'practice', arabic: 'ممارسة', example: 'Practice makes perfect.', exampleAr: 'الممارسة تصنع الكمال.' },
    { english: 'learn', arabic: 'يتعلم', example: 'Never stop learning.', exampleAr: 'لا تتوقف عن التعلم.' },
    { english: 'improve', arabic: 'يحسّن', example: 'Improve every day.', exampleAr: 'تحسّن كل يوم.' },
    { english: 'master', arabic: 'يتقن', example: 'Master the basics first.', exampleAr: 'أتقن الأساسيات أولاً.' },
    { english: 'expertise', arabic: 'خبرة', example: 'Build your expertise.', exampleAr: 'ابنِ خبرتك.' },
    { english: 'knowledge', arabic: 'معرفة', example: 'Knowledge is power.', exampleAr: 'المعرفة قوة.' }
  ],
  sentences: [
    { english: 'Developing new skills opens opportunities.', arabic: 'تطوير مهارات جديدة يفتح الفرص.' },
    { english: 'Practice consistently to improve.', arabic: 'مارس باستمرار للتحسن.' },
    { english: 'Master the basics before advancing.', arabic: 'أتقن الأساسيات قبل التقدم.' },
    { english: 'Knowledge and expertise come with time.', arabic: 'المعرفة والخبرة تأتيان مع الوقت.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "skill"؟', data: { options: ['مهارة', 'موهبة', 'معرفة', 'خبرة'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ makes perfect. (الممارسة)', data: { answer: 'Practice' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'learn', arabic: 'يتعلم' }, { english: 'improve', arabic: 'يحسّن' }, { english: 'master', arabic: 'يتقن' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "معرفة"؟', data: { options: ['knowledge', 'know', 'known', 'knowing'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "expertise"؟', data: { options: ['خبرة', 'مهارة', 'ممارسة', 'تعلم'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Develop your _____. (موهبة)', data: { answer: 'talent' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المعرفة قوة.', data: { answer: 'Knowledge is power.' }, points: 15 }
  ]
};

export const B1_U9_L4: LessonContent = {
  lessonId: 'B1-u09-l04',
  passingScore: 70,
  vocab: [
    { english: 'confidence', arabic: 'ثقة', example: 'Build your confidence.', exampleAr: 'ابنِ ثقتك.' },
    { english: 'self-esteem', arabic: 'تقدير الذات', example: 'Improve your self-esteem.', exampleAr: 'حسّن تقديرك لذاتك.' },
    { english: 'positive', arabic: 'إيجابي', example: 'Stay positive.', exampleAr: 'ابقَ إيجابياً.' },
    { english: 'attitude', arabic: 'موقف', example: 'Have a positive attitude.', exampleAr: 'تحلَّ بموقف إيجابي.' },
    { english: 'resilience', arabic: 'مرونة', example: 'Build resilience.', exampleAr: 'ابنِ المرونة.' },
    { english: 'overcome', arabic: 'يتغلب', example: 'Overcome your fears.', exampleAr: 'تغلب على مخاوفك.' },
    { english: 'strength', arabic: 'قوة', example: 'Find your inner strength.', exampleAr: 'ابحث عن قوتك الداخلية.' },
    { english: 'believe', arabic: 'يؤمن', example: 'Believe in yourself.', exampleAr: 'آمن بنفسك.' }
  ],
  sentences: [
    { english: 'Building confidence takes time and practice.', arabic: 'بناء الثقة يحتاج وقتاً وممارسة.' },
    { english: 'A positive attitude helps you overcome challenges.', arabic: 'الموقف الإيجابي يساعدك على التغلب على التحديات.' },
    { english: 'Believe in yourself and your abilities.', arabic: 'آمن بنفسك وبقدراتك.' },
    { english: 'Resilience helps you bounce back from failure.', arabic: 'المرونة تساعدك على التعافي من الفشل.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "resilience"؟', data: { options: ['مرونة', 'ثقة', 'قوة', 'موقف'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ in yourself. (آمن)', data: { answer: 'Believe' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "تقدير الذات"؟', data: { options: ['self-esteem', 'self-respect', 'self-love', 'self-care'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['positive', 'stay'], correctOrder: [1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "overcome"؟', data: { options: ['يتغلب', 'يستسلم', 'يخاف', 'يهرب'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Build your _____. (ثقة)', data: { answer: 'confidence' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: ابقَ إيجابياً.', data: { answer: 'Stay positive.' }, points: 15 }
  ]
};

export const B1_U9_L5: LessonContent = {
  lessonId: 'B1-u09-l05',
  passingScore: 70,
  vocab: [
    { english: 'success', arabic: 'نجاح', example: 'Define your success.', exampleAr: 'حدد نجاحك.' },
    { english: 'failure', arabic: 'فشل', example: 'Learn from failure.', exampleAr: 'تعلم من الفشل.' },
    { english: 'perseverance', arabic: 'مثابرة', example: 'Perseverance pays off.', exampleAr: 'المثابرة تؤتي ثمارها.' },
    { english: 'determination', arabic: 'تصميم', example: 'Show determination.', exampleAr: 'أظهر تصميماً.' },
    { english: 'achievement', arabic: 'إنجاز', example: 'Celebrate your achievements.', exampleAr: 'احتفل بإنجازاتك.' },
    { english: 'milestone', arabic: 'محطة', example: 'Reach a milestone.', exampleAr: 'حقق محطة.' },
    { english: 'ambition', arabic: 'طموح', example: 'Have big ambitions.', exampleAr: 'تحلَّ بطموحات كبيرة.' },
    { english: 'dream', arabic: 'حلم', example: 'Follow your dreams.', exampleAr: 'اتبع أحلامك.' }
  ],
  sentences: [
    { english: 'Success comes to those who persevere.', arabic: 'النجاح يأتي لمن يثابرون.' },
    { english: 'Failure is just a step toward success.', arabic: 'الفشل مجرد خطوة نحو النجاح.' },
    { english: 'Celebrate every achievement, big or small.', arabic: 'احتفل بكل إنجاز، كبيراً أو صغيراً.' },
    { english: 'Never give up on your dreams.', arabic: 'لا تتخلَّ عن أحلامك أبداً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "perseverance"؟', data: { options: ['مثابرة', 'نجاح', 'فشل', 'طموح'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Learn from _____. (الفشل)', data: { answer: 'failure' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'success', arabic: 'نجاح' }, { english: 'achievement', arabic: 'إنجاز' }, { english: 'dream', arabic: 'حلم' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "طموح"؟', data: { options: ['ambition', 'ambiguous', 'ambitious', 'ambulance'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "determination"؟', data: { options: ['تصميم', 'تردد', 'خوف', 'ضعف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Reach a _____. (محطة)', data: { answer: 'milestone' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: اتبع أحلامك.', data: { answer: 'Follow your dreams.' }, points: 15 }
  ]
};

export const b1Unit9Lessons: Record<string, LessonContent> = {
  'B1-u09-l01': B1_U9_L1,
  'B1-u09-l02': B1_U9_L2,
  'B1-u09-l03': B1_U9_L3,
  'B1-u09-l04': B1_U9_L4,
  'B1-u09-l05': B1_U9_L5,
};

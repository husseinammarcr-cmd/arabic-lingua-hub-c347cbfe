import { LessonContent } from './a1-lessons';

// Unit 4: Presentations - عروض وتقديم
export const B2_U4_L1: LessonContent = {
  lessonId: 'B2-u04-l01',
  passingScore: 70,
  vocab: [
    { english: 'presentation', arabic: 'عرض تقديمي', example: 'I\'m giving a presentation.', exampleAr: 'أقدم عرضاً تقديمياً.' },
    { english: 'slide', arabic: 'شريحة', example: 'Move to the next slide.', exampleAr: 'انتقل إلى الشريحة التالية.' },
    { english: 'audience', arabic: 'جمهور', example: 'Know your audience.', exampleAr: 'اعرف جمهورك.' },
    { english: 'visual aid', arabic: 'وسيلة بصرية', example: 'Use visual aids.', exampleAr: 'استخدم وسائل بصرية.' },
    { english: 'handout', arabic: 'نشرة', example: 'Distribute the handouts.', exampleAr: 'وزّع النشرات.' },
    { english: 'Q&A', arabic: 'أسئلة وأجوبة', example: 'We\'ll have a Q&A session.', exampleAr: 'سيكون لدينا جلسة أسئلة وأجوبة.' },
    { english: 'projector', arabic: 'جهاز عرض', example: 'Connect the projector.', exampleAr: 'اوصل جهاز العرض.' },
    { english: 'pointer', arabic: 'مؤشر', example: 'Use the laser pointer.', exampleAr: 'استخدم المؤشر الليزري.' }
  ],
  sentences: [
    { english: 'My presentation will be twenty minutes.', arabic: 'عرضي التقديمي سيكون عشرين دقيقة.' },
    { english: 'Each slide should have one main idea.', arabic: 'كل شريحة يجب أن تحتوي على فكرة رئيسية واحدة.' },
    { english: 'Visual aids help explain complex concepts.', arabic: 'الوسائل البصرية تساعد في شرح المفاهيم المعقدة.' },
    { english: 'I\'ll take questions at the end.', arabic: 'سأتلقى الأسئلة في النهاية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "audience"؟', data: { options: ['جمهور', 'شريحة', 'عرض', 'مؤشر'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Distribute the _____. (نشرات)', data: { answer: 'handouts' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'slide', arabic: 'شريحة' }, { english: 'projector', arabic: 'جهاز عرض' }, { english: 'pointer', arabic: 'مؤشر' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "وسيلة بصرية"؟', data: { options: ['visual aid', 'audio aid', 'teaching aid', 'hearing aid'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Q&A"؟', data: { options: ['أسئلة وأجوبة', 'عرض', 'نشرة', 'شريحة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Know your _____. (جمهور)', data: { answer: 'audience' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: عرضي التقديمي سيكون عشرين دقيقة.', data: { answer: 'My presentation will be twenty minutes.' }, points: 15 }
  ]
};

export const B2_U4_L2: LessonContent = {
  lessonId: 'B2-u04-l02',
  passingScore: 70,
  vocab: [
    { english: 'opening', arabic: 'افتتاح', example: 'Start with a strong opening.', exampleAr: 'ابدأ بافتتاح قوي.' },
    { english: 'overview', arabic: 'نظرة عامة', example: 'Here\'s an overview.', exampleAr: 'إليكم نظرة عامة.' },
    { english: 'agenda', arabic: 'جدول أعمال', example: 'Let me present the agenda.', exampleAr: 'دعوني أعرض جدول الأعمال.' },
    { english: 'objective', arabic: 'هدف', example: 'Our objective is clear.', exampleAr: 'هدفنا واضح.' },
    { english: 'key point', arabic: 'نقطة رئيسية', example: 'This is a key point.', exampleAr: 'هذه نقطة رئيسية.' },
    { english: 'highlight', arabic: 'يبرز', example: 'I want to highlight this.', exampleAr: 'أريد أن أبرز هذا.' },
    { english: 'transition', arabic: 'انتقال', example: 'Now let\'s transition to...', exampleAr: 'الآن دعونا ننتقل إلى...' },
    { english: 'recap', arabic: 'ملخص', example: 'Let me recap.', exampleAr: 'دعوني ألخص.' }
  ],
  sentences: [
    { english: 'Good morning, let me start with an overview.', arabic: 'صباح الخير، دعوني أبدأ بنظرة عامة.' },
    { english: 'The agenda covers three main topics.', arabic: 'جدول الأعمال يغطي ثلاثة مواضيع رئيسية.' },
    { english: 'I\'d like to highlight an important point.', arabic: 'أود أن أبرز نقطة مهمة.' },
    { english: 'Let me recap what we\'ve covered.', arabic: 'دعوني ألخص ما غطيناه.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "overview"؟', data: { options: ['نظرة عامة', 'افتتاح', 'هدف', 'ملخص'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Let me present the _____. (جدول أعمال)', data: { answer: 'agenda' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يبرز"؟', data: { options: ['highlight', 'lowlight', 'underline', 'delete'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['recap', 'me', 'Let'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "objective"؟', data: { options: ['هدف', 'نظرة', 'ملخص', 'جدول'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'This is a _____ _____. (نقطة رئيسية)', data: { answer: 'key point' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: جدول الأعمال يغطي ثلاثة مواضيع رئيسية.', data: { answer: 'The agenda covers three main topics.' }, points: 15 }
  ]
};

export const B2_U4_L3: LessonContent = {
  lessonId: 'B2-u04-l03',
  passingScore: 70,
  vocab: [
    { english: 'elaborate', arabic: 'يفصّل', example: 'Let me elaborate on this.', exampleAr: 'دعني أفصّل هذا.' },
    { english: 'diagram', arabic: 'رسم بياني', example: 'This diagram shows...', exampleAr: 'هذا الرسم البياني يُظهر...' },
    { english: 'chart', arabic: 'مخطط', example: 'Look at this chart.', exampleAr: 'انظر إلى هذا المخطط.' },
    { english: 'graph', arabic: 'رسم بياني', example: 'The graph indicates...', exampleAr: 'الرسم البياني يشير إلى...' },
    { english: 'statistics', arabic: 'إحصائيات', example: 'The statistics show...', exampleAr: 'الإحصائيات تُظهر...' },
    { english: 'trend', arabic: 'اتجاه', example: 'Notice the upward trend.', exampleAr: 'لاحظ الاتجاه الصاعد.' },
    { english: 'data', arabic: 'بيانات', example: 'Based on the data...', exampleAr: 'بناءً على البيانات...' },
    { english: 'percentage', arabic: 'نسبة مئوية', example: 'The percentage increased.', exampleAr: 'ارتفعت النسبة المئوية.' }
  ],
  sentences: [
    { english: 'This chart illustrates our growth.', arabic: 'هذا المخطط يوضح نمونا.' },
    { english: 'The statistics support our findings.', arabic: 'الإحصائيات تدعم نتائجنا.' },
    { english: 'There\'s a clear upward trend.', arabic: 'هناك اتجاه صاعد واضح.' },
    { english: 'The percentage has doubled.', arabic: 'النسبة المئوية تضاعفت.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "trend"؟', data: { options: ['اتجاه', 'بيانات', 'نسبة', 'مخطط'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ show our progress. (إحصائيات)', data: { answer: 'statistics' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'chart', arabic: 'مخطط' }, { english: 'data', arabic: 'بيانات' }, { english: 'percentage', arabic: 'نسبة مئوية' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "رسم بياني"؟', data: { options: ['graph', 'picture', 'photo', 'image'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "elaborate"؟', data: { options: ['يفصّل', 'يختصر', 'يحذف', 'يبدأ'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'This _____ shows our results. (مخطط)', data: { answer: 'chart' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هناك اتجاه صاعد واضح.', data: { answer: 'There\'s a clear upward trend.' }, points: 15 }
  ]
};

export const B2_U4_L4: LessonContent = {
  lessonId: 'B2-u04-l04',
  passingScore: 70,
  vocab: [
    { english: 'engage', arabic: 'يشرك', example: 'Engage your audience.', exampleAr: 'أشرك جمهورك.' },
    { english: 'interact', arabic: 'يتفاعل', example: 'Interact with participants.', exampleAr: 'تفاعل مع المشاركين.' },
    { english: 'eye contact', arabic: 'تواصل بصري', example: 'Maintain eye contact.', exampleAr: 'حافظ على التواصل البصري.' },
    { english: 'body language', arabic: 'لغة الجسد', example: 'Mind your body language.', exampleAr: 'انتبه للغة جسدك.' },
    { english: 'gesture', arabic: 'إيماءة', example: 'Use appropriate gestures.', exampleAr: 'استخدم إيماءات مناسبة.' },
    { english: 'pace', arabic: 'إيقاع', example: 'Slow down your pace.', exampleAr: 'أبطئ إيقاعك.' },
    { english: 'pause', arabic: 'توقف', example: 'Pause for effect.', exampleAr: 'توقف للتأثير.' },
    { english: 'confidence', arabic: 'ثقة', example: 'Speak with confidence.', exampleAr: 'تحدث بثقة.' }
  ],
  sentences: [
    { english: 'Eye contact builds connection with your audience.', arabic: 'التواصل البصري يبني علاقة مع جمهورك.' },
    { english: 'Your body language speaks volumes.', arabic: 'لغة جسدك تتحدث كثيراً.' },
    { english: 'A well-timed pause is powerful.', arabic: 'التوقف في الوقت المناسب قوي.' },
    { english: 'Confidence comes with practice.', arabic: 'الثقة تأتي مع الممارسة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "eye contact"؟', data: { options: ['تواصل بصري', 'نظرة', 'رؤية', 'عين'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Speak with _____. (ثقة)', data: { answer: 'confidence' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "إيماءة"؟', data: { options: ['gesture', 'posture', 'movement', 'action'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['audience', 'your', 'Engage'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "pace"؟', data: { options: ['إيقاع', 'سرعة', 'توقف', 'حركة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Mind your _____ _____. (لغة الجسد)', data: { answer: 'body language' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الثقة تأتي مع الممارسة.', data: { answer: 'Confidence comes with practice.' }, points: 15 }
  ]
};

export const B2_U4_L5: LessonContent = {
  lessonId: 'B2-u04-l05',
  passingScore: 70,
  vocab: [
    { english: 'conclusion', arabic: 'خاتمة', example: 'In conclusion...', exampleAr: 'في الختام...' },
    { english: 'summarize', arabic: 'يلخص', example: 'Let me summarize.', exampleAr: 'دعوني ألخص.' },
    { english: 'takeaway', arabic: 'الخلاصة', example: 'The main takeaway is...', exampleAr: 'الخلاصة الرئيسية هي...' },
    { english: 'call to action', arabic: 'دعوة للعمل', example: 'End with a call to action.', exampleAr: 'اختم بدعوة للعمل.' },
    { english: 'recommendation', arabic: 'توصية', example: 'My recommendation is...', exampleAr: 'توصيتي هي...' },
    { english: 'next steps', arabic: 'الخطوات التالية', example: 'Here are the next steps.', exampleAr: 'إليكم الخطوات التالية.' },
    { english: 'follow-up', arabic: 'متابعة', example: 'I\'ll send a follow-up email.', exampleAr: 'سأرسل بريداً للمتابعة.' },
    { english: 'feedback', arabic: 'تغذية راجعة', example: 'I welcome your feedback.', exampleAr: 'أرحب بتغذيتكم الراجعة.' }
  ],
  sentences: [
    { english: 'In conclusion, we achieved our goals.', arabic: 'في الختام، حققنا أهدافنا.' },
    { english: 'The key takeaway is that teamwork matters.', arabic: 'الخلاصة الرئيسية هي أن العمل الجماعي مهم.' },
    { english: 'My recommendation is to proceed.', arabic: 'توصيتي هي المضي قدماً.' },
    { english: 'I\'ll send follow-up details by email.', arabic: 'سأرسل تفاصيل المتابعة بالبريد الإلكتروني.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "takeaway"؟', data: { options: ['الخلاصة', 'الخاتمة', 'البداية', 'الوسط'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'End with a _____ to _____. (دعوة للعمل)', data: { answer: 'call to action' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'conclusion', arabic: 'خاتمة' }, { english: 'recommendation', arabic: 'توصية' }, { english: 'follow-up', arabic: 'متابعة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "الخطوات التالية"؟', data: { options: ['next steps', 'first steps', 'last steps', 'all steps'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "feedback"؟', data: { options: ['تغذية راجعة', 'معلومات', 'بيانات', 'تقرير'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Let me _____. (ألخص)', data: { answer: 'summarize' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: في الختام، حققنا أهدافنا.', data: { answer: 'In conclusion, we achieved our goals.' }, points: 15 }
  ]
};

export const b2Unit4Lessons: Record<string, LessonContent> = {
  'B2-u04-l01': B2_U4_L1,
  'B2-u04-l02': B2_U4_L2,
  'B2-u04-l03': B2_U4_L3,
  'B2-u04-l04': B2_U4_L4,
  'B2-u04-l05': B2_U4_L5,
};

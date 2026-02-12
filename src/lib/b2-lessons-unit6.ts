import { LessonContent } from './a1-lessons';

// Unit 6: Arguments & Persuasion - حجج وإقناع
export const B2_U6_L1: LessonContent = {
  lessonId: 'B2-u06-l01',
  passingScore: 70,
  vocab: [
    { english: 'persuade', arabic: 'يقنع', example: 'I tried to persuade him.', exampleAr: 'حاولت إقناعه.' },
    { english: 'convince', arabic: 'يقنع', example: 'She convinced me.', exampleAr: 'أقنعتني.' },
    { english: 'argument', arabic: 'حجة', example: 'Present a strong argument.', exampleAr: 'قدّم حجة قوية.' },
    { english: 'logic', arabic: 'منطق', example: 'Use logic in your argument.', exampleAr: 'استخدم المنطق في حجتك.' },
    { english: 'reason', arabic: 'سبب', example: 'Give me a reason.', exampleAr: 'أعطني سبباً.' },
    { english: 'justify', arabic: 'يبرر', example: 'Justify your position.', exampleAr: 'بررّ موقفك.' },
    { english: 'rational', arabic: 'عقلاني', example: 'Be rational.', exampleAr: 'كن عقلانياً.' },
    { english: 'emotional', arabic: 'عاطفي', example: 'Avoid emotional arguments.', exampleAr: 'تجنب الحجج العاطفية.' }
  ],
  sentences: [
    { english: 'A persuasive argument uses both logic and emotion.', arabic: 'الحجة المقنعة تستخدم المنطق والعاطفة معاً.' },
    { english: 'Can you justify that decision?', arabic: 'هل يمكنك تبرير ذلك القرار؟' },
    { english: 'Stay rational during the debate.', arabic: 'ابق عقلانياً خلال المناظرة.' },
    { english: 'Give me three good reasons.', arabic: 'أعطني ثلاثة أسباب جيدة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "justify"؟', data: { options: ['يبرر', 'يقنع', 'يرفض', 'يوافق'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Use _____ in your argument. (منطق)', data: { answer: 'logic' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'persuade', arabic: 'يقنع' }, { english: 'rational', arabic: 'عقلاني' }, { english: 'reason', arabic: 'سبب' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "عاطفي"؟', data: { options: ['emotional', 'rational', 'logical', 'practical'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "logic"؟', data: { options: ['منطق', 'عاطفة', 'سبب', 'حجة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Be _____. (عقلانياً)', data: { answer: 'rational' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هل يمكنك تبرير ذلك القرار؟', data: { answer: 'Can you justify that decision?' }, points: 15 }
  ]
};

export const B2_U6_L2: LessonContent = {
  lessonId: 'B2-u06-l02',
  passingScore: 70,
  vocab: [
    { english: 'fallacy', arabic: 'مغالطة', example: 'That\'s a logical fallacy.', exampleAr: 'هذه مغالطة منطقية.' },
    { english: 'bias', arabic: 'تحيز', example: 'Watch out for bias.', exampleAr: 'انتبه للتحيز.' },
    { english: 'stereotype', arabic: 'صورة نمطية', example: 'Avoid stereotypes.', exampleAr: 'تجنب الصور النمطية.' },
    { english: 'generalization', arabic: 'تعميم', example: 'That\'s a broad generalization.', exampleAr: 'هذا تعميم واسع.' },
    { english: 'assumption', arabic: 'افتراض', example: 'Check your assumptions.', exampleAr: 'تحقق من افتراضاتك.' },
    { english: 'exaggeration', arabic: 'مبالغة', example: 'Avoid exaggeration.', exampleAr: 'تجنب المبالغة.' },
    { english: 'manipulation', arabic: 'تلاعب', example: 'Recognize manipulation.', exampleAr: 'تعرف على التلاعب.' },
    { english: 'credibility', arabic: 'مصداقية', example: 'Build your credibility.', exampleAr: 'ابنِ مصداقيتك.' }
  ],
  sentences: [
    { english: 'Logical fallacies weaken arguments.', arabic: 'المغالطات المنطقية تضعف الحجج.' },
    { english: 'Confirmation bias affects judgment.', arabic: 'التحيز التأكيدي يؤثر على الحكم.' },
    { english: 'Generalizations can be misleading.', arabic: 'التعميمات يمكن أن تكون مضللة.' },
    { english: 'Credibility takes time to build.', arabic: 'المصداقية تستغرق وقتاً لبنائها.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "fallacy"؟', data: { options: ['مغالطة', 'حقيقة', 'دليل', 'منطق'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Avoid _____. (صور نمطية)', data: { answer: 'stereotypes' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "مبالغة"؟', data: { options: ['exaggeration', 'expression', 'explanation', 'expansion'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['credibility', 'your', 'Build'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "manipulation"؟', data: { options: ['تلاعب', 'إقناع', 'مناقشة', 'تفاوض'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Check your _____. (افتراضات)', data: { answer: 'assumptions' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المغالطات المنطقية تضعف الحجج.', data: { answer: 'Logical fallacies weaken arguments.' }, points: 15 }
  ]
};

export const B2_U6_L3: LessonContent = {
  lessonId: 'B2-u06-l03',
  passingScore: 70,
  vocab: [
    { english: 'ethos', arabic: 'مصداقية', example: 'Build ethos with expertise.', exampleAr: 'ابنِ المصداقية بالخبرة.' },
    { english: 'pathos', arabic: 'عاطفة', example: 'Use pathos to connect.', exampleAr: 'استخدم العاطفة للتواصل.' },
    { english: 'logos', arabic: 'منطق', example: 'Support with logos.', exampleAr: 'ادعم بالمنطق.' },
    { english: 'rhetoric', arabic: 'بلاغة', example: 'Learn rhetorical techniques.', exampleAr: 'تعلم تقنيات البلاغة.' },
    { english: 'appeal', arabic: 'نداء', example: 'Make an emotional appeal.', exampleAr: 'وجه نداءً عاطفياً.' },
    { english: 'audience', arabic: 'جمهور', example: 'Know your audience.', exampleAr: 'اعرف جمهورك.' },
    { english: 'tone', arabic: 'نبرة', example: 'Adjust your tone.', exampleAr: 'عدّل نبرتك.' },
    { english: 'emphasis', arabic: 'تأكيد', example: 'Put emphasis on key points.', exampleAr: 'ضع التأكيد على النقاط الرئيسية.' }
  ],
  sentences: [
    { english: 'Ethos establishes speaker credibility.', arabic: 'المصداقية تثبت موثوقية المتحدث.' },
    { english: 'Pathos appeals to emotions.', arabic: 'العاطفة تخاطب المشاعر.' },
    { english: 'Logos uses logic and evidence.', arabic: 'المنطق يستخدم الدليل والبرهان.' },
    { english: 'Effective rhetoric combines all three.', arabic: 'البلاغة الفعالة تجمع الثلاثة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "rhetoric"؟', data: { options: ['بلاغة', 'منطق', 'عاطفة', 'مصداقية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Know your _____. (جمهور)', data: { answer: 'audience' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'ethos', arabic: 'مصداقية' }, { english: 'pathos', arabic: 'عاطفة' }, { english: 'logos', arabic: 'منطق' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "تأكيد"؟', data: { options: ['emphasis', 'stress', 'pressure', 'force'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "appeal"؟', data: { options: ['نداء', 'جواب', 'سؤال', 'رفض'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Adjust your _____. (نبرة)', data: { answer: 'tone' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: البلاغة الفعالة تجمع الثلاثة.', data: { answer: 'Effective rhetoric combines all three.' }, points: 15 }
  ]
};

export const B2_U6_L4: LessonContent = {
  lessonId: 'B2-u06-l04',
  passingScore: 70,
  vocab: [
    { english: 'counter', arabic: 'يرد', example: 'Counter the argument.', exampleAr: 'رد على الحجة.' },
    { english: 'rebut', arabic: 'يدحض', example: 'Rebut the claims.', exampleAr: 'ادحض الادعاءات.' },
    { english: 'refute', arabic: 'يفند', example: 'Refute the evidence.', exampleAr: 'فنّد الأدلة.' },
    { english: 'challenge', arabic: 'يتحدى', example: 'Challenge the assumption.', exampleAr: 'تحدَّ الافتراض.' },
    { english: 'question', arabic: 'يشكك', example: 'Question the source.', exampleAr: 'شكك في المصدر.' },
    { english: 'undermine', arabic: 'يقوض', example: 'This undermines the argument.', exampleAr: 'هذا يقوض الحجة.' },
    { english: 'dismiss', arabic: 'يرفض', example: 'Don\'t dismiss their concerns.', exampleAr: 'لا ترفض مخاوفهم.' },
    { english: 'acknowledge', arabic: 'يعترف', example: 'Acknowledge valid points.', exampleAr: 'اعترف بالنقاط الصحيحة.' }
  ],
  sentences: [
    { english: 'Counter opposing arguments effectively.', arabic: 'رد على الحجج المعارضة بفعالية.' },
    { english: 'Strong evidence can refute claims.', arabic: 'الأدلة القوية يمكن أن تفند الادعاءات.' },
    { english: 'Always question your sources.', arabic: 'دائماً شكك في مصادرك.' },
    { english: 'Acknowledge opposing viewpoints first.', arabic: 'اعترف بوجهات النظر المعارضة أولاً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "refute"؟', data: { options: ['يفند', 'يؤكد', 'يوافق', 'يقبل'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Don\'t _____ their concerns. (ترفض)', data: { answer: 'dismiss' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يقوض"؟', data: { options: ['undermine', 'support', 'build', 'create'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['points', 'valid', 'Acknowledge'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "rebut"؟', data: { options: ['يدحض', 'يوافق', 'يؤيد', 'يقبل'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ the assumption. (تحدَّ)', data: { answer: 'Challenge' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الأدلة القوية يمكن أن تفند الادعاءات.', data: { answer: 'Strong evidence can refute claims.' }, points: 15 }
  ]
};

export const B2_U6_L5: LessonContent = {
  lessonId: 'B2-u06-l05',
  passingScore: 70,
  vocab: [
    { english: 'propose', arabic: 'يقترح', example: 'I propose a solution.', exampleAr: 'أقترح حلاً.' },
    { english: 'suggest', arabic: 'يقترح', example: 'I suggest we reconsider.', exampleAr: 'أقترح أن نعيد النظر.' },
    { english: 'recommend', arabic: 'يوصي', example: 'I recommend this approach.', exampleAr: 'أوصي بهذا النهج.' },
    { english: 'advocate', arabic: 'يدافع عن', example: 'I advocate for change.', exampleAr: 'أدافع عن التغيير.' },
    { english: 'endorse', arabic: 'يؤيد', example: 'I endorse this plan.', exampleAr: 'أؤيد هذه الخطة.' },
    { english: 'oppose', arabic: 'يعارض', example: 'I oppose this decision.', exampleAr: 'أعارض هذا القرار.' },
    { english: 'support', arabic: 'يدعم', example: 'I support your idea.', exampleAr: 'أدعم فكرتك.' },
    { english: 'reject', arabic: 'يرفض', example: 'I reject this proposal.', exampleAr: 'أرفض هذا الاقتراح.' }
  ],
  sentences: [
    { english: 'I propose we take a different approach.', arabic: 'أقترح أن نتخذ نهجاً مختلفاً.' },
    { english: 'She advocates for environmental protection.', arabic: 'تدافع عن حماية البيئة.' },
    { english: 'Many experts endorse this method.', arabic: 'كثير من الخبراء يؤيدون هذه الطريقة.' },
    { english: 'We strongly oppose the new policy.', arabic: 'نعارض بشدة السياسة الجديدة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "advocate"؟', data: { options: ['يدافع عن', 'يعارض', 'يرفض', 'يتجاهل'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'I _____ this plan. (أؤيد)', data: { answer: 'endorse' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'propose', arabic: 'يقترح' }, { english: 'oppose', arabic: 'يعارض' }, { english: 'support', arabic: 'يدعم' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يرفض"؟', data: { options: ['reject', 'accept', 'approve', 'support'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "recommend"؟', data: { options: ['يوصي', 'يعارض', 'يرفض', 'يتجاهل'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'I _____ your idea. (أدعم)', data: { answer: 'support' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أقترح أن نتخذ نهجاً مختلفاً.', data: { answer: 'I propose we take a different approach.' }, points: 15 }
  ]
};

export const b2Unit6Lessons: Record<string, LessonContent> = {
  'B2-u06-l01': B2_U6_L1,
  'B2-u06-l02': B2_U6_L2,
  'B2-u06-l03': B2_U6_L3,
  'B2-u06-l04': B2_U6_L4,
  'B2-u06-l05': B2_U6_L5,
};

import { LessonContent } from './a1-lessons';

// Unit 9: Comprehensive Test - اختبار شامل
export const B2_U9_L1: LessonContent = {
  lessonId: 'B2-u09-l01',
  passingScore: 70,
  vocab: [
    { english: 'comprehensive', arabic: 'شامل', example: 'Take a comprehensive test.', exampleAr: 'أجرِ اختباراً شاملاً.' },
    { english: 'assessment', arabic: 'تقييم', example: 'This is a self-assessment.', exampleAr: 'هذا تقييم ذاتي.' },
    { english: 'proficiency', arabic: 'إتقان', example: 'Test your English proficiency.', exampleAr: 'اختبر إتقانك للإنجليزية.' },
    { english: 'fluency', arabic: 'طلاقة', example: 'Improve your fluency.', exampleAr: 'حسّن طلاقتك.' },
    { english: 'accuracy', arabic: 'دقة', example: 'Focus on accuracy.', exampleAr: 'ركز على الدقة.' },
    { english: 'vocabulary', arabic: 'مفردات', example: 'Expand your vocabulary.', exampleAr: 'وسّع مفرداتك.' },
    { english: 'grammar', arabic: 'قواعد', example: 'Review grammar rules.', exampleAr: 'راجع قواعد اللغة.' },
    { english: 'pronunciation', arabic: 'نطق', example: 'Practice pronunciation.', exampleAr: 'تدرب على النطق.' }
  ],
  sentences: [
    { english: 'This comprehensive test covers all skills.', arabic: 'هذا الاختبار الشامل يغطي جميع المهارات.' },
    { english: 'Your proficiency level is B2.', arabic: 'مستوى إتقانك هو B2.' },
    { english: 'Fluency and accuracy are both important.', arabic: 'الطلاقة والدقة كلاهما مهمان.' },
    { english: 'Building vocabulary takes time and practice.', arabic: 'بناء المفردات يستغرق وقتاً وممارسة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "proficiency"؟', data: { options: ['إتقان', 'طلاقة', 'دقة', 'مفردات'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Focus on _____. (دقة)', data: { answer: 'accuracy' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'fluency', arabic: 'طلاقة' }, { english: 'grammar', arabic: 'قواعد' }, { english: 'pronunciation', arabic: 'نطق' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "شامل"؟', data: { options: ['comprehensive', 'complete', 'total', 'full'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "assessment"؟', data: { options: ['تقييم', 'اختبار', 'درس', 'تمرين'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Expand your _____. (مفردات)', data: { answer: 'vocabulary' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الطلاقة والدقة كلاهما مهمان.', data: { answer: 'Fluency and accuracy are both important.' }, points: 15 }
  ]
};

export const B2_U9_L2: LessonContent = {
  lessonId: 'B2-u09-l02',
  passingScore: 70,
  vocab: [
    { english: 'analyze', arabic: 'يحلل', example: 'Analyze the text carefully.', exampleAr: 'حلل النص بعناية.' },
    { english: 'synthesize', arabic: 'يجمع', example: 'Synthesize information from sources.', exampleAr: 'اجمع المعلومات من المصادر.' },
    { english: 'evaluate', arabic: 'يقيّم', example: 'Evaluate the argument.', exampleAr: 'قيّم الحجة.' },
    { english: 'compare', arabic: 'يقارن', example: 'Compare the two texts.', exampleAr: 'قارن بين النصين.' },
    { english: 'contrast', arabic: 'يباين', example: 'Contrast their approaches.', exampleAr: 'باين بين مناهجهم.' },
    { english: 'summarize', arabic: 'يلخص', example: 'Summarize the main points.', exampleAr: 'لخص النقاط الرئيسية.' },
    { english: 'paraphrase', arabic: 'يعيد الصياغة', example: 'Paraphrase this sentence.', exampleAr: 'أعد صياغة هذه الجملة.' },
    { english: 'infer', arabic: 'يستنتج', example: 'What can you infer?', exampleAr: 'ماذا يمكنك أن تستنتج؟' }
  ],
  sentences: [
    { english: 'Analyze the author\'s purpose.', arabic: 'حلل غرض الكاتب.' },
    { english: 'Compare and contrast the two perspectives.', arabic: 'قارن وباين بين المنظورين.' },
    { english: 'Summarize the article in your own words.', arabic: 'لخص المقال بكلماتك الخاصة.' },
    { english: 'What can you infer from the context?', arabic: 'ماذا يمكنك استنتاجه من السياق؟' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "synthesize"؟', data: { options: ['يجمع', 'يحلل', 'يفرق', 'يقسم'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ the main points. (لخص)', data: { answer: 'Summarize' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'compare', arabic: 'يقارن' }, { english: 'contrast', arabic: 'يباين' }, { english: 'paraphrase', arabic: 'يعيد الصياغة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يستنتج"؟', data: { options: ['infer', 'refer', 'prefer', 'defer'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "evaluate"؟', data: { options: ['يقيّم', 'يحلل', 'يلخص', 'يقارن'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ the text carefully. (حلل)', data: { answer: 'Analyze' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: قارن وباين بين المنظورين.', data: { answer: 'Compare and contrast the two perspectives.' }, points: 15 }
  ]
};

export const B2_U9_L3: LessonContent = {
  lessonId: 'B2-u09-l03',
  passingScore: 70,
  vocab: [
    { english: 'would have', arabic: 'كان سيـ', example: 'I would have helped.', exampleAr: 'كنت سأساعد.' },
    { english: 'could have', arabic: 'كان يمكن أن', example: 'You could have called.', exampleAr: 'كان يمكنك الاتصال.' },
    { english: 'should have', arabic: 'كان يجب أن', example: 'I should have studied more.', exampleAr: 'كان يجب أن أدرس أكثر.' },
    { english: 'might have', arabic: 'ربما كان', example: 'He might have forgotten.', exampleAr: 'ربما كان قد نسي.' },
    { english: 'must have', arabic: 'لا بد أنه', example: 'She must have left early.', exampleAr: 'لا بد أنها غادرت مبكراً.' },
    { english: 'needn\'t have', arabic: 'لم يكن ضرورياً', example: 'You needn\'t have worried.', exampleAr: 'لم يكن ضرورياً أن تقلق.' },
    { english: 'had better', arabic: 'من الأفضل أن', example: 'You had better hurry.', exampleAr: 'من الأفضل أن تسرع.' },
    { english: 'ought to have', arabic: 'كان ينبغي أن', example: 'I ought to have known.', exampleAr: 'كان ينبغي أن أعرف.' }
  ],
  sentences: [
    { english: 'I would have gone if I had known.', arabic: 'كنت سأذهب لو علمت.' },
    { english: 'You could have told me earlier.', arabic: 'كان يمكنك إخباري مبكراً.' },
    { english: 'He must have been tired after the trip.', arabic: 'لا بد أنه كان متعباً بعد الرحلة.' },
    { english: 'You had better leave now.', arabic: 'من الأفضل أن تغادر الآن.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'أي تعبير يدل على الندم؟', data: { options: ['should have', 'will have', 'can have', 'may have'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'She _____ _____ left early. (لا بد أنها)', data: { answer: 'must have' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'could have', arabic: 'كان يمكن أن' }, { english: 'might have', arabic: 'ربما كان' }, { english: 'ought to have', arabic: 'كان ينبغي أن' }] } },
    { type: 'mcq', promptAr: 'ما معنى "needn\'t have"؟', data: { options: ['لم يكن ضرورياً', 'يجب أن', 'لا يجب أن', 'يحتاج أن'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'أي تعبير يدل على الاستنتاج القوي؟', data: { options: ['must have', 'might have', 'could have', 'may have'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'You _____ _____ hurry. (من الأفضل أن)', data: { answer: 'had better' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: كنت سأذهب لو علمت.', data: { answer: 'I would have gone if I had known.' }, points: 15 }
  ]
};

export const B2_U9_L4: LessonContent = {
  lessonId: 'B2-u09-l04',
  passingScore: 70,
  vocab: [
    { english: 'passive voice', arabic: 'المبني للمجهول', example: 'Use passive voice appropriately.', exampleAr: 'استخدم المبني للمجهول بشكل مناسب.' },
    { english: 'reported speech', arabic: 'الكلام المنقول', example: 'Change to reported speech.', exampleAr: 'حوّل إلى الكلام المنقول.' },
    { english: 'conditional', arabic: 'شرطي', example: 'Use the third conditional.', exampleAr: 'استخدم الشرطي الثالث.' },
    { english: 'relative clause', arabic: 'جملة موصولة', example: 'Add a relative clause.', exampleAr: 'أضف جملة موصولة.' },
    { english: 'participle', arabic: 'اسم فاعل/مفعول', example: 'Use participle clauses.', exampleAr: 'استخدم جمل اسم الفاعل.' },
    { english: 'inversion', arabic: 'قلب', example: 'Use inversion for emphasis.', exampleAr: 'استخدم القلب للتأكيد.' },
    { english: 'subjunctive', arabic: 'الصيغة الشرطية', example: 'The subjunctive is formal.', exampleAr: 'الصيغة الشرطية رسمية.' },
    { english: 'cleft sentence', arabic: 'جملة منشطرة', example: 'Use cleft sentences for focus.', exampleAr: 'استخدم الجمل المنشطرة للتركيز.' }
  ],
  sentences: [
    { english: 'The report was written by the team.', arabic: 'كُتب التقرير من قبل الفريق.' },
    { english: 'He said that he would come.', arabic: 'قال إنه سيأتي.' },
    { english: 'If I had known, I would have helped.', arabic: 'لو كنت أعلم، لكنت ساعدت.' },
    { english: 'It was John who solved the problem.', arabic: 'جون هو من حل المشكلة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'أي جملة في المبني للمجهول؟', data: { options: ['The book was written by her.', 'She wrote the book.', 'She is writing the book.', 'She will write the book.'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'He said that he _____ come. (سيأتي في الكلام المنقول)', data: { answer: 'would' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'passive voice', arabic: 'المبني للمجهول' }, { english: 'conditional', arabic: 'شرطي' }, { english: 'inversion', arabic: 'قلب' }] } },
    { type: 'mcq', promptAr: 'ما الجملة الشرطية الثالثة؟', data: { options: ['If I had studied, I would have passed.', 'If I study, I will pass.', 'If I studied, I would pass.', 'If I study, I pass.'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما نوع الجملة: "It was Mary who called you"؟', data: { options: ['cleft sentence', 'passive voice', 'conditional', 'relative clause'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The project _____ completed yesterday. (أُنجز - مبني للمجهول)', data: { answer: 'was' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: لو كنت أعلم، لكنت ساعدت.', data: { answer: 'If I had known, I would have helped.' }, points: 15 }
  ]
};

export const B2_U9_L5: LessonContent = {
  lessonId: 'B2-u09-l05',
  passingScore: 70,
  vocab: [
    { english: 'collocation', arabic: 'تلازم لفظي', example: 'Learn common collocations.', exampleAr: 'تعلم التلازمات اللفظية الشائعة.' },
    { english: 'make a decision', arabic: 'يتخذ قراراً', example: 'Make a decision quickly.', exampleAr: 'اتخذ قراراً بسرعة.' },
    { english: 'take a break', arabic: 'يأخذ استراحة', example: 'Let\'s take a break.', exampleAr: 'لنأخذ استراحة.' },
    { english: 'do research', arabic: 'يجري بحثاً', example: 'Do thorough research.', exampleAr: 'أجرِ بحثاً شاملاً.' },
    { english: 'heavy traffic', arabic: 'ازدحام مروري', example: 'There was heavy traffic.', exampleAr: 'كان هناك ازدحام مروري.' },
    { english: 'strong accent', arabic: 'لكنة قوية', example: 'He has a strong accent.', exampleAr: 'لديه لكنة قوية.' },
    { english: 'make progress', arabic: 'يحرز تقدماً', example: 'We\'re making good progress.', exampleAr: 'نحرز تقدماً جيداً.' },
    { english: 'raise awareness', arabic: 'ينشر الوعي', example: 'Raise awareness about the issue.', exampleAr: 'انشر الوعي حول المشكلة.' }
  ],
  sentences: [
    { english: 'It\'s time to make a decision.', arabic: 'حان الوقت لاتخاذ قرار.' },
    { english: 'I need to do more research on this topic.', arabic: 'أحتاج إجراء مزيد من البحث حول هذا الموضوع.' },
    { english: 'We\'re making great progress on the project.', arabic: 'نحرز تقدماً كبيراً في المشروع.' },
    { english: 'The campaign helps raise awareness.', arabic: 'الحملة تساعد في نشر الوعي.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'أي تلازم صحيح؟', data: { options: ['make a decision', 'do a decision', 'take a decision', 'have a decision'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Let\'s _____ a break. (نأخذ استراحة)', data: { answer: 'take' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'do', arabic: 'research' }, { english: 'make', arabic: 'progress' }, { english: 'heavy', arabic: 'traffic' }] } },
    { type: 'mcq', promptAr: 'أي تلازم صحيح مع "awareness"؟', data: { options: ['raise awareness', 'make awareness', 'do awareness', 'take awareness'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'أي تلازم صحيح؟', data: { options: ['strong accent', 'heavy accent', 'big accent', 'large accent'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'We\'re _____ good progress. (نحرز)', data: { answer: 'making' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أحتاج إجراء مزيد من البحث.', data: { answer: 'I need to do more research.' }, points: 15 }
  ]
};

export const b2Unit9Lessons: Record<string, LessonContent> = {
  'B2-u09-l01': B2_U9_L1,
  'B2-u09-l02': B2_U9_L2,
  'B2-u09-l03': B2_U9_L3,
  'B2-u09-l04': B2_U9_L4,
  'B2-u09-l05': B2_U9_L5,
};

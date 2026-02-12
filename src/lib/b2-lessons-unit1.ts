import { LessonContent } from './a1-lessons';

// Unit 1: Writing Styles - أساليب الكتابة
export const B2_U1_L1: LessonContent = {
  lessonId: 'B2-u01-l01',
  passingScore: 70,
  vocab: [
    { english: 'formal', arabic: 'رسمي', example: 'Use formal language in business emails.', exampleAr: 'استخدم لغة رسمية في رسائل العمل.' },
    { english: 'informal', arabic: 'غير رسمي', example: 'Informal writing is for friends.', exampleAr: 'الكتابة غير الرسمية للأصدقاء.' },
    { english: 'tone', arabic: 'نبرة', example: 'The tone of your email matters.', exampleAr: 'نبرة بريدك الإلكتروني مهمة.' },
    { english: 'concise', arabic: 'موجز', example: 'Be concise in your writing.', exampleAr: 'كن موجزاً في كتابتك.' },
    { english: 'elaborate', arabic: 'يفصّل', example: 'Please elaborate on this point.', exampleAr: 'من فضلك فصّل هذه النقطة.' },
    { english: 'coherent', arabic: 'متماسك', example: 'Your argument must be coherent.', exampleAr: 'حجتك يجب أن تكون متماسكة.' },
    { english: 'articulate', arabic: 'يعبّر بوضوح', example: 'She articulates her ideas well.', exampleAr: 'تعبّر عن أفكارها بوضوح.' },
    { english: 'nuance', arabic: 'دقة المعنى', example: 'Pay attention to nuance.', exampleAr: 'انتبه لدقة المعنى.' }
  ],
  sentences: [
    { english: 'Formal writing requires careful word choice.', arabic: 'الكتابة الرسمية تتطلب اختياراً دقيقاً للكلمات.' },
    { english: 'The tone of your message affects how it\'s received.', arabic: 'نبرة رسالتك تؤثر على كيفية استقبالها.' },
    { english: 'A coherent argument is easier to follow.', arabic: 'الحجة المتماسكة أسهل في المتابعة.' },
    { english: 'Good writers can articulate complex ideas simply.', arabic: 'الكتّاب الجيدون يمكنهم التعبير عن الأفكار المعقدة ببساطة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى كلمة "concise"؟', data: { options: ['موجز', 'طويل', 'معقد', 'غامض'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Please _____ on this point. (فصّل)', data: { answer: 'elaborate', hint: 'تبدأ بحرف E' } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'formal', arabic: 'رسمي' }, { english: 'tone', arabic: 'نبرة' }, { english: 'coherent', arabic: 'متماسك' }] } },
    { type: 'reorder', promptAr: 'رتب الجملة:', data: { words: ['concise', 'in', 'writing', 'Be', 'your'], correctOrder: [3, 0, 1, 4, 2] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "دقة المعنى"؟', data: { options: ['nuance', 'tone', 'style', 'meaning'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'She _____ her ideas well. (تعبّر بوضوح)', data: { answer: 'articulates' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الكتابة الرسمية تتطلب اختياراً دقيقاً للكلمات.', data: { answer: 'Formal writing requires careful word choice.' }, points: 15 }
  ]
};

export const B2_U1_L2: LessonContent = {
  lessonId: 'B2-u01-l02',
  passingScore: 70,
  vocab: [
    { english: 'persuasive', arabic: 'مقنع', example: 'Write a persuasive essay.', exampleAr: 'اكتب مقالاً مقنعاً.' },
    { english: 'argument', arabic: 'حجة', example: 'Present your argument clearly.', exampleAr: 'قدّم حجتك بوضوح.' },
    { english: 'evidence', arabic: 'دليل', example: 'Support your claims with evidence.', exampleAr: 'ادعم ادعاءاتك بالأدلة.' },
    { english: 'counterargument', arabic: 'حجة مضادة', example: 'Address the counterargument.', exampleAr: 'تناول الحجة المضادة.' },
    { english: 'convince', arabic: 'يقنع', example: 'How can I convince you?', exampleAr: 'كيف يمكنني إقناعك؟' },
    { english: 'compelling', arabic: 'مؤثر', example: 'That was a compelling story.', exampleAr: 'كانت قصة مؤثرة.' },
    { english: 'stance', arabic: 'موقف', example: 'What is your stance on this?', exampleAr: 'ما موقفك من هذا؟' },
    { english: 'thesis', arabic: 'أطروحة', example: 'State your thesis clearly.', exampleAr: 'اذكر أطروحتك بوضوح.' }
  ],
  sentences: [
    { english: 'A persuasive essay needs strong evidence.', arabic: 'المقال المقنع يحتاج أدلة قوية.' },
    { english: 'You must address counterarguments to strengthen your position.', arabic: 'يجب أن تتناول الحجج المضادة لتقوية موقفك.' },
    { english: 'Your thesis should be clear from the start.', arabic: 'أطروحتك يجب أن تكون واضحة منذ البداية.' },
    { english: 'A compelling argument uses logic and emotion.', arabic: 'الحجة المؤثرة تستخدم المنطق والعاطفة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "evidence"؟', data: { options: ['دليل', 'حجة', 'موقف', 'أطروحة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Address the _____. (حجة مضادة)', data: { answer: 'counterargument' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "مقنع"؟', data: { options: ['persuasive', 'compelling', 'convincing', 'strong'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['thesis', 'your', 'clearly', 'State'], correctOrder: [3, 1, 0, 2] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "stance"؟', data: { options: ['موقف', 'حجة', 'دليل', 'أطروحة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'How can I _____ you? (أقنع)', data: { answer: 'convince' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المقال المقنع يحتاج أدلة قوية.', data: { answer: 'A persuasive essay needs strong evidence.' }, points: 15 }
  ]
};

export const B2_U1_L3: LessonContent = {
  lessonId: 'B2-u01-l03',
  passingScore: 70,
  vocab: [
    { english: 'narrative', arabic: 'سردي', example: 'Write a narrative essay.', exampleAr: 'اكتب مقالاً سردياً.' },
    { english: 'descriptive', arabic: 'وصفي', example: 'Use descriptive language.', exampleAr: 'استخدم لغة وصفية.' },
    { english: 'expository', arabic: 'تفسيري', example: 'An expository essay explains a topic.', exampleAr: 'المقال التفسيري يشرح موضوعاً.' },
    { english: 'plot', arabic: 'حبكة', example: 'The plot was interesting.', exampleAr: 'كانت الحبكة مثيرة.' },
    { english: 'setting', arabic: 'إطار', example: 'Describe the setting.', exampleAr: 'صف الإطار.' },
    { english: 'vivid', arabic: 'حي', example: 'Use vivid descriptions.', exampleAr: 'استخدم أوصافاً حية.' },
    { english: 'imagery', arabic: 'صور بلاغية', example: 'Good imagery makes writing come alive.', exampleAr: 'الصور البلاغية الجيدة تجعل الكتابة حية.' },
    { english: 'metaphor', arabic: 'استعارة', example: 'That\'s a beautiful metaphor.', exampleAr: 'هذه استعارة جميلة.' }
  ],
  sentences: [
    { english: 'Narrative writing tells a story.', arabic: 'الكتابة السردية تحكي قصة.' },
    { english: 'Descriptive writing uses sensory details.', arabic: 'الكتابة الوصفية تستخدم تفاصيل حسية.' },
    { english: 'Vivid imagery helps readers visualize the scene.', arabic: 'الصور الحية تساعد القراء على تخيل المشهد.' },
    { english: 'A good metaphor can convey complex ideas.', arabic: 'الاستعارة الجيدة يمكن أن تنقل أفكاراً معقدة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "narrative"؟', data: { options: ['سردي', 'وصفي', 'تفسيري', 'مقنع'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Use _____ descriptions. (حية)', data: { answer: 'vivid' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'plot', arabic: 'حبكة' }, { english: 'setting', arabic: 'إطار' }, { english: 'metaphor', arabic: 'استعارة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "صور بلاغية"؟', data: { options: ['imagery', 'metaphor', 'simile', 'description'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "expository"؟', data: { options: ['تفسيري', 'سردي', 'وصفي', 'مقنع'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The _____ was interesting. (حبكة)', data: { answer: 'plot' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الكتابة السردية تحكي قصة.', data: { answer: 'Narrative writing tells a story.' }, points: 15 }
  ]
};

export const B2_U1_L4: LessonContent = {
  lessonId: 'B2-u01-l04',
  passingScore: 70,
  vocab: [
    { english: 'paragraph', arabic: 'فقرة', example: 'Each paragraph needs a topic sentence.', exampleAr: 'كل فقرة تحتاج جملة رئيسية.' },
    { english: 'transition', arabic: 'انتقال', example: 'Use transitions between paragraphs.', exampleAr: 'استخدم الانتقالات بين الفقرات.' },
    { english: 'conclusion', arabic: 'خاتمة', example: 'Write a strong conclusion.', exampleAr: 'اكتب خاتمة قوية.' },
    { english: 'introduction', arabic: 'مقدمة', example: 'The introduction sets the stage.', exampleAr: 'المقدمة تمهد الطريق.' },
    { english: 'summarize', arabic: 'يلخص', example: 'Summarize the main points.', exampleAr: 'لخص النقاط الرئيسية.' },
    { english: 'outline', arabic: 'مخطط', example: 'Create an outline first.', exampleAr: 'أنشئ مخططاً أولاً.' },
    { english: 'draft', arabic: 'مسودة', example: 'This is the first draft.', exampleAr: 'هذه المسودة الأولى.' },
    { english: 'revise', arabic: 'يراجع', example: 'Revise your work carefully.', exampleAr: 'راجع عملك بعناية.' }
  ],
  sentences: [
    { english: 'A good introduction hooks the reader.', arabic: 'المقدمة الجيدة تجذب القارئ.' },
    { english: 'Transitions help your writing flow smoothly.', arabic: 'الانتقالات تساعد كتابتك على التدفق بسلاسة.' },
    { english: 'Always revise your first draft.', arabic: 'دائماً راجع مسودتك الأولى.' },
    { english: 'The conclusion should summarize key points.', arabic: 'الخاتمة يجب أن تلخص النقاط الرئيسية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "transition"؟', data: { options: ['انتقال', 'فقرة', 'خاتمة', 'مقدمة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Create an _____ first. (مخطط)', data: { answer: 'outline' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يراجع"؟', data: { options: ['revise', 'review', 'redo', 'rewrite'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['main', 'the', 'Summarize', 'points'], correctOrder: [2, 1, 0, 3] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "draft"؟', data: { options: ['مسودة', 'مخطط', 'فقرة', 'خاتمة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Write a strong _____. (خاتمة)', data: { answer: 'conclusion' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: دائماً راجع مسودتك الأولى.', data: { answer: 'Always revise your first draft.' }, points: 15 }
  ]
};

export const B2_U1_L5: LessonContent = {
  lessonId: 'B2-u01-l05',
  passingScore: 70,
  vocab: [
    { english: 'proofread', arabic: 'يدقق', example: 'Always proofread before submitting.', exampleAr: 'دائماً دقق قبل التقديم.' },
    { english: 'edit', arabic: 'يحرر', example: 'Edit for clarity and conciseness.', exampleAr: 'حرر من أجل الوضوح والإيجاز.' },
    { english: 'grammar', arabic: 'قواعد', example: 'Check your grammar.', exampleAr: 'تحقق من قواعدك.' },
    { english: 'punctuation', arabic: 'علامات ترقيم', example: 'Use correct punctuation.', exampleAr: 'استخدم علامات الترقيم الصحيحة.' },
    { english: 'spelling', arabic: 'إملاء', example: 'Check your spelling.', exampleAr: 'تحقق من إملائك.' },
    { english: 'clarity', arabic: 'وضوح', example: 'Write with clarity.', exampleAr: 'اكتب بوضوح.' },
    { english: 'feedback', arabic: 'تغذية راجعة', example: 'I appreciate your feedback.', exampleAr: 'أقدر تغذيتك الراجعة.' },
    { english: 'polish', arabic: 'يصقل', example: 'Polish your final draft.', exampleAr: 'اصقل مسودتك النهائية.' }
  ],
  sentences: [
    { english: 'Proofreading catches small errors.', arabic: 'التدقيق يكتشف الأخطاء الصغيرة.' },
    { english: 'Good editing improves clarity.', arabic: 'التحرير الجيد يحسن الوضوح.' },
    { english: 'Punctuation affects meaning.', arabic: 'علامات الترقيم تؤثر على المعنى.' },
    { english: 'Constructive feedback helps you improve.', arabic: 'التغذية الراجعة البناءة تساعدك على التحسن.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "proofread"؟', data: { options: ['يدقق', 'يكتب', 'يقرأ', 'يفهم'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Check your _____. (إملاء)', data: { answer: 'spelling' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'grammar', arabic: 'قواعد' }, { english: 'clarity', arabic: 'وضوح' }, { english: 'feedback', arabic: 'تغذية راجعة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يصقل"؟', data: { options: ['polish', 'edit', 'write', 'review'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "punctuation"؟', data: { options: ['علامات ترقيم', 'إملاء', 'قواعد', 'وضوح'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'I appreciate your _____. (تغذية راجعة)', data: { answer: 'feedback' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: التدقيق يكتشف الأخطاء الصغيرة.', data: { answer: 'Proofreading catches small errors.' }, points: 15 }
  ]
};

export const b2Unit1Lessons: Record<string, LessonContent> = {
  'B2-u01-l01': B2_U1_L1,
  'B2-u01-l02': B2_U1_L2,
  'B2-u01-l03': B2_U1_L3,
  'B2-u01-l04': B2_U1_L4,
  'B2-u01-l05': B2_U1_L5,
};

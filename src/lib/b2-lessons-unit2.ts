import { LessonContent } from './a1-lessons';

// Unit 2: Advanced Discussions - نقاشات متقدمة
export const B2_U2_L1: LessonContent = {
  lessonId: 'B2-u02-l01',
  passingScore: 70,
  vocab: [
    { english: 'debate', arabic: 'مناظرة', example: 'Let\'s have a debate.', exampleAr: 'لنجري مناظرة.' },
    { english: 'opinion', arabic: 'رأي', example: 'In my opinion, this is correct.', exampleAr: 'في رأيي، هذا صحيح.' },
    { english: 'perspective', arabic: 'منظور', example: 'Consider different perspectives.', exampleAr: 'فكر في منظورات مختلفة.' },
    { english: 'controversial', arabic: 'مثير للجدل', example: 'This is a controversial topic.', exampleAr: 'هذا موضوع مثير للجدل.' },
    { english: 'objectivity', arabic: 'موضوعية', example: 'Objectivity is important in journalism.', exampleAr: 'الموضوعية مهمة في الصحافة.' },
    { english: 'bias', arabic: 'تحيز', example: 'Avoid bias in your writing.', exampleAr: 'تجنب التحيز في كتابتك.' },
    { english: 'assumption', arabic: 'افتراض', example: 'Don\'t make assumptions.', exampleAr: 'لا تفترض.' },
    { english: 'valid', arabic: 'صحيح', example: 'That\'s a valid point.', exampleAr: 'هذه نقطة صحيحة.' }
  ],
  sentences: [
    { english: 'A good debate considers multiple perspectives.', arabic: 'المناظرة الجيدة تأخذ في الاعتبار منظورات متعددة.' },
    { english: 'Controversial topics require careful discussion.', arabic: 'المواضيع المثيرة للجدل تتطلب نقاشاً حذراً.' },
    { english: 'Bias can affect how we interpret information.', arabic: 'التحيز يمكن أن يؤثر على كيفية تفسيرنا للمعلومات.' },
    { english: 'Make sure your argument is valid.', arabic: 'تأكد أن حجتك صحيحة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "perspective"؟', data: { options: ['منظور', 'رأي', 'حجة', 'موقف'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Avoid _____ in your writing. (تحيز)', data: { answer: 'bias' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'debate', arabic: 'مناظرة' }, { english: 'opinion', arabic: 'رأي' }, { english: 'valid', arabic: 'صحيح' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "مثير للجدل"؟', data: { options: ['controversial', 'interesting', 'boring', 'simple'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "assumption"؟', data: { options: ['افتراض', 'حقيقة', 'رأي', 'دليل'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ is important in journalism. (موضوعية)', data: { answer: 'Objectivity' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذه نقطة صحيحة.', data: { answer: 'That\'s a valid point.' }, points: 15 }
  ]
};

export const B2_U2_L2: LessonContent = {
  lessonId: 'B2-u02-l02',
  passingScore: 70,
  vocab: [
    { english: 'agree', arabic: 'يوافق', example: 'I agree with you.', exampleAr: 'أوافقك الرأي.' },
    { english: 'disagree', arabic: 'يختلف', example: 'I respectfully disagree.', exampleAr: 'أختلف معك باحترام.' },
    { english: 'compromise', arabic: 'حل وسط', example: 'Let\'s find a compromise.', exampleAr: 'لنجد حلاً وسطاً.' },
    { english: 'negotiate', arabic: 'يتفاوض', example: 'We need to negotiate.', exampleAr: 'نحتاج أن نتفاوض.' },
    { english: 'consensus', arabic: 'إجماع', example: 'We reached a consensus.', exampleAr: 'توصلنا إلى إجماع.' },
    { english: 'dispute', arabic: 'نزاع', example: 'They settled the dispute.', exampleAr: 'سووا النزاع.' },
    { english: 'reconcile', arabic: 'يصالح', example: 'They reconciled their differences.', exampleAr: 'صالحوا خلافاتهم.' },
    { english: 'mediate', arabic: 'يتوسط', example: 'She mediated between them.', exampleAr: 'توسطت بينهم.' }
  ],
  sentences: [
    { english: 'Finding a compromise requires flexibility.', arabic: 'إيجاد حل وسط يتطلب مرونة.' },
    { english: 'Consensus building takes time and patience.', arabic: 'بناء الإجماع يستغرق وقتاً وصبراً.' },
    { english: 'A good mediator remains neutral.', arabic: 'الوسيط الجيد يبقى محايداً.' },
    { english: 'It\'s okay to disagree respectfully.', arabic: 'لا بأس أن تختلف باحترام.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "compromise"؟', data: { options: ['حل وسط', 'اتفاق', 'نزاع', 'رفض'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'We reached a _____. (إجماع)', data: { answer: 'consensus' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يتوسط"؟', data: { options: ['mediate', 'negotiate', 'agree', 'discuss'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['find', 'a', 'compromise', 'Let\'s'], correctOrder: [3, 0, 1, 2] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "dispute"؟', data: { options: ['نزاع', 'اتفاق', 'حل', 'سلام'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'They _____ their differences. (صالحوا)', data: { answer: 'reconciled' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أختلف معك باحترام.', data: { answer: 'I respectfully disagree.' }, points: 15 }
  ]
};

export const B2_U2_L3: LessonContent = {
  lessonId: 'B2-u02-l03',
  passingScore: 70,
  vocab: [
    { english: 'analyze', arabic: 'يحلل', example: 'Analyze the data carefully.', exampleAr: 'حلل البيانات بعناية.' },
    { english: 'evaluate', arabic: 'يقيّم', example: 'Evaluate the options.', exampleAr: 'قيّم الخيارات.' },
    { english: 'interpret', arabic: 'يفسر', example: 'How do you interpret this?', exampleAr: 'كيف تفسر هذا؟' },
    { english: 'conclude', arabic: 'يستنتج', example: 'What can we conclude?', exampleAr: 'ماذا يمكننا أن نستنتج؟' },
    { english: 'hypothesis', arabic: 'فرضية', example: 'Test the hypothesis.', exampleAr: 'اختبر الفرضية.' },
    { english: 'methodology', arabic: 'منهجية', example: 'Explain your methodology.', exampleAr: 'اشرح منهجيتك.' },
    { english: 'data', arabic: 'بيانات', example: 'Collect the data first.', exampleAr: 'اجمع البيانات أولاً.' },
    { english: 'findings', arabic: 'نتائج', example: 'Present your findings.', exampleAr: 'قدم نتائجك.' }
  ],
  sentences: [
    { english: 'Critical analysis requires examining all evidence.', arabic: 'التحليل النقدي يتطلب فحص جميع الأدلة.' },
    { english: 'Data interpretation can vary among researchers.', arabic: 'تفسير البيانات يمكن أن يختلف بين الباحثين.' },
    { english: 'A good hypothesis is testable.', arabic: 'الفرضية الجيدة قابلة للاختبار.' },
    { english: 'Present your findings clearly.', arabic: 'قدم نتائجك بوضوح.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "hypothesis"؟', data: { options: ['فرضية', 'نتيجة', 'بيانات', 'منهجية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Present your _____. (نتائج)', data: { answer: 'findings' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'analyze', arabic: 'يحلل' }, { english: 'evaluate', arabic: 'يقيّم' }, { english: 'conclude', arabic: 'يستنتج' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يفسر"؟', data: { options: ['interpret', 'explain', 'analyze', 'conclude'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "methodology"؟', data: { options: ['منهجية', 'فرضية', 'نتائج', 'بيانات'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Collect the _____ first. (بيانات)', data: { answer: 'data' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: التحليل النقدي يتطلب فحص جميع الأدلة.', data: { answer: 'Critical analysis requires examining all evidence.' }, points: 15 }
  ]
};

export const B2_U2_L4: LessonContent = {
  lessonId: 'B2-u02-l04',
  passingScore: 70,
  vocab: [
    { english: 'emphasize', arabic: 'يؤكد', example: 'I want to emphasize this point.', exampleAr: 'أريد التأكيد على هذه النقطة.' },
    { english: 'clarify', arabic: 'يوضح', example: 'Let me clarify.', exampleAr: 'دعني أوضح.' },
    { english: 'elaborate', arabic: 'يفصّل', example: 'Could you elaborate?', exampleAr: 'هل يمكنك التفصيل؟' },
    { english: 'illustrate', arabic: 'يوضح بمثال', example: 'Let me illustrate with an example.', exampleAr: 'دعني أوضح بمثال.' },
    { english: 'imply', arabic: 'يلمح', example: 'What are you implying?', exampleAr: 'إلى ماذا تلمح؟' },
    { english: 'infer', arabic: 'يستنتج', example: 'What can we infer from this?', exampleAr: 'ماذا يمكننا أن نستنتج من هذا؟' },
    { english: 'specify', arabic: 'يحدد', example: 'Please specify your requirements.', exampleAr: 'من فضلك حدد متطلباتك.' },
    { english: 'generalize', arabic: 'يعمم', example: 'Don\'t generalize too quickly.', exampleAr: 'لا تعمم بسرعة.' }
  ],
  sentences: [
    { english: 'Let me emphasize the importance of this.', arabic: 'دعني أؤكد على أهمية هذا.' },
    { english: 'Can you clarify what you mean?', arabic: 'هل يمكنك توضيح ما تعنيه؟' },
    { english: 'Examples help illustrate complex ideas.', arabic: 'الأمثلة تساعد في توضيح الأفكار المعقدة.' },
    { english: 'We shouldn\'t generalize from one case.', arabic: 'لا يجب أن نعمم من حالة واحدة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "emphasize"؟', data: { options: ['يؤكد', 'يوضح', 'يفصل', 'يلمح'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Please _____ your requirements. (حدد)', data: { answer: 'specify' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يستنتج"؟', data: { options: ['infer', 'imply', 'specify', 'generalize'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['clarify', 'me', 'Let'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "imply"؟', data: { options: ['يلمح', 'يقول', 'يؤكد', 'ينفي'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Don\'t _____ too quickly. (تعمم)', data: { answer: 'generalize' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: دعني أوضح بمثال.', data: { answer: 'Let me illustrate with an example.' }, points: 15 }
  ]
};

export const B2_U2_L5: LessonContent = {
  lessonId: 'B2-u02-l05',
  passingScore: 70,
  vocab: [
    { english: 'acknowledge', arabic: 'يعترف', example: 'I acknowledge your point.', exampleAr: 'أعترف بنقطتك.' },
    { english: 'concede', arabic: 'يُقر', example: 'I concede that you\'re right.', exampleAr: 'أُقر بأنك محق.' },
    { english: 'refute', arabic: 'يدحض', example: 'He refuted the claim.', exampleAr: 'دحض الادعاء.' },
    { english: 'assert', arabic: 'يؤكد', example: 'She asserted her position.', exampleAr: 'أكدت موقفها.' },
    { english: 'contend', arabic: 'يدّعي', example: 'They contend that this is false.', exampleAr: 'يدّعون أن هذا خاطئ.' },
    { english: 'maintain', arabic: 'يتمسك', example: 'I maintain my position.', exampleAr: 'أتمسك بموقفي.' },
    { english: 'advocate', arabic: 'يدافع عن', example: 'She advocates for change.', exampleAr: 'تدافع عن التغيير.' },
    { english: 'oppose', arabic: 'يعارض', example: 'They oppose the proposal.', exampleAr: 'يعارضون الاقتراح.' }
  ],
  sentences: [
    { english: 'It\'s important to acknowledge different viewpoints.', arabic: 'من المهم الاعتراف بوجهات النظر المختلفة.' },
    { english: 'Sometimes you need to concede a point.', arabic: 'أحياناً تحتاج أن تُقر بنقطة.' },
    { english: 'He refuted the argument with evidence.', arabic: 'دحض الحجة بالأدلة.' },
    { english: 'We advocate for fair treatment.', arabic: 'ندافع عن المعاملة العادلة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "refute"؟', data: { options: ['يدحض', 'يؤكد', 'يوافق', 'يفهم'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'They _____ the proposal. (يعارضون)', data: { answer: 'oppose' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'acknowledge', arabic: 'يعترف' }, { english: 'assert', arabic: 'يؤكد' }, { english: 'advocate', arabic: 'يدافع عن' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يتمسك"؟', data: { options: ['maintain', 'obtain', 'contain', 'retain'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "contend"؟', data: { options: ['يدّعي', 'يعترف', 'يوافق', 'يرفض'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'I _____ that you\'re right. (أُقر)', data: { answer: 'concede' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: من المهم الاعتراف بوجهات النظر المختلفة.', data: { answer: 'It\'s important to acknowledge different viewpoints.' }, points: 15 }
  ]
};

export const b2Unit2Lessons: Record<string, LessonContent> = {
  'B2-u02-l01': B2_U2_L1,
  'B2-u02-l02': B2_U2_L2,
  'B2-u02-l03': B2_U2_L3,
  'B2-u02-l04': B2_U2_L4,
  'B2-u02-l05': B2_U2_L5,
};

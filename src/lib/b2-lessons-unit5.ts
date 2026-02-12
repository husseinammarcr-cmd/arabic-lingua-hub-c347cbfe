import { LessonContent } from './a1-lessons';

// Unit 5: Articles & Reports - مقالات وتقارير
export const B2_U5_L1: LessonContent = {
  lessonId: 'B2-u05-l01',
  passingScore: 70,
  vocab: [
    { english: 'article', arabic: 'مقال', example: 'I wrote an article.', exampleAr: 'كتبت مقالاً.' },
    { english: 'headline', arabic: 'عنوان رئيسي', example: 'The headline caught my attention.', exampleAr: 'العنوان الرئيسي لفت انتباهي.' },
    { english: 'byline', arabic: 'اسم الكاتب', example: 'Check the byline.', exampleAr: 'تحقق من اسم الكاتب.' },
    { english: 'lead', arabic: 'مقدمة', example: 'The lead paragraph is crucial.', exampleAr: 'فقرة المقدمة حاسمة.' },
    { english: 'body', arabic: 'متن', example: 'The body contains details.', exampleAr: 'المتن يحتوي على التفاصيل.' },
    { english: 'quote', arabic: 'اقتباس', example: 'Include a quote from the expert.', exampleAr: 'أضف اقتباساً من الخبير.' },
    { english: 'source', arabic: 'مصدر', example: 'Cite your sources.', exampleAr: 'اذكر مصادرك.' },
    { english: 'deadline', arabic: 'موعد نهائي', example: 'Meet the deadline.', exampleAr: 'التزم بالموعد النهائي.' }
  ],
  sentences: [
    { english: 'A strong headline attracts readers.', arabic: 'العنوان القوي يجذب القراء.' },
    { english: 'The lead should summarize the story.', arabic: 'المقدمة يجب أن تلخص القصة.' },
    { english: 'Always verify your sources.', arabic: 'دائماً تحقق من مصادرك.' },
    { english: 'I need to meet my deadline.', arabic: 'أحتاج الالتزام بموعدي النهائي.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "headline"؟', data: { options: ['عنوان رئيسي', 'مقدمة', 'متن', 'خاتمة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Cite your _____. (مصادر)', data: { answer: 'sources' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'article', arabic: 'مقال' }, { english: 'quote', arabic: 'اقتباس' }, { english: 'lead', arabic: 'مقدمة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "متن"؟', data: { options: ['body', 'head', 'foot', 'title'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "byline"؟', data: { options: ['اسم الكاتب', 'عنوان', 'تاريخ', 'مكان'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Include a _____ from the expert. (اقتباس)', data: { answer: 'quote' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: العنوان القوي يجذب القراء.', data: { answer: 'A strong headline attracts readers.' }, points: 15 }
  ]
};

export const B2_U5_L2: LessonContent = {
  lessonId: 'B2-u05-l02',
  passingScore: 70,
  vocab: [
    { english: 'report', arabic: 'تقرير', example: 'Submit your report.', exampleAr: 'قدّم تقريرك.' },
    { english: 'executive summary', arabic: 'ملخص تنفيذي', example: 'Start with an executive summary.', exampleAr: 'ابدأ بملخص تنفيذي.' },
    { english: 'findings', arabic: 'نتائج', example: 'Present your findings.', exampleAr: 'اعرض نتائجك.' },
    { english: 'methodology', arabic: 'منهجية', example: 'Explain your methodology.', exampleAr: 'اشرح منهجيتك.' },
    { english: 'analysis', arabic: 'تحليل', example: 'Include data analysis.', exampleAr: 'ضمّن تحليل البيانات.' },
    { english: 'recommendation', arabic: 'توصية', example: 'End with recommendations.', exampleAr: 'اختم بالتوصيات.' },
    { english: 'appendix', arabic: 'ملحق', example: 'Details are in the appendix.', exampleAr: 'التفاصيل في الملحق.' },
    { english: 'reference', arabic: 'مرجع', example: 'Add references at the end.', exampleAr: 'أضف المراجع في النهاية.' }
  ],
  sentences: [
    { english: 'The executive summary should be brief.', arabic: 'الملخص التنفيذي يجب أن يكون موجزاً.' },
    { english: 'Our findings suggest improvement.', arabic: 'نتائجنا تقترح التحسين.' },
    { english: 'The appendix contains raw data.', arabic: 'الملحق يحتوي على البيانات الخام.' },
    { english: 'Include all relevant references.', arabic: 'ضمّن جميع المراجع ذات الصلة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "executive summary"؟', data: { options: ['ملخص تنفيذي', 'تقرير كامل', 'مقدمة', 'خاتمة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Present your _____. (نتائج)', data: { answer: 'findings' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "ملحق"؟', data: { options: ['appendix', 'attachment', 'addition', 'extra'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['recommendations', 'with', 'End'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "methodology"؟', data: { options: ['منهجية', 'نتائج', 'تحليل', 'توصية'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Add _____ at the end. (مراجع)', data: { answer: 'references' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الملخص التنفيذي يجب أن يكون موجزاً.', data: { answer: 'The executive summary should be brief.' }, points: 15 }
  ]
};

export const B2_U5_L3: LessonContent = {
  lessonId: 'B2-u05-l03',
  passingScore: 70,
  vocab: [
    { english: 'academic', arabic: 'أكاديمي', example: 'Write in academic style.', exampleAr: 'اكتب بأسلوب أكاديمي.' },
    { english: 'peer review', arabic: 'مراجعة الأقران', example: 'Submit for peer review.', exampleAr: 'قدّم لمراجعة الأقران.' },
    { english: 'abstract', arabic: 'ملخص', example: 'Write an abstract.', exampleAr: 'اكتب ملخصاً.' },
    { english: 'literature review', arabic: 'مراجعة الأدبيات', example: 'Include a literature review.', exampleAr: 'ضمّن مراجعة الأدبيات.' },
    { english: 'hypothesis', arabic: 'فرضية', example: 'State your hypothesis.', exampleAr: 'اذكر فرضيتك.' },
    { english: 'conclusion', arabic: 'استنتاج', example: 'Draw a conclusion.', exampleAr: 'توصل إلى استنتاج.' },
    { english: 'citation', arabic: 'استشهاد', example: 'Use proper citations.', exampleAr: 'استخدم استشهادات صحيحة.' },
    { english: 'plagiarism', arabic: 'سرقة أدبية', example: 'Avoid plagiarism.', exampleAr: 'تجنب السرقة الأدبية.' }
  ],
  sentences: [
    { english: 'Academic writing requires objectivity.', arabic: 'الكتابة الأكاديمية تتطلب الموضوعية.' },
    { english: 'Peer review improves quality.', arabic: 'مراجعة الأقران تحسن الجودة.' },
    { english: 'The abstract summarizes the paper.', arabic: 'الملخص يلخص البحث.' },
    { english: 'Plagiarism has serious consequences.', arabic: 'السرقة الأدبية لها عواقب خطيرة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "peer review"؟', data: { options: ['مراجعة الأقران', 'مراجعة ذاتية', 'تقييم', 'تصحيح'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Avoid _____. (سرقة أدبية)', data: { answer: 'plagiarism' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'abstract', arabic: 'ملخص' }, { english: 'hypothesis', arabic: 'فرضية' }, { english: 'citation', arabic: 'استشهاد' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "مراجعة الأدبيات"؟', data: { options: ['literature review', 'book review', 'text review', 'article review'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "conclusion"؟', data: { options: ['استنتاج', 'مقدمة', 'ملخص', 'فرضية'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Use proper _____. (استشهادات)', data: { answer: 'citations' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الكتابة الأكاديمية تتطلب الموضوعية.', data: { answer: 'Academic writing requires objectivity.' }, points: 15 }
  ]
};

export const B2_U5_L4: LessonContent = {
  lessonId: 'B2-u05-l04',
  passingScore: 70,
  vocab: [
    { english: 'research', arabic: 'بحث', example: 'Conduct thorough research.', exampleAr: 'أجرِ بحثاً شاملاً.' },
    { english: 'survey', arabic: 'استطلاع', example: 'Design a survey.', exampleAr: 'صمم استطلاعاً.' },
    { english: 'interview', arabic: 'مقابلة', example: 'Conduct interviews.', exampleAr: 'أجرِ مقابلات.' },
    { english: 'sample', arabic: 'عينة', example: 'Select a sample.', exampleAr: 'اختر عينة.' },
    { english: 'qualitative', arabic: 'نوعي', example: 'Use qualitative methods.', exampleAr: 'استخدم أساليب نوعية.' },
    { english: 'quantitative', arabic: 'كمي', example: 'Use quantitative data.', exampleAr: 'استخدم بيانات كمية.' },
    { english: 'variable', arabic: 'متغير', example: 'Identify the variables.', exampleAr: 'حدد المتغيرات.' },
    { english: 'correlation', arabic: 'ارتباط', example: 'There\'s a correlation.', exampleAr: 'هناك ارتباط.' }
  ],
  sentences: [
    { english: 'Research requires careful planning.', arabic: 'البحث يتطلب تخطيطاً دقيقاً.' },
    { english: 'The survey had 500 respondents.', arabic: 'الاستطلاع شمل 500 مستجيب.' },
    { english: 'Qualitative research explores meaning.', arabic: 'البحث النوعي يستكشف المعنى.' },
    { english: 'We found a strong correlation.', arabic: 'وجدنا ارتباطاً قوياً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "qualitative"؟', data: { options: ['نوعي', 'كمي', 'علمي', 'عملي'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Select a _____. (عينة)', data: { answer: 'sample' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "ارتباط"؟', data: { options: ['correlation', 'connection', 'relation', 'link'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['research', 'thorough', 'Conduct'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "variable"؟', data: { options: ['متغير', 'ثابت', 'عينة', 'بحث'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Design a _____. (استطلاع)', data: { answer: 'survey' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: البحث يتطلب تخطيطاً دقيقاً.', data: { answer: 'Research requires careful planning.' }, points: 15 }
  ]
};

export const B2_U5_L5: LessonContent = {
  lessonId: 'B2-u05-l05',
  passingScore: 70,
  vocab: [
    { english: 'format', arabic: 'تنسيق', example: 'Follow the format.', exampleAr: 'اتبع التنسيق.' },
    { english: 'layout', arabic: 'تخطيط', example: 'The layout is clean.', exampleAr: 'التخطيط نظيف.' },
    { english: 'margin', arabic: 'هامش', example: 'Set the margins.', exampleAr: 'اضبط الهوامش.' },
    { english: 'font', arabic: 'خط', example: 'Choose a readable font.', exampleAr: 'اختر خطاً مقروءاً.' },
    { english: 'heading', arabic: 'عنوان', example: 'Use clear headings.', exampleAr: 'استخدم عناوين واضحة.' },
    { english: 'subheading', arabic: 'عنوان فرعي', example: 'Add subheadings.', exampleAr: 'أضف عناوين فرعية.' },
    { english: 'bullet point', arabic: 'نقطة تعداد', example: 'Use bullet points.', exampleAr: 'استخدم نقاط التعداد.' },
    { english: 'spacing', arabic: 'تباعد', example: 'Adjust the spacing.', exampleAr: 'اضبط التباعد.' }
  ],
  sentences: [
    { english: 'Consistent formatting looks professional.', arabic: 'التنسيق المتسق يبدو احترافياً.' },
    { english: 'Clear headings help readers navigate.', arabic: 'العناوين الواضحة تساعد القراء على التنقل.' },
    { english: 'Bullet points make lists easy to read.', arabic: 'نقاط التعداد تجعل القوائم سهلة القراءة.' },
    { english: 'Proper spacing improves readability.', arabic: 'التباعد الصحيح يحسن القابلية للقراءة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "layout"؟', data: { options: ['تخطيط', 'تنسيق', 'هامش', 'خط'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Use clear _____. (عناوين)', data: { answer: 'headings' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'font', arabic: 'خط' }, { english: 'margin', arabic: 'هامش' }, { english: 'spacing', arabic: 'تباعد' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "نقطة تعداد"؟', data: { options: ['bullet point', 'point', 'dot', 'mark'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "subheading"؟', data: { options: ['عنوان فرعي', 'عنوان رئيسي', 'مقدمة', 'خاتمة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Adjust the _____. (تباعد)', data: { answer: 'spacing' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: التنسيق المتسق يبدو احترافياً.', data: { answer: 'Consistent formatting looks professional.' }, points: 15 }
  ]
};

export const b2Unit5Lessons: Record<string, LessonContent> = {
  'B2-u05-l01': B2_U5_L1,
  'B2-u05-l02': B2_U5_L2,
  'B2-u05-l03': B2_U5_L3,
  'B2-u05-l04': B2_U5_L4,
  'B2-u05-l05': B2_U5_L5,
};

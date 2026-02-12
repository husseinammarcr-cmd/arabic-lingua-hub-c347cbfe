import { LessonContent } from './a1-lessons';

// Unit 3: Media & Journalism - الإعلام والصحافة
export const C1_U3_L1: LessonContent = {
  lessonId: 'C1-u03-l01',
  passingScore: 75,
  vocab: [
    { english: 'objectivity', arabic: 'موضوعية', example: 'Maintain journalistic objectivity.', exampleAr: 'حافظ على الموضوعية الصحفية.' },
    { english: 'bias', arabic: 'تحيز', example: 'Media bias is a concern.', exampleAr: 'التحيز الإعلامي مصدر قلق.' },
    { english: 'sensationalism', arabic: 'إثارة', example: 'Avoid sensationalism.', exampleAr: 'تجنب الإثارة.' },
    { english: 'credibility', arabic: 'مصداقية', example: 'Build credibility.', exampleAr: 'ابنِ المصداقية.' },
    { english: 'integrity', arabic: 'نزاهة', example: 'Journalistic integrity.', exampleAr: 'النزاهة الصحفية.' },
    { english: 'accountability', arabic: 'مساءلة', example: 'Hold them accountable.', exampleAr: 'حاسبهم.' },
    { english: 'transparency', arabic: 'شفافية', example: 'Ensure transparency.', exampleAr: 'اضمن الشفافية.' },
    { english: 'impartiality', arabic: 'حياد', example: 'Maintain impartiality.', exampleAr: 'حافظ على الحياد.' }
  ],
  sentences: [
    { english: 'Objectivity is fundamental to good journalism.', arabic: 'الموضوعية أساسية للصحافة الجيدة.' },
    { english: 'Sensationalism sacrifices accuracy for attention.', arabic: 'الإثارة تضحي بالدقة من أجل الاهتمام.' },
    { english: 'Credibility is built over time.', arabic: 'المصداقية تُبنى مع الوقت.' },
    { english: 'Transparency builds public trust.', arabic: 'الشفافية تبني ثقة الجمهور.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "sensationalism"؟', data: { options: ['إثارة', 'موضوعية', 'حياد', 'مصداقية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Maintain journalistic _____. (نزاهة)', data: { answer: 'integrity' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'objectivity', arabic: 'موضوعية' }, { english: 'bias', arabic: 'تحيز' }, { english: 'impartiality', arabic: 'حياد' }] } },
    { type: 'mcq', promptAr: 'ما عكس "bias"؟', data: { options: ['impartiality', 'sensationalism', 'credibility', 'integrity'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "accountability"؟', data: { options: ['مساءلة', 'شفافية', 'نزاهة', 'حياد'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Ensure _____. (شفافية)', data: { answer: 'transparency' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الموضوعية أساسية للصحافة الجيدة.', data: { answer: 'Objectivity is fundamental to good journalism.' }, points: 15 }
  ]
};

export const C1_U3_L2: LessonContent = {
  lessonId: 'C1-u03-l02',
  passingScore: 75,
  vocab: [
    { english: 'misinformation', arabic: 'معلومات مضللة', example: 'Combat misinformation.', exampleAr: 'كافح المعلومات المضللة.' },
    { english: 'disinformation', arabic: 'تضليل متعمد', example: 'Disinformation campaigns.', exampleAr: 'حملات التضليل المتعمد.' },
    { english: 'propaganda', arabic: 'دعاية', example: 'Political propaganda.', exampleAr: 'دعاية سياسية.' },
    { english: 'fact-check', arabic: 'تحقق من الحقائق', example: 'Always fact-check.', exampleAr: 'تحقق دائماً من الحقائق.' },
    { english: 'verify', arabic: 'يتحقق', example: 'Verify the information.', exampleAr: 'تحقق من المعلومات.' },
    { english: 'source', arabic: 'مصدر', example: 'Consider the source.', exampleAr: 'فكر في المصدر.' },
    { english: 'fabricate', arabic: 'يختلق', example: 'Fabricated stories.', exampleAr: 'قصص مختلقة.' },
    { english: 'distort', arabic: 'يشوه', example: 'Distort the facts.', exampleAr: 'يشوه الحقائق.' }
  ],
  sentences: [
    { english: 'Misinformation spreads quickly online.', arabic: 'المعلومات المضللة تنتشر بسرعة عبر الإنترنت.' },
    { english: 'Disinformation is deliberately false.', arabic: 'التضليل المتعمد كاذب عمداً.' },
    { english: 'Always verify before sharing.', arabic: 'تحقق دائماً قبل المشاركة.' },
    { english: 'Some outlets distort the truth.', arabic: 'بعض المنابر تشوه الحقيقة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما الفرق بين "misinformation" و "disinformation"؟', data: { options: ['misinformation غير مقصود، disinformation مقصود', 'نفس المعنى', 'misinformation مقصود', 'لا فرق'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Always _____. (تحقق من الحقائق)', data: { answer: 'fact-check' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'propaganda', arabic: 'دعاية' }, { english: 'fabricate', arabic: 'يختلق' }, { english: 'distort', arabic: 'يشوه' }] } },
    { type: 'mcq', promptAr: 'ما معنى "verify"؟', data: { options: ['يتحقق', 'يختلق', 'يشوه', 'ينشر'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "fabricate"؟', data: { options: ['يختلق', 'يتحقق', 'ينشر', 'يصحح'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ the information. (تحقق من)', data: { answer: 'Verify' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المعلومات المضللة تنتشر بسرعة عبر الإنترنت.', data: { answer: 'Misinformation spreads quickly online.' }, points: 15 }
  ]
};

export const C1_U3_L3: LessonContent = {
  lessonId: 'C1-u03-l03',
  passingScore: 75,
  vocab: [
    { english: 'editorial', arabic: 'افتتاحية', example: 'Write an editorial.', exampleAr: 'اكتب افتتاحية.' },
    { english: 'op-ed', arabic: 'مقال رأي', example: 'Publish an op-ed.', exampleAr: 'انشر مقال رأي.' },
    { english: 'commentary', arabic: 'تعليق', example: 'Political commentary.', exampleAr: 'تعليق سياسي.' },
    { english: 'investigative', arabic: 'استقصائي', example: 'Investigative journalism.', exampleAr: 'صحافة استقصائية.' },
    { english: 'expose', arabic: 'يكشف', example: 'Expose corruption.', exampleAr: 'اكشف الفساد.' },
    { english: 'whistleblower', arabic: 'مبلغ عن المخالفات', example: 'Protect whistleblowers.', exampleAr: 'احمِ المبلغين عن المخالفات.' },
    { english: 'leak', arabic: 'تسريب', example: 'A major leak.', exampleAr: 'تسريب كبير.' },
    { english: 'scoop', arabic: 'سبق صحفي', example: 'Get the scoop.', exampleAr: 'احصل على السبق الصحفي.' }
  ],
  sentences: [
    { english: 'The editorial criticized government policy.', arabic: 'الافتتاحية انتقدت سياسة الحكومة.' },
    { english: 'Investigative journalism exposes wrongdoing.', arabic: 'الصحافة الاستقصائية تكشف المخالفات.' },
    { english: 'The whistleblower revealed the truth.', arabic: 'المبلغ عن المخالفات كشف الحقيقة.' },
    { english: 'They got the scoop before anyone else.', arabic: 'حصلوا على السبق الصحفي قبل أي أحد.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "op-ed"؟', data: { options: ['مقال رأي', 'خبر', 'تقرير', 'افتتاحية'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ journalism. (استقصائية)', data: { answer: 'Investigative' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'expose', arabic: 'يكشف' }, { english: 'leak', arabic: 'تسريب' }, { english: 'scoop', arabic: 'سبق صحفي' }] } },
    { type: 'mcq', promptAr: 'ما معنى "whistleblower"؟', data: { options: ['مبلغ عن المخالفات', 'صحفي', 'محرر', 'ناشر'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "editorial"؟', data: { options: ['افتتاحية', 'خبر', 'إعلان', 'تقرير'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ corruption. (اكشف)', data: { answer: 'Expose' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الصحافة الاستقصائية تكشف المخالفات.', data: { answer: 'Investigative journalism exposes wrongdoing.' }, points: 15 }
  ]
};

export const C1_U3_L4: LessonContent = {
  lessonId: 'C1-u03-l04',
  passingScore: 75,
  vocab: [
    { english: 'broadcast', arabic: 'بث', example: 'Broadcast the news.', exampleAr: 'بث الأخبار.' },
    { english: 'anchor', arabic: 'مذيع رئيسي', example: 'The news anchor.', exampleAr: 'المذيع الرئيسي.' },
    { english: 'correspondent', arabic: 'مراسل', example: 'Foreign correspondent.', exampleAr: 'مراسل أجنبي.' },
    { english: 'coverage', arabic: 'تغطية', example: 'Live coverage.', exampleAr: 'تغطية مباشرة.' },
    { english: 'breaking news', arabic: 'خبر عاجل', example: 'Breaking news alert.', exampleAr: 'تنبيه خبر عاجل.' },
    { english: 'prime time', arabic: 'وقت الذروة', example: 'Prime time slot.', exampleAr: 'فترة وقت الذروة.' },
    { english: 'ratings', arabic: 'نسب المشاهدة', example: 'High ratings.', exampleAr: 'نسب مشاهدة عالية.' },
    { english: 'exclusive', arabic: 'حصري', example: 'An exclusive interview.', exampleAr: 'مقابلة حصرية.' }
  ],
  sentences: [
    { english: 'The network broadcast the event live.', arabic: 'بثت الشبكة الحدث مباشرة.' },
    { english: 'Our correspondent reports from the scene.', arabic: 'مراسلنا يقدم تقريراً من الموقع.' },
    { english: 'Breaking news interrupted the program.', arabic: 'خبر عاجل قاطع البرنامج.' },
    { english: 'They secured an exclusive interview.', arabic: 'حصلوا على مقابلة حصرية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "anchor"؟', data: { options: ['مذيع رئيسي', 'مراسل', 'محرر', 'منتج'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ coverage. (مباشرة)', data: { answer: 'Live' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'broadcast', arabic: 'بث' }, { english: 'ratings', arabic: 'نسب المشاهدة' }, { english: 'exclusive', arabic: 'حصري' }] } },
    { type: 'mcq', promptAr: 'ما معنى "prime time"؟', data: { options: ['وقت الذروة', 'صباح', 'منتصف الليل', 'ظهر'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "correspondent"؟', data: { options: ['مراسل', 'مذيع', 'محرر', 'مصور'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ news alert. (عاجل)', data: { answer: 'Breaking' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: مراسلنا يقدم تقريراً من الموقع.', data: { answer: 'Our correspondent reports from the scene.' }, points: 15 }
  ]
};

export const C1_U3_L5: LessonContent = {
  lessonId: 'C1-u03-l05',
  passingScore: 75,
  vocab: [
    { english: 'viral', arabic: 'منتشر', example: 'The video went viral.', exampleAr: 'انتشر الفيديو بسرعة.' },
    { english: 'algorithm', arabic: 'خوارزمية', example: 'Social media algorithms.', exampleAr: 'خوارزميات وسائل التواصل.' },
    { english: 'engagement', arabic: 'تفاعل', example: 'Increase engagement.', exampleAr: 'زد التفاعل.' },
    { english: 'influencer', arabic: 'مؤثر', example: 'Social media influencer.', exampleAr: 'مؤثر على وسائل التواصل.' },
    { english: 'clickbait', arabic: 'طُعم النقر', example: 'Avoid clickbait.', exampleAr: 'تجنب طُعم النقر.' },
    { english: 'trending', arabic: 'رائج', example: 'Trending topics.', exampleAr: 'مواضيع رائجة.' },
    { english: 'monetize', arabic: 'يحقق ربحاً', example: 'Monetize content.', exampleAr: 'حقق ربحاً من المحتوى.' },
    { english: 'reach', arabic: 'وصول', example: 'Expand your reach.', exampleAr: 'وسّع وصولك.' }
  ],
  sentences: [
    { english: 'The post went viral overnight.', arabic: 'انتشر المنشور بين ليلة وضحاها.' },
    { english: 'Algorithms determine what you see.', arabic: 'الخوارزميات تحدد ما تراه.' },
    { english: 'Clickbait headlines are misleading.', arabic: 'عناوين طُعم النقر مضللة.' },
    { english: 'They monetize their content through ads.', arabic: 'يحققون ربحاً من محتواهم عبر الإعلانات.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "viral"؟', data: { options: ['منتشر بسرعة', 'بطيء', 'خاص', 'محدود'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ topics. (رائجة)', data: { answer: 'Trending' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'algorithm', arabic: 'خوارزمية' }, { english: 'engagement', arabic: 'تفاعل' }, { english: 'influencer', arabic: 'مؤثر' }] } },
    { type: 'mcq', promptAr: 'ما معنى "clickbait"؟', data: { options: ['طُعم النقر', 'رابط', 'إعلان', 'خبر'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "monetize"؟', data: { options: ['يحقق ربحاً', 'ينشر', 'يشارك', 'يحذف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Expand your _____. (وصول)', data: { answer: 'reach' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الخوارزميات تحدد ما تراه.', data: { answer: 'Algorithms determine what you see.' }, points: 15 }
  ]
};

export const c1Unit3Lessons: Record<string, LessonContent> = {
  'C1-u03-l01': C1_U3_L1,
  'C1-u03-l02': C1_U3_L2,
  'C1-u03-l03': C1_U3_L3,
  'C1-u03-l04': C1_U3_L4,
  'C1-u03-l05': C1_U3_L5,
};

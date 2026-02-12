import { LessonContent } from './a1-lessons';

// Unit 2: Current Events - الأحداث الجارية
export const B1_U2_L1: LessonContent = {
  lessonId: 'B1-u02-l01',
  passingScore: 70,
  vocab: [
    { english: 'news', arabic: 'أخبار', example: 'Did you watch the news?', exampleAr: 'هل شاهدت الأخبار؟' },
    { english: 'headline', arabic: 'عنوان رئيسي', example: 'The headline is shocking.', exampleAr: 'العنوان الرئيسي صادم.' },
    { english: 'article', arabic: 'مقال', example: 'I read an interesting article.', exampleAr: 'قرأت مقالاً مثيراً للاهتمام.' },
    { english: 'journalist', arabic: 'صحفي', example: 'She is a journalist.', exampleAr: 'هي صحفية.' },
    { english: 'broadcast', arabic: 'بث', example: 'The broadcast starts at 8.', exampleAr: 'البث يبدأ الساعة 8.' },
    { english: 'report', arabic: 'تقرير', example: 'The report was accurate.', exampleAr: 'التقرير كان دقيقاً.' },
    { english: 'update', arabic: 'تحديث', example: 'Any updates on the situation?', exampleAr: 'أي تحديثات عن الوضع؟' },
    { english: 'breaking news', arabic: 'خبر عاجل', example: 'This is breaking news.', exampleAr: 'هذا خبر عاجل.' }
  ],
  sentences: [
    { english: 'The headline in today\'s newspaper is important.', arabic: 'العنوان الرئيسي في جريدة اليوم مهم.' },
    { english: 'Journalists report on current events.', arabic: 'الصحفيون يقدمون تقارير عن الأحداث الجارية.' },
    { english: 'The news broadcast starts at 9 PM.', arabic: 'بث الأخبار يبدأ الساعة 9 مساءً.' },
    { english: 'I read an article about climate change.', arabic: 'قرأت مقالاً عن تغير المناخ.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "headline"؟', data: { options: ['عنوان رئيسي', 'مقال', 'أخبار', 'تقرير'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'She is a _____. (صحفية)', data: { answer: 'journalist' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'news', arabic: 'أخبار' }, { english: 'article', arabic: 'مقال' }, { english: 'update', arabic: 'تحديث' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "خبر عاجل"؟', data: { options: ['breaking news', 'old news', 'fake news', 'good news'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "broadcast"؟', data: { options: ['بث', 'مقال', 'عنوان', 'صحفي'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The _____ was accurate. (تقرير)', data: { answer: 'report' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هل شاهدت الأخبار؟', data: { answer: 'Did you watch the news?' }, points: 15 }
  ]
};

export const B1_U2_L2: LessonContent = {
  lessonId: 'B1-u02-l02',
  passingScore: 70,
  vocab: [
    { english: 'election', arabic: 'انتخابات', example: 'The election is next month.', exampleAr: 'الانتخابات الشهر القادم.' },
    { english: 'vote', arabic: 'تصويت', example: 'Did you vote?', exampleAr: 'هل صوّت؟' },
    { english: 'candidate', arabic: 'مرشح', example: 'Who is your candidate?', exampleAr: 'من مرشحك؟' },
    { english: 'government', arabic: 'حكومة', example: 'The government announced new policies.', exampleAr: 'أعلنت الحكومة سياسات جديدة.' },
    { english: 'policy', arabic: 'سياسة', example: 'This is a new policy.', exampleAr: 'هذه سياسة جديدة.' },
    { english: 'parliament', arabic: 'برلمان', example: 'Parliament met today.', exampleAr: 'اجتمع البرلمان اليوم.' },
    { english: 'citizen', arabic: 'مواطن', example: 'Every citizen can vote.', exampleAr: 'كل مواطن يمكنه التصويت.' },
    { english: 'democracy', arabic: 'ديمقراطية', example: 'Democracy is important.', exampleAr: 'الديمقراطية مهمة.' }
  ],
  sentences: [
    { english: 'Citizens vote in the election.', arabic: 'المواطنون يصوتون في الانتخابات.' },
    { english: 'The government announced new economic policies.', arabic: 'أعلنت الحكومة سياسات اقتصادية جديدة.' },
    { english: 'Parliament will discuss the new law.', arabic: 'سيناقش البرلمان القانون الجديد.' },
    { english: 'All candidates presented their programs.', arabic: 'قدم جميع المرشحين برامجهم.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "election"؟', data: { options: ['انتخابات', 'حكومة', 'برلمان', 'سياسة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Every _____ can vote. (مواطن)', data: { answer: 'citizen' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "ديمقراطية"؟', data: { options: ['democracy', 'dictatorship', 'government', 'policy'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['vote', 'you', 'did'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "parliament"؟', data: { options: ['برلمان', 'حكومة', 'انتخابات', 'مواطن'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The _____ announced new policies. (حكومة)', data: { answer: 'government' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الانتخابات الشهر القادم.', data: { answer: 'The election is next month.' }, points: 15 }
  ]
};

export const B1_U2_L3: LessonContent = {
  lessonId: 'B1-u02-l03',
  passingScore: 70,
  vocab: [
    { english: 'economy', arabic: 'اقتصاد', example: 'The economy is growing.', exampleAr: 'الاقتصاد ينمو.' },
    { english: 'inflation', arabic: 'تضخم', example: 'Inflation is rising.', exampleAr: 'التضخم يرتفع.' },
    { english: 'unemployment', arabic: 'بطالة', example: 'Unemployment decreased.', exampleAr: 'البطالة انخفضت.' },
    { english: 'investment', arabic: 'استثمار', example: 'This is a good investment.', exampleAr: 'هذا استثمار جيد.' },
    { english: 'export', arabic: 'تصدير', example: 'We export oil.', exampleAr: 'نصدر النفط.' },
    { english: 'import', arabic: 'استيراد', example: 'We import electronics.', exampleAr: 'نستورد الإلكترونيات.' },
    { english: 'growth', arabic: 'نمو', example: 'Economic growth is positive.', exampleAr: 'النمو الاقتصادي إيجابي.' },
    { english: 'crisis', arabic: 'أزمة', example: 'There is an economic crisis.', exampleAr: 'هناك أزمة اقتصادية.' }
  ],
  sentences: [
    { english: 'The economy is recovering from the crisis.', arabic: 'الاقتصاد يتعافى من الأزمة.' },
    { english: 'Inflation affects everyone\'s purchasing power.', arabic: 'التضخم يؤثر على القدرة الشرائية للجميع.' },
    { english: 'Foreign investment is increasing.', arabic: 'الاستثمار الأجنبي يتزايد.' },
    { english: 'The country exports more than it imports.', arabic: 'البلد يصدر أكثر مما يستورد.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "economy"؟', data: { options: ['اقتصاد', 'تضخم', 'بطالة', 'أزمة'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ is rising. (التضخم)', data: { answer: 'Inflation' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'export', arabic: 'تصدير' }, { english: 'import', arabic: 'استيراد' }, { english: 'growth', arabic: 'نمو' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "بطالة"؟', data: { options: ['unemployment', 'employment', 'investment', 'inflation'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "investment"؟', data: { options: ['استثمار', 'تصدير', 'استيراد', 'نمو'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'There is an economic _____. (أزمة)', data: { answer: 'crisis' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الاقتصاد ينمو.', data: { answer: 'The economy is growing.' }, points: 15 }
  ]
};

export const B1_U2_L4: LessonContent = {
  lessonId: 'B1-u02-l04',
  passingScore: 70,
  vocab: [
    { english: 'disaster', arabic: 'كارثة', example: 'It was a natural disaster.', exampleAr: 'كانت كارثة طبيعية.' },
    { english: 'earthquake', arabic: 'زلزال', example: 'The earthquake was strong.', exampleAr: 'الزلزال كان قوياً.' },
    { english: 'flood', arabic: 'فيضان', example: 'The flood damaged houses.', exampleAr: 'الفيضان دمر المنازل.' },
    { english: 'rescue', arabic: 'إنقاذ', example: 'The rescue team arrived.', exampleAr: 'وصل فريق الإنقاذ.' },
    { english: 'victim', arabic: 'ضحية', example: 'They helped the victims.', exampleAr: 'ساعدوا الضحايا.' },
    { english: 'emergency', arabic: 'طوارئ', example: 'This is an emergency.', exampleAr: 'هذه حالة طوارئ.' },
    { english: 'evacuate', arabic: 'يخلي', example: 'They evacuated the building.', exampleAr: 'أخلوا المبنى.' },
    { english: 'relief', arabic: 'إغاثة', example: 'Relief supplies arrived.', exampleAr: 'وصلت إمدادات الإغاثة.' }
  ],
  sentences: [
    { english: 'A strong earthquake hit the city yesterday.', arabic: 'ضرب زلزال قوي المدينة أمس.' },
    { english: 'The rescue team saved many victims.', arabic: 'أنقذ فريق الإنقاذ العديد من الضحايا.' },
    { english: 'They evacuated people from the flood zone.', arabic: 'أخلوا الناس من منطقة الفيضان.' },
    { english: 'Relief organizations provided food and shelter.', arabic: 'قدمت منظمات الإغاثة الطعام والمأوى.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "earthquake"؟', data: { options: ['زلزال', 'فيضان', 'كارثة', 'إعصار'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ team arrived. (إنقاذ)', data: { answer: 'rescue' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "ضحية"؟', data: { options: ['victim', 'hero', 'survivor', 'helper'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['emergency', 'is', 'an', 'this'], correctOrder: [3, 1, 2, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "evacuate"؟', data: { options: ['يخلي', 'ينقذ', 'يساعد', 'يبني'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ supplies arrived. (إغاثة)', data: { answer: 'Relief' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذه حالة طوارئ.', data: { answer: 'This is an emergency.' }, points: 15 }
  ]
};

export const B1_U2_L5: LessonContent = {
  lessonId: 'B1-u02-l05',
  passingScore: 70,
  vocab: [
    { english: 'social media', arabic: 'وسائل التواصل الاجتماعي', example: 'Social media is popular.', exampleAr: 'وسائل التواصل الاجتماعي شائعة.' },
    { english: 'viral', arabic: 'منتشر', example: 'The video went viral.', exampleAr: 'الفيديو انتشر.' },
    { english: 'trend', arabic: 'اتجاه', example: 'This is a new trend.', exampleAr: 'هذا اتجاه جديد.' },
    { english: 'fake news', arabic: 'أخبار كاذبة', example: 'Beware of fake news.', exampleAr: 'احذر من الأخبار الكاذبة.' },
    { english: 'source', arabic: 'مصدر', example: 'Check your source.', exampleAr: 'تحقق من مصدرك.' },
    { english: 'reliable', arabic: 'موثوق', example: 'Is this source reliable?', exampleAr: 'هل هذا المصدر موثوق؟' },
    { english: 'share', arabic: 'يشارك', example: 'Don\'t share fake news.', exampleAr: 'لا تشارك الأخبار الكاذبة.' },
    { english: 'verify', arabic: 'يتحقق', example: 'Verify before sharing.', exampleAr: 'تحقق قبل المشاركة.' }
  ],
  sentences: [
    { english: 'Always verify news before sharing it.', arabic: 'دائماً تحقق من الأخبار قبل مشاركتها.' },
    { english: 'The story went viral on social media.', arabic: 'انتشرت القصة على وسائل التواصل الاجتماعي.' },
    { english: 'Make sure your source is reliable.', arabic: 'تأكد أن مصدرك موثوق.' },
    { english: 'Fake news spreads quickly online.', arabic: 'الأخبار الكاذبة تنتشر بسرعة على الإنترنت.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "reliable"؟', data: { options: ['موثوق', 'كاذب', 'سريع', 'بطيء'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ before sharing. (تحقق)', data: { answer: 'Verify' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'viral', arabic: 'منتشر' }, { english: 'trend', arabic: 'اتجاه' }, { english: 'source', arabic: 'مصدر' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "أخبار كاذبة"؟', data: { options: ['fake news', 'breaking news', 'good news', 'old news'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "share"؟', data: { options: ['يشارك', 'يحذف', 'يخفي', 'يكتب'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The video went _____. (منتشر)', data: { answer: 'viral' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: تحقق من مصدرك.', data: { answer: 'Check your source.' }, points: 15 }
  ]
};

export const b1Unit2Lessons: Record<string, LessonContent> = {
  'B1-u02-l01': B1_U2_L1,
  'B1-u02-l02': B1_U2_L2,
  'B1-u02-l03': B1_U2_L3,
  'B1-u02-l04': B1_U2_L4,
  'B1-u02-l05': B1_U2_L5,
};

import { LessonContent } from './a1-lessons';

// Unit 6: Environment - البيئة
export const B1_U6_L1: LessonContent = {
  lessonId: 'B1-u06-l01',
  passingScore: 70,
  vocab: [
    { english: 'environment', arabic: 'بيئة', example: 'Protect the environment.', exampleAr: 'احمِ البيئة.' },
    { english: 'pollution', arabic: 'تلوث', example: 'Pollution is a problem.', exampleAr: 'التلوث مشكلة.' },
    { english: 'climate', arabic: 'مناخ', example: 'The climate is changing.', exampleAr: 'المناخ يتغير.' },
    { english: 'recycle', arabic: 'إعادة التدوير', example: 'Recycle your waste.', exampleAr: 'أعد تدوير نفاياتك.' },
    { english: 'renewable', arabic: 'متجدد', example: 'Use renewable energy.', exampleAr: 'استخدم الطاقة المتجددة.' },
    { english: 'sustainable', arabic: 'مستدام', example: 'Sustainable living is important.', exampleAr: 'الحياة المستدامة مهمة.' },
    { english: 'ecosystem', arabic: 'نظام بيئي', example: 'Protect the ecosystem.', exampleAr: 'احمِ النظام البيئي.' },
    { english: 'conservation', arabic: 'حفظ', example: 'Conservation efforts help.', exampleAr: 'جهود الحفظ تساعد.' }
  ],
  sentences: [
    { english: 'We need to protect our environment.', arabic: 'نحتاج أن نحمي بيئتنا.' },
    { english: 'Climate change affects everyone.', arabic: 'تغير المناخ يؤثر على الجميع.' },
    { english: 'Recycling helps reduce pollution.', arabic: 'إعادة التدوير تساعد في تقليل التلوث.' },
    { english: 'Renewable energy is the future.', arabic: 'الطاقة المتجددة هي المستقبل.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "pollution"؟', data: { options: ['تلوث', 'بيئة', 'مناخ', 'طاقة'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ your waste. (أعد تدوير)', data: { answer: 'Recycle' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'environment', arabic: 'بيئة' }, { english: 'climate', arabic: 'مناخ' }, { english: 'ecosystem', arabic: 'نظام بيئي' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "مستدام"؟', data: { options: ['sustainable', 'suitable', 'substantial', 'sufficient'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "renewable"؟', data: { options: ['متجدد', 'مستدام', 'بيئي', 'طبيعي'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ efforts help. (حفظ)', data: { answer: 'Conservation' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: التلوث مشكلة.', data: { answer: 'Pollution is a problem.' }, points: 15 }
  ]
};

export const B1_U6_L2: LessonContent = {
  lessonId: 'B1-u06-l02',
  passingScore: 70,
  vocab: [
    { english: 'global warming', arabic: 'الاحتباس الحراري', example: 'Global warming is serious.', exampleAr: 'الاحتباس الحراري خطير.' },
    { english: 'carbon', arabic: 'كربون', example: 'Reduce carbon emissions.', exampleAr: 'قلل انبعاثات الكربون.' },
    { english: 'greenhouse', arabic: 'الاحتباس', example: 'Greenhouse gases trap heat.', exampleAr: 'غازات الاحتباس تحبس الحرارة.' },
    { english: 'emissions', arabic: 'انبعاثات', example: 'Reduce harmful emissions.', exampleAr: 'قلل الانبعاثات الضارة.' },
    { english: 'fossil fuel', arabic: 'وقود أحفوري', example: 'Limit fossil fuel use.', exampleAr: 'حدّ من استخدام الوقود الأحفوري.' },
    { english: 'temperature', arabic: 'درجة حرارة', example: 'Temperature is rising.', exampleAr: 'درجة الحرارة ترتفع.' },
    { english: 'ice cap', arabic: 'غطاء جليدي', example: 'Ice caps are melting.', exampleAr: 'الأغطية الجليدية تذوب.' },
    { english: 'sea level', arabic: 'مستوى البحر', example: 'Sea levels are rising.', exampleAr: 'مستويات البحر ترتفع.' }
  ],
  sentences: [
    { english: 'Global warming causes ice caps to melt.', arabic: 'الاحتباس الحراري يسبب ذوبان الأغطية الجليدية.' },
    { english: 'We must reduce carbon emissions.', arabic: 'يجب أن نقلل انبعاثات الكربون.' },
    { english: 'Rising sea levels threaten coastal cities.', arabic: 'ارتفاع مستويات البحر يهدد المدن الساحلية.' },
    { english: 'Fossil fuels contribute to climate change.', arabic: 'الوقود الأحفوري يساهم في تغير المناخ.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "emissions"؟', data: { options: ['انبعاثات', 'طاقة', 'وقود', 'حرارة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Ice caps are _____. (تذوب)', data: { answer: 'melting' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "درجة حرارة"؟', data: { options: ['temperature', 'temperate', 'temporary', 'temple'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['levels', 'sea', 'rising', 'are'], correctOrder: [1, 0, 3, 2] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "fossil fuel"؟', data: { options: ['وقود أحفوري', 'طاقة شمسية', 'غاز طبيعي', 'طاقة نووية'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Reduce _____ emissions. (كربون)', data: { answer: 'carbon' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الاحتباس الحراري خطير.', data: { answer: 'Global warming is serious.' }, points: 15 }
  ]
};

export const B1_U6_L3: LessonContent = {
  lessonId: 'B1-u06-l03',
  passingScore: 70,
  vocab: [
    { english: 'wildlife', arabic: 'حياة برية', example: 'Protect wildlife.', exampleAr: 'احمِ الحياة البرية.' },
    { english: 'endangered', arabic: 'مهدد بالانقراض', example: 'This species is endangered.', exampleAr: 'هذا النوع مهدد بالانقراض.' },
    { english: 'habitat', arabic: 'موطن', example: 'Protect their habitat.', exampleAr: 'احمِ موطنهم.' },
    { english: 'species', arabic: 'نوع', example: 'Many species are at risk.', exampleAr: 'العديد من الأنواع في خطر.' },
    { english: 'extinction', arabic: 'انقراض', example: 'Prevent extinction.', exampleAr: 'امنع الانقراض.' },
    { english: 'biodiversity', arabic: 'تنوع بيولوجي', example: 'Biodiversity is important.', exampleAr: 'التنوع البيولوجي مهم.' },
    { english: 'poaching', arabic: 'صيد غير مشروع', example: 'Poaching is illegal.', exampleAr: 'الصيد غير المشروع غير قانوني.' },
    { english: 'sanctuary', arabic: 'محمية', example: 'Visit the wildlife sanctuary.', exampleAr: 'زر محمية الحياة البرية.' }
  ],
  sentences: [
    { english: 'Many endangered species need protection.', arabic: 'العديد من الأنواع المهددة بالانقراض تحتاج حماية.' },
    { english: 'Habitat destruction threatens wildlife.', arabic: 'تدمير الموطن يهدد الحياة البرية.' },
    { english: 'Biodiversity keeps ecosystems healthy.', arabic: 'التنوع البيولوجي يحافظ على صحة النظم البيئية.' },
    { english: 'Poaching drives animals to extinction.', arabic: 'الصيد غير المشروع يدفع الحيوانات للانقراض.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "endangered"؟', data: { options: ['مهدد بالانقراض', 'منتشر', 'آمن', 'نادر'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Protect their _____. (موطن)', data: { answer: 'habitat' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'wildlife', arabic: 'حياة برية' }, { english: 'species', arabic: 'نوع' }, { english: 'extinction', arabic: 'انقراض' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "محمية"؟', data: { options: ['sanctuary', 'century', 'sanity', 'sanctity'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "biodiversity"؟', data: { options: ['تنوع بيولوجي', 'حياة برية', 'انقراض', 'موطن'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ is illegal. (صيد غير مشروع)', data: { answer: 'Poaching' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذا النوع مهدد بالانقراض.', data: { answer: 'This species is endangered.' }, points: 15 }
  ]
};

export const B1_U6_L4: LessonContent = {
  lessonId: 'B1-u06-l04',
  passingScore: 70,
  vocab: [
    { english: 'solar energy', arabic: 'طاقة شمسية', example: 'Use solar energy.', exampleAr: 'استخدم الطاقة الشمسية.' },
    { english: 'wind power', arabic: 'طاقة الرياح', example: 'Wind power is clean.', exampleAr: 'طاقة الرياح نظيفة.' },
    { english: 'hydroelectric', arabic: 'كهرومائي', example: 'Hydroelectric dams generate power.', exampleAr: 'السدود الكهرومائية تولد الطاقة.' },
    { english: 'nuclear', arabic: 'نووي', example: 'Nuclear energy is powerful.', exampleAr: 'الطاقة النووية قوية.' },
    { english: 'alternative', arabic: 'بديل', example: 'Find alternative sources.', exampleAr: 'ابحث عن مصادر بديلة.' },
    { english: 'efficient', arabic: 'كفء', example: 'Make it more efficient.', exampleAr: 'اجعلها أكثر كفاءة.' },
    { english: 'panel', arabic: 'لوح', example: 'Install solar panels.', exampleAr: 'ركّب ألواحاً شمسية.' },
    { english: 'turbine', arabic: 'توربين', example: 'Wind turbines produce energy.', exampleAr: 'توربينات الرياح تنتج طاقة.' }
  ],
  sentences: [
    { english: 'Solar panels convert sunlight to electricity.', arabic: 'الألواح الشمسية تحول ضوء الشمس إلى كهرباء.' },
    { english: 'Wind turbines are becoming more efficient.', arabic: 'توربينات الرياح تصبح أكثر كفاءة.' },
    { english: 'Hydroelectric power is a renewable source.', arabic: 'الطاقة الكهرومائية مصدر متجدد.' },
    { english: 'Alternative energy reduces pollution.', arabic: 'الطاقة البديلة تقلل التلوث.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "solar energy"؟', data: { options: ['طاقة شمسية', 'طاقة الرياح', 'طاقة نووية', 'طاقة كهربائية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Install solar _____. (ألواح)', data: { answer: 'panels' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "توربين"؟', data: { options: ['turbine', 'tube', 'turbo', 'turn'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['energy', 'solar', 'use'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "alternative"؟', data: { options: ['بديل', 'رئيسي', 'أساسي', 'طبيعي'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Wind power is _____. (نظيفة)', data: { answer: 'clean' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: استخدم الطاقة الشمسية.', data: { answer: 'Use solar energy.' }, points: 15 }
  ]
};

export const B1_U6_L5: LessonContent = {
  lessonId: 'B1-u06-l05',
  passingScore: 70,
  vocab: [
    { english: 'waste', arabic: 'نفايات', example: 'Reduce waste.', exampleAr: 'قلل النفايات.' },
    { english: 'landfill', arabic: 'مكب نفايات', example: 'Landfills are overflowing.', exampleAr: 'مكبات النفايات تفيض.' },
    { english: 'compost', arabic: 'سماد عضوي', example: 'Make compost at home.', exampleAr: 'اصنع سماداً عضوياً في المنزل.' },
    { english: 'plastic', arabic: 'بلاستيك', example: 'Reduce plastic use.', exampleAr: 'قلل استخدام البلاستيك.' },
    { english: 'reusable', arabic: 'قابل لإعادة الاستخدام', example: 'Use reusable bags.', exampleAr: 'استخدم أكياساً قابلة لإعادة الاستخدام.' },
    { english: 'disposable', arabic: 'للاستخدام مرة واحدة', example: 'Avoid disposable items.', exampleAr: 'تجنب المواد للاستخدام مرة واحدة.' },
    { english: 'reduce', arabic: 'يقلل', example: 'Reduce, reuse, recycle.', exampleAr: 'قلل، أعد الاستخدام، أعد التدوير.' },
    { english: 'carbon footprint', arabic: 'بصمة كربونية', example: 'Reduce your carbon footprint.', exampleAr: 'قلل بصمتك الكربونية.' }
  ],
  sentences: [
    { english: 'Reducing waste helps the environment.', arabic: 'تقليل النفايات يساعد البيئة.' },
    { english: 'Use reusable bags instead of plastic.', arabic: 'استخدم أكياساً قابلة لإعادة الاستخدام بدلاً من البلاستيك.' },
    { english: 'Composting reduces landfill waste.', arabic: 'التسميد يقلل نفايات المكبات.' },
    { english: 'Everyone should reduce their carbon footprint.', arabic: 'يجب على الجميع تقليل بصمتهم الكربونية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "reusable"؟', data: { options: ['قابل لإعادة الاستخدام', 'للاستخدام مرة واحدة', 'قابل للتدوير', 'غير قابل للتدوير'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Reduce _____ use. (بلاستيك)', data: { answer: 'plastic' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'waste', arabic: 'نفايات' }, { english: 'compost', arabic: 'سماد عضوي' }, { english: 'reduce', arabic: 'يقلل' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "مكب نفايات"؟', data: { options: ['landfill', 'landscape', 'landmark', 'landlord'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "disposable"؟', data: { options: ['للاستخدام مرة واحدة', 'قابل لإعادة الاستخدام', 'قابل للتدوير', 'دائم'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Reduce your carbon _____. (بصمة)', data: { answer: 'footprint' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: قلل النفايات.', data: { answer: 'Reduce waste.' }, points: 15 }
  ]
};

export const b1Unit6Lessons: Record<string, LessonContent> = {
  'B1-u06-l01': B1_U6_L1,
  'B1-u06-l02': B1_U6_L2,
  'B1-u06-l03': B1_U6_L3,
  'B1-u06-l04': B1_U6_L4,
  'B1-u06-l05': B1_U6_L5,
};

import { LessonContent } from './a1-lessons';

// Unit 2: Academic Writing - الكتابة الأكاديمية
export const C1_U2_L1: LessonContent = {
  lessonId: 'C1-u02-l01',
  passingScore: 75,
  vocab: [
    { english: 'thesis statement', arabic: 'بيان الأطروحة', example: 'Your thesis statement should be clear.', exampleAr: 'بيان أطروحتك يجب أن يكون واضحاً.' },
    { english: 'hypothesis', arabic: 'فرضية', example: 'Test the hypothesis.', exampleAr: 'اختبر الفرضية.' },
    { english: 'methodology', arabic: 'منهجية', example: 'Explain your methodology.', exampleAr: 'اشرح منهجيتك.' },
    { english: 'empirical', arabic: 'تجريبي', example: 'Empirical evidence is needed.', exampleAr: 'هناك حاجة لأدلة تجريبية.' },
    { english: 'theoretical', arabic: 'نظري', example: 'A theoretical framework.', exampleAr: 'إطار نظري.' },
    { english: 'paradigm', arabic: 'نموذج فكري', example: 'A paradigm shift occurred.', exampleAr: 'حدث تحول في النموذج الفكري.' },
    { english: 'discourse', arabic: 'خطاب', example: 'Academic discourse.', exampleAr: 'الخطاب الأكاديمي.' },
    { english: 'premise', arabic: 'مقدمة منطقية', example: 'The basic premise is...', exampleAr: 'المقدمة الأساسية هي...' }
  ],
  sentences: [
    { english: 'The thesis statement encapsulates your main argument.', arabic: 'بيان الأطروحة يلخص حجتك الرئيسية.' },
    { english: 'Empirical research requires data collection.', arabic: 'البحث التجريبي يتطلب جمع البيانات.' },
    { english: 'This represents a paradigm shift in thinking.', arabic: 'هذا يمثل تحولاً في النموذج الفكري.' },
    { english: 'The premise of your argument is flawed.', arabic: 'المقدمة المنطقية لحجتك معيبة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "empirical"؟', data: { options: ['تجريبي', 'نظري', 'فلسفي', 'عملي'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'A _____ shift occurred. (نموذج فكري)', data: { answer: 'paradigm' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'hypothesis', arabic: 'فرضية' }, { english: 'methodology', arabic: 'منهجية' }, { english: 'discourse', arabic: 'خطاب' }] } },
    { type: 'mcq', promptAr: 'ما معنى "premise"؟', data: { options: ['مقدمة منطقية', 'نتيجة', 'خاتمة', 'فرضية'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "thesis statement"؟', data: { options: ['بيان الأطروحة', 'فرضية', 'نتيجة', 'ملخص'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ evidence is needed. (تجريبية)', data: { answer: 'Empirical' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: البحث التجريبي يتطلب جمع البيانات.', data: { answer: 'Empirical research requires data collection.' }, points: 15 }
  ]
};

export const C1_U2_L2: LessonContent = {
  lessonId: 'C1-u02-l02',
  passingScore: 75,
  vocab: [
    { english: 'corroborate', arabic: 'يؤيد', example: 'Evidence corroborates the claim.', exampleAr: 'الأدلة تؤيد الادعاء.' },
    { english: 'substantiate', arabic: 'يثبت', example: 'Substantiate your claims.', exampleAr: 'أثبت ادعاءاتك.' },
    { english: 'refute', arabic: 'يدحض', example: 'Refute the argument.', exampleAr: 'ادحض الحجة.' },
    { english: 'contradict', arabic: 'يناقض', example: 'The findings contradict...', exampleAr: 'النتائج تناقض...' },
    { english: 'postulate', arabic: 'يفترض', example: 'Scientists postulate that...', exampleAr: 'يفترض العلماء أن...' },
    { english: 'assert', arabic: 'يؤكد', example: 'She asserts her position.', exampleAr: 'تؤكد موقفها.' },
    { english: 'contend', arabic: 'يدّعي', example: 'Critics contend that...', exampleAr: 'يدّعي النقاد أن...' },
    { english: 'maintain', arabic: 'يتمسك بـ', example: 'He maintains his stance.', exampleAr: 'يتمسك بموقفه.' }
  ],
  sentences: [
    { english: 'Multiple studies corroborate these findings.', arabic: 'دراسات متعددة تؤيد هذه النتائج.' },
    { english: 'You must substantiate your claims with evidence.', arabic: 'يجب أن تثبت ادعاءاتك بالأدلة.' },
    { english: 'The new data refutes the previous theory.', arabic: 'البيانات الجديدة تدحض النظرية السابقة.' },
    { english: 'Researchers postulate a new mechanism.', arabic: 'يفترض الباحثون آلية جديدة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "corroborate"؟', data: { options: ['يؤيد', 'يدحض', 'يناقض', 'ينفي'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ your claims. (أثبت)', data: { answer: 'Substantiate' } },
    { type: 'mcq', promptAr: 'ما عكس "refute"؟', data: { options: ['corroborate', 'contradict', 'contend', 'postulate'], correct: 0 } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'assert', arabic: 'يؤكد' }, { english: 'contend', arabic: 'يدّعي' }, { english: 'maintain', arabic: 'يتمسك بـ' }] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "postulate"؟', data: { options: ['يفترض', 'يثبت', 'يدحض', 'يؤيد'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The new data _____ the previous theory. (تدحض)', data: { answer: 'refutes' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: دراسات متعددة تؤيد هذه النتائج.', data: { answer: 'Multiple studies corroborate these findings.' }, points: 15 }
  ]
};

export const C1_U2_L3: LessonContent = {
  lessonId: 'C1-u02-l03',
  passingScore: 75,
  vocab: [
    { english: 'synthesize', arabic: 'يجمع/يركّب', example: 'Synthesize information from sources.', exampleAr: 'اجمع المعلومات من المصادر.' },
    { english: 'extrapolate', arabic: 'يستقرئ', example: 'Extrapolate from the data.', exampleAr: 'استقرئ من البيانات.' },
    { english: 'interpolate', arabic: 'يستكمل', example: 'Interpolate missing values.', exampleAr: 'استكمل القيم المفقودة.' },
    { english: 'correlate', arabic: 'يربط', example: 'Correlate the variables.', exampleAr: 'اربط بين المتغيرات.' },
    { english: 'derive', arabic: 'يستمد', example: 'Derive a conclusion.', exampleAr: 'استمد نتيجة.' },
    { english: 'attribute', arabic: 'ينسب', example: 'Attribute the quote correctly.', exampleAr: 'انسب الاقتباس بشكل صحيح.' },
    { english: 'cite', arabic: 'يستشهد', example: 'Cite your sources.', exampleAr: 'استشهد بمصادرك.' },
    { english: 'paraphrase', arabic: 'يعيد الصياغة', example: 'Paraphrase the original.', exampleAr: 'أعد صياغة الأصل.' }
  ],
  sentences: [
    { english: 'Synthesize findings from multiple studies.', arabic: 'اجمع نتائج من دراسات متعددة.' },
    { english: 'We can extrapolate future trends from current data.', arabic: 'يمكننا استقراء اتجاهات مستقبلية من البيانات الحالية.' },
    { english: 'These variables correlate strongly.', arabic: 'هذه المتغيرات ترتبط بقوة.' },
    { english: 'Always cite your sources properly.', arabic: 'دائماً استشهد بمصادرك بشكل صحيح.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "extrapolate"؟', data: { options: ['يستقرئ', 'يجمع', 'يحذف', 'يضيف'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ your sources. (استشهد)', data: { answer: 'Cite' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'synthesize', arabic: 'يجمع' }, { english: 'derive', arabic: 'يستمد' }, { english: 'attribute', arabic: 'ينسب' }] } },
    { type: 'mcq', promptAr: 'ما الفرق بين "cite" و "paraphrase"؟', data: { options: ['cite=استشهاد، paraphrase=إعادة صياغة', 'نفس المعنى', 'cite=إعادة صياغة', 'لا فرق'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "correlate"؟', data: { options: ['يربط', 'يفصل', 'يضيف', 'يحذف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ the original. (أعد صياغة)', data: { answer: 'Paraphrase' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: يمكننا استقراء اتجاهات مستقبلية من البيانات الحالية.', data: { answer: 'We can extrapolate future trends from current data.' }, points: 15 }
  ]
};

export const C1_U2_L4: LessonContent = {
  lessonId: 'C1-u02-l04',
  passingScore: 75,
  vocab: [
    { english: 'caveat', arabic: 'تحفظ', example: 'Note this caveat.', exampleAr: 'لاحظ هذا التحفظ.' },
    { english: 'limitation', arabic: 'قيد', example: 'Acknowledge limitations.', exampleAr: 'اعترف بالقيود.' },
    { english: 'scope', arabic: 'نطاق', example: 'Define the scope.', exampleAr: 'حدد النطاق.' },
    { english: 'parameter', arabic: 'معيار', example: 'Set the parameters.', exampleAr: 'ضع المعايير.' },
    { english: 'variable', arabic: 'متغير', example: 'Control the variables.', exampleAr: 'تحكم في المتغيرات.' },
    { english: 'criterion', arabic: 'معيار', example: 'The main criterion is...', exampleAr: 'المعيار الرئيسي هو...' },
    { english: 'criteria', arabic: 'معايير', example: 'Meet the criteria.', exampleAr: 'استوفِ المعايير.' },
    { english: 'benchmark', arabic: 'مرجع', example: 'Use as a benchmark.', exampleAr: 'استخدم كمرجع.' }
  ],
  sentences: [
    { english: 'This study has certain limitations.', arabic: 'هذه الدراسة لها قيود معينة.' },
    { english: 'The scope of this research is limited to...', arabic: 'نطاق هذا البحث يقتصر على...' },
    { english: 'All criteria must be met.', arabic: 'يجب استيفاء جميع المعايير.' },
    { english: 'We use industry standards as benchmarks.', arabic: 'نستخدم معايير الصناعة كمراجع.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما جمع "criterion"؟', data: { options: ['criteria', 'criterions', 'criterias', 'criterian'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Define the _____ of the study. (نطاق)', data: { answer: 'scope' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'limitation', arabic: 'قيد' }, { english: 'parameter', arabic: 'معيار' }, { english: 'variable', arabic: 'متغير' }] } },
    { type: 'mcq', promptAr: 'ما معنى "benchmark"؟', data: { options: ['مرجع', 'معيار', 'متغير', 'قيد'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "scope"؟', data: { options: ['نطاق', 'هدف', 'نتيجة', 'طريقة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Meet the _____. (معايير)', data: { answer: 'criteria' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذه الدراسة لها قيود معينة.', data: { answer: 'This study has certain limitations.' }, points: 15 }
  ]
};

export const C1_U2_L5: LessonContent = {
  lessonId: 'C1-u02-l05',
  passingScore: 75,
  vocab: [
    { english: 'peer-reviewed', arabic: 'محكّم', example: 'Publish in peer-reviewed journals.', exampleAr: 'انشر في مجلات محكّمة.' },
    { english: 'scholarly', arabic: 'أكاديمي', example: 'Scholarly articles.', exampleAr: 'مقالات أكاديمية.' },
    { english: 'seminal', arabic: 'رائد', example: 'A seminal work.', exampleAr: 'عمل رائد.' },
    { english: 'groundbreaking', arabic: 'مبتكر', example: 'Groundbreaking research.', exampleAr: 'بحث مبتكر.' },
    { english: 'comprehensive', arabic: 'شامل', example: 'A comprehensive review.', exampleAr: 'مراجعة شاملة.' },
    { english: 'exhaustive', arabic: 'مستفيض', example: 'An exhaustive study.', exampleAr: 'دراسة مستفيضة.' },
    { english: 'rigorous', arabic: 'صارم', example: 'Rigorous methodology.', exampleAr: 'منهجية صارمة.' },
    { english: 'robust', arabic: 'متين', example: 'Robust findings.', exampleAr: 'نتائج متينة.' }
  ],
  sentences: [
    { english: 'Only cite peer-reviewed sources.', arabic: 'استشهد فقط بمصادر محكّمة.' },
    { english: 'This was a seminal contribution to the field.', arabic: 'كان هذا إسهاماً رائداً في المجال.' },
    { english: 'The methodology must be rigorous.', arabic: 'المنهجية يجب أن تكون صارمة.' },
    { english: 'Their research produced robust results.', arabic: 'بحثهم أنتج نتائج متينة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "seminal"؟', data: { options: ['رائد', 'عادي', 'ضعيف', 'قديم'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Publish in _____ journals. (محكّمة)', data: { answer: 'peer-reviewed' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'comprehensive', arabic: 'شامل' }, { english: 'rigorous', arabic: 'صارم' }, { english: 'robust', arabic: 'متين' }] } },
    { type: 'mcq', promptAr: 'ما معنى "exhaustive"؟', data: { options: ['مستفيض', 'متعب', 'قصير', 'بسيط'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "groundbreaking"؟', data: { options: ['مبتكر', 'تقليدي', 'عادي', 'قديم'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'A _____ study. (مستفيضة)', data: { answer: 'exhaustive' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المنهجية يجب أن تكون صارمة.', data: { answer: 'The methodology must be rigorous.' }, points: 15 }
  ]
};

export const c1Unit2Lessons: Record<string, LessonContent> = {
  'C1-u02-l01': C1_U2_L1,
  'C1-u02-l02': C1_U2_L2,
  'C1-u02-l03': C1_U2_L3,
  'C1-u02-l04': C1_U2_L4,
  'C1-u02-l05': C1_U2_L5,
};

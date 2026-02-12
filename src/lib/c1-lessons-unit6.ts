import { LessonContent } from './a1-lessons';

// Unit 6: Philosophy & Abstract Thinking - الفلسفة والتفكير المجرد
export const C1_U6_L1: LessonContent = {
  lessonId: 'C1-u06-l01',
  passingScore: 75,
  vocab: [
    { english: 'philosophy', arabic: 'فلسفة', example: 'Study philosophy.', exampleAr: 'ادرس الفلسفة.' },
    { english: 'metaphysics', arabic: 'ميتافيزيقا', example: 'Metaphysical questions.', exampleAr: 'أسئلة ميتافيزيقية.' },
    { english: 'epistemology', arabic: 'نظرية المعرفة', example: 'Epistemology studies knowledge.', exampleAr: 'نظرية المعرفة تدرس المعرفة.' },
    { english: 'ethics', arabic: 'أخلاق', example: 'Ethical dilemmas.', exampleAr: 'معضلات أخلاقية.' },
    { english: 'ontology', arabic: 'علم الوجود', example: 'Ontological arguments.', exampleAr: 'حجج وجودية.' },
    { english: 'existentialism', arabic: 'وجودية', example: 'Existentialist thought.', exampleAr: 'الفكر الوجودي.' },
    { english: 'rationalism', arabic: 'عقلانية', example: 'Rationalist approach.', exampleAr: 'منهج عقلاني.' },
    { english: 'empiricism', arabic: 'تجريبية', example: 'Empiricism values experience.', exampleAr: 'التجريبية تقدر التجربة.' }
  ],
  sentences: [
    { english: 'Philosophy asks fundamental questions.', arabic: 'الفلسفة تطرح أسئلة جوهرية.' },
    { english: 'Epistemology examines how we know things.', arabic: 'نظرية المعرفة تفحص كيف نعرف الأشياء.' },
    { english: 'Ethics guides moral decisions.', arabic: 'الأخلاق توجه القرارات الأخلاقية.' },
    { english: 'Existentialism focuses on individual existence.', arabic: 'الوجودية تركز على الوجود الفردي.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "epistemology"؟', data: { options: ['نظرية المعرفة', 'أخلاق', 'وجودية', 'ميتافيزيقا'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ dilemmas. (أخلاقية)', data: { answer: 'Ethical' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'metaphysics', arabic: 'ميتافيزيقا' }, { english: 'ontology', arabic: 'علم الوجود' }, { english: 'rationalism', arabic: 'عقلانية' }] } },
    { type: 'mcq', promptAr: 'ما يقابل "rationalism"؟', data: { options: ['empiricism', 'ethics', 'ontology', 'metaphysics'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "existentialism"؟', data: { options: ['وجودية', 'عقلانية', 'تجريبية', 'أخلاق'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ values experience. (التجريبية)', data: { answer: 'Empiricism' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الفلسفة تطرح أسئلة جوهرية.', data: { answer: 'Philosophy asks fundamental questions.' }, points: 15 }
  ]
};

export const C1_U6_L2: LessonContent = {
  lessonId: 'C1-u06-l02',
  passingScore: 75,
  vocab: [
    { english: 'consciousness', arabic: 'وعي', example: 'The nature of consciousness.', exampleAr: 'طبيعة الوعي.' },
    { english: 'perception', arabic: 'إدراك', example: 'Perception varies.', exampleAr: 'الإدراك يختلف.' },
    { english: 'cognition', arabic: 'إدراك معرفي', example: 'Cognitive processes.', exampleAr: 'عمليات إدراكية.' },
    { english: 'subjective', arabic: 'ذاتي', example: 'Subjective experience.', exampleAr: 'تجربة ذاتية.' },
    { english: 'objective', arabic: 'موضوعي', example: 'Objective reality.', exampleAr: 'واقع موضوعي.' },
    { english: 'introspection', arabic: 'استبطان', example: 'Through introspection.', exampleAr: 'من خلال الاستبطان.' },
    { english: 'phenomenon', arabic: 'ظاهرة', example: 'A natural phenomenon.', exampleAr: 'ظاهرة طبيعية.' },
    { english: 'paradox', arabic: 'مفارقة', example: 'A logical paradox.', exampleAr: 'مفارقة منطقية.' }
  ],
  sentences: [
    { english: 'Consciousness remains a mystery.', arabic: 'الوعي يبقى لغزاً.' },
    { english: 'Perception shapes our reality.', arabic: 'الإدراك يشكل واقعنا.' },
    { english: 'Subjective experience is hard to measure.', arabic: 'التجربة الذاتية صعبة القياس.' },
    { english: 'This creates a paradox.', arabic: 'هذا يخلق مفارقة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "subjective"؟', data: { options: ['objective', 'cognitive', 'introspective', 'perceptive'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The nature of _____. (الوعي)', data: { answer: 'consciousness' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'perception', arabic: 'إدراك' }, { english: 'cognition', arabic: 'إدراك معرفي' }, { english: 'paradox', arabic: 'مفارقة' }] } },
    { type: 'mcq', promptAr: 'ما معنى "introspection"؟', data: { options: ['استبطان', 'ملاحظة', 'تجربة', 'اختبار'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "phenomenon"؟', data: { options: ['ظاهرة', 'وعي', 'إدراك', 'تجربة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ experience. (ذاتية)', data: { answer: 'Subjective' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الوعي يبقى لغزاً.', data: { answer: 'Consciousness remains a mystery.' }, points: 15 }
  ]
};

export const C1_U6_L3: LessonContent = {
  lessonId: 'C1-u06-l03',
  passingScore: 75,
  vocab: [
    { english: 'abstract', arabic: 'مجرد', example: 'Abstract concepts.', exampleAr: 'مفاهيم مجردة.' },
    { english: 'concrete', arabic: 'ملموس', example: 'Concrete examples.', exampleAr: 'أمثلة ملموسة.' },
    { english: 'theoretical', arabic: 'نظري', example: 'Theoretical framework.', exampleAr: 'إطار نظري.' },
    { english: 'practical', arabic: 'عملي', example: 'Practical applications.', exampleAr: 'تطبيقات عملية.' },
    { english: 'conceptual', arabic: 'مفاهيمي', example: 'Conceptual understanding.', exampleAr: 'فهم مفاهيمي.' },
    { english: 'hypothetical', arabic: 'افتراضي', example: 'Hypothetical scenario.', exampleAr: 'سيناريو افتراضي.' },
    { english: 'tangible', arabic: 'ملموس', example: 'Tangible results.', exampleAr: 'نتائج ملموسة.' },
    { english: 'intangible', arabic: 'غير ملموس', example: 'Intangible benefits.', exampleAr: 'فوائد غير ملموسة.' }
  ],
  sentences: [
    { english: 'Abstract thinking is essential for problem-solving.', arabic: 'التفكير المجرد ضروري لحل المشكلات.' },
    { english: 'Move from theoretical to practical.', arabic: 'انتقل من النظري إلى العملي.' },
    { english: 'Consider this hypothetical scenario.', arabic: 'فكر في هذا السيناريو الافتراضي.' },
    { english: 'Some benefits are intangible.', arabic: 'بعض الفوائد غير ملموسة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "abstract"؟', data: { options: ['concrete', 'theoretical', 'conceptual', 'hypothetical'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ concepts. (مجردة)', data: { answer: 'Abstract' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'theoretical', arabic: 'نظري' }, { english: 'practical', arabic: 'عملي' }, { english: 'hypothetical', arabic: 'افتراضي' }] } },
    { type: 'mcq', promptAr: 'ما عكس "tangible"؟', data: { options: ['intangible', 'concrete', 'practical', 'theoretical'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "conceptual"؟', data: { options: ['مفاهيمي', 'عملي', 'ملموس', 'واضح'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ results. (ملموسة)', data: { answer: 'Tangible' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: التفكير المجرد ضروري لحل المشكلات.', data: { answer: 'Abstract thinking is essential for problem-solving.' }, points: 15 }
  ]
};

export const C1_U6_L4: LessonContent = {
  lessonId: 'C1-u06-l04',
  passingScore: 75,
  vocab: [
    { english: 'logic', arabic: 'منطق', example: 'Apply logic.', exampleAr: 'طبّق المنطق.' },
    { english: 'fallacy', arabic: 'مغالطة', example: 'Logical fallacy.', exampleAr: 'مغالطة منطقية.' },
    { english: 'syllogism', arabic: 'قياس منطقي', example: 'A valid syllogism.', exampleAr: 'قياس منطقي صحيح.' },
    { english: 'deduction', arabic: 'استنباط', example: 'Deductive reasoning.', exampleAr: 'تفكير استنباطي.' },
    { english: 'induction', arabic: 'استقراء', example: 'Inductive reasoning.', exampleAr: 'تفكير استقرائي.' },
    { english: 'premise', arabic: 'مقدمة', example: 'The basic premise.', exampleAr: 'المقدمة الأساسية.' },
    { english: 'inference', arabic: 'استدلال', example: 'Draw an inference.', exampleAr: 'توصل لاستدلال.' },
    { english: 'validity', arabic: 'صحة', example: 'Test the validity.', exampleAr: 'اختبر الصحة.' }
  ],
  sentences: [
    { english: 'Logic helps us reason clearly.', arabic: 'المنطق يساعدنا على التفكير بوضوح.' },
    { english: 'Avoid logical fallacies in your argument.', arabic: 'تجنب المغالطات المنطقية في حجتك.' },
    { english: 'Deduction moves from general to specific.', arabic: 'الاستنباط ينتقل من العام إلى الخاص.' },
    { english: 'Test the validity of the conclusion.', arabic: 'اختبر صحة الاستنتاج.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "deduction"؟', data: { options: ['induction', 'inference', 'premise', 'fallacy'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Logical _____. (مغالطة)', data: { answer: 'fallacy' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'syllogism', arabic: 'قياس منطقي' }, { english: 'premise', arabic: 'مقدمة' }, { english: 'inference', arabic: 'استدلال' }] } },
    { type: 'mcq', promptAr: 'ما معنى "validity"؟', data: { options: ['صحة', 'خطأ', 'شك', 'سؤال'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "deduction"؟', data: { options: ['استنباط', 'استقراء', 'استدلال', 'افتراض'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Draw an _____. (استدلال)', data: { answer: 'inference' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المنطق يساعدنا على التفكير بوضوح.', data: { answer: 'Logic helps us reason clearly.' }, points: 15 }
  ]
};

export const C1_U6_L5: LessonContent = {
  lessonId: 'C1-u06-l05',
  passingScore: 75,
  vocab: [
    { english: 'dilemma', arabic: 'معضلة', example: 'An ethical dilemma.', exampleAr: 'معضلة أخلاقية.' },
    { english: 'morality', arabic: 'أخلاقية', example: 'Questions of morality.', exampleAr: 'أسئلة الأخلاقية.' },
    { english: 'virtue', arabic: 'فضيلة', example: 'Virtue ethics.', exampleAr: 'أخلاق الفضيلة.' },
    { english: 'utilitarianism', arabic: 'نفعية', example: 'Utilitarian approach.', exampleAr: 'منهج نفعي.' },
    { english: 'deontology', arabic: 'أخلاق الواجب', example: 'Deontological ethics.', exampleAr: 'أخلاق الواجب.' },
    { english: 'autonomy', arabic: 'استقلالية', example: 'Respect autonomy.', exampleAr: 'احترم الاستقلالية.' },
    { english: 'justice', arabic: 'عدالة', example: 'Pursue justice.', exampleAr: 'اسعَ للعدالة.' },
    { english: 'integrity', arabic: 'نزاهة', example: 'Act with integrity.', exampleAr: 'تصرف بنزاهة.' }
  ],
  sentences: [
    { english: 'This presents an ethical dilemma.', arabic: 'هذا يمثل معضلة أخلاقية.' },
    { english: 'Utilitarianism focuses on outcomes.', arabic: 'النفعية تركز على النتائج.' },
    { english: 'Autonomy is a core value.', arabic: 'الاستقلالية قيمة أساسية.' },
    { english: 'Justice requires fairness.', arabic: 'العدالة تتطلب الإنصاف.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "utilitarianism"؟', data: { options: ['نفعية', 'فضيلة', 'واجب', 'عدالة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'An ethical _____. (معضلة)', data: { answer: 'dilemma' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'virtue', arabic: 'فضيلة' }, { english: 'autonomy', arabic: 'استقلالية' }, { english: 'integrity', arabic: 'نزاهة' }] } },
    { type: 'mcq', promptAr: 'ما معنى "deontology"؟', data: { options: ['أخلاق الواجب', 'نفعية', 'فضيلة', 'عدالة'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "morality"؟', data: { options: ['أخلاقية', 'قانون', 'عادة', 'تقليد'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Pursue _____. (عدالة)', data: { answer: 'justice' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذا يمثل معضلة أخلاقية.', data: { answer: 'This presents an ethical dilemma.' }, points: 15 }
  ]
};

export const c1Unit6Lessons: Record<string, LessonContent> = {
  'C1-u06-l01': C1_U6_L1,
  'C1-u06-l02': C1_U6_L2,
  'C1-u06-l03': C1_U6_L3,
  'C1-u06-l04': C1_U6_L4,
  'C1-u06-l05': C1_U6_L5,
};

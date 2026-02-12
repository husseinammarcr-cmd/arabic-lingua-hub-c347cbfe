import { LessonContent } from './a1-lessons';

// Unit 5: Science & Technology - العلوم والتكنولوجيا
export const C1_U5_L1: LessonContent = {
  lessonId: 'C1-u05-l01',
  passingScore: 75,
  vocab: [
    { english: 'innovation', arabic: 'ابتكار', example: 'Drive innovation.', exampleAr: 'ادفع الابتكار.' },
    { english: 'breakthrough', arabic: 'اختراق', example: 'A scientific breakthrough.', exampleAr: 'اختراق علمي.' },
    { english: 'cutting-edge', arabic: 'متطور', example: 'Cutting-edge technology.', exampleAr: 'تكنولوجيا متطورة.' },
    { english: 'obsolete', arabic: 'متقادم', example: 'Technology becomes obsolete.', exampleAr: 'التكنولوجيا تصبح متقادمة.' },
    { english: 'prototype', arabic: 'نموذج أولي', example: 'Build a prototype.', exampleAr: 'ابنِ نموذجاً أولياً.' },
    { english: 'patent', arabic: 'براءة اختراع', example: 'File a patent.', exampleAr: 'قدّم براءة اختراع.' },
    { english: 'scalable', arabic: 'قابل للتوسع', example: 'A scalable solution.', exampleAr: 'حل قابل للتوسع.' },
    { english: 'disruptive', arabic: 'مزعزع', example: 'Disruptive innovation.', exampleAr: 'ابتكار مزعزع.' }
  ],
  sentences: [
    { english: 'This breakthrough will change medicine.', arabic: 'هذا الاختراق سيغير الطب.' },
    { english: 'They use cutting-edge research methods.', arabic: 'يستخدمون أساليب بحث متطورة.' },
    { english: 'Old technology becomes obsolete quickly.', arabic: 'التكنولوجيا القديمة تصبح متقادمة بسرعة.' },
    { english: 'Disruptive technologies transform industries.', arabic: 'التقنيات المزعزعة تحول الصناعات.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "breakthrough"؟', data: { options: ['اختراق', 'فشل', 'توقف', 'تراجع'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ technology. (متطورة)', data: { answer: 'Cutting-edge' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'innovation', arabic: 'ابتكار' }, { english: 'prototype', arabic: 'نموذج أولي' }, { english: 'patent', arabic: 'براءة اختراع' }] } },
    { type: 'mcq', promptAr: 'ما عكس "cutting-edge"؟', data: { options: ['obsolete', 'innovative', 'advanced', 'modern'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "disruptive"؟', data: { options: ['مزعزع', 'هادئ', 'تقليدي', 'بطيء'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'A _____ solution. (قابل للتوسع)', data: { answer: 'scalable' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذا الاختراق سيغير الطب.', data: { answer: 'This breakthrough will change medicine.' }, points: 15 }
  ]
};

export const C1_U5_L2: LessonContent = {
  lessonId: 'C1-u05-l02',
  passingScore: 75,
  vocab: [
    { english: 'artificial intelligence', arabic: 'ذكاء اصطناعي', example: 'AI is advancing rapidly.', exampleAr: 'الذكاء الاصطناعي يتقدم بسرعة.' },
    { english: 'machine learning', arabic: 'تعلم الآلة', example: 'Machine learning algorithms.', exampleAr: 'خوارزميات تعلم الآلة.' },
    { english: 'neural network', arabic: 'شبكة عصبية', example: 'Train a neural network.', exampleAr: 'درّب شبكة عصبية.' },
    { english: 'automation', arabic: 'أتمتة', example: 'Automation replaces jobs.', exampleAr: 'الأتمتة تستبدل الوظائف.' },
    { english: 'algorithm', arabic: 'خوارزمية', example: 'Develop an algorithm.', exampleAr: 'طوّر خوارزمية.' },
    { english: 'data mining', arabic: 'تنقيب البيانات', example: 'Data mining techniques.', exampleAr: 'تقنيات تنقيب البيانات.' },
    { english: 'cloud computing', arabic: 'الحوسبة السحابية', example: 'Move to cloud computing.', exampleAr: 'انتقل للحوسبة السحابية.' },
    { english: 'cybersecurity', arabic: 'أمن سيبراني', example: 'Improve cybersecurity.', exampleAr: 'حسّن الأمن السيبراني.' }
  ],
  sentences: [
    { english: 'AI will transform many industries.', arabic: 'الذكاء الاصطناعي سيحول صناعات كثيرة.' },
    { english: 'Machine learning requires large datasets.', arabic: 'تعلم الآلة يتطلب مجموعات بيانات كبيرة.' },
    { english: 'Automation increases efficiency.', arabic: 'الأتمتة تزيد الكفاءة.' },
    { english: 'Cybersecurity threats are growing.', arabic: 'تهديدات الأمن السيبراني تتزايد.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "automation"؟', data: { options: ['أتمتة', 'يدوي', 'بطيء', 'قديم'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ intelligence. (اصطناعي)', data: { answer: 'Artificial' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'algorithm', arabic: 'خوارزمية' }, { english: 'cloud computing', arabic: 'الحوسبة السحابية' }, { english: 'neural network', arabic: 'شبكة عصبية' }] } },
    { type: 'mcq', promptAr: 'ما معنى "data mining"؟', data: { options: ['تنقيب البيانات', 'حذف البيانات', 'تخزين البيانات', 'إرسال البيانات'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "cybersecurity"؟', data: { options: ['أمن سيبراني', 'إنترنت', 'برمجة', 'شبكة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ learning algorithms. (تعلم الآلة)', data: { answer: 'Machine' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الذكاء الاصطناعي سيحول صناعات كثيرة.', data: { answer: 'AI will transform many industries.' }, points: 15 }
  ]
};

export const C1_U5_L3: LessonContent = {
  lessonId: 'C1-u05-l03',
  passingScore: 75,
  vocab: [
    { english: 'genome', arabic: 'جينوم', example: 'Map the human genome.', exampleAr: 'ارسم خريطة الجينوم البشري.' },
    { english: 'gene therapy', arabic: 'علاج جيني', example: 'Gene therapy advances.', exampleAr: 'تقدم العلاج الجيني.' },
    { english: 'stem cell', arabic: 'خلية جذعية', example: 'Stem cell research.', exampleAr: 'أبحاث الخلايا الجذعية.' },
    { english: 'clinical trial', arabic: 'تجربة سريرية', example: 'Start clinical trials.', exampleAr: 'ابدأ التجارب السريرية.' },
    { english: 'vaccine', arabic: 'لقاح', example: 'Develop a vaccine.', exampleAr: 'طوّر لقاحاً.' },
    { english: 'antibody', arabic: 'جسم مضاد', example: 'Antibody response.', exampleAr: 'استجابة الأجسام المضادة.' },
    { english: 'mutation', arabic: 'طفرة', example: 'Genetic mutation.', exampleAr: 'طفرة جينية.' },
    { english: 'bioethics', arabic: 'أخلاقيات حيوية', example: 'Bioethics debate.', exampleAr: 'نقاش الأخلاقيات الحيوية.' }
  ],
  sentences: [
    { english: 'Gene therapy offers new treatment options.', arabic: 'العلاج الجيني يقدم خيارات علاج جديدة.' },
    { english: 'Clinical trials test new treatments.', arabic: 'التجارب السريرية تختبر علاجات جديدة.' },
    { english: 'Vaccines prevent diseases.', arabic: 'اللقاحات تمنع الأمراض.' },
    { english: 'Bioethics addresses moral questions.', arabic: 'الأخلاقيات الحيوية تعالج الأسئلة الأخلاقية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "mutation"؟', data: { options: ['طفرة', 'علاج', 'لقاح', 'خلية'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ cell research. (جذعية)', data: { answer: 'Stem' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'genome', arabic: 'جينوم' }, { english: 'vaccine', arabic: 'لقاح' }, { english: 'antibody', arabic: 'جسم مضاد' }] } },
    { type: 'mcq', promptAr: 'ما معنى "clinical trial"؟', data: { options: ['تجربة سريرية', 'مستشفى', 'طبيب', 'دواء'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "bioethics"؟', data: { options: ['أخلاقيات حيوية', 'علم أحياء', 'طب', 'كيمياء'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ therapy advances. (جيني)', data: { answer: 'Gene' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: التجارب السريرية تختبر علاجات جديدة.', data: { answer: 'Clinical trials test new treatments.' }, points: 15 }
  ]
};

export const C1_U5_L4: LessonContent = {
  lessonId: 'C1-u05-l04',
  passingScore: 75,
  vocab: [
    { english: 'renewable energy', arabic: 'طاقة متجددة', example: 'Invest in renewable energy.', exampleAr: 'استثمر في الطاقة المتجددة.' },
    { english: 'carbon footprint', arabic: 'البصمة الكربونية', example: 'Reduce your carbon footprint.', exampleAr: 'قلل بصمتك الكربونية.' },
    { english: 'sustainability', arabic: 'استدامة', example: 'Focus on sustainability.', exampleAr: 'ركز على الاستدامة.' },
    { english: 'emissions', arabic: 'انبعاثات', example: 'Cut emissions.', exampleAr: 'قلل الانبعاثات.' },
    { english: 'biodegradable', arabic: 'قابل للتحلل', example: 'Biodegradable materials.', exampleAr: 'مواد قابلة للتحلل.' },
    { english: 'conservation', arabic: 'حفظ/صيانة', example: 'Wildlife conservation.', exampleAr: 'صيانة الحياة البرية.' },
    { english: 'ecosystem', arabic: 'نظام بيئي', example: 'Protect the ecosystem.', exampleAr: 'احمِ النظام البيئي.' },
    { english: 'deforestation', arabic: 'إزالة الغابات', example: 'Stop deforestation.', exampleAr: 'أوقف إزالة الغابات.' }
  ],
  sentences: [
    { english: 'Renewable energy is the future.', arabic: 'الطاقة المتجددة هي المستقبل.' },
    { english: 'We must reduce our carbon footprint.', arabic: 'يجب أن نقلل بصمتنا الكربونية.' },
    { english: 'Sustainability benefits everyone.', arabic: 'الاستدامة تفيد الجميع.' },
    { english: 'Deforestation destroys ecosystems.', arabic: 'إزالة الغابات تدمر الأنظمة البيئية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "biodegradable"؟', data: { options: ['قابل للتحلل', 'صلب', 'دائم', 'سام'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Reduce your _____ footprint. (كربونية)', data: { answer: 'carbon' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'emissions', arabic: 'انبعاثات' }, { english: 'ecosystem', arabic: 'نظام بيئي' }, { english: 'conservation', arabic: 'حفظ' }] } },
    { type: 'mcq', promptAr: 'ما معنى "deforestation"؟', data: { options: ['إزالة الغابات', 'زراعة الغابات', 'حماية الغابات', 'دراسة الغابات'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "sustainability"؟', data: { options: ['استدامة', 'تلوث', 'استهلاك', 'هدر'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ energy is the future. (متجددة)', data: { answer: 'Renewable' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: يجب أن نقلل بصمتنا الكربونية.', data: { answer: 'We must reduce our carbon footprint.' }, points: 15 }
  ]
};

export const C1_U5_L5: LessonContent = {
  lessonId: 'C1-u05-l05',
  passingScore: 75,
  vocab: [
    { english: 'quantum', arabic: 'كمي', example: 'Quantum computing.', exampleAr: 'الحوسبة الكمية.' },
    { english: 'nanotechnology', arabic: 'تقنية النانو', example: 'Nanotechnology applications.', exampleAr: 'تطبيقات تقنية النانو.' },
    { english: 'aerospace', arabic: 'فضاء جوي', example: 'Aerospace engineering.', exampleAr: 'هندسة الفضاء الجوي.' },
    { english: 'robotics', arabic: 'روبوتات', example: 'Advances in robotics.', exampleAr: 'تطورات في الروبوتات.' },
    { english: 'simulation', arabic: 'محاكاة', example: 'Run a simulation.', exampleAr: 'شغّل محاكاة.' },
    { english: 'hypothesis', arabic: 'فرضية', example: 'Test the hypothesis.', exampleAr: 'اختبر الفرضية.' },
    { english: 'empirical', arabic: 'تجريبي', example: 'Empirical evidence.', exampleAr: 'دليل تجريبي.' },
    { english: 'peer review', arabic: 'مراجعة الأقران', example: 'Submit for peer review.', exampleAr: 'قدّم لمراجعة الأقران.' }
  ],
  sentences: [
    { english: 'Quantum computing will revolutionize encryption.', arabic: 'الحوسبة الكمية ستُحدث ثورة في التشفير.' },
    { english: 'Nanotechnology has medical applications.', arabic: 'لتقنية النانو تطبيقات طبية.' },
    { english: 'Robotics is transforming manufacturing.', arabic: 'الروبوتات تحول الصناعة.' },
    { english: 'All research undergoes peer review.', arabic: 'جميع الأبحاث تخضع لمراجعة الأقران.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "quantum"؟', data: { options: ['كمي', 'كبير', 'صغير', 'عادي'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ engineering. (فضاء جوي)', data: { answer: 'Aerospace' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'robotics', arabic: 'روبوتات' }, { english: 'simulation', arabic: 'محاكاة' }, { english: 'empirical', arabic: 'تجريبي' }] } },
    { type: 'mcq', promptAr: 'ما معنى "nanotechnology"؟', data: { options: ['تقنية النانو', 'تقنية كبيرة', 'تقنية قديمة', 'تقنية بسيطة'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "peer review"؟', data: { options: ['مراجعة الأقران', 'نشر', 'كتابة', 'بحث'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Test the _____. (فرضية)', data: { answer: 'hypothesis' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الحوسبة الكمية ستُحدث ثورة في التشفير.', data: { answer: 'Quantum computing will revolutionize encryption.' }, points: 15 }
  ]
};

export const c1Unit5Lessons: Record<string, LessonContent> = {
  'C1-u05-l01': C1_U5_L1,
  'C1-u05-l02': C1_U5_L2,
  'C1-u05-l03': C1_U5_L3,
  'C1-u05-l04': C1_U5_L4,
  'C1-u05-l05': C1_U5_L5,
};

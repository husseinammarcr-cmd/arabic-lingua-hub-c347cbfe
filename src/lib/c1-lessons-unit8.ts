import { LessonContent } from './a1-lessons';

// Unit 8: Advanced Collocations - تلازمات متقدمة
export const C1_U8_L1: LessonContent = {
  lessonId: 'C1-u08-l01',
  passingScore: 75,
  vocab: [
    { english: 'raise awareness', arabic: 'ينشر الوعي', example: 'Raise awareness about the issue.', exampleAr: 'انشر الوعي حول المشكلة.' },
    { english: 'reach a consensus', arabic: 'يتوصل لإجماع', example: 'We reached a consensus.', exampleAr: 'توصلنا لإجماع.' },
    { english: 'draw conclusions', arabic: 'يستخلص استنتاجات', example: 'Draw your own conclusions.', exampleAr: 'استخلص استنتاجاتك.' },
    { english: 'face consequences', arabic: 'يواجه عواقب', example: 'Face the consequences.', exampleAr: 'واجه العواقب.' },
    { english: 'pose a threat', arabic: 'يشكل تهديداً', example: 'This poses a threat.', exampleAr: 'هذا يشكل تهديداً.' },
    { english: 'address concerns', arabic: 'يعالج المخاوف', example: 'Address their concerns.', exampleAr: 'عالج مخاوفهم.' },
    { english: 'fulfill obligations', arabic: 'يفي بالالتزامات', example: 'Fulfill your obligations.', exampleAr: 'أوفِ بالتزاماتك.' },
    { english: 'exercise caution', arabic: 'يتوخى الحذر', example: 'Exercise caution.', exampleAr: 'توخَّ الحذر.' }
  ],
  sentences: [
    { english: 'The campaign aims to raise awareness.', arabic: 'الحملة تهدف لنشر الوعي.' },
    { english: 'After long debate, they reached a consensus.', arabic: 'بعد نقاش طويل، توصلوا لإجماع.' },
    { english: 'Climate change poses a serious threat.', arabic: 'تغير المناخ يشكل تهديداً خطيراً.' },
    { english: 'We must address these concerns promptly.', arabic: 'يجب أن نعالج هذه المخاوف فوراً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'أي تلازم صحيح؟', data: { options: ['raise awareness', 'make awareness', 'do awareness', 'take awareness'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ a consensus. (توصل لـ)', data: { answer: 'Reach' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'draw', arabic: 'conclusions' }, { english: 'face', arabic: 'consequences' }, { english: 'pose', arabic: 'a threat' }] } },
    { type: 'mcq', promptAr: 'أي تلازم صحيح مع "caution"؟', data: { options: ['exercise caution', 'make caution', 'do caution', 'take caution'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'أي تلازم صحيح؟', data: { options: ['fulfill obligations', 'make obligations', 'do obligations', 'complete obligations'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ their concerns. (عالج)', data: { answer: 'Address' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: تغير المناخ يشكل تهديداً خطيراً.', data: { answer: 'Climate change poses a serious threat.' }, points: 15 }
  ]
};

export const C1_U8_L2: LessonContent = {
  lessonId: 'C1-u08-l02',
  passingScore: 75,
  vocab: [
    { english: 'bear in mind', arabic: 'يضع في الاعتبار', example: 'Bear in mind the risks.', exampleAr: 'ضع المخاطر في الاعتبار.' },
    { english: 'come to terms with', arabic: 'يتقبل', example: 'Come to terms with reality.', exampleAr: 'تقبّل الواقع.' },
    { english: 'take into account', arabic: 'يأخذ بعين الاعتبار', example: 'Take this into account.', exampleAr: 'خذ هذا بعين الاعتبار.' },
    { english: 'give rise to', arabic: 'يؤدي إلى', example: 'This gave rise to problems.', exampleAr: 'هذا أدى إلى مشاكل.' },
    { english: 'shed light on', arabic: 'يسلط الضوء على', example: 'Shed light on the issue.', exampleAr: 'سلط الضوء على المشكلة.' },
    { english: 'pave the way for', arabic: 'يمهد الطريق لـ', example: 'This paves the way for change.', exampleAr: 'هذا يمهد الطريق للتغيير.' },
    { english: 'fall short of', arabic: 'يقصر عن', example: 'It fell short of expectations.', exampleAr: 'قصر عن التوقعات.' },
    { english: 'stand the test of time', arabic: 'يصمد أمام الزمن', example: 'This will stand the test of time.', exampleAr: 'هذا سيصمد أمام الزمن.' }
  ],
  sentences: [
    { english: 'Bear in mind that resources are limited.', arabic: 'ضع في اعتبارك أن الموارد محدودة.' },
    { english: 'The research sheds light on the problem.', arabic: 'البحث يسلط الضوء على المشكلة.' },
    { english: 'This discovery paves the way for new treatments.', arabic: 'هذا الاكتشاف يمهد الطريق لعلاجات جديدة.' },
    { english: 'Great works stand the test of time.', arabic: 'الأعمال العظيمة تصمد أمام الزمن.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'أي تعبير يعني "يتقبل"؟', data: { options: ['come to terms with', 'bear in mind', 'take into account', 'give rise to'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'This _____ the way for change. (يمهد)', data: { answer: 'paves' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'shed light on', arabic: 'يسلط الضوء' }, { english: 'fall short of', arabic: 'يقصر عن' }, { english: 'give rise to', arabic: 'يؤدي إلى' }] } },
    { type: 'mcq', promptAr: 'ما معنى "fall short of"؟', data: { options: ['يقصر عن', 'يتجاوز', 'يصل إلى', 'يحقق'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "bear in mind"؟', data: { options: ['يضع في الاعتبار', 'يتذكر', 'ينسى', 'يفكر'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'This will _____ the test of time. (يصمد)', data: { answer: 'stand' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: البحث يسلط الضوء على المشكلة.', data: { answer: 'The research sheds light on the problem.' }, points: 15 }
  ]
};

export const C1_U8_L3: LessonContent = {
  lessonId: 'C1-u08-l03',
  passingScore: 75,
  vocab: [
    { english: 'wreak havoc', arabic: 'يعيث فساداً', example: 'The storm wreaked havoc.', exampleAr: 'العاصفة عاثت فساداً.' },
    { english: 'turn a blind eye', arabic: 'يغض الطرف', example: 'Don\'t turn a blind eye.', exampleAr: 'لا تغض الطرف.' },
    { english: 'take the plunge', arabic: 'يخاطر', example: 'Take the plunge.', exampleAr: 'خاطر.' },
    { english: 'weather the storm', arabic: 'يصمد أمام الصعوبات', example: 'They weathered the storm.', exampleAr: 'صمدوا أمام الصعوبات.' },
    { english: 'burn bridges', arabic: 'يقطع العلاقات', example: 'Don\'t burn bridges.', exampleAr: 'لا تقطع العلاقات.' },
    { english: 'cut corners', arabic: 'يختصر/يوفر', example: 'Don\'t cut corners.', exampleAr: 'لا تختصر.' },
    { english: 'pull strings', arabic: 'يستخدم نفوذه', example: 'He pulled strings.', exampleAr: 'استخدم نفوذه.' },
    { english: 'break new ground', arabic: 'يبتكر', example: 'Breaking new ground.', exampleAr: 'يبتكر شيئاً جديداً.' }
  ],
  sentences: [
    { english: 'The pandemic wreaked havoc on the economy.', arabic: 'الوباء عاث فساداً في الاقتصاد.' },
    { english: 'We can\'t turn a blind eye to injustice.', arabic: 'لا يمكننا غض الطرف عن الظلم.' },
    { english: 'The company weathered the financial storm.', arabic: 'الشركة صمدت أمام العاصفة المالية.' },
    { english: 'This research breaks new ground.', arabic: 'هذا البحث يبتكر شيئاً جديداً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "wreak havoc"؟', data: { options: ['يعيث فساداً', 'يصلح', 'يبني', 'يساعد'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Don\'t _____ bridges. (تقطع)', data: { answer: 'burn' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'cut corners', arabic: 'يختصر' }, { english: 'pull strings', arabic: 'يستخدم نفوذه' }, { english: 'take the plunge', arabic: 'يخاطر' }] } },
    { type: 'mcq', promptAr: 'ما معنى "weather the storm"؟', data: { options: ['يصمد أمام الصعوبات', 'يهرب', 'يستسلم', 'ينتظر'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "break new ground"؟', data: { options: ['يبتكر', 'يحفر', 'يدمر', 'يبني'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Don\'t _____ a blind eye. (تغض)', data: { answer: 'turn' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الوباء عاث فساداً في الاقتصاد.', data: { answer: 'The pandemic wreaked havoc on the economy.' }, points: 15 }
  ]
};

export const C1_U8_L4: LessonContent = {
  lessonId: 'C1-u08-l04',
  passingScore: 75,
  vocab: [
    { english: 'stark contrast', arabic: 'تباين صارخ', example: 'In stark contrast.', exampleAr: 'في تباين صارخ.' },
    { english: 'far-reaching consequences', arabic: 'عواقب بعيدة المدى', example: 'Far-reaching consequences.', exampleAr: 'عواقب بعيدة المدى.' },
    { english: 'heated debate', arabic: 'نقاش حاد', example: 'A heated debate.', exampleAr: 'نقاش حاد.' },
    { english: 'growing concern', arabic: 'قلق متزايد', example: 'Growing concern over...', exampleAr: 'قلق متزايد حول...' },
    { english: 'widespread criticism', arabic: 'انتقاد واسع', example: 'Widespread criticism.', exampleAr: 'انتقاد واسع.' },
    { english: 'overwhelming majority', arabic: 'أغلبية ساحقة', example: 'Overwhelming majority.', exampleAr: 'أغلبية ساحقة.' },
    { english: 'profound impact', arabic: 'تأثير عميق', example: 'A profound impact.', exampleAr: 'تأثير عميق.' },
    { english: 'fierce competition', arabic: 'منافسة شرسة', example: 'Fierce competition.', exampleAr: 'منافسة شرسة.' }
  ],
  sentences: [
    { english: 'The results stand in stark contrast to predictions.', arabic: 'النتائج في تباين صارخ مع التوقعات.' },
    { english: 'This decision will have far-reaching consequences.', arabic: 'هذا القرار سيكون له عواقب بعيدة المدى.' },
    { english: 'There is growing concern about climate change.', arabic: 'هناك قلق متزايد حول تغير المناخ.' },
    { english: 'The policy has had a profound impact.', arabic: 'السياسة كان لها تأثير عميق.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'أي تلازم صحيح مع "contrast"؟', data: { options: ['stark contrast', 'strong contrast', 'big contrast', 'heavy contrast'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'A _____ debate. (حاد)', data: { answer: 'heated' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'overwhelming', arabic: 'majority' }, { english: 'profound', arabic: 'impact' }, { english: 'fierce', arabic: 'competition' }] } },
    { type: 'mcq', promptAr: 'أي تلازم صحيح مع "criticism"؟', data: { options: ['widespread criticism', 'wide criticism', 'large criticism', 'big criticism'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'أي تلازم صحيح مع "consequences"؟', data: { options: ['far-reaching consequences', 'long consequences', 'big consequences', 'wide consequences'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'A _____ impact. (عميق)', data: { answer: 'profound' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هناك قلق متزايد حول تغير المناخ.', data: { answer: 'There is growing concern about climate change.' }, points: 15 }
  ]
};

export const C1_U8_L5: LessonContent = {
  lessonId: 'C1-u08-l05',
  passingScore: 75,
  vocab: [
    { english: 'in light of', arabic: 'في ضوء', example: 'In light of recent events.', exampleAr: 'في ضوء الأحداث الأخيرة.' },
    { english: 'with a view to', arabic: 'بهدف', example: 'With a view to improving.', exampleAr: 'بهدف التحسين.' },
    { english: 'by virtue of', arabic: 'بحكم', example: 'By virtue of his position.', exampleAr: 'بحكم منصبه.' },
    { english: 'in the wake of', arabic: 'في أعقاب', example: 'In the wake of the crisis.', exampleAr: 'في أعقاب الأزمة.' },
    { english: 'on the grounds that', arabic: 'على أساس أن', example: 'On the grounds that...', exampleAr: 'على أساس أن...' },
    { english: 'for the sake of', arabic: 'من أجل', example: 'For the sake of clarity.', exampleAr: 'من أجل الوضوح.' },
    { english: 'in terms of', arabic: 'من حيث', example: 'In terms of performance.', exampleAr: 'من حيث الأداء.' },
    { english: 'as opposed to', arabic: 'على عكس', example: 'As opposed to before.', exampleAr: 'على عكس السابق.' }
  ],
  sentences: [
    { english: 'In light of new evidence, we changed our approach.', arabic: 'في ضوء أدلة جديدة، غيرنا منهجنا.' },
    { english: 'Changes were made with a view to efficiency.', arabic: 'أُجريت تغييرات بهدف الكفاءة.' },
    { english: 'In the wake of the disaster, aid arrived.', arabic: 'في أعقاب الكارثة، وصلت المساعدات.' },
    { english: 'In terms of quality, this is superior.', arabic: 'من حيث الجودة، هذا متفوق.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "in the wake of"؟', data: { options: ['في أعقاب', 'قبل', 'أثناء', 'بدلاً من'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ light of recent events. (في)', data: { answer: 'In' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'by virtue of', arabic: 'بحكم' }, { english: 'for the sake of', arabic: 'من أجل' }, { english: 'as opposed to', arabic: 'على عكس' }] } },
    { type: 'mcq', promptAr: 'ما معنى "with a view to"؟', data: { options: ['بهدف', 'بنظرة', 'برؤية', 'بمنظور'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "on the grounds that"؟', data: { options: ['على أساس أن', 'على الأرض', 'في المكان', 'بسبب'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ terms of performance. (من حيث)', data: { answer: 'In' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: في ضوء أدلة جديدة، غيرنا منهجنا.', data: { answer: 'In light of new evidence, we changed our approach.' }, points: 15 }
  ]
};

export const c1Unit8Lessons: Record<string, LessonContent> = {
  'C1-u08-l01': C1_U8_L1,
  'C1-u08-l02': C1_U8_L2,
  'C1-u08-l03': C1_U8_L3,
  'C1-u08-l04': C1_U8_L4,
  'C1-u08-l05': C1_U8_L5,
};

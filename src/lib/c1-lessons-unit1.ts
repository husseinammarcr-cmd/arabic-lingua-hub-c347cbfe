import { LessonContent } from './a1-lessons';

// Unit 1: Nuanced Expression - التعبير الدقيق
export const C1_U1_L1: LessonContent = {
  lessonId: 'C1-u01-l01',
  passingScore: 75,
  vocab: [
    { english: 'nuance', arabic: 'دقة المعنى', example: 'Appreciate the nuance in her argument.', exampleAr: 'قدّر دقة المعنى في حجتها.' },
    { english: 'subtle', arabic: 'دقيق/خفي', example: 'There\'s a subtle difference.', exampleAr: 'هناك فرق دقيق.' },
    { english: 'implication', arabic: 'مضمون', example: 'Consider the implications.', exampleAr: 'فكر في المضامين.' },
    { english: 'connotation', arabic: 'دلالة', example: 'Words carry connotations.', exampleAr: 'الكلمات تحمل دلالات.' },
    { english: 'undertone', arabic: 'نبرة خفية', example: 'There was an undertone of criticism.', exampleAr: 'كانت هناك نبرة خفية من النقد.' },
    { english: 'insinuate', arabic: 'يلمح بخبث', example: 'What are you insinuating?', exampleAr: 'إلى ماذا تلمح؟' },
    { english: 'ambiguous', arabic: 'غامض', example: 'The statement was ambiguous.', exampleAr: 'كان البيان غامضاً.' },
    { english: 'explicit', arabic: 'صريح', example: 'Be more explicit.', exampleAr: 'كن أكثر صراحة.' }
  ],
  sentences: [
    { english: 'The nuance of her argument was lost in translation.', arabic: 'دقة حجتها ضاعت في الترجمة.' },
    { english: 'There\'s a subtle but important distinction.', arabic: 'هناك فرق دقيق لكنه مهم.' },
    { english: 'The connotations of that word are negative.', arabic: 'دلالات تلك الكلمة سلبية.' },
    { english: 'His response was deliberately ambiguous.', arabic: 'كان رده غامضاً عمداً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "nuance"؟', data: { options: ['دقة المعنى', 'وضوح', 'بساطة', 'قوة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'There\'s a _____ difference. (دقيق)', data: { answer: 'subtle' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'implication', arabic: 'مضمون' }, { english: 'connotation', arabic: 'دلالة' }, { english: 'undertone', arabic: 'نبرة خفية' }] } },
    { type: 'mcq', promptAr: 'ما عكس "ambiguous"؟', data: { options: ['explicit', 'subtle', 'nuanced', 'implicit'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "insinuate"؟', data: { options: ['يلمح بخبث', 'يصرح', 'يوضح', 'ينفي'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Consider the _____. (المضامين)', data: { answer: 'implications' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هناك فرق دقيق لكنه مهم.', data: { answer: 'There\'s a subtle but important distinction.' }, points: 15 }
  ]
};

export const C1_U1_L2: LessonContent = {
  lessonId: 'C1-u01-l02',
  passingScore: 75,
  vocab: [
    { english: 'eloquent', arabic: 'بليغ', example: 'She gave an eloquent speech.', exampleAr: 'ألقت خطاباً بليغاً.' },
    { english: 'articulate', arabic: 'فصيح', example: 'He\'s very articulate.', exampleAr: 'إنه فصيح جداً.' },
    { english: 'succinct', arabic: 'موجز', example: 'Keep it succinct.', exampleAr: 'اجعله موجزاً.' },
    { english: 'verbose', arabic: 'مسهب', example: 'His writing is too verbose.', exampleAr: 'كتابته مسهبة جداً.' },
    { english: 'concise', arabic: 'مختصر', example: 'Be concise and clear.', exampleAr: 'كن مختصراً وواضحاً.' },
    { english: 'rambling', arabic: 'مشتت', example: 'His speech was rambling.', exampleAr: 'كان خطابه مشتتاً.' },
    { english: 'coherent', arabic: 'متسق', example: 'Present a coherent argument.', exampleAr: 'قدم حجة متسقة.' },
    { english: 'incisive', arabic: 'حاد/ثاقب', example: 'Her analysis was incisive.', exampleAr: 'كان تحليلها ثاقباً.' }
  ],
  sentences: [
    { english: 'An eloquent speaker can move audiences.', arabic: 'المتحدث البليغ يمكنه تحريك الجماهير.' },
    { english: 'Keep your presentation succinct and focused.', arabic: 'اجعل عرضك موجزاً ومركزاً.' },
    { english: 'Avoid verbose explanations.', arabic: 'تجنب الشروحات المسهبة.' },
    { english: 'Her incisive comments cut through the noise.', arabic: 'تعليقاتها الثاقبة اخترقت الضوضاء.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "verbose"؟', data: { options: ['succinct', 'eloquent', 'rambling', 'articulate'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'She gave an _____ speech. (بليغ)', data: { answer: 'eloquent' } },
    { type: 'mcq', promptAr: 'ما معنى "incisive"؟', data: { options: ['ثاقب', 'ضعيف', 'غامض', 'بسيط'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['argument', 'coherent', 'a', 'Present'], correctOrder: [3, 2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "rambling"؟', data: { options: ['مشتت', 'منظم', 'واضح', 'قصير'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'He\'s very _____. (فصيح)', data: { answer: 'articulate' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المتحدث البليغ يمكنه تحريك الجماهير.', data: { answer: 'An eloquent speaker can move audiences.' }, points: 15 }
  ]
};

export const C1_U1_L3: LessonContent = {
  lessonId: 'C1-u01-l03',
  passingScore: 75,
  vocab: [
    { english: 'understate', arabic: 'يقلل من شأن', example: 'Don\'t understate the problem.', exampleAr: 'لا تقلل من شأن المشكلة.' },
    { english: 'overstate', arabic: 'يبالغ', example: 'He tends to overstate things.', exampleAr: 'يميل إلى المبالغة.' },
    { english: 'downplay', arabic: 'يهوّن', example: 'They downplayed the risks.', exampleAr: 'هوّنوا من المخاطر.' },
    { english: 'exaggerate', arabic: 'يبالغ', example: 'Don\'t exaggerate.', exampleAr: 'لا تبالغ.' },
    { english: 'undermine', arabic: 'يقوّض', example: 'This undermines trust.', exampleAr: 'هذا يقوّض الثقة.' },
    { english: 'bolster', arabic: 'يعزز', example: 'Bolster your argument with facts.', exampleAr: 'عزز حجتك بالحقائق.' },
    { english: 'temper', arabic: 'يخفف', example: 'Temper your criticism.', exampleAr: 'خفف من نقدك.' },
    { english: 'qualify', arabic: 'يحدد/يقيّد', example: 'I need to qualify that statement.', exampleAr: 'أحتاج أن أقيّد ذلك البيان.' }
  ],
  sentences: [
    { english: 'To say it was difficult would be an understatement.', arabic: 'القول إنه كان صعباً سيكون تقليلاً من شأنه.' },
    { english: 'Don\'t downplay the significance of this achievement.', arabic: 'لا تهوّن من أهمية هذا الإنجاز.' },
    { english: 'We need to bolster our defenses.', arabic: 'نحتاج أن نعزز دفاعاتنا.' },
    { english: 'Let me qualify what I just said.', arabic: 'دعني أقيّد ما قلته للتو.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "understate"؟', data: { options: ['overstate', 'downplay', 'qualify', 'temper'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'They _____ the risks. (هوّنوا)', data: { answer: 'downplayed' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'undermine', arabic: 'يقوّض' }, { english: 'bolster', arabic: 'يعزز' }, { english: 'temper', arabic: 'يخفف' }] } },
    { type: 'mcq', promptAr: 'ما معنى "qualify" في سياق الكلام؟', data: { options: ['يقيّد', 'يؤهل', 'يوافق', 'ينفي'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "bolster"؟', data: { options: ['يعزز', 'يضعف', 'يقلل', 'يهمل'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Don\'t _____ the problem. (تقلل من شأن)', data: { answer: 'understate' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: نحتاج أن نعزز دفاعاتنا.', data: { answer: 'We need to bolster our defenses.' }, points: 15 }
  ]
};

export const C1_U1_L4: LessonContent = {
  lessonId: 'C1-u01-l04',
  passingScore: 75,
  vocab: [
    { english: 'hedge', arabic: 'يتحفظ', example: 'Politicians often hedge their statements.', exampleAr: 'السياسيون غالباً يتحفظون في تصريحاتهم.' },
    { english: 'caveat', arabic: 'تحذير', example: 'There\'s one caveat.', exampleAr: 'هناك تحذير واحد.' },
    { english: 'proviso', arabic: 'شرط', example: 'With one proviso.', exampleAr: 'بشرط واحد.' },
    { english: 'stipulate', arabic: 'يشترط', example: 'The contract stipulates...', exampleAr: 'العقد يشترط...' },
    { english: 'tentative', arabic: 'مبدئي', example: 'This is tentative.', exampleAr: 'هذا مبدئي.' },
    { english: 'provisional', arabic: 'مؤقت', example: 'A provisional agreement.', exampleAr: 'اتفاق مؤقت.' },
    { english: 'categorical', arabic: 'قاطع', example: 'A categorical denial.', exampleAr: 'نفي قاطع.' },
    { english: 'unequivocal', arabic: 'لا لبس فيه', example: 'An unequivocal answer.', exampleAr: 'جواب لا لبس فيه.' }
  ],
  sentences: [
    { english: 'I\'ll agree, with one caveat.', arabic: 'سأوافق، مع تحذير واحد.' },
    { english: 'The agreement is provisional pending approval.', arabic: 'الاتفاق مؤقت بانتظار الموافقة.' },
    { english: 'She gave a categorical refusal.', arabic: 'أعطت رفضاً قاطعاً.' },
    { english: 'His support was unequivocal.', arabic: 'كان دعمه لا لبس فيه.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "caveat"؟', data: { options: ['تحذير', 'موافقة', 'رفض', 'سؤال'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'A _____ denial. (قاطع)', data: { answer: 'categorical' } },
    { type: 'mcq', promptAr: 'ما عكس "tentative"؟', data: { options: ['definite', 'provisional', 'hedge', 'caveat'], correct: 0 } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'stipulate', arabic: 'يشترط' }, { english: 'proviso', arabic: 'شرط' }, { english: 'unequivocal', arabic: 'لا لبس فيه' }] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "provisional"؟', data: { options: ['مؤقت', 'دائم', 'قاطع', 'نهائي'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'An _____ answer. (لا لبس فيه)', data: { answer: 'unequivocal' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: سأوافق، مع تحذير واحد.', data: { answer: 'I\'ll agree, with one caveat.' }, points: 15 }
  ]
};

export const C1_U1_L5: LessonContent = {
  lessonId: 'C1-u01-l05',
  passingScore: 75,
  vocab: [
    { english: 'allude', arabic: 'يلمح إلى', example: 'She alluded to past problems.', exampleAr: 'ألمحت إلى مشاكل سابقة.' },
    { english: 'elude', arabic: 'يفلت من', example: 'The meaning eludes me.', exampleAr: 'المعنى يفلت مني.' },
    { english: 'illusion', arabic: 'وهم', example: 'It\'s just an illusion.', exampleAr: 'إنه مجرد وهم.' },
    { english: 'allusion', arabic: 'تلميح', example: 'A literary allusion.', exampleAr: 'تلميح أدبي.' },
    { english: 'innuendo', arabic: 'تلميح خفي', example: 'Political innuendo.', exampleAr: 'تلميحات سياسية خفية.' },
    { english: 'inference', arabic: 'استنتاج', example: 'Draw an inference.', exampleAr: 'توصل إلى استنتاج.' },
    { english: 'deduce', arabic: 'يستنتج', example: 'What can we deduce?', exampleAr: 'ماذا يمكننا أن نستنتج؟' },
    { english: 'surmise', arabic: 'يخمّن', example: 'I can only surmise.', exampleAr: 'لا يمكنني إلا التخمين.' }
  ],
  sentences: [
    { english: 'He alluded to problems without being specific.', arabic: 'ألمح إلى مشاكل دون تحديد.' },
    { english: 'The true meaning continues to elude scholars.', arabic: 'المعنى الحقيقي لا يزال يفلت من الباحثين.' },
    { english: 'From the evidence, we can deduce that...', arabic: 'من الأدلة، يمكننا أن نستنتج أن...' },
    { english: 'I can only surmise what happened.', arabic: 'لا يمكنني إلا تخمين ما حدث.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما الفرق بين "allude" و "elude"؟', data: { options: ['allude=يلمح، elude=يفلت', 'كلاهما بنفس المعنى', 'allude=يفلت، elude=يلمح', 'لا فرق'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Draw an _____. (استنتاج)', data: { answer: 'inference' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'allusion', arabic: 'تلميح' }, { english: 'illusion', arabic: 'وهم' }, { english: 'innuendo', arabic: 'تلميح خفي' }] } },
    { type: 'mcq', promptAr: 'ما معنى "surmise"؟', data: { options: ['يخمّن', 'يعرف', 'يؤكد', 'ينفي'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "deduce"؟', data: { options: ['يستنتج', 'يخمن', 'يفترض', 'يتساءل'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'She _____ to past problems. (ألمحت)', data: { answer: 'alluded' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: من الأدلة، يمكننا أن نستنتج أن...', data: { answer: 'From the evidence, we can deduce that...' }, points: 15 }
  ]
};

export const c1Unit1Lessons: Record<string, LessonContent> = {
  'C1-u01-l01': C1_U1_L1,
  'C1-u01-l02': C1_U1_L2,
  'C1-u01-l03': C1_U1_L3,
  'C1-u01-l04': C1_U1_L4,
  'C1-u01-l05': C1_U1_L5,
};

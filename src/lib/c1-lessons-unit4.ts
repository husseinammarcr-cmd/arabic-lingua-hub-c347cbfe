import { LessonContent } from './a1-lessons';

// Unit 4: Law & Politics - القانون والسياسة
export const C1_U4_L1: LessonContent = {
  lessonId: 'C1-u04-l01',
  passingScore: 75,
  vocab: [
    { english: 'legislation', arabic: 'تشريع', example: 'Pass new legislation.', exampleAr: 'أصدر تشريعاً جديداً.' },
    { english: 'amendment', arabic: 'تعديل', example: 'Propose an amendment.', exampleAr: 'اقترح تعديلاً.' },
    { english: 'constitution', arabic: 'دستور', example: 'Constitutional rights.', exampleAr: 'حقوق دستورية.' },
    { english: 'jurisdiction', arabic: 'اختصاص قضائي', example: 'Within our jurisdiction.', exampleAr: 'ضمن اختصاصنا القضائي.' },
    { english: 'statute', arabic: 'قانون', example: 'Federal statute.', exampleAr: 'قانون فيدرالي.' },
    { english: 'precedent', arabic: 'سابقة قضائية', example: 'Set a legal precedent.', exampleAr: 'أسس سابقة قضائية.' },
    { english: 'litigation', arabic: 'تقاضي', example: 'Ongoing litigation.', exampleAr: 'تقاضٍ جارٍ.' },
    { english: 'verdict', arabic: 'حكم', example: 'The jury\'s verdict.', exampleAr: 'حكم هيئة المحلفين.' }
  ],
  sentences: [
    { english: 'New legislation was passed unanimously.', arabic: 'صدر التشريع الجديد بالإجماع.' },
    { english: 'This case will set an important precedent.', arabic: 'هذه القضية ستؤسس سابقة مهمة.' },
    { english: 'The constitution guarantees these rights.', arabic: 'الدستور يضمن هذه الحقوق.' },
    { english: 'The verdict was announced today.', arabic: 'أُعلن الحكم اليوم.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "precedent"؟', data: { options: ['سابقة قضائية', 'تشريع', 'دستور', 'تعديل'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Pass new _____. (تشريع)', data: { answer: 'legislation' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'amendment', arabic: 'تعديل' }, { english: 'statute', arabic: 'قانون' }, { english: 'verdict', arabic: 'حكم' }] } },
    { type: 'mcq', promptAr: 'ما معنى "jurisdiction"؟', data: { options: ['اختصاص قضائي', 'محكمة', 'قاضي', 'محامي'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "litigation"؟', data: { options: ['تقاضي', 'تشريع', 'دستور', 'تعديل'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The _____\'s verdict. (هيئة المحلفين)', data: { answer: 'jury' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الدستور يضمن هذه الحقوق.', data: { answer: 'The constitution guarantees these rights.' }, points: 15 }
  ]
};

export const C1_U4_L2: LessonContent = {
  lessonId: 'C1-u04-l02',
  passingScore: 75,
  vocab: [
    { english: 'democracy', arabic: 'ديمقراطية', example: 'A functioning democracy.', exampleAr: 'ديمقراطية فعّالة.' },
    { english: 'autocracy', arabic: 'استبداد', example: 'Slide into autocracy.', exampleAr: 'الانزلاق نحو الاستبداد.' },
    { english: 'sovereignty', arabic: 'سيادة', example: 'National sovereignty.', exampleAr: 'السيادة الوطنية.' },
    { english: 'diplomacy', arabic: 'دبلوماسية', example: 'Use diplomacy.', exampleAr: 'استخدم الدبلوماسية.' },
    { english: 'sanction', arabic: 'عقوبة', example: 'Economic sanctions.', exampleAr: 'عقوبات اقتصادية.' },
    { english: 'coalition', arabic: 'تحالف', example: 'Form a coalition.', exampleAr: 'شكّل تحالفاً.' },
    { english: 'mandate', arabic: 'تفويض', example: 'Electoral mandate.', exampleAr: 'تفويض انتخابي.' },
    { english: 'referendum', arabic: 'استفتاء', example: 'Hold a referendum.', exampleAr: 'أجرِ استفتاءً.' }
  ],
  sentences: [
    { english: 'Democracy requires active citizen participation.', arabic: 'الديمقراطية تتطلب مشاركة مواطنين فعّالة.' },
    { english: 'Sanctions were imposed on the country.', arabic: 'فُرضت عقوبات على البلد.' },
    { english: 'The coalition government was formed.', arabic: 'تشكلت حكومة ائتلافية.' },
    { english: 'A referendum will decide the issue.', arabic: 'استفتاء سيحسم المسألة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "democracy"؟', data: { options: ['autocracy', 'diplomacy', 'sovereignty', 'coalition'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Economic _____. (عقوبات)', data: { answer: 'sanctions' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'sovereignty', arabic: 'سيادة' }, { english: 'mandate', arabic: 'تفويض' }, { english: 'referendum', arabic: 'استفتاء' }] } },
    { type: 'mcq', promptAr: 'ما معنى "coalition"؟', data: { options: ['تحالف', 'معارضة', 'حكومة', 'برلمان'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "diplomacy"؟', data: { options: ['دبلوماسية', 'حرب', 'عقوبات', 'تحالف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Hold a _____. (استفتاء)', data: { answer: 'referendum' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الديمقراطية تتطلب مشاركة مواطنين فعّالة.', data: { answer: 'Democracy requires active citizen participation.' }, points: 15 }
  ]
};

export const C1_U4_L3: LessonContent = {
  lessonId: 'C1-u04-l03',
  passingScore: 75,
  vocab: [
    { english: 'plaintiff', arabic: 'مدّعي', example: 'The plaintiff filed suit.', exampleAr: 'رفع المدّعي دعوى.' },
    { english: 'defendant', arabic: 'مدّعى عليه', example: 'The defendant pleaded not guilty.', exampleAr: 'ادّعى المدّعى عليه البراءة.' },
    { english: 'prosecutor', arabic: 'مدّعي عام', example: 'The prosecutor presented evidence.', exampleAr: 'قدّم المدّعي العام الأدلة.' },
    { english: 'testimony', arabic: 'شهادة', example: 'Give testimony.', exampleAr: 'أدلِ بشهادة.' },
    { english: 'acquit', arabic: 'يبرئ', example: 'The jury acquitted him.', exampleAr: 'برّأته هيئة المحلفين.' },
    { english: 'convict', arabic: 'يدين', example: 'He was convicted.', exampleAr: 'أُدين.' },
    { english: 'appeal', arabic: 'استئناف', example: 'File an appeal.', exampleAr: 'قدّم استئنافاً.' },
    { english: 'sentence', arabic: 'حكم/عقوبة', example: 'A harsh sentence.', exampleAr: 'حكم قاسٍ.' }
  ],
  sentences: [
    { english: 'The plaintiff seeks compensation.', arabic: 'المدّعي يطالب بتعويض.' },
    { english: 'The defendant was found guilty.', arabic: 'وُجد المدّعى عليه مذنباً.' },
    { english: 'His testimony was crucial.', arabic: 'شهادته كانت حاسمة.' },
    { english: 'They will appeal the verdict.', arabic: 'سيستأنفون الحكم.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "acquit"؟', data: { options: ['convict', 'appeal', 'testify', 'sentence'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ filed suit. (مدّعي)', data: { answer: 'plaintiff' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'defendant', arabic: 'مدّعى عليه' }, { english: 'prosecutor', arabic: 'مدّعي عام' }, { english: 'testimony', arabic: 'شهادة' }] } },
    { type: 'mcq', promptAr: 'ما معنى "appeal"؟', data: { options: ['استئناف', 'حكم', 'دعوى', 'شهادة'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "sentence" في السياق القانوني؟', data: { options: ['حكم/عقوبة', 'جملة', 'كلمة', 'نص'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The jury _____ him. (برّأته)', data: { answer: 'acquitted' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: شهادته كانت حاسمة.', data: { answer: 'His testimony was crucial.' }, points: 15 }
  ]
};

export const C1_U4_L4: LessonContent = {
  lessonId: 'C1-u04-l04',
  passingScore: 75,
  vocab: [
    { english: 'bureaucracy', arabic: 'بيروقراطية', example: 'Cut through bureaucracy.', exampleAr: 'تجاوز البيروقراطية.' },
    { english: 'policy', arabic: 'سياسة', example: 'Government policy.', exampleAr: 'سياسة حكومية.' },
    { english: 'reform', arabic: 'إصلاح', example: 'Political reform.', exampleAr: 'إصلاح سياسي.' },
    { english: 'lobby', arabic: 'يضغط', example: 'Lobby for change.', exampleAr: 'اضغط من أجل التغيير.' },
    { english: 'constituent', arabic: 'ناخب', example: 'Serve constituents.', exampleAr: 'اخدم الناخبين.' },
    { english: 'incumbent', arabic: 'الحالي في المنصب', example: 'The incumbent president.', exampleAr: 'الرئيس الحالي.' },
    { english: 'opposition', arabic: 'معارضة', example: 'The opposition party.', exampleAr: 'حزب المعارضة.' },
    { english: 'bipartisan', arabic: 'من الحزبين', example: 'Bipartisan support.', exampleAr: 'دعم من الحزبين.' }
  ],
  sentences: [
    { english: 'Bureaucracy slows down the process.', arabic: 'البيروقراطية تبطئ العملية.' },
    { english: 'Major reform is needed.', arabic: 'هناك حاجة لإصلاح كبير.' },
    { english: 'They lobby for environmental protection.', arabic: 'يضغطون من أجل حماية البيئة.' },
    { english: 'The bill has bipartisan support.', arabic: 'مشروع القانون له دعم من الحزبين.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "incumbent"؟', data: { options: ['الحالي في المنصب', 'السابق', 'المرشح', 'المعارض'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ for change. (اضغط)', data: { answer: 'Lobby' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'policy', arabic: 'سياسة' }, { english: 'reform', arabic: 'إصلاح' }, { english: 'constituent', arabic: 'ناخب' }] } },
    { type: 'mcq', promptAr: 'ما معنى "bipartisan"؟', data: { options: ['من الحزبين', 'حزب واحد', 'مستقل', 'معارض'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "opposition"؟', data: { options: ['معارضة', 'حكومة', 'أغلبية', 'تحالف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Political _____. (إصلاح)', data: { answer: 'reform' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: مشروع القانون له دعم من الحزبين.', data: { answer: 'The bill has bipartisan support.' }, points: 15 }
  ]
};

export const C1_U4_L5: LessonContent = {
  lessonId: 'C1-u04-l05',
  passingScore: 75,
  vocab: [
    { english: 'treaty', arabic: 'معاهدة', example: 'Sign a treaty.', exampleAr: 'وقّع معاهدة.' },
    { english: 'accord', arabic: 'اتفاق', example: 'Peace accord.', exampleAr: 'اتفاق سلام.' },
    { english: 'ratify', arabic: 'يصادق', example: 'Ratify the agreement.', exampleAr: 'صادق على الاتفاق.' },
    { english: 'bilateral', arabic: 'ثنائي', example: 'Bilateral talks.', exampleAr: 'محادثات ثنائية.' },
    { english: 'multilateral', arabic: 'متعدد الأطراف', example: 'Multilateral agreement.', exampleAr: 'اتفاق متعدد الأطراف.' },
    { english: 'envoy', arabic: 'مبعوث', example: 'Special envoy.', exampleAr: 'مبعوث خاص.' },
    { english: 'summit', arabic: 'قمة', example: 'A peace summit.', exampleAr: 'قمة سلام.' },
    { english: 'negotiate', arabic: 'يتفاوض', example: 'Negotiate terms.', exampleAr: 'تفاوض على الشروط.' }
  ],
  sentences: [
    { english: 'The treaty was signed last year.', arabic: 'وُقّعت المعاهدة العام الماضي.' },
    { english: 'Parliament must ratify the accord.', arabic: 'يجب على البرلمان المصادقة على الاتفاق.' },
    { english: 'Bilateral relations have improved.', arabic: 'تحسنت العلاقات الثنائية.' },
    { english: 'The summit addressed key issues.', arabic: 'تناولت القمة قضايا رئيسية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "ratify"؟', data: { options: ['يصادق', 'يرفض', 'يقترح', 'يناقش'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ talks. (ثنائية)', data: { answer: 'Bilateral' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'treaty', arabic: 'معاهدة' }, { english: 'envoy', arabic: 'مبعوث' }, { english: 'summit', arabic: 'قمة' }] } },
    { type: 'mcq', promptAr: 'ما عكس "bilateral"؟', data: { options: ['multilateral', 'unilateral', 'lateral', 'trilateral'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "accord"؟', data: { options: ['اتفاق', 'خلاف', 'حرب', 'نزاع'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ terms. (تفاوض على)', data: { answer: 'Negotiate' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: يجب على البرلمان المصادقة على الاتفاق.', data: { answer: 'Parliament must ratify the accord.' }, points: 15 }
  ]
};

export const c1Unit4Lessons: Record<string, LessonContent> = {
  'C1-u04-l01': C1_U4_L1,
  'C1-u04-l02': C1_U4_L2,
  'C1-u04-l03': C1_U4_L3,
  'C1-u04-l04': C1_U4_L4,
  'C1-u04-l05': C1_U4_L5,
};

import { LessonContent } from './a1-lessons';

// Unit 1: Work & Business - العمل والأعمال
export const B1_U1_L1: LessonContent = {
  lessonId: 'B1-u01-l01',
  passingScore: 70,
  vocab: [
    { english: 'office', arabic: 'مكتب', example: 'I work in an office.', exampleAr: 'أعمل في مكتب.' },
    { english: 'meeting', arabic: 'اجتماع', example: 'We have a meeting at 10.', exampleAr: 'لدينا اجتماع الساعة 10.' },
    { english: 'colleague', arabic: 'زميل', example: 'He is my colleague.', exampleAr: 'هو زميلي.' },
    { english: 'manager', arabic: 'مدير', example: 'The manager is busy.', exampleAr: 'المدير مشغول.' },
    { english: 'deadline', arabic: 'موعد نهائي', example: 'The deadline is Friday.', exampleAr: 'الموعد النهائي يوم الجمعة.' },
    { english: 'project', arabic: 'مشروع', example: 'This is an important project.', exampleAr: 'هذا مشروع مهم.' },
    { english: 'salary', arabic: 'راتب', example: 'My salary is good.', exampleAr: 'راتبي جيد.' },
    { english: 'promotion', arabic: 'ترقية', example: 'He got a promotion.', exampleAr: 'حصل على ترقية.' }
  ],
  sentences: [
    { english: 'I have an important meeting this morning.', arabic: 'لدي اجتماع مهم هذا الصباح.' },
    { english: 'My colleague helped me with the project.', arabic: 'ساعدني زميلي في المشروع.' },
    { english: 'The manager approved the deadline extension.', arabic: 'وافق المدير على تمديد الموعد النهائي.' },
    { english: 'She got a salary increase last month.', arabic: 'حصلت على زيادة في الراتب الشهر الماضي.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى كلمة "meeting"؟', data: { options: ['اجتماع', 'مكتب', 'راتب', 'مشروع'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The _____ is Friday. (الموعد النهائي)', data: { answer: 'deadline', hint: 'تبدأ بحرف D' } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'office', arabic: 'مكتب' }, { english: 'salary', arabic: 'راتب' }, { english: 'manager', arabic: 'مدير' }] } },
    { type: 'reorder', promptAr: 'رتب الجملة:', data: { words: ['have', 'I', 'meeting', 'a'], correctOrder: [1, 0, 3, 2] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "ترقية"؟', data: { options: ['promotion', 'project', 'salary', 'meeting'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'He is my _____. (زميل)', data: { answer: 'colleague' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: لدي اجتماع مهم.', data: { answer: 'I have an important meeting.' }, points: 15 }
  ]
};

export const B1_U1_L2: LessonContent = {
  lessonId: 'B1-u01-l02',
  passingScore: 70,
  vocab: [
    { english: 'interview', arabic: 'مقابلة', example: 'I have a job interview.', exampleAr: 'لدي مقابلة عمل.' },
    { english: 'resume', arabic: 'سيرة ذاتية', example: 'Send your resume.', exampleAr: 'أرسل سيرتك الذاتية.' },
    { english: 'experience', arabic: 'خبرة', example: 'I have five years of experience.', exampleAr: 'لدي خمس سنوات خبرة.' },
    { english: 'qualification', arabic: 'مؤهل', example: 'What are your qualifications?', exampleAr: 'ما هي مؤهلاتك؟' },
    { english: 'apply', arabic: 'يتقدم بطلب', example: 'I want to apply for this job.', exampleAr: 'أريد التقدم لهذه الوظيفة.' },
    { english: 'hire', arabic: 'يوظف', example: 'They will hire new staff.', exampleAr: 'سيوظفون موظفين جدد.' },
    { english: 'position', arabic: 'منصب', example: 'What position are you applying for?', exampleAr: 'لأي منصب تتقدم؟' },
    { english: 'candidate', arabic: 'مرشح', example: 'She is the best candidate.', exampleAr: 'هي أفضل مرشحة.' }
  ],
  sentences: [
    { english: 'I\'m preparing for my job interview tomorrow.', arabic: 'أستعد لمقابلة العمل غداً.' },
    { english: 'You need experience for this position.', arabic: 'تحتاج خبرة لهذا المنصب.' },
    { english: 'Please send your resume by email.', arabic: 'من فضلك أرسل سيرتك الذاتية بالبريد الإلكتروني.' },
    { english: 'The company hired three new employees.', arabic: 'وظفت الشركة ثلاثة موظفين جدد.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "interview"؟', data: { options: ['مقابلة', 'راتب', 'مكتب', 'مشروع'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Send your _____ by email. (سيرة ذاتية)', data: { answer: 'resume' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يوظف"؟', data: { options: ['hire', 'fire', 'apply', 'work'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['job', 'a', 'have', 'I', 'interview'], correctOrder: [3, 2, 1, 0, 4] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "experience"؟', data: { options: ['خبرة', 'مقابلة', 'راتب', 'منصب'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'She is the best _____. (مرشحة)', data: { answer: 'candidate' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أريد التقدم لهذه الوظيفة.', data: { answer: 'I want to apply for this job.' }, points: 15 }
  ]
};

export const B1_U1_L3: LessonContent = {
  lessonId: 'B1-u01-l03',
  passingScore: 70,
  vocab: [
    { english: 'contract', arabic: 'عقد', example: 'Sign the contract.', exampleAr: 'وقّع العقد.' },
    { english: 'negotiate', arabic: 'يتفاوض', example: 'We need to negotiate.', exampleAr: 'نحتاج أن نتفاوض.' },
    { english: 'agreement', arabic: 'اتفاقية', example: 'We reached an agreement.', exampleAr: 'توصلنا إلى اتفاقية.' },
    { english: 'benefit', arabic: 'ميزة', example: 'Good benefits are important.', exampleAr: 'المزايا الجيدة مهمة.' },
    { english: 'insurance', arabic: 'تأمين', example: 'The job includes health insurance.', exampleAr: 'الوظيفة تشمل تأميناً صحياً.' },
    { english: 'vacation', arabic: 'إجازة', example: 'I need a vacation.', exampleAr: 'أحتاج إجازة.' },
    { english: 'overtime', arabic: 'عمل إضافي', example: 'I worked overtime yesterday.', exampleAr: 'عملت عملاً إضافياً أمس.' },
    { english: 'bonus', arabic: 'مكافأة', example: 'We got a year-end bonus.', exampleAr: 'حصلنا على مكافأة نهاية السنة.' }
  ],
  sentences: [
    { english: 'Please read the contract carefully before signing.', arabic: 'من فضلك اقرأ العقد بعناية قبل التوقيع.' },
    { english: 'We negotiated a better salary.', arabic: 'تفاوضنا على راتب أفضل.' },
    { english: 'The benefits include health insurance.', arabic: 'المزايا تشمل التأمين الصحي.' },
    { english: 'I worked overtime to finish the project.', arabic: 'عملت عملاً إضافياً لإنهاء المشروع.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "contract"؟', data: { options: ['عقد', 'راتب', 'مكافأة', 'إجازة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The job includes health _____. (تأمين)', data: { answer: 'insurance' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'vacation', arabic: 'إجازة' }, { english: 'bonus', arabic: 'مكافأة' }, { english: 'overtime', arabic: 'عمل إضافي' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يتفاوض"؟', data: { options: ['negotiate', 'agree', 'sign', 'work'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "agreement"؟', data: { options: ['اتفاقية', 'عقد', 'راتب', 'مقابلة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'We got a year-end _____. (مكافأة)', data: { answer: 'bonus' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أحتاج إجازة.', data: { answer: 'I need a vacation.' }, points: 15 }
  ]
};

export const B1_U1_L4: LessonContent = {
  lessonId: 'B1-u01-l04',
  passingScore: 70,
  vocab: [
    { english: 'presentation', arabic: 'عرض تقديمي', example: 'I gave a presentation.', exampleAr: 'قدمت عرضاً تقديمياً.' },
    { english: 'report', arabic: 'تقرير', example: 'Submit your report.', exampleAr: 'قدّم تقريرك.' },
    { english: 'schedule', arabic: 'جدول', example: 'Check the schedule.', exampleAr: 'راجع الجدول.' },
    { english: 'task', arabic: 'مهمة', example: 'Complete this task.', exampleAr: 'أكمل هذه المهمة.' },
    { english: 'efficient', arabic: 'فعّال', example: 'She is very efficient.', exampleAr: 'هي فعّالة جداً.' },
    { english: 'productive', arabic: 'منتج', example: 'It was a productive day.', exampleAr: 'كان يوماً منتجاً.' },
    { english: 'organize', arabic: 'ينظم', example: 'Organize your files.', exampleAr: 'نظّم ملفاتك.' },
    { english: 'prioritize', arabic: 'يحدد الأولويات', example: 'Prioritize your tasks.', exampleAr: 'حدد أولويات مهامك.' }
  ],
  sentences: [
    { english: 'I need to prepare a presentation for Monday.', arabic: 'أحتاج إعداد عرض تقديمي ليوم الاثنين.' },
    { english: 'The report is due tomorrow.', arabic: 'التقرير مستحق غداً.' },
    { english: 'Being organized helps you be more productive.', arabic: 'التنظيم يساعدك على أن تكون أكثر إنتاجية.' },
    { english: 'Let\'s prioritize the most important tasks.', arabic: 'لنحدد أولوية المهام الأكثر أهمية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "presentation"؟', data: { options: ['عرض تقديمي', 'تقرير', 'جدول', 'مهمة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Submit your _____ by Friday. (تقرير)', data: { answer: 'report' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "فعّال"؟', data: { options: ['efficient', 'effective', 'productive', 'organized'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['tasks', 'your', 'prioritize'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "schedule"؟', data: { options: ['جدول', 'تقرير', 'مهمة', 'عرض'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ your files. (نظّم)', data: { answer: 'Organize' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: كان يوماً منتجاً.', data: { answer: 'It was a productive day.' }, points: 15 }
  ]
};

export const B1_U1_L5: LessonContent = {
  lessonId: 'B1-u01-l05',
  passingScore: 70,
  vocab: [
    { english: 'department', arabic: 'قسم', example: 'Which department do you work in?', exampleAr: 'في أي قسم تعمل؟' },
    { english: 'teamwork', arabic: 'عمل جماعي', example: 'Teamwork is essential.', exampleAr: 'العمل الجماعي ضروري.' },
    { english: 'leadership', arabic: 'قيادة', example: 'Good leadership is important.', exampleAr: 'القيادة الجيدة مهمة.' },
    { english: 'communication', arabic: 'تواصل', example: 'Communication skills are key.', exampleAr: 'مهارات التواصل أساسية.' },
    { english: 'responsibility', arabic: 'مسؤولية', example: 'It\'s my responsibility.', exampleAr: 'هذه مسؤوليتي.' },
    { english: 'collaborate', arabic: 'يتعاون', example: 'We collaborate on projects.', exampleAr: 'نتعاون في المشاريع.' },
    { english: 'goal', arabic: 'هدف', example: 'What is your goal?', exampleAr: 'ما هو هدفك؟' },
    { english: 'achieve', arabic: 'يحقق', example: 'We achieved our goal.', exampleAr: 'حققنا هدفنا.' }
  ],
  sentences: [
    { english: 'Our department works closely with marketing.', arabic: 'قسمنا يعمل بشكل وثيق مع التسويق.' },
    { english: 'Teamwork helps us achieve our goals.', arabic: 'العمل الجماعي يساعدنا على تحقيق أهدافنا.' },
    { english: 'Good communication is essential for success.', arabic: 'التواصل الجيد ضروري للنجاح.' },
    { english: 'We collaborate with other teams on big projects.', arabic: 'نتعاون مع فرق أخرى في المشاريع الكبيرة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "teamwork"؟', data: { options: ['عمل جماعي', 'قيادة', 'تواصل', 'مسؤولية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'We _____ our goal. (حققنا)', data: { answer: 'achieved' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'goal', arabic: 'هدف' }, { english: 'leadership', arabic: 'قيادة' }, { english: 'department', arabic: 'قسم' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يتعاون"؟', data: { options: ['collaborate', 'compete', 'communicate', 'complete'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "responsibility"؟', data: { options: ['مسؤولية', 'قيادة', 'تواصل', 'هدف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ skills are key. (تواصل)', data: { answer: 'Communication' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: العمل الجماعي ضروري.', data: { answer: 'Teamwork is essential.' }, points: 15 }
  ]
};

export const b1Unit1Lessons: Record<string, LessonContent> = {
  'B1-u01-l01': B1_U1_L1,
  'B1-u01-l02': B1_U1_L2,
  'B1-u01-l03': B1_U1_L3,
  'B1-u01-l04': B1_U1_L4,
  'B1-u01-l05': B1_U1_L5,
};

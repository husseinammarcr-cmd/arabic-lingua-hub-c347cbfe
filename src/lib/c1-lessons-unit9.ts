import { LessonContent } from './a1-lessons';

// Unit 9: Professional Communication - التواصل المهني
export const C1_U9_L1: LessonContent = {
  lessonId: 'C1-u09-l01',
  passingScore: 75,
  vocab: [
    { english: 'negotiate', arabic: 'يتفاوض', example: 'Negotiate terms.', exampleAr: 'تفاوض على الشروط.' },
    { english: 'compromise', arabic: 'يتنازل', example: 'Reach a compromise.', exampleAr: 'توصل لحل وسط.' },
    { english: 'concession', arabic: 'تنازل', example: 'Make concessions.', exampleAr: 'قدم تنازلات.' },
    { english: 'leverage', arabic: 'نفوذ', example: 'Use leverage.', exampleAr: 'استخدم النفوذ.' },
    { english: 'deadline', arabic: 'موعد نهائي', example: 'Meet the deadline.', exampleAr: 'التزم بالموعد النهائي.' },
    { english: 'proposal', arabic: 'اقتراح', example: 'Submit a proposal.', exampleAr: 'قدم اقتراحاً.' },
    { english: 'counterproposal', arabic: 'اقتراح مضاد', example: 'Make a counterproposal.', exampleAr: 'قدم اقتراحاً مضاداً.' },
    { english: 'bottom line', arabic: 'الحد الأدنى', example: 'What\'s your bottom line?', exampleAr: 'ما حدك الأدنى؟' }
  ],
  sentences: [
    { english: 'We need to negotiate better terms.', arabic: 'نحتاج أن نتفاوض على شروط أفضل.' },
    { english: 'Both sides made concessions.', arabic: 'كلا الطرفين قدما تنازلات.' },
    { english: 'Use your leverage wisely.', arabic: 'استخدم نفوذك بحكمة.' },
    { english: 'What\'s your bottom line in this deal?', arabic: 'ما حدك الأدنى في هذه الصفقة؟' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "concession"؟', data: { options: ['تنازل', 'موافقة', 'رفض', 'طلب'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Reach a _____. (حل وسط)', data: { answer: 'compromise' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'negotiate', arabic: 'يتفاوض' }, { english: 'proposal', arabic: 'اقتراح' }, { english: 'leverage', arabic: 'نفوذ' }] } },
    { type: 'mcq', promptAr: 'ما معنى "bottom line"؟', data: { options: ['الحد الأدنى', 'النهاية', 'البداية', 'الوسط'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "counterproposal"؟', data: { options: ['اقتراح مضاد', 'رفض', 'موافقة', 'سؤال'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Meet the _____. (موعد نهائي)', data: { answer: 'deadline' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: كلا الطرفين قدما تنازلات.', data: { answer: 'Both sides made concessions.' }, points: 15 }
  ]
};

export const C1_U9_L2: LessonContent = {
  lessonId: 'C1-u09-l02',
  passingScore: 75,
  vocab: [
    { english: 'delegate', arabic: 'يفوض', example: 'Delegate tasks.', exampleAr: 'فوّض المهام.' },
    { english: 'prioritize', arabic: 'يحدد الأولويات', example: 'Prioritize your work.', exampleAr: 'حدد أولويات عملك.' },
    { english: 'streamline', arabic: 'يبسط', example: 'Streamline the process.', exampleAr: 'بسّط العملية.' },
    { english: 'implement', arabic: 'ينفذ', example: 'Implement the plan.', exampleAr: 'نفّذ الخطة.' },
    { english: 'monitor', arabic: 'يراقب', example: 'Monitor progress.', exampleAr: 'راقب التقدم.' },
    { english: 'evaluate', arabic: 'يقيّم', example: 'Evaluate results.', exampleAr: 'قيّم النتائج.' },
    { english: 'optimize', arabic: 'يحسّن', example: 'Optimize performance.', exampleAr: 'حسّن الأداء.' },
    { english: 'collaborate', arabic: 'يتعاون', example: 'Collaborate effectively.', exampleAr: 'تعاون بفعالية.' }
  ],
  sentences: [
    { english: 'Learn to delegate effectively.', arabic: 'تعلم أن تفوض بفعالية.' },
    { english: 'Prioritize tasks by importance.', arabic: 'حدد أولويات المهام حسب الأهمية.' },
    { english: 'We need to streamline our operations.', arabic: 'نحتاج لتبسيط عملياتنا.' },
    { english: 'Collaborate with other departments.', arabic: 'تعاون مع الأقسام الأخرى.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "streamline"؟', data: { options: ['يبسط', 'يعقد', 'يوقف', 'يبدأ'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ the plan. (نفّذ)', data: { answer: 'Implement' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'delegate', arabic: 'يفوض' }, { english: 'monitor', arabic: 'يراقب' }, { english: 'optimize', arabic: 'يحسّن' }] } },
    { type: 'mcq', promptAr: 'ما معنى "collaborate"؟', data: { options: ['يتعاون', 'يتنافس', 'يعارض', 'يرفض'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "prioritize"؟', data: { options: ['يحدد الأولويات', 'يؤجل', 'يلغي', 'يبدأ'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ results. (قيّم)', data: { answer: 'Evaluate' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: نحتاج لتبسيط عملياتنا.', data: { answer: 'We need to streamline our operations.' }, points: 15 }
  ]
};

export const C1_U9_L3: LessonContent = {
  lessonId: 'C1-u09-l03',
  passingScore: 75,
  vocab: [
    { english: 'articulate', arabic: 'يعبر بوضوح', example: 'Articulate your ideas.', exampleAr: 'عبّر عن أفكارك بوضوح.' },
    { english: 'convey', arabic: 'ينقل', example: 'Convey the message.', exampleAr: 'انقل الرسالة.' },
    { english: 'clarify', arabic: 'يوضح', example: 'Clarify your position.', exampleAr: 'وضح موقفك.' },
    { english: 'reiterate', arabic: 'يكرر', example: 'Reiterate the main points.', exampleAr: 'كرر النقاط الرئيسية.' },
    { english: 'elaborate', arabic: 'يفصّل', example: 'Elaborate on this.', exampleAr: 'فصّل في هذا.' },
    { english: 'summarize', arabic: 'يلخص', example: 'Summarize briefly.', exampleAr: 'لخص بإيجاز.' },
    { english: 'paraphrase', arabic: 'يعيد الصياغة', example: 'Paraphrase the idea.', exampleAr: 'أعد صياغة الفكرة.' },
    { english: 'emphasize', arabic: 'يؤكد', example: 'Emphasize the importance.', exampleAr: 'أكد على الأهمية.' }
  ],
  sentences: [
    { english: 'Can you articulate your vision?', arabic: 'هل يمكنك التعبير عن رؤيتك بوضوح؟' },
    { english: 'Let me clarify what I meant.', arabic: 'دعني أوضح ما قصدته.' },
    { english: 'I\'d like to reiterate our commitment.', arabic: 'أود أن أكرر التزامنا.' },
    { english: 'Could you elaborate on that point?', arabic: 'هل يمكنك التفصيل في تلك النقطة؟' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "reiterate"؟', data: { options: ['يكرر', 'يحذف', 'يغير', 'يبدأ'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ the message. (انقل)', data: { answer: 'Convey' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'articulate', arabic: 'يعبر بوضوح' }, { english: 'elaborate', arabic: 'يفصّل' }, { english: 'emphasize', arabic: 'يؤكد' }] } },
    { type: 'mcq', promptAr: 'ما معنى "paraphrase"؟', data: { options: ['يعيد الصياغة', 'ينسخ', 'يحذف', 'يضيف'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "clarify"؟', data: { options: ['يوضح', 'يعقد', 'يخفي', 'يغير'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ briefly. (لخص)', data: { answer: 'Summarize' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هل يمكنك التفصيل في تلك النقطة؟', data: { answer: 'Could you elaborate on that point?' }, points: 15 }
  ]
};

export const C1_U9_L4: LessonContent = {
  lessonId: 'C1-u09-l04',
  passingScore: 75,
  vocab: [
    { english: 'correspondence', arabic: 'مراسلات', example: 'Business correspondence.', exampleAr: 'مراسلات تجارية.' },
    { english: 'inquiry', arabic: 'استفسار', example: 'Make an inquiry.', exampleAr: 'قدم استفساراً.' },
    { english: 'quotation', arabic: 'عرض سعر', example: 'Request a quotation.', exampleAr: 'اطلب عرض سعر.' },
    { english: 'invoice', arabic: 'فاتورة', example: 'Send an invoice.', exampleAr: 'أرسل فاتورة.' },
    { english: 'receipt', arabic: 'إيصال', example: 'Keep the receipt.', exampleAr: 'احتفظ بالإيصال.' },
    { english: 'confidential', arabic: 'سري', example: 'Confidential information.', exampleAr: 'معلومات سرية.' },
    { english: 'recipient', arabic: 'مستلم', example: 'The recipient received...', exampleAr: 'المستلم تلقى...' },
    { english: 'attachment', arabic: 'مرفق', example: 'See attachment.', exampleAr: 'انظر المرفق.' }
  ],
  sentences: [
    { english: 'Please find the invoice attached.', arabic: 'من فضلك اطلع على الفاتورة المرفقة.' },
    { english: 'This is a confidential document.', arabic: 'هذه وثيقة سرية.' },
    { english: 'I\'m writing in response to your inquiry.', arabic: 'أكتب رداً على استفسارك.' },
    { english: 'Please confirm receipt of this email.', arabic: 'يرجى تأكيد استلام هذا البريد.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "quotation" في سياق العمل؟', data: { options: ['عرض سعر', 'اقتباس', 'جملة', 'كلمة'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ information. (سرية)', data: { answer: 'Confidential' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'invoice', arabic: 'فاتورة' }, { english: 'receipt', arabic: 'إيصال' }, { english: 'attachment', arabic: 'مرفق' }] } },
    { type: 'mcq', promptAr: 'ما معنى "recipient"؟', data: { options: ['مستلم', 'مرسل', 'كاتب', 'قارئ'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "correspondence"؟', data: { options: ['مراسلات', 'مكالمات', 'اجتماعات', 'محادثات'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Make an _____. (استفسار)', data: { answer: 'inquiry' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: من فضلك اطلع على الفاتورة المرفقة.', data: { answer: 'Please find the invoice attached.' }, points: 15 }
  ]
};

export const C1_U9_L5: LessonContent = {
  lessonId: 'C1-u09-l05',
  passingScore: 75,
  vocab: [
    { english: 'agenda', arabic: 'جدول أعمال', example: 'Set the agenda.', exampleAr: 'ضع جدول الأعمال.' },
    { english: 'minutes', arabic: 'محضر', example: 'Take minutes.', exampleAr: 'دوّن المحضر.' },
    { english: 'motion', arabic: 'اقتراح', example: 'Move a motion.', exampleAr: 'قدم اقتراحاً.' },
    { english: 'resolution', arabic: 'قرار', example: 'Pass a resolution.', exampleAr: 'أصدر قراراً.' },
    { english: 'adjourn', arabic: 'يؤجل', example: 'Adjourn the meeting.', exampleAr: 'أجّل الاجتماع.' },
    { english: 'quorum', arabic: 'نصاب قانوني', example: 'We have a quorum.', exampleAr: 'لدينا نصاب قانوني.' },
    { english: 'chair', arabic: 'يترأس', example: 'Chair the meeting.', exampleAr: 'ترأس الاجتماع.' },
    { english: 'stakeholder', arabic: 'أصحاب المصلحة', example: 'Key stakeholders.', exampleAr: 'أصحاب المصلحة الرئيسيين.' }
  ],
  sentences: [
    { english: 'The agenda has been distributed.', arabic: 'تم توزيع جدول الأعمال.' },
    { english: 'Who will take the minutes?', arabic: 'من سيدوّن المحضر؟' },
    { english: 'The resolution was passed unanimously.', arabic: 'القرار صدر بالإجماع.' },
    { english: 'I move to adjourn the meeting.', arabic: 'أقترح تأجيل الاجتماع.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "minutes" في سياق الاجتماعات؟', data: { options: ['محضر', 'دقائق', 'وقت', 'لحظات'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Pass a _____. (قرار)', data: { answer: 'resolution' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'agenda', arabic: 'جدول أعمال' }, { english: 'quorum', arabic: 'نصاب قانوني' }, { english: 'adjourn', arabic: 'يؤجل' }] } },
    { type: 'mcq', promptAr: 'ما معنى "chair" كفعل؟', data: { options: ['يترأس', 'يجلس', 'يقف', 'يغادر'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "motion"؟', data: { options: ['اقتراح', 'حركة', 'قرار', 'رفض'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Key _____. (أصحاب المصلحة)', data: { answer: 'stakeholders' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: القرار صدر بالإجماع.', data: { answer: 'The resolution was passed unanimously.' }, points: 15 }
  ]
};

export const c1Unit9Lessons: Record<string, LessonContent> = {
  'C1-u09-l01': C1_U9_L1,
  'C1-u09-l02': C1_U9_L2,
  'C1-u09-l03': C1_U9_L3,
  'C1-u09-l04': C1_U9_L4,
  'C1-u09-l05': C1_U9_L5,
};

import { LessonContent } from './a1-lessons';

// Unit 3: Business Terms - مصطلحات العمل
export const B2_U3_L1: LessonContent = {
  lessonId: 'B2-u03-l01',
  passingScore: 70,
  vocab: [
    { english: 'corporation', arabic: 'شركة كبرى', example: 'She works for a large corporation.', exampleAr: 'تعمل في شركة كبرى.' },
    { english: 'subsidiary', arabic: 'شركة تابعة', example: 'Our subsidiary is in Dubai.', exampleAr: 'شركتنا التابعة في دبي.' },
    { english: 'headquarters', arabic: 'مقر رئيسي', example: 'The headquarters is in London.', exampleAr: 'المقر الرئيسي في لندن.' },
    { english: 'merger', arabic: 'اندماج', example: 'The merger was successful.', exampleAr: 'كان الاندماج ناجحاً.' },
    { english: 'acquisition', arabic: 'استحواذ', example: 'They announced an acquisition.', exampleAr: 'أعلنوا عن استحواذ.' },
    { english: 'stakeholder', arabic: 'أصحاب المصلحة', example: 'Meet with stakeholders.', exampleAr: 'اجتمع مع أصحاب المصلحة.' },
    { english: 'shareholder', arabic: 'مساهم', example: 'Shareholders received dividends.', exampleAr: 'تلقى المساهمون أرباحاً.' },
    { english: 'board of directors', arabic: 'مجلس الإدارة', example: 'The board of directors approved it.', exampleAr: 'وافق مجلس الإدارة عليه.' }
  ],
  sentences: [
    { english: 'The merger will create a larger corporation.', arabic: 'الاندماج سيخلق شركة أكبر.' },
    { english: 'Stakeholders must be informed of changes.', arabic: 'يجب إبلاغ أصحاب المصلحة بالتغييرات.' },
    { english: 'The acquisition was worth millions.', arabic: 'كان الاستحواذ بقيمة ملايين.' },
    { english: 'The board of directors makes strategic decisions.', arabic: 'مجلس الإدارة يتخذ القرارات الاستراتيجية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "merger"؟', data: { options: ['اندماج', 'استحواذ', 'شراكة', 'منافسة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ is in London. (مقر رئيسي)', data: { answer: 'headquarters' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'shareholder', arabic: 'مساهم' }, { english: 'subsidiary', arabic: 'شركة تابعة' }, { english: 'corporation', arabic: 'شركة كبرى' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "استحواذ"؟', data: { options: ['acquisition', 'merger', 'partnership', 'investment'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "stakeholder"؟', data: { options: ['أصحاب المصلحة', 'مساهم', 'مدير', 'موظف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The _____ approved it. (مجلس الإدارة)', data: { answer: 'board of directors' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الاندماج سيخلق شركة أكبر.', data: { answer: 'The merger will create a larger corporation.' }, points: 15 }
  ]
};

export const B2_U3_L2: LessonContent = {
  lessonId: 'B2-u03-l02',
  passingScore: 70,
  vocab: [
    { english: 'revenue', arabic: 'إيرادات', example: 'Revenue increased this quarter.', exampleAr: 'زادت الإيرادات هذا الربع.' },
    { english: 'profit', arabic: 'ربح', example: 'The company made a profit.', exampleAr: 'حققت الشركة ربحاً.' },
    { english: 'loss', arabic: 'خسارة', example: 'They reported a loss.', exampleAr: 'أبلغوا عن خسارة.' },
    { english: 'budget', arabic: 'ميزانية', example: 'Stay within budget.', exampleAr: 'ابق ضمن الميزانية.' },
    { english: 'investment', arabic: 'استثمار', example: 'It\'s a good investment.', exampleAr: 'إنه استثمار جيد.' },
    { english: 'ROI', arabic: 'عائد الاستثمار', example: 'Calculate the ROI.', exampleAr: 'احسب عائد الاستثمار.' },
    { english: 'fiscal year', arabic: 'سنة مالية', example: 'The fiscal year ends in December.', exampleAr: 'السنة المالية تنتهي في ديسمبر.' },
    { english: 'quarterly', arabic: 'ربع سنوي', example: 'We have quarterly reviews.', exampleAr: 'لدينا مراجعات ربع سنوية.' }
  ],
  sentences: [
    { english: 'Revenue growth exceeded expectations.', arabic: 'نمو الإيرادات تجاوز التوقعات.' },
    { english: 'We need to stay within budget.', arabic: 'نحتاج البقاء ضمن الميزانية.' },
    { english: 'The ROI on this project was excellent.', arabic: 'عائد الاستثمار على هذا المشروع كان ممتازاً.' },
    { english: 'Quarterly reports show positive trends.', arabic: 'التقارير الربع سنوية تُظهر اتجاهات إيجابية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "revenue"؟', data: { options: ['إيرادات', 'ربح', 'خسارة', 'ميزانية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The company made a _____. (ربح)', data: { answer: 'profit' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "سنة مالية"؟', data: { options: ['fiscal year', 'financial year', 'business year', 'calendar year'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['budget', 'within', 'Stay'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "ROI"؟', data: { options: ['عائد الاستثمار', 'ربح', 'خسارة', 'ميزانية'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'We have _____ reviews. (ربع سنوية)', data: { answer: 'quarterly' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: نمو الإيرادات تجاوز التوقعات.', data: { answer: 'Revenue growth exceeded expectations.' }, points: 15 }
  ]
};

export const B2_U3_L3: LessonContent = {
  lessonId: 'B2-u03-l03',
  passingScore: 70,
  vocab: [
    { english: 'strategy', arabic: 'استراتيجية', example: 'Develop a new strategy.', exampleAr: 'طوّر استراتيجية جديدة.' },
    { english: 'implementation', arabic: 'تنفيذ', example: 'Focus on implementation.', exampleAr: 'ركّز على التنفيذ.' },
    { english: 'initiative', arabic: 'مبادرة', example: 'Launch a new initiative.', exampleAr: 'أطلق مبادرة جديدة.' },
    { english: 'scalable', arabic: 'قابل للتوسع', example: 'Is this solution scalable?', exampleAr: 'هل هذا الحل قابل للتوسع؟' },
    { english: 'sustainable', arabic: 'مستدام', example: 'We need sustainable growth.', exampleAr: 'نحتاج نمواً مستداماً.' },
    { english: 'competitive advantage', arabic: 'ميزة تنافسية', example: 'Innovation gives competitive advantage.', exampleAr: 'الابتكار يمنح ميزة تنافسية.' },
    { english: 'market share', arabic: 'حصة سوقية', example: 'Increase market share.', exampleAr: 'زد الحصة السوقية.' },
    { english: 'benchmark', arabic: 'معيار', example: 'Set industry benchmarks.', exampleAr: 'ضع معايير الصناعة.' }
  ],
  sentences: [
    { english: 'Our strategy focuses on innovation.', arabic: 'استراتيجيتنا تركز على الابتكار.' },
    { english: 'Successful implementation requires teamwork.', arabic: 'التنفيذ الناجح يتطلب عملاً جماعياً.' },
    { english: 'Sustainable practices benefit everyone.', arabic: 'الممارسات المستدامة تفيد الجميع.' },
    { english: 'We aim to increase our market share.', arabic: 'نهدف إلى زيادة حصتنا السوقية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "scalable"؟', data: { options: ['قابل للتوسع', 'مستدام', 'تنافسي', 'مبتكر'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Launch a new _____. (مبادرة)', data: { answer: 'initiative' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'strategy', arabic: 'استراتيجية' }, { english: 'benchmark', arabic: 'معيار' }, { english: 'sustainable', arabic: 'مستدام' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "ميزة تنافسية"؟', data: { options: ['competitive advantage', 'market advantage', 'business advantage', 'sales advantage'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "implementation"؟', data: { options: ['تنفيذ', 'تخطيط', 'استراتيجية', 'مبادرة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Increase _____ _____. (حصة سوقية)', data: { answer: 'market share' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: استراتيجيتنا تركز على الابتكار.', data: { answer: 'Our strategy focuses on innovation.' }, points: 15 }
  ]
};

export const B2_U3_L4: LessonContent = {
  lessonId: 'B2-u03-l04',
  passingScore: 70,
  vocab: [
    { english: 'negotiate', arabic: 'يتفاوض', example: 'Negotiate the contract terms.', exampleAr: 'تفاوض على شروط العقد.' },
    { english: 'proposal', arabic: 'عرض', example: 'Submit a proposal.', exampleAr: 'قدّم عرضاً.' },
    { english: 'tender', arabic: 'مناقصة', example: 'Win the tender.', exampleAr: 'افز بالمناقصة.' },
    { english: 'bid', arabic: 'عطاء', example: 'Submit your bid.', exampleAr: 'قدّم عطاءك.' },
    { english: 'procurement', arabic: 'شراء', example: 'Handle procurement.', exampleAr: 'تولّ الشراء.' },
    { english: 'vendor', arabic: 'مورد', example: 'Select a vendor.', exampleAr: 'اختر مورداً.' },
    { english: 'contract', arabic: 'عقد', example: 'Sign the contract.', exampleAr: 'وقّع العقد.' },
    { english: 'terms and conditions', arabic: 'الشروط والأحكام', example: 'Read the terms and conditions.', exampleAr: 'اقرأ الشروط والأحكام.' }
  ],
  sentences: [
    { english: 'We\'re negotiating better terms.', arabic: 'نحن نتفاوض على شروط أفضل.' },
    { english: 'The proposal was accepted.', arabic: 'تم قبول العرض.' },
    { english: 'Procurement must follow proper procedures.', arabic: 'الشراء يجب أن يتبع الإجراءات الصحيحة.' },
    { english: 'Review the terms and conditions carefully.', arabic: 'راجع الشروط والأحكام بعناية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "tender"؟', data: { options: ['مناقصة', 'عقد', 'عرض', 'شراء'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Select a _____. (مورد)', data: { answer: 'vendor' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "عطاء"؟', data: { options: ['bid', 'tender', 'proposal', 'offer'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['contract', 'the', 'Sign'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "procurement"؟', data: { options: ['شراء', 'بيع', 'تفاوض', 'عقد'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Submit a _____. (عرض)', data: { answer: 'proposal' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: نحن نتفاوض على شروط أفضل.', data: { answer: 'We\'re negotiating better terms.' }, points: 15 }
  ]
};

export const B2_U3_L5: LessonContent = {
  lessonId: 'B2-u03-l05',
  passingScore: 70,
  vocab: [
    { english: 'compliance', arabic: 'امتثال', example: 'Ensure compliance with regulations.', exampleAr: 'تأكد من الامتثال للوائح.' },
    { english: 'regulation', arabic: 'لائحة', example: 'Follow the regulations.', exampleAr: 'اتبع اللوائح.' },
    { english: 'audit', arabic: 'تدقيق', example: 'We have an annual audit.', exampleAr: 'لدينا تدقيق سنوي.' },
    { english: 'liability', arabic: 'مسؤولية قانونية', example: 'Limit your liability.', exampleAr: 'حدد مسؤوليتك القانونية.' },
    { english: 'intellectual property', arabic: 'ملكية فكرية', example: 'Protect intellectual property.', exampleAr: 'احمِ الملكية الفكرية.' },
    { english: 'patent', arabic: 'براءة اختراع', example: 'File a patent.', exampleAr: 'قدّم طلب براءة اختراع.' },
    { english: 'trademark', arabic: 'علامة تجارية', example: 'Register your trademark.', exampleAr: 'سجّل علامتك التجارية.' },
    { english: 'confidentiality', arabic: 'سرية', example: 'Maintain confidentiality.', exampleAr: 'حافظ على السرية.' }
  ],
  sentences: [
    { english: 'Compliance is essential for business.', arabic: 'الامتثال ضروري للأعمال.' },
    { english: 'The audit revealed no issues.', arabic: 'التدقيق لم يكشف عن مشاكل.' },
    { english: 'Intellectual property must be protected.', arabic: 'يجب حماية الملكية الفكرية.' },
    { english: 'Confidentiality agreements are standard.', arabic: 'اتفاقيات السرية قياسية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "compliance"؟', data: { options: ['امتثال', 'تدقيق', 'لائحة', 'قانون'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'File a _____. (براءة اختراع)', data: { answer: 'patent' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'audit', arabic: 'تدقيق' }, { english: 'trademark', arabic: 'علامة تجارية' }, { english: 'liability', arabic: 'مسؤولية قانونية' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "سرية"؟', data: { options: ['confidentiality', 'secrecy', 'privacy', 'security'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "intellectual property"؟', data: { options: ['ملكية فكرية', 'براءة اختراع', 'علامة تجارية', 'حقوق نشر'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Maintain _____. (السرية)', data: { answer: 'confidentiality' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الامتثال ضروري للأعمال.', data: { answer: 'Compliance is essential for business.' }, points: 15 }
  ]
};

export const b2Unit3Lessons: Record<string, LessonContent> = {
  'B2-u03-l01': B2_U3_L1,
  'B2-u03-l02': B2_U3_L2,
  'B2-u03-l03': B2_U3_L3,
  'B2-u03-l04': B2_U3_L4,
  'B2-u03-l05': B2_U3_L5,
};

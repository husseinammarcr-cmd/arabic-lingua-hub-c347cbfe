import { LessonContent } from './a1-lessons';

// Unit 8: Formal/Informal - رسمي/غير رسمي
export const B2_U8_L1: LessonContent = {
  lessonId: 'B2-u08-l01',
  passingScore: 70,
  vocab: [
    { english: 'Dear Sir/Madam', arabic: 'سيدي/سيدتي العزيز(ة)', example: 'Dear Sir/Madam, I am writing to...', exampleAr: 'سيدي/سيدتي العزيز(ة)، أكتب إليكم...' },
    { english: 'I am writing to inquire', arabic: 'أكتب للاستفسار', example: 'I am writing to inquire about...', exampleAr: 'أكتب للاستفسار عن...' },
    { english: 'I would appreciate', arabic: 'سأكون ممتناً', example: 'I would appreciate your response.', exampleAr: 'سأكون ممتناً لردكم.' },
    { english: 'Yours faithfully', arabic: 'المخلص لكم', example: 'Yours faithfully, [Name]', exampleAr: 'المخلص لكم، [الاسم]' },
    { english: 'Yours sincerely', arabic: 'مع خالص التحيات', example: 'Yours sincerely, [Name]', exampleAr: 'مع خالص التحيات، [الاسم]' },
    { english: 'I look forward to', arabic: 'أتطلع إلى', example: 'I look forward to your reply.', exampleAr: 'أتطلع إلى ردكم.' },
    { english: 'Please find attached', arabic: 'تجدون مرفقاً', example: 'Please find attached my CV.', exampleAr: 'تجدون مرفقاً سيرتي الذاتية.' },
    { english: 'I regret to inform', arabic: 'يؤسفني إبلاغكم', example: 'I regret to inform you that...', exampleAr: 'يؤسفني إبلاغكم أن...' }
  ],
  sentences: [
    { english: 'I am writing to inquire about job opportunities.', arabic: 'أكتب للاستفسار عن فرص العمل.' },
    { english: 'I would appreciate a prompt response.', arabic: 'سأكون ممتناً لرد سريع.' },
    { english: 'Please find attached the requested documents.', arabic: 'تجدون مرفقاً المستندات المطلوبة.' },
    { english: 'I look forward to hearing from you.', arabic: 'أتطلع إلى الاستماع منكم.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما الخاتمة المناسبة إذا لم تعرف اسم المستلم؟', data: { options: ['Yours faithfully', 'Yours sincerely', 'Best regards', 'Cheers'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'I _____ _____ to inquire about... (أكتب للاستفسار)', data: { answer: 'am writing' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'Dear Sir/Madam', arabic: 'سيدي/سيدتي العزيز(ة)' }, { english: 'Yours faithfully', arabic: 'المخلص لكم' }, { english: 'I regret to inform', arabic: 'يؤسفني إبلاغكم' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "تجدون مرفقاً"؟', data: { options: ['Please find attached', 'Please see attached', 'Attached please find', 'Find attached'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'متى نستخدم "Yours sincerely"؟', data: { options: ['عندما نعرف اسم المستلم', 'عندما لا نعرف اسم المستلم', 'للأصدقاء فقط', 'في أي وقت'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'I _____ _____ to hearing from you. (أتطلع)', data: { answer: 'look forward' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أكتب للاستفسار عن فرص العمل.', data: { answer: 'I am writing to inquire about job opportunities.' }, points: 15 }
  ]
};

export const B2_U8_L2: LessonContent = {
  lessonId: 'B2-u08-l02',
  passingScore: 70,
  vocab: [
    { english: 'Hey', arabic: 'مرحباً', example: 'Hey, what\'s up?', exampleAr: 'مرحباً، كيف الحال؟' },
    { english: 'What\'s up', arabic: 'كيف الحال', example: 'What\'s up? How are you doing?', exampleAr: 'كيف الحال؟ كيف أحوالك؟' },
    { english: 'gonna', arabic: 'سوف (عامية)', example: 'I\'m gonna go now.', exampleAr: 'سأذهب الآن.' },
    { english: 'wanna', arabic: 'أريد (عامية)', example: 'Wanna grab lunch?', exampleAr: 'تريد نتناول الغداء؟' },
    { english: 'gotta', arabic: 'يجب (عامية)', example: 'I gotta go.', exampleAr: 'يجب أن أذهب.' },
    { english: 'kinda', arabic: 'نوعاً ما', example: 'It\'s kinda cold today.', exampleAr: 'الجو بارد نوعاً ما اليوم.' },
    { english: 'Catch you later', arabic: 'أراك لاحقاً', example: 'Catch you later!', exampleAr: 'أراك لاحقاً!' },
    { english: 'No worries', arabic: 'لا تقلق', example: 'No worries, I\'ll handle it.', exampleAr: 'لا تقلق، سأتولى الأمر.' }
  ],
  sentences: [
    { english: 'Hey, wanna hang out this weekend?', arabic: 'مرحباً، تريد نخرج نهاية الأسبوع؟' },
    { english: 'I gotta finish this first.', arabic: 'يجب أن أنهي هذا أولاً.' },
    { english: 'It\'s kinda complicated.', arabic: 'الأمر معقد نوعاً ما.' },
    { english: 'No worries, take your time.', arabic: 'لا تقلق، خذ وقتك.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "gonna"؟', data: { options: ['سوف', 'أريد', 'يجب', 'نوعاً ما'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ grab lunch? (تريد)', data: { answer: 'Wanna' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "لا تقلق"؟', data: { options: ['No worries', 'No problem', 'Don\'t worry', 'It\'s okay'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['later', 'you', 'Catch'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "gotta"؟', data: { options: ['يجب', 'سوف', 'أريد', 'ربما'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'It\'s _____ cold today. (نوعاً ما)', data: { answer: 'kinda' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: مرحباً، تريد نخرج نهاية الأسبوع؟', data: { answer: 'Hey, wanna hang out this weekend?' }, points: 15 }
  ]
};

export const B2_U8_L3: LessonContent = {
  lessonId: 'B2-u08-l03',
  passingScore: 70,
  vocab: [
    { english: 'However', arabic: 'ومع ذلك', example: 'However, we must consider...', exampleAr: 'ومع ذلك، يجب أن ننظر...' },
    { english: 'Furthermore', arabic: 'علاوة على ذلك', example: 'Furthermore, the data shows...', exampleAr: 'علاوة على ذلك، البيانات تُظهر...' },
    { english: 'Nevertheless', arabic: 'رغم ذلك', example: 'Nevertheless, we proceeded.', exampleAr: 'رغم ذلك، استمررنا.' },
    { english: 'Therefore', arabic: 'لذلك', example: 'Therefore, we conclude that...', exampleAr: 'لذلك، نستنتج أن...' },
    { english: 'But', arabic: 'لكن', example: 'But I disagree.', exampleAr: 'لكن أختلف.' },
    { english: 'So', arabic: 'لذا', example: 'So what happened next?', exampleAr: 'لذا ماذا حدث بعدها؟' },
    { english: 'Also', arabic: 'أيضاً', example: 'Also, don\'t forget...', exampleAr: 'أيضاً، لا تنسى...' },
    { english: 'Anyway', arabic: 'على أي حال', example: 'Anyway, let\'s move on.', exampleAr: 'على أي حال، لنتابع.' }
  ],
  sentences: [
    { english: 'The project succeeded. However, there were challenges.', arabic: 'نجح المشروع. ومع ذلك، كانت هناك تحديات.' },
    { english: 'Furthermore, the results exceeded expectations.', arabic: 'علاوة على ذلك، النتائج تجاوزت التوقعات.' },
    { english: 'So, what are we gonna do about it?', arabic: 'لذا، ماذا سنفعل حيال ذلك؟' },
    { english: 'Anyway, let\'s get back to work.', arabic: 'على أي حال، لنعد للعمل.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'أي كلمة رسمية أكثر؟', data: { options: ['Furthermore', 'Also', 'Plus', 'And'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____, we must consider alternatives. (ومع ذلك)', data: { answer: 'However' } },
    { type: 'matching', promptAr: 'طابق الرسمي بغير الرسمي:', data: { pairs: [{ english: 'Therefore', arabic: 'So' }, { english: 'However', arabic: 'But' }, { english: 'Furthermore', arabic: 'Also' }] } },
    { type: 'mcq', promptAr: 'ما البديل غير الرسمي لـ "Nevertheless"؟', data: { options: ['But still', 'Furthermore', 'Therefore', 'Moreover'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'أي كلمة تستخدم في المحادثات غير الرسمية؟', data: { options: ['Anyway', 'Furthermore', 'Nevertheless', 'Moreover'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____, the data shows improvement. (علاوة على ذلك)', data: { answer: 'Furthermore' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: ومع ذلك، كانت هناك تحديات.', data: { answer: 'However, there were challenges.' }, points: 15 }
  ]
};

export const B2_U8_L4: LessonContent = {
  lessonId: 'B2-u08-l04',
  passingScore: 70,
  vocab: [
    { english: 'request', arabic: 'يطلب', example: 'I request your assistance.', exampleAr: 'أطلب مساعدتكم.' },
    { english: 'ask', arabic: 'يسأل', example: 'Can I ask you something?', exampleAr: 'هل يمكنني سؤالك شيئاً؟' },
    { english: 'require', arabic: 'يتطلب', example: 'This requires your approval.', exampleAr: 'هذا يتطلب موافقتكم.' },
    { english: 'need', arabic: 'يحتاج', example: 'I need your help.', exampleAr: 'أحتاج مساعدتك.' },
    { english: 'assist', arabic: 'يساعد', example: 'Could you assist me?', exampleAr: 'هل يمكنك مساعدتي؟' },
    { english: 'help', arabic: 'يساعد', example: 'Can you help me?', exampleAr: 'هل يمكنك مساعدتي؟' },
    { english: 'inform', arabic: 'يُعلِم', example: 'I wish to inform you...', exampleAr: 'أود إعلامكم...' },
    { english: 'tell', arabic: 'يخبر', example: 'I wanted to tell you...', exampleAr: 'أردت أن أخبرك...' }
  ],
  sentences: [
    { english: 'I would like to request a meeting.', arabic: 'أود أن أطلب اجتماعاً.' },
    { english: 'Can I ask you for a favor?', arabic: 'هل يمكنني طلب معروف منك؟' },
    { english: 'This task requires careful attention.', arabic: 'هذه المهمة تتطلب اهتماماً دقيقاً.' },
    { english: 'I wanted to tell you about the changes.', arabic: 'أردت أن أخبرك عن التغييرات.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'أي كلمة أكثر رسمية؟', data: { options: ['request', 'ask', 'want', 'need'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'I wish to _____ you that... (أُعلِم)', data: { answer: 'inform' } },
    { type: 'matching', promptAr: 'طابق الرسمي بغير الرسمي:', data: { pairs: [{ english: 'request', arabic: 'ask' }, { english: 'require', arabic: 'need' }, { english: 'assist', arabic: 'help' }] } },
    { type: 'mcq', promptAr: 'ما البديل الرسمي لـ "tell"؟', data: { options: ['inform', 'say', 'speak', 'talk'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'أي جملة رسمية أكثر؟', data: { options: ['I would like to request...', 'I want to ask...', 'Can I have...', 'I need...'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'This _____ your approval. (يتطلب)', data: { answer: 'requires' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أود إعلامكم بالتغييرات.', data: { answer: 'I wish to inform you about the changes.' }, points: 15 }
  ]
};

export const B2_U8_L5: LessonContent = {
  lessonId: 'B2-u08-l05',
  passingScore: 70,
  vocab: [
    { english: 'Could you possibly', arabic: 'هل يمكنك ربما', example: 'Could you possibly help me?', exampleAr: 'هل يمكنك ربما مساعدتي؟' },
    { english: 'Would you mind', arabic: 'هل تمانع', example: 'Would you mind waiting?', exampleAr: 'هل تمانع في الانتظار؟' },
    { english: 'I was wondering if', arabic: 'كنت أتساءل إذا', example: 'I was wondering if you could help.', exampleAr: 'كنت أتساءل إذا كنت تستطيع المساعدة.' },
    { english: 'Can you', arabic: 'هل يمكنك', example: 'Can you help me?', exampleAr: 'هل يمكنك مساعدتي؟' },
    { english: 'I would be grateful if', arabic: 'سأكون ممتناً لو', example: 'I would be grateful if you could...', exampleAr: 'سأكون ممتناً لو استطعت...' },
    { english: 'Would it be possible', arabic: 'هل من الممكن', example: 'Would it be possible to reschedule?', exampleAr: 'هل من الممكن إعادة الجدولة؟' },
    { english: 'I\'d appreciate it if', arabic: 'سأقدر لو', example: 'I\'d appreciate it if you could reply.', exampleAr: 'سأقدر لو استطعت الرد.' },
    { english: 'Please', arabic: 'من فضلك', example: 'Please send the document.', exampleAr: 'من فضلك أرسل المستند.' }
  ],
  sentences: [
    { english: 'Could you possibly send me the report?', arabic: 'هل يمكنك ربما إرسال التقرير لي؟' },
    { english: 'Would you mind closing the door?', arabic: 'هل تمانع في إغلاق الباب؟' },
    { english: 'I was wondering if you had a moment.', arabic: 'كنت أتساءل إذا كان لديك لحظة.' },
    { english: 'I would be grateful if you could review this.', arabic: 'سأكون ممتناً لو استطعت مراجعة هذا.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'أي طريقة أكثر تأدباً للطلب؟', data: { options: ['Could you possibly', 'Can you', 'Will you', 'Do you'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'I _____ _____ if you had time. (كنت أتساءل)', data: { answer: 'was wondering' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'Could you possibly', arabic: 'هل يمكنك ربما' }, { english: 'Would you mind', arabic: 'هل تمانع' }, { english: 'Would it be possible', arabic: 'هل من الممكن' }] } },
    { type: 'mcq', promptAr: 'ما الطريقة غير الرسمية لـ "Would you mind"؟', data: { options: ['Can you', 'Could you possibly', 'I would appreciate', 'I was wondering'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'أي عبارة تستخدم في الطلبات المهذبة جداً؟', data: { options: ['I would be grateful if', 'Can you', 'Will you', 'Do you mind'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ it be possible to meet tomorrow? (هل من الممكن)', data: { answer: 'Would' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هل يمكنك ربما إرسال التقرير لي؟', data: { answer: 'Could you possibly send me the report?' }, points: 15 }
  ]
};

export const b2Unit8Lessons: Record<string, LessonContent> = {
  'B2-u08-l01': B2_U8_L1,
  'B2-u08-l02': B2_U8_L2,
  'B2-u08-l03': B2_U8_L3,
  'B2-u08-l04': B2_U8_L4,
  'B2-u08-l05': B2_U8_L5,
};

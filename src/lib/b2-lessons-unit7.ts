import { LessonContent } from './a1-lessons';

// Unit 7: Idioms & Phrasal Verbs - تعبيرات وأفعال مركبة
export const B2_U7_L1: LessonContent = {
  lessonId: 'B2-u07-l01',
  passingScore: 70,
  vocab: [
    { english: 'break down', arabic: 'يتعطل / يحلل', example: 'The car broke down.', exampleAr: 'تعطلت السيارة.' },
    { english: 'bring up', arabic: 'يربي / يثير', example: 'She brought up an important point.', exampleAr: 'أثارت نقطة مهمة.' },
    { english: 'carry on', arabic: 'يستمر', example: 'Carry on with your work.', exampleAr: 'استمر في عملك.' },
    { english: 'come across', arabic: 'يصادف', example: 'I came across an old photo.', exampleAr: 'صادفت صورة قديمة.' },
    { english: 'figure out', arabic: 'يكتشف', example: 'I figured out the answer.', exampleAr: 'اكتشفت الجواب.' },
    { english: 'get along', arabic: 'ينسجم', example: 'They get along well.', exampleAr: 'ينسجمون جيداً.' },
    { english: 'give up', arabic: 'يستسلم', example: 'Never give up.', exampleAr: 'لا تستسلم أبداً.' },
    { english: 'look forward to', arabic: 'يتطلع إلى', example: 'I look forward to meeting you.', exampleAr: 'أتطلع إلى مقابلتك.' }
  ],
  sentences: [
    { english: 'The machine broke down during production.', arabic: 'تعطلت الآلة خلال الإنتاج.' },
    { english: 'He brought up the issue in the meeting.', arabic: 'أثار القضية في الاجتماع.' },
    { english: 'I came across some interesting research.', arabic: 'صادفت بعض الأبحاث المثيرة.' },
    { english: 'We\'re looking forward to the event.', arabic: 'نتطلع إلى الحدث.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "give up"؟', data: { options: ['يستسلم', 'يستمر', 'يبدأ', 'ينتهي'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'I _____ _____ the answer. (اكتشفت)', data: { answer: 'figured out' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'carry on', arabic: 'يستمر' }, { english: 'get along', arabic: 'ينسجم' }, { english: 'break down', arabic: 'يتعطل' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يصادف"؟', data: { options: ['come across', 'come by', 'come in', 'come out'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "look forward to"؟', data: { options: ['يتطلع إلى', 'ينظر إلى', 'يبحث عن', 'يهتم بـ'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'They _____ _____ well. (ينسجمون)', data: { answer: 'get along' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أثار القضية في الاجتماع.', data: { answer: 'He brought up the issue in the meeting.' }, points: 15 }
  ]
};

export const B2_U7_L2: LessonContent = {
  lessonId: 'B2-u07-l02',
  passingScore: 70,
  vocab: [
    { english: 'put off', arabic: 'يؤجل', example: 'Don\'t put off important tasks.', exampleAr: 'لا تؤجل المهام المهمة.' },
    { english: 'run out of', arabic: 'ينفد من', example: 'We ran out of time.', exampleAr: 'نفد الوقت منا.' },
    { english: 'set up', arabic: 'يؤسس / ينصب', example: 'We set up the equipment.', exampleAr: 'نصبنا المعدات.' },
    { english: 'take over', arabic: 'يتولى', example: 'She took over the project.', exampleAr: 'تولت المشروع.' },
    { english: 'turn down', arabic: 'يرفض', example: 'He turned down the offer.', exampleAr: 'رفض العرض.' },
    { english: 'work out', arabic: 'يحل / يتمرن', example: 'Everything worked out fine.', exampleAr: 'سارت الأمور على ما يرام.' },
    { english: 'point out', arabic: 'يشير إلى', example: 'She pointed out a mistake.', exampleAr: 'أشارت إلى خطأ.' },
    { english: 'deal with', arabic: 'يتعامل مع', example: 'How do you deal with stress?', exampleAr: 'كيف تتعامل مع التوتر؟' }
  ],
  sentences: [
    { english: 'They put off the meeting until next week.', arabic: 'أجلوا الاجتماع إلى الأسبوع القادم.' },
    { english: 'I ran out of ideas.', arabic: 'نفدت أفكاري.' },
    { english: 'He turned down a job opportunity.', arabic: 'رفض فرصة عمل.' },
    { english: 'She pointed out several errors.', arabic: 'أشارت إلى عدة أخطاء.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "turn down"؟', data: { options: ['يرفض', 'يقبل', 'يؤجل', 'يبدأ'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'We _____ _____ of time. (نفد منا)', data: { answer: 'ran out' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يتولى"؟', data: { options: ['take over', 'take on', 'take in', 'take up'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['out', 'pointed', 'She', 'a mistake'], correctOrder: [2, 1, 0, 3] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "deal with"؟', data: { options: ['يتعامل مع', 'يتفق مع', 'يختلف مع', 'يعمل مع'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Everything _____ _____ fine. (سارت على ما يرام)', data: { answer: 'worked out' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أجلوا الاجتماع إلى الأسبوع القادم.', data: { answer: 'They put off the meeting until next week.' }, points: 15 }
  ]
};

export const B2_U7_L3: LessonContent = {
  lessonId: 'B2-u07-l03',
  passingScore: 70,
  vocab: [
    { english: 'a piece of cake', arabic: 'سهل جداً', example: 'The test was a piece of cake.', exampleAr: 'كان الاختبار سهلاً جداً.' },
    { english: 'hit the nail on the head', arabic: 'أصاب كبد الحقيقة', example: 'You hit the nail on the head.', exampleAr: 'أصبت كبد الحقيقة.' },
    { english: 'under the weather', arabic: 'مريض', example: 'I\'m feeling under the weather.', exampleAr: 'أشعر بأنني مريض.' },
    { english: 'break the ice', arabic: 'يكسر الحاجز', example: 'A joke can break the ice.', exampleAr: 'النكتة يمكن أن تكسر الحاجز.' },
    { english: 'cost an arm and a leg', arabic: 'مكلف جداً', example: 'This phone cost an arm and a leg.', exampleAr: 'هذا الهاتف مكلف جداً.' },
    { english: 'once in a blue moon', arabic: 'نادراً جداً', example: 'I see him once in a blue moon.', exampleAr: 'أراه نادراً جداً.' },
    { english: 'call it a day', arabic: 'ينهي العمل', example: 'Let\'s call it a day.', exampleAr: 'لننهِ العمل اليوم.' },
    { english: 'the ball is in your court', arabic: 'القرار بيدك', example: 'The ball is in your court now.', exampleAr: 'القرار بيدك الآن.' }
  ],
  sentences: [
    { english: 'That math problem was a piece of cake.', arabic: 'تلك المسألة الرياضية كانت سهلة جداً.' },
    { english: 'You hit the nail on the head with that analysis.', arabic: 'أصبت كبد الحقيقة بذلك التحليل.' },
    { english: 'I visit my hometown once in a blue moon.', arabic: 'أزور مسقط رأسي نادراً جداً.' },
    { english: 'It\'s late, let\'s call it a day.', arabic: 'الوقت متأخر، لننهِ العمل.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "under the weather"؟', data: { options: ['مريض', 'سعيد', 'غاضب', 'متعب'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The test was a _____ of _____. (سهل جداً)', data: { answer: 'piece of cake' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'break the ice', arabic: 'يكسر الحاجز' }, { english: 'call it a day', arabic: 'ينهي العمل' }, { english: 'once in a blue moon', arabic: 'نادراً جداً' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "مكلف جداً"؟', data: { options: ['cost an arm and a leg', 'cost a fortune', 'cost a lot', 'very expensive'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "the ball is in your court"؟', data: { options: ['القرار بيدك', 'أنت مشغول', 'أنت فائز', 'أنت مسؤول'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'You _____ the _____ on the head. (أصبت كبد الحقيقة)', data: { answer: 'hit the nail' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أزور مسقط رأسي نادراً جداً.', data: { answer: 'I visit my hometown once in a blue moon.' }, points: 15 }
  ]
};

export const B2_U7_L4: LessonContent = {
  lessonId: 'B2-u07-l04',
  passingScore: 70,
  vocab: [
    { english: 'speak your mind', arabic: 'يعبر عن رأيه', example: 'Don\'t be afraid to speak your mind.', exampleAr: 'لا تخف من التعبير عن رأيك.' },
    { english: 'on the same page', arabic: 'متفقون', example: 'Let\'s make sure we\'re on the same page.', exampleAr: 'لنتأكد أننا متفقون.' },
    { english: 'think outside the box', arabic: 'يفكر بشكل إبداعي', example: 'We need to think outside the box.', exampleAr: 'نحتاج أن نفكر بشكل إبداعي.' },
    { english: 'get the ball rolling', arabic: 'يبدأ العمل', example: 'Let\'s get the ball rolling.', exampleAr: 'لنبدأ العمل.' },
    { english: 'cut to the chase', arabic: 'يدخل في الموضوع', example: 'Let me cut to the chase.', exampleAr: 'دعني أدخل في الموضوع.' },
    { english: 'up in the air', arabic: 'غير محسوم', example: 'The plans are still up in the air.', exampleAr: 'الخطط لا تزال غير محسومة.' },
    { english: 'back to square one', arabic: 'من البداية', example: 'We\'re back to square one.', exampleAr: 'عدنا من البداية.' },
    { english: 'learn the ropes', arabic: 'يتعلم الأساسيات', example: 'It takes time to learn the ropes.', exampleAr: 'يستغرق وقتاً لتعلم الأساسيات.' }
  ],
  sentences: [
    { english: 'I appreciate people who speak their mind.', arabic: 'أقدر الناس الذين يعبرون عن آرائهم.' },
    { english: 'The decision is still up in the air.', arabic: 'القرار لا يزال غير محسوم.' },
    { english: 'After the failure, we\'re back to square one.', arabic: 'بعد الفشل، عدنا من البداية.' },
    { english: 'New employees need time to learn the ropes.', arabic: 'الموظفون الجدد يحتاجون وقتاً لتعلم الأساسيات.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "up in the air"؟', data: { options: ['غير محسوم', 'في السماء', 'سعيد', 'منتهي'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Let\'s _____ to the _____. (ندخل في الموضوع)', data: { answer: 'cut to the chase' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يفكر بشكل إبداعي"؟', data: { options: ['think outside the box', 'think inside the box', 'think about the box', 'think of the box'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['rolling', 'ball', 'the', 'get', 'Let\'s'], correctOrder: [4, 3, 2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "on the same page"؟', data: { options: ['متفقون', 'في نفس الكتاب', 'نفس الفكرة', 'نفس الصفحة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'We\'re _____ to _____ one. (من البداية)', data: { answer: 'back to square' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أقدر الناس الذين يعبرون عن آرائهم.', data: { answer: 'I appreciate people who speak their mind.' }, points: 15 }
  ]
};

export const B2_U7_L5: LessonContent = {
  lessonId: 'B2-u07-l05',
  passingScore: 70,
  vocab: [
    { english: 'bite off more than you can chew', arabic: 'يتحمل أكثر من طاقته', example: 'Don\'t bite off more than you can chew.', exampleAr: 'لا تتحمل أكثر من طاقتك.' },
    { english: 'burn the midnight oil', arabic: 'يسهر للعمل', example: 'I burned the midnight oil to finish.', exampleAr: 'سهرت للعمل لأنهي.' },
    { english: 'go the extra mile', arabic: 'يبذل جهداً إضافياً', example: 'She always goes the extra mile.', exampleAr: 'دائماً تبذل جهداً إضافياً.' },
    { english: 'keep someone in the loop', arabic: 'يبقي شخصاً على اطلاع', example: 'Keep me in the loop.', exampleAr: 'أبقني على اطلاع.' },
    { english: 'miss the boat', arabic: 'يفوت الفرصة', example: 'We missed the boat on that deal.', exampleAr: 'فوتنا الفرصة في تلك الصفقة.' },
    { english: 'play it by ear', arabic: 'يرتجل', example: 'Let\'s play it by ear.', exampleAr: 'لنرتجل.' },
    { english: 'pull strings', arabic: 'يستخدم نفوذه', example: 'He pulled strings to get the job.', exampleAr: 'استخدم نفوذه للحصول على الوظيفة.' },
    { english: 'take it with a grain of salt', arabic: 'لا يأخذه على محمل الجد', example: 'Take his advice with a grain of salt.', exampleAr: 'لا تأخذ نصيحته على محمل الجد.' }
  ],
  sentences: [
    { english: 'She goes the extra mile for her clients.', arabic: 'تبذل جهداً إضافياً لعملائها.' },
    { english: 'Please keep me in the loop on developments.', arabic: 'من فضلك أبقني على اطلاع بالتطورات.' },
    { english: 'We\'ll play it by ear and see what happens.', arabic: 'سنرتجل ونرى ما يحدث.' },
    { english: 'Take rumors with a grain of salt.', arabic: 'لا تأخذ الإشاعات على محمل الجد.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "miss the boat"؟', data: { options: ['يفوت الفرصة', 'يركب القارب', 'يسافر', 'ينتظر'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'She always _____ the _____ mile. (تبذل جهداً إضافياً)', data: { answer: 'goes the extra' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'burn the midnight oil', arabic: 'يسهر للعمل' }, { english: 'pull strings', arabic: 'يستخدم نفوذه' }, { english: 'play it by ear', arabic: 'يرتجل' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يبقي شخصاً على اطلاع"؟', data: { options: ['keep someone in the loop', 'keep someone informed', 'keep someone updated', 'keep someone posted'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "bite off more than you can chew"؟', data: { options: ['يتحمل أكثر من طاقته', 'يأكل كثيراً', 'يعمل كثيراً', 'يتكلم كثيراً'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Keep me in the _____. (على اطلاع)', data: { answer: 'loop' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: لا تأخذ نصيحته على محمل الجد.', data: { answer: 'Take his advice with a grain of salt.' }, points: 15 }
  ]
};

export const b2Unit7Lessons: Record<string, LessonContent> = {
  'B2-u07-l01': B2_U7_L1,
  'B2-u07-l02': B2_U7_L2,
  'B2-u07-l03': B2_U7_L3,
  'B2-u07-l04': B2_U7_L4,
  'B2-u07-l05': B2_U7_L5,
};

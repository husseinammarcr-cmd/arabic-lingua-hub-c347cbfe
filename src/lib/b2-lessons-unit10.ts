import { LessonContent } from './a1-lessons';

// Unit 10: B2 Review - مراجعة B2
export const B2_U10_L1: LessonContent = {
  lessonId: 'B2-u10-l01',
  passingScore: 70,
  vocab: [
    { english: 'achievement', arabic: 'إنجاز', example: 'This is a great achievement.', exampleAr: 'هذا إنجاز عظيم.' },
    { english: 'milestone', arabic: 'حدث مهم', example: 'Reaching B2 is a milestone.', exampleAr: 'الوصول إلى B2 حدث مهم.' },
    { english: 'fluent', arabic: 'طليق', example: 'Become fluent in English.', exampleAr: 'كن طليقاً في الإنجليزية.' },
    { english: 'confident', arabic: 'واثق', example: 'Feel confident speaking.', exampleAr: 'اشعر بالثقة عند التحدث.' },
    { english: 'competent', arabic: 'كفء', example: 'You are now competent.', exampleAr: 'أنت الآن كفء.' },
    { english: 'independent', arabic: 'مستقل', example: 'An independent user.', exampleAr: 'مستخدم مستقل.' },
    { english: 'advanced', arabic: 'متقدم', example: 'Ready for advanced level.', exampleAr: 'جاهز للمستوى المتقدم.' },
    { english: 'native-like', arabic: 'شبه أصلي', example: 'Aim for native-like fluency.', exampleAr: 'اهدف لطلاقة شبه أصلية.' }
  ],
  sentences: [
    { english: 'Completing B2 is a significant achievement.', arabic: 'إكمال B2 إنجاز كبير.' },
    { english: 'You can now speak confidently in most situations.', arabic: 'يمكنك الآن التحدث بثقة في معظم المواقف.' },
    { english: 'B2 means you\'re an independent user.', arabic: 'B2 يعني أنك مستخدم مستقل.' },
    { english: 'You\'re ready for advanced challenges.', arabic: 'أنت جاهز للتحديات المتقدمة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "milestone"؟', data: { options: ['حدث مهم', 'إنجاز', 'هدف', 'خطوة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'You are now a _____ user. (مستقل)', data: { answer: 'independent' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'fluent', arabic: 'طليق' }, { english: 'confident', arabic: 'واثق' }, { english: 'competent', arabic: 'كفء' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "شبه أصلي"؟', data: { options: ['native-like', 'original', 'authentic', 'natural'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "achievement"؟', data: { options: ['إنجاز', 'هدف', 'محاولة', 'خطة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Feel _____ speaking. (واثق)', data: { answer: 'confident' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: إكمال B2 إنجاز كبير.', data: { answer: 'Completing B2 is a significant achievement.' }, points: 15 }
  ]
};

export const B2_U10_L2: LessonContent = {
  lessonId: 'B2-u10-l02',
  passingScore: 70,
  vocab: [
    { english: 'review', arabic: 'مراجعة', example: 'Let\'s review what we learned.', exampleAr: 'لنراجع ما تعلمناه.' },
    { english: 'summarize', arabic: 'يلخص', example: 'Summarize the key points.', exampleAr: 'لخص النقاط الرئيسية.' },
    { english: 'consolidate', arabic: 'يثبّت', example: 'Consolidate your knowledge.', exampleAr: 'ثبّت معرفتك.' },
    { english: 'reinforce', arabic: 'يعزز', example: 'Reinforce your learning.', exampleAr: 'عزز تعلمك.' },
    { english: 'practice', arabic: 'يتدرب', example: 'Practice makes perfect.', exampleAr: 'الممارسة تصنع الإتقان.' },
    { english: 'apply', arabic: 'يطبق', example: 'Apply what you learned.', exampleAr: 'طبق ما تعلمته.' },
    { english: 'master', arabic: 'يتقن', example: 'Master the skills.', exampleAr: 'أتقن المهارات.' },
    { english: 'retain', arabic: 'يحتفظ', example: 'Retain the information.', exampleAr: 'احتفظ بالمعلومات.' }
  ],
  sentences: [
    { english: 'Regular review helps consolidate learning.', arabic: 'المراجعة المنتظمة تساعد في تثبيت التعلم.' },
    { english: 'Practice regularly to reinforce skills.', arabic: 'تدرب بانتظام لتعزيز المهارات.' },
    { english: 'Apply your knowledge in real situations.', arabic: 'طبق معرفتك في مواقف حقيقية.' },
    { english: 'Mastery comes with consistent effort.', arabic: 'الإتقان يأتي مع الجهد المستمر.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "consolidate"؟', data: { options: ['يثبّت', 'يراجع', 'يلخص', 'يطبق'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ makes perfect. (الممارسة)', data: { answer: 'Practice' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'review', arabic: 'مراجعة' }, { english: 'apply', arabic: 'يطبق' }, { english: 'master', arabic: 'يتقن' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يحتفظ"؟', data: { options: ['retain', 'remain', 'remember', 'recall'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "reinforce"؟', data: { options: ['يعزز', 'يضعف', 'يغير', 'يحذف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ what you learned. (طبق)', data: { answer: 'Apply' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الإتقان يأتي مع الجهد المستمر.', data: { answer: 'Mastery comes with consistent effort.' }, points: 15 }
  ]
};

export const B2_U10_L3: LessonContent = {
  lessonId: 'B2-u10-l03',
  passingScore: 70,
  vocab: [
    { english: 'opportunity', arabic: 'فرصة', example: 'Seize every opportunity.', exampleAr: 'اغتنم كل فرصة.' },
    { english: 'challenge', arabic: 'تحدي', example: 'Embrace new challenges.', exampleAr: 'تقبّل التحديات الجديدة.' },
    { english: 'growth', arabic: 'نمو', example: 'Personal growth is important.', exampleAr: 'النمو الشخصي مهم.' },
    { english: 'journey', arabic: 'رحلة', example: 'Enjoy the learning journey.', exampleAr: 'استمتع برحلة التعلم.' },
    { english: 'progress', arabic: 'تقدم', example: 'Celebrate your progress.', exampleAr: 'احتفِ بتقدمك.' },
    { english: 'goal', arabic: 'هدف', example: 'Set new goals.', exampleAr: 'ضع أهدافاً جديدة.' },
    { english: 'motivation', arabic: 'دافع', example: 'Stay motivated.', exampleAr: 'ابق متحمساً.' },
    { english: 'dedication', arabic: 'تفاني', example: 'Dedication pays off.', exampleAr: 'التفاني يؤتي ثماره.' }
  ],
  sentences: [
    { english: 'Every challenge is an opportunity to grow.', arabic: 'كل تحدٍ فرصة للنمو.' },
    { english: 'The journey is as important as the destination.', arabic: 'الرحلة بأهمية الوجهة.' },
    { english: 'Set ambitious goals and work towards them.', arabic: 'ضع أهدافاً طموحة واعمل نحوها.' },
    { english: 'Your dedication has brought you this far.', arabic: 'تفانيك أوصلك إلى هنا.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "dedication"؟', data: { options: ['تفاني', 'دافع', 'هدف', 'تحدي'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Stay _____. (متحمساً)', data: { answer: 'motivated' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'opportunity', arabic: 'فرصة' }, { english: 'challenge', arabic: 'تحدي' }, { english: 'growth', arabic: 'نمو' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "رحلة"؟', data: { options: ['journey', 'trip', 'travel', 'tour'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "progress"؟', data: { options: ['تقدم', 'تراجع', 'ثبات', 'تغيير'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Set new _____. (أهداف)', data: { answer: 'goals' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: كل تحدٍ فرصة للنمو.', data: { answer: 'Every challenge is an opportunity to grow.' }, points: 15 }
  ]
};

export const B2_U10_L4: LessonContent = {
  lessonId: 'B2-u10-l04',
  passingScore: 70,
  vocab: [
    { english: 'continue', arabic: 'يستمر', example: 'Continue learning.', exampleAr: 'استمر في التعلم.' },
    { english: 'explore', arabic: 'يستكشف', example: 'Explore new topics.', exampleAr: 'استكشف مواضيع جديدة.' },
    { english: 'expand', arabic: 'يوسع', example: 'Expand your horizons.', exampleAr: 'وسّع آفاقك.' },
    { english: 'immerse', arabic: 'يغمر', example: 'Immerse yourself in English.', exampleAr: 'اغمر نفسك في الإنجليزية.' },
    { english: 'engage', arabic: 'يشارك', example: 'Engage with native speakers.', exampleAr: 'تفاعل مع الناطقين الأصليين.' },
    { english: 'embrace', arabic: 'يتقبل', example: 'Embrace mistakes as learning.', exampleAr: 'تقبّل الأخطاء كتعلم.' },
    { english: 'persist', arabic: 'يثابر', example: 'Persist despite difficulties.', exampleAr: 'ثابر رغم الصعوبات.' },
    { english: 'succeed', arabic: 'ينجح', example: 'You will succeed.', exampleAr: 'ستنجح.' }
  ],
  sentences: [
    { english: 'Continue to expand your vocabulary.', arabic: 'استمر في توسيع مفرداتك.' },
    { english: 'Immerse yourself in English media.', arabic: 'اغمر نفسك في الوسائط الإنجليزية.' },
    { english: 'Engage with content that interests you.', arabic: 'تفاعل مع محتوى يثير اهتمامك.' },
    { english: 'Those who persist will succeed.', arabic: 'الذين يثابرون سينجحون.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "immerse"؟', data: { options: ['يغمر', 'يسبح', 'يغوص', 'يطفو'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ with native speakers. (تفاعل)', data: { answer: 'Engage' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'continue', arabic: 'يستمر' }, { english: 'explore', arabic: 'يستكشف' }, { english: 'persist', arabic: 'يثابر' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يتقبل"؟', data: { options: ['embrace', 'accept', 'welcome', 'receive'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "expand"؟', data: { options: ['يوسع', 'يضيق', 'يحافظ', 'يقلل'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'You will _____. (تنجح)', data: { answer: 'succeed' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الذين يثابرون سينجحون.', data: { answer: 'Those who persist will succeed.' }, points: 15 }
  ]
};

export const B2_U10_L5: LessonContent = {
  lessonId: 'B2-u10-l05',
  passingScore: 70,
  vocab: [
    { english: 'congratulations', arabic: 'تهانينا', example: 'Congratulations on completing B2!', exampleAr: 'تهانينا على إكمال B2!' },
    { english: 'accomplish', arabic: 'يحقق', example: 'You accomplished your goal.', exampleAr: 'حققت هدفك.' },
    { english: 'proud', arabic: 'فخور', example: 'Be proud of yourself.', exampleAr: 'كن فخوراً بنفسك.' },
    { english: 'celebrate', arabic: 'يحتفل', example: 'Celebrate your success.', exampleAr: 'احتفل بنجاحك.' },
    { english: 'ready', arabic: 'جاهز', example: 'You\'re ready for C1.', exampleAr: 'أنت جاهز لـ C1.' },
    { english: 'capable', arabic: 'قادر', example: 'You are capable of more.', exampleAr: 'أنت قادر على المزيد.' },
    { english: 'skilled', arabic: 'ماهر', example: 'You\'ve become skilled.', exampleAr: 'أصبحت ماهراً.' },
    { english: 'excellent', arabic: 'ممتاز', example: 'Excellent work!', exampleAr: 'عمل ممتاز!' }
  ],
  sentences: [
    { english: 'Congratulations on this incredible achievement!', arabic: 'تهانينا على هذا الإنجاز المذهل!' },
    { english: 'You should be proud of what you\'ve accomplished.', arabic: 'يجب أن تكون فخوراً بما حققته.' },
    { english: 'Celebrate this milestone in your learning journey.', arabic: 'احتفل بهذا الحدث المهم في رحلة تعلمك.' },
    { english: 'You\'re now ready for advanced English studies.', arabic: 'أنت الآن جاهز لدراسات الإنجليزية المتقدمة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "accomplish"؟', data: { options: ['يحقق', 'يحاول', 'يبدأ', 'ينتهي'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Be _____ of yourself. (فخور)', data: { answer: 'proud' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'celebrate', arabic: 'يحتفل' }, { english: 'capable', arabic: 'قادر' }, { english: 'skilled', arabic: 'ماهر' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "ممتاز"؟', data: { options: ['excellent', 'good', 'nice', 'fine'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "ready"؟', data: { options: ['جاهز', 'متأخر', 'مبكر', 'مشغول'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ your success! (احتفل بـ)', data: { answer: 'Celebrate' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: تهانينا على هذا الإنجاز المذهل!', data: { answer: 'Congratulations on this incredible achievement!' }, points: 15 }
  ]
};

export const b2Unit10Lessons: Record<string, LessonContent> = {
  'B2-u10-l01': B2_U10_L1,
  'B2-u10-l02': B2_U10_L2,
  'B2-u10-l03': B2_U10_L3,
  'B2-u10-l04': B2_U10_L4,
  'B2-u10-l05': B2_U10_L5,
};

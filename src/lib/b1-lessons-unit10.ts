import { LessonContent } from './a1-lessons';

// Unit 10: Review & Advanced Practice - مراجعة وتدريب متقدم
export const B1_U10_L1: LessonContent = {
  lessonId: 'B1-u10-l01',
  passingScore: 70,
  vocab: [
    { english: 'comprehensive', arabic: 'شامل', example: 'This is a comprehensive review.', exampleAr: 'هذه مراجعة شاملة.' },
    { english: 'assessment', arabic: 'تقييم', example: 'The assessment covers all topics.', exampleAr: 'التقييم يشمل جميع المواضيع.' },
    { english: 'proficiency', arabic: 'إتقان', example: 'Your proficiency has improved.', exampleAr: 'إتقانك قد تحسن.' },
    { english: 'achievement', arabic: 'إنجاز', example: 'This is a great achievement.', exampleAr: 'هذا إنجاز عظيم.' },
    { english: 'milestone', arabic: 'محطة مهمة', example: 'You reached an important milestone.', exampleAr: 'وصلت إلى محطة مهمة.' },
    { english: 'consolidate', arabic: 'يعزز', example: 'Consolidate your knowledge.', exampleAr: 'عزز معرفتك.' },
    { english: 'revision', arabic: 'مراجعة', example: 'Revision is important.', exampleAr: 'المراجعة مهمة.' },
    { english: 'mastery', arabic: 'إتقان كامل', example: 'You are close to mastery.', exampleAr: 'أنت قريب من الإتقان الكامل.' }
  ],
  sentences: [
    { english: 'This comprehensive assessment will test your proficiency.', arabic: 'هذا التقييم الشامل سيختبر إتقانك.' },
    { english: 'Reaching this milestone is a significant achievement.', arabic: 'الوصول إلى هذه المحطة إنجاز مهم.' },
    { english: 'Regular revision helps consolidate your learning.', arabic: 'المراجعة المنتظمة تساعد على تعزيز تعلمك.' },
    { english: 'You are on the path to mastery.', arabic: 'أنت على طريق الإتقان الكامل.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "comprehensive"؟', data: { options: ['شامل', 'جزئي', 'سريع', 'بسيط'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'This is a great _____. (إنجاز)', data: { answer: 'achievement' } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['important', 'is', 'revision'], correctOrder: [2, 1, 0] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "محطة مهمة"؟', data: { options: ['milestone', 'millstone', 'milkstone', 'milepost'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "proficiency"؟', data: { options: ['إتقان', 'ضعف', 'بداية', 'نهاية'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ your knowledge. (عزز)', data: { answer: 'Consolidate' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المراجعة مهمة.', data: { answer: 'Revision is important.' }, points: 15 }
  ]
};

export const B1_U10_L2: LessonContent = {
  lessonId: 'B1-u10-l02',
  passingScore: 70,
  vocab: [
    { english: 'summarize', arabic: 'يلخص', example: 'Summarize the story.', exampleAr: 'لخّص القصة.' },
    { english: 'conclude', arabic: 'يستنتج', example: 'What can we conclude?', exampleAr: 'ماذا يمكننا أن نستنتج؟' },
    { english: 'reflect', arabic: 'يتأمل', example: 'Reflect on your progress.', exampleAr: 'تأمل في تقدمك.' },
    { english: 'evaluate', arabic: 'يقيّم', example: 'Evaluate your performance.', exampleAr: 'قيّم أداءك.' },
    { english: 'strengthen', arabic: 'يقوي', example: 'Practice strengthens skills.', exampleAr: 'التدريب يقوي المهارات.' },
    { english: 'overall', arabic: 'بشكل عام', example: 'Overall, you did well.', exampleAr: 'بشكل عام، أبليت حسناً.' },
    { english: 'progress', arabic: 'تقدم', example: 'You made great progress.', exampleAr: 'أحرزت تقدماً كبيراً.' },
    { english: 'confident', arabic: 'واثق', example: 'I feel confident.', exampleAr: 'أشعر بالثقة.' }
  ],
  sentences: [
    { english: 'Can you summarize what you learned?', arabic: 'هل يمكنك تلخيص ما تعلمته؟' },
    { english: 'I conclude that practice is essential.', arabic: 'أستنتج أن التدريب ضروري.' },
    { english: 'Reflecting on mistakes helps you improve.', arabic: 'التأمل في الأخطاء يساعدك على التحسن.' },
    { english: 'Overall, your progress has been excellent.', arabic: 'بشكل عام، تقدمك كان ممتازاً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "summarize"؟', data: { options: ['يلخص', 'يطيل', 'يحذف', 'يضيف'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Practice _____ skills. (يقوي)', data: { answer: 'strengthens' } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['progress', 'great', 'made', 'you'], correctOrder: [3, 2, 1, 0] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "واثق"؟', data: { options: ['confident', 'confused', 'concerned', 'content'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "reflect"؟', data: { options: ['يتأمل', 'يعكس', 'يرفض', 'يقبل'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ your performance. (قيّم)', data: { answer: 'Evaluate' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: بشكل عام، أبليت حسناً.', data: { answer: 'Overall, you did well.' }, points: 15 }
  ]
};

export const B1_U10_L3: LessonContent = {
  lessonId: 'B1-u10-l03',
  passingScore: 70,
  vocab: [
    { english: 'integrate', arabic: 'يدمج', example: 'Integrate all skills.', exampleAr: 'ادمج جميع المهارات.' },
    { english: 'apply', arabic: 'يطبق', example: 'Apply what you learned.', exampleAr: 'طبق ما تعلمته.' },
    { english: 'practical', arabic: 'عملي', example: 'This is practical.', exampleAr: 'هذا عملي.' },
    { english: 'fluency', arabic: 'طلاقة', example: 'Your fluency is improving.', exampleAr: 'طلاقتك تتحسن.' },
    { english: 'accuracy', arabic: 'دقة', example: 'Accuracy is important.', exampleAr: 'الدقة مهمة.' },
    { english: 'confidence', arabic: 'ثقة', example: 'Speak with confidence.', exampleAr: 'تحدث بثقة.' },
    { english: 'communicate', arabic: 'يتواصل', example: 'Communicate in English.', exampleAr: 'تواصل بالإنجليزية.' },
    { english: 'effectively', arabic: 'بفعالية', example: 'Express yourself effectively.', exampleAr: 'عبّر عن نفسك بفعالية.' }
  ],
  sentences: [
    { english: 'Try to integrate all the skills you learned.', arabic: 'حاول دمج جميع المهارات التي تعلمتها.' },
    { english: 'Apply your knowledge in practical situations.', arabic: 'طبق معرفتك في مواقف عملية.' },
    { english: 'Balance fluency and accuracy when speaking.', arabic: 'وازن بين الطلاقة والدقة عند التحدث.' },
    { english: 'Communicate effectively with confidence.', arabic: 'تواصل بفعالية وثقة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "integrate"؟', data: { options: ['يدمج', 'يفصل', 'يحذف', 'يضيف'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ what you learned. (طبق)', data: { answer: 'Apply' } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['confidence', 'with', 'communicate', 'effectively'], correctOrder: [2, 3, 1, 0] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "طلاقة"؟', data: { options: ['fluency', 'fluent', 'flow', 'fluid'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "accuracy"؟', data: { options: ['دقة', 'خطأ', 'سرعة', 'بطء'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Speak with _____. (ثقة)', data: { answer: 'confidence' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: تواصل بالإنجليزية.', data: { answer: 'Communicate in English.' }, points: 15 }
  ]
};

export const B1_U10_L4: LessonContent = {
  lessonId: 'B1-u10-l04',
  passingScore: 70,
  vocab: [
    { english: 'accomplish', arabic: 'ينجز', example: 'You accomplished a lot.', exampleAr: 'أنجزت الكثير.' },
    { english: 'succeed', arabic: 'ينجح', example: 'You will succeed.', exampleAr: 'ستنجح.' },
    { english: 'overcome', arabic: 'يتغلب على', example: 'Overcome challenges.', exampleAr: 'تغلب على التحديات.' },
    { english: 'persevere', arabic: 'يثابر', example: 'Persevere and improve.', exampleAr: 'ثابر وتحسّن.' },
    { english: 'dedication', arabic: 'تفاني', example: 'Your dedication is admirable.', exampleAr: 'تفانيك مثير للإعجاب.' },
    { english: 'commitment', arabic: 'التزام', example: 'Learning requires commitment.', exampleAr: 'التعلم يتطلب التزاماً.' },
    { english: 'breakthrough', arabic: 'اختراق', example: 'You made a breakthrough.', exampleAr: 'حققت اختراقاً.' },
    { english: 'potential', arabic: 'إمكانية', example: 'Reach your potential.', exampleAr: 'حقق إمكانياتك.' }
  ],
  sentences: [
    { english: 'You have accomplished so much this level.', arabic: 'أنجزت الكثير في هذا المستوى.' },
    { english: 'With dedication and commitment, you will succeed.', arabic: 'مع التفاني والالتزام، ستنجح.' },
    { english: 'Persevere through challenges to reach your potential.', arabic: 'ثابر خلال التحديات للوصول إلى إمكانياتك.' },
    { english: 'Every breakthrough brings you closer to fluency.', arabic: 'كل اختراق يقربك من الطلاقة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "accomplish"؟', data: { options: ['ينجز', 'يفشل', 'يتوقف', 'يبدأ'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ challenges. (تغلب على)', data: { answer: 'Overcome' } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['succeed', 'will', 'you'], correctOrder: [2, 1, 0] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "يثابر"؟', data: { options: ['persevere', 'preserve', 'perceive', 'persist'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "dedication"؟', data: { options: ['تفاني', 'إهمال', 'كسل', 'تردد'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Learning requires _____. (التزام)', data: { answer: 'commitment' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: حقق إمكانياتك.', data: { answer: 'Reach your potential.' }, points: 15 }
  ]
};

export const B1_U10_L5: LessonContent = {
  lessonId: 'B1-u10-l05',
  passingScore: 70,
  vocab: [
    { english: 'celebrate', arabic: 'يحتفل', example: 'Celebrate your success!', exampleAr: 'احتفل بنجاحك!' },
    { english: 'congratulations', arabic: 'تهانينا', example: 'Congratulations on completing B1!', exampleAr: 'تهانينا على إكمال B1!' },
    { english: 'graduate', arabic: 'يتخرج', example: 'You are ready to graduate to B2.', exampleAr: 'أنت مستعد للتخرج إلى B2.' },
    { english: 'proud', arabic: 'فخور', example: 'Be proud of yourself.', exampleAr: 'كن فخوراً بنفسك.' },
    { english: 'journey', arabic: 'رحلة', example: 'This is just the beginning.', exampleAr: 'هذه مجرد البداية.' },
    { english: 'next level', arabic: 'المستوى التالي', example: 'Ready for the next level.', exampleAr: 'مستعد للمستوى التالي.' },
    { english: 'continue', arabic: 'يستمر', example: 'Continue learning.', exampleAr: 'استمر في التعلم.' },
    { english: 'well done', arabic: 'أحسنت', example: 'Well done on your hard work!', exampleAr: 'أحسنت على عملك الجاد!' }
  ],
  sentences: [
    { english: 'Congratulations! You completed B1!', arabic: 'تهانينا! أكملت مستوى B1!' },
    { english: 'You should be proud of your achievements.', arabic: 'يجب أن تكون فخوراً بإنجازاتك.' },
    { english: 'This journey has made you stronger.', arabic: 'هذه الرحلة جعلتك أقوى.' },
    { english: 'Continue to the next level with confidence.', arabic: 'استمر إلى المستوى التالي بثقة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "celebrate"؟', data: { options: ['يحتفل', 'يحزن', 'يغضب', 'ينام'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ on completing B1! (تهانينا)', data: { answer: 'Congratulations' } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['yourself', 'of', 'proud', 'be'], correctOrder: [3, 2, 1, 0] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "رحلة"؟', data: { options: ['journey', 'journal', 'joy', 'join'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "graduate"؟', data: { options: ['يتخرج', 'يدخل', 'يسجل', 'يتوقف'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ learning. (استمر)', data: { answer: 'Continue' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أحسنت على عملك الجاد!', data: { answer: 'Well done on your hard work!' }, points: 15 }
  ]
};

export const b1Unit10Lessons: Record<string, LessonContent> = {
  'B1-u10-l01': B1_U10_L1,
  'B1-u10-l02': B1_U10_L2,
  'B1-u10-l03': B1_U10_L3,
  'B1-u10-l04': B1_U10_L4,
  'B1-u10-l05': B1_U10_L5,
};

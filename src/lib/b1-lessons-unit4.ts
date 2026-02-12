import { LessonContent } from './a1-lessons';

// Unit 4: Health & Wellness - الصحة والعافية
export const B1_U4_L1: LessonContent = {
  lessonId: 'B1-u04-l01',
  passingScore: 70,
  vocab: [
    { english: 'healthy', arabic: 'صحي', example: 'Eat healthy food.', exampleAr: 'تناول طعاماً صحياً.' },
    { english: 'exercise', arabic: 'تمرين', example: 'Exercise daily.', exampleAr: 'تمرّن يومياً.' },
    { english: 'diet', arabic: 'نظام غذائي', example: 'I follow a diet.', exampleAr: 'أتبع نظاماً غذائياً.' },
    { english: 'nutrition', arabic: 'تغذية', example: 'Good nutrition is essential.', exampleAr: 'التغذية الجيدة ضرورية.' },
    { english: 'vitamins', arabic: 'فيتامينات', example: 'Take your vitamins.', exampleAr: 'تناول فيتاميناتك.' },
    { english: 'fitness', arabic: 'لياقة', example: 'Fitness is important.', exampleAr: 'اللياقة مهمة.' },
    { english: 'wellness', arabic: 'عافية', example: 'Focus on wellness.', exampleAr: 'ركز على العافية.' },
    { english: 'lifestyle', arabic: 'نمط حياة', example: 'Change your lifestyle.', exampleAr: 'غيّر نمط حياتك.' }
  ],
  sentences: [
    { english: 'A healthy lifestyle includes exercise and good nutrition.', arabic: 'نمط الحياة الصحي يشمل التمرين والتغذية الجيدة.' },
    { english: 'Take vitamins to stay healthy.', arabic: 'تناول الفيتامينات للبقاء صحياً.' },
    { english: 'Fitness and wellness are connected.', arabic: 'اللياقة والعافية مرتبطتان.' },
    { english: 'Follow a balanced diet for better health.', arabic: 'اتبع نظاماً غذائياً متوازناً لصحة أفضل.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "healthy"؟', data: { options: ['صحي', 'مريض', 'ضعيف', 'متعب'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ daily. (تمرّن)', data: { answer: 'Exercise' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'diet', arabic: 'نظام غذائي' }, { english: 'fitness', arabic: 'لياقة' }, { english: 'vitamins', arabic: 'فيتامينات' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "عافية"؟', data: { options: ['wellness', 'illness', 'sickness', 'weakness'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "nutrition"؟', data: { options: ['تغذية', 'تمرين', 'لياقة', 'نظام'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Change your _____. (نمط حياة)', data: { answer: 'lifestyle' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: تناول طعاماً صحياً.', data: { answer: 'Eat healthy food.' }, points: 15 }
  ]
};

export const B1_U4_L2: LessonContent = {
  lessonId: 'B1-u04-l02',
  passingScore: 70,
  vocab: [
    { english: 'symptom', arabic: 'عرض', example: 'What are your symptoms?', exampleAr: 'ما هي أعراضك؟' },
    { english: 'disease', arabic: 'مرض', example: 'Prevent the disease.', exampleAr: 'امنع المرض.' },
    { english: 'treatment', arabic: 'علاج', example: 'The treatment worked.', exampleAr: 'العلاج نجح.' },
    { english: 'medication', arabic: 'دواء', example: 'Take your medication.', exampleAr: 'تناول دواءك.' },
    { english: 'prescription', arabic: 'وصفة طبية', example: 'I need a prescription.', exampleAr: 'أحتاج وصفة طبية.' },
    { english: 'recovery', arabic: 'تعافي', example: 'Recovery takes time.', exampleAr: 'التعافي يحتاج وقتاً.' },
    { english: 'diagnosis', arabic: 'تشخيص', example: 'The diagnosis was accurate.', exampleAr: 'التشخيص كان دقيقاً.' },
    { english: 'prevention', arabic: 'وقاية', example: 'Prevention is better than cure.', exampleAr: 'الوقاية خير من العلاج.' }
  ],
  sentences: [
    { english: 'The doctor asked about my symptoms.', arabic: 'سأل الطبيب عن أعراضي.' },
    { english: 'Early diagnosis leads to better treatment.', arabic: 'التشخيص المبكر يؤدي لعلاج أفضل.' },
    { english: 'Take your medication as prescribed.', arabic: 'تناول دواءك كما وُصف.' },
    { english: 'Prevention is the best way to stay healthy.', arabic: 'الوقاية أفضل طريقة للبقاء صحياً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "symptom"؟', data: { options: ['عرض', 'علاج', 'دواء', 'تشخيص'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ worked. (علاج)', data: { answer: 'treatment' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "وصفة طبية"؟', data: { options: ['prescription', 'description', 'subscription', 'inscription'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['medication', 'your', 'take'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "recovery"؟', data: { options: ['تعافي', 'مرض', 'علاج', 'عرض'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ is better than cure. (الوقاية)', data: { answer: 'Prevention' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: التشخيص كان دقيقاً.', data: { answer: 'The diagnosis was accurate.' }, points: 15 }
  ]
};

export const B1_U4_L3: LessonContent = {
  lessonId: 'B1-u04-l03',
  passingScore: 70,
  vocab: [
    { english: 'mental health', arabic: 'صحة نفسية', example: 'Mental health matters.', exampleAr: 'الصحة النفسية مهمة.' },
    { english: 'stress', arabic: 'توتر', example: 'Reduce your stress.', exampleAr: 'قلل توترك.' },
    { english: 'anxiety', arabic: 'قلق', example: 'I feel anxiety sometimes.', exampleAr: 'أشعر بالقلق أحياناً.' },
    { english: 'depression', arabic: 'اكتئاب', example: 'Depression needs treatment.', exampleAr: 'الاكتئاب يحتاج علاجاً.' },
    { english: 'therapy', arabic: 'علاج نفسي', example: 'Therapy can help.', exampleAr: 'العلاج النفسي يمكن أن يساعد.' },
    { english: 'meditation', arabic: 'تأمل', example: 'Practice meditation.', exampleAr: 'مارس التأمل.' },
    { english: 'relax', arabic: 'يسترخي', example: 'Try to relax.', exampleAr: 'حاول أن تسترخي.' },
    { english: 'mindfulness', arabic: 'وعي ذهني', example: 'Mindfulness reduces stress.', exampleAr: 'الوعي الذهني يقلل التوتر.' }
  ],
  sentences: [
    { english: 'Taking care of mental health is essential.', arabic: 'الاهتمام بالصحة النفسية ضروري.' },
    { english: 'Meditation helps reduce stress and anxiety.', arabic: 'التأمل يساعد في تقليل التوتر والقلق.' },
    { english: 'Therapy is helpful for depression.', arabic: 'العلاج النفسي مفيد للاكتئاب.' },
    { english: 'Practice mindfulness to relax your mind.', arabic: 'مارس الوعي الذهني لتريح عقلك.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "stress"؟', data: { options: ['توتر', 'راحة', 'سعادة', 'هدوء'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Practice _____. (تأمل)', data: { answer: 'meditation' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'anxiety', arabic: 'قلق' }, { english: 'therapy', arabic: 'علاج نفسي' }, { english: 'relax', arabic: 'يسترخي' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "اكتئاب"؟', data: { options: ['depression', 'expression', 'impression', 'compression'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "mindfulness"؟', data: { options: ['وعي ذهني', 'تأمل', 'توتر', 'قلق'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Try to _____. (استرخِ)', data: { answer: 'relax' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الصحة النفسية مهمة.', data: { answer: 'Mental health matters.' }, points: 15 }
  ]
};

export const B1_U4_L4: LessonContent = {
  lessonId: 'B1-u04-l04',
  passingScore: 70,
  vocab: [
    { english: 'hospital', arabic: 'مستشفى', example: 'Go to the hospital.', exampleAr: 'اذهب إلى المستشفى.' },
    { english: 'emergency', arabic: 'طوارئ', example: 'This is an emergency.', exampleAr: 'هذه حالة طوارئ.' },
    { english: 'surgeon', arabic: 'جراح', example: 'The surgeon is skilled.', exampleAr: 'الجراح ماهر.' },
    { english: 'nurse', arabic: 'ممرض/ممرضة', example: 'The nurse helped me.', exampleAr: 'ساعدتني الممرضة.' },
    { english: 'ambulance', arabic: 'إسعاف', example: 'Call an ambulance.', exampleAr: 'اتصل بالإسعاف.' },
    { english: 'operation', arabic: 'عملية', example: 'The operation was successful.', exampleAr: 'العملية كانت ناجحة.' },
    { english: 'patient', arabic: 'مريض', example: 'The patient is recovering.', exampleAr: 'المريض يتعافى.' },
    { english: 'ward', arabic: 'جناح', example: 'He is in ward 5.', exampleAr: 'هو في الجناح 5.' }
  ],
  sentences: [
    { english: 'The ambulance arrived quickly.', arabic: 'وصلت سيارة الإسعاف بسرعة.' },
    { english: 'The patient is in the emergency ward.', arabic: 'المريض في جناح الطوارئ.' },
    { english: 'The surgeon performed the operation.', arabic: 'أجرى الجراح العملية.' },
    { english: 'Nurses take care of patients.', arabic: 'الممرضون يعتنون بالمرضى.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "ambulance"؟', data: { options: ['إسعاف', 'مستشفى', 'طوارئ', 'عملية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ is recovering. (مريض)', data: { answer: 'patient' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "جراح"؟', data: { options: ['surgeon', 'nurse', 'doctor', 'patient'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['ambulance', 'an', 'call'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "operation"؟', data: { options: ['عملية', 'مستشفى', 'إسعاف', 'جناح'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'He is in _____ 5. (جناح)', data: { answer: 'ward' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: العملية كانت ناجحة.', data: { answer: 'The operation was successful.' }, points: 15 }
  ]
};

export const B1_U4_L5: LessonContent = {
  lessonId: 'B1-u04-l05',
  passingScore: 70,
  vocab: [
    { english: 'sleep', arabic: 'نوم', example: 'Get enough sleep.', exampleAr: 'احصل على نوم كافٍ.' },
    { english: 'insomnia', arabic: 'أرق', example: 'I suffer from insomnia.', exampleAr: 'أعاني من الأرق.' },
    { english: 'rest', arabic: 'راحة', example: 'You need rest.', exampleAr: 'تحتاج راحة.' },
    { english: 'energy', arabic: 'طاقة', example: 'I have no energy.', exampleAr: 'ليس لدي طاقة.' },
    { english: 'fatigue', arabic: 'إرهاق', example: 'Fatigue is common.', exampleAr: 'الإرهاق شائع.' },
    { english: 'refresh', arabic: 'ينعش', example: 'Sleep refreshes the mind.', exampleAr: 'النوم ينعش العقل.' },
    { english: 'routine', arabic: 'روتين', example: 'Follow a sleep routine.', exampleAr: 'اتبع روتين نوم.' },
    { english: 'quality', arabic: 'جودة', example: 'Improve sleep quality.', exampleAr: 'حسّن جودة النوم.' }
  ],
  sentences: [
    { english: 'Getting enough sleep is important for health.', arabic: 'الحصول على نوم كافٍ مهم للصحة.' },
    { english: 'Insomnia affects your energy levels.', arabic: 'الأرق يؤثر على مستويات طاقتك.' },
    { english: 'A good sleep routine helps improve quality.', arabic: 'روتين نوم جيد يساعد على تحسين الجودة.' },
    { english: 'Rest when you feel fatigue.', arabic: 'استرح عندما تشعر بالإرهاق.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "insomnia"؟', data: { options: ['أرق', 'نوم', 'راحة', 'طاقة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Get enough _____. (نوم)', data: { answer: 'sleep' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'energy', arabic: 'طاقة' }, { english: 'fatigue', arabic: 'إرهاق' }, { english: 'rest', arabic: 'راحة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "جودة"؟', data: { options: ['quality', 'quantity', 'question', 'quest'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "routine"؟', data: { options: ['روتين', 'طاقة', 'نوم', 'راحة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Sleep _____ the mind. (ينعش)', data: { answer: 'refreshes' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الإرهاق شائع.', data: { answer: 'Fatigue is common.' }, points: 15 }
  ]
};

export const b1Unit4Lessons: Record<string, LessonContent> = {
  'B1-u04-l01': B1_U4_L1,
  'B1-u04-l02': B1_U4_L2,
  'B1-u04-l03': B1_U4_L3,
  'B1-u04-l04': B1_U4_L4,
  'B1-u04-l05': B1_U4_L5,
};

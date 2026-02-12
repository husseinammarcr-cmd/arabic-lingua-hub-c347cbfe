import { LessonContent } from './a1-lessons';

// A2 Unit 10: A2 Review - مراجعة A2
export const A2_U10_L1: LessonContent = {
  lessonId: 'A2-u10-l01',
  passingScore: 70,
  vocab: [
    { english: 'yesterday', arabic: 'أمس', example: 'I saw him yesterday.', exampleAr: 'رأيته أمس.' },
    { english: 'tomorrow', arabic: 'غداً', example: 'See you tomorrow.', exampleAr: 'أراك غداً.' },
    { english: 'last week', arabic: 'الأسبوع الماضي', example: 'I went there last week.', exampleAr: 'ذهبت هناك الأسبوع الماضي.' },
    { english: 'next month', arabic: 'الشهر القادم', example: 'I\'ll visit next month.', exampleAr: 'سأزور الشهر القادم.' },
    { english: 'already', arabic: 'بالفعل', example: 'I\'ve already eaten.', exampleAr: 'أكلت بالفعل.' },
    { english: 'yet', arabic: 'بعد', example: 'Not yet.', exampleAr: 'ليس بعد.' },
  ],
  sentences: [
    { english: 'What did you do yesterday?', arabic: 'ماذا فعلت أمس؟' },
    { english: 'I\'m going to travel next week.', arabic: 'سأسافر الأسبوع القادم.' },
    { english: 'Have you finished yet?', arabic: 'هل انتهيت بعد؟' },
    { english: 'I\'ve already done that.', arabic: 'فعلت ذلك بالفعل.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "yesterday"؟', data: { options: ['أمس', 'غداً', 'اليوم', 'الأسبوع'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: See you ___.', data: { answer: 'tomorrow', alternatives: ['later'] } },
    { type: 'mcq', promptAr: 'عكس "yesterday" هو:', data: { options: ['tomorrow', 'today', 'now', 'later'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: do / yesterday / did / What / you / ?', data: { words: ['What', 'did', 'you', 'do', 'yesterday', '?'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "بالفعل"؟', data: { options: ['already', 'yet', 'still', 'just'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: I went there ___ week.', data: { answer: 'last', alternatives: ['past'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هل انتهيت بعد؟', data: { answer: 'Have you finished yet', alternatives: ['Are you done yet'] }, points: 15 },
  ],
};

export const A2_U10_L2: LessonContent = {
  lessonId: 'A2-u10-l02',
  passingScore: 70,
  vocab: [
    { english: 'passport', arabic: 'جواز سفر', example: 'Show your passport.', exampleAr: 'أظهر جواز سفرك.' },
    { english: 'luggage', arabic: 'أمتعة', example: 'Collect your luggage.', exampleAr: 'اجمع أمتعتك.' },
    { english: 'boarding pass', arabic: 'بطاقة صعود', example: 'Here\'s my boarding pass.', exampleAr: 'هذه بطاقة صعودي.' },
    { english: 'departure', arabic: 'مغادرة', example: 'Departure is at 10.', exampleAr: 'المغادرة الساعة 10.' },
    { english: 'arrival', arabic: 'وصول', example: 'Arrival time is 3 PM.', exampleAr: 'وقت الوصول 3 عصراً.' },
    { english: 'delay', arabic: 'تأخير', example: 'There\'s a delay.', exampleAr: 'هناك تأخير.' },
  ],
  sentences: [
    { english: 'My flight is delayed.', arabic: 'رحلتي متأخرة.' },
    { english: 'Where is the departure gate?', arabic: 'أين بوابة المغادرة؟' },
    { english: 'I need to check my luggage.', arabic: 'أحتاج لتسجيل أمتعتي.' },
    { english: 'The flight arrives at noon.', arabic: 'الرحلة تصل ظهراً.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "boarding pass"؟', data: { options: ['بطاقة صعود', 'جواز سفر', 'تأشيرة', 'تذكرة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Show your ___.', data: { answer: 'passport', alternatives: ['ID'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'departure', arabic: 'مغادرة' }, { english: 'arrival', arabic: 'وصول' }, { english: 'delay', arabic: 'تأخير' }] } },
    { type: 'reorder', promptAr: 'رتب: delayed / flight / is / My', data: { words: ['My', 'flight', 'is', 'delayed'], correctOrder: [0, 1, 2, 3] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "تأخير"؟', data: { options: ['delay', 'early', 'on time', 'cancel'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Collect your ___.', data: { answer: 'luggage', alternatives: ['bags'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أين بوابة المغادرة؟', data: { answer: 'Where is the departure gate', alternatives: ['Where\'s the departure gate'] }, points: 15 },
  ],
};

export const A2_U10_L3: LessonContent = {
  lessonId: 'A2-u10-l03',
  passingScore: 70,
  vocab: [
    { english: 'headache', arabic: 'صداع', example: 'I have a headache.', exampleAr: 'لدي صداع.' },
    { english: 'medicine', arabic: 'دواء', example: 'Take this medicine.', exampleAr: 'خذ هذا الدواء.' },
    { english: 'appointment', arabic: 'موعد', example: 'I have an appointment.', exampleAr: 'لدي موعد.' },
    { english: 'prescription', arabic: 'وصفة طبية', example: 'Here\'s the prescription.', exampleAr: 'هذه الوصفة الطبية.' },
    { english: 'pharmacy', arabic: 'صيدلية', example: 'Go to the pharmacy.', exampleAr: 'اذهب للصيدلية.' },
    { english: 'symptom', arabic: 'عرض', example: 'What are your symptoms?', exampleAr: 'ما أعراضك؟' },
  ],
  sentences: [
    { english: 'I don\'t feel well.', arabic: 'لا أشعر أنني بخير.' },
    { english: 'I need to see a doctor.', arabic: 'أحتاج لرؤية طبيب.' },
    { english: 'How many times a day?', arabic: 'كم مرة في اليوم؟' },
    { english: 'I\'m allergic to penicillin.', arabic: 'لدي حساسية من البنسلين.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "prescription"؟', data: { options: ['وصفة طبية', 'دواء', 'صيدلية', 'موعد'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I have a ___.', data: { answer: 'headache', alternatives: ['pain'] } },
    { type: 'mcq', promptAr: 'أين تشتري الدواء؟', data: { options: ['pharmacy', 'hospital', 'clinic', 'store'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: doctor / see / need / I / to / a', data: { words: ['I', 'need', 'to', 'see', 'a', 'doctor'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "عرض مرضي"؟', data: { options: ['symptom', 'disease', 'pain', 'cure'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Take this ___.', data: { answer: 'medicine', alternatives: ['pill'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: لا أشعر أنني بخير', data: { answer: 'I don\'t feel well', alternatives: ['I am not feeling well'] }, points: 15 },
  ],
};

export const A2_U10_L4: LessonContent = {
  lessonId: 'A2-u10-l04',
  passingScore: 70,
  vocab: [
    { english: 'price', arabic: 'سعر', example: 'What\'s the price?', exampleAr: 'ما السعر؟' },
    { english: 'discount', arabic: 'خصم', example: 'Is there a discount?', exampleAr: 'هل هناك خصم؟' },
    { english: 'size', arabic: 'مقاس', example: 'What size do you need?', exampleAr: 'أي مقاس تحتاج؟' },
    { english: 'color', arabic: 'لون', example: 'What color do you want?', exampleAr: 'أي لون تريد؟' },
    { english: 'receipt', arabic: 'إيصال', example: 'Keep the receipt.', exampleAr: 'احتفظ بالإيصال.' },
    { english: 'return', arabic: 'إرجاع', example: 'Can I return this?', exampleAr: 'هل يمكنني إرجاع هذا؟' },
  ],
  sentences: [
    { english: 'How much does this cost?', arabic: 'كم يكلف هذا؟' },
    { english: 'Do you have this in blue?', arabic: 'هل لديكم هذا بالأزرق؟' },
    { english: 'I\'d like to try this on.', arabic: 'أود تجربة هذا.' },
    { english: 'I\'ll take it.', arabic: 'سآخذه.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "discount"؟', data: { options: ['خصم', 'سعر', 'زيادة', 'ضريبة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: What\'s the ___?', data: { answer: 'price', alternatives: ['cost'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'size', arabic: 'مقاس' }, { english: 'color', arabic: 'لون' }, { english: 'return', arabic: 'إرجاع' }] } },
    { type: 'reorder', promptAr: 'رتب: cost / does / How / much / this / ?', data: { words: ['How', 'much', 'does', 'this', 'cost', '?'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "إيصال"؟', data: { options: ['receipt', 'recipe', 'bill', 'invoice'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Can I ___ this?', data: { answer: 'return', alternatives: ['exchange'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هل لديكم هذا بالأزرق؟', data: { answer: 'Do you have this in blue', alternatives: ['Is this available in blue'] }, points: 15 },
  ],
};

export const A2_U10_L5: LessonContent = {
  lessonId: 'A2-u10-l05',
  passingScore: 70,
  vocab: [
    { english: 'bigger', arabic: 'أكبر', example: 'I need a bigger size.', exampleAr: 'أحتاج مقاساً أكبر.' },
    { english: 'smaller', arabic: 'أصغر', example: 'This is smaller.', exampleAr: 'هذا أصغر.' },
    { english: 'cheaper', arabic: 'أرخص', example: 'Is there something cheaper?', exampleAr: 'هل هناك شيء أرخص؟' },
    { english: 'more expensive', arabic: 'أغلى', example: 'This is more expensive.', exampleAr: 'هذا أغلى.' },
    { english: 'better', arabic: 'أفضل', example: 'This is better quality.', exampleAr: 'هذا جودة أفضل.' },
    { english: 'worse', arabic: 'أسوأ', example: 'The weather is worse today.', exampleAr: 'الطقس أسوأ اليوم.' },
  ],
  sentences: [
    { english: 'This is bigger than that.', arabic: 'هذا أكبر من ذاك.' },
    { english: 'Which one is cheaper?', arabic: 'أيهما أرخص؟' },
    { english: 'This is the best option.', arabic: 'هذا أفضل خيار.' },
    { english: 'Today is better than yesterday.', arabic: 'اليوم أفضل من أمس.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "cheaper"؟', data: { options: ['أرخص', 'أغلى', 'أكبر', 'أصغر'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I need a ___ size.', data: { answer: 'bigger', alternatives: ['larger'] } },
    { type: 'mcq', promptAr: 'عكس "better" هو:', data: { options: ['worse', 'good', 'best', 'more'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: than / bigger / This / is / that', data: { words: ['This', 'is', 'bigger', 'than', 'that'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "أغلى"؟', data: { options: ['more expensive', 'cheaper', 'better', 'worse'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Which one is ___?', data: { answer: 'cheaper', alternatives: ['better'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذا أكبر من ذاك', data: { answer: 'This is bigger than that', alternatives: ['This is larger than that'] }, points: 15 },
  ],
};

export const a2Unit10Lessons: Record<string, LessonContent> = {
  'A2-u10-l01': A2_U10_L1,
  'A2-u10-l02': A2_U10_L2,
  'A2-u10-l03': A2_U10_L3,
  'A2-u10-l04': A2_U10_L4,
  'A2-u10-l05': A2_U10_L5,
};

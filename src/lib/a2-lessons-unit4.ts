import { LessonContent } from './a1-lessons';

// A2 Unit 4: Health & Body - الصحة والجسم
export const A2_U4_L1: LessonContent = {
  lessonId: 'A2-u04-l01',
  passingScore: 70,
  vocab: [
    { english: 'head', arabic: 'رأس', example: 'My head hurts.', exampleAr: 'رأسي يؤلمني.' },
    { english: 'arm', arabic: 'ذراع', example: 'He broke his arm.', exampleAr: 'كسر ذراعه.' },
    { english: 'leg', arabic: 'ساق', example: 'My legs are tired.', exampleAr: 'ساقاي متعبتان.' },
    { english: 'stomach', arabic: 'معدة', example: 'I have a stomach ache.', exampleAr: 'لدي ألم في المعدة.' },
    { english: 'back', arabic: 'ظهر', example: 'My back hurts from sitting.', exampleAr: 'ظهري يؤلمني من الجلوس.' },
    { english: 'hand', arabic: 'يد', example: 'Wash your hands before eating.', exampleAr: 'اغسل يديك قبل الأكل.' },
  ],
  sentences: [
    { english: 'Where does it hurt?', arabic: 'أين يؤلمك؟' },
    { english: 'I have pain in my back.', arabic: 'لدي ألم في ظهري.' },
    { english: 'Raise your right arm.', arabic: 'ارفع ذراعك اليمنى.' },
    { english: 'My feet are tired from walking.', arabic: 'قدماي متعبتان من المشي.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "stomach"؟', data: { options: ['رأس', 'معدة', 'ظهر', 'ساق'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: My ___ hurts from sitting too long.', data: { answer: 'back', hint: 'ظهر' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'head', arabic: 'رأس' }, { english: 'arm', arabic: 'ذراع' }, { english: 'leg', arabic: 'ساق' }] } },
    { type: 'reorder', promptAr: 'رتب: hurt / does / Where / it', data: { words: ['Where', 'does', 'it', 'hurt'], correctOrder: [0, 1, 2, 3] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "hand"؟', data: { options: ['قدم', 'يد', 'ذراع', 'أصبع'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Wash your ___ before eating.', data: { answer: 'hands' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: أين يؤلمك؟', data: { answer: 'Where does it hurt', alternatives: ['where does it hurt'] }, points: 30 },
    { type: 'mcq', promptAr: 'ماذا تستخدم للمشي؟', data: { options: ['Hands', 'Arms', 'Legs', 'Head'], correct: 2 }, points: 30 },
  ],
};

export const A2_U4_L2: LessonContent = {
  lessonId: 'A2-u04-l02',
  passingScore: 70,
  vocab: [
    { english: 'headache', arabic: 'صداع', example: 'I have a terrible headache.', exampleAr: 'لدي صداع مريع.' },
    { english: 'fever', arabic: 'حمى', example: 'She has a high fever.', exampleAr: 'لديها حمى عالية.' },
    { english: 'cold', arabic: 'زكام', example: 'I caught a cold.', exampleAr: 'أصبت بزكام.' },
    { english: 'cough', arabic: 'سعال', example: 'He has a bad cough.', exampleAr: 'لديه سعال سيء.' },
    { english: 'sore throat', arabic: 'التهاب الحلق', example: 'My throat is sore.', exampleAr: 'حلقي ملتهب.' },
    { english: 'flu', arabic: 'إنفلونزا', example: 'Many people have the flu.', exampleAr: 'كثير من الناس مصابون بالإنفلونزا.' },
  ],
  sentences: [
    { english: 'I don\'t feel well today.', arabic: 'لا أشعر بأنني بخير اليوم.' },
    { english: 'You should see a doctor.', arabic: 'يجب أن تراجع طبيباً.' },
    { english: 'Take some medicine for your headache.', arabic: 'خذ بعض الدواء لصداعك.' },
    { english: 'Rest in bed until you feel better.', arabic: 'استرح في السرير حتى تشعر بتحسن.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "fever"؟', data: { options: ['سعال', 'حمى', 'صداع', 'زكام'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I have a terrible ___.', data: { answer: 'headache', hint: 'صداع' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'cold', arabic: 'زكام' }, { english: 'cough', arabic: 'سعال' }, { english: 'flu', arabic: 'إنفلونزا' }] } },
    { type: 'reorder', promptAr: 'رتب: see / should / a / You / doctor', data: { words: ['You', 'should', 'see', 'a', 'doctor'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "sore throat"؟', data: { options: ['صداع', 'التهاب الحلق', 'زكام', 'حمى'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: I caught a ___.', data: { answer: 'cold' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: لا أشعر بأنني بخير اليوم', data: { answer: 'I don\'t feel well today', alternatives: ['i dont feel well today'] }, points: 30 },
    { type: 'mcq', promptAr: 'ماذا يجب أن تفعل عندما تمرض؟', data: { options: ['Go to work', 'See a doctor', 'Exercise hard', 'Stay up late'], correct: 1 }, points: 30 },
  ],
};

export const A2_U4_L3: LessonContent = {
  lessonId: 'A2-u04-l03',
  passingScore: 70,
  vocab: [
    { english: 'doctor', arabic: 'طبيب', example: 'The doctor examined me.', exampleAr: 'الطبيب فحصني.' },
    { english: 'nurse', arabic: 'ممرضة', example: 'The nurse took my temperature.', exampleAr: 'الممرضة قاست درجة حرارتي.' },
    { english: 'hospital', arabic: 'مستشفى', example: 'He\'s in the hospital.', exampleAr: 'هو في المستشفى.' },
    { english: 'pharmacy', arabic: 'صيدلية', example: 'Buy medicine from the pharmacy.', exampleAr: 'اشترِ الدواء من الصيدلية.' },
    { english: 'prescription', arabic: 'وصفة طبية', example: 'I need a prescription.', exampleAr: 'أحتاج وصفة طبية.' },
    { english: 'appointment', arabic: 'موعد', example: 'I have a doctor\'s appointment.', exampleAr: 'لدي موعد عند الطبيب.' },
  ],
  sentences: [
    { english: 'I need to make a doctor\'s appointment.', arabic: 'أحتاج لحجز موعد عند الطبيب.' },
    { english: 'The pharmacy is near the hospital.', arabic: 'الصيدلية قريبة من المستشفى.' },
    { english: 'Can I get this medicine without a prescription?', arabic: 'هل يمكنني الحصول على هذا الدواء بدون وصفة طبية؟' },
    { english: 'The nurse was very kind.', arabic: 'كانت الممرضة لطيفة جداً.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "pharmacy"؟', data: { options: ['مستشفى', 'صيدلية', 'عيادة', 'مختبر'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I have a doctor\'s ___ tomorrow.', data: { answer: 'appointment', hint: 'موعد' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'doctor', arabic: 'طبيب' }, { english: 'nurse', arabic: 'ممرضة' }, { english: 'hospital', arabic: 'مستشفى' }] } },
    { type: 'reorder', promptAr: 'رتب: appointment / make / I / a / need / to', data: { words: ['I', 'need', 'to', 'make', 'an', 'appointment'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "prescription"؟', data: { options: ['موعد', 'وصفة طبية', 'دواء', 'علاج'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Buy medicine from the ___.', data: { answer: 'pharmacy' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: أحتاج لحجز موعد عند الطبيب', data: { answer: 'I need to make a doctor\'s appointment', alternatives: ['i need to make a doctors appointment'] }, points: 30 },
    { type: 'mcq', promptAr: 'من يقيس درجة حرارتك؟', data: { options: ['Doctor', 'Nurse', 'Pharmacist', 'Teacher'], correct: 1 }, points: 30 },
  ],
};

export const A2_U4_L4: LessonContent = {
  lessonId: 'A2-u04-l04',
  passingScore: 70,
  vocab: [
    { english: 'medicine', arabic: 'دواء', example: 'Take your medicine on time.', exampleAr: 'خذ دواءك في الوقت المحدد.' },
    { english: 'pill', arabic: 'حبة دواء', example: 'Take one pill after meals.', exampleAr: 'خذ حبة واحدة بعد الوجبات.' },
    { english: 'injection', arabic: 'حقنة', example: 'The doctor gave me an injection.', exampleAr: 'الطبيب أعطاني حقنة.' },
    { english: 'bandage', arabic: 'ضمادة', example: 'Put a bandage on the wound.', exampleAr: 'ضع ضمادة على الجرح.' },
    { english: 'treatment', arabic: 'علاج', example: 'The treatment is working.', exampleAr: 'العلاج يعمل.' },
    { english: 'rest', arabic: 'راحة', example: 'You need plenty of rest.', exampleAr: 'تحتاج إلى راحة كافية.' },
  ],
  sentences: [
    { english: 'Take this medicine three times a day.', arabic: 'خذ هذا الدواء ثلاث مرات في اليوم.' },
    { english: 'The injection will make you feel better.', arabic: 'الحقنة ستجعلك تشعر بتحسن.' },
    { english: 'Get plenty of rest and drink water.', arabic: 'احصل على راحة كافية واشرب الماء.' },
    { english: 'The treatment takes two weeks.', arabic: 'العلاج يستغرق أسبوعين.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "injection"؟', data: { options: ['حبة', 'حقنة', 'ضمادة', 'شراب'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: Take one ___ after meals.', data: { answer: 'pill', hint: 'حبة' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'medicine', arabic: 'دواء' }, { english: 'bandage', arabic: 'ضمادة' }, { english: 'rest', arabic: 'راحة' }] } },
    { type: 'reorder', promptAr: 'رتب: medicine / Take / this / day / a / times / three', data: { words: ['Take', 'this', 'medicine', 'three', 'times', 'a', 'day'], correctOrder: [0, 1, 2, 3, 4, 5, 6] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "treatment"؟', data: { options: ['دواء', 'علاج', 'حقنة', 'راحة'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Put a ___ on the wound.', data: { answer: 'bandage' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: تحتاج إلى راحة كافية', data: { answer: 'You need plenty of rest', alternatives: ['you need plenty of rest'] }, points: 30 },
    { type: 'mcq', promptAr: 'كم مرة يعني "three times a day"؟', data: { options: ['Once', 'Twice', 'Three times', 'Four times'], correct: 2 }, points: 30 },
  ],
};

export const A2_U4_L5: LessonContent = {
  lessonId: 'A2-u04-l05',
  passingScore: 70,
  vocab: [
    { english: 'healthy', arabic: 'صحي', example: 'Eating vegetables is healthy.', exampleAr: 'أكل الخضروات صحي.' },
    { english: 'exercise', arabic: 'تمرين', example: 'Exercise is good for you.', exampleAr: 'التمرين مفيد لك.' },
    { english: 'diet', arabic: 'حمية / نظام غذائي', example: 'Follow a balanced diet.', exampleAr: 'اتبع نظاماً غذائياً متوازناً.' },
    { english: 'sleep', arabic: 'نوم', example: 'Get eight hours of sleep.', exampleAr: 'احصل على ثماني ساعات من النوم.' },
    { english: 'stress', arabic: 'ضغط / توتر', example: 'Too much stress is bad.', exampleAr: 'كثرة التوتر سيئة.' },
    { english: 'vitamins', arabic: 'فيتامينات', example: 'Take your vitamins daily.', exampleAr: 'خذ فيتاميناتك يومياً.' },
  ],
  sentences: [
    { english: 'How do you stay healthy?', arabic: 'كيف تحافظ على صحتك؟' },
    { english: 'I exercise three times a week.', arabic: 'أتمرن ثلاث مرات في الأسبوع.' },
    { english: 'A good diet prevents many diseases.', arabic: 'النظام الغذائي الجيد يمنع أمراضاً كثيرة.' },
    { english: 'Reduce stress by taking breaks.', arabic: 'قلل التوتر بأخذ فترات راحة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "healthy"؟', data: { options: ['مريض', 'صحي', 'متعب', 'ضعيف'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: Get eight hours of ___.', data: { answer: 'sleep', hint: 'نوم' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'exercise', arabic: 'تمرين' }, { english: 'diet', arabic: 'حمية / نظام غذائي' }, { english: 'stress', arabic: 'ضغط / توتر' }] } },
    { type: 'reorder', promptAr: 'رتب: healthy / you / do / stay / How', data: { words: ['How', 'do', 'you', 'stay', 'healthy'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "vitamins"؟', data: { options: ['دواء', 'فيتامينات', 'طعام', 'شراب'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ three times a week.', data: { answer: 'exercise' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: كيف تحافظ على صحتك؟', data: { answer: 'How do you stay healthy', alternatives: ['how do you stay healthy'] }, points: 30 },
    { type: 'mcq', promptAr: 'ما الذي يساعد على تقليل التوتر؟', data: { options: ['Working more', 'Taking breaks', 'Eating fast food', 'Sleeping less'], correct: 1 }, points: 30 },
  ],
};

export const a2Unit4Lessons: Record<string, LessonContent> = {
  'A2-u04-l01': A2_U4_L1,
  'A2-u04-l02': A2_U4_L2,
  'A2-u04-l03': A2_U4_L3,
  'A2-u04-l04': A2_U4_L4,
  'A2-u04-l05': A2_U4_L5,
};

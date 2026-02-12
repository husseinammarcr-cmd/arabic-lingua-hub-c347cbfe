import { LessonContent } from './a1-lessons';

// A2 Unit 2: Daily Activities - الأنشطة اليومية
export const A2_U2_L1: LessonContent = {
  lessonId: 'A2-u02-l01',
  passingScore: 70,
  vocab: [
    { english: 'to wake up', arabic: 'يستيقظ', example: 'I wake up at 6 AM.', exampleAr: 'أستيقظ في السادسة صباحاً.' },
    { english: 'to get dressed', arabic: 'يرتدي ملابسه', example: 'She gets dressed quickly.', exampleAr: 'ترتدي ملابسها بسرعة.' },
    { english: 'to brush teeth', arabic: 'ينظف أسنانه', example: 'Brush your teeth twice a day.', exampleAr: 'نظف أسنانك مرتين في اليوم.' },
    { english: 'to have breakfast', arabic: 'يتناول الإفطار', example: 'We have breakfast together.', exampleAr: 'نتناول الإفطار معاً.' },
    { english: 'to go to work', arabic: 'يذهب للعمل', example: 'He goes to work by bus.', exampleAr: 'يذهب للعمل بالحافلة.' },
    { english: 'to take a shower', arabic: 'يستحم', example: 'I take a shower every morning.', exampleAr: 'أستحم كل صباح.' },
  ],
  sentences: [
    { english: 'What time do you usually wake up?', arabic: 'في أي وقت تستيقظ عادةً؟' },
    { english: 'I have breakfast before going to work.', arabic: 'أتناول الإفطار قبل الذهاب للعمل.' },
    { english: 'She brushes her teeth after every meal.', arabic: 'تنظف أسنانها بعد كل وجبة.' },
    { english: 'They get dressed after taking a shower.', arabic: 'يرتدون ملابسهم بعد الاستحمام.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "to wake up"؟', data: { options: ['يستيقظ', 'ينام', 'يأكل', 'يشرب'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ at 7 AM every day.', data: { answer: 'wake up', hint: 'يستيقظ' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'to brush teeth', arabic: 'ينظف أسنانه' }, { english: 'to take a shower', arabic: 'يستحم' }, { english: 'to get dressed', arabic: 'يرتدي ملابسه' }] } },
    { type: 'reorder', promptAr: 'رتب: breakfast / I / have / morning / every', data: { words: ['I', 'have', 'breakfast', 'every', 'morning'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "to have breakfast"؟', data: { options: ['يتناول الغداء', 'يتناول الإفطار', 'يتناول العشاء', 'يشرب'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: She ___ her teeth twice a day.', data: { answer: 'brushes' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: أستيقظ في السادسة صباحاً', data: { answer: 'I wake up at 6 AM', alternatives: ['i wake up at 6 am'] }, points: 30 },
    { type: 'mcq', promptAr: 'أي نشاط يأتي أولاً في الصباح؟', data: { options: ['Go to work', 'Wake up', 'Have lunch', 'Sleep'], correct: 1 }, points: 30 },
  ],
};

export const A2_U2_L2: LessonContent = {
  lessonId: 'A2-u02-l02',
  passingScore: 70,
  vocab: [
    { english: 'to cook', arabic: 'يطبخ', example: 'My mother cooks delicious food.', exampleAr: 'أمي تطبخ طعاماً لذيذاً.' },
    { english: 'to clean', arabic: 'ينظف', example: 'I clean my room every week.', exampleAr: 'أنظف غرفتي كل أسبوع.' },
    { english: 'to wash dishes', arabic: 'يغسل الصحون', example: 'He washes dishes after dinner.', exampleAr: 'يغسل الصحون بعد العشاء.' },
    { english: 'to do laundry', arabic: 'يغسل الملابس', example: 'We do laundry on weekends.', exampleAr: 'نغسل الملابس في عطلة نهاية الأسبوع.' },
    { english: 'to vacuum', arabic: 'يكنس بالمكنسة', example: 'She vacuums the carpet.', exampleAr: 'تكنس السجادة بالمكنسة.' },
    { english: 'to iron', arabic: 'يكوي', example: 'I iron my shirts for work.', exampleAr: 'أكوي قمصاني للعمل.' },
  ],
  sentences: [
    { english: 'Who cooks dinner in your family?', arabic: 'من يطبخ العشاء في عائلتك؟' },
    { english: 'I always wash dishes after eating.', arabic: 'دائماً أغسل الصحون بعد الأكل.' },
    { english: 'She does laundry twice a week.', arabic: 'تغسل الملابس مرتين في الأسبوع.' },
    { english: 'Cleaning the house is important.', arabic: 'تنظيف المنزل مهم.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "to wash dishes"؟', data: { options: ['يغسل الصحون', 'يغسل الملابس', 'يطبخ', 'ينظف'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: My mother ___ delicious food every day.', data: { answer: 'cooks', hint: 'يطبخ' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'to iron', arabic: 'يكوي' }, { english: 'to vacuum', arabic: 'يكنس بالمكنسة' }, { english: 'to clean', arabic: 'ينظف' }] } },
    { type: 'reorder', promptAr: 'رتب: dishes / I / the / wash / after / dinner', data: { words: ['I', 'wash', 'the', 'dishes', 'after', 'dinner'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "to do laundry"؟', data: { options: ['يطبخ', 'يغسل الملابس', 'يكوي', 'ينظف'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: She ___ the carpet with a vacuum cleaner.', data: { answer: 'vacuums' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: أنظف غرفتي كل أسبوع', data: { answer: 'I clean my room every week', alternatives: ['i clean my room every week'] }, points: 30 },
    { type: 'mcq', promptAr: 'أي أداة تستخدم للكي؟', data: { options: ['Vacuum', 'Iron', 'Brush', 'Mop'], correct: 1 }, points: 30 },
  ],
};

export const A2_U2_L3: LessonContent = {
  lessonId: 'A2-u02-l03',
  passingScore: 70,
  vocab: [
    { english: 'to relax', arabic: 'يسترخي', example: 'I relax on the sofa after work.', exampleAr: 'أسترخي على الأريكة بعد العمل.' },
    { english: 'to watch TV', arabic: 'يشاهد التلفاز', example: 'They watch TV in the evening.', exampleAr: 'يشاهدون التلفاز في المساء.' },
    { english: 'to read a book', arabic: 'يقرأ كتاباً', example: 'She reads a book before sleeping.', exampleAr: 'تقرأ كتاباً قبل النوم.' },
    { english: 'to listen to music', arabic: 'يستمع للموسيقى', example: 'He listens to music while driving.', exampleAr: 'يستمع للموسيقى أثناء القيادة.' },
    { english: 'to play games', arabic: 'يلعب ألعاب', example: 'Children play games after school.', exampleAr: 'الأطفال يلعبون ألعاب بعد المدرسة.' },
    { english: 'to go for a walk', arabic: 'يذهب للمشي', example: 'We go for a walk every evening.', exampleAr: 'نذهب للمشي كل مساء.' },
  ],
  sentences: [
    { english: 'How do you relax after a busy day?', arabic: 'كيف تسترخي بعد يوم مزدحم؟' },
    { english: 'I enjoy reading books in my free time.', arabic: 'أستمتع بقراءة الكتب في وقت فراغي.' },
    { english: 'Listening to music helps me relax.', arabic: 'الاستماع للموسيقى يساعدني على الاسترخاء.' },
    { english: 'Going for a walk is good for health.', arabic: 'الذهاب للمشي مفيد للصحة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "to relax"؟', data: { options: ['يسترخي', 'يعمل', 'يجري', 'ينظف'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ TV in the evening.', data: { answer: 'watch', hint: 'يشاهد' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'to read a book', arabic: 'يقرأ كتاباً' }, { english: 'to listen to music', arabic: 'يستمع للموسيقى' }, { english: 'to go for a walk', arabic: 'يذهب للمشي' }] } },
    { type: 'reorder', promptAr: 'رتب: music / I / to / listen / while / studying', data: { words: ['I', 'listen', 'to', 'music', 'while', 'studying'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "to go for a walk"؟', data: { options: ['يجري', 'يذهب للمشي', 'يقود السيارة', 'يركب الدراجة'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: She ___ a book before sleeping.', data: { answer: 'reads' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: أستمتع بقراءة الكتب في وقت فراغي', data: { answer: 'I enjoy reading books in my free time', alternatives: ['i enjoy reading books in my free time'] }, points: 30 },
    { type: 'mcq', promptAr: 'ما الذي يساعدك على الاسترخاء؟', data: { options: ['Working hard', 'Listening to music', 'Running fast', 'Cleaning'], correct: 1 }, points: 30 },
  ],
};

export const A2_U2_L4: LessonContent = {
  lessonId: 'A2-u02-l04',
  passingScore: 70,
  vocab: [
    { english: 'to go to bed', arabic: 'يذهب للنوم', example: 'I go to bed at 10 PM.', exampleAr: 'أذهب للنوم في العاشرة مساءً.' },
    { english: 'to fall asleep', arabic: 'يغفو / ينام', example: 'He falls asleep quickly.', exampleAr: 'يغفو بسرعة.' },
    { english: 'to dream', arabic: 'يحلم', example: 'I dream about traveling.', exampleAr: 'أحلم بالسفر.' },
    { english: 'to set an alarm', arabic: 'يضبط المنبه', example: 'Set an alarm for 6 AM.', exampleAr: 'اضبط المنبه للسادسة صباحاً.' },
    { english: 'to sleep late', arabic: 'ينام متأخراً', example: 'Don\'t sleep late on weekdays.', exampleAr: 'لا تنم متأخراً في أيام الأسبوع.' },
    { english: 'to have a nap', arabic: 'يأخذ قيلولة', example: 'She has a nap after lunch.', exampleAr: 'تأخذ قيلولة بعد الغداء.' },
  ],
  sentences: [
    { english: 'What time do you usually go to bed?', arabic: 'في أي وقت تذهب للنوم عادةً؟' },
    { english: 'I always set an alarm before sleeping.', arabic: 'دائماً أضبط المنبه قبل النوم.' },
    { english: 'Taking a nap is refreshing.', arabic: 'أخذ قيلولة منعش.' },
    { english: 'I had a beautiful dream last night.', arabic: 'حلمت حلماً جميلاً الليلة الماضية.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "to have a nap"؟', data: { options: ['يأخذ قيلولة', 'ينام طوال الليل', 'يستيقظ', 'يحلم'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ to bed at 11 PM.', data: { answer: 'go', hint: 'يذهب' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'to fall asleep', arabic: 'يغفو / ينام' }, { english: 'to dream', arabic: 'يحلم' }, { english: 'to set an alarm', arabic: 'يضبط المنبه' }] } },
    { type: 'reorder', promptAr: 'رتب: alarm / I / an / set / for / 7 AM', data: { words: ['I', 'set', 'an', 'alarm', 'for', '7 AM'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "to sleep late"؟', data: { options: ['ينام مبكراً', 'ينام متأخراً', 'يستيقظ مبكراً', 'يأخذ قيلولة'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: She ___ asleep very quickly.', data: { answer: 'falls' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: أذهب للنوم في العاشرة مساءً', data: { answer: 'I go to bed at 10 PM', alternatives: ['i go to bed at 10 pm'] }, points: 30 },
    { type: 'mcq', promptAr: 'متى يأخذ الناس قيلولة عادةً؟', data: { options: ['In the morning', 'After lunch', 'At midnight', 'Before breakfast'], correct: 1 }, points: 30 },
  ],
};

export const A2_U2_L5: LessonContent = {
  lessonId: 'A2-u02-l05',
  passingScore: 70,
  vocab: [
    { english: 'daily routine', arabic: 'الروتين اليومي', example: 'My daily routine is very busy.', exampleAr: 'روتيني اليومي مشغول جداً.' },
    { english: 'schedule', arabic: 'جدول', example: 'I follow a strict schedule.', exampleAr: 'أتبع جدولاً صارماً.' },
    { english: 'habit', arabic: 'عادة', example: 'Reading is a good habit.', exampleAr: 'القراءة عادة جيدة.' },
    { english: 'busy', arabic: 'مشغول', example: 'I am very busy today.', exampleAr: 'أنا مشغول جداً اليوم.' },
    { english: 'free time', arabic: 'وقت فراغ', example: 'I don\'t have much free time.', exampleAr: 'ليس لدي وقت فراغ كثير.' },
    { english: 'weekend', arabic: 'عطلة نهاية الأسبوع', example: 'I rest on the weekend.', exampleAr: 'أستريح في عطلة نهاية الأسبوع.' },
  ],
  sentences: [
    { english: 'Tell me about your daily routine.', arabic: 'أخبرني عن روتينك اليومي.' },
    { english: 'I have many good habits.', arabic: 'لدي عادات جيدة كثيرة.' },
    { english: 'What do you do in your free time?', arabic: 'ماذا تفعل في وقت فراغك؟' },
    { english: 'The weekend is for relaxing.', arabic: 'عطلة نهاية الأسبوع للاسترخاء.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "daily routine"؟', data: { options: ['الروتين اليومي', 'العطلة', 'العمل', 'الدراسة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I don\'t have much ___ time.', data: { answer: 'free', hint: 'فراغ' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'schedule', arabic: 'جدول' }, { english: 'habit', arabic: 'عادة' }, { english: 'weekend', arabic: 'عطلة نهاية الأسبوع' }] } },
    { type: 'reorder', promptAr: 'رتب: routine / My / daily / busy / is / very', data: { words: ['My', 'daily', 'routine', 'is', 'very', 'busy'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "habit"؟', data: { options: ['جدول', 'عادة', 'روتين', 'وقت'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: I follow a strict ___.', data: { answer: 'schedule' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: ماذا تفعل في وقت فراغك؟', data: { answer: 'What do you do in your free time', alternatives: ['what do you do in your free time'] }, points: 30 },
    { type: 'mcq', promptAr: 'متى تكون العطلة؟', data: { options: ['Monday-Tuesday', 'Friday-Saturday', 'Wednesday-Thursday', 'Every day'], correct: 1 }, points: 30 },
  ],
};

export const a2Unit2Lessons: Record<string, LessonContent> = {
  'A2-u02-l01': A2_U2_L1,
  'A2-u02-l02': A2_U2_L2,
  'A2-u02-l03': A2_U2_L3,
  'A2-u02-l04': A2_U2_L4,
  'A2-u02-l05': A2_U2_L5,
};

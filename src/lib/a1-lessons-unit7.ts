// A1 Unit 7: Daily Routine - الروتين اليومي
import { LessonContent } from './a1-lessons';

export const A1_U7_L1: LessonContent = {
  lessonId: 'A1-u07-l01',
  passingScore: 70,
  vocab: [
    { english: 'Wake up', arabic: 'يستيقظ', example: 'I wake up at 6 AM.', exampleAr: 'أستيقظ الساعة السادسة صباحاً.' },
    { english: 'Get up', arabic: 'ينهض', example: 'I get up early.', exampleAr: 'أنهض مبكراً.' },
    { english: 'Brush teeth', arabic: 'يغسل أسنانه', example: 'I brush my teeth every morning.', exampleAr: 'أغسل أسناني كل صباح.' },
    { english: 'Take a shower', arabic: 'يستحم', example: 'I take a shower before breakfast.', exampleAr: 'أستحم قبل الفطور.' },
    { english: 'Get dressed', arabic: 'يرتدي ملابسه', example: 'I get dressed quickly.', exampleAr: 'أرتدي ملابسي بسرعة.' },
    { english: 'Have breakfast', arabic: 'يتناول الفطور', example: 'I have breakfast at 7 AM.', exampleAr: 'أتناول الفطور الساعة السابعة.' },
    { english: 'Morning', arabic: 'صباح', example: 'Good morning!', exampleAr: 'صباح الخير!' },
    { english: 'Early', arabic: 'مبكر', example: 'I wake up early.', exampleAr: 'أستيقظ مبكراً.' },
    { english: 'Late', arabic: 'متأخر', example: 'I am late for work.', exampleAr: 'أنا متأخر عن العمل.' },
    { english: 'Alarm', arabic: 'منبه', example: 'The alarm rings at 5:30.', exampleAr: 'المنبه يرن الساعة 5:30.' },
  ],
  sentences: [
    { english: 'I wake up at 6 AM.', arabic: 'أستيقظ الساعة السادسة صباحاً.' },
    { english: 'I brush my teeth every morning.', arabic: 'أغسل أسناني كل صباح.' },
    { english: 'I take a shower before breakfast.', arabic: 'أستحم قبل الفطور.' },
    { english: 'I get dressed quickly.', arabic: 'أرتدي ملابسي بسرعة.' },
    { english: 'I have breakfast with my family.', arabic: 'أتناول الفطور مع عائلتي.' },
    { english: 'The alarm rings at 5:30.', arabic: 'المنبه يرن الساعة 5:30.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "wake up"؟', data: { options: ['ينام', 'يستيقظ', 'يأكل', 'يشرب'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "يغسل أسنانه" بالإنجليزية؟', data: { options: ['take a shower', 'get dressed', 'brush teeth', 'wake up'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ up at 6 AM. (أستيقظ)', data: { answer: 'wake' } },
    { type: 'matching', promptAr: 'طابق أنشطة الصباح', data: { pairs: [{ english: 'take a shower', arabic: 'يستحم' }, { english: 'get dressed', arabic: 'يرتدي ملابسه' }, { english: 'have breakfast', arabic: 'يتناول الفطور' }, { english: 'alarm', arabic: 'منبه' }] } },
    { type: 'reorder', promptAr: 'رتب: teeth / I / my / brush / morning / every', data: { words: ['I', 'brush', 'my', 'teeth', 'every', 'morning'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'ماذا تفعل أولاً في الصباح؟', data: { options: ['have dinner', 'go to sleep', 'wake up', 'watch TV'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: I take a ___ before breakfast. (دش)', data: { answer: 'shower' } },
    { type: 'translation', promptAr: 'ترجم: أرتدي ملابسي بسرعة', data: { answer: 'I get dressed quickly', alternatives: ['i get dressed quickly'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "morning"؟', data: { options: ['مساء', 'ليل', 'صباح', 'ظهر'], correct: 2 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "يستحم" بالإنجليزية؟', data: { options: ['brush teeth', 'take a shower', 'get dressed', 'wake up'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I get ___ quickly. (ملابسي)', data: { answer: 'dressed' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'early', arabic: 'مبكر' }, { english: 'late', arabic: 'متأخر' }, { english: 'get up', arabic: 'ينهض' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أتناول الفطور مع عائلتي', data: { answer: 'I have breakfast with my family', alternatives: ['i have breakfast with my family'] }, points: 25 },
  ]
};

export const A1_U7_L2: LessonContent = {
  lessonId: 'A1-u07-l02',
  passingScore: 70,
  vocab: [
    { english: 'Leave home', arabic: 'يغادر المنزل', example: 'I leave home at 7:30.', exampleAr: 'أغادر المنزل الساعة 7:30.' },
    { english: 'Arrive', arabic: 'يصل', example: 'I arrive at work at 8 AM.', exampleAr: 'أصل إلى العمل الساعة الثامنة.' },
    { english: 'Commute', arabic: 'تنقل', example: 'My commute takes 30 minutes.', exampleAr: 'تنقلي يستغرق 30 دقيقة.' },
    { english: 'Traffic jam', arabic: 'ازدحام مروري', example: 'There is a traffic jam.', exampleAr: 'هناك ازدحام مروري.' },
    { english: 'On time', arabic: 'في الوقت', example: 'I try to be on time.', exampleAr: 'أحاول أن أكون في الوقت.' },
    { english: 'Rush hour', arabic: 'ساعة الذروة', example: 'Rush hour is busy.', exampleAr: 'ساعة الذروة مزدحمة.' },
    { english: 'Catch the bus', arabic: 'يلحق الحافلة', example: 'I catch the bus at 7.', exampleAr: 'ألحق الحافلة الساعة 7.' },
    { english: 'Miss the bus', arabic: 'يفوته الحافلة', example: 'I missed the bus today.', exampleAr: 'فاتتني الحافلة اليوم.' },
    { english: 'Lunch break', arabic: 'استراحة الغداء', example: 'Lunch break is at 12:30.', exampleAr: 'استراحة الغداء الساعة 12:30.' },
    { english: 'Meeting', arabic: 'اجتماع', example: 'I have a meeting at 10.', exampleAr: 'لدي اجتماع الساعة العاشرة.' },
  ],
  sentences: [
    { english: 'I leave home at 7:30.', arabic: 'أغادر المنزل الساعة 7:30.' },
    { english: 'I arrive at work at 8 AM.', arabic: 'أصل إلى العمل الساعة الثامنة.' },
    { english: 'There is a traffic jam every morning.', arabic: 'هناك ازدحام مروري كل صباح.' },
    { english: 'I try to be on time.', arabic: 'أحاول أن أكون في الوقت.' },
    { english: 'I have a meeting at 10.', arabic: 'لدي اجتماع الساعة العاشرة.' },
    { english: 'Lunch break is at 12:30.', arabic: 'استراحة الغداء الساعة 12:30.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "leave home"؟', data: { options: ['يصل', 'يغادر المنزل', 'ينام', 'يأكل'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "يصل" بالإنجليزية؟', data: { options: ['leave', 'arrive', 'go', 'come'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ home at 7:30. (أغادر)', data: { answer: 'leave' } },
    { type: 'matching', promptAr: 'طابق العبارات', data: { pairs: [{ english: 'traffic jam', arabic: 'ازدحام مروري' }, { english: 'on time', arabic: 'في الوقت' }, { english: 'rush hour', arabic: 'ساعة الذروة' }, { english: 'meeting', arabic: 'اجتماع' }] } },
    { type: 'reorder', promptAr: 'رتب: at / arrive / I / work / 8 AM / at', data: { words: ['I', 'arrive', 'at', 'work', 'at', '8 AM'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'ماذا يحدث عندما يكون المرور كثيفاً؟', data: { options: ['traffic jam', 'lunch break', 'meeting', 'on time'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I try to be on ___. (الوقت)', data: { answer: 'time' } },
    { type: 'translation', promptAr: 'ترجم: لدي اجتماع الساعة العاشرة', data: { answer: 'I have a meeting at 10', alternatives: ['i have a meeting at 10', 'I have a meeting at ten'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "arrive"؟', data: { options: ['يغادر', 'يصل', 'يذهب', 'يرجع'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "ازدحام مروري" بالإنجليزية؟', data: { options: ['rush hour', 'traffic jam', 'on time', 'commute'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I have a ___ at 10. (اجتماع)', data: { answer: 'meeting' }, points: 20 },
    { type: 'matching', promptAr: 'طابق العبارات', data: { pairs: [{ english: 'catch the bus', arabic: 'يلحق الحافلة' }, { english: 'miss the bus', arabic: 'يفوته الحافلة' }, { english: 'commute', arabic: 'تنقل' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: هناك ازدحام مروري كل صباح', data: { answer: 'There is a traffic jam every morning', alternatives: ['there is a traffic jam every morning'] }, points: 25 },
  ]
};

export const A1_U7_L3: LessonContent = {
  lessonId: 'A1-u07-l03',
  passingScore: 70,
  vocab: [
    { english: 'Come home', arabic: 'يعود للمنزل', example: 'I come home at 5 PM.', exampleAr: 'أعود للمنزل الساعة الخامسة.' },
    { english: 'Rest', arabic: 'يرتاح', example: 'I rest for an hour.', exampleAr: 'أرتاح لمدة ساعة.' },
    { english: 'Have dinner', arabic: 'يتناول العشاء', example: 'We have dinner at 7 PM.', exampleAr: 'نتناول العشاء الساعة السابعة.' },
    { english: 'Watch TV', arabic: 'يشاهد التلفاز', example: 'I watch TV with my family.', exampleAr: 'أشاهد التلفاز مع عائلتي.' },
    { english: 'Read a book', arabic: 'يقرأ كتاباً', example: 'I read a book before bed.', exampleAr: 'أقرأ كتاباً قبل النوم.' },
    { english: 'Spend time', arabic: 'يقضي وقتاً', example: 'I spend time with family.', exampleAr: 'أقضي وقتاً مع العائلة.' },
    { english: 'Evening', arabic: 'مساء', example: 'Good evening!', exampleAr: 'مساء الخير!' },
    { english: 'Tired', arabic: 'متعب', example: 'I am tired after work.', exampleAr: 'أنا متعب بعد العمل.' },
    { english: 'Relax', arabic: 'يسترخي', example: 'I relax on the sofa.', exampleAr: 'أسترخي على الأريكة.' },
    { english: 'Homework', arabic: 'واجب منزلي', example: 'I do my homework.', exampleAr: 'أعمل واجبي المنزلي.' },
  ],
  sentences: [
    { english: 'I come home at 5 PM.', arabic: 'أعود للمنزل الساعة الخامسة مساءً.' },
    { english: 'I rest for an hour.', arabic: 'أرتاح لمدة ساعة.' },
    { english: 'We have dinner at 7 PM.', arabic: 'نتناول العشاء الساعة السابعة.' },
    { english: 'I watch TV with my family.', arabic: 'أشاهد التلفاز مع عائلتي.' },
    { english: 'I do my homework before dinner.', arabic: 'أعمل واجبي المنزلي قبل العشاء.' },
    { english: 'I am tired after work.', arabic: 'أنا متعب بعد العمل.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "come home"؟', data: { options: ['يذهب', 'يعود للمنزل', 'ينام', 'يأكل'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "يشاهد التلفاز" بالإنجليزية؟', data: { options: ['read a book', 'watch TV', 'have dinner', 'rest'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ home at 5 PM. (أعود)', data: { answer: 'come' } },
    { type: 'matching', promptAr: 'طابق أنشطة المساء', data: { pairs: [{ english: 'rest', arabic: 'يرتاح' }, { english: 'have dinner', arabic: 'يتناول العشاء' }, { english: 'relax', arabic: 'يسترخي' }, { english: 'tired', arabic: 'متعب' }] } },
    { type: 'reorder', promptAr: 'رتب: TV / I / family / my / with / watch', data: { words: ['I', 'watch', 'TV', 'with', 'my', 'family'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'ماذا يفعل الطلاب بعد المدرسة؟', data: { options: ['go to work', 'do homework', 'wake up', 'have breakfast'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I am ___ after work. (متعب)', data: { answer: 'tired' } },
    { type: 'translation', promptAr: 'ترجم: أشاهد التلفاز مع عائلتي', data: { answer: 'I watch TV with my family', alternatives: ['i watch tv with my family'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "rest"؟', data: { options: ['يعمل', 'يرتاح', 'يأكل', 'يشرب'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "واجب منزلي" بالإنجليزية؟', data: { options: ['housework', 'homework', 'work', 'school'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: We have ___ at 7 PM. (العشاء)', data: { answer: 'dinner' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'read a book', arabic: 'يقرأ كتاباً' }, { english: 'spend time', arabic: 'يقضي وقتاً' }, { english: 'evening', arabic: 'مساء' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أعمل واجبي المنزلي قبل العشاء', data: { answer: 'I do my homework before dinner', alternatives: ['i do my homework before dinner'] }, points: 25 },
  ]
};

export const A1_U7_L4: LessonContent = {
  lessonId: 'A1-u07-l04',
  passingScore: 70,
  vocab: [
    { english: 'Go to bed', arabic: 'يذهب للنوم', example: 'I go to bed at 10 PM.', exampleAr: 'أذهب للنوم الساعة العاشرة.' },
    { english: 'Sleep', arabic: 'ينام', example: 'I sleep 8 hours.', exampleAr: 'أنام 8 ساعات.' },
    { english: 'Pajamas', arabic: 'بيجاما', example: 'I put on my pajamas.', exampleAr: 'أرتدي بيجامتي.' },
    { english: 'Dream', arabic: 'حلم', example: 'I had a good dream.', exampleAr: 'حلمت حلماً جميلاً.' },
    { english: 'Night', arabic: 'ليل', example: 'Good night!', exampleAr: 'تصبح على خير!' },
    { english: 'Midnight', arabic: 'منتصف الليل', example: 'I slept at midnight.', exampleAr: 'نمت في منتصف الليل.' },
    { english: 'Set the alarm', arabic: 'يضبط المنبه', example: 'I set the alarm for tomorrow.', exampleAr: 'أضبط المنبه للغد.' },
    { english: 'Turn off the light', arabic: 'يطفئ الضوء', example: 'I turn off the light.', exampleAr: 'أطفئ الضوء.' },
    { english: 'Good night', arabic: 'تصبح على خير', example: 'Good night, sleep well!', exampleAr: 'تصبح على خير، نم جيداً!' },
    { english: 'Sweet dreams', arabic: 'أحلام سعيدة', example: 'Sweet dreams!', exampleAr: 'أحلام سعيدة!' },
  ],
  sentences: [
    { english: 'I go to bed at 10 PM.', arabic: 'أذهب للنوم الساعة العاشرة.' },
    { english: 'I put on my pajamas.', arabic: 'أرتدي بيجامتي.' },
    { english: 'I set the alarm for tomorrow.', arabic: 'أضبط المنبه للغد.' },
    { english: 'I turn off the light.', arabic: 'أطفئ الضوء.' },
    { english: 'Good night, sweet dreams!', arabic: 'تصبح على خير، أحلام سعيدة!' },
    { english: 'I sleep 8 hours every night.', arabic: 'أنام 8 ساعات كل ليلة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "go to bed"؟', data: { options: ['يستيقظ', 'يذهب للنوم', 'يأكل', 'يقرأ'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "ينام" بالإنجليزية؟', data: { options: ['wake up', 'sleep', 'rest', 'dream'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I go to ___ at 10 PM. (النوم)', data: { answer: 'bed' } },
    { type: 'matching', promptAr: 'طابق كلمات وقت النوم', data: { pairs: [{ english: 'pajamas', arabic: 'بيجاما' }, { english: 'dream', arabic: 'حلم' }, { english: 'night', arabic: 'ليل' }, { english: 'midnight', arabic: 'منتصف الليل' }] } },
    { type: 'reorder', promptAr: 'رتب: the / I / off / turn / light', data: { words: ['I', 'turn', 'off', 'the', 'light'], correctOrder: [0, 1, 2, 3, 4] } },
    { type: 'mcq', promptAr: 'ماذا تقول قبل النوم؟', data: { options: ['good morning', 'good night', 'good afternoon', 'hello'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I set the ___ for tomorrow. (المنبه)', data: { answer: 'alarm' } },
    { type: 'translation', promptAr: 'ترجم: أحلام سعيدة', data: { answer: 'Sweet dreams', alternatives: ['sweet dreams'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "sleep"؟', data: { options: ['يستيقظ', 'ينام', 'يحلم', 'يرتاح'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "ليل" بالإنجليزية؟', data: { options: ['morning', 'afternoon', 'evening', 'night'], correct: 3 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I put on my ___. (بيجاما)', data: { answer: 'pajamas' }, points: 20 },
    { type: 'matching', promptAr: 'طابق العبارات', data: { pairs: [{ english: 'good night', arabic: 'تصبح على خير' }, { english: 'set the alarm', arabic: 'يضبط المنبه' }, { english: 'turn off the light', arabic: 'يطفئ الضوء' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أنام 8 ساعات كل ليلة', data: { answer: 'I sleep 8 hours every night', alternatives: ['i sleep 8 hours every night'] }, points: 25 },
  ]
};

export const A1_U7_L5: LessonContent = {
  lessonId: 'A1-u07-l05',
  passingScore: 70,
  vocab: [
    { english: 'Weekend', arabic: 'نهاية الأسبوع', example: 'I love the weekend.', exampleAr: 'أحب نهاية الأسبوع.' },
    { english: 'Saturday', arabic: 'السبت', example: 'I relax on Saturday.', exampleAr: 'أسترخي يوم السبت.' },
    { english: 'Sunday', arabic: 'الأحد', example: 'I visit friends on Sunday.', exampleAr: 'أزور أصدقائي يوم الأحد.' },
    { english: 'Sleep in', arabic: 'ينام متأخراً', example: 'I sleep in on weekends.', exampleAr: 'أنام متأخراً في نهاية الأسبوع.' },
    { english: 'Go out', arabic: 'يخرج', example: 'I go out with friends.', exampleAr: 'أخرج مع أصدقائي.' },
    { english: 'Visit friends', arabic: 'يزور الأصدقاء', example: 'I visit friends on Sunday.', exampleAr: 'أزور أصدقائي يوم الأحد.' },
    { english: 'Go shopping', arabic: 'يتسوق', example: 'We go shopping together.', exampleAr: 'نتسوق معاً.' },
    { english: 'Have fun', arabic: 'يستمتع', example: 'We have fun on weekends.', exampleAr: 'نستمتع في نهاية الأسبوع.' },
    { english: 'Free time', arabic: 'وقت فراغ', example: 'I have more free time.', exampleAr: 'لدي وقت فراغ أكثر.' },
    { english: 'Plan', arabic: 'خطة', example: 'What are your plans?', exampleAr: 'ما خططك؟' },
  ],
  sentences: [
    { english: 'I love the weekend.', arabic: 'أحب نهاية الأسبوع.' },
    { english: 'I sleep in on Saturday.', arabic: 'أنام متأخراً يوم السبت.' },
    { english: 'I visit my friends on Sunday.', arabic: 'أزور أصدقائي يوم الأحد.' },
    { english: 'We go shopping together.', arabic: 'نتسوق معاً.' },
    { english: 'I have more free time on weekends.', arabic: 'لدي وقت فراغ أكثر في نهاية الأسبوع.' },
    { english: 'What are your plans for the weekend?', arabic: 'ما خططك لنهاية الأسبوع؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "weekend"؟', data: { options: ['يوم', 'أسبوع', 'نهاية الأسبوع', 'شهر'], correct: 2 } },
    { type: 'mcq', promptAr: 'كيف تقول "يزور الأصدقاء" بالإنجليزية؟', data: { options: ['go out', 'visit friends', 'go shopping', 'have fun'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I love the ___. (نهاية الأسبوع)', data: { answer: 'weekend' } },
    { type: 'matching', promptAr: 'طابق كلمات نهاية الأسبوع', data: { pairs: [{ english: 'Saturday', arabic: 'السبت' }, { english: 'Sunday', arabic: 'الأحد' }, { english: 'go out', arabic: 'يخرج' }, { english: 'free time', arabic: 'وقت فراغ' }] } },
    { type: 'reorder', promptAr: 'رتب: Saturday / in / on / sleep / I', data: { words: ['I', 'sleep', 'in', 'on', 'Saturday'], correctOrder: [0, 1, 2, 3, 4] } },
    { type: 'mcq', promptAr: 'ماذا يفعل الناس عادة في نهاية الأسبوع؟', data: { options: ['go to work', 'study hard', 'have fun', 'wake up early'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: We go ___ together. (نتسوق)', data: { answer: 'shopping' } },
    { type: 'translation', promptAr: 'ترجم: ما خططك لنهاية الأسبوع؟', data: { answer: 'What are your plans for the weekend?', alternatives: ['what are your plans for the weekend'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Saturday"؟', data: { options: ['الأحد', 'الاثنين', 'السبت', 'الجمعة'], correct: 2 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "يتسوق" بالإنجليزية؟', data: { options: ['go out', 'go shopping', 'visit', 'have fun'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ my friends on Sunday. (أزور)', data: { answer: 'visit' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'sleep in', arabic: 'ينام متأخراً' }, { english: 'have fun', arabic: 'يستمتع' }, { english: 'plan', arabic: 'خطة' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أحب نهاية الأسبوع', data: { answer: 'I love the weekend', alternatives: ['i love the weekend'] }, points: 25 },
  ]
};

export const a1Unit7Lessons: Record<string, LessonContent> = {
  'A1-u07-l01': A1_U7_L1,
  'A1-u07-l02': A1_U7_L2,
  'A1-u07-l03': A1_U7_L3,
  'A1-u07-l04': A1_U7_L4,
  'A1-u07-l05': A1_U7_L5,
};

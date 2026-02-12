import { LessonContent } from './a1-lessons';

// A2 Unit 5: Travel & Transportation - السفر والمواصلات
export const A2_U5_L1: LessonContent = {
  lessonId: 'A2-u05-l01',
  passingScore: 70,
  vocab: [
    { english: 'airport', arabic: 'مطار', example: 'We arrived at the airport early.', exampleAr: 'وصلنا إلى المطار مبكراً.' },
    { english: 'train station', arabic: 'محطة القطار', example: 'The train station is nearby.', exampleAr: 'محطة القطار قريبة.' },
    { english: 'bus stop', arabic: 'موقف الحافلة', example: 'Wait at the bus stop.', exampleAr: 'انتظر عند موقف الحافلة.' },
    { english: 'ticket', arabic: 'تذكرة', example: 'I bought a train ticket.', exampleAr: 'اشتريت تذكرة قطار.' },
    { english: 'passport', arabic: 'جواز سفر', example: 'Don\'t forget your passport.', exampleAr: 'لا تنسَ جواز سفرك.' },
    { english: 'luggage', arabic: 'أمتعة', example: 'My luggage is heavy.', exampleAr: 'أمتعتي ثقيلة.' },
  ],
  sentences: [
    { english: 'Where is the nearest train station?', arabic: 'أين أقرب محطة قطار؟' },
    { english: 'I need to buy a ticket.', arabic: 'أحتاج لشراء تذكرة.' },
    { english: 'Please show your passport.', arabic: 'من فضلك أظهر جواز سفرك.' },
    { english: 'Is this your luggage?', arabic: 'هل هذه أمتعتك؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "airport"؟', data: { options: ['محطة قطار', 'مطار', 'موقف حافلة', 'ميناء'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: Don\'t forget your ___.', data: { answer: 'passport', hint: 'جواز سفر' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'ticket', arabic: 'تذكرة' }, { english: 'luggage', arabic: 'أمتعة' }, { english: 'bus stop', arabic: 'موقف الحافلة' }] } },
    { type: 'reorder', promptAr: 'رتب: station / the / train / Where / nearest / is', data: { words: ['Where', 'is', 'the', 'nearest', 'train', 'station'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "luggage"؟', data: { options: ['تذكرة', 'أمتعة', 'جواز سفر', 'حقيبة يد'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Wait at the bus ___.', data: { answer: 'stop' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: أحتاج لشراء تذكرة', data: { answer: 'I need to buy a ticket', alternatives: ['i need to buy a ticket'] }, points: 30 },
    { type: 'mcq', promptAr: 'ماذا تحتاج للسفر دولياً؟', data: { options: ['Driver license', 'Passport', 'Library card', 'Student ID'], correct: 1 }, points: 30 },
  ],
};

export const A2_U5_L2: LessonContent = {
  lessonId: 'A2-u05-l02',
  passingScore: 70,
  vocab: [
    { english: 'flight', arabic: 'رحلة جوية', example: 'My flight is at 3 PM.', exampleAr: 'رحلتي في الثالثة عصراً.' },
    { english: 'to board', arabic: 'يصعد', example: 'We will board the plane soon.', exampleAr: 'سنصعد الطائرة قريباً.' },
    { english: 'departure', arabic: 'مغادرة', example: 'Departure is at gate 5.', exampleAr: 'المغادرة من البوابة 5.' },
    { english: 'arrival', arabic: 'وصول', example: 'Arrival time is 8 PM.', exampleAr: 'وقت الوصول الثامنة مساءً.' },
    { english: 'delay', arabic: 'تأخير', example: 'There\'s a two-hour delay.', exampleAr: 'هناك تأخير ساعتين.' },
    { english: 'boarding pass', arabic: 'بطاقة الصعود', example: 'Show your boarding pass.', exampleAr: 'أظهر بطاقة الصعود.' },
  ],
  sentences: [
    { english: 'What time is your flight?', arabic: 'في أي وقت رحلتك؟' },
    { english: 'The flight is delayed by one hour.', arabic: 'الرحلة متأخرة ساعة واحدة.' },
    { english: 'We are now boarding at gate 10.', arabic: 'نحن الآن نصعد من البوابة 10.' },
    { english: 'Please check the arrival time.', arabic: 'من فضلك تحقق من وقت الوصول.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "departure"؟', data: { options: ['وصول', 'مغادرة', 'تأخير', 'رحلة'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: Show your boarding ___.', data: { answer: 'pass', hint: 'بطاقة' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'flight', arabic: 'رحلة جوية' }, { english: 'arrival', arabic: 'وصول' }, { english: 'delay', arabic: 'تأخير' }] } },
    { type: 'reorder', promptAr: 'رتب: flight / your / time / What / is', data: { words: ['What', 'time', 'is', 'your', 'flight'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "to board"؟', data: { options: ['ينزل', 'يصعد', 'يسافر', 'يصل'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: There\'s a two-hour ___.', data: { answer: 'delay' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: الرحلة متأخرة ساعة واحدة', data: { answer: 'The flight is delayed by one hour', alternatives: ['the flight is delayed by one hour'] }, points: 30 },
    { type: 'mcq', promptAr: 'ماذا تحتاج لصعود الطائرة؟', data: { options: ['Ticket only', 'Boarding pass', 'Luggage tag', 'Hotel key'], correct: 1 }, points: 30 },
  ],
};

export const A2_U5_L3: LessonContent = {
  lessonId: 'A2-u05-l03',
  passingScore: 70,
  vocab: [
    { english: 'taxi', arabic: 'تاكسي', example: 'Let\'s take a taxi.', exampleAr: 'لنأخذ تاكسي.' },
    { english: 'subway', arabic: 'مترو الأنفاق', example: 'The subway is fast.', exampleAr: 'المترو سريع.' },
    { english: 'fare', arabic: 'أجرة', example: 'What\'s the fare to downtown?', exampleAr: 'كم أجرة الوصول للمركز؟' },
    { english: 'driver', arabic: 'سائق', example: 'The driver was friendly.', exampleAr: 'السائق كان ودوداً.' },
    { english: 'route', arabic: 'طريق / مسار', example: 'What route should I take?', exampleAr: 'أي طريق يجب أن أسلك؟' },
    { english: 'traffic', arabic: 'مرور / ازدحام', example: 'There\'s heavy traffic.', exampleAr: 'هناك ازدحام شديد.' },
  ],
  sentences: [
    { english: 'How much is the taxi fare?', arabic: 'كم أجرة التاكسي؟' },
    { english: 'The subway is cheaper than a taxi.', arabic: 'المترو أرخص من التاكسي.' },
    { english: 'Take the fastest route please.', arabic: 'خذ أسرع طريق من فضلك.' },
    { english: 'We\'re stuck in traffic.', arabic: 'نحن عالقون في الازدحام.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "fare"؟', data: { options: ['تذكرة', 'أجرة', 'طريق', 'محطة'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: There\'s heavy ___ today.', data: { answer: 'traffic', hint: 'ازدحام' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'taxi', arabic: 'تاكسي' }, { english: 'subway', arabic: 'مترو الأنفاق' }, { english: 'driver', arabic: 'سائق' }] } },
    { type: 'reorder', promptAr: 'رتب: fare / the / taxi / How / is / much', data: { words: ['How', 'much', 'is', 'the', 'taxi', 'fare'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "route"؟', data: { options: ['أجرة', 'طريق / مسار', 'محطة', 'سيارة'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ was very friendly.', data: { answer: 'driver' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: نحن عالقون في الازدحام', data: { answer: 'We\'re stuck in traffic', alternatives: ['were stuck in traffic', 'we are stuck in traffic'] }, points: 30 },
    { type: 'mcq', promptAr: 'أيهما أرخص عادةً؟', data: { options: ['Taxi', 'Private car', 'Subway', 'Helicopter'], correct: 2 }, points: 30 },
  ],
};

export const A2_U5_L4: LessonContent = {
  lessonId: 'A2-u05-l04',
  passingScore: 70,
  vocab: [
    { english: 'to book', arabic: 'يحجز', example: 'I want to book a hotel.', exampleAr: 'أريد أن أحجز فندقاً.' },
    { english: 'reservation', arabic: 'حجز', example: 'I have a reservation.', exampleAr: 'لدي حجز.' },
    { english: 'round trip', arabic: 'ذهاب وعودة', example: 'One round trip ticket please.', exampleAr: 'تذكرة ذهاب وعودة من فضلك.' },
    { english: 'one way', arabic: 'اتجاه واحد', example: 'I need a one way ticket.', exampleAr: 'أحتاج تذكرة اتجاه واحد.' },
    { english: 'to cancel', arabic: 'يلغي', example: 'Can I cancel my booking?', exampleAr: 'هل يمكنني إلغاء حجزي؟' },
    { english: 'to confirm', arabic: 'يؤكد', example: 'Please confirm your reservation.', exampleAr: 'من فضلك أكد حجزك.' },
  ],
  sentences: [
    { english: 'I\'d like to book a flight.', arabic: 'أريد أن أحجز رحلة جوية.' },
    { english: 'Is it a round trip or one way?', arabic: 'هل هي ذهاب وعودة أم اتجاه واحد؟' },
    { english: 'I need to cancel my reservation.', arabic: 'أحتاج لإلغاء حجزي.' },
    { english: 'Your booking is confirmed.', arabic: 'حجزك مؤكد.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "round trip"؟', data: { options: ['اتجاه واحد', 'ذهاب وعودة', 'رحلة طويلة', 'رحلة قصيرة'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I have a ___ at the hotel.', data: { answer: 'reservation', hint: 'حجز' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'to book', arabic: 'يحجز' }, { english: 'to cancel', arabic: 'يلغي' }, { english: 'to confirm', arabic: 'يؤكد' }] } },
    { type: 'reorder', promptAr: 'رتب: book / like / I\'d / a / to / flight', data: { words: ['I\'d', 'like', 'to', 'book', 'a', 'flight'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "one way"؟', data: { options: ['ذهاب وعودة', 'اتجاه واحد', 'رحلة مباشرة', 'رحلة متعددة'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Can I ___ my booking?', data: { answer: 'cancel' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: حجزك مؤكد', data: { answer: 'Your booking is confirmed', alternatives: ['your booking is confirmed'] }, points: 30 },
    { type: 'mcq', promptAr: 'ماذا يجب أن تفعل قبل السفر؟', data: { options: ['Cancel reservation', 'Book a ticket', 'Lose passport', 'Forget luggage'], correct: 1 }, points: 30 },
  ],
};

export const A2_U5_L5: LessonContent = {
  lessonId: 'A2-u05-l05',
  passingScore: 70,
  vocab: [
    { english: 'destination', arabic: 'وجهة', example: 'What\'s your destination?', exampleAr: 'ما هي وجهتك؟' },
    { english: 'journey', arabic: 'رحلة', example: 'The journey takes 3 hours.', exampleAr: 'الرحلة تستغرق 3 ساعات.' },
    { english: 'tourist', arabic: 'سائح', example: 'Many tourists visit this city.', exampleAr: 'كثير من السياح يزورون هذه المدينة.' },
    { english: 'sightseeing', arabic: 'جولة سياحية', example: 'Let\'s go sightseeing.', exampleAr: 'لنذهب في جولة سياحية.' },
    { english: 'souvenir', arabic: 'تذكار', example: 'I bought a souvenir.', exampleAr: 'اشتريت تذكاراً.' },
    { english: 'vacation', arabic: 'إجازة', example: 'I\'m on vacation.', exampleAr: 'أنا في إجازة.' },
  ],
  sentences: [
    { english: 'Have a safe journey!', arabic: 'رحلة سعيدة!' },
    { english: 'We went sightseeing yesterday.', arabic: 'ذهبنا في جولة سياحية أمس.' },
    { english: 'This is a popular tourist destination.', arabic: 'هذه وجهة سياحية مشهورة.' },
    { english: 'I\'m looking for souvenirs.', arabic: 'أبحث عن تذكارات.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "destination"؟', data: { options: ['رحلة', 'وجهة', 'تذكار', 'سائح'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I\'m on ___ this week.', data: { answer: 'vacation', hint: 'إجازة' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'tourist', arabic: 'سائح' }, { english: 'souvenir', arabic: 'تذكار' }, { english: 'journey', arabic: 'رحلة' }] } },
    { type: 'reorder', promptAr: 'رتب: journey / Have / a / safe', data: { words: ['Have', 'a', 'safe', 'journey'], correctOrder: [0, 1, 2, 3] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "sightseeing"؟', data: { options: ['تسوق', 'جولة سياحية', 'سباحة', 'تخييم'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: I bought a ___ from the gift shop.', data: { answer: 'souvenir' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: رحلة سعيدة!', data: { answer: 'Have a safe journey', alternatives: ['have a safe journey'] }, points: 30 },
    { type: 'mcq', promptAr: 'ماذا يشتري السياح عادةً؟', data: { options: ['Cars', 'Houses', 'Souvenirs', 'Furniture'], correct: 2 }, points: 30 },
  ],
};

export const a2Unit5Lessons: Record<string, LessonContent> = {
  'A2-u05-l01': A2_U5_L1,
  'A2-u05-l02': A2_U5_L2,
  'A2-u05-l03': A2_U5_L3,
  'A2-u05-l04': A2_U5_L4,
  'A2-u05-l05': A2_U5_L5,
};

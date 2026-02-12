import { LessonContent } from './a1-lessons';

// A2 Unit 8: At the Hotel - في الفندق
export const A2_U8_L1: LessonContent = {
  lessonId: 'A2-u08-l01',
  passingScore: 70,
  vocab: [
    { english: 'check in', arabic: 'تسجيل الدخول', example: 'I\'d like to check in.', exampleAr: 'أود تسجيل الدخول.' },
    { english: 'check out', arabic: 'تسجيل الخروج', example: 'Check out is at 11 AM.', exampleAr: 'تسجيل الخروج الساعة 11.' },
    { english: 'reception', arabic: 'الاستقبال', example: 'Go to reception.', exampleAr: 'اذهب للاستقبال.' },
    { english: 'room key', arabic: 'مفتاح الغرفة', example: 'Here\'s your room key.', exampleAr: 'هذا مفتاح غرفتك.' },
    { english: 'single room', arabic: 'غرفة فردية', example: 'I booked a single room.', exampleAr: 'حجزت غرفة فردية.' },
    { english: 'double room', arabic: 'غرفة مزدوجة', example: 'We need a double room.', exampleAr: 'نحتاج غرفة مزدوجة.' },
  ],
  sentences: [
    { english: 'I have a reservation.', arabic: 'لدي حجز.' },
    { english: 'What time is check out?', arabic: 'ما وقت تسجيل الخروج؟' },
    { english: 'Can I see the room first?', arabic: 'هل يمكنني رؤية الغرفة أولاً؟' },
    { english: 'Is breakfast included?', arabic: 'هل الفطور متضمن؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "check in"؟', data: { options: ['تسجيل الدخول', 'تسجيل الخروج', 'حجز', 'إلغاء'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Here\'s your room ___.', data: { answer: 'key', alternatives: ['card'] } },
    { type: 'mcq', promptAr: 'عكس "check in" هو:', data: { options: ['check out', 'check up', 'check on', 'check off'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: reservation / a / have / I', data: { words: ['I', 'have', 'a', 'reservation'], correctOrder: [0, 1, 2, 3] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "غرفة مزدوجة"؟', data: { options: ['double room', 'single room', 'twin room', 'suite'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Is breakfast ___?', data: { answer: 'included', alternatives: ['free'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: ما وقت تسجيل الخروج؟', data: { answer: 'What time is check out', alternatives: ['When is check out'] }, points: 15 },
  ],
};

export const A2_U8_L2: LessonContent = {
  lessonId: 'A2-u08-l02',
  passingScore: 70,
  vocab: [
    { english: 'amenities', arabic: 'مرافق', example: 'What amenities do you have?', exampleAr: 'ما المرافق لديكم؟' },
    { english: 'pool', arabic: 'مسبح', example: 'Is there a pool?', exampleAr: 'هل يوجد مسبح؟' },
    { english: 'gym', arabic: 'صالة رياضية', example: 'The gym is on floor 2.', exampleAr: 'الصالة في الطابق الثاني.' },
    { english: 'spa', arabic: 'سبا', example: 'Book a spa treatment.', exampleAr: 'احجز علاج سبا.' },
    { english: 'wifi', arabic: 'واي فاي', example: 'What\'s the wifi password?', exampleAr: 'ما كلمة مرور الواي فاي؟' },
    { english: 'parking', arabic: 'موقف سيارات', example: 'Is parking free?', exampleAr: 'هل الموقف مجاني؟' },
  ],
  sentences: [
    { english: 'Where is the swimming pool?', arabic: 'أين المسبح؟' },
    { english: 'What are the gym hours?', arabic: 'ما مواعيد الصالة الرياضية؟' },
    { english: 'Is wifi free for guests?', arabic: 'هل الواي فاي مجاني للنزلاء؟' },
    { english: 'I need to park my car.', arabic: 'أحتاج لإيقاف سيارتي.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "amenities"؟', data: { options: ['مرافق', 'غرف', 'طعام', 'خدمات'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: What\'s the ___ password?', data: { answer: 'wifi', alternatives: ['WiFi'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'pool', arabic: 'مسبح' }, { english: 'gym', arabic: 'صالة رياضية' }, { english: 'spa', arabic: 'سبا' }] } },
    { type: 'reorder', promptAr: 'رتب: pool / the / is / Where / swimming / ?', data: { words: ['Where', 'is', 'the', 'swimming', 'pool', '?'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "موقف سيارات"؟', data: { options: ['parking', 'garage', 'lot', 'space'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Is ___ free?', data: { answer: 'parking', alternatives: ['wifi'] }, points: 10 },
    { type: 'mcq', promptAr: 'ما معنى "spa"؟', data: { options: ['سبا', 'مسبح', 'مطعم', 'صالة'], correct: 0 }, points: 10 },
  ],
};

export const A2_U8_L3: LessonContent = {
  lessonId: 'A2-u08-l03',
  passingScore: 70,
  vocab: [
    { english: 'room service', arabic: 'خدمة الغرف', example: 'Call room service.', exampleAr: 'اتصل بخدمة الغرف.' },
    { english: 'housekeeping', arabic: 'خدمة التنظيف', example: 'Housekeeping, please.', exampleAr: 'خدمة التنظيف، من فضلك.' },
    { english: 'wake-up call', arabic: 'مكالمة إيقاظ', example: 'I need a wake-up call.', exampleAr: 'أحتاج مكالمة إيقاظ.' },
    { english: 'extra towels', arabic: 'مناشف إضافية', example: 'Can I have extra towels?', exampleAr: 'هل يمكنني الحصول على مناشف إضافية؟' },
    { english: 'pillow', arabic: 'وسادة', example: 'I need an extra pillow.', exampleAr: 'أحتاج وسادة إضافية.' },
    { english: 'blanket', arabic: 'بطانية', example: 'Another blanket, please.', exampleAr: 'بطانية أخرى، من فضلك.' },
  ],
  sentences: [
    { english: 'Can you clean my room now?', arabic: 'هل يمكنك تنظيف غرفتي الآن؟' },
    { english: 'Please set a wake-up call for 7 AM.', arabic: 'من فضلك اضبط مكالمة إيقاظ الساعة 7.' },
    { english: 'I\'d like to order room service.', arabic: 'أود طلب خدمة الغرف.' },
    { english: 'The room needs cleaning.', arabic: 'الغرفة تحتاج تنظيفاً.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "wake-up call"؟', data: { options: ['مكالمة إيقاظ', 'مكالمة عمل', 'رسالة', 'تنبيه'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Can I have extra ___?', data: { answer: 'towels', alternatives: ['pillows'] } },
    { type: 'mcq', promptAr: 'كيف تطلب خدمة التنظيف؟', data: { options: ['Housekeeping, please', 'Room service, please', 'Reception, please', 'Help, please'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: room / my / clean / Can / you / ?', data: { words: ['Can', 'you', 'clean', 'my', 'room', '?'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "خدمة الغرف"؟', data: { options: ['room service', 'room cleaning', 'room help', 'room call'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: I need an extra ___.', data: { answer: 'pillow', alternatives: ['blanket'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الغرفة تحتاج تنظيفاً', data: { answer: 'The room needs cleaning', alternatives: ['The room needs to be cleaned'] }, points: 15 },
  ],
};

export const A2_U8_L4: LessonContent = {
  lessonId: 'A2-u08-l04',
  passingScore: 70,
  vocab: [
    { english: 'complaint', arabic: 'شكوى', example: 'I have a complaint.', exampleAr: 'لدي شكوى.' },
    { english: 'noisy', arabic: 'صاخب', example: 'The room is too noisy.', exampleAr: 'الغرفة صاخبة جداً.' },
    { english: 'broken', arabic: 'مكسور', example: 'The AC is broken.', exampleAr: 'المكيف مكسور.' },
    { english: 'leak', arabic: 'تسريب', example: 'There\'s a leak in the bathroom.', exampleAr: 'هناك تسريب في الحمام.' },
    { english: 'change room', arabic: 'تغيير الغرفة', example: 'Can I change rooms?', exampleAr: 'هل يمكنني تغيير الغرفة؟' },
    { english: 'compensation', arabic: 'تعويض', example: 'I expect compensation.', exampleAr: 'أتوقع تعويضاً.' },
  ],
  sentences: [
    { english: 'The air conditioning doesn\'t work.', arabic: 'المكيف لا يعمل.' },
    { english: 'The neighbors are too loud.', arabic: 'الجيران صاخبون جداً.' },
    { english: 'I\'d like to move to another room.', arabic: 'أود الانتقال لغرفة أخرى.' },
    { english: 'This is unacceptable.', arabic: 'هذا غير مقبول.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "noisy"؟', data: { options: ['صاخب', 'هادئ', 'نظيف', 'قذر'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The AC is ___.', data: { answer: 'broken', alternatives: ['not working'] } },
    { type: 'mcq', promptAr: 'ماذا تقول إذا كان هناك تسريب؟', data: { options: ['There\'s a leak', 'There\'s noise', 'It\'s broken', 'It\'s dirty'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: rooms / I / change / Can / ?', data: { words: ['Can', 'I', 'change', 'rooms', '?'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "شكوى"؟', data: { options: ['complaint', 'problem', 'issue', 'trouble'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: There\'s a ___ in the bathroom.', data: { answer: 'leak', alternatives: ['problem'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المكيف لا يعمل', data: { answer: 'The air conditioning doesn\'t work', alternatives: ['The AC doesn\'t work', 'The air conditioner doesn\'t work'] }, points: 15 },
  ],
};

export const A2_U8_L5: LessonContent = {
  lessonId: 'A2-u08-l05',
  passingScore: 70,
  vocab: [
    { english: 'extend stay', arabic: 'تمديد الإقامة', example: 'I\'d like to extend my stay.', exampleAr: 'أود تمديد إقامتي.' },
    { english: 'late checkout', arabic: 'خروج متأخر', example: 'Is late checkout possible?', exampleAr: 'هل الخروج المتأخر ممكن؟' },
    { english: 'luggage storage', arabic: 'تخزين الأمتعة', example: 'Can you store my luggage?', exampleAr: 'هل يمكنكم تخزين أمتعتي؟' },
    { english: 'receipt', arabic: 'إيصال', example: 'I need a receipt.', exampleAr: 'أحتاج إيصالاً.' },
    { english: 'minibar', arabic: 'ميني بار', example: 'I used the minibar.', exampleAr: 'استخدمت الميني بار.' },
    { english: 'final bill', arabic: 'الفاتورة النهائية', example: 'Here\'s your final bill.', exampleAr: 'هذه فاتورتك النهائية.' },
  ],
  sentences: [
    { english: 'I\'d like to stay one more night.', arabic: 'أود البقاء ليلة إضافية.' },
    { english: 'Can I check out at 2 PM?', arabic: 'هل يمكنني الخروج الساعة 2؟' },
    { english: 'Please prepare my bill.', arabic: 'من فضلك جهز فاتورتي.' },
    { english: 'Is there a charge for late checkout?', arabic: 'هل هناك رسوم للخروج المتأخر؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "extend stay"؟', data: { options: ['تمديد الإقامة', 'إنهاء الإقامة', 'حجز جديد', 'إلغاء الحجز'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I need a ___.', data: { answer: 'receipt', alternatives: ['bill'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'late checkout', arabic: 'خروج متأخر' }, { english: 'luggage storage', arabic: 'تخزين الأمتعة' }, { english: 'final bill', arabic: 'الفاتورة النهائية' }] } },
    { type: 'reorder', promptAr: 'رتب: stay / more / one / I\'d / like / to / night', data: { words: ['I\'d', 'like', 'to', 'stay', 'one', 'more', 'night'], correctOrder: [0, 1, 2, 3, 4, 5, 6] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تطلب الخروج المتأخر؟', data: { options: ['Is late checkout possible?', 'Can I stay forever?', 'I\'m leaving now', 'Check me out'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Here\'s your ___ bill.', data: { answer: 'final', alternatives: ['total'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أود البقاء ليلة إضافية', data: { answer: 'I\'d like to stay one more night', alternatives: ['I would like to stay one more night', 'I want to stay one more night'] }, points: 15 },
  ],
};

export const a2Unit8Lessons: Record<string, LessonContent> = {
  'A2-u08-l01': A2_U8_L1,
  'A2-u08-l02': A2_U8_L2,
  'A2-u08-l03': A2_U8_L3,
  'A2-u08-l04': A2_U8_L4,
  'A2-u08-l05': A2_U8_L5,
};

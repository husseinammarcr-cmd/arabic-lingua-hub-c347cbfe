import { LessonContent } from './a1-lessons';

// Unit 7: Travel Experiences - تجارب السفر
export const B1_U7_L1: LessonContent = {
  lessonId: 'B1-u07-l01',
  passingScore: 70,
  vocab: [
    { english: 'destination', arabic: 'وجهة', example: 'What is your destination?', exampleAr: 'ما هي وجهتك؟' },
    { english: 'itinerary', arabic: 'خط سير', example: 'Plan your itinerary.', exampleAr: 'خطط لخط سيرك.' },
    { english: 'accommodation', arabic: 'إقامة', example: 'Book your accommodation.', exampleAr: 'احجز إقامتك.' },
    { english: 'tourist', arabic: 'سائح', example: 'The tourist took photos.', exampleAr: 'السائح التقط صوراً.' },
    { english: 'adventure', arabic: 'مغامرة', example: 'Seek adventure.', exampleAr: 'ابحث عن المغامرة.' },
    { english: 'explore', arabic: 'يستكشف', example: 'Explore new places.', exampleAr: 'استكشف أماكن جديدة.' },
    { english: 'guidebook', arabic: 'دليل سياحي', example: 'Read the guidebook.', exampleAr: 'اقرأ الدليل السياحي.' },
    { english: 'backpacking', arabic: 'سفر بحقيبة ظهر', example: 'Backpacking is fun.', exampleAr: 'السفر بحقيبة ظهر ممتع.' }
  ],
  sentences: [
    { english: 'Plan your itinerary before the trip.', arabic: 'خطط لخط سيرك قبل الرحلة.' },
    { english: 'The destination is beautiful this time of year.', arabic: 'الوجهة جميلة في هذا الوقت من السنة.' },
    { english: 'I love to explore new cultures.', arabic: 'أحب استكشاف ثقافات جديدة.' },
    { english: 'Backpacking through Europe was an adventure.', arabic: 'السفر بحقيبة ظهر عبر أوروبا كان مغامرة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "destination"؟', data: { options: ['وجهة', 'إقامة', 'مغامرة', 'سائح'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Plan your _____. (خط سير)', data: { answer: 'itinerary' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'tourist', arabic: 'سائح' }, { english: 'explore', arabic: 'يستكشف' }, { english: 'adventure', arabic: 'مغامرة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "إقامة"؟', data: { options: ['accommodation', 'accumulation', 'accomplishment', 'accusation'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "guidebook"؟', data: { options: ['دليل سياحي', 'خط سير', 'وجهة', 'حقيبة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ new places. (استكشف)', data: { answer: 'Explore' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: ما هي وجهتك؟', data: { answer: 'What is your destination?' }, points: 15 }
  ]
};

export const B1_U7_L2: LessonContent = {
  lessonId: 'B1-u07-l02',
  passingScore: 70,
  vocab: [
    { english: 'luggage', arabic: 'أمتعة', example: 'Check your luggage.', exampleAr: 'تفقد أمتعتك.' },
    { english: 'boarding pass', arabic: 'بطاقة صعود', example: 'Show your boarding pass.', exampleAr: 'أظهر بطاقة صعودك.' },
    { english: 'terminal', arabic: 'محطة', example: 'Go to terminal 3.', exampleAr: 'اذهب إلى المحطة 3.' },
    { english: 'delay', arabic: 'تأخير', example: 'There is a delay.', exampleAr: 'هناك تأخير.' },
    { english: 'customs', arabic: 'جمارك', example: 'Pass through customs.', exampleAr: 'امرر عبر الجمارك.' },
    { english: 'declare', arabic: 'يصرح', example: 'Declare your items.', exampleAr: 'صرّح عن أغراضك.' },
    { english: 'transit', arabic: 'ترانزيت', example: 'We are in transit.', exampleAr: 'نحن في ترانزيت.' },
    { english: 'connecting flight', arabic: 'رحلة متصلة', example: 'Catch the connecting flight.', exampleAr: 'الحق بالرحلة المتصلة.' }
  ],
  sentences: [
    { english: 'Please show your boarding pass at the gate.', arabic: 'من فضلك أظهر بطاقة صعودك عند البوابة.' },
    { english: 'The flight has a two-hour delay.', arabic: 'الرحلة لديها تأخير ساعتين.' },
    { english: 'Declare any items over the limit at customs.', arabic: 'صرّح عن أي أغراض تتجاوز الحد عند الجمارك.' },
    { english: 'We need to catch our connecting flight.', arabic: 'نحتاج أن نلحق برحلتنا المتصلة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "boarding pass"؟', data: { options: ['بطاقة صعود', 'جواز سفر', 'تذكرة', 'أمتعة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'There is a _____. (تأخير)', data: { answer: 'delay' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "جمارك"؟', data: { options: ['customs', 'customers', 'costumes', 'custody'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['luggage', 'your', 'check'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "transit"؟', data: { options: ['ترانزيت', 'تأخير', 'إلغاء', 'وصول'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ your items. (صرّح)', data: { answer: 'Declare' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هناك تأخير.', data: { answer: 'There is a delay.' }, points: 15 }
  ]
};

export const B1_U7_L3: LessonContent = {
  lessonId: 'B1-u07-l03',
  passingScore: 70,
  vocab: [
    { english: 'resort', arabic: 'منتجع', example: 'Stay at a resort.', exampleAr: 'أقم في منتجع.' },
    { english: 'all-inclusive', arabic: 'شامل', example: 'Book an all-inclusive package.', exampleAr: 'احجز باقة شاملة.' },
    { english: 'suite', arabic: 'جناح', example: 'We booked a suite.', exampleAr: 'حجزنا جناحاً.' },
    { english: 'amenities', arabic: 'مرافق', example: 'The hotel has great amenities.', exampleAr: 'الفندق لديه مرافق رائعة.' },
    { english: 'concierge', arabic: 'موظف استقبال', example: 'Ask the concierge.', exampleAr: 'اسأل موظف الاستقبال.' },
    { english: 'checkout', arabic: 'مغادرة', example: 'Checkout is at 11 AM.', exampleAr: 'المغادرة الساعة 11 صباحاً.' },
    { english: 'reservation', arabic: 'حجز', example: 'Confirm your reservation.', exampleAr: 'أكد حجزك.' },
    { english: 'room service', arabic: 'خدمة الغرف', example: 'Order room service.', exampleAr: 'اطلب خدمة الغرف.' }
  ],
  sentences: [
    { english: 'The resort has excellent amenities.', arabic: 'المنتجع لديه مرافق ممتازة.' },
    { english: 'Please confirm your reservation before arrival.', arabic: 'من فضلك أكد حجزك قبل الوصول.' },
    { english: 'Checkout time is at noon.', arabic: 'وقت المغادرة عند الظهر.' },
    { english: 'The concierge helped us with tour bookings.', arabic: 'موظف الاستقبال ساعدنا في حجز الجولات.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "amenities"؟', data: { options: ['مرافق', 'غرف', 'خدمات', 'حجوزات'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Confirm your _____. (حجز)', data: { answer: 'reservation' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'resort', arabic: 'منتجع' }, { english: 'suite', arabic: 'جناح' }, { english: 'checkout', arabic: 'مغادرة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "خدمة الغرف"؟', data: { options: ['room service', 'room size', 'room rate', 'room view'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "all-inclusive"؟', data: { options: ['شامل', 'جزئي', 'محدود', 'مجاني'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Ask the _____. (موظف استقبال)', data: { answer: 'concierge' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أقم في منتجع.', data: { answer: 'Stay at a resort.' }, points: 15 }
  ]
};

export const B1_U7_L4: LessonContent = {
  lessonId: 'B1-u07-l04',
  passingScore: 70,
  vocab: [
    { english: 'sightseeing', arabic: 'مشاهدة المعالم', example: 'Go sightseeing tomorrow.', exampleAr: 'اذهب لمشاهدة المعالم غداً.' },
    { english: 'landmark', arabic: 'معلم', example: 'Visit famous landmarks.', exampleAr: 'زر المعالم الشهيرة.' },
    { english: 'monument', arabic: 'نصب تذكاري', example: 'The monument is historic.', exampleAr: 'النصب التذكاري تاريخي.' },
    { english: 'tour guide', arabic: 'مرشد سياحي', example: 'The tour guide was helpful.', exampleAr: 'المرشد السياحي كان مفيداً.' },
    { english: 'souvenir', arabic: 'تذكار', example: 'Buy a souvenir.', exampleAr: 'اشترِ تذكاراً.' },
    { english: 'local', arabic: 'محلي', example: 'Try local food.', exampleAr: 'جرب الطعام المحلي.' },
    { english: 'excursion', arabic: 'رحلة', example: 'Join the excursion.', exampleAr: 'انضم للرحلة.' },
    { english: 'breathtaking', arabic: 'خلاب', example: 'The view is breathtaking.', exampleAr: 'المنظر خلاب.' }
  ],
  sentences: [
    { english: 'The sightseeing tour was fantastic.', arabic: 'جولة مشاهدة المعالم كانت رائعة.' },
    { english: 'We bought souvenirs for our family.', arabic: 'اشترينا تذكارات لعائلتنا.' },
    { english: 'The tour guide explained the history of the monument.', arabic: 'المرشد السياحي شرح تاريخ النصب التذكاري.' },
    { english: 'The view from the landmark was breathtaking.', arabic: 'المنظر من المعلم كان خلاباً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "landmark"؟', data: { options: ['معلم', 'أرض', 'علامة', 'حد'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Buy a _____. (تذكار)', data: { answer: 'souvenir' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "خلاب"؟', data: { options: ['breathtaking', 'breathing', 'breathy', 'breathless'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['food', 'local', 'try'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "excursion"؟', data: { options: ['رحلة', 'إقامة', 'حجز', 'وجهة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The _____ was helpful. (مرشد سياحي)', data: { answer: 'tour guide' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المنظر خلاب.', data: { answer: 'The view is breathtaking.' }, points: 15 }
  ]
};

export const B1_U7_L5: LessonContent = {
  lessonId: 'B1-u07-l05',
  passingScore: 70,
  vocab: [
    { english: 'culture shock', arabic: 'صدمة ثقافية', example: 'I experienced culture shock.', exampleAr: 'عانيت من صدمة ثقافية.' },
    { english: 'adapt', arabic: 'يتكيف', example: 'Adapt to the new culture.', exampleAr: 'تكيف مع الثقافة الجديدة.' },
    { english: 'immerse', arabic: 'يغمر نفسه', example: 'Immerse yourself in local culture.', exampleAr: 'اغمر نفسك في الثقافة المحلية.' },
    { english: 'etiquette', arabic: 'آداب السلوك', example: 'Learn local etiquette.', exampleAr: 'تعلم آداب السلوك المحلية.' },
    { english: 'gesture', arabic: 'إيماءة', example: 'Watch your gestures.', exampleAr: 'انتبه لإيماءاتك.' },
    { english: 'respect', arabic: 'احترام', example: 'Respect local customs.', exampleAr: 'احترم العادات المحلية.' },
    { english: 'open-minded', arabic: 'منفتح', example: 'Be open-minded.', exampleAr: 'كن منفتحاً.' },
    { english: 'experience', arabic: 'تجربة', example: 'It was an amazing experience.', exampleAr: 'كانت تجربة مذهلة.' }
  ],
  sentences: [
    { english: 'Culture shock is normal when traveling.', arabic: 'الصدمة الثقافية طبيعية عند السفر.' },
    { english: 'Immerse yourself in the local way of life.', arabic: 'اغمر نفسك في نمط الحياة المحلي.' },
    { english: 'Being open-minded helps you adapt faster.', arabic: 'الانفتاح يساعدك على التكيف أسرع.' },
    { english: 'Always respect local customs and etiquette.', arabic: 'دائماً احترم العادات وآداب السلوك المحلية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "adapt"؟', data: { options: ['يتكيف', 'يتبنى', 'يتجنب', 'يتغير'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Learn local _____. (آداب السلوك)', data: { answer: 'etiquette' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'respect', arabic: 'احترام' }, { english: 'gesture', arabic: 'إيماءة' }, { english: 'experience', arabic: 'تجربة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "منفتح"؟', data: { options: ['open-minded', 'open-handed', 'open-ended', 'open-hearted'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "immerse"؟', data: { options: ['يغمر نفسه', 'يبتعد', 'يتجنب', 'يهرب'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'I experienced _____ shock. (ثقافية)', data: { answer: 'culture' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: كن منفتحاً.', data: { answer: 'Be open-minded.' }, points: 15 }
  ]
};

export const b1Unit7Lessons: Record<string, LessonContent> = {
  'B1-u07-l01': B1_U7_L1,
  'B1-u07-l02': B1_U7_L2,
  'B1-u07-l03': B1_U7_L3,
  'B1-u07-l04': B1_U7_L4,
  'B1-u07-l05': B1_U7_L5,
};

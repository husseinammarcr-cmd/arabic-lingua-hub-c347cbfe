import { LessonContent } from './a1-lessons';

// A2 Unit 7: At the Restaurant - في المطعم
export const A2_U7_L1: LessonContent = {
  lessonId: 'A2-u07-l01',
  passingScore: 70,
  vocab: [
    { english: 'menu', arabic: 'قائمة الطعام', example: 'Can I see the menu?', exampleAr: 'هل يمكنني رؤية القائمة؟' },
    { english: 'order', arabic: 'يطلب', example: 'Are you ready to order?', exampleAr: 'هل أنت مستعد للطلب؟' },
    { english: 'waiter', arabic: 'نادل', example: 'The waiter is coming.', exampleAr: 'النادل قادم.' },
    { english: 'bill', arabic: 'فاتورة', example: 'Can I have the bill?', exampleAr: 'هل يمكنني الحصول على الفاتورة؟' },
    { english: 'tip', arabic: 'بقشيش', example: 'Leave a tip for the waiter.', exampleAr: 'اترك بقشيشاً للنادل.' },
    { english: 'reservation', arabic: 'حجز', example: 'Do you have a reservation?', exampleAr: 'هل لديك حجز؟' },
  ],
  sentences: [
    { english: 'I\'d like to make a reservation.', arabic: 'أود أن أحجز طاولة.' },
    { english: 'What do you recommend?', arabic: 'ماذا توصي؟' },
    { english: 'I\'ll have the chicken, please.', arabic: 'سآخذ الدجاج، من فضلك.' },
    { english: 'Could we have the bill, please?', arabic: 'هل يمكننا الحصول على الفاتورة؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "menu"؟', data: { options: ['قائمة الطعام', 'فاتورة', 'طاولة', 'حجز'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Can I have the ___?', data: { answer: 'bill', alternatives: ['check'] } },
    { type: 'mcq', promptAr: 'كيف تقول "نادل"؟', data: { options: ['waiter', 'chef', 'manager', 'customer'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: recommend / you / do / What / ?', data: { words: ['What', 'do', 'you', 'recommend', '?'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "reservation"؟', data: { options: ['حجز', 'طلب', 'فاتورة', 'قائمة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Leave a ___ for the waiter.', data: { answer: 'tip', alternatives: ['gratuity'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أود أن أحجز طاولة', data: { answer: 'I\'d like to make a reservation', alternatives: ['I would like to make a reservation'] }, points: 15 },
  ],
};

export const A2_U7_L2: LessonContent = {
  lessonId: 'A2-u07-l02',
  passingScore: 70,
  vocab: [
    { english: 'appetizer', arabic: 'مقبلات', example: 'Would you like an appetizer?', exampleAr: 'هل تريد مقبلات؟' },
    { english: 'main course', arabic: 'طبق رئيسي', example: 'What\'s your main course?', exampleAr: 'ما هو طبقك الرئيسي؟' },
    { english: 'dessert', arabic: 'حلوى', example: 'Save room for dessert.', exampleAr: 'احفظ مكاناً للحلوى.' },
    { english: 'beverage', arabic: 'مشروب', example: 'What beverage would you like?', exampleAr: 'أي مشروب تريد؟' },
    { english: 'side dish', arabic: 'طبق جانبي', example: 'Fries as a side dish.', exampleAr: 'بطاطس مقلية كطبق جانبي.' },
    { english: 'special', arabic: 'طبق اليوم', example: 'What\'s today\'s special?', exampleAr: 'ما هو طبق اليوم؟' },
  ],
  sentences: [
    { english: 'I\'ll start with the soup.', arabic: 'سأبدأ بالحساء.' },
    { english: 'For my main course, I\'ll have steak.', arabic: 'كطبق رئيسي، سآخذ ستيك.' },
    { english: 'Do you have any desserts?', arabic: 'هل لديكم حلويات؟' },
    { english: 'Just water, please.', arabic: 'ماء فقط، من فضلك.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "appetizer"؟', data: { options: ['مقبلات', 'طبق رئيسي', 'حلوى', 'مشروب'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: What\'s today\'s ___?', data: { answer: 'special', alternatives: ['dish'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'dessert', arabic: 'حلوى' }, { english: 'beverage', arabic: 'مشروب' }, { english: 'main course', arabic: 'طبق رئيسي' }] } },
    { type: 'reorder', promptAr: 'رتب: soup / with / start / I\'ll / the', data: { words: ['I\'ll', 'start', 'with', 'the', 'soup'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "طبق جانبي"؟', data: { options: ['side dish', 'main dish', 'special dish', 'dessert'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Save room for ___.', data: { answer: 'dessert', alternatives: ['sweets'] }, points: 10 },
    { type: 'mcq', promptAr: 'ما معنى "beverage"؟', data: { options: ['مشروب', 'طعام', 'حلوى', 'مقبلات'], correct: 0 }, points: 10 },
  ],
};

export const A2_U7_L3: LessonContent = {
  lessonId: 'A2-u07-l03',
  passingScore: 70,
  vocab: [
    { english: 'rare', arabic: 'نيء قليلاً', example: 'I\'d like my steak rare.', exampleAr: 'أريد ستيكي نيئاً قليلاً.' },
    { english: 'medium', arabic: 'متوسط النضج', example: 'Medium, please.', exampleAr: 'متوسط النضج، من فضلك.' },
    { english: 'well-done', arabic: 'ناضج تماماً', example: 'I prefer well-done.', exampleAr: 'أفضله ناضجاً تماماً.' },
    { english: 'spicy', arabic: 'حار', example: 'Is it very spicy?', exampleAr: 'هل هو حار جداً؟' },
    { english: 'mild', arabic: 'خفيف', example: 'I prefer mild food.', exampleAr: 'أفضل الطعام الخفيف.' },
    { english: 'allergy', arabic: 'حساسية', example: 'I have a nut allergy.', exampleAr: 'لدي حساسية من المكسرات.' },
  ],
  sentences: [
    { english: 'How would you like your steak?', arabic: 'كيف تريد ستيكك؟' },
    { english: 'I\'m allergic to seafood.', arabic: 'لدي حساسية من المأكولات البحرية.' },
    { english: 'Can you make it less spicy?', arabic: 'هل يمكنك جعله أقل حرارة؟' },
    { english: 'Does this contain nuts?', arabic: 'هل هذا يحتوي على مكسرات؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "well-done"؟', data: { options: ['ناضج تماماً', 'نيء', 'متوسط', 'حار'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I have a nut ___.', data: { answer: 'allergy', alternatives: ['sensitivity'] } },
    { type: 'mcq', promptAr: 'عكس "spicy" هو:', data: { options: ['mild', 'hot', 'strong', 'bitter'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: steak / like / would / you / your / How / ?', data: { words: ['How', 'would', 'you', 'like', 'your', 'steak', '?'], correctOrder: [0, 1, 2, 3, 4, 5, 6] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "متوسط النضج"؟', data: { options: ['medium', 'rare', 'well-done', 'raw'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: I\'m ___ to seafood.', data: { answer: 'allergic', alternatives: ['sensitive'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هل هذا يحتوي على مكسرات؟', data: { answer: 'Does this contain nuts', alternatives: ['Does this have nuts'] }, points: 15 },
  ],
};

export const A2_U7_L4: LessonContent = {
  lessonId: 'A2-u07-l04',
  passingScore: 70,
  vocab: [
    { english: 'complain', arabic: 'يشتكي', example: 'I need to complain.', exampleAr: 'أحتاج أن أشتكي.' },
    { english: 'wrong order', arabic: 'طلب خاطئ', example: 'This is the wrong order.', exampleAr: 'هذا طلب خاطئ.' },
    { english: 'cold', arabic: 'بارد', example: 'The soup is cold.', exampleAr: 'الحساء بارد.' },
    { english: 'overcooked', arabic: 'مطبوخ زيادة', example: 'The meat is overcooked.', exampleAr: 'اللحم مطبوخ زيادة.' },
    { english: 'undercooked', arabic: 'غير ناضج', example: 'The chicken is undercooked.', exampleAr: 'الدجاج غير ناضج.' },
    { english: 'refund', arabic: 'استرداد', example: 'Can I get a refund?', exampleAr: 'هل يمكنني الاسترداد؟' },
  ],
  sentences: [
    { english: 'Excuse me, this isn\'t what I ordered.', arabic: 'عذراً، هذا ليس ما طلبته.' },
    { english: 'Could you heat this up, please?', arabic: 'هل يمكنك تسخين هذا؟' },
    { english: 'I\'d like to speak to the manager.', arabic: 'أود التحدث للمدير.' },
    { english: 'Can you replace this, please?', arabic: 'هل يمكنك استبدال هذا؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "overcooked"؟', data: { options: ['مطبوخ زيادة', 'غير ناضج', 'بارد', 'حار'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: This is the ___ order.', data: { answer: 'wrong', alternatives: ['incorrect'] } },
    { type: 'mcq', promptAr: 'عكس "overcooked" هو:', data: { options: ['undercooked', 'well-done', 'cold', 'hot'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: ordered / isn\'t / I / this / what', data: { words: ['this', 'isn\'t', 'what', 'I', 'ordered'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "استرداد"؟', data: { options: ['refund', 'return', 'replace', 'exchange'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: The soup is ___.', data: { answer: 'cold', alternatives: ['cool'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أود التحدث للمدير', data: { answer: 'I\'d like to speak to the manager', alternatives: ['I would like to speak to the manager'] }, points: 15 },
  ],
};

export const A2_U7_L5: LessonContent = {
  lessonId: 'A2-u07-l05',
  passingScore: 70,
  vocab: [
    { english: 'takeaway', arabic: 'طلب للخارج', example: 'Is this for takeaway?', exampleAr: 'هل هذا للخارج؟' },
    { english: 'dine in', arabic: 'تناول في المكان', example: 'We\'ll dine in.', exampleAr: 'سنتناول هنا.' },
    { english: 'delivery', arabic: 'توصيل', example: 'Do you have delivery?', exampleAr: 'هل لديكم توصيل؟' },
    { english: 'packaging', arabic: 'تغليف', example: 'Nice packaging.', exampleAr: 'تغليف جميل.' },
    { english: 'cutlery', arabic: 'أدوات الطعام', example: 'Include cutlery, please.', exampleAr: 'أضف أدوات الطعام.' },
    { english: 'napkin', arabic: 'منديل', example: 'Can I have more napkins?', exampleAr: 'هل يمكنني المزيد من المناديل؟' },
  ],
  sentences: [
    { english: 'Is this for here or to go?', arabic: 'هل هذا هنا أم للخارج؟' },
    { english: 'I\'d like to order for delivery.', arabic: 'أود الطلب للتوصيل.' },
    { english: 'How long will delivery take?', arabic: 'كم سيستغرق التوصيل؟' },
    { english: 'Please pack this to go.', arabic: 'من فضلك غلف هذا للخارج.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "takeaway"؟', data: { options: ['طلب للخارج', 'تناول هنا', 'توصيل', 'حجز'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Do you have ___?', data: { answer: 'delivery', alternatives: ['takeout'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'dine in', arabic: 'تناول في المكان' }, { english: 'takeaway', arabic: 'طلب للخارج' }, { english: 'delivery', arabic: 'توصيل' }] } },
    { type: 'reorder', promptAr: 'رتب: go / to / or / here / for / Is / this / ?', data: { words: ['Is', 'this', 'for', 'here', 'or', 'to', 'go', '?'], correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "تناول في المكان"؟', data: { options: ['dine in', 'take out', 'delivery', 'pick up'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Include ___, please.', data: { answer: 'cutlery', alternatives: ['utensils'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: كم سيستغرق التوصيل؟', data: { answer: 'How long will delivery take', alternatives: ['How long does delivery take'] }, points: 15 },
  ],
};

export const a2Unit7Lessons: Record<string, LessonContent> = {
  'A2-u07-l01': A2_U7_L1,
  'A2-u07-l02': A2_U7_L2,
  'A2-u07-l03': A2_U7_L3,
  'A2-u07-l04': A2_U7_L4,
  'A2-u07-l05': A2_U7_L5,
};

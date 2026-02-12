import { LessonContent } from './a1-lessons';

// A2 Unit 9: Customs & Traditions - العادات والتقاليد
export const A2_U9_L1: LessonContent = {
  lessonId: 'A2-u09-l01',
  passingScore: 70,
  vocab: [
    { english: 'tradition', arabic: 'تقليد', example: 'It\'s a family tradition.', exampleAr: 'إنه تقليد عائلي.' },
    { english: 'custom', arabic: 'عادة', example: 'This is a local custom.', exampleAr: 'هذه عادة محلية.' },
    { english: 'celebrate', arabic: 'يحتفل', example: 'We celebrate holidays together.', exampleAr: 'نحتفل بالأعياد معاً.' },
    { english: 'festival', arabic: 'مهرجان', example: 'The festival is next week.', exampleAr: 'المهرجان الأسبوع القادم.' },
    { english: 'ceremony', arabic: 'حفل', example: 'The wedding ceremony was beautiful.', exampleAr: 'كان حفل الزفاف جميلاً.' },
    { english: 'ritual', arabic: 'طقس', example: 'An important ritual.', exampleAr: 'طقس مهم.' },
  ],
  sentences: [
    { english: 'How do you celebrate Eid?', arabic: 'كيف تحتفلون بالعيد؟' },
    { english: 'It\'s customary to bring a gift.', arabic: 'من العادة إحضار هدية.' },
    { english: 'We have a tradition of gathering.', arabic: 'لدينا تقليد التجمع.' },
    { english: 'The festival lasts three days.', arabic: 'يستمر المهرجان ثلاثة أيام.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "tradition"؟', data: { options: ['تقليد', 'عادة', 'حفل', 'مهرجان'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: We ___ holidays together.', data: { answer: 'celebrate', alternatives: ['enjoy'] } },
    { type: 'mcq', promptAr: 'كيف تقول "مهرجان"؟', data: { options: ['festival', 'ceremony', 'party', 'event'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: celebrate / Eid / you / do / How / ?', data: { words: ['How', 'do', 'you', 'celebrate', 'Eid', '?'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "ceremony"؟', data: { options: ['حفل', 'تقليد', 'عادة', 'مهرجان'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: It\'s a family ___.', data: { answer: 'tradition', alternatives: ['custom'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: من العادة إحضار هدية', data: { answer: 'It\'s customary to bring a gift', alternatives: ['It is customary to bring a gift'] }, points: 15 },
  ],
};

export const A2_U9_L2: LessonContent = {
  lessonId: 'A2-u09-l02',
  passingScore: 70,
  vocab: [
    { english: 'greet', arabic: 'يحيي', example: 'How do you greet people?', exampleAr: 'كيف تحيي الناس؟' },
    { english: 'handshake', arabic: 'مصافحة', example: 'A firm handshake.', exampleAr: 'مصافحة قوية.' },
    { english: 'bow', arabic: 'ينحني', example: 'Some cultures bow.', exampleAr: 'بعض الثقافات تنحني.' },
    { english: 'polite', arabic: 'مهذب', example: 'Be polite to elders.', exampleAr: 'كن مهذباً مع الكبار.' },
    { english: 'respect', arabic: 'احترام', example: 'Show respect.', exampleAr: 'أظهر الاحترام.' },
    { english: 'manners', arabic: 'آداب', example: 'Good table manners.', exampleAr: 'آداب طعام جيدة.' },
  ],
  sentences: [
    { english: 'In my culture, we shake hands.', arabic: 'في ثقافتي، نتصافح.' },
    { english: 'It\'s polite to take off your shoes.', arabic: 'من المهذب خلع حذائك.' },
    { english: 'Respect is very important.', arabic: 'الاحترام مهم جداً.' },
    { english: 'What are the manners in your country?', arabic: 'ما هي الآداب في بلدك؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "handshake"؟', data: { options: ['مصافحة', 'تحية', 'انحناء', 'عناق'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Be ___ to elders.', data: { answer: 'polite', alternatives: ['respectful'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'greet', arabic: 'يحيي' }, { english: 'respect', arabic: 'احترام' }, { english: 'manners', arabic: 'آداب' }] } },
    { type: 'reorder', promptAr: 'رتب: culture / In / my / hands / shake / we', data: { words: ['In', 'my', 'culture', 'we', 'shake', 'hands'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "ينحني"؟', data: { options: ['bow', 'bend', 'kneel', 'sit'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Good table ___.', data: { answer: 'manners', alternatives: ['etiquette'] }, points: 10 },
    { type: 'mcq', promptAr: 'ما معنى "polite"؟', data: { options: ['مهذب', 'وقح', 'سريع', 'بطيء'], correct: 0 }, points: 10 },
  ],
};

export const A2_U9_L3: LessonContent = {
  lessonId: 'A2-u09-l03',
  passingScore: 70,
  vocab: [
    { english: 'wedding', arabic: 'زفاف', example: 'The wedding is in June.', exampleAr: 'الزفاف في يونيو.' },
    { english: 'bride', arabic: 'عروس', example: 'The bride looks beautiful.', exampleAr: 'العروس تبدو جميلة.' },
    { english: 'groom', arabic: 'عريس', example: 'The groom is nervous.', exampleAr: 'العريس متوتر.' },
    { english: 'guest', arabic: 'ضيف', example: 'We invited 200 guests.', exampleAr: 'دعونا 200 ضيف.' },
    { english: 'invitation', arabic: 'دعوة', example: 'Did you get the invitation?', exampleAr: 'هل وصلتك الدعوة؟' },
    { english: 'honeymoon', arabic: 'شهر العسل', example: 'They\'re on their honeymoon.', exampleAr: 'إنهم في شهر العسل.' },
  ],
  sentences: [
    { english: 'Are you going to the wedding?', arabic: 'هل ستذهب للزفاف؟' },
    { english: 'The bride wore a white dress.', arabic: 'ارتدت العروس فستاناً أبيض.' },
    { english: 'Where is their honeymoon?', arabic: 'أين شهر عسلهم؟' },
    { english: 'I got the wedding invitation.', arabic: 'وصلتني دعوة الزفاف.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "bride"؟', data: { options: ['عروس', 'عريس', 'ضيف', 'أهل'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ looks beautiful.', data: { answer: 'bride', alternatives: ['woman'] } },
    { type: 'mcq', promptAr: 'ما هو "honeymoon"؟', data: { options: ['شهر العسل', 'الزفاف', 'الخطوبة', 'الحفل'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: wedding / going / Are / the / to / you / ?', data: { words: ['Are', 'you', 'going', 'to', 'the', 'wedding', '?'], correctOrder: [0, 1, 2, 3, 4, 5, 6] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "عريس"؟', data: { options: ['groom', 'bride', 'guest', 'host'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: We invited 200 ___.', data: { answer: 'guests', alternatives: ['people'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هل وصلتك الدعوة؟', data: { answer: 'Did you get the invitation', alternatives: ['Did you receive the invitation'] }, points: 15 },
  ],
};

export const A2_U9_L4: LessonContent = {
  lessonId: 'A2-u09-l04',
  passingScore: 70,
  vocab: [
    { english: 'gift', arabic: 'هدية', example: 'Thank you for the gift.', exampleAr: 'شكراً على الهدية.' },
    { english: 'wrap', arabic: 'يغلف', example: 'Can you wrap this gift?', exampleAr: 'هل يمكنك تغليف هذه الهدية؟' },
    { english: 'receive', arabic: 'يستلم', example: 'I received many gifts.', exampleAr: 'استلمت هدايا كثيرة.' },
    { english: 'exchange', arabic: 'يتبادل', example: 'We exchange gifts.', exampleAr: 'نتبادل الهدايا.' },
    { english: 'occasion', arabic: 'مناسبة', example: 'What\'s the occasion?', exampleAr: 'ما المناسبة؟' },
    { english: 'appreciate', arabic: 'يقدّر', example: 'I really appreciate it.', exampleAr: 'أقدر ذلك حقاً.' },
  ],
  sentences: [
    { english: 'This gift is for you.', arabic: 'هذه الهدية لك.' },
    { english: 'What should I bring?', arabic: 'ماذا يجب أن أحضر؟' },
    { english: 'It\'s the thought that counts.', arabic: 'المهم النية.' },
    { english: 'You shouldn\'t have!', arabic: 'ما كان عليك!' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "wrap"؟', data: { options: ['يغلف', 'يفتح', 'يرسل', 'يستلم'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Thank you for the ___.', data: { answer: 'gift', alternatives: ['present'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'receive', arabic: 'يستلم' }, { english: 'exchange', arabic: 'يتبادل' }, { english: 'appreciate', arabic: 'يقدّر' }] } },
    { type: 'reorder', promptAr: 'رتب: is / you / This / for / gift', data: { words: ['This', 'gift', 'is', 'for', 'you'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "مناسبة"؟', data: { options: ['occasion', 'event', 'party', 'ceremony'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: I really ___ it.', data: { answer: 'appreciate', alternatives: ['like'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: ماذا يجب أن أحضر؟', data: { answer: 'What should I bring', alternatives: ['What do I bring'] }, points: 15 },
  ],
};

export const A2_U9_L5: LessonContent = {
  lessonId: 'A2-u09-l05',
  passingScore: 70,
  vocab: [
    { english: 'holiday', arabic: 'عطلة/عيد', example: 'Happy holidays!', exampleAr: 'عطلة سعيدة!' },
    { english: 'national day', arabic: 'يوم وطني', example: 'It\'s our national day.', exampleAr: 'إنه يومنا الوطني.' },
    { english: 'religious', arabic: 'ديني', example: 'A religious holiday.', exampleAr: 'عيد ديني.' },
    { english: 'fireworks', arabic: 'ألعاب نارية', example: 'Beautiful fireworks!', exampleAr: 'ألعاب نارية جميلة!' },
    { english: 'parade', arabic: 'استعراض', example: 'There\'s a parade today.', exampleAr: 'هناك استعراض اليوم.' },
    { english: 'decoration', arabic: 'زينة', example: 'Nice decorations!', exampleAr: 'زينة جميلة!' },
  ],
  sentences: [
    { english: 'How do you celebrate New Year?', arabic: 'كيف تحتفلون برأس السنة؟' },
    { english: 'We watch fireworks at midnight.', arabic: 'نشاهد الألعاب النارية عند منتصف الليل.' },
    { english: 'The streets are full of decorations.', arabic: 'الشوارع مليئة بالزينة.' },
    { english: 'It\'s a public holiday.', arabic: 'إنها عطلة رسمية.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "fireworks"؟', data: { options: ['ألعاب نارية', 'حفل', 'زينة', 'استعراض'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: There\'s a ___ today.', data: { answer: 'parade', alternatives: ['show'] } },
    { type: 'mcq', promptAr: 'كيف تقول "يوم وطني"؟', data: { options: ['national day', 'holiday day', 'special day', 'big day'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: Year / celebrate / New / you / do / How / ?', data: { words: ['How', 'do', 'you', 'celebrate', 'New', 'Year', '?'], correctOrder: [0, 1, 2, 3, 4, 5, 6] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "decoration"؟', data: { options: ['زينة', 'هدية', 'حفل', 'طعام'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: It\'s a ___ holiday.', data: { answer: 'public', alternatives: ['national'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الشوارع مليئة بالزينة', data: { answer: 'The streets are full of decorations', alternatives: ['The streets are decorated'] }, points: 15 },
  ],
};

export const a2Unit9Lessons: Record<string, LessonContent> = {
  'A2-u09-l01': A2_U9_L1,
  'A2-u09-l02': A2_U9_L2,
  'A2-u09-l03': A2_U9_L3,
  'A2-u09-l04': A2_U9_L4,
  'A2-u09-l05': A2_U9_L5,
};

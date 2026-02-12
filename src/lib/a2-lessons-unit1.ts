import { LessonContent } from './a1-lessons';

// Unit 1: Simple Past - الماضي البسيط
export const A2_U1_L1: LessonContent = {
  lessonId: 'A2-u01-l01',
  passingScore: 70,
  vocab: [
    { english: 'went', arabic: 'ذهب', example: 'I went to school yesterday.', exampleAr: 'ذهبت للمدرسة أمس.' },
    { english: 'ate', arabic: 'أكل', example: 'She ate breakfast early.', exampleAr: 'أكلت الفطور مبكراً.' },
    { english: 'saw', arabic: 'رأى', example: 'We saw a great movie.', exampleAr: 'شاهدنا فيلماً رائعاً.' },
    { english: 'came', arabic: 'جاء', example: 'He came home late.', exampleAr: 'جاء للمنزل متأخراً.' },
    { english: 'made', arabic: 'صنع', example: 'I made dinner.', exampleAr: 'صنعت العشاء.' },
    { english: 'took', arabic: 'أخذ', example: 'She took the bus.', exampleAr: 'أخذت الحافلة.' },
    { english: 'got', arabic: 'حصل', example: 'He got a new job.', exampleAr: 'حصل على عمل جديد.' },
    { english: 'had', arabic: 'امتلك/تناول', example: 'We had a nice time.', exampleAr: 'قضينا وقتاً لطيفاً.' },
  ],
  sentences: [
    { english: 'I went to the park yesterday.', arabic: 'ذهبت إلى الحديقة أمس.' },
    { english: 'She ate lunch at 1 PM.', arabic: 'أكلت الغداء الساعة 1 ظهراً.' },
    { english: 'They saw their friends last week.', arabic: 'رأوا أصدقاءهم الأسبوع الماضي.' },
    { english: 'He came to the party late.', arabic: 'جاء للحفلة متأخراً.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما ماضي "go"؟', data: { options: ['went', 'goed', 'gone', 'going'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما ماضي "eat"؟', data: { options: ['ate', 'eated', 'eaten', 'eating'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ to school yesterday. (ذهبت)', data: { answer: 'went', hint: 'ماضي go' } },
    { type: 'matching', promptAr: 'طابق الأفعال مع ماضيها', data: { pairs: [{ english: 'go → went', arabic: 'ذهب' }, { english: 'eat → ate', arabic: 'أكل' }, { english: 'see → saw', arabic: 'رأى' }] } },
    { type: 'translation', promptAr: 'ترجم: ذهبت للسوق', data: { answer: 'I went to the market', alternatives: ['i went to the market'] } },
    { type: 'reorder', promptAr: 'رتب: yesterday / I / went / school / to', data: { words: ['I', 'went', 'to', 'school', 'yesterday'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما ماضي "come"؟', data: { options: ['came', 'comed', 'caming', 'come'], correct: 0 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: She ___ a cake. (صنعت)', data: { answer: 'made' }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: رأيت صديقي أمس', data: { answer: 'I saw my friend yesterday', alternatives: ['i saw my friend yesterday'] }, points: 20 },
    { type: 'reorder', promptAr: 'رتب: ate / She / breakfast / early', data: { words: ['She', 'ate', 'breakfast', 'early'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'mcq', promptAr: 'ما ماضي "take"؟', data: { options: ['took', 'taked', 'taken', 'taking'], correct: 0 }, points: 25 },
  ]
};

export const A2_U1_L2: LessonContent = {
  lessonId: 'A2-u01-l02',
  passingScore: 70,
  vocab: [
    { english: 'did', arabic: 'فعل', example: 'I did my homework.', exampleAr: 'فعلت واجبي.' },
    { english: 'was/were', arabic: 'كان/كانوا', example: 'I was happy.', exampleAr: 'كنت سعيداً.' },
    { english: 'bought', arabic: 'اشترى', example: 'He bought a car.', exampleAr: 'اشترى سيارة.' },
    { english: 'wrote', arabic: 'كتب', example: 'She wrote a letter.', exampleAr: 'كتبت رسالة.' },
    { english: 'read', arabic: 'قرأ', example: 'I read a book.', exampleAr: 'قرأت كتاباً.' },
    { english: 'spoke', arabic: 'تكلم', example: 'He spoke English.', exampleAr: 'تكلم الإنجليزية.' },
    { english: 'knew', arabic: 'عرف', example: 'I knew the answer.', exampleAr: 'عرفت الجواب.' },
    { english: 'thought', arabic: 'فكّر/ظن', example: 'I thought about it.', exampleAr: 'فكرت بها.' },
  ],
  sentences: [
    { english: 'I was at home yesterday.', arabic: 'كنت في المنزل أمس.' },
    { english: 'They were very tired.', arabic: 'كانوا متعبين جداً.' },
    { english: 'She bought new shoes.', arabic: 'اشترت أحذية جديدة.' },
    { english: 'We wrote emails all day.', arabic: 'كتبنا رسائل إلكترونية طوال اليوم.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما ماضي "buy"؟', data: { options: ['bought', 'buyed', 'buying', 'buys'], correct: 0 } },
    { type: 'mcq', promptAr: 'اختر الصحيح: I ___ happy yesterday.', data: { options: ['was', 'were', 'is', 'am'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: She ___ a book last night. (قرأت)', data: { answer: 'read', hint: 'ماضي read' } },
    { type: 'matching', promptAr: 'طابق الأفعال', data: { pairs: [{ english: 'buy → bought', arabic: 'اشترى' }, { english: 'write → wrote', arabic: 'كتب' }, { english: 'speak → spoke', arabic: 'تكلم' }] } },
    { type: 'translation', promptAr: 'ترجم: كنا في المدرسة', data: { answer: 'We were at school', alternatives: ['we were at school'] } },
    { type: 'reorder', promptAr: 'رتب: bought / He / car / new / a', data: { words: ['He', 'bought', 'a', 'new', 'car'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما ماضي "write"؟', data: { options: ['wrote', 'writed', 'writing', 'writes'], correct: 0 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: They ___ tired. (كانوا)', data: { answer: 'were' }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: اشتريت كتاباً جديداً', data: { answer: 'I bought a new book', alternatives: ['i bought a new book'] }, points: 20 },
    { type: 'mcq', promptAr: 'اختر الصحيح: She ___ at home.', data: { options: ['was', 'were', 'is', 'are'], correct: 0 }, points: 25 },
    { type: 'reorder', promptAr: 'رتب: wrote / She / letter / a', data: { words: ['She', 'wrote', 'a', 'letter'], correctOrder: [0, 1, 2, 3] }, points: 25 },
  ]
};

export const A2_U1_L3: LessonContent = {
  lessonId: 'A2-u01-l03',
  passingScore: 70,
  vocab: [
    { english: 'left', arabic: 'غادر', example: 'I left early.', exampleAr: 'غادرت مبكراً.' },
    { english: 'found', arabic: 'وجد', example: 'She found her keys.', exampleAr: 'وجدت مفاتيحها.' },
    { english: 'told', arabic: 'أخبر', example: 'He told me the news.', exampleAr: 'أخبرني الأخبار.' },
    { english: 'gave', arabic: 'أعطى', example: 'I gave her a gift.', exampleAr: 'أعطيتها هدية.' },
    { english: 'met', arabic: 'قابل', example: 'We met at the cafe.', exampleAr: 'قابلناهم في المقهى.' },
    { english: 'felt', arabic: 'شعر', example: 'I felt happy.', exampleAr: 'شعرت بالسعادة.' },
    { english: 'kept', arabic: 'احتفظ', example: 'She kept the secret.', exampleAr: 'احتفظت بالسر.' },
    { english: 'lost', arabic: 'فقد/خسر', example: 'He lost his wallet.', exampleAr: 'فقد محفظته.' },
  ],
  sentences: [
    { english: 'I left the office at 5 PM.', arabic: 'غادرت المكتب الساعة 5 مساءً.' },
    { english: 'She found a new job.', arabic: 'وجدت عملاً جديداً.' },
    { english: 'They told us everything.', arabic: 'أخبرونا بكل شيء.' },
    { english: 'He gave me good advice.', arabic: 'أعطاني نصيحة جيدة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما ماضي "leave"؟', data: { options: ['left', 'leaved', 'leaving', 'leaves'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما ماضي "find"؟', data: { options: ['found', 'finded', 'finding', 'finds'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: She ___ me the truth. (أخبرتني)', data: { answer: 'told', hint: 'ماضي tell' } },
    { type: 'matching', promptAr: 'طابق الأفعال', data: { pairs: [{ english: 'leave → left', arabic: 'غادر' }, { english: 'give → gave', arabic: 'أعطى' }, { english: 'meet → met', arabic: 'قابل' }] } },
    { type: 'translation', promptAr: 'ترجم: وجدت حقيبتي', data: { answer: 'I found my bag', alternatives: ['i found my bag'] } },
    { type: 'reorder', promptAr: 'رتب: gave / He / gift / a / me', data: { words: ['He', 'gave', 'me', 'a', 'gift'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما ماضي "tell"؟', data: { options: ['told', 'telled', 'telling', 'tells'], correct: 0 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ my phone. (فقدت)', data: { answer: 'lost' }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: قابلنا أصدقاءنا', data: { answer: 'We met our friends', alternatives: ['we met our friends'] }, points: 20 },
    { type: 'mcq', promptAr: 'ما ماضي "feel"؟', data: { options: ['felt', 'feeled', 'feeling', 'feels'], correct: 0 }, points: 25 },
    { type: 'reorder', promptAr: 'رتب: found / She / keys / her', data: { words: ['She', 'found', 'her', 'keys'], correctOrder: [0, 1, 2, 3] }, points: 25 },
  ]
};

export const A2_U1_L4: LessonContent = {
  lessonId: 'A2-u01-l04',
  passingScore: 70,
  vocab: [
    { english: 'didn\'t', arabic: 'لم', example: 'I didn\'t go.', exampleAr: 'لم أذهب.' },
    { english: 'wasn\'t/weren\'t', arabic: 'لم يكن', example: 'He wasn\'t here.', exampleAr: 'لم يكن هنا.' },
    { english: 'played', arabic: 'لعب', example: 'I played football.', exampleAr: 'لعبت كرة القدم.' },
    { english: 'watched', arabic: 'شاهد', example: 'She watched TV.', exampleAr: 'شاهدت التلفاز.' },
    { english: 'worked', arabic: 'عمل', example: 'He worked hard.', exampleAr: 'عمل بجد.' },
    { english: 'talked', arabic: 'تحدث', example: 'We talked for hours.', exampleAr: 'تحدثنا لساعات.' },
    { english: 'walked', arabic: 'مشى', example: 'I walked to school.', exampleAr: 'مشيت للمدرسة.' },
    { english: 'listened', arabic: 'استمع', example: 'She listened to music.', exampleAr: 'استمعت للموسيقى.' },
  ],
  sentences: [
    { english: 'I didn\'t go to the party.', arabic: 'لم أذهب للحفلة.' },
    { english: 'She wasn\'t at home.', arabic: 'لم تكن في المنزل.' },
    { english: 'They didn\'t see the movie.', arabic: 'لم يشاهدوا الفيلم.' },
    { english: 'We weren\'t tired.', arabic: 'لم نكن متعبين.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'كيف تنفي "I went"؟', data: { options: ['I didn\'t go', 'I don\'t went', 'I not went', 'I went not'], correct: 0 } },
    { type: 'mcq', promptAr: 'اختر الصحيح: She ___ at school.', data: { options: ['wasn\'t', 'weren\'t', 'didn\'t', 'don\'t'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ watch TV yesterday. (لم)', data: { answer: 'didn\'t', alternatives: ['did not'] } },
    { type: 'matching', promptAr: 'طابق الجمل', data: { pairs: [{ english: 'I went → I didn\'t go', arabic: 'لم أذهب' }, { english: 'He was → He wasn\'t', arabic: 'لم يكن' }] } },
    { type: 'translation', promptAr: 'ترجم: لم أفهم', data: { answer: 'I didn\'t understand', alternatives: ['i didn\'t understand', 'I did not understand'] } },
    { type: 'reorder', promptAr: 'رتب: didn\'t / I / go / party / to / the', data: { words: ['I', 'didn\'t', 'go', 'to', 'the', 'party'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما نفي "They were happy"؟', data: { options: ['They weren\'t happy', 'They didn\'t happy', 'They not happy', 'They was happy'], correct: 0 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: He ___ come. (لم)', data: { answer: 'didn\'t' }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: لم تكن في المدرسة', data: { answer: 'She wasn\'t at school', alternatives: ['she wasn\'t at school', 'She was not at school'] }, points: 20 },
    { type: 'mcq', promptAr: 'اختر الصحيح: We ___ see them.', data: { options: ['didn\'t', 'wasn\'t', 'weren\'t', 'don\'t'], correct: 0 }, points: 25 },
    { type: 'reorder', promptAr: 'رتب: wasn\'t / She / home / at', data: { words: ['She', 'wasn\'t', 'at', 'home'], correctOrder: [0, 1, 2, 3] }, points: 25 },
  ]
};

export const A2_U1_L5: LessonContent = {
  lessonId: 'A2-u01-l05',
  passingScore: 70,
  vocab: [
    { english: 'Did you...?', arabic: 'هل أنت...؟', example: 'Did you go?', exampleAr: 'هل ذهبت؟' },
    { english: 'yesterday', arabic: 'أمس', example: 'I saw him yesterday.', exampleAr: 'رأيته أمس.' },
    { english: 'last week', arabic: 'الأسبوع الماضي', example: 'We met last week.', exampleAr: 'التقينا الأسبوع الماضي.' },
    { english: 'last month', arabic: 'الشهر الماضي', example: 'She traveled last month.', exampleAr: 'سافرت الشهر الماضي.' },
    { english: 'ago', arabic: 'منذ', example: 'Two days ago.', exampleAr: 'منذ يومين.' },
    { english: 'when', arabic: 'متى', example: 'When did you arrive?', exampleAr: 'متى وصلت؟' },
    { english: 'how long', arabic: 'كم مدة', example: 'How long did it take?', exampleAr: 'كم استغرق؟' },
    { english: 'what time', arabic: 'في أي وقت', example: 'What time did you leave?', exampleAr: 'في أي وقت غادرت؟' },
  ],
  sentences: [
    { english: 'Did you eat breakfast?', arabic: 'هل أكلت الفطور؟' },
    { english: 'When did you arrive?', arabic: 'متى وصلت؟' },
    { english: 'I traveled two weeks ago.', arabic: 'سافرت قبل أسبوعين.' },
    { english: 'What time did she leave?', arabic: 'في أي وقت غادرت؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'كيف تسأل "هل ذهبت؟"', data: { options: ['Did you go?', 'Do you went?', 'You did go?', 'Went you?'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما معنى "last week"؟', data: { options: ['الأسبوع الماضي', 'أمس', 'الشهر الماضي', 'منذ'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I met him 3 days ___. (منذ)', data: { answer: 'ago' } },
    { type: 'matching', promptAr: 'طابق العبارات', data: { pairs: [{ english: 'yesterday', arabic: 'أمس' }, { english: 'last month', arabic: 'الشهر الماضي' }, { english: 'ago', arabic: 'منذ' }] } },
    { type: 'translation', promptAr: 'ترجم: متى وصلت؟', data: { answer: 'When did you arrive?', alternatives: ['when did you arrive'] } },
    { type: 'reorder', promptAr: 'رتب: you / Did / breakfast / eat / ?', data: { words: ['Did', 'you', 'eat', 'breakfast', '?'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تسأل عن الوقت في الماضي؟', data: { options: ['What time did...?', 'What time do...?', 'When is...?', 'How time...?'], correct: 0 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: ___ did you go? (متى)', data: { answer: 'When' }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: سافرت الشهر الماضي', data: { answer: 'I traveled last month', alternatives: ['i traveled last month'] }, points: 20 },
    { type: 'mcq', promptAr: 'ما معنى "two years ago"؟', data: { options: ['منذ سنتين', 'سنتين قادمتين', 'السنة الماضية', 'كل سنتين'], correct: 0 }, points: 25 },
    { type: 'reorder', promptAr: 'رتب: did / When / arrive / you / ?', data: { words: ['When', 'did', 'you', 'arrive', '?'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
  ]
};

export const a2Unit1Lessons: Record<string, LessonContent> = {
  'A2-u01-l01': A2_U1_L1,
  'A2-u01-l02': A2_U1_L2,
  'A2-u01-l03': A2_U1_L3,
  'A2-u01-l04': A2_U1_L4,
  'A2-u01-l05': A2_U1_L5,
};

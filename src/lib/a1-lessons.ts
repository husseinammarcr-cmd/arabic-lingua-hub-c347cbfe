// Complete A1 Lesson Content Data
// Structure: vocab[], sentences[], exercises[], quiz[] for each lesson

export interface VocabItem {
  english: string;
  arabic: string;
  example?: string;
  exampleAr?: string;
}

export interface SentenceItem {
  english: string;
  arabic: string;
}

export interface ExerciseItem {
  type: 'mcq' | 'fill_blank' | 'reorder' | 'matching' | 'translation';
  promptAr: string;
  promptEn?: string;
  data: {
    options?: string[];
    correct?: number;
    answer?: string;
    alternatives?: string[];
    words?: string[];
    correctOrder?: number[];
    hint?: string;
    pairs?: { english: string; arabic: string }[];
  };
}

export interface QuizItem extends ExerciseItem {
  points: number;
}

export interface LessonContent {
  lessonId: string;
  vocab: VocabItem[];
  sentences: SentenceItem[];
  exercises: ExerciseItem[];
  quiz: QuizItem[];
  passingScore: number; // percentage needed to pass
}

// ==========================================
// UNIT 1: التحيات والتعارف (Greetings & Introductions)
// ==========================================

export const A1_U1_L1: LessonContent = {
  lessonId: 'A1-u01-l01',
  passingScore: 70,
  vocab: [
    { english: 'Hello', arabic: 'مرحباً', example: 'Hello, how are you?', exampleAr: 'مرحباً، كيف حالك؟' },
    { english: 'Hi', arabic: 'أهلاً', example: 'Hi there!', exampleAr: 'أهلاً!' },
    { english: 'Good morning', arabic: 'صباح الخير', example: 'Good morning, teacher.', exampleAr: 'صباح الخير يا أستاذ.' },
    { english: 'Good afternoon', arabic: 'مساء الخير', example: 'Good afternoon, everyone.', exampleAr: 'مساء الخير للجميع.' },
    { english: 'Good evening', arabic: 'مساء الخير', example: 'Good evening, sir.', exampleAr: 'مساء الخير سيدي.' },
    { english: 'Good night', arabic: 'تصبح على خير', example: 'Good night, sleep well.', exampleAr: 'تصبح على خير، نم جيداً.' },
    { english: 'Goodbye', arabic: 'وداعاً', example: 'Goodbye, see you tomorrow.', exampleAr: 'وداعاً، أراك غداً.' },
    { english: 'Bye', arabic: 'باي', example: 'Bye! Take care.', exampleAr: 'باي! اعتنِ بنفسك.' },
    { english: 'See you', arabic: 'أراك لاحقاً', example: 'See you later!', exampleAr: 'أراك لاحقاً!' },
    { english: 'Welcome', arabic: 'أهلاً وسهلاً', example: 'Welcome to our home.', exampleAr: 'أهلاً وسهلاً في بيتنا.' },
  ],
  sentences: [
    { english: 'Hello! How are you?', arabic: 'مرحباً! كيف حالك؟' },
    { english: 'Good morning. I am fine, thank you.', arabic: 'صباح الخير. أنا بخير، شكراً.' },
    { english: 'Nice to meet you.', arabic: 'سعيد بمقابلتك.' },
    { english: 'Goodbye! See you tomorrow.', arabic: 'وداعاً! أراك غداً.' },
    { english: 'Good night. Sleep well.', arabic: 'تصبح على خير. نم جيداً.' },
    { english: 'Welcome to my house.', arabic: 'أهلاً وسهلاً في بيتي.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'ما معنى كلمة "Hello"؟',
      data: { options: ['مرحباً', 'وداعاً', 'شكراً', 'من فضلك'], correct: 0 }
    },
    {
      type: 'mcq',
      promptAr: 'كيف تقول "صباح الخير" بالإنجليزية؟',
      data: { options: ['Good morning', 'Good night', 'Good evening', 'Goodbye'], correct: 0 }
    },
    {
      type: 'matching',
      promptAr: 'طابق الكلمات الإنجليزية مع معانيها العربية',
      data: {
        pairs: [
          { english: 'Hello', arabic: 'مرحباً' },
          { english: 'Goodbye', arabic: 'وداعاً' },
          { english: 'Welcome', arabic: 'أهلاً وسهلاً' },
          { english: 'Good night', arabic: 'تصبح على خير' },
        ]
      }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Good ___! (صباح الخير)',
      data: { answer: 'morning', alternatives: ['Morning'], hint: 'تبدأ بحرف M' }
    },
    {
      type: 'reorder',
      promptAr: 'رتب الكلمات: you / are / How / ?',
      data: { words: ['How', 'are', 'you', '?'], correctOrder: [0, 1, 2, 3] }
    },
    {
      type: 'translation',
      promptAr: 'ترجم إلى الإنجليزية: مرحباً',
      data: { answer: 'Hello', alternatives: ['Hi', 'hello', 'hi'] }
    },
    {
      type: 'mcq',
      promptAr: 'ماذا تقول قبل النوم؟',
      data: { options: ['Good night', 'Good morning', 'Hello', 'Welcome'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Nice to ___ you!',
      data: { answer: 'meet', hint: 'تعني "سعيد بمقابلتك"' }
    },
  ],
  quiz: [
    {
      type: 'mcq',
      promptAr: 'ما معنى "Good evening"؟',
      data: { options: ['مساء الخير', 'صباح الخير', 'تصبح على خير', 'وداعاً'], correct: 0 },
      points: 10
    },
    {
      type: 'translation',
      promptAr: 'ترجم: وداعاً',
      data: { answer: 'Goodbye', alternatives: ['goodbye', 'Bye', 'bye'] },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: ___ to meet you!',
      data: { answer: 'Nice', alternatives: ['nice'] },
      points: 15
    },
    {
      type: 'reorder',
      promptAr: 'رتب: morning / Good / !',
      data: { words: ['Good', 'morning', '!'], correctOrder: [0, 1, 2] },
      points: 20
    },
    {
      type: 'mcq',
      promptAr: 'ما هو الرد المناسب على "How are you?"',
      data: { options: ['I am fine, thank you', 'Good morning', 'Goodbye', 'Welcome'], correct: 0 },
      points: 20
    },
    {
      type: 'translation',
      promptAr: 'ترجم: أهلاً وسهلاً',
      data: { answer: 'Welcome', alternatives: ['welcome'] },
      points: 20
    },
  ]
};

export const A1_U1_L2: LessonContent = {
  lessonId: 'A1-u01-l02',
  passingScore: 70,
  vocab: [
    { english: 'I am', arabic: 'أنا', example: 'I am a student.', exampleAr: 'أنا طالب.' },
    { english: 'You are', arabic: 'أنت', example: 'You are my friend.', exampleAr: 'أنت صديقي.' },
    { english: 'He is', arabic: 'هو', example: 'He is a teacher.', exampleAr: 'هو معلم.' },
    { english: 'She is', arabic: 'هي', example: 'She is a doctor.', exampleAr: 'هي طبيبة.' },
    { english: 'We are', arabic: 'نحن', example: 'We are happy.', exampleAr: 'نحن سعداء.' },
    { english: 'They are', arabic: 'هم', example: 'They are students.', exampleAr: 'هم طلاب.' },
    { english: 'am', arabic: 'أكون (مع I)', example: 'I am happy.', exampleAr: 'أنا سعيد.' },
    { english: 'is', arabic: 'يكون (مع he/she/it)', example: 'She is smart.', exampleAr: 'هي ذكية.' },
    { english: 'are', arabic: 'يكونون (مع you/we/they)', example: 'They are here.', exampleAr: 'هم هنا.' },
    { english: 'not', arabic: 'لا/ليس', example: 'I am not sad.', exampleAr: 'أنا لست حزيناً.' },
  ],
  sentences: [
    { english: 'I am a student.', arabic: 'أنا طالب.' },
    { english: 'She is my sister.', arabic: 'هي أختي.' },
    { english: 'We are from Egypt.', arabic: 'نحن من مصر.' },
    { english: 'He is not here.', arabic: 'هو ليس هنا.' },
    { english: 'They are happy today.', arabic: 'هم سعداء اليوم.' },
    { english: 'You are very kind.', arabic: 'أنت لطيف جداً.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'اختر الفعل الصحيح: I ___ a teacher.',
      data: { options: ['am', 'is', 'are', 'be'], correct: 0 }
    },
    {
      type: 'mcq',
      promptAr: 'اختر الفعل الصحيح: She ___ happy.',
      data: { options: ['is', 'am', 'are', 'be'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: They ___ students.',
      data: { answer: 'are', hint: 'مع they نستخدم...' }
    },
    {
      type: 'reorder',
      promptAr: 'رتب: am / I / student / a',
      data: { words: ['I', 'am', 'a', 'student'], correctOrder: [0, 1, 2, 3] }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: أنا سعيد',
      data: { answer: 'I am happy', alternatives: ['I\'m happy', 'i am happy'] }
    },
    {
      type: 'mcq',
      promptAr: 'اختر الفعل الصحيح: We ___ friends.',
      data: { options: ['are', 'is', 'am', 'be'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: He ___ not here.',
      data: { answer: 'is', hint: 'مع he نستخدم...' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: هي طبيبة',
      data: { answer: 'She is a doctor', alternatives: ['She\'s a doctor'] }
    },
  ],
  quiz: [
    {
      type: 'mcq',
      promptAr: 'اختر الصحيح: He ___ my brother.',
      data: { options: ['is', 'am', 'are', 'be'], correct: 0 },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: I ___ from Saudi Arabia.',
      data: { answer: 'am' },
      points: 15
    },
    {
      type: 'translation',
      promptAr: 'ترجم: نحن أصدقاء',
      data: { answer: 'We are friends', alternatives: ['We\'re friends'] },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'رتب: is / She / teacher / a',
      data: { words: ['She', 'is', 'a', 'teacher'], correctOrder: [0, 1, 2, 3] },
      points: 20
    },
    {
      type: 'mcq',
      promptAr: 'اختر الصحيح: They ___ not here.',
      data: { options: ['are', 'is', 'am', 'be'], correct: 0 },
      points: 15
    },
    {
      type: 'translation',
      promptAr: 'ترجم: أنت لطيف',
      data: { answer: 'You are kind', alternatives: ['You\'re kind', 'you are kind'] },
      points: 15
    },
  ]
};

export const A1_U1_L3: LessonContent = {
  lessonId: 'A1-u01-l03',
  passingScore: 70,
  vocab: [
    { english: 'Name', arabic: 'اسم', example: 'My name is Ali.', exampleAr: 'اسمي علي.' },
    { english: 'My', arabic: 'خاصتي', example: 'This is my book.', exampleAr: 'هذا كتابي.' },
    { english: 'Your', arabic: 'خاصتك', example: 'What is your name?', exampleAr: 'ما اسمك؟' },
    { english: 'His', arabic: 'خاصته', example: 'His name is Ahmed.', exampleAr: 'اسمه أحمد.' },
    { english: 'Her', arabic: 'خاصتها', example: 'Her name is Sara.', exampleAr: 'اسمها سارة.' },
    { english: 'What', arabic: 'ما/ماذا', example: 'What is this?', exampleAr: 'ما هذا؟' },
    { english: 'Who', arabic: 'من', example: 'Who is he?', exampleAr: 'من هو؟' },
    { english: 'This', arabic: 'هذا/هذه', example: 'This is my friend.', exampleAr: 'هذا صديقي.' },
    { english: 'That', arabic: 'ذلك/تلك', example: 'That is a car.', exampleAr: 'تلك سيارة.' },
    { english: 'Mr./Mrs.', arabic: 'سيد/سيدة', example: 'Mr. Smith is here.', exampleAr: 'السيد سميث هنا.' },
  ],
  sentences: [
    { english: 'My name is Ali.', arabic: 'اسمي علي.' },
    { english: 'What is your name?', arabic: 'ما اسمك؟' },
    { english: 'Nice to meet you, Sara.', arabic: 'سعيد بمقابلتك يا سارة.' },
    { english: 'This is my friend Ahmed.', arabic: 'هذا صديقي أحمد.' },
    { english: 'Who is that?', arabic: 'من ذلك؟' },
    { english: 'Her name is Fatima.', arabic: 'اسمها فاطمة.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'كيف تسأل شخصاً عن اسمه؟',
      data: { options: ['What is your name?', 'How are you?', 'Where are you?', 'Who is he?'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: ___ name is Ali.',
      data: { answer: 'My', hint: 'للتحدث عن نفسك' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: ما اسمك؟',
      data: { answer: 'What is your name?', alternatives: ['What\'s your name?', 'what is your name'] }
    },
    {
      type: 'reorder',
      promptAr: 'رتب: is / name / My / Ali',
      data: { words: ['My', 'name', 'is', 'Ali'], correctOrder: [0, 1, 2, 3] }
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "His name"؟',
      data: { options: ['اسمه', 'اسمي', 'اسمك', 'اسمها'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: ___ is my friend Sara.',
      data: { answer: 'This', hint: 'للإشارة إلى شيء قريب' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: اسمها فاطمة',
      data: { answer: 'Her name is Fatima', alternatives: ['her name is Fatima'] }
    },
    {
      type: 'mcq',
      promptAr: 'ما الضمير المناسب للفتاة؟',
      data: { options: ['Her', 'His', 'My', 'Your'], correct: 0 }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'ترجم: اسمي أحمد',
      data: { answer: 'My name is Ahmed', alternatives: ['My name is Ahmad'] },
      points: 20
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: What is ___ name? (للولد)',
      data: { answer: 'his' },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'كيف تقدم صديقك؟',
      data: { options: ['This is my friend', 'What is your name', 'How are you', 'Goodbye'], correct: 0 },
      points: 15
    },
    {
      type: 'reorder',
      promptAr: 'رتب: your / What / name / is / ?',
      data: { words: ['What', 'is', 'your', 'name', '?'], correctOrder: [0, 1, 2, 3, 4] },
      points: 25
    },
    {
      type: 'translation',
      promptAr: 'ترجم: من هذا؟',
      data: { answer: 'Who is this?', alternatives: ['Who\'s this?'] },
      points: 25
    },
  ]
};

export const A1_U1_L4: LessonContent = {
  lessonId: 'A1-u01-l04',
  passingScore: 70,
  vocab: [
    { english: 'Please', arabic: 'من فضلك', example: 'Please help me.', exampleAr: 'من فضلك ساعدني.' },
    { english: 'Thank you', arabic: 'شكراً', example: 'Thank you very much.', exampleAr: 'شكراً جزيلاً.' },
    { english: 'Thanks', arabic: 'شكراً', example: 'Thanks a lot!', exampleAr: 'شكراً كثيراً!' },
    { english: "You're welcome", arabic: 'عفواً', example: "You're welcome!", exampleAr: 'عفواً!' },
    { english: 'Sorry', arabic: 'آسف', example: 'Sorry, I am late.', exampleAr: 'آسف، تأخرت.' },
    { english: 'Excuse me', arabic: 'عذراً/لو سمحت', example: 'Excuse me, where is the bank?', exampleAr: 'عذراً، أين البنك؟' },
    { english: 'Yes', arabic: 'نعم', example: 'Yes, I understand.', exampleAr: 'نعم، أفهم.' },
    { english: 'No', arabic: 'لا', example: 'No, thank you.', exampleAr: 'لا، شكراً.' },
    { english: 'OK', arabic: 'حسناً', example: 'OK, I will do it.', exampleAr: 'حسناً، سأفعل.' },
    { english: 'Help', arabic: 'مساعدة', example: 'I need help.', exampleAr: 'أحتاج مساعدة.' },
  ],
  sentences: [
    { english: 'Please open the door.', arabic: 'من فضلك افتح الباب.' },
    { english: 'Thank you for your help.', arabic: 'شكراً لمساعدتك.' },
    { english: "Sorry, I don't understand.", arabic: 'آسف، لا أفهم.' },
    { english: 'Excuse me, can you help me?', arabic: 'عذراً، هل يمكنك مساعدتي؟' },
    { english: "You're welcome!", arabic: 'عفواً!' },
    { english: 'No problem.', arabic: 'لا مشكلة.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'ماذا تقول عندما يساعدك أحد؟',
      data: { options: ['Thank you', 'Sorry', 'Goodbye', 'Hello'], correct: 0 }
    },
    {
      type: 'mcq',
      promptAr: 'ماذا تقول عندما تريد شيئاً بأدب؟',
      data: { options: ['Please', 'Sorry', 'Thank you', 'Yes'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: ___ me, where is the station?',
      data: { answer: 'Excuse', hint: 'لجذب انتباه شخص' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: شكراً جزيلاً',
      data: { answer: 'Thank you very much', alternatives: ['Thanks a lot', 'thank you very much'] }
    },
    {
      type: 'reorder',
      promptAr: 'رتب: you / Thank / help / for / your',
      data: { words: ['Thank', 'you', 'for', 'your', 'help'], correctOrder: [0, 1, 2, 3, 4] }
    },
    {
      type: 'mcq',
      promptAr: 'ما الرد على "Thank you"؟',
      data: { options: ["You're welcome", 'Thank you', 'Sorry', 'Please'], correct: 0 }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: آسف',
      data: { answer: 'Sorry', alternatives: ['sorry', "I'm sorry", 'I am sorry'] }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: No ___. (لا مشكلة)',
      data: { answer: 'problem', hint: 'تعني "مشكلة"' }
    },
  ],
  quiz: [
    {
      type: 'mcq',
      promptAr: 'ما معنى "Excuse me"؟',
      data: { options: ['عذراً/لو سمحت', 'شكراً', 'آسف', 'من فضلك'], correct: 0 },
      points: 15
    },
    {
      type: 'translation',
      promptAr: 'ترجم: من فضلك ساعدني',
      data: { answer: 'Please help me', alternatives: ['please help me'] },
      points: 20
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: You\'re ___!',
      data: { answer: 'welcome' },
      points: 15
    },
    {
      type: 'reorder',
      promptAr: 'رتب: sorry / am / I / late',
      data: { words: ['I', 'am', 'sorry', 'late'], correctOrder: [0, 1, 2, 3] },
      points: 25
    },
    {
      type: 'mcq',
      promptAr: 'ما عكس "Yes"؟',
      data: { options: ['No', 'OK', 'Please', 'Thanks'], correct: 0 },
      points: 10
    },
    {
      type: 'translation',
      promptAr: 'ترجم: لا أفهم',
      data: { answer: "I don't understand", alternatives: ['I do not understand'] },
      points: 15
    },
  ]
};

export const A1_U1_L5: LessonContent = {
  lessonId: 'A1-u01-l05',
  passingScore: 70,
  vocab: [
    { english: 'Where', arabic: 'أين', example: 'Where are you from?', exampleAr: 'من أين أنت؟' },
    { english: 'From', arabic: 'من', example: 'I am from Egypt.', exampleAr: 'أنا من مصر.' },
    { english: 'Country', arabic: 'بلد', example: 'Egypt is a beautiful country.', exampleAr: 'مصر بلد جميل.' },
    { english: 'City', arabic: 'مدينة', example: 'I live in a big city.', exampleAr: 'أعيش في مدينة كبيرة.' },
    { english: 'Live', arabic: 'يعيش/يسكن', example: 'I live in Cairo.', exampleAr: 'أعيش في القاهرة.' },
    { english: 'Speak', arabic: 'يتكلم', example: 'I speak Arabic.', exampleAr: 'أتكلم العربية.' },
    { english: 'Language', arabic: 'لغة', example: 'English is a language.', exampleAr: 'الإنجليزية لغة.' },
    { english: 'Arabic', arabic: 'العربية', example: 'I speak Arabic fluently.', exampleAr: 'أتكلم العربية بطلاقة.' },
    { english: 'English', arabic: 'الإنجليزية', example: 'I am learning English.', exampleAr: 'أتعلم الإنجليزية.' },
    { english: 'Learn', arabic: 'يتعلم', example: 'I want to learn.', exampleAr: 'أريد أن أتعلم.' },
  ],
  sentences: [
    { english: 'Where are you from?', arabic: 'من أين أنت؟' },
    { english: 'I am from Saudi Arabia.', arabic: 'أنا من السعودية.' },
    { english: 'I live in Riyadh.', arabic: 'أعيش في الرياض.' },
    { english: 'I speak Arabic and English.', arabic: 'أتكلم العربية والإنجليزية.' },
    { english: 'What language do you speak?', arabic: 'ما اللغة التي تتكلمها؟' },
    { english: 'I am learning English.', arabic: 'أتعلم الإنجليزية.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'كيف تسأل شخصاً عن بلده؟',
      data: { options: ['Where are you from?', 'What is your name?', 'How are you?', 'Who are you?'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: I am ___ Egypt.',
      data: { answer: 'from', hint: 'للتعبير عن الأصل' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: أعيش في دبي',
      data: { answer: 'I live in Dubai', alternatives: ['i live in Dubai', 'I live in dubai'] }
    },
    {
      type: 'reorder',
      promptAr: 'رتب: from / are / you / Where / ?',
      data: { words: ['Where', 'are', 'you', 'from', '?'], correctOrder: [0, 1, 2, 3, 4] }
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "I speak Arabic"؟',
      data: { options: ['أتكلم العربية', 'أتعلم العربية', 'أحب العربية', 'أكتب العربية'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: I ___ in a big city.',
      data: { answer: 'live', hint: 'تعني "أسكن"' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: أتعلم الإنجليزية',
      data: { answer: 'I am learning English', alternatives: ["I'm learning English", 'I learn English'] }
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "country"؟',
      data: { options: ['بلد', 'مدينة', 'لغة', 'اسم'], correct: 0 }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'ترجم: من أين أنت؟',
      data: { answer: 'Where are you from?', alternatives: ['where are you from'] },
      points: 20
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: I ___ Arabic and English.',
      data: { answer: 'speak' },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "I am from Jordan"؟',
      data: { options: ['أنا من الأردن', 'أعيش في الأردن', 'أحب الأردن', 'أزور الأردن'], correct: 0 },
      points: 15
    },
    {
      type: 'reorder',
      promptAr: 'رتب: live / I / Cairo / in',
      data: { words: ['I', 'live', 'in', 'Cairo'], correctOrder: [0, 1, 2, 3] },
      points: 25
    },
    {
      type: 'translation',
      promptAr: 'ترجم: أتكلم ثلاث لغات',
      data: { answer: 'I speak three languages', alternatives: ['i speak three languages'] },
      points: 25
    },
  ]
};

// ==========================================
// UNIT 2: الأرقام والوقت (Numbers & Time)
// ==========================================

export const A1_U2_L1: LessonContent = {
  lessonId: 'A1-u02-l01',
  passingScore: 70,
  vocab: [
    { english: 'One', arabic: 'واحد', example: 'I have one book.', exampleAr: 'لدي كتاب واحد.' },
    { english: 'Two', arabic: 'اثنان', example: 'I have two brothers.', exampleAr: 'لدي أخوان.' },
    { english: 'Three', arabic: 'ثلاثة', example: 'Three apples.', exampleAr: 'ثلاث تفاحات.' },
    { english: 'Four', arabic: 'أربعة', example: 'Four chairs.', exampleAr: 'أربعة كراسي.' },
    { english: 'Five', arabic: 'خمسة', example: 'Five fingers.', exampleAr: 'خمسة أصابع.' },
    { english: 'Six', arabic: 'ستة', example: 'Six days.', exampleAr: 'ستة أيام.' },
    { english: 'Seven', arabic: 'سبعة', example: 'Seven colors.', exampleAr: 'سبعة ألوان.' },
    { english: 'Eight', arabic: 'ثمانية', example: 'Eight hours.', exampleAr: 'ثماني ساعات.' },
    { english: 'Nine', arabic: 'تسعة', example: 'Nine students.', exampleAr: 'تسعة طلاب.' },
    { english: 'Ten', arabic: 'عشرة', example: 'Ten questions.', exampleAr: 'عشرة أسئلة.' },
  ],
  sentences: [
    { english: 'I am twenty years old.', arabic: 'عمري عشرون سنة.' },
    { english: 'There are five people here.', arabic: 'هناك خمسة أشخاص هنا.' },
    { english: 'I have three sisters.', arabic: 'لدي ثلاث أخوات.' },
    { english: 'She has two cats.', arabic: 'لديها قطتان.' },
    { english: 'We need six chairs.', arabic: 'نحتاج ستة كراسي.' },
    { english: 'Count from one to ten.', arabic: 'عد من واحد إلى عشرة.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'ما معنى "Five"؟',
      data: { options: ['خمسة', 'أربعة', 'ستة', 'سبعة'], correct: 0 }
    },
    {
      type: 'mcq',
      promptAr: 'كيف تقول "ثلاثة" بالإنجليزية؟',
      data: { options: ['Three', 'Tree', 'Free', 'There'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: One, Two, ___',
      data: { answer: 'Three', alternatives: ['three'] }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: عشرة',
      data: { answer: 'Ten', alternatives: ['ten'] }
    },
    {
      type: 'mcq',
      promptAr: 'ما هو الرقم بعد "Seven"؟',
      data: { options: ['Eight', 'Nine', 'Six', 'Ten'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Six, Seven, ___, Nine',
      data: { answer: 'Eight', alternatives: ['eight'] }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: لدي أربعة كتب',
      data: { answer: 'I have four books', alternatives: ['i have four books'] }
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "Nine"؟',
      data: { options: ['تسعة', 'ثمانية', 'عشرة', 'سبعة'], correct: 0 }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'ترجم: واحد',
      data: { answer: 'One', alternatives: ['one'] },
      points: 10
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Four, ___, Six',
      data: { answer: 'Five', alternatives: ['five'] },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "Two"؟',
      data: { options: ['اثنان', 'واحد', 'ثلاثة', 'عشرة'], correct: 0 },
      points: 15
    },
    {
      type: 'translation',
      promptAr: 'ترجم: ثمانية',
      data: { answer: 'Eight', alternatives: ['eight'] },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'رتب: have / I / books / three',
      data: { words: ['I', 'have', 'three', 'books'], correctOrder: [0, 1, 2, 3] },
      points: 20
    },
    {
      type: 'mcq',
      promptAr: 'ما الرقم الذي يأتي بعد "Nine"؟',
      data: { options: ['Ten', 'Eight', 'Eleven', 'Seven'], correct: 0 },
      points: 20
    },
  ]
};

export const A1_U2_L2: LessonContent = {
  lessonId: 'A1-u02-l02',
  passingScore: 70,
  vocab: [
    { english: 'Eleven', arabic: 'أحد عشر' },
    { english: 'Twelve', arabic: 'اثنا عشر' },
    { english: 'Thirteen', arabic: 'ثلاثة عشر' },
    { english: 'Fourteen', arabic: 'أربعة عشر' },
    { english: 'Fifteen', arabic: 'خمسة عشر' },
    { english: 'Sixteen', arabic: 'ستة عشر' },
    { english: 'Seventeen', arabic: 'سبعة عشر' },
    { english: 'Eighteen', arabic: 'ثمانية عشر' },
    { english: 'Nineteen', arabic: 'تسعة عشر' },
    { english: 'Twenty', arabic: 'عشرون' },
  ],
  sentences: [
    { english: 'I am fifteen years old.', arabic: 'عمري خمسة عشر سنة.' },
    { english: 'There are twenty students.', arabic: 'هناك عشرون طالباً.' },
    { english: 'The book has twelve chapters.', arabic: 'الكتاب فيه اثنا عشر فصلاً.' },
    { english: 'She is sixteen years old.', arabic: 'عمرها ستة عشر سنة.' },
    { english: 'We have eleven players.', arabic: 'لدينا أحد عشر لاعباً.' },
    { english: 'The month has thirty days.', arabic: 'الشهر فيه ثلاثون يوماً.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'ما معنى "Twelve"؟',
      data: { options: ['اثنا عشر', 'أحد عشر', 'عشرون', 'ثلاثة عشر'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Ten, Eleven, ___',
      data: { answer: 'Twelve', alternatives: ['twelve'] }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: خمسة عشر',
      data: { answer: 'Fifteen', alternatives: ['fifteen'] }
    },
    {
      type: 'mcq',
      promptAr: 'كيف تكتب 20 بالإنجليزية؟',
      data: { options: ['Twenty', 'Twelve', 'Twinty', 'Twenti'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Eighteen, Nineteen, ___',
      data: { answer: 'Twenty', alternatives: ['twenty'] }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: عمري ستة عشر سنة',
      data: { answer: 'I am sixteen years old', alternatives: ["I'm sixteen years old"] }
    },
    {
      type: 'mcq',
      promptAr: 'ما الرقم الذي يسبق "Fourteen"؟',
      data: { options: ['Thirteen', 'Fifteen', 'Twelve', 'Eleven'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Sixteen, Seventeen, ___',
      data: { answer: 'Eighteen', alternatives: ['eighteen'] }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'ترجم: عشرون',
      data: { answer: 'Twenty', alternatives: ['twenty'] },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Thirteen, ___, Fifteen',
      data: { answer: 'Fourteen', alternatives: ['fourteen'] },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "Seventeen"؟',
      data: { options: ['سبعة عشر', 'ستة عشر', 'ثمانية عشر', 'تسعة عشر'], correct: 0 },
      points: 20
    },
    {
      type: 'translation',
      promptAr: 'ترجم: أحد عشر',
      data: { answer: 'Eleven', alternatives: ['eleven'] },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'رتب: am / years / I / old / eighteen',
      data: { words: ['I', 'am', 'eighteen', 'years', 'old'], correctOrder: [0, 1, 2, 3, 4] },
      points: 30
    },
  ]
};

export const A1_U2_L3: LessonContent = {
  lessonId: 'A1-u02-l03',
  passingScore: 70,
  vocab: [
    { english: 'Time', arabic: 'وقت/الساعة', example: 'What time is it?', exampleAr: 'كم الساعة؟' },
    { english: 'Hour', arabic: 'ساعة', example: 'One hour.', exampleAr: 'ساعة واحدة.' },
    { english: 'Minute', arabic: 'دقيقة', example: 'Five minutes.', exampleAr: 'خمس دقائق.' },
    { english: "O'clock", arabic: 'تماماً', example: "It is three o'clock.", exampleAr: 'الساعة الثالثة تماماً.' },
    { english: 'Half', arabic: 'نصف', example: 'Half past two.', exampleAr: 'الثانية والنصف.' },
    { english: 'Quarter', arabic: 'ربع', example: 'Quarter past five.', exampleAr: 'الخامسة والربع.' },
    { english: 'Morning', arabic: 'صباح', example: 'In the morning.', exampleAr: 'في الصباح.' },
    { english: 'Afternoon', arabic: 'بعد الظهر', example: 'In the afternoon.', exampleAr: 'بعد الظهر.' },
    { english: 'Evening', arabic: 'مساء', example: 'In the evening.', exampleAr: 'في المساء.' },
    { english: 'Night', arabic: 'ليل', example: 'At night.', exampleAr: 'في الليل.' },
  ],
  sentences: [
    { english: 'What time is it?', arabic: 'كم الساعة؟' },
    { english: "It is eight o'clock.", arabic: 'الساعة الثامنة.' },
    { english: 'It is half past nine.', arabic: 'الساعة التاسعة والنصف.' },
    { english: 'I wake up at seven.', arabic: 'أستيقظ في السابعة.' },
    { english: 'See you at three in the afternoon.', arabic: 'أراك في الثالثة بعد الظهر.' },
    { english: 'I sleep at ten at night.', arabic: 'أنام في العاشرة ليلاً.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'كيف تسأل عن الوقت بالإنجليزية؟',
      data: { options: ['What time is it?', 'Where is time?', 'How time?', 'What is time?'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: It is three ___. (تماماً)',
      data: { answer: "o'clock", alternatives: ['oclock'] }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: الساعة الخامسة',
      data: { answer: "It is five o'clock", alternatives: ["It's five o'clock", "it is five o'clock"] }
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "half past two"؟',
      data: { options: ['الثانية والنصف', 'الثانية والربع', 'الثانية تماماً', 'الثانية إلا ربع'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: I wake up in the ___. (صباح)',
      data: { answer: 'morning' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: كم الساعة؟',
      data: { answer: 'What time is it?', alternatives: ["What's the time?"] }
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "Quarter"؟',
      data: { options: ['ربع', 'نصف', 'ساعة', 'دقيقة'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: I sleep at ___. (ليل)',
      data: { answer: 'night' }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'ترجم: الساعة السابعة والنصف',
      data: { answer: 'It is half past seven', alternatives: ["It's half past seven"] },
      points: 20
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "in the afternoon"؟',
      data: { options: ['بعد الظهر', 'في الصباح', 'في المساء', 'في الليل'], correct: 0 },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: It is ___ past three.',
      data: { answer: 'quarter', hint: 'ربع ساعة' },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'رتب: time / What / is / it / ?',
      data: { words: ['What', 'time', 'is', 'it', '?'], correctOrder: [0, 1, 2, 3, 4] },
      points: 20
    },
    {
      type: 'translation',
      promptAr: 'ترجم: أستيقظ في السادسة صباحاً',
      data: { answer: 'I wake up at six in the morning', alternatives: ['I wake up at 6 in the morning'] },
      points: 25
    },
  ]
};

export const A1_U2_L4: LessonContent = {
  lessonId: 'A1-u02-l04',
  passingScore: 70,
  vocab: [
    { english: 'Sunday', arabic: 'الأحد' },
    { english: 'Monday', arabic: 'الإثنين' },
    { english: 'Tuesday', arabic: 'الثلاثاء' },
    { english: 'Wednesday', arabic: 'الأربعاء' },
    { english: 'Thursday', arabic: 'الخميس' },
    { english: 'Friday', arabic: 'الجمعة' },
    { english: 'Saturday', arabic: 'السبت' },
    { english: 'Today', arabic: 'اليوم' },
    { english: 'Tomorrow', arabic: 'غداً' },
    { english: 'Yesterday', arabic: 'أمس' },
  ],
  sentences: [
    { english: 'Today is Monday.', arabic: 'اليوم الإثنين.' },
    { english: 'Tomorrow is Tuesday.', arabic: 'غداً الثلاثاء.' },
    { english: 'I work from Sunday to Thursday.', arabic: 'أعمل من الأحد إلى الخميس.' },
    { english: 'Friday is a holiday.', arabic: 'الجمعة إجازة.' },
    { english: 'What day is today?', arabic: 'ما هو يوم اليوم؟' },
    { english: 'Yesterday was Saturday.', arabic: 'أمس كان السبت.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'ما معنى "Monday"؟',
      data: { options: ['الإثنين', 'الثلاثاء', 'الأحد', 'الأربعاء'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Sunday, ___, Tuesday',
      data: { answer: 'Monday' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: اليوم الخميس',
      data: { answer: 'Today is Thursday', alternatives: ['today is Thursday'] }
    },
    {
      type: 'mcq',
      promptAr: 'ما هو اليوم الذي يأتي بعد Friday؟',
      data: { options: ['Saturday', 'Sunday', 'Thursday', 'Monday'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: ___ is Thursday. (غداً)',
      data: { answer: 'Tomorrow' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: الجمعة',
      data: { answer: 'Friday', alternatives: ['friday'] }
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "Yesterday"؟',
      data: { options: ['أمس', 'اليوم', 'غداً', 'الأسبوع'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: Friday, Saturday, ___',
      data: { answer: 'Sunday' }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'ترجم: الأربعاء',
      data: { answer: 'Wednesday', alternatives: ['wednesday'] },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'ما اليوم الذي يسبق Thursday؟',
      data: { options: ['Wednesday', 'Friday', 'Tuesday', 'Saturday'], correct: 0 },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: ___ was Sunday. (أمس)',
      data: { answer: 'Yesterday' },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'رتب: is / day / What / today / ?',
      data: { words: ['What', 'day', 'is', 'today', '?'], correctOrder: [0, 1, 2, 3, 4] },
      points: 25
    },
    {
      type: 'translation',
      promptAr: 'ترجم: أعمل يوم السبت',
      data: { answer: 'I work on Saturday', alternatives: ['i work on Saturday'] },
      points: 25
    },
  ]
};

export const A1_U2_L5: LessonContent = {
  lessonId: 'A1-u02-l05',
  passingScore: 70,
  vocab: [
    { english: 'January', arabic: 'يناير' },
    { english: 'February', arabic: 'فبراير' },
    { english: 'March', arabic: 'مارس' },
    { english: 'April', arabic: 'أبريل' },
    { english: 'May', arabic: 'مايو' },
    { english: 'June', arabic: 'يونيو' },
    { english: 'Month', arabic: 'شهر' },
    { english: 'Year', arabic: 'سنة' },
    { english: 'Birthday', arabic: 'عيد ميلاد' },
    { english: 'Date', arabic: 'تاريخ' },
  ],
  sentences: [
    { english: 'My birthday is in January.', arabic: 'عيد ميلادي في يناير.' },
    { english: 'There are twelve months in a year.', arabic: 'هناك اثنا عشر شهراً في السنة.' },
    { english: 'What is the date today?', arabic: 'ما هو تاريخ اليوم؟' },
    { english: 'It is March 15th.', arabic: 'اليوم 15 مارس.' },
    { english: 'Summer is in June.', arabic: 'الصيف في يونيو.' },
    { english: 'The new year starts in January.', arabic: 'السنة الجديدة تبدأ في يناير.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'ما هو أول شهر في السنة؟',
      data: { options: ['January', 'February', 'March', 'December'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: January, February, ___',
      data: { answer: 'March' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: عيد ميلادي في أبريل',
      data: { answer: 'My birthday is in April', alternatives: ['my birthday is in April'] }
    },
    {
      type: 'mcq',
      promptAr: 'ما معنى "Month"؟',
      data: { options: ['شهر', 'سنة', 'يوم', 'أسبوع'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: April, ___, June',
      data: { answer: 'May' }
    },
    {
      type: 'translation',
      promptAr: 'ترجم: يونيو',
      data: { answer: 'June', alternatives: ['june'] }
    },
    {
      type: 'mcq',
      promptAr: 'كم شهراً في السنة؟',
      data: { options: ['Twelve', 'Ten', 'Seven', 'Thirty'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: My ___ is in March.',
      data: { answer: 'birthday' }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'ترجم: فبراير',
      data: { answer: 'February', alternatives: ['february'] },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'ما الشهر الذي يأتي بعد April؟',
      data: { options: ['May', 'June', 'March', 'July'], correct: 0 },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'أكمل: There are twelve ___ in a year.',
      data: { answer: 'months' },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'رتب: birthday / My / in / is / May',
      data: { words: ['My', 'birthday', 'is', 'in', 'May'], correctOrder: [0, 1, 2, 3, 4] },
      points: 25
    },
    {
      type: 'translation',
      promptAr: 'ترجم: ما هو تاريخ اليوم؟',
      data: { answer: 'What is the date today?', alternatives: ["What's the date today?"] },
      points: 25
    },
  ]
};

// Import additional units
import { A1_U3_L1, A1_U3_L2, A1_U3_L3, A1_U3_L4, A1_U3_L5 } from './a1-lessons-unit3';
import { A1_U4_L1, A1_U4_L2, A1_U4_L3, A1_U4_L4, A1_U4_L5 } from './a1-lessons-unit4';
import { A1_U5_L1, A1_U5_L2, A1_U5_L3, A1_U5_L4, A1_U5_L5 } from './a1-lessons-unit5';
import { a1Unit6Lessons } from './a1-lessons-unit6';
import { a1Unit7Lessons } from './a1-lessons-unit7';
import { a1Unit8Lessons } from './a1-lessons-unit8';
import { a1Unit9Lessons } from './a1-lessons-unit9';
import { a1Unit10Lessons } from './a1-lessons-unit10';

// Export all lessons in a map for easy access
export const A1_LESSONS_CONTENT: Record<string, LessonContent> = {
  'A1-u01-l01': A1_U1_L1,
  'A1-u01-l02': A1_U1_L2,
  'A1-u01-l03': A1_U1_L3,
  'A1-u01-l04': A1_U1_L4,
  'A1-u01-l05': A1_U1_L5,
  'A1-u02-l01': A1_U2_L1,
  'A1-u02-l02': A1_U2_L2,
  'A1-u02-l03': A1_U2_L3,
  'A1-u02-l04': A1_U2_L4,
  'A1-u02-l05': A1_U2_L5,
  // Unit 3: Family & Home
  'A1-u03-l01': A1_U3_L1,
  'A1-u03-l02': A1_U3_L2,
  'A1-u03-l03': A1_U3_L3,
  'A1-u03-l04': A1_U3_L4,
  'A1-u03-l05': A1_U3_L5,
  // Unit 4: School & Work
  'A1-u04-l01': A1_U4_L1,
  'A1-u04-l02': A1_U4_L2,
  'A1-u04-l03': A1_U4_L3,
  'A1-u04-l04': A1_U4_L4,
  'A1-u04-l05': A1_U4_L5,
  // Unit 5: Food & Drinks
  'A1-u05-l01': A1_U5_L1,
  'A1-u05-l02': A1_U5_L2,
  'A1-u05-l03': A1_U5_L3,
  'A1-u05-l04': A1_U5_L4,
  'A1-u05-l05': A1_U5_L5,
  // Units 6-10
  ...a1Unit6Lessons,
  ...a1Unit7Lessons,
  ...a1Unit8Lessons,
  ...a1Unit9Lessons,
  ...a1Unit10Lessons,
};

// Import A2, B1, B2, and C1 lessons for unified access
import { A2_LESSONS_CONTENT } from './a2-lessons';
import { B1_LESSONS_CONTENT } from './b1-lessons';
import { B2_LESSONS_CONTENT } from './b2-lessons';
import { C1_LESSONS_CONTENT } from './c1-lessons';

// Unified lesson content registry
export const ALL_LESSONS_CONTENT: Record<string, LessonContent> = {
  ...A1_LESSONS_CONTENT,
  ...A2_LESSONS_CONTENT,
  ...B1_LESSONS_CONTENT,
  ...B2_LESSONS_CONTENT,
  ...C1_LESSONS_CONTENT,
};

export function getLessonContent(lessonId: string): LessonContent | undefined {
  return ALL_LESSONS_CONTENT[lessonId];
}

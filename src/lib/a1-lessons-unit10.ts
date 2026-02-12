// A1 Unit 10: Review - المراجعة
import { LessonContent } from './a1-lessons';

export const A1_U10_L1: LessonContent = {
  lessonId: 'A1-u10-l01',
  passingScore: 70,
  vocab: [
    { english: 'Hello', arabic: 'مرحبا', example: 'Hello, how are you?', exampleAr: 'مرحباً، كيف حالك؟' },
    { english: 'Goodbye', arabic: 'مع السلامة', example: 'Goodbye, see you!', exampleAr: 'مع السلامة، أراك!' },
    { english: 'Family', arabic: 'عائلة', example: 'This is my family.', exampleAr: 'هذه عائلتي.' },
    { english: 'Friend', arabic: 'صديق', example: 'She is my friend.', exampleAr: 'هي صديقتي.' },
    { english: 'Teacher', arabic: 'معلم', example: 'He is my teacher.', exampleAr: 'هو معلمي.' },
    { english: 'Student', arabic: 'طالب', example: 'I am a student.', exampleAr: 'أنا طالب.' },
    { english: 'Nice to meet you', arabic: 'سررت بلقائك', example: 'Nice to meet you!', exampleAr: 'سررت بلقائك!' },
    { english: 'How are you', arabic: 'كيف حالك', example: 'How are you today?', exampleAr: 'كيف حالك اليوم؟' },
    { english: 'Thank you', arabic: 'شكراً', example: 'Thank you very much!', exampleAr: 'شكراً جزيلاً!' },
    { english: 'Please', arabic: 'من فضلك', example: 'Please help me.', exampleAr: 'من فضلك ساعدني.' },
  ],
  sentences: [
    { english: 'Hello, how are you?', arabic: 'مرحباً، كيف حالك؟' },
    { english: 'I am fine, thank you.', arabic: 'أنا بخير، شكراً.' },
    { english: 'Nice to meet you.', arabic: 'سررت بلقائك.' },
    { english: 'This is my family.', arabic: 'هذه عائلتي.' },
    { english: 'She is my friend.', arabic: 'هي صديقتي.' },
    { english: 'He is my teacher.', arabic: 'هو معلمي.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "hello"؟', data: { options: ['مع السلامة', 'مرحبا', 'شكراً', 'من فضلك'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "عائلة" بالإنجليزية؟', data: { options: ['friend', 'teacher', 'family', 'student'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: ___, how are you? (مرحباً)', data: { answer: 'Hello' } },
    { type: 'matching', promptAr: 'طابق التحيات', data: { pairs: [{ english: 'goodbye', arabic: 'مع السلامة' }, { english: 'thank you', arabic: 'شكراً' }, { english: 'please', arabic: 'من فضلك' }, { english: 'how are you', arabic: 'كيف حالك' }] } },
    { type: 'reorder', promptAr: 'رتب: you / meet / Nice / to', data: { words: ['Nice', 'to', 'meet', 'you'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ماذا تقول عند المغادرة؟', data: { options: ['hello', 'goodbye', 'thank you', 'please'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I am fine, ___ you. (شكراً)', data: { answer: 'thank' } },
    { type: 'translation', promptAr: 'ترجم: هي صديقتي', data: { answer: 'She is my friend', alternatives: ['she is my friend'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "goodbye"؟', data: { options: ['مرحبا', 'شكراً', 'مع السلامة', 'من فضلك'], correct: 2 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "معلم" بالإنجليزية؟', data: { options: ['student', 'teacher', 'friend', 'family'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: This is my ___. (عائلة)', data: { answer: 'family' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الأشخاص', data: { pairs: [{ english: 'friend', arabic: 'صديق' }, { english: 'teacher', arabic: 'معلم' }, { english: 'student', arabic: 'طالب' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: سررت بلقائك', data: { answer: 'Nice to meet you', alternatives: ['nice to meet you'] }, points: 25 },
  ]
};

export const A1_U10_L2: LessonContent = {
  lessonId: 'A1-u10-l02',
  passingScore: 70,
  vocab: [
    { english: 'Wake up', arabic: 'يستيقظ', example: 'I wake up at 6 AM.', exampleAr: 'أستيقظ الساعة السادسة.' },
    { english: 'Eat', arabic: 'يأكل', example: 'I eat breakfast.', exampleAr: 'آكل الفطور.' },
    { english: 'Drink', arabic: 'يشرب', example: 'I drink coffee.', exampleAr: 'أشرب القهوة.' },
    { english: 'Work', arabic: 'يعمل', example: 'I work from 9 to 5.', exampleAr: 'أعمل من 9 إلى 5.' },
    { english: 'Study', arabic: 'يدرس', example: 'I study English.', exampleAr: 'أدرس الإنجليزية.' },
    { english: 'Sleep', arabic: 'ينام', example: 'I sleep at 10 PM.', exampleAr: 'أنام الساعة العاشرة.' },
    { english: 'Breakfast', arabic: 'فطور', example: 'I have breakfast.', exampleAr: 'أتناول الفطور.' },
    { english: 'Lunch', arabic: 'غداء', example: 'Lunch is at 12.', exampleAr: 'الغداء الساعة 12.' },
    { english: 'Dinner', arabic: 'عشاء', example: 'Dinner is at 7 PM.', exampleAr: 'العشاء الساعة السابعة.' },
    { english: 'Time', arabic: 'وقت', example: 'What time is it?', exampleAr: 'كم الساعة؟' },
  ],
  sentences: [
    { english: 'I wake up at 6 AM.', arabic: 'أستيقظ الساعة السادسة صباحاً.' },
    { english: 'I eat breakfast every day.', arabic: 'آكل الفطور كل يوم.' },
    { english: 'I work from 9 to 5.', arabic: 'أعمل من 9 إلى 5.' },
    { english: 'I study English at night.', arabic: 'أدرس الإنجليزية ليلاً.' },
    { english: 'I drink coffee in the morning.', arabic: 'أشرب القهوة في الصباح.' },
    { english: 'What time is it?', arabic: 'كم الساعة؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "wake up"؟', data: { options: ['ينام', 'يأكل', 'يستيقظ', 'يشرب'], correct: 2 } },
    { type: 'mcq', promptAr: 'كيف تقول "فطور" بالإنجليزية؟', data: { options: ['lunch', 'dinner', 'breakfast', 'food'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ up at 6 AM. (أستيقظ)', data: { answer: 'wake' } },
    { type: 'matching', promptAr: 'طابق الأنشطة اليومية', data: { pairs: [{ english: 'eat', arabic: 'يأكل' }, { english: 'drink', arabic: 'يشرب' }, { english: 'work', arabic: 'يعمل' }, { english: 'study', arabic: 'يدرس' }] } },
    { type: 'reorder', promptAr: 'رتب: day / breakfast / every / I / eat', data: { words: ['I', 'eat', 'breakfast', 'every', 'day'], correctOrder: [0, 1, 2, 3, 4] } },
    { type: 'mcq', promptAr: 'أي وجبة تأكل في المساء؟', data: { options: ['breakfast', 'lunch', 'dinner', 'snack'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ from 9 to 5. (أعمل)', data: { answer: 'work' } },
    { type: 'translation', promptAr: 'ترجم: أشرب القهوة في الصباح', data: { answer: 'I drink coffee in the morning', alternatives: ['i drink coffee in the morning'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "eat"؟', data: { options: ['يشرب', 'يأكل', 'ينام', 'يعمل'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "غداء" بالإنجليزية؟', data: { options: ['breakfast', 'lunch', 'dinner', 'time'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ coffee in the morning. (أشرب)', data: { answer: 'drink' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الوجبات', data: { pairs: [{ english: 'breakfast', arabic: 'فطور' }, { english: 'lunch', arabic: 'غداء' }, { english: 'dinner', arabic: 'عشاء' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أدرس الإنجليزية ليلاً', data: { answer: 'I study English at night', alternatives: ['i study english at night'] }, points: 25 },
  ]
};

export const A1_U10_L3: LessonContent = {
  lessonId: 'A1-u10-l03',
  passingScore: 70,
  vocab: [
    { english: 'Hospital', arabic: 'مستشفى', example: 'The hospital is near.', exampleAr: 'المستشفى قريب.' },
    { english: 'School', arabic: 'مدرسة', example: 'I go to school.', exampleAr: 'أذهب إلى المدرسة.' },
    { english: 'Bank', arabic: 'بنك', example: 'The bank is here.', exampleAr: 'البنك هنا.' },
    { english: 'Right', arabic: 'يمين', example: 'Turn right.', exampleAr: 'انعطف يميناً.' },
    { english: 'Left', arabic: 'يسار', example: 'Turn left.', exampleAr: 'انعطف يساراً.' },
    { english: 'Straight', arabic: 'مستقيم', example: 'Go straight.', exampleAr: 'امشِ مستقيماً.' },
    { english: 'Near', arabic: 'قريب', example: 'It is near.', exampleAr: 'إنه قريب.' },
    { english: 'Far', arabic: 'بعيد', example: 'It is not far.', exampleAr: 'ليس بعيداً.' },
    { english: 'Where', arabic: 'أين', example: 'Where is the hospital?', exampleAr: 'أين المستشفى؟' },
    { english: 'Street', arabic: 'شارع', example: 'This is the street.', exampleAr: 'هذا الشارع.' },
  ],
  sentences: [
    { english: 'Where is the hospital?', arabic: 'أين المستشفى؟' },
    { english: 'Turn right at the corner.', arabic: 'انعطف يميناً عند الزاوية.' },
    { english: 'Go straight ahead.', arabic: 'امشِ مستقيماً.' },
    { english: 'The bank is near.', arabic: 'البنك قريب.' },
    { english: 'The school is on this street.', arabic: 'المدرسة في هذا الشارع.' },
    { english: 'It is not far from here.', arabic: 'ليس بعيداً من هنا.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "hospital"؟', data: { options: ['مدرسة', 'بنك', 'مستشفى', 'شارع'], correct: 2 } },
    { type: 'mcq', promptAr: 'كيف تقول "يمين" بالإنجليزية؟', data: { options: ['left', 'right', 'straight', 'near'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: ___ is the hospital? (أين)', data: { answer: 'Where' } },
    { type: 'matching', promptAr: 'طابق الاتجاهات', data: { pairs: [{ english: 'right', arabic: 'يمين' }, { english: 'left', arabic: 'يسار' }, { english: 'straight', arabic: 'مستقيم' }, { english: 'near', arabic: 'قريب' }] } },
    { type: 'reorder', promptAr: 'رتب: corner / Turn / the / right / at', data: { words: ['Turn', 'right', 'at', 'the', 'corner'], correctOrder: [0, 1, 2, 3, 4] } },
    { type: 'mcq', promptAr: 'ما عكس "near"؟', data: { options: ['left', 'right', 'far', 'straight'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: Go ___ ahead. (مستقيم)', data: { answer: 'straight' } },
    { type: 'translation', promptAr: 'ترجم: البنك قريب', data: { answer: 'The bank is near', alternatives: ['the bank is near'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "school"؟', data: { options: ['مستشفى', 'مدرسة', 'بنك', 'شارع'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "بعيد" بالإنجليزية؟', data: { options: ['near', 'far', 'left', 'right'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: The bank is ___. (قريب)', data: { answer: 'near' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الأماكن', data: { pairs: [{ english: 'hospital', arabic: 'مستشفى' }, { english: 'school', arabic: 'مدرسة' }, { english: 'bank', arabic: 'بنك' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: امشِ مستقيماً', data: { answer: 'Go straight', alternatives: ['go straight', 'Go straight ahead'] }, points: 25 },
  ]
};

export const A1_U10_L4: LessonContent = {
  lessonId: 'A1-u10-l04',
  passingScore: 70,
  vocab: [
    { english: 'Football', arabic: 'كرة القدم', example: 'I play football.', exampleAr: 'ألعب كرة القدم.' },
    { english: 'Music', arabic: 'موسيقى', example: 'I love music.', exampleAr: 'أحب الموسيقى.' },
    { english: 'Read', arabic: 'يقرأ', example: 'I read books.', exampleAr: 'أقرأ الكتب.' },
    { english: 'Buy', arabic: 'يشتري', example: 'I want to buy this.', exampleAr: 'أريد شراء هذا.' },
    { english: 'Price', arabic: 'سعر', example: 'What is the price?', exampleAr: 'ما السعر؟' },
    { english: 'Cheap', arabic: 'رخيص', example: 'This is cheap.', exampleAr: 'هذا رخيص.' },
    { english: 'Expensive', arabic: 'غالي', example: 'This is expensive.', exampleAr: 'هذا غالي.' },
    { english: 'Store', arabic: 'متجر', example: 'I go to the store.', exampleAr: 'أذهب إلى المتجر.' },
    { english: 'Hobby', arabic: 'هواية', example: 'Music is my hobby.', exampleAr: 'الموسيقى هوايتي.' },
    { english: 'Like', arabic: 'يحب', example: 'I like football.', exampleAr: 'أحب كرة القدم.' },
  ],
  sentences: [
    { english: 'I like playing football.', arabic: 'أحب لعب كرة القدم.' },
    { english: 'Music is my hobby.', arabic: 'الموسيقى هوايتي.' },
    { english: 'I read books every day.', arabic: 'أقرأ الكتب كل يوم.' },
    { english: 'I want to buy a new phone.', arabic: 'أريد شراء هاتف جديد.' },
    { english: 'What is the price?', arabic: 'ما السعر؟' },
    { english: 'This store is expensive.', arabic: 'هذا المتجر غالي.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "football"؟', data: { options: ['موسيقى', 'كرة القدم', 'قراءة', 'تسوق'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "يشتري" بالإنجليزية؟', data: { options: ['sell', 'buy', 'read', 'like'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ playing football. (أحب)', data: { answer: 'like' } },
    { type: 'matching', promptAr: 'طابق الهوايات والتسوق', data: { pairs: [{ english: 'music', arabic: 'موسيقى' }, { english: 'read', arabic: 'يقرأ' }, { english: 'price', arabic: 'سعر' }, { english: 'store', arabic: 'متجر' }] } },
    { type: 'reorder', promptAr: 'رتب: hobby / my / Music / is', data: { words: ['Music', 'is', 'my', 'hobby'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ما عكس "cheap"؟', data: { options: ['expensive', 'new', 'old', 'good'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ books every day. (أقرأ)', data: { answer: 'read' } },
    { type: 'translation', promptAr: 'ترجم: ما السعر؟', data: { answer: 'What is the price?', alternatives: ['what is the price'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "music"؟', data: { options: ['كرة القدم', 'موسيقى', 'قراءة', 'هواية'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "غالي" بالإنجليزية؟', data: { options: ['cheap', 'expensive', 'new', 'good'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: What is the ___? (السعر)', data: { answer: 'price' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'hobby', arabic: 'هواية' }, { english: 'like', arabic: 'يحب' }, { english: 'buy', arabic: 'يشتري' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: الموسيقى هوايتي', data: { answer: 'Music is my hobby', alternatives: ['music is my hobby'] }, points: 25 },
  ]
};

export const A1_U10_L5: LessonContent = {
  lessonId: 'A1-u10-l05',
  passingScore: 70,
  vocab: [
    { english: 'Name', arabic: 'اسم', example: 'What is your name?', exampleAr: 'ما اسمك؟' },
    { english: 'Country', arabic: 'بلد', example: 'What is your country?', exampleAr: 'ما بلدك؟' },
    { english: 'Language', arabic: 'لغة', example: 'I speak two languages.', exampleAr: 'أتكلم لغتين.' },
    { english: 'Learn', arabic: 'يتعلم', example: 'I am learning English.', exampleAr: 'أتعلم الإنجليزية.' },
    { english: 'Speak', arabic: 'يتكلم', example: 'I can speak Arabic.', exampleAr: 'أستطيع تكلم العربية.' },
    { english: 'Understand', arabic: 'يفهم', example: 'I understand a little.', exampleAr: 'أفهم قليلاً.' },
    { english: 'English', arabic: 'الإنجليزية', example: 'I study English.', exampleAr: 'أدرس الإنجليزية.' },
    { english: 'Arabic', arabic: 'العربية', example: 'I speak Arabic.', exampleAr: 'أتكلم العربية.' },
    { english: 'Good', arabic: 'جيد', example: 'You are very good!', exampleAr: 'أنت جيد جداً!' },
    { english: 'Congratulations', arabic: 'مبروك', example: 'Congratulations!', exampleAr: 'مبروك!' },
  ],
  sentences: [
    { english: 'What is your name?', arabic: 'ما اسمك؟' },
    { english: 'I am learning English.', arabic: 'أتعلم الإنجليزية.' },
    { english: 'I can speak Arabic.', arabic: 'أستطيع تكلم العربية.' },
    { english: 'I understand a little.', arabic: 'أفهم قليلاً.' },
    { english: 'You are very good!', arabic: 'أنت جيد جداً!' },
    { english: 'Congratulations on completing A1!', arabic: 'مبروك على إكمال A1!' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "name"؟', data: { options: ['بلد', 'لغة', 'اسم', 'عمل'], correct: 2 } },
    { type: 'mcq', promptAr: 'كيف تقول "يتعلم" بالإنجليزية؟', data: { options: ['speak', 'understand', 'learn', 'read'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: What is your ___? (اسم)', data: { answer: 'name' } },
    { type: 'matching', promptAr: 'طابق كلمات اللغة', data: { pairs: [{ english: 'speak', arabic: 'يتكلم' }, { english: 'understand', arabic: 'يفهم' }, { english: 'English', arabic: 'الإنجليزية' }, { english: 'Arabic', arabic: 'العربية' }] } },
    { type: 'reorder', promptAr: 'رتب: learning / am / English / I', data: { words: ['I', 'am', 'learning', 'English'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ماذا تقول للاحتفال بالنجاح؟', data: { options: ['goodbye', 'hello', 'congratulations', 'sorry'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: I can ___ Arabic. (أتكلم)', data: { answer: 'speak' } },
    { type: 'translation', promptAr: 'ترجم: أفهم قليلاً', data: { answer: 'I understand a little', alternatives: ['i understand a little'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "country"؟', data: { options: ['لغة', 'اسم', 'بلد', 'مدينة'], correct: 2 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "يفهم" بالإنجليزية؟', data: { options: ['speak', 'understand', 'learn', 'read'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ a little. (أفهم)', data: { answer: 'understand' }, points: 20 },
    { type: 'matching', promptAr: 'طابق كلمات المراجعة النهائية', data: { pairs: [{ english: 'language', arabic: 'لغة' }, { english: 'learn', arabic: 'يتعلم' }, { english: 'good', arabic: 'جيد' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: مبروك على إكمال A1!', data: { answer: 'Congratulations on completing A1!', alternatives: ['congratulations on completing a1'] }, points: 25 },
  ]
};

export const a1Unit10Lessons: Record<string, LessonContent> = {
  'A1-u10-l01': A1_U10_L1,
  'A1-u10-l02': A1_U10_L2,
  'A1-u10-l03': A1_U10_L3,
  'A1-u10-l04': A1_U10_L4,
  'A1-u10-l05': A1_U10_L5,
};

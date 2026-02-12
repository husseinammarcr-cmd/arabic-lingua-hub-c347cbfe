import { LessonContent } from './a1-lessons';

// Unit 5: Culture & Arts - الثقافة والفنون
export const B1_U5_L1: LessonContent = {
  lessonId: 'B1-u05-l01',
  passingScore: 70,
  vocab: [
    { english: 'museum', arabic: 'متحف', example: 'Visit the museum.', exampleAr: 'زر المتحف.' },
    { english: 'exhibition', arabic: 'معرض', example: 'The exhibition is amazing.', exampleAr: 'المعرض مذهل.' },
    { english: 'painting', arabic: 'لوحة', example: 'I bought a painting.', exampleAr: 'اشتريت لوحة.' },
    { english: 'sculpture', arabic: 'تمثال', example: 'The sculpture is beautiful.', exampleAr: 'التمثال جميل.' },
    { english: 'artist', arabic: 'فنان', example: 'She is a famous artist.', exampleAr: 'هي فنانة مشهورة.' },
    { english: 'gallery', arabic: 'صالة عرض', example: 'The gallery opened today.', exampleAr: 'صالة العرض افتتحت اليوم.' },
    { english: 'masterpiece', arabic: 'تحفة فنية', example: 'This is a masterpiece.', exampleAr: 'هذه تحفة فنية.' },
    { english: 'contemporary', arabic: 'معاصر', example: 'Contemporary art is diverse.', exampleAr: 'الفن المعاصر متنوع.' }
  ],
  sentences: [
    { english: 'The museum has a new exhibition.', arabic: 'المتحف لديه معرض جديد.' },
    { english: 'This painting is a masterpiece.', arabic: 'هذه اللوحة تحفة فنية.' },
    { english: 'The artist created beautiful sculptures.', arabic: 'الفنان أنشأ تماثيل جميلة.' },
    { english: 'Contemporary art galleries are popular.', arabic: 'صالات الفن المعاصر شائعة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "exhibition"؟', data: { options: ['معرض', 'متحف', 'لوحة', 'تمثال'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'She is a famous _____. (فنانة)', data: { answer: 'artist' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'museum', arabic: 'متحف' }, { english: 'painting', arabic: 'لوحة' }, { english: 'sculpture', arabic: 'تمثال' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "تحفة فنية"؟', data: { options: ['masterpiece', 'painting', 'sculpture', 'exhibition'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "contemporary"؟', data: { options: ['معاصر', 'قديم', 'كلاسيكي', 'تقليدي'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The _____ opened today. (صالة عرض)', data: { answer: 'gallery' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذه تحفة فنية.', data: { answer: 'This is a masterpiece.' }, points: 15 }
  ]
};

export const B1_U5_L2: LessonContent = {
  lessonId: 'B1-u05-l02',
  passingScore: 70,
  vocab: [
    { english: 'concert', arabic: 'حفلة موسيقية', example: 'We went to a concert.', exampleAr: 'ذهبنا إلى حفلة موسيقية.' },
    { english: 'orchestra', arabic: 'أوركسترا', example: 'The orchestra played beautifully.', exampleAr: 'الأوركسترا عزفت بشكل جميل.' },
    { english: 'musician', arabic: 'موسيقي', example: 'He is a talented musician.', exampleAr: 'هو موسيقي موهوب.' },
    { english: 'genre', arabic: 'نوع', example: 'What genre do you like?', exampleAr: 'أي نوع تحب؟' },
    { english: 'classical', arabic: 'كلاسيكي', example: 'I enjoy classical music.', exampleAr: 'أستمتع بالموسيقى الكلاسيكية.' },
    { english: 'lyrics', arabic: 'كلمات الأغنية', example: 'The lyrics are meaningful.', exampleAr: 'كلمات الأغنية ذات معنى.' },
    { english: 'melody', arabic: 'لحن', example: 'The melody is catchy.', exampleAr: 'اللحن جذاب.' },
    { english: 'performance', arabic: 'أداء', example: 'The performance was amazing.', exampleAr: 'الأداء كان مذهلاً.' }
  ],
  sentences: [
    { english: 'The concert was sold out.', arabic: 'الحفلة الموسيقية بيعت تذاكرها بالكامل.' },
    { english: 'I love the melody of this song.', arabic: 'أحب لحن هذه الأغنية.' },
    { english: 'The orchestra gave an amazing performance.', arabic: 'الأوركسترا قدمت أداءً مذهلاً.' },
    { english: 'Classical music is relaxing.', arabic: 'الموسيقى الكلاسيكية مريحة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "orchestra"؟', data: { options: ['أوركسترا', 'حفلة', 'أغنية', 'لحن'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ are meaningful. (كلمات الأغنية)', data: { answer: 'lyrics' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "لحن"؟', data: { options: ['melody', 'harmony', 'rhythm', 'beat'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['concert', 'a', 'to', 'went', 'we'], correctOrder: [4, 3, 2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "performance"؟', data: { options: ['أداء', 'لحن', 'حفلة', 'موسيقي'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'He is a talented _____. (موسيقي)', data: { answer: 'musician' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الأداء كان مذهلاً.', data: { answer: 'The performance was amazing.' }, points: 15 }
  ]
};

export const B1_U5_L3: LessonContent = {
  lessonId: 'B1-u05-l03',
  passingScore: 70,
  vocab: [
    { english: 'theater', arabic: 'مسرح', example: 'We went to the theater.', exampleAr: 'ذهبنا إلى المسرح.' },
    { english: 'play', arabic: 'مسرحية', example: 'The play was excellent.', exampleAr: 'المسرحية كانت ممتازة.' },
    { english: 'actor', arabic: 'ممثل', example: 'He is a famous actor.', exampleAr: 'هو ممثل مشهور.' },
    { english: 'actress', arabic: 'ممثلة', example: 'She won best actress.', exampleAr: 'فازت بجائزة أفضل ممثلة.' },
    { english: 'stage', arabic: 'خشبة المسرح', example: 'The actors are on stage.', exampleAr: 'الممثلون على خشبة المسرح.' },
    { english: 'audience', arabic: 'جمهور', example: 'The audience applauded.', exampleAr: 'الجمهور صفق.' },
    { english: 'script', arabic: 'نص', example: 'Read the script.', exampleAr: 'اقرأ النص.' },
    { english: 'director', arabic: 'مخرج', example: 'The director is talented.', exampleAr: 'المخرج موهوب.' }
  ],
  sentences: [
    { english: 'The play received great reviews.', arabic: 'المسرحية حصلت على تقييمات رائعة.' },
    { english: 'The actors performed on stage.', arabic: 'الممثلون أدوا على خشبة المسرح.' },
    { english: 'The audience gave a standing ovation.', arabic: 'الجمهور وقف تصفيقاً.' },
    { english: 'The director won an award.', arabic: 'المخرج فاز بجائزة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "stage"؟', data: { options: ['خشبة المسرح', 'جمهور', 'نص', 'مسرحية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ applauded. (جمهور)', data: { answer: 'audience' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'actor', arabic: 'ممثل' }, { english: 'director', arabic: 'مخرج' }, { english: 'script', arabic: 'نص' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "مسرحية"؟', data: { options: ['play', 'movie', 'show', 'concert'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "theater"؟', data: { options: ['مسرح', 'سينما', 'متحف', 'صالة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Read the _____. (نص)', data: { answer: 'script' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: المسرحية كانت ممتازة.', data: { answer: 'The play was excellent.' }, points: 15 }
  ]
};

export const B1_U5_L4: LessonContent = {
  lessonId: 'B1-u05-l04',
  passingScore: 70,
  vocab: [
    { english: 'literature', arabic: 'أدب', example: 'I study literature.', exampleAr: 'أدرس الأدب.' },
    { english: 'novel', arabic: 'رواية', example: 'I read a novel.', exampleAr: 'قرأت رواية.' },
    { english: 'poetry', arabic: 'شعر', example: 'I love poetry.', exampleAr: 'أحب الشعر.' },
    { english: 'author', arabic: 'مؤلف', example: 'Who is the author?', exampleAr: 'من هو المؤلف؟' },
    { english: 'character', arabic: 'شخصية', example: 'The main character is interesting.', exampleAr: 'الشخصية الرئيسية مثيرة للاهتمام.' },
    { english: 'plot', arabic: 'حبكة', example: 'The plot is complex.', exampleAr: 'الحبكة معقدة.' },
    { english: 'chapter', arabic: 'فصل', example: 'Read chapter one.', exampleAr: 'اقرأ الفصل الأول.' },
    { english: 'bestseller', arabic: 'الأكثر مبيعاً', example: 'This book is a bestseller.', exampleAr: 'هذا الكتاب الأكثر مبيعاً.' }
  ],
  sentences: [
    { english: 'The novel has an interesting plot.', arabic: 'الرواية لها حبكة مثيرة للاهتمام.' },
    { english: 'The author wrote many bestsellers.', arabic: 'المؤلف كتب العديد من الكتب الأكثر مبيعاً.' },
    { english: 'I finished reading the first chapter.', arabic: 'أنهيت قراءة الفصل الأول.' },
    { english: 'The main character is brave.', arabic: 'الشخصية الرئيسية شجاعة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "novel"؟', data: { options: ['رواية', 'شعر', 'قصة', 'مقال'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Who is the _____? (مؤلف)', data: { answer: 'author' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "حبكة"؟', data: { options: ['plot', 'plan', 'place', 'play'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['chapter', 'read', 'one'], correctOrder: [1, 0, 2] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "character"؟', data: { options: ['شخصية', 'فصل', 'حبكة', 'رواية'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'This book is a _____. (الأكثر مبيعاً)', data: { answer: 'bestseller' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أحب الشعر.', data: { answer: 'I love poetry.' }, points: 15 }
  ]
};

export const B1_U5_L5: LessonContent = {
  lessonId: 'B1-u05-l05',
  passingScore: 70,
  vocab: [
    { english: 'tradition', arabic: 'تقليد', example: 'This is an old tradition.', exampleAr: 'هذا تقليد قديم.' },
    { english: 'heritage', arabic: 'تراث', example: 'Preserve our heritage.', exampleAr: 'حافظ على تراثنا.' },
    { english: 'custom', arabic: 'عادة', example: 'It\'s a local custom.', exampleAr: 'هذه عادة محلية.' },
    { english: 'festival', arabic: 'مهرجان', example: 'The festival is fun.', exampleAr: 'المهرجان ممتع.' },
    { english: 'celebration', arabic: 'احتفال', example: 'Join the celebration.', exampleAr: 'انضم للاحتفال.' },
    { english: 'ceremony', arabic: 'حفل', example: 'The ceremony was formal.', exampleAr: 'الحفل كان رسمياً.' },
    { english: 'identity', arabic: 'هوية', example: 'Culture shapes identity.', exampleAr: 'الثقافة تشكل الهوية.' },
    { english: 'diverse', arabic: 'متنوع', example: 'Our culture is diverse.', exampleAr: 'ثقافتنا متنوعة.' }
  ],
  sentences: [
    { english: 'We should preserve our cultural heritage.', arabic: 'يجب أن نحافظ على تراثنا الثقافي.' },
    { english: 'The festival celebrates our traditions.', arabic: 'المهرجان يحتفل بتقاليدنا.' },
    { english: 'Cultural diversity makes our society rich.', arabic: 'التنوع الثقافي يجعل مجتمعنا غنياً.' },
    { english: 'The ceremony honored our customs.', arabic: 'الحفل كرّم عاداتنا.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "heritage"؟', data: { options: ['تراث', 'تقليد', 'عادة', 'هوية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ is fun. (مهرجان)', data: { answer: 'festival' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'tradition', arabic: 'تقليد' }, { english: 'custom', arabic: 'عادة' }, { english: 'ceremony', arabic: 'حفل' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "متنوع"؟', data: { options: ['diverse', 'divide', 'direct', 'different'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "identity"؟', data: { options: ['هوية', 'تقليد', 'تراث', 'عادة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Join the _____. (احتفال)', data: { answer: 'celebration' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذا تقليد قديم.', data: { answer: 'This is an old tradition.' }, points: 15 }
  ]
};

export const b1Unit5Lessons: Record<string, LessonContent> = {
  'B1-u05-l01': B1_U5_L1,
  'B1-u05-l02': B1_U5_L2,
  'B1-u05-l03': B1_U5_L3,
  'B1-u05-l04': B1_U5_L4,
  'B1-u05-l05': B1_U5_L5,
};

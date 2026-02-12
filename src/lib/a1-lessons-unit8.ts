// A1 Unit 8: Hobbies - الهوايات
import { LessonContent } from './a1-lessons';

export const A1_U8_L1: LessonContent = {
  lessonId: 'A1-u08-l01',
  passingScore: 70,
  vocab: [
    { english: 'Football', arabic: 'كرة القدم', example: 'I play football every week.', exampleAr: 'ألعب كرة القدم كل أسبوع.' },
    { english: 'Basketball', arabic: 'كرة السلة', example: 'He plays basketball.', exampleAr: 'يلعب كرة السلة.' },
    { english: 'Swimming', arabic: 'سباحة', example: 'Swimming is my favorite sport.', exampleAr: 'السباحة رياضتي المفضلة.' },
    { english: 'Running', arabic: 'جري', example: 'I like running in the park.', exampleAr: 'أحب الجري في الحديقة.' },
    { english: 'Tennis', arabic: 'تنس', example: 'She plays tennis.', exampleAr: 'تلعب التنس.' },
    { english: 'Gym', arabic: 'صالة رياضية', example: 'I go to the gym.', exampleAr: 'أذهب إلى الصالة الرياضية.' },
    { english: 'Exercise', arabic: 'تمرين', example: 'Exercise is good for health.', exampleAr: 'التمرين مفيد للصحة.' },
    { english: 'Team', arabic: 'فريق', example: 'Our team won.', exampleAr: 'فريقنا فاز.' },
    { english: 'Match', arabic: 'مباراة', example: 'The match is tomorrow.', exampleAr: 'المباراة غداً.' },
    { english: 'Win', arabic: 'يفوز', example: 'We want to win.', exampleAr: 'نريد أن نفوز.' },
  ],
  sentences: [
    { english: 'I play football every week.', arabic: 'ألعب كرة القدم كل أسبوع.' },
    { english: 'Swimming is my favorite sport.', arabic: 'السباحة رياضتي المفضلة.' },
    { english: 'I go to the gym in the morning.', arabic: 'أذهب إلى الصالة الرياضية في الصباح.' },
    { english: 'Our team won the match.', arabic: 'فريقنا فاز بالمباراة.' },
    { english: 'I like running in the park.', arabic: 'أحب الجري في الحديقة.' },
    { english: 'Exercise is good for health.', arabic: 'التمرين مفيد للصحة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "football"؟', data: { options: ['كرة السلة', 'كرة القدم', 'تنس', 'سباحة'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "سباحة" بالإنجليزية؟', data: { options: ['running', 'swimming', 'football', 'tennis'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I play ___ every week. (كرة القدم)', data: { answer: 'football' } },
    { type: 'matching', promptAr: 'طابق الرياضات', data: { pairs: [{ english: 'basketball', arabic: 'كرة السلة' }, { english: 'running', arabic: 'جري' }, { english: 'tennis', arabic: 'تنس' }, { english: 'gym', arabic: 'صالة رياضية' }] } },
    { type: 'reorder', promptAr: 'رتب: sport / favorite / is / Swimming / my', data: { words: ['Swimming', 'is', 'my', 'favorite', 'sport'], correctOrder: [0, 1, 2, 3, 4] } },
    { type: 'mcq', promptAr: 'أين تمارس الرياضة داخلياً؟', data: { options: ['park', 'street', 'gym', 'school'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: Our ___ won the match. (فريق)', data: { answer: 'team' } },
    { type: 'translation', promptAr: 'ترجم: التمرين مفيد للصحة', data: { answer: 'Exercise is good for health', alternatives: ['exercise is good for health'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "basketball"؟', data: { options: ['كرة القدم', 'كرة السلة', 'تنس', 'جري'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "تمرين" بالإنجليزية؟', data: { options: ['match', 'team', 'exercise', 'win'], correct: 2 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I go to the ___ in the morning. (صالة رياضية)', data: { answer: 'gym' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'team', arabic: 'فريق' }, { english: 'match', arabic: 'مباراة' }, { english: 'win', arabic: 'يفوز' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: ألعب كرة القدم كل أسبوع', data: { answer: 'I play football every week', alternatives: ['i play football every week'] }, points: 25 },
  ]
};

export const A1_U8_L2: LessonContent = {
  lessonId: 'A1-u08-l02',
  passingScore: 70,
  vocab: [
    { english: 'Music', arabic: 'موسيقى', example: 'I love listening to music.', exampleAr: 'أحب الاستماع للموسيقى.' },
    { english: 'Song', arabic: 'أغنية', example: 'This is a beautiful song.', exampleAr: 'هذه أغنية جميلة.' },
    { english: 'Sing', arabic: 'يغني', example: 'She sings well.', exampleAr: 'تغني جيداً.' },
    { english: 'Dance', arabic: 'يرقص', example: 'I like to dance.', exampleAr: 'أحب الرقص.' },
    { english: 'Play guitar', arabic: 'يعزف الجيتار', example: 'He plays guitar.', exampleAr: 'يعزف الجيتار.' },
    { english: 'Piano', arabic: 'بيانو', example: 'I play the piano.', exampleAr: 'أعزف البيانو.' },
    { english: 'Draw', arabic: 'يرسم', example: 'I like to draw.', exampleAr: 'أحب أن أرسم.' },
    { english: 'Paint', arabic: 'يلون', example: 'She paints pictures.', exampleAr: 'تلون الصور.' },
    { english: 'Art', arabic: 'فن', example: 'Art is my hobby.', exampleAr: 'الفن هوايتي.' },
    { english: 'Concert', arabic: 'حفلة موسيقية', example: 'I went to a concert.', exampleAr: 'ذهبت لحفلة موسيقية.' },
  ],
  sentences: [
    { english: 'I love listening to music.', arabic: 'أحب الاستماع للموسيقى.' },
    { english: 'She sings beautiful songs.', arabic: 'تغني أغاني جميلة.' },
    { english: 'I play the piano.', arabic: 'أعزف البيانو.' },
    { english: 'He likes to draw and paint.', arabic: 'يحب أن يرسم ويلون.' },
    { english: 'We went to a concert last night.', arabic: 'ذهبنا لحفلة موسيقية الليلة الماضية.' },
    { english: 'Art is my favorite hobby.', arabic: 'الفن هوايتي المفضلة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "music"؟', data: { options: ['أغنية', 'موسيقى', 'فن', 'رقص'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "يغني" بالإنجليزية؟', data: { options: ['dance', 'play', 'sing', 'draw'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: I love listening to ___. (موسيقى)', data: { answer: 'music' } },
    { type: 'matching', promptAr: 'طابق كلمات الموسيقى', data: { pairs: [{ english: 'song', arabic: 'أغنية' }, { english: 'dance', arabic: 'يرقص' }, { english: 'piano', arabic: 'بيانو' }, { english: 'concert', arabic: 'حفلة موسيقية' }] } },
    { type: 'reorder', promptAr: 'رتب: the / I / piano / play', data: { words: ['I', 'play', 'the', 'piano'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ماذا تفعل بالفرشاة والألوان؟', data: { options: ['sing', 'dance', 'paint', 'play'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: She ___ beautiful songs. (تغني)', data: { answer: 'sings' } },
    { type: 'translation', promptAr: 'ترجم: الفن هوايتي المفضلة', data: { answer: 'Art is my favorite hobby', alternatives: ['art is my favorite hobby'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "song"؟', data: { options: ['موسيقى', 'أغنية', 'رقص', 'فن'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "يرسم" بالإنجليزية؟', data: { options: ['paint', 'draw', 'sing', 'dance'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: ___ is my favorite hobby. (الفن)', data: { answer: 'Art' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'draw', arabic: 'يرسم' }, { english: 'paint', arabic: 'يلون' }, { english: 'play guitar', arabic: 'يعزف الجيتار' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أعزف البيانو', data: { answer: 'I play the piano', alternatives: ['i play the piano'] }, points: 25 },
  ]
};

export const A1_U8_L3: LessonContent = {
  lessonId: 'A1-u08-l03',
  passingScore: 70,
  vocab: [
    { english: 'Read', arabic: 'يقرأ', example: 'I read books every day.', exampleAr: 'أقرأ الكتب كل يوم.' },
    { english: 'Write', arabic: 'يكتب', example: 'She writes stories.', exampleAr: 'تكتب قصصاً.' },
    { english: 'Book', arabic: 'كتاب', example: 'This is a good book.', exampleAr: 'هذا كتاب جيد.' },
    { english: 'Novel', arabic: 'رواية', example: 'I love reading novels.', exampleAr: 'أحب قراءة الروايات.' },
    { english: 'Story', arabic: 'قصة', example: 'Tell me a story.', exampleAr: 'أخبرني قصة.' },
    { english: 'Poem', arabic: 'قصيدة', example: 'She wrote a poem.', exampleAr: 'كتبت قصيدة.' },
    { english: 'Magazine', arabic: 'مجلة', example: 'I read a magazine.', exampleAr: 'أقرأ مجلة.' },
    { english: 'Newspaper', arabic: 'جريدة', example: 'He reads the newspaper.', exampleAr: 'يقرأ الجريدة.' },
    { english: 'Author', arabic: 'مؤلف', example: 'He is a famous author.', exampleAr: 'هو مؤلف مشهور.' },
    { english: 'Library', arabic: 'مكتبة', example: 'I go to the library.', exampleAr: 'أذهب إلى المكتبة.' },
  ],
  sentences: [
    { english: 'I read books every day.', arabic: 'أقرأ الكتب كل يوم.' },
    { english: 'She writes stories for children.', arabic: 'تكتب قصصاً للأطفال.' },
    { english: 'I love reading novels.', arabic: 'أحب قراءة الروايات.' },
    { english: 'The library has many books.', arabic: 'المكتبة فيها كتب كثيرة.' },
    { english: 'He is a famous author.', arabic: 'هو مؤلف مشهور.' },
    { english: 'I read the newspaper every morning.', arabic: 'أقرأ الجريدة كل صباح.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "read"؟', data: { options: ['يكتب', 'يقرأ', 'يرسم', 'يشاهد'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "كتاب" بالإنجليزية؟', data: { options: ['magazine', 'newspaper', 'book', 'story'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ books every day. (أقرأ)', data: { answer: 'read' } },
    { type: 'matching', promptAr: 'طابق كلمات القراءة', data: { pairs: [{ english: 'novel', arabic: 'رواية' }, { english: 'story', arabic: 'قصة' }, { english: 'poem', arabic: 'قصيدة' }, { english: 'author', arabic: 'مؤلف' }] } },
    { type: 'reorder', promptAr: 'رتب: novels / I / reading / love', data: { words: ['I', 'love', 'reading', 'novels'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'من أين تستعير الكتب؟', data: { options: ['school', 'library', 'gym', 'park'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ has many books. (مكتبة)', data: { answer: 'library' } },
    { type: 'translation', promptAr: 'ترجم: تكتب قصصاً للأطفال', data: { answer: 'She writes stories for children', alternatives: ['she writes stories for children'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "write"؟', data: { options: ['يقرأ', 'يكتب', 'يرسم', 'يلعب'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "قصة" بالإنجليزية؟', data: { options: ['poem', 'novel', 'story', 'book'], correct: 2 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: She ___ stories for children. (تكتب)', data: { answer: 'writes' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'magazine', arabic: 'مجلة' }, { english: 'newspaper', arabic: 'جريدة' }, { english: 'library', arabic: 'مكتبة' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أقرأ الجريدة كل صباح', data: { answer: 'I read the newspaper every morning', alternatives: ['i read the newspaper every morning'] }, points: 25 },
  ]
};

export const A1_U8_L4: LessonContent = {
  lessonId: 'A1-u08-l04',
  passingScore: 70,
  vocab: [
    { english: 'Video games', arabic: 'ألعاب الفيديو', example: 'I play video games.', exampleAr: 'ألعب ألعاب الفيديو.' },
    { english: 'Computer', arabic: 'حاسوب', example: 'I use my computer.', exampleAr: 'أستخدم حاسوبي.' },
    { english: 'Phone', arabic: 'هاتف', example: 'I check my phone.', exampleAr: 'أتفقد هاتفي.' },
    { english: 'Internet', arabic: 'إنترنت', example: 'I need internet.', exampleAr: 'أحتاج إنترنت.' },
    { english: 'App', arabic: 'تطبيق', example: 'I downloaded an app.', exampleAr: 'حمّلت تطبيقاً.' },
    { english: 'Social media', arabic: 'وسائل التواصل', example: 'I check social media.', exampleAr: 'أتفقد وسائل التواصل.' },
    { english: 'Watch videos', arabic: 'يشاهد فيديوهات', example: 'I watch videos online.', exampleAr: 'أشاهد فيديوهات أونلاين.' },
    { english: 'Play online', arabic: 'يلعب أونلاين', example: 'I play games online.', exampleAr: 'ألعب ألعاب أونلاين.' },
    { english: 'Download', arabic: 'يحمّل', example: 'I download music.', exampleAr: 'أحمّل موسيقى.' },
    { english: 'Screen', arabic: 'شاشة', example: 'The screen is big.', exampleAr: 'الشاشة كبيرة.' },
  ],
  sentences: [
    { english: 'I play video games on weekends.', arabic: 'ألعب ألعاب الفيديو في نهاية الأسبوع.' },
    { english: 'I use my computer for work.', arabic: 'أستخدم حاسوبي للعمل.' },
    { english: 'I watch videos on my phone.', arabic: 'أشاهد فيديوهات على هاتفي.' },
    { english: 'I downloaded a new app.', arabic: 'حمّلت تطبيقاً جديداً.' },
    { english: 'I check social media every day.', arabic: 'أتفقد وسائل التواصل كل يوم.' },
    { english: 'I need internet to play online.', arabic: 'أحتاج إنترنت لألعب أونلاين.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "video games"؟', data: { options: ['حاسوب', 'هاتف', 'ألعاب الفيديو', 'تطبيق'], correct: 2 } },
    { type: 'mcq', promptAr: 'كيف تقول "حاسوب" بالإنجليزية؟', data: { options: ['phone', 'computer', 'screen', 'app'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I play video ___ on weekends. (ألعاب)', data: { answer: 'games' } },
    { type: 'matching', promptAr: 'طابق كلمات التكنولوجيا', data: { pairs: [{ english: 'phone', arabic: 'هاتف' }, { english: 'internet', arabic: 'إنترنت' }, { english: 'app', arabic: 'تطبيق' }, { english: 'screen', arabic: 'شاشة' }] } },
    { type: 'reorder', promptAr: 'رتب: phone / my / on / videos / watch / I', data: { words: ['I', 'watch', 'videos', 'on', 'my', 'phone'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'ماذا تحتاج لتلعب أونلاين؟', data: { options: ['book', 'internet', 'pen', 'food'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ a new app. (حمّلت)', data: { answer: 'downloaded' } },
    { type: 'translation', promptAr: 'ترجم: أتفقد وسائل التواصل كل يوم', data: { answer: 'I check social media every day', alternatives: ['i check social media every day'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "computer"؟', data: { options: ['هاتف', 'تلفاز', 'حاسوب', 'شاشة'], correct: 2 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "يحمّل" بالإنجليزية؟', data: { options: ['upload', 'download', 'watch', 'play'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I use my ___ for work. (حاسوب)', data: { answer: 'computer' }, points: 20 },
    { type: 'matching', promptAr: 'طابق العبارات', data: { pairs: [{ english: 'watch videos', arabic: 'يشاهد فيديوهات' }, { english: 'play online', arabic: 'يلعب أونلاين' }, { english: 'social media', arabic: 'وسائل التواصل' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: ألعب ألعاب الفيديو في نهاية الأسبوع', data: { answer: 'I play video games on weekends', alternatives: ['i play video games on weekends'] }, points: 25 },
  ]
};

export const A1_U8_L5: LessonContent = {
  lessonId: 'A1-u08-l05',
  passingScore: 70,
  vocab: [
    { english: 'Hiking', arabic: 'تسلق الجبال', example: 'I like hiking.', exampleAr: 'أحب تسلق الجبال.' },
    { english: 'Camping', arabic: 'تخييم', example: 'We go camping in summer.', exampleAr: 'نذهب للتخييم في الصيف.' },
    { english: 'Fishing', arabic: 'صيد السمك', example: 'He likes fishing.', exampleAr: 'يحب صيد السمك.' },
    { english: 'Picnic', arabic: 'نزهة', example: 'We had a picnic.', exampleAr: 'أقمنا نزهة.' },
    { english: 'Beach', arabic: 'شاطئ', example: 'I love the beach.', exampleAr: 'أحب الشاطئ.' },
    { english: 'Garden', arabic: 'حديقة', example: 'I work in the garden.', exampleAr: 'أعمل في الحديقة.' },
    { english: 'Nature', arabic: 'طبيعة', example: 'I love nature.', exampleAr: 'أحب الطبيعة.' },
    { english: 'Fresh air', arabic: 'هواء نقي', example: 'I enjoy fresh air.', exampleAr: 'أستمتع بالهواء النقي.' },
    { english: 'Sunset', arabic: 'غروب الشمس', example: 'The sunset is beautiful.', exampleAr: 'غروب الشمس جميل.' },
    { english: 'Adventure', arabic: 'مغامرة', example: 'I love adventure.', exampleAr: 'أحب المغامرة.' },
  ],
  sentences: [
    { english: 'I like hiking in the mountains.', arabic: 'أحب تسلق الجبال.' },
    { english: 'We go camping in summer.', arabic: 'نذهب للتخييم في الصيف.' },
    { english: 'I love going to the beach.', arabic: 'أحب الذهاب للشاطئ.' },
    { english: 'We had a picnic in the garden.', arabic: 'أقمنا نزهة في الحديقة.' },
    { english: 'I enjoy the fresh air.', arabic: 'أستمتع بالهواء النقي.' },
    { english: 'The sunset is beautiful.', arabic: 'غروب الشمس جميل.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "hiking"؟', data: { options: ['سباحة', 'تسلق الجبال', 'تخييم', 'صيد'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "شاطئ" بالإنجليزية؟', data: { options: ['mountain', 'garden', 'beach', 'forest'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: I like ___ in the mountains. (تسلق)', data: { answer: 'hiking' } },
    { type: 'matching', promptAr: 'طابق الأنشطة الخارجية', data: { pairs: [{ english: 'camping', arabic: 'تخييم' }, { english: 'fishing', arabic: 'صيد السمك' }, { english: 'picnic', arabic: 'نزهة' }, { english: 'nature', arabic: 'طبيعة' }] } },
    { type: 'reorder', promptAr: 'رتب: beach / I / to / love / going / the', data: { words: ['I', 'love', 'going', 'to', 'the', 'beach'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'ماذا يحدث في نهاية اليوم؟', data: { options: ['sunrise', 'sunset', 'noon', 'midnight'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I enjoy the fresh ___. (هواء)', data: { answer: 'air' } },
    { type: 'translation', promptAr: 'ترجم: غروب الشمس جميل', data: { answer: 'The sunset is beautiful', alternatives: ['the sunset is beautiful'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "camping"؟', data: { options: ['تسلق', 'تخييم', 'صيد', 'سباحة'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "طبيعة" بالإنجليزية؟', data: { options: ['adventure', 'beach', 'nature', 'garden'], correct: 2 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: We go ___ in summer. (تخييم)', data: { answer: 'camping' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'sunset', arabic: 'غروب الشمس' }, { english: 'fresh air', arabic: 'هواء نقي' }, { english: 'garden', arabic: 'حديقة' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أقمنا نزهة في الحديقة', data: { answer: 'We had a picnic in the garden', alternatives: ['we had a picnic in the garden'] }, points: 25 },
  ]
};

export const a1Unit8Lessons: Record<string, LessonContent> = {
  'A1-u08-l01': A1_U8_L1,
  'A1-u08-l02': A1_U8_L2,
  'A1-u08-l03': A1_U8_L3,
  'A1-u08-l04': A1_U8_L4,
  'A1-u08-l05': A1_U8_L5,
};

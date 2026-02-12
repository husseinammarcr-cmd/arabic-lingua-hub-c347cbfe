import { LessonContent } from './a1-lessons';

// A2 Unit 3: Weather & Seasons - الطقس والفصول
export const A2_U3_L1: LessonContent = {
  lessonId: 'A2-u03-l01',
  passingScore: 70,
  vocab: [
    { english: 'sunny', arabic: 'مشمس', example: 'It\'s sunny today.', exampleAr: 'الجو مشمس اليوم.' },
    { english: 'cloudy', arabic: 'غائم', example: 'The sky is cloudy.', exampleAr: 'السماء غائمة.' },
    { english: 'rainy', arabic: 'ممطر', example: 'It\'s rainy in winter.', exampleAr: 'الجو ممطر في الشتاء.' },
    { english: 'windy', arabic: 'عاصف', example: 'It\'s very windy outside.', exampleAr: 'الجو عاصف جداً في الخارج.' },
    { english: 'hot', arabic: 'حار', example: 'Summer is very hot.', exampleAr: 'الصيف حار جداً.' },
    { english: 'cold', arabic: 'بارد', example: 'Winter is cold.', exampleAr: 'الشتاء بارد.' },
  ],
  sentences: [
    { english: 'What\'s the weather like today?', arabic: 'كيف حال الطقس اليوم؟' },
    { english: 'It\'s sunny and warm.', arabic: 'الجو مشمس ودافئ.' },
    { english: 'Take an umbrella, it might rain.', arabic: 'خذ مظلة، قد تمطر.' },
    { english: 'I don\'t like cold weather.', arabic: 'لا أحب الطقس البارد.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "sunny"؟', data: { options: ['مشمس', 'ممطر', 'غائم', 'عاصف'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: It\'s very ___ in summer.', data: { answer: 'hot', hint: 'حار' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'cloudy', arabic: 'غائم' }, { english: 'rainy', arabic: 'ممطر' }, { english: 'windy', arabic: 'عاصف' }] } },
    { type: 'reorder', promptAr: 'رتب: weather / What\'s / the / like / today', data: { words: ['What\'s', 'the', 'weather', 'like', 'today'], correctOrder: [0, 1, 2, 3, 4] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "cold"؟', data: { options: ['حار', 'بارد', 'دافئ', 'معتدل'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: The sky is ___ today.', data: { answer: 'cloudy' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: كيف حال الطقس اليوم؟', data: { answer: 'What\'s the weather like today', alternatives: ['whats the weather like today'] }, points: 30 },
    { type: 'mcq', promptAr: 'ماذا تحتاج في يوم ممطر؟', data: { options: ['Sunglasses', 'Umbrella', 'Shorts', 'Sandals'], correct: 1 }, points: 30 },
  ],
};

export const A2_U3_L2: LessonContent = {
  lessonId: 'A2-u03-l02',
  passingScore: 70,
  vocab: [
    { english: 'spring', arabic: 'الربيع', example: 'Flowers bloom in spring.', exampleAr: 'الزهور تتفتح في الربيع.' },
    { english: 'summer', arabic: 'الصيف', example: 'We go swimming in summer.', exampleAr: 'نذهب للسباحة في الصيف.' },
    { english: 'autumn', arabic: 'الخريف', example: 'Leaves fall in autumn.', exampleAr: 'الأوراق تسقط في الخريف.' },
    { english: 'winter', arabic: 'الشتاء', example: 'It snows in winter.', exampleAr: 'تتساقط الثلوج في الشتاء.' },
    { english: 'temperature', arabic: 'درجة الحرارة', example: 'The temperature is 30 degrees.', exampleAr: 'درجة الحرارة 30 درجة.' },
    { english: 'forecast', arabic: 'توقعات الطقس', example: 'Check the weather forecast.', exampleAr: 'تحقق من توقعات الطقس.' },
  ],
  sentences: [
    { english: 'What\'s your favorite season?', arabic: 'ما هو فصلك المفضل؟' },
    { english: 'I love spring because of the flowers.', arabic: 'أحب الربيع بسبب الزهور.' },
    { english: 'The temperature will be high tomorrow.', arabic: 'ستكون درجة الحرارة مرتفعة غداً.' },
    { english: 'Summer vacation is my favorite time.', arabic: 'عطلة الصيف هي وقتي المفضل.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "autumn"؟', data: { options: ['الربيع', 'الصيف', 'الخريف', 'الشتاء'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: Flowers bloom in ___.', data: { answer: 'spring', hint: 'الربيع' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'spring', arabic: 'الربيع' }, { english: 'summer', arabic: 'الصيف' }, { english: 'winter', arabic: 'الشتاء' }] } },
    { type: 'reorder', promptAr: 'رتب: favorite / What\'s / your / season', data: { words: ['What\'s', 'your', 'favorite', 'season'], correctOrder: [0, 1, 2, 3] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "temperature"؟', data: { options: ['طقس', 'درجة الحرارة', 'فصل', 'مناخ'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: It snows in ___.', data: { answer: 'winter' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: ما هو فصلك المفضل؟', data: { answer: 'What\'s your favorite season', alternatives: ['whats your favorite season'] }, points: 30 },
    { type: 'mcq', promptAr: 'متى تسقط الأوراق؟', data: { options: ['Spring', 'Summer', 'Autumn', 'Winter'], correct: 2 }, points: 30 },
  ],
};

export const A2_U3_L3: LessonContent = {
  lessonId: 'A2-u03-l03',
  passingScore: 70,
  vocab: [
    { english: 'snow', arabic: 'ثلج', example: 'Children love playing in the snow.', exampleAr: 'الأطفال يحبون اللعب في الثلج.' },
    { english: 'rain', arabic: 'مطر', example: 'The rain is heavy today.', exampleAr: 'المطر غزير اليوم.' },
    { english: 'storm', arabic: 'عاصفة', example: 'A storm is coming tonight.', exampleAr: 'عاصفة قادمة الليلة.' },
    { english: 'fog', arabic: 'ضباب', example: 'There\'s thick fog this morning.', exampleAr: 'هناك ضباب كثيف هذا الصباح.' },
    { english: 'thunder', arabic: 'رعد', example: 'I heard thunder last night.', exampleAr: 'سمعت رعداً الليلة الماضية.' },
    { english: 'lightning', arabic: 'برق', example: 'Lightning struck the tree.', exampleAr: 'البرق ضرب الشجرة.' },
  ],
  sentences: [
    { english: 'Is it going to snow tomorrow?', arabic: 'هل ستثلج غداً؟' },
    { english: 'The storm was very strong.', arabic: 'العاصفة كانت قوية جداً.' },
    { english: 'Be careful driving in the fog.', arabic: 'كن حذراً عند القيادة في الضباب.' },
    { english: 'Thunder scares my dog.', arabic: 'الرعد يخيف كلبي.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "storm"؟', data: { options: ['مطر', 'عاصفة', 'ثلج', 'ضباب'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: Children love playing in the ___.', data: { answer: 'snow', hint: 'ثلج' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'thunder', arabic: 'رعد' }, { english: 'lightning', arabic: 'برق' }, { english: 'fog', arabic: 'ضباب' }] } },
    { type: 'reorder', promptAr: 'رتب: snow / it / to / going / Is / tomorrow', data: { words: ['Is', 'it', 'going', 'to', 'snow', 'tomorrow'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "fog"؟', data: { options: ['مطر', 'ثلج', 'ضباب', 'رعد'], correct: 2 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: ___ struck the tree.', data: { answer: 'Lightning' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: العاصفة كانت قوية جداً', data: { answer: 'The storm was very strong', alternatives: ['the storm was very strong'] }, points: 30 },
    { type: 'mcq', promptAr: 'ما الذي يأتي مع الرعد؟', data: { options: ['Snow', 'Lightning', 'Fog', 'Sun'], correct: 1 }, points: 30 },
  ],
};

export const A2_U3_L4: LessonContent = {
  lessonId: 'A2-u03-l04',
  passingScore: 70,
  vocab: [
    { english: 'warm', arabic: 'دافئ', example: 'Spring weather is warm.', exampleAr: 'طقس الربيع دافئ.' },
    { english: 'cool', arabic: 'بارد لطيف', example: 'The evening is cool and pleasant.', exampleAr: 'المساء بارد لطيف وممتع.' },
    { english: 'humid', arabic: 'رطب', example: 'The air is very humid today.', exampleAr: 'الهواء رطب جداً اليوم.' },
    { english: 'dry', arabic: 'جاف', example: 'The desert is very dry.', exampleAr: 'الصحراء جافة جداً.' },
    { english: 'freezing', arabic: 'متجمد', example: 'It\'s freezing outside!', exampleAr: 'الجو متجمد في الخارج!' },
    { english: 'mild', arabic: 'معتدل', example: 'The climate here is mild.', exampleAr: 'المناخ هنا معتدل.' },
  ],
  sentences: [
    { english: 'The weather is warm and pleasant.', arabic: 'الطقس دافئ وممتع.' },
    { english: 'It\'s too humid to go outside.', arabic: 'الجو رطب جداً للخروج.' },
    { english: 'Dress warmly, it\'s freezing!', arabic: 'ارتدِ ملابس دافئة، الجو متجمد!' },
    { english: 'I prefer mild weather.', arabic: 'أفضل الطقس المعتدل.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "humid"؟', data: { options: ['جاف', 'رطب', 'بارد', 'حار'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: The desert is very ___.', data: { answer: 'dry', hint: 'جاف' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'warm', arabic: 'دافئ' }, { english: 'freezing', arabic: 'متجمد' }, { english: 'mild', arabic: 'معتدل' }] } },
    { type: 'reorder', promptAr: 'رتب: freezing / It\'s / outside', data: { words: ['It\'s', 'freezing', 'outside'], correctOrder: [0, 1, 2] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "dry"؟', data: { options: ['رطب', 'جاف', 'دافئ', 'بارد'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: The climate here is ___.', data: { answer: 'mild' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: الطقس دافئ وممتع', data: { answer: 'The weather is warm and pleasant', alternatives: ['the weather is warm and pleasant'] }, points: 30 },
    { type: 'mcq', promptAr: 'ما عكس "humid"؟', data: { options: ['Warm', 'Dry', 'Cold', 'Hot'], correct: 1 }, points: 30 },
  ],
};

export const A2_U3_L5: LessonContent = {
  lessonId: 'A2-u03-l05',
  passingScore: 70,
  vocab: [
    { english: 'weather report', arabic: 'تقرير الطقس', example: 'Listen to the weather report.', exampleAr: 'استمع إلى تقرير الطقس.' },
    { english: 'climate', arabic: 'مناخ', example: 'The climate is changing.', exampleAr: 'المناخ يتغير.' },
    { english: 'sunshine', arabic: 'أشعة الشمس', example: 'Enjoy the sunshine!', exampleAr: 'استمتع بأشعة الشمس!' },
    { english: 'rainbow', arabic: 'قوس قزح', example: 'Look at the beautiful rainbow!', exampleAr: 'انظر إلى قوس القزح الجميل!' },
    { english: 'breeze', arabic: 'نسيم', example: 'There\'s a nice breeze today.', exampleAr: 'هناك نسيم لطيف اليوم.' },
    { english: 'to clear up', arabic: 'يصحو', example: 'The sky is clearing up.', exampleAr: 'السماء تصحو.' },
  ],
  sentences: [
    { english: 'The weather report says it will be sunny.', arabic: 'تقرير الطقس يقول سيكون الجو مشمساً.' },
    { english: 'Climate change is a serious problem.', arabic: 'تغير المناخ مشكلة خطيرة.' },
    { english: 'A rainbow appeared after the rain.', arabic: 'ظهر قوس قزح بعد المطر.' },
    { english: 'The cool breeze feels nice.', arabic: 'النسيم البارد يشعرني بالراحة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "rainbow"؟', data: { options: ['مطر', 'قوس قزح', 'شمس', 'غيوم'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: There\'s a nice ___ today.', data: { answer: 'breeze', hint: 'نسيم' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'sunshine', arabic: 'أشعة الشمس' }, { english: 'climate', arabic: 'مناخ' }, { english: 'weather report', arabic: 'تقرير الطقس' }] } },
    { type: 'reorder', promptAr: 'رتب: rainbow / A / appeared / the / after / rain', data: { words: ['A', 'rainbow', 'appeared', 'after', 'the', 'rain'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "breeze"؟', data: { options: ['عاصفة', 'نسيم', 'مطر', 'ثلج'], correct: 1 }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: The sky is ___ up.', data: { answer: 'clearing' }, points: 20 },
    { type: 'translation', promptAr: 'ترجم: تغير المناخ مشكلة خطيرة', data: { answer: 'Climate change is a serious problem', alternatives: ['climate change is a serious problem'] }, points: 30 },
    { type: 'mcq', promptAr: 'متى يظهر قوس القزح؟', data: { options: ['Before rain', 'After rain', 'During snow', 'At night'], correct: 1 }, points: 30 },
  ],
};

export const a2Unit3Lessons: Record<string, LessonContent> = {
  'A2-u03-l01': A2_U3_L1,
  'A2-u03-l02': A2_U3_L2,
  'A2-u03-l03': A2_U3_L3,
  'A2-u03-l04': A2_U3_L4,
  'A2-u03-l05': A2_U3_L5,
};

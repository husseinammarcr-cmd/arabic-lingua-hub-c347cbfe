// A1 Unit 5: الطعام والشراب (Food & Drinks)
import { LessonContent } from './a1-lessons';

export const A1_U5_L1: LessonContent = {
  lessonId: 'A1-u05-l01',
  passingScore: 70,
  vocab: [
    { english: 'Food', arabic: 'طعام', example: 'The food is delicious.', exampleAr: 'الطعام لذيذ.' },
    { english: 'Bread', arabic: 'خبز', example: 'I eat bread every day.', exampleAr: 'آكل الخبز كل يوم.' },
    { english: 'Rice', arabic: 'أرز', example: 'Rice is my favorite food.', exampleAr: 'الأرز طعامي المفضل.' },
    { english: 'Meat', arabic: 'لحم', example: 'I like meat.', exampleAr: 'أحب اللحم.' },
    { english: 'Chicken', arabic: 'دجاج', example: 'Chicken is healthy.', exampleAr: 'الدجاج صحي.' },
    { english: 'Fish', arabic: 'سمك', example: 'Fish is good for you.', exampleAr: 'السمك مفيد لك.' },
    { english: 'Egg', arabic: 'بيضة', example: 'I have eggs for breakfast.', exampleAr: 'آكل البيض في الإفطار.' },
    { english: 'Cheese', arabic: 'جبن', example: 'I like cheese.', exampleAr: 'أحب الجبن.' },
    { english: 'Vegetables', arabic: 'خضروات', example: 'Eat your vegetables.', exampleAr: 'كل خضرواتك.' },
    { english: 'Fruits', arabic: 'فواكه', example: 'Fruits are healthy.', exampleAr: 'الفواكه صحية.' },
  ],
  sentences: [
    { english: 'I like to eat rice and chicken.', arabic: 'أحب أن آكل الأرز والدجاج.' },
    { english: 'Vegetables are good for your health.', arabic: 'الخضروات مفيدة لصحتك.' },
    { english: 'I have eggs and bread for breakfast.', arabic: 'آكل البيض والخبز في الإفطار.' },
    { english: 'My mother cooks delicious food.', arabic: 'أمي تطبخ طعاماً لذيذاً.' },
    { english: 'Fish is my favorite food.', arabic: 'السمك طعامي المفضل.' },
    { english: 'Do you like meat?', arabic: 'هل تحب اللحم؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Bread"؟', data: { options: ['خبز', 'أرز', 'لحم', 'جبن'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما معنى "Vegetables"؟', data: { options: ['خضروات', 'فواكه', 'لحوم', 'حلويات'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I like to eat ___ and rice.', data: { answer: 'chicken', hint: 'دجاج' } },
    { type: 'translation', promptAr: 'ترجم: الطعام لذيذ', data: { answer: 'The food is delicious', alternatives: ['Food is delicious'] } },
    { type: 'reorder', promptAr: 'رتب: eggs / I / for / eat / breakfast', data: { words: ['I', 'eat', 'eggs', 'for', 'breakfast'], correctOrder: [0, 1, 2, 3, 4] } },
    { type: 'mcq', promptAr: 'ماذا نأكل عادة في الإفطار؟', data: { options: ['Eggs', 'Rice', 'Fish', 'Soup'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: ___ is good for you.', data: { answer: 'Fish' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Bread', arabic: 'خبز' }, { english: 'Rice', arabic: 'أرز' }, { english: 'Meat', arabic: 'لحم' }, { english: 'Fish', arabic: 'سمك' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Chicken"؟', data: { options: ['دجاج', 'سمك', 'لحم', 'بيض'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: أحب الطعام العربي', data: { answer: 'I like Arabic food', alternatives: ['I love Arabic food'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: ___ are healthy.', data: { answer: 'Fruits' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: like / you / Do / meat / ?', data: { words: ['Do', 'you', 'like', 'meat', '?'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: آكل الخبز كل يوم', data: { answer: 'I eat bread every day', alternatives: ['I eat bread daily'] }, points: 25 },
  ]
};

export const A1_U5_L2: LessonContent = {
  lessonId: 'A1-u05-l02',
  passingScore: 70,
  vocab: [
    { english: 'Water', arabic: 'ماء', example: 'I drink water.', exampleAr: 'أشرب الماء.' },
    { english: 'Juice', arabic: 'عصير', example: 'Orange juice is tasty.', exampleAr: 'عصير البرتقال لذيذ.' },
    { english: 'Milk', arabic: 'حليب', example: 'Milk is good for bones.', exampleAr: 'الحليب مفيد للعظام.' },
    { english: 'Tea', arabic: 'شاي', example: 'I drink tea every morning.', exampleAr: 'أشرب الشاي كل صباح.' },
    { english: 'Coffee', arabic: 'قهوة', example: 'I need coffee to wake up.', exampleAr: 'أحتاج القهوة للاستيقاظ.' },
    { english: 'Drink', arabic: 'شراب/يشرب', example: 'Drink more water.', exampleAr: 'اشرب المزيد من الماء.' },
    { english: 'Cup', arabic: 'فنجان', example: 'A cup of coffee, please.', exampleAr: 'فنجان قهوة من فضلك.' },
    { english: 'Glass', arabic: 'كأس', example: 'A glass of water.', exampleAr: 'كأس ماء.' },
    { english: 'Hot', arabic: 'ساخن', example: 'The tea is hot.', exampleAr: 'الشاي ساخن.' },
    { english: 'Cold', arabic: 'بارد', example: 'The water is cold.', exampleAr: 'الماء بارد.' },
  ],
  sentences: [
    { english: 'I drink water every day.', arabic: 'أشرب الماء كل يوم.' },
    { english: 'Would you like tea or coffee?', arabic: 'هل تريد شاياً أم قهوة؟' },
    { english: 'I prefer cold juice.', arabic: 'أفضل العصير البارد.' },
    { english: 'A glass of milk, please.', arabic: 'كأس حليب من فضلك.' },
    { english: 'The coffee is too hot.', arabic: 'القهوة ساخنة جداً.' },
    { english: 'Drink more water in summer.', arabic: 'اشرب المزيد من الماء في الصيف.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Water"؟', data: { options: ['ماء', 'عصير', 'حليب', 'شاي'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما عكس "Hot"؟', data: { options: ['Cold', 'Warm', 'Cool', 'Hot'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I drink ___ every morning.', data: { answer: 'tea', hint: 'شاي' } },
    { type: 'translation', promptAr: 'ترجم: فنجان قهوة', data: { answer: 'A cup of coffee', alternatives: ['Cup of coffee'] } },
    { type: 'reorder', promptAr: 'رتب: cold / The / is / water', data: { words: ['The', 'water', 'is', 'cold'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'نشرب القهوة في:', data: { options: ['Cup', 'Glass', 'Plate', 'Bowl'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: ___ is good for bones.', data: { answer: 'Milk' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Water', arabic: 'ماء' }, { english: 'Tea', arabic: 'شاي' }, { english: 'Coffee', arabic: 'قهوة' }, { english: 'Milk', arabic: 'حليب' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Juice"؟', data: { options: ['عصير', 'ماء', 'حليب', 'شاي'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: أشرب الماء', data: { answer: 'I drink water', alternatives: ['i drink water'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: The tea is very ___.', data: { answer: 'hot' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: like / you / Would / tea / ?', data: { words: ['Would', 'you', 'like', 'tea', '?'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: كأس ماء بارد', data: { answer: 'A glass of cold water', alternatives: ['Glass of cold water'] }, points: 25 },
  ]
};

export const A1_U5_L3: LessonContent = {
  lessonId: 'A1-u05-l03',
  passingScore: 70,
  vocab: [
    { english: 'Apple', arabic: 'تفاحة', example: 'I eat an apple every day.', exampleAr: 'آكل تفاحة كل يوم.' },
    { english: 'Orange', arabic: 'برتقالة', example: 'Oranges are sweet.', exampleAr: 'البرتقال حلو.' },
    { english: 'Banana', arabic: 'موزة', example: 'Bananas are yellow.', exampleAr: 'الموز أصفر.' },
    { english: 'Grapes', arabic: 'عنب', example: 'I love grapes.', exampleAr: 'أحب العنب.' },
    { english: 'Watermelon', arabic: 'بطيخ', example: 'Watermelon is refreshing.', exampleAr: 'البطيخ منعش.' },
    { english: 'Tomato', arabic: 'طماطم', example: 'Tomato is a vegetable.', exampleAr: 'الطماطم خضار.' },
    { english: 'Potato', arabic: 'بطاطا', example: 'I like fried potatoes.', exampleAr: 'أحب البطاطا المقلية.' },
    { english: 'Onion', arabic: 'بصل', example: 'Onions make you cry.', exampleAr: 'البصل يجعلك تبكي.' },
    { english: 'Carrot', arabic: 'جزر', example: 'Carrots are orange.', exampleAr: 'الجزر برتقالي.' },
    { english: 'Cucumber', arabic: 'خيار', example: 'Cucumbers are fresh.', exampleAr: 'الخيار طازج.' },
  ],
  sentences: [
    { english: 'An apple a day keeps the doctor away.', arabic: 'تفاحة يومياً تبعد الطبيب.' },
    { english: 'I like to eat fresh fruits.', arabic: 'أحب أن آكل الفواكه الطازجة.' },
    { english: 'Bananas are good for energy.', arabic: 'الموز مفيد للطاقة.' },
    { english: 'Please buy some vegetables.', arabic: 'من فضلك اشترِ بعض الخضروات.' },
    { english: 'The salad has tomatoes and cucumbers.', arabic: 'السلطة تحتوي على طماطم وخيار.' },
    { english: 'I drink orange juice in the morning.', arabic: 'أشرب عصير البرتقال في الصباح.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Apple"؟', data: { options: ['تفاحة', 'برتقالة', 'موزة', 'عنب'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما لون الموز؟', data: { options: ['Yellow', 'Red', 'Green', 'Orange'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I eat an ___ every day.', data: { answer: 'apple', hint: 'تفاحة' } },
    { type: 'translation', promptAr: 'ترجم: الفواكه صحية', data: { answer: 'Fruits are healthy', alternatives: ['Fruit is healthy'] } },
    { type: 'reorder', promptAr: 'رتب: are / Bananas / yellow', data: { words: ['Bananas', 'are', 'yellow'], correctOrder: [0, 1, 2] } },
    { type: 'mcq', promptAr: 'أي منها ليس فاكهة؟', data: { options: ['Potato', 'Apple', 'Orange', 'Banana'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: ___ are orange.', data: { answer: 'Carrots' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Apple', arabic: 'تفاحة' }, { english: 'Orange', arabic: 'برتقالة' }, { english: 'Tomato', arabic: 'طماطم' }, { english: 'Potato', arabic: 'بطاطا' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Watermelon"؟', data: { options: ['بطيخ', 'شمام', 'عنب', 'تفاح'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: أحب الفواكه', data: { answer: 'I like fruits', alternatives: ['I love fruits', 'I like fruit'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: ___ make you cry.', data: { answer: 'Onions' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: fresh / is / The / cucumber', data: { words: ['The', 'cucumber', 'is', 'fresh'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: البرتقال حلو', data: { answer: 'Oranges are sweet', alternatives: ['Orange is sweet'] }, points: 25 },
  ]
};

export const A1_U5_L4: LessonContent = {
  lessonId: 'A1-u05-l04',
  passingScore: 70,
  vocab: [
    { english: 'Breakfast', arabic: 'إفطار', example: 'Breakfast is important.', exampleAr: 'الإفطار مهم.' },
    { english: 'Lunch', arabic: 'غداء', example: 'Lunch is at 12 PM.', exampleAr: 'الغداء الساعة 12.' },
    { english: 'Dinner', arabic: 'عشاء', example: 'We eat dinner at 7 PM.', exampleAr: 'نأكل العشاء الساعة 7.' },
    { english: 'Hungry', arabic: 'جوعان', example: 'I am hungry.', exampleAr: 'أنا جوعان.' },
    { english: 'Thirsty', arabic: 'عطشان', example: 'I am thirsty.', exampleAr: 'أنا عطشان.' },
    { english: 'Full', arabic: 'شبعان', example: 'I am full, thank you.', exampleAr: 'أنا شبعان، شكراً.' },
    { english: 'Eat', arabic: 'يأكل', example: 'I eat three meals a day.', exampleAr: 'آكل ثلاث وجبات يومياً.' },
    { english: 'Cook', arabic: 'يطبخ', example: 'My mom cooks well.', exampleAr: 'أمي تطبخ جيداً.' },
    { english: 'Taste', arabic: 'يتذوق/مذاق', example: 'The food tastes good.', exampleAr: 'الطعام مذاقه جيد.' },
    { english: 'Meal', arabic: 'وجبة', example: 'This is a healthy meal.', exampleAr: 'هذه وجبة صحية.' },
  ],
  sentences: [
    { english: 'I am hungry. Let\'s eat.', arabic: 'أنا جوعان. هيا نأكل.' },
    { english: 'I have three meals a day.', arabic: 'آكل ثلاث وجبات يومياً.' },
    { english: 'What do you eat for breakfast?', arabic: 'ماذا تأكل في الإفطار؟' },
    { english: 'My mother cooks delicious food.', arabic: 'أمي تطبخ طعاماً لذيذاً.' },
    { english: 'I am full, I can\'t eat more.', arabic: 'أنا شبعان، لا أستطيع أكل المزيد.' },
    { english: 'Are you thirsty?', arabic: 'هل أنت عطشان؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Hungry"؟', data: { options: ['جوعان', 'عطشان', 'شبعان', 'تعبان'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما أول وجبة في اليوم؟', data: { options: ['Breakfast', 'Lunch', 'Dinner', 'Snack'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I am ___. I need water.', data: { answer: 'thirsty' } },
    { type: 'translation', promptAr: 'ترجم: أنا جوعان', data: { answer: 'I am hungry', alternatives: ['I\'m hungry'] } },
    { type: 'reorder', promptAr: 'رتب: delicious / The / is / food', data: { words: ['The', 'food', 'is', 'delicious'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ما عكس "Hungry"؟', data: { options: ['Full', 'Thirsty', 'Empty', 'Tired'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: My mom ___ very well.', data: { answer: 'cooks' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Breakfast', arabic: 'إفطار' }, { english: 'Lunch', arabic: 'غداء' }, { english: 'Dinner', arabic: 'عشاء' }, { english: 'Hungry', arabic: 'جوعان' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Cook"؟', data: { options: ['يطبخ', 'يأكل', 'يشرب', 'يجوع'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: أنا شبعان', data: { answer: 'I am full', alternatives: ['I\'m full'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: What do you eat for ___?', data: { answer: 'breakfast' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: hungry / I / am', data: { words: ['I', 'am', 'hungry'], correctOrder: [0, 1, 2] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: الوجبة لذيذة', data: { answer: 'The meal is delicious', alternatives: ['The food is delicious'] }, points: 25 },
  ]
};

export const A1_U5_L5: LessonContent = {
  lessonId: 'A1-u05-l05',
  passingScore: 70,
  vocab: [
    { english: 'Delicious', arabic: 'لذيذ', example: 'This food is delicious.', exampleAr: 'هذا الطعام لذيذ.' },
    { english: 'Tasty', arabic: 'شهي', example: 'The cake is tasty.', exampleAr: 'الكعكة شهية.' },
    { english: 'Sweet', arabic: 'حلو', example: 'I like sweet food.', exampleAr: 'أحب الطعام الحلو.' },
    { english: 'Salty', arabic: 'مالح', example: 'The soup is too salty.', exampleAr: 'الشوربة مالحة جداً.' },
    { english: 'Spicy', arabic: 'حار', example: 'Indian food is spicy.', exampleAr: 'الطعام الهندي حار.' },
    { english: 'Sour', arabic: 'حامض', example: 'Lemons are sour.', exampleAr: 'الليمون حامض.' },
    { english: 'Fresh', arabic: 'طازج', example: 'I like fresh vegetables.', exampleAr: 'أحب الخضروات الطازجة.' },
    { english: 'Favorite', arabic: 'مفضل', example: 'Pizza is my favorite.', exampleAr: 'البيتزا مفضلتي.' },
    { english: 'Healthy', arabic: 'صحي', example: 'Eat healthy food.', exampleAr: 'كل طعاماً صحياً.' },
    { english: 'Unhealthy', arabic: 'غير صحي', example: 'Fast food is unhealthy.', exampleAr: 'الوجبات السريعة غير صحية.' },
  ],
  sentences: [
    { english: 'This restaurant serves delicious food.', arabic: 'هذا المطعم يقدم طعاماً لذيذاً.' },
    { english: 'I don\'t like spicy food.', arabic: 'لا أحب الطعام الحار.' },
    { english: 'Fresh fruits are healthy.', arabic: 'الفواكه الطازجة صحية.' },
    { english: 'What is your favorite food?', arabic: 'ما طعامك المفضل؟' },
    { english: 'The lemon is too sour.', arabic: 'الليمون حامض جداً.' },
    { english: 'I prefer sweet desserts.', arabic: 'أفضل الحلويات الحلوة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Delicious"؟', data: { options: ['لذيذ', 'مالح', 'حار', 'حامض'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما طعم الليمون؟', data: { options: ['Sour', 'Sweet', 'Salty', 'Spicy'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: This food is very ___.', data: { answer: 'delicious', hint: 'لذيذ' } },
    { type: 'translation', promptAr: 'ترجم: أحب الطعام الحلو', data: { answer: 'I like sweet food', alternatives: ['I love sweet food'] } },
    { type: 'reorder', promptAr: 'رتب: food / What / is / your / favorite / ?', data: { words: ['What', 'is', 'your', 'favorite', 'food', '?'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'ما عكس "Healthy"؟', data: { options: ['Unhealthy', 'Healthy', 'Fresh', 'Tasty'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The soup is too ___. (مالح)', data: { answer: 'salty' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Sweet', arabic: 'حلو' }, { english: 'Salty', arabic: 'مالح' }, { english: 'Spicy', arabic: 'حار' }, { english: 'Sour', arabic: 'حامض' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Fresh"؟', data: { options: ['طازج', 'قديم', 'مجمد', 'ساخن'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: الطعام الهندي حار', data: { answer: 'Indian food is spicy', alternatives: ['Indian food is hot'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Pizza is my ___.', data: { answer: 'favorite' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: healthy / Vegetables / are', data: { words: ['Vegetables', 'are', 'healthy'], correctOrder: [0, 1, 2] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: الفواكه الطازجة مفيدة', data: { answer: 'Fresh fruits are healthy', alternatives: ['Fresh fruit is healthy'] }, points: 25 },
  ]
};

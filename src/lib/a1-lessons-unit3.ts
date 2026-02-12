// A1 Unit 3: العائلة والبيت (Family & Home)
import { LessonContent } from './a1-lessons';

export const A1_U3_L1: LessonContent = {
  lessonId: 'A1-u03-l01',
  passingScore: 70,
  vocab: [
    { english: 'Family', arabic: 'عائلة', example: 'My family is big.', exampleAr: 'عائلتي كبيرة.' },
    { english: 'Father', arabic: 'أب', example: 'My father is a teacher.', exampleAr: 'أبي معلم.' },
    { english: 'Mother', arabic: 'أم', example: 'My mother cooks well.', exampleAr: 'أمي تطبخ جيداً.' },
    { english: 'Brother', arabic: 'أخ', example: 'I have one brother.', exampleAr: 'لدي أخ واحد.' },
    { english: 'Sister', arabic: 'أخت', example: 'She is my sister.', exampleAr: 'هي أختي.' },
    { english: 'Son', arabic: 'ابن', example: 'He is their son.', exampleAr: 'هو ابنهم.' },
    { english: 'Daughter', arabic: 'ابنة', example: 'She is my daughter.', exampleAr: 'هي ابنتي.' },
    { english: 'Grandfather', arabic: 'جد', example: 'My grandfather is old.', exampleAr: 'جدي كبير في السن.' },
    { english: 'Grandmother', arabic: 'جدة', example: 'My grandmother lives with us.', exampleAr: 'جدتي تعيش معنا.' },
    { english: 'Parents', arabic: 'والدين', example: 'My parents are kind.', exampleAr: 'والداي لطيفان.' },
  ],
  sentences: [
    { english: 'I love my family.', arabic: 'أحب عائلتي.' },
    { english: 'My father works in a bank.', arabic: 'أبي يعمل في بنك.' },
    { english: 'I have two brothers and one sister.', arabic: 'لدي أخوان وأخت واحدة.' },
    { english: 'My grandmother makes delicious food.', arabic: 'جدتي تصنع طعاماً لذيذاً.' },
    { english: 'We visit our grandparents every week.', arabic: 'نزور أجدادنا كل أسبوع.' },
    { english: 'My parents love me.', arabic: 'والداي يحبانني.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Father"؟', data: { options: ['أب', 'أم', 'أخ', 'أخت'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما معنى "Sister"؟', data: { options: ['أخت', 'أخ', 'ابنة', 'أم'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: My ___ is a doctor. (أمي)', data: { answer: 'mother', hint: 'تبدأ بحرف M' } },
    { type: 'translation', promptAr: 'ترجم: أبي', data: { answer: 'My father', alternatives: ['my father', 'Father'] } },
    { type: 'reorder', promptAr: 'رتب: have / I / two / brothers', data: { words: ['I', 'have', 'two', 'brothers'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'من هو "Grandfather"؟', data: { options: ['جد', 'أب', 'عم', 'أخ'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: She is my ___. (أخت)', data: { answer: 'sister' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Father', arabic: 'أب' }, { english: 'Mother', arabic: 'أم' }, { english: 'Brother', arabic: 'أخ' }, { english: 'Sister', arabic: 'أخت' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Grandmother"؟', data: { options: ['جدة', 'أم', 'أخت', 'عمة'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: عائلتي كبيرة', data: { answer: 'My family is big', alternatives: ['my family is big'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: I love my ___.', data: { answer: 'family' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: is / He / my / brother', data: { words: ['He', 'is', 'my', 'brother'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أمي وأبي', data: { answer: 'My mother and father', alternatives: ['My mom and dad', 'my parents'] }, points: 25 },
  ]
};

export const A1_U3_L2: LessonContent = {
  lessonId: 'A1-u03-l02',
  passingScore: 70,
  vocab: [
    { english: 'Uncle', arabic: 'عم/خال', example: 'My uncle is funny.', exampleAr: 'عمي مرح.' },
    { english: 'Aunt', arabic: 'عمة/خالة', example: 'My aunt lives in Cairo.', exampleAr: 'عمتي تعيش في القاهرة.' },
    { english: 'Cousin', arabic: 'ابن عم/خال', example: 'He is my cousin.', exampleAr: 'هو ابن عمي.' },
    { english: 'Husband', arabic: 'زوج', example: 'He is her husband.', exampleAr: 'هو زوجها.' },
    { english: 'Wife', arabic: 'زوجة', example: 'She is his wife.', exampleAr: 'هي زوجته.' },
    { english: 'Baby', arabic: 'طفل رضيع', example: 'The baby is sleeping.', exampleAr: 'الطفل نائم.' },
    { english: 'Child', arabic: 'طفل', example: 'The child is playing.', exampleAr: 'الطفل يلعب.' },
    { english: 'Children', arabic: 'أطفال', example: 'The children are happy.', exampleAr: 'الأطفال سعداء.' },
    { english: 'Nephew', arabic: 'ابن الأخ/الأخت', example: 'My nephew is young.', exampleAr: 'ابن أخي صغير.' },
    { english: 'Niece', arabic: 'ابنة الأخ/الأخت', example: 'My niece is smart.', exampleAr: 'ابنة أختي ذكية.' },
  ],
  sentences: [
    { english: 'My uncle has three children.', arabic: 'عمي لديه ثلاثة أطفال.' },
    { english: 'I visit my aunt every Friday.', arabic: 'أزور عمتي كل جمعة.' },
    { english: 'My cousin is my best friend.', arabic: 'ابن عمي هو صديقي المفضل.' },
    { english: 'The baby is very cute.', arabic: 'الطفل لطيف جداً.' },
    { english: 'She is a good wife.', arabic: 'هي زوجة جيدة.' },
    { english: 'My nephew likes football.', arabic: 'ابن أخي يحب كرة القدم.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Uncle"؟', data: { options: ['عم/خال', 'أب', 'جد', 'أخ'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما معنى "Wife"؟', data: { options: ['زوجة', 'زوج', 'أخت', 'أم'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: My ___ is my mother\'s sister.', data: { answer: 'aunt', hint: 'أخت الأم' } },
    { type: 'translation', promptAr: 'ترجم: ابن عمي', data: { answer: 'My cousin', alternatives: ['my cousin'] } },
    { type: 'reorder', promptAr: 'رتب: is / She / his / wife', data: { words: ['She', 'is', 'his', 'wife'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'جمع "Child" هو:', data: { options: ['Children', 'Childs', 'Childes', 'Childies'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ is sleeping. (الطفل الرضيع)', data: { answer: 'baby' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Uncle', arabic: 'عم' }, { english: 'Aunt', arabic: 'عمة' }, { english: 'Husband', arabic: 'زوج' }, { english: 'Wife', arabic: 'زوجة' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Nephew"؟', data: { options: ['ابن الأخ/الأخت', 'ابن العم', 'أخ', 'عم'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: عمي لديه طفلان', data: { answer: 'My uncle has two children', alternatives: ['My uncle has 2 children'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: He is her ___.', data: { answer: 'husband' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: children / The / are / happy', data: { words: ['The', 'children', 'are', 'happy'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: عمتي طبيبة', data: { answer: 'My aunt is a doctor', alternatives: ['my aunt is a doctor'] }, points: 25 },
  ]
};

export const A1_U3_L3: LessonContent = {
  lessonId: 'A1-u03-l03',
  passingScore: 70,
  vocab: [
    { english: 'House', arabic: 'بيت/منزل', example: 'This is my house.', exampleAr: 'هذا بيتي.' },
    { english: 'Home', arabic: 'المنزل', example: 'I am at home.', exampleAr: 'أنا في المنزل.' },
    { english: 'Room', arabic: 'غرفة', example: 'My room is big.', exampleAr: 'غرفتي كبيرة.' },
    { english: 'Bedroom', arabic: 'غرفة نوم', example: 'I sleep in my bedroom.', exampleAr: 'أنام في غرفة نومي.' },
    { english: 'Bathroom', arabic: 'حمام', example: 'The bathroom is clean.', exampleAr: 'الحمام نظيف.' },
    { english: 'Kitchen', arabic: 'مطبخ', example: 'My mother is in the kitchen.', exampleAr: 'أمي في المطبخ.' },
    { english: 'Living room', arabic: 'غرفة المعيشة', example: 'We watch TV in the living room.', exampleAr: 'نشاهد التلفاز في غرفة المعيشة.' },
    { english: 'Garden', arabic: 'حديقة', example: 'We have a small garden.', exampleAr: 'لدينا حديقة صغيرة.' },
    { english: 'Door', arabic: 'باب', example: 'Please close the door.', exampleAr: 'من فضلك أغلق الباب.' },
    { english: 'Window', arabic: 'نافذة', example: 'Open the window, please.', exampleAr: 'افتح النافذة من فضلك.' },
  ],
  sentences: [
    { english: 'I live in a big house.', arabic: 'أعيش في بيت كبير.' },
    { english: 'My bedroom has two windows.', arabic: 'غرفة نومي بها نافذتان.' },
    { english: 'The kitchen is next to the bathroom.', arabic: 'المطبخ بجانب الحمام.' },
    { english: 'We eat in the living room.', arabic: 'نأكل في غرفة المعيشة.' },
    { english: 'The garden is very beautiful.', arabic: 'الحديقة جميلة جداً.' },
    { english: 'Please close the door.', arabic: 'من فضلك أغلق الباب.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Kitchen"؟', data: { options: ['مطبخ', 'حمام', 'غرفة نوم', 'حديقة'], correct: 0 } },
    { type: 'mcq', promptAr: 'أين تنام؟', data: { options: ['Bedroom', 'Kitchen', 'Bathroom', 'Garden'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I am at ___.', data: { answer: 'home', hint: 'المنزل' } },
    { type: 'translation', promptAr: 'ترجم: غرفة المعيشة', data: { answer: 'Living room', alternatives: ['living room', 'the living room'] } },
    { type: 'reorder', promptAr: 'رتب: is / My / big / room', data: { words: ['My', 'room', 'is', 'big'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ما معنى "Window"؟', data: { options: ['نافذة', 'باب', 'سقف', 'جدار'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ is beautiful. (الحديقة)', data: { answer: 'garden' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Kitchen', arabic: 'مطبخ' }, { english: 'Bathroom', arabic: 'حمام' }, { english: 'Door', arabic: 'باب' }, { english: 'Window', arabic: 'نافذة' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Bedroom"؟', data: { options: ['غرفة نوم', 'مطبخ', 'حمام', 'غرفة معيشة'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: بيتي كبير', data: { answer: 'My house is big', alternatives: ['My home is big'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Open the ___, please.', data: { answer: 'door' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: in / I / live / a house', data: { words: ['I', 'live', 'in', 'a', 'house'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أمي في المطبخ', data: { answer: 'My mother is in the kitchen', alternatives: ['My mom is in the kitchen'] }, points: 25 },
  ]
};

export const A1_U3_L4: LessonContent = {
  lessonId: 'A1-u03-l04',
  passingScore: 70,
  vocab: [
    { english: 'Table', arabic: 'طاولة', example: 'The book is on the table.', exampleAr: 'الكتاب على الطاولة.' },
    { english: 'Chair', arabic: 'كرسي', example: 'Please sit on the chair.', exampleAr: 'اجلس على الكرسي من فضلك.' },
    { english: 'Bed', arabic: 'سرير', example: 'I sleep on my bed.', exampleAr: 'أنام على سريري.' },
    { english: 'Sofa', arabic: 'أريكة', example: 'The sofa is comfortable.', exampleAr: 'الأريكة مريحة.' },
    { english: 'TV', arabic: 'تلفاز', example: 'I watch TV every day.', exampleAr: 'أشاهد التلفاز كل يوم.' },
    { english: 'Lamp', arabic: 'مصباح', example: 'Turn on the lamp.', exampleAr: 'أشعل المصباح.' },
    { english: 'Carpet', arabic: 'سجادة', example: 'The carpet is red.', exampleAr: 'السجادة حمراء.' },
    { english: 'Fridge', arabic: 'ثلاجة', example: 'The milk is in the fridge.', exampleAr: 'الحليب في الثلاجة.' },
    { english: 'Stove', arabic: 'موقد', example: 'Be careful, the stove is hot.', exampleAr: 'كن حذراً، الموقد ساخن.' },
    { english: 'Mirror', arabic: 'مرآة', example: 'I look in the mirror.', exampleAr: 'أنظر في المرآة.' },
  ],
  sentences: [
    { english: 'The table is in the kitchen.', arabic: 'الطاولة في المطبخ.' },
    { english: 'I sit on the sofa and watch TV.', arabic: 'أجلس على الأريكة وأشاهد التلفاز.' },
    { english: 'My bed is very comfortable.', arabic: 'سريري مريح جداً.' },
    { english: 'Please turn on the lamp.', arabic: 'من فضلك أشعل المصباح.' },
    { english: 'The food is in the fridge.', arabic: 'الطعام في الثلاجة.' },
    { english: 'There is a mirror in the bathroom.', arabic: 'هناك مرآة في الحمام.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Table"؟', data: { options: ['طاولة', 'كرسي', 'سرير', 'أريكة'], correct: 0 } },
    { type: 'mcq', promptAr: 'أين تحفظ الطعام البارد؟', data: { options: ['Fridge', 'Stove', 'Table', 'Sofa'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I sleep on the ___.', data: { answer: 'bed', hint: 'السرير' } },
    { type: 'translation', promptAr: 'ترجم: التلفاز', data: { answer: 'TV', alternatives: ['Television', 'the TV'] } },
    { type: 'reorder', promptAr: 'رتب: is / The / comfortable / sofa', data: { words: ['The', 'sofa', 'is', 'comfortable'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ما معنى "Lamp"؟', data: { options: ['مصباح', 'سجادة', 'مرآة', 'نافذة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ is red. (السجادة)', data: { answer: 'carpet' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Table', arabic: 'طاولة' }, { english: 'Chair', arabic: 'كرسي' }, { english: 'Bed', arabic: 'سرير' }, { english: 'Sofa', arabic: 'أريكة' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Mirror"؟', data: { options: ['مرآة', 'نافذة', 'باب', 'مصباح'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: الكتاب على الطاولة', data: { answer: 'The book is on the table', alternatives: ['the book is on the table'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Turn on the ___.', data: { answer: 'lamp' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: on / Sit / the / chair', data: { words: ['Sit', 'on', 'the', 'chair'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: الحليب في الثلاجة', data: { answer: 'The milk is in the fridge', alternatives: ['Milk is in the fridge'] }, points: 25 },
  ]
};

export const A1_U3_L5: LessonContent = {
  lessonId: 'A1-u03-l05',
  passingScore: 70,
  vocab: [
    { english: 'Big', arabic: 'كبير', example: 'The house is big.', exampleAr: 'البيت كبير.' },
    { english: 'Small', arabic: 'صغير', example: 'My room is small.', exampleAr: 'غرفتي صغيرة.' },
    { english: 'Clean', arabic: 'نظيف', example: 'The kitchen is clean.', exampleAr: 'المطبخ نظيف.' },
    { english: 'Dirty', arabic: 'وسخ', example: 'The floor is dirty.', exampleAr: 'الأرضية وسخة.' },
    { english: 'New', arabic: 'جديد', example: 'We have a new TV.', exampleAr: 'لدينا تلفاز جديد.' },
    { english: 'Old', arabic: 'قديم', example: 'The sofa is old.', exampleAr: 'الأريكة قديمة.' },
    { english: 'Comfortable', arabic: 'مريح', example: 'The bed is comfortable.', exampleAr: 'السرير مريح.' },
    { english: 'Beautiful', arabic: 'جميل', example: 'The garden is beautiful.', exampleAr: 'الحديقة جميلة.' },
    { english: 'Quiet', arabic: 'هادئ', example: 'The house is quiet.', exampleAr: 'البيت هادئ.' },
    { english: 'Noisy', arabic: 'صاخب', example: 'The street is noisy.', exampleAr: 'الشارع صاخب.' },
  ],
  sentences: [
    { english: 'Our house is big and beautiful.', arabic: 'بيتنا كبير وجميل.' },
    { english: 'Please keep the room clean.', arabic: 'من فضلك حافظ على نظافة الغرفة.' },
    { english: 'The new sofa is very comfortable.', arabic: 'الأريكة الجديدة مريحة جداً.' },
    { english: 'My grandmother lives in an old house.', arabic: 'جدتي تعيش في بيت قديم.' },
    { english: 'The neighborhood is quiet at night.', arabic: 'الحي هادئ في الليل.' },
    { english: 'The children are noisy.', arabic: 'الأطفال صاخبون.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "Big"؟', data: { options: ['Small', 'Old', 'New', 'Clean'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما عكس "Clean"؟', data: { options: ['Dirty', 'Big', 'Small', 'New'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The house is ___ and quiet. (جميل)', data: { answer: 'beautiful' } },
    { type: 'translation', promptAr: 'ترجم: غرفتي صغيرة', data: { answer: 'My room is small', alternatives: ['my room is small'] } },
    { type: 'reorder', promptAr: 'رتب: is / The / comfortable / bed', data: { words: ['The', 'bed', 'is', 'comfortable'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ما عكس "New"؟', data: { options: ['Old', 'Clean', 'Big', 'Small'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The street is ___. (صاخب)', data: { answer: 'noisy' } },
    { type: 'matching', promptAr: 'طابق المتضادات', data: { pairs: [{ english: 'Big', arabic: 'Small' }, { english: 'Clean', arabic: 'Dirty' }, { english: 'New', arabic: 'Old' }, { english: 'Quiet', arabic: 'Noisy' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Comfortable"؟', data: { options: ['مريح', 'جميل', 'هادئ', 'كبير'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: البيت جديد وكبير', data: { answer: 'The house is new and big', alternatives: ['The house is big and new'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Keep the room ___.', data: { answer: 'clean' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: beautiful / The / garden / is', data: { words: ['The', 'garden', 'is', 'beautiful'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: الحي هادئ', data: { answer: 'The neighborhood is quiet', alternatives: ['The area is quiet'] }, points: 25 },
  ]
};

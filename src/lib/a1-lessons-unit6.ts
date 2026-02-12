// A1 Unit 6: Places & Directions - الأماكن والاتجاهات
import { LessonContent } from './a1-lessons';

export const A1_U6_L1: LessonContent = {
  lessonId: 'A1-u06-l01',
  passingScore: 70,
  vocab: [
    { english: 'Hospital', arabic: 'مستشفى', example: 'The hospital is near here.', exampleAr: 'المستشفى قريب من هنا.' },
    { english: 'School', arabic: 'مدرسة', example: 'I go to school every day.', exampleAr: 'أذهب إلى المدرسة كل يوم.' },
    { english: 'Bank', arabic: 'بنك', example: 'The bank opens at nine.', exampleAr: 'البنك يفتح الساعة التاسعة.' },
    { english: 'Supermarket', arabic: 'سوبرماركت', example: 'I shop at the supermarket.', exampleAr: 'أتسوق في السوبرماركت.' },
    { english: 'Pharmacy', arabic: 'صيدلية', example: 'Buy medicine at the pharmacy.', exampleAr: 'اشترِ الدواء من الصيدلية.' },
    { english: 'Restaurant', arabic: 'مطعم', example: 'We eat at the restaurant.', exampleAr: 'نأكل في المطعم.' },
    { english: 'Park', arabic: 'حديقة', example: 'The park is beautiful.', exampleAr: 'الحديقة جميلة.' },
    { english: 'Library', arabic: 'مكتبة', example: 'I read at the library.', exampleAr: 'أقرأ في المكتبة.' },
    { english: 'Mosque', arabic: 'مسجد', example: 'The mosque is near.', exampleAr: 'المسجد قريب.' },
    { english: 'Police station', arabic: 'مركز شرطة', example: 'Go to the police station.', exampleAr: 'اذهب إلى مركز الشرطة.' },
  ],
  sentences: [
    { english: 'The hospital is near here.', arabic: 'المستشفى قريب من هنا.' },
    { english: 'I go to school every day.', arabic: 'أذهب إلى المدرسة كل يوم.' },
    { english: 'The bank opens at nine.', arabic: 'البنك يفتح الساعة التاسعة.' },
    { english: 'There is a pharmacy next to the supermarket.', arabic: 'هناك صيدلية بجانب السوبرماركت.' },
    { english: 'The park is beautiful.', arabic: 'الحديقة جميلة.' },
    { english: 'I read books at the library.', arabic: 'أقرأ الكتب في المكتبة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "hospital"؟', data: { options: ['مدرسة', 'مستشفى', 'صيدلية', 'مطعم'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "مكتبة" بالإنجليزية؟', data: { options: ['school', 'bank', 'library', 'park'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ is near here. (المستشفى)', data: { answer: 'hospital' } },
    { type: 'matching', promptAr: 'طابق الأماكن', data: { pairs: [{ english: 'bank', arabic: 'بنك' }, { english: 'park', arabic: 'حديقة' }, { english: 'mosque', arabic: 'مسجد' }, { english: 'restaurant', arabic: 'مطعم' }] } },
    { type: 'reorder', promptAr: 'رتب: is / The / beautiful / park', data: { words: ['The', 'park', 'is', 'beautiful'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'أين تشتري الدواء؟', data: { options: ['library', 'pharmacy', 'bank', 'park'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I read books at the ___.', data: { answer: 'library' } },
    { type: 'translation', promptAr: 'ترجم: المسجد قريب', data: { answer: 'The mosque is near', alternatives: ['the mosque is near'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "supermarket"؟', data: { options: ['صيدلية', 'سوبرماركت', 'مطعم', 'بنك'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "حديقة" بالإنجليزية؟', data: { options: ['garden', 'park', 'forest', 'farm'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ opens at nine. (البنك)', data: { answer: 'bank' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الأماكن', data: { pairs: [{ english: 'hospital', arabic: 'مستشفى' }, { english: 'school', arabic: 'مدرسة' }, { english: 'pharmacy', arabic: 'صيدلية' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أذهب إلى المدرسة كل يوم', data: { answer: 'I go to school every day', alternatives: ['i go to school every day'] }, points: 25 },
  ]
};

export const A1_U6_L2: LessonContent = {
  lessonId: 'A1-u06-l02',
  passingScore: 70,
  vocab: [
    { english: 'Right', arabic: 'يمين', example: 'Turn right here.', exampleAr: 'انعطف يميناً هنا.' },
    { english: 'Left', arabic: 'يسار', example: 'Turn left at the corner.', exampleAr: 'انعطف يساراً عند الزاوية.' },
    { english: 'Straight', arabic: 'مستقيم', example: 'Go straight ahead.', exampleAr: 'امشِ مستقيماً.' },
    { english: 'Near', arabic: 'قريب', example: 'The bank is near.', exampleAr: 'البنك قريب.' },
    { english: 'Far', arabic: 'بعيد', example: 'It is not far.', exampleAr: 'ليس بعيداً.' },
    { english: 'Next to', arabic: 'بجانب', example: 'The bank is next to the pharmacy.', exampleAr: 'البنك بجانب الصيدلية.' },
    { english: 'Behind', arabic: 'خلف', example: 'The school is behind the mosque.', exampleAr: 'المدرسة خلف المسجد.' },
    { english: 'In front of', arabic: 'أمام', example: 'The car is in front of the house.', exampleAr: 'السيارة أمام البيت.' },
    { english: 'Between', arabic: 'بين', example: 'The park is between the hospital and the library.', exampleAr: 'الحديقة بين المستشفى والمكتبة.' },
    { english: 'Corner', arabic: 'زاوية', example: 'Turn at the corner.', exampleAr: 'انعطف عند الزاوية.' },
  ],
  sentences: [
    { english: 'Turn right at the corner.', arabic: 'انعطف يميناً عند الزاوية.' },
    { english: 'Go straight ahead.', arabic: 'امشِ مستقيماً.' },
    { english: 'The bank is next to the pharmacy.', arabic: 'البنك بجانب الصيدلية.' },
    { english: 'The school is behind the mosque.', arabic: 'المدرسة خلف المسجد.' },
    { english: 'It is not far from here.', arabic: 'ليس بعيداً من هنا.' },
    { english: 'The park is between the hospital and the library.', arabic: 'الحديقة بين المستشفى والمكتبة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "right"؟', data: { options: ['يسار', 'يمين', 'مستقيم', 'خلف'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "بجانب" بالإنجليزية؟', data: { options: ['behind', 'in front of', 'next to', 'between'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: Turn ___ at the corner. (يمين)', data: { answer: 'right' } },
    { type: 'matching', promptAr: 'طابق الاتجاهات', data: { pairs: [{ english: 'left', arabic: 'يسار' }, { english: 'straight', arabic: 'مستقيم' }, { english: 'near', arabic: 'قريب' }, { english: 'far', arabic: 'بعيد' }] } },
    { type: 'reorder', promptAr: 'رتب: straight / Go / ahead', data: { words: ['Go', 'straight', 'ahead'], correctOrder: [0, 1, 2] } },
    { type: 'mcq', promptAr: 'ما عكس "near"؟', data: { options: ['left', 'right', 'far', 'straight'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: The school is ___ the mosque. (خلف)', data: { answer: 'behind' } },
    { type: 'translation', promptAr: 'ترجم: امشِ مستقيماً', data: { answer: 'Go straight ahead', alternatives: ['go straight ahead', 'Go straight'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "left"؟', data: { options: ['يمين', 'يسار', 'مستقيم', 'قريب'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "خلف" بالإنجليزية؟', data: { options: ['in front of', 'next to', 'behind', 'between'], correct: 2 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: It is not ___ from here. (بعيد)', data: { answer: 'far' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الاتجاهات', data: { pairs: [{ english: 'corner', arabic: 'زاوية' }, { english: 'between', arabic: 'بين' }, { english: 'in front of', arabic: 'أمام' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: البنك بجانب الصيدلية', data: { answer: 'The bank is next to the pharmacy', alternatives: ['the bank is next to the pharmacy'] }, points: 25 },
  ]
};

export const A1_U6_L3: LessonContent = {
  lessonId: 'A1-u06-l03',
  passingScore: 70,
  vocab: [
    { english: 'Where', arabic: 'أين', example: 'Where is the hospital?', exampleAr: 'أين المستشفى؟' },
    { english: 'How', arabic: 'كيف', example: 'How do I get there?', exampleAr: 'كيف أصل إلى هناك؟' },
    { english: 'Excuse me', arabic: 'عفواً', example: 'Excuse me, where is the bank?', exampleAr: 'عفواً، أين البنك؟' },
    { english: 'Can you help', arabic: 'هل يمكنك المساعدة', example: 'Can you help me please?', exampleAr: 'هل يمكنك مساعدتي من فضلك؟' },
    { english: 'I am looking for', arabic: 'أبحث عن', example: 'I am looking for the bank.', exampleAr: 'أبحث عن البنك.' },
    { english: 'I am lost', arabic: 'أنا تائه', example: 'I am lost. Can you help?', exampleAr: 'أنا تائه. هل يمكنك المساعدة؟' },
    { english: 'Which way', arabic: 'أي طريق', example: 'Which way to the park?', exampleAr: 'أي طريق للحديقة؟' },
    { english: 'Address', arabic: 'عنوان', example: 'What is your address?', exampleAr: 'ما عنوانك؟' },
    { english: 'Map', arabic: 'خريطة', example: 'Do you have a map?', exampleAr: 'هل لديك خريطة؟' },
    { english: 'Thank you', arabic: 'شكراً', example: 'Thank you for your help.', exampleAr: 'شكراً لمساعدتك.' },
  ],
  sentences: [
    { english: 'Excuse me, where is the hospital?', arabic: 'عفواً، أين المستشفى؟' },
    { english: 'Can you help me please?', arabic: 'هل يمكنك مساعدتي من فضلك؟' },
    { english: 'I am looking for the bank.', arabic: 'أبحث عن البنك.' },
    { english: 'I am lost. Which way to the park?', arabic: 'أنا تائه. أي طريق للحديقة؟' },
    { english: 'Do you have a map?', arabic: 'هل لديك خريطة؟' },
    { english: 'What is your address?', arabic: 'ما عنوانك؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "where"؟', data: { options: ['كيف', 'متى', 'أين', 'لماذا'], correct: 2 } },
    { type: 'mcq', promptAr: 'كيف تقول "عفواً" بالإنجليزية؟', data: { options: ['thank you', 'excuse me', 'please', 'sorry'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: ___ me, where is the hospital? (عفواً)', data: { answer: 'Excuse' } },
    { type: 'matching', promptAr: 'طابق العبارات', data: { pairs: [{ english: 'I am lost', arabic: 'أنا تائه' }, { english: 'map', arabic: 'خريطة' }, { english: 'address', arabic: 'عنوان' }, { english: 'thank you', arabic: 'شكراً' }] } },
    { type: 'reorder', promptAr: 'رتب: is / where / the / hospital', data: { words: ['Where', 'is', 'the', 'hospital'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ماذا تقول عندما تحتاج مساعدة؟', data: { options: ['I am tired', 'I am looking for', 'I am hungry', 'I am happy'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I am ___ for the bank. (أبحث)', data: { answer: 'looking' } },
    { type: 'translation', promptAr: 'ترجم: هل لديك خريطة؟', data: { answer: 'Do you have a map?', alternatives: ['do you have a map'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "how"؟', data: { options: ['أين', 'كيف', 'متى', 'ماذا'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "أبحث عن" بالإنجليزية؟', data: { options: ['I am tired', 'I am looking for', 'I am lost', 'I am going'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: Can you ___ me please? (تساعد)', data: { answer: 'help' }, points: 20 },
    { type: 'matching', promptAr: 'طابق العبارات', data: { pairs: [{ english: 'where', arabic: 'أين' }, { english: 'which way', arabic: 'أي طريق' }, { english: 'excuse me', arabic: 'عفواً' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أبحث عن البنك', data: { answer: 'I am looking for the bank', alternatives: ['i am looking for the bank'] }, points: 25 },
  ]
};

export const A1_U6_L4: LessonContent = {
  lessonId: 'A1-u06-l04',
  passingScore: 70,
  vocab: [
    { english: 'Car', arabic: 'سيارة', example: 'I go to work by car.', exampleAr: 'أذهب إلى العمل بالسيارة.' },
    { english: 'Bus', arabic: 'حافلة', example: 'The bus is coming.', exampleAr: 'الحافلة قادمة.' },
    { english: 'Taxi', arabic: 'تاكسي', example: 'I take a taxi to the airport.', exampleAr: 'آخذ تاكسي إلى المطار.' },
    { english: 'Train', arabic: 'قطار', example: 'The train is fast.', exampleAr: 'القطار سريع.' },
    { english: 'Plane', arabic: 'طائرة', example: 'I travel by plane.', exampleAr: 'أسافر بالطائرة.' },
    { english: 'Bicycle', arabic: 'دراجة', example: 'I ride a bicycle.', exampleAr: 'أركب دراجة.' },
    { english: 'Walk', arabic: 'يمشي', example: 'I like to walk in the park.', exampleAr: 'أحب أن أمشي في الحديقة.' },
    { english: 'Drive', arabic: 'يقود', example: 'He drives to school.', exampleAr: 'يقود إلى المدرسة.' },
    { english: 'Station', arabic: 'محطة', example: 'The bus station is near.', exampleAr: 'محطة الحافلات قريبة.' },
    { english: 'Airport', arabic: 'مطار', example: 'The airport is far.', exampleAr: 'المطار بعيد.' },
  ],
  sentences: [
    { english: 'I go to work by car.', arabic: 'أذهب إلى العمل بالسيارة.' },
    { english: 'The bus station is near.', arabic: 'محطة الحافلات قريبة.' },
    { english: 'I take a taxi to the airport.', arabic: 'آخذ تاكسي إلى المطار.' },
    { english: 'The train is fast.', arabic: 'القطار سريع.' },
    { english: 'I like to walk in the park.', arabic: 'أحب أن أمشي في الحديقة.' },
    { english: 'He drives to school.', arabic: 'يقود إلى المدرسة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "car"؟', data: { options: ['حافلة', 'قطار', 'سيارة', 'طائرة'], correct: 2 } },
    { type: 'mcq', promptAr: 'كيف تقول "محطة" بالإنجليزية؟', data: { options: ['airport', 'station', 'bus', 'train'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I go to work by ___. (سيارة)', data: { answer: 'car' } },
    { type: 'matching', promptAr: 'طابق وسائل النقل', data: { pairs: [{ english: 'bus', arabic: 'حافلة' }, { english: 'train', arabic: 'قطار' }, { english: 'plane', arabic: 'طائرة' }, { english: 'bicycle', arabic: 'دراجة' }] } },
    { type: 'reorder', promptAr: 'رتب: is / The / fast / train', data: { words: ['The', 'train', 'is', 'fast'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'أين تهبط الطائرات؟', data: { options: ['station', 'hospital', 'airport', 'school'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: The bus ___ is near. (محطة)', data: { answer: 'station' } },
    { type: 'translation', promptAr: 'ترجم: القطار سريع', data: { answer: 'The train is fast', alternatives: ['the train is fast'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "taxi"؟', data: { options: ['حافلة', 'تاكسي', 'قطار', 'سيارة'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "مطار" بالإنجليزية؟', data: { options: ['station', 'airport', 'hospital', 'school'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I take a ___ to the airport. (تاكسي)', data: { answer: 'taxi' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'walk', arabic: 'يمشي' }, { english: 'drive', arabic: 'يقود' }, { english: 'station', arabic: 'محطة' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أحب أن أمشي في الحديقة', data: { answer: 'I like to walk in the park', alternatives: ['i like to walk in the park'] }, points: 25 },
  ]
};

export const A1_U6_L5: LessonContent = {
  lessonId: 'A1-u06-l05',
  passingScore: 70,
  vocab: [
    { english: 'City', arabic: 'مدينة', example: 'The city is big.', exampleAr: 'المدينة كبيرة.' },
    { english: 'Street', arabic: 'شارع', example: 'I live on a quiet street.', exampleAr: 'أسكن في شارع هادئ.' },
    { english: 'Building', arabic: 'مبنى', example: 'The building is tall.', exampleAr: 'المبنى عالٍ.' },
    { english: 'Bridge', arabic: 'جسر', example: 'Cross the bridge.', exampleAr: 'اعبر الجسر.' },
    { english: 'Traffic', arabic: 'مرور', example: 'There is a lot of traffic.', exampleAr: 'هناك مرور كثير.' },
    { english: 'Traffic light', arabic: 'إشارة مرور', example: 'Wait at the traffic light.', exampleAr: 'انتظر عند إشارة المرور.' },
    { english: 'Crosswalk', arabic: 'ممر المشاة', example: 'Cross at the crosswalk.', exampleAr: 'اعبر عند ممر المشاة.' },
    { english: 'Downtown', arabic: 'وسط المدينة', example: 'I work downtown.', exampleAr: 'أعمل في وسط المدينة.' },
    { english: 'Neighborhood', arabic: 'حي', example: 'This is a nice neighborhood.', exampleAr: 'هذا حي جميل.' },
    { english: 'Square', arabic: 'ميدان', example: 'Meet me at the square.', exampleAr: 'قابلني عند الميدان.' },
  ],
  sentences: [
    { english: 'The city is big.', arabic: 'المدينة كبيرة.' },
    { english: 'I live on a quiet street.', arabic: 'أسكن في شارع هادئ.' },
    { english: 'There is a lot of traffic downtown.', arabic: 'هناك مرور كثير في وسط المدينة.' },
    { english: 'Wait at the traffic light.', arabic: 'انتظر عند إشارة المرور.' },
    { english: 'The building is tall.', arabic: 'المبنى عالٍ.' },
    { english: 'Cross at the crosswalk.', arabic: 'اعبر عند ممر المشاة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "city"؟', data: { options: ['قرية', 'مدينة', 'حي', 'شارع'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "شارع" بالإنجليزية؟', data: { options: ['building', 'bridge', 'street', 'square'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ is big. (مدينة)', data: { answer: 'city' } },
    { type: 'matching', promptAr: 'طابق كلمات المدينة', data: { pairs: [{ english: 'building', arabic: 'مبنى' }, { english: 'bridge', arabic: 'جسر' }, { english: 'traffic', arabic: 'مرور' }, { english: 'square', arabic: 'ميدان' }] } },
    { type: 'reorder', promptAr: 'رتب: is / The / tall / building', data: { words: ['The', 'building', 'is', 'tall'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'أين يجب أن تعبر الشارع بأمان؟', data: { options: ['traffic light', 'crosswalk', 'bridge', 'downtown'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: Wait at the traffic ___. (ضوء)', data: { answer: 'light' } },
    { type: 'translation', promptAr: 'ترجم: المدينة كبيرة', data: { answer: 'The city is big', alternatives: ['the city is big'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "street"؟', data: { options: ['مبنى', 'جسر', 'شارع', 'ميدان'], correct: 2 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "مرور" بالإنجليزية؟', data: { options: ['building', 'traffic', 'bridge', 'street'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: I live on a quiet ___. (شارع)', data: { answer: 'street' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'neighborhood', arabic: 'حي' }, { english: 'traffic light', arabic: 'إشارة مرور' }, { english: 'crosswalk', arabic: 'ممر المشاة' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: انتظر عند إشارة المرور', data: { answer: 'Wait at the traffic light', alternatives: ['wait at the traffic light'] }, points: 25 },
  ]
};

export const a1Unit6Lessons: Record<string, LessonContent> = {
  'A1-u06-l01': A1_U6_L1,
  'A1-u06-l02': A1_U6_L2,
  'A1-u06-l03': A1_U6_L3,
  'A1-u06-l04': A1_U6_L4,
  'A1-u06-l05': A1_U6_L5,
};

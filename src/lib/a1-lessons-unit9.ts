// A1 Unit 9: Shopping - التسوق
import { LessonContent } from './a1-lessons';

export const A1_U9_L1: LessonContent = {
  lessonId: 'A1-u09-l01',
  passingScore: 70,
  vocab: [
    { english: 'Store', arabic: 'متجر', example: 'I go to the store.', exampleAr: 'أذهب إلى المتجر.' },
    { english: 'Shop', arabic: 'محل', example: 'This is a nice shop.', exampleAr: 'هذا محل جميل.' },
    { english: 'Buy', arabic: 'يشتري', example: 'I want to buy a shirt.', exampleAr: 'أريد أن أشتري قميصاً.' },
    { english: 'Sell', arabic: 'يبيع', example: 'They sell clothes.', exampleAr: 'يبيعون ملابس.' },
    { english: 'Price', arabic: 'سعر', example: 'What is the price?', exampleAr: 'ما السعر؟' },
    { english: 'Cheap', arabic: 'رخيص', example: 'This is cheap.', exampleAr: 'هذا رخيص.' },
    { english: 'Expensive', arabic: 'غالي', example: 'This is too expensive.', exampleAr: 'هذا غالي جداً.' },
    { english: 'Discount', arabic: 'خصم', example: 'Can I get a discount?', exampleAr: 'هل يمكنني الحصول على خصم؟' },
    { english: 'Sale', arabic: 'تخفيضات', example: 'There is a big sale.', exampleAr: 'هناك تخفيضات كبيرة.' },
    { english: 'Cashier', arabic: 'أمين الصندوق', example: 'Pay at the cashier.', exampleAr: 'ادفع عند أمين الصندوق.' },
  ],
  sentences: [
    { english: 'I go to the store every week.', arabic: 'أذهب إلى المتجر كل أسبوع.' },
    { english: 'I want to buy a new shirt.', arabic: 'أريد أن أشتري قميصاً جديداً.' },
    { english: 'What is the price of this?', arabic: 'ما سعر هذا؟' },
    { english: 'This is too expensive.', arabic: 'هذا غالي جداً.' },
    { english: 'There is a big sale today.', arabic: 'هناك تخفيضات كبيرة اليوم.' },
    { english: 'Can I get a discount?', arabic: 'هل يمكنني الحصول على خصم؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "store"؟', data: { options: ['سوق', 'متجر', 'مطعم', 'بنك'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "يشتري" بالإنجليزية؟', data: { options: ['sell', 'buy', 'pay', 'take'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I want to ___ a new shirt. (أشتري)', data: { answer: 'buy' } },
    { type: 'matching', promptAr: 'طابق كلمات التسوق', data: { pairs: [{ english: 'price', arabic: 'سعر' }, { english: 'cheap', arabic: 'رخيص' }, { english: 'expensive', arabic: 'غالي' }, { english: 'discount', arabic: 'خصم' }] } },
    { type: 'reorder', promptAr: 'رتب: is / the / What / this / price / of', data: { words: ['What', 'is', 'the', 'price', 'of', 'this'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'ما عكس "cheap"؟', data: { options: ['expensive', 'new', 'big', 'small'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: This is too ___. (غالي)', data: { answer: 'expensive' } },
    { type: 'translation', promptAr: 'ترجم: هناك تخفيضات كبيرة اليوم', data: { answer: 'There is a big sale today', alternatives: ['there is a big sale today'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "buy"؟', data: { options: ['يبيع', 'يشتري', 'يدفع', 'يأخذ'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "سعر" بالإنجليزية؟', data: { options: ['sale', 'discount', 'price', 'money'], correct: 2 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: Can I get a ___? (خصم)', data: { answer: 'discount' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'sell', arabic: 'يبيع' }, { english: 'shop', arabic: 'محل' }, { english: 'cashier', arabic: 'أمين الصندوق' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أذهب إلى المتجر كل أسبوع', data: { answer: 'I go to the store every week', alternatives: ['i go to the store every week'] }, points: 25 },
  ]
};

export const A1_U9_L2: LessonContent = {
  lessonId: 'A1-u09-l02',
  passingScore: 70,
  vocab: [
    { english: 'Clothes', arabic: 'ملابس', example: 'I need new clothes.', exampleAr: 'أحتاج ملابس جديدة.' },
    { english: 'Shirt', arabic: 'قميص', example: 'This shirt is nice.', exampleAr: 'هذا القميص جميل.' },
    { english: 'Pants', arabic: 'بنطال', example: 'These pants fit well.', exampleAr: 'هذا البنطال مناسب.' },
    { english: 'Dress', arabic: 'فستان', example: 'She bought a dress.', exampleAr: 'اشترت فستاناً.' },
    { english: 'Shoes', arabic: 'حذاء', example: 'I need new shoes.', exampleAr: 'أحتاج حذاءً جديداً.' },
    { english: 'Size', arabic: 'مقاس', example: 'What size do you wear?', exampleAr: 'ما مقاسك؟' },
    { english: 'Try on', arabic: 'يجرب', example: 'Can I try this on?', exampleAr: 'هل يمكنني تجربة هذا؟' },
    { english: 'Fit', arabic: 'يناسب', example: 'This fits perfectly.', exampleAr: 'هذا يناسبني تماماً.' },
    { english: 'Color', arabic: 'لون', example: 'I like this color.', exampleAr: 'أحب هذا اللون.' },
    { english: 'Fitting room', arabic: 'غرفة القياس', example: 'Where is the fitting room?', exampleAr: 'أين غرفة القياس؟' },
  ],
  sentences: [
    { english: 'I need new clothes.', arabic: 'أحتاج ملابس جديدة.' },
    { english: 'Can I try this on?', arabic: 'هل يمكنني تجربة هذا؟' },
    { english: 'What size do you wear?', arabic: 'ما مقاسك؟' },
    { english: 'This shirt fits perfectly.', arabic: 'هذا القميص يناسبني تماماً.' },
    { english: 'Where is the fitting room?', arabic: 'أين غرفة القياس؟' },
    { english: 'I like this color.', arabic: 'أحب هذا اللون.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "clothes"؟', data: { options: ['حذاء', 'ملابس', 'قميص', 'فستان'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "مقاس" بالإنجليزية؟', data: { options: ['color', 'price', 'size', 'fit'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: I need new ___. (ملابس)', data: { answer: 'clothes' } },
    { type: 'matching', promptAr: 'طابق الملابس', data: { pairs: [{ english: 'shirt', arabic: 'قميص' }, { english: 'pants', arabic: 'بنطال' }, { english: 'dress', arabic: 'فستان' }, { english: 'shoes', arabic: 'حذاء' }] } },
    { type: 'reorder', promptAr: 'رتب: on / try / this / I / Can', data: { words: ['Can', 'I', 'try', 'this', 'on'], correctOrder: [0, 1, 2, 3, 4] } },
    { type: 'mcq', promptAr: 'أين تجرب الملابس؟', data: { options: ['cashier', 'fitting room', 'entrance', 'exit'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: This shirt ___ perfectly. (يناسب)', data: { answer: 'fits' } },
    { type: 'translation', promptAr: 'ترجم: أحب هذا اللون', data: { answer: 'I like this color', alternatives: ['i like this color'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "shoes"؟', data: { options: ['قميص', 'بنطال', 'حذاء', 'فستان'], correct: 2 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "يجرب" بالإنجليزية؟', data: { options: ['buy', 'try on', 'fit', 'wear'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: What ___ do you wear? (مقاس)', data: { answer: 'size' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'fit', arabic: 'يناسب' }, { english: 'color', arabic: 'لون' }, { english: 'fitting room', arabic: 'غرفة القياس' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أحتاج ملابس جديدة', data: { answer: 'I need new clothes', alternatives: ['i need new clothes'] }, points: 25 },
  ]
};

export const A1_U9_L3: LessonContent = {
  lessonId: 'A1-u09-l03',
  passingScore: 70,
  vocab: [
    { english: 'Pay', arabic: 'يدفع', example: 'How much do I pay?', exampleAr: 'كم أدفع؟' },
    { english: 'Money', arabic: 'مال', example: 'I have money.', exampleAr: 'لدي مال.' },
    { english: 'Cash', arabic: 'نقد', example: 'I pay in cash.', exampleAr: 'أدفع نقداً.' },
    { english: 'Credit card', arabic: 'بطاقة ائتمان', example: 'I pay by credit card.', exampleAr: 'أدفع بالبطاقة الائتمانية.' },
    { english: 'Receipt', arabic: 'إيصال', example: 'Here is your receipt.', exampleAr: 'هذا إيصالك.' },
    { english: 'Change', arabic: 'باقي', example: 'Keep the change.', exampleAr: 'احتفظ بالباقي.' },
    { english: 'Total', arabic: 'المجموع', example: 'The total is $50.', exampleAr: 'المجموع 50 دولار.' },
    { english: 'Wallet', arabic: 'محفظة', example: 'My wallet is here.', exampleAr: 'محفظتي هنا.' },
    { english: 'Bill', arabic: 'فاتورة', example: 'Here is the bill.', exampleAr: 'هذه الفاتورة.' },
    { english: 'ATM', arabic: 'صراف آلي', example: 'I need an ATM.', exampleAr: 'أحتاج صرافاً آلياً.' },
  ],
  sentences: [
    { english: 'How much do I pay?', arabic: 'كم أدفع؟' },
    { english: 'I will pay by credit card.', arabic: 'سأدفع بالبطاقة الائتمانية.' },
    { english: 'Can I pay in cash?', arabic: 'هل يمكنني الدفع نقداً؟' },
    { english: 'Here is your receipt.', arabic: 'هذا إيصالك.' },
    { english: 'The total is $50.', arabic: 'المجموع 50 دولار.' },
    { english: 'Keep the change.', arabic: 'احتفظ بالباقي.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "pay"؟', data: { options: ['يشتري', 'يبيع', 'يدفع', 'يأخذ'], correct: 2 } },
    { type: 'mcq', promptAr: 'كيف تقول "مال" بالإنجليزية؟', data: { options: ['cash', 'money', 'card', 'wallet'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: How much do I ___? (أدفع)', data: { answer: 'pay' } },
    { type: 'matching', promptAr: 'طابق كلمات المال', data: { pairs: [{ english: 'cash', arabic: 'نقد' }, { english: 'credit card', arabic: 'بطاقة ائتمان' }, { english: 'receipt', arabic: 'إيصال' }, { english: 'wallet', arabic: 'محفظة' }] } },
    { type: 'reorder', promptAr: 'رتب: card / pay / credit / will / I / by', data: { words: ['I', 'will', 'pay', 'by', 'credit', 'card'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'ماذا تحصل عليه بعد الدفع؟', data: { options: ['wallet', 'money', 'receipt', 'card'], correct: 2 } },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ is $50. (المجموع)', data: { answer: 'total' } },
    { type: 'translation', promptAr: 'ترجم: هذا إيصالك', data: { answer: 'Here is your receipt', alternatives: ['here is your receipt'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "money"؟', data: { options: ['نقد', 'مال', 'محفظة', 'بطاقة'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "نقد" بالإنجليزية؟', data: { options: ['money', 'cash', 'card', 'change'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: Can I pay in ___? (نقد)', data: { answer: 'cash' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'change', arabic: 'باقي' }, { english: 'total', arabic: 'المجموع' }, { english: 'ATM', arabic: 'صراف آلي' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: سأدفع بالبطاقة الائتمانية', data: { answer: 'I will pay by credit card', alternatives: ['i will pay by credit card'] }, points: 25 },
  ]
};

export const A1_U9_L4: LessonContent = {
  lessonId: 'A1-u09-l04',
  passingScore: 70,
  vocab: [
    { english: 'Cart', arabic: 'عربة تسوق', example: 'I need a shopping cart.', exampleAr: 'أحتاج عربة تسوق.' },
    { english: 'Basket', arabic: 'سلة', example: 'I use a basket.', exampleAr: 'أستخدم سلة.' },
    { english: 'Aisle', arabic: 'ممر', example: 'The fruits are in aisle 3.', exampleAr: 'الفواكه في الممر 3.' },
    { english: 'Shelf', arabic: 'رف', example: 'It is on the shelf.', exampleAr: 'إنه على الرف.' },
    { english: 'Checkout', arabic: 'كاشير', example: 'Where is the checkout?', exampleAr: 'أين الكاشير؟' },
    { english: 'Bag', arabic: 'كيس', example: 'I need a bag.', exampleAr: 'أحتاج كيساً.' },
    { english: 'Fresh', arabic: 'طازج', example: 'I buy fresh vegetables.', exampleAr: 'أشتري خضروات طازجة.' },
    { english: 'Frozen', arabic: 'مجمد', example: 'The frozen food is here.', exampleAr: 'الطعام المجمد هنا.' },
    { english: 'Organic', arabic: 'عضوي', example: 'I prefer organic food.', exampleAr: 'أفضل الطعام العضوي.' },
    { english: 'List', arabic: 'قائمة', example: 'I have a shopping list.', exampleAr: 'لدي قائمة تسوق.' },
  ],
  sentences: [
    { english: 'I need a shopping cart.', arabic: 'أحتاج عربة تسوق.' },
    { english: 'The fruits are in aisle 3.', arabic: 'الفواكه في الممر 3.' },
    { english: 'I always buy fresh vegetables.', arabic: 'أشتري دائماً خضروات طازجة.' },
    { english: 'Where is the checkout?', arabic: 'أين الكاشير؟' },
    { english: 'Do you have a shopping list?', arabic: 'هل لديك قائمة تسوق؟' },
    { english: 'I prefer organic food.', arabic: 'أفضل الطعام العضوي.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "cart"؟', data: { options: ['سلة', 'كيس', 'عربة تسوق', 'رف'], correct: 2 } },
    { type: 'mcq', promptAr: 'كيف تقول "طازج" بالإنجليزية؟', data: { options: ['frozen', 'fresh', 'organic', 'old'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I need a shopping ___. (عربة)', data: { answer: 'cart' } },
    { type: 'matching', promptAr: 'طابق كلمات السوبرماركت', data: { pairs: [{ english: 'basket', arabic: 'سلة' }, { english: 'aisle', arabic: 'ممر' }, { english: 'shelf', arabic: 'رف' }, { english: 'checkout', arabic: 'كاشير' }] } },
    { type: 'reorder', promptAr: 'رتب: 3 / are / The / in / fruits / aisle', data: { words: ['The', 'fruits', 'are', 'in', 'aisle', '3'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'ما عكس "fresh"؟', data: { options: ['organic', 'frozen', 'new', 'good'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I prefer ___ food. (عضوي)', data: { answer: 'organic' } },
    { type: 'translation', promptAr: 'ترجم: أشتري دائماً خضروات طازجة', data: { answer: 'I always buy fresh vegetables', alternatives: ['i always buy fresh vegetables'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "basket"؟', data: { options: ['عربة', 'سلة', 'كيس', 'رف'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "مجمد" بالإنجليزية؟', data: { options: ['fresh', 'frozen', 'organic', 'cold'], correct: 1 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: Where is the ___? (الكاشير)', data: { answer: 'checkout' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'bag', arabic: 'كيس' }, { english: 'list', arabic: 'قائمة' }, { english: 'fresh', arabic: 'طازج' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أحتاج عربة تسوق', data: { answer: 'I need a shopping cart', alternatives: ['i need a shopping cart'] }, points: 25 },
  ]
};

export const A1_U9_L5: LessonContent = {
  lessonId: 'A1-u09-l05',
  passingScore: 70,
  vocab: [
    { english: 'Online', arabic: 'عبر الإنترنت', example: 'I shop online.', exampleAr: 'أتسوق عبر الإنترنت.' },
    { english: 'Website', arabic: 'موقع إلكتروني', example: 'This is a good website.', exampleAr: 'هذا موقع جيد.' },
    { english: 'Order', arabic: 'طلب', example: 'I ordered a book.', exampleAr: 'طلبت كتاباً.' },
    { english: 'Delivery', arabic: 'توصيل', example: 'Delivery is in 3 days.', exampleAr: 'التوصيل خلال 3 أيام.' },
    { english: 'Shipping', arabic: 'شحن', example: 'Shipping is free.', exampleAr: 'الشحن مجاني.' },
    { english: 'Free shipping', arabic: 'شحن مجاني', example: 'This website has free shipping.', exampleAr: 'هذا الموقع فيه شحن مجاني.' },
    { english: 'Return', arabic: 'إرجاع', example: 'I want to return this.', exampleAr: 'أريد إرجاع هذا.' },
    { english: 'Review', arabic: 'تقييم', example: 'The reviews are good.', exampleAr: 'التقييمات جيدة.' },
    { english: 'Add to cart', arabic: 'أضف للسلة', example: 'Add to cart and pay.', exampleAr: 'أضف للسلة وادفع.' },
    { english: 'Checkout', arabic: 'إتمام الشراء', example: 'Proceed to checkout.', exampleAr: 'انتقل لإتمام الشراء.' },
  ],
  sentences: [
    { english: 'I prefer online shopping.', arabic: 'أفضل التسوق عبر الإنترنت.' },
    { english: 'I ordered a book online.', arabic: 'طلبت كتاباً عبر الإنترنت.' },
    { english: 'Delivery is in 3 days.', arabic: 'التوصيل خلال 3 أيام.' },
    { english: 'This website has free shipping.', arabic: 'هذا الموقع فيه شحن مجاني.' },
    { english: 'I want to return this item.', arabic: 'أريد إرجاع هذا المنتج.' },
    { english: 'The reviews are very good.', arabic: 'التقييمات جيدة جداً.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "online"؟', data: { options: ['موقع', 'عبر الإنترنت', 'توصيل', 'شحن'], correct: 1 } },
    { type: 'mcq', promptAr: 'كيف تقول "توصيل" بالإنجليزية؟', data: { options: ['shipping', 'delivery', 'order', 'return'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: I prefer ___ shopping. (عبر الإنترنت)', data: { answer: 'online' } },
    { type: 'matching', promptAr: 'طابق كلمات التسوق الإلكتروني', data: { pairs: [{ english: 'website', arabic: 'موقع إلكتروني' }, { english: 'order', arabic: 'طلب' }, { english: 'shipping', arabic: 'شحن' }, { english: 'review', arabic: 'تقييم' }] } },
    { type: 'reorder', promptAr: 'رتب: online / book / ordered / I / a', data: { words: ['I', 'ordered', 'a', 'book', 'online'], correctOrder: [0, 1, 2, 3, 4] } },
    { type: 'mcq', promptAr: 'ماذا تفعل إذا لم يعجبك المنتج؟', data: { options: ['order', 'return', 'review', 'ship'], correct: 1 } },
    { type: 'fill_blank', promptAr: 'أكمل: ___ is in 3 days. (التوصيل)', data: { answer: 'Delivery' } },
    { type: 'translation', promptAr: 'ترجم: التقييمات جيدة جداً', data: { answer: 'The reviews are very good', alternatives: ['the reviews are very good'] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "order"؟', data: { options: ['توصيل', 'طلب', 'شحن', 'إرجاع'], correct: 1 }, points: 15 },
    { type: 'mcq', promptAr: 'كيف تقول "إرجاع" بالإنجليزية؟', data: { options: ['order', 'delivery', 'return', 'review'], correct: 2 }, points: 15 },
    { type: 'fill_blank', promptAr: 'أكمل: This website has free ___. (شحن)', data: { answer: 'shipping' }, points: 20 },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'add to cart', arabic: 'أضف للسلة' }, { english: 'checkout', arabic: 'إتمام الشراء' }, { english: 'free shipping', arabic: 'شحن مجاني' }] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أفضل التسوق عبر الإنترنت', data: { answer: 'I prefer online shopping', alternatives: ['i prefer online shopping'] }, points: 25 },
  ]
};

export const a1Unit9Lessons: Record<string, LessonContent> = {
  'A1-u09-l01': A1_U9_L1,
  'A1-u09-l02': A1_U9_L2,
  'A1-u09-l03': A1_U9_L3,
  'A1-u09-l04': A1_U9_L4,
  'A1-u09-l05': A1_U9_L5,
};

import { LessonContent } from './a1-lessons';

// Unit 3: Technology & Internet - التكنولوجيا والإنترنت
export const B1_U3_L1: LessonContent = {
  lessonId: 'B1-u03-l01',
  passingScore: 70,
  vocab: [
    { english: 'internet', arabic: 'إنترنت', example: 'The internet is fast.', exampleAr: 'الإنترنت سريع.' },
    { english: 'website', arabic: 'موقع إلكتروني', example: 'Visit our website.', exampleAr: 'زر موقعنا الإلكتروني.' },
    { english: 'download', arabic: 'تحميل', example: 'Download the app.', exampleAr: 'حمّل التطبيق.' },
    { english: 'upload', arabic: 'رفع', example: 'Upload your photo.', exampleAr: 'ارفع صورتك.' },
    { english: 'password', arabic: 'كلمة مرور', example: 'Enter your password.', exampleAr: 'أدخل كلمة مرورك.' },
    { english: 'account', arabic: 'حساب', example: 'Create an account.', exampleAr: 'أنشئ حساباً.' },
    { english: 'browser', arabic: 'متصفح', example: 'Open your browser.', exampleAr: 'افتح متصفحك.' },
    { english: 'connection', arabic: 'اتصال', example: 'The connection is slow.', exampleAr: 'الاتصال بطيء.' }
  ],
  sentences: [
    { english: 'You need a strong password for your account.', arabic: 'تحتاج كلمة مرور قوية لحسابك.' },
    { english: 'Download the file from the website.', arabic: 'حمّل الملف من الموقع الإلكتروني.' },
    { english: 'The internet connection is slow today.', arabic: 'اتصال الإنترنت بطيء اليوم.' },
    { english: 'Upload your documents to the cloud.', arabic: 'ارفع مستنداتك إلى السحابة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "download"؟', data: { options: ['تحميل', 'رفع', 'حذف', 'إرسال'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Enter your _____. (كلمة مرور)', data: { answer: 'password' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'website', arabic: 'موقع إلكتروني' }, { english: 'account', arabic: 'حساب' }, { english: 'browser', arabic: 'متصفح' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "اتصال"؟', data: { options: ['connection', 'collection', 'correction', 'direction'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "upload"؟', data: { options: ['رفع', 'تحميل', 'حذف', 'نسخ'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Create an _____. (حساب)', data: { answer: 'account' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الإنترنت سريع.', data: { answer: 'The internet is fast.' }, points: 15 }
  ]
};

export const B1_U3_L2: LessonContent = {
  lessonId: 'B1-u03-l02',
  passingScore: 70,
  vocab: [
    { english: 'smartphone', arabic: 'هاتف ذكي', example: 'I have a new smartphone.', exampleAr: 'لدي هاتف ذكي جديد.' },
    { english: 'application', arabic: 'تطبيق', example: 'This application is useful.', exampleAr: 'هذا التطبيق مفيد.' },
    { english: 'update', arabic: 'تحديث', example: 'Update your phone.', exampleAr: 'حدّث هاتفك.' },
    { english: 'notification', arabic: 'إشعار', example: 'I got a notification.', exampleAr: 'وصلني إشعار.' },
    { english: 'settings', arabic: 'إعدادات', example: 'Check your settings.', exampleAr: 'راجع إعداداتك.' },
    { english: 'storage', arabic: 'تخزين', example: 'My storage is full.', exampleAr: 'مساحة التخزين ممتلئة.' },
    { english: 'battery', arabic: 'بطارية', example: 'The battery is low.', exampleAr: 'البطارية منخفضة.' },
    { english: 'charger', arabic: 'شاحن', example: 'Where is the charger?', exampleAr: 'أين الشاحن؟' }
  ],
  sentences: [
    { english: 'My smartphone battery is low.', arabic: 'بطارية هاتفي الذكي منخفضة.' },
    { english: 'I need to update my applications.', arabic: 'أحتاج تحديث تطبيقاتي.' },
    { english: 'Check your notification settings.', arabic: 'راجع إعدادات الإشعارات.' },
    { english: 'My phone storage is almost full.', arabic: 'مساحة تخزين هاتفي شبه ممتلئة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "notification"؟', data: { options: ['إشعار', 'تطبيق', 'إعدادات', 'تخزين'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The _____ is low. (بطارية)', data: { answer: 'battery' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "إعدادات"؟', data: { options: ['settings', 'storage', 'update', 'notification'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['phone', 'your', 'update'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "storage"؟', data: { options: ['تخزين', 'شاحن', 'بطارية', 'إشعار'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Where is the _____? (شاحن)', data: { answer: 'charger' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هذا التطبيق مفيد.', data: { answer: 'This application is useful.' }, points: 15 }
  ]
};

export const B1_U3_L3: LessonContent = {
  lessonId: 'B1-u03-l03',
  passingScore: 70,
  vocab: [
    { english: 'software', arabic: 'برنامج', example: 'Install the software.', exampleAr: 'ثبّت البرنامج.' },
    { english: 'hardware', arabic: 'عتاد', example: 'The hardware is new.', exampleAr: 'العتاد جديد.' },
    { english: 'computer', arabic: 'حاسوب', example: 'My computer is fast.', exampleAr: 'حاسوبي سريع.' },
    { english: 'keyboard', arabic: 'لوحة مفاتيح', example: 'Use the keyboard.', exampleAr: 'استخدم لوحة المفاتيح.' },
    { english: 'mouse', arabic: 'فأرة', example: 'Click the mouse.', exampleAr: 'انقر بالفأرة.' },
    { english: 'screen', arabic: 'شاشة', example: 'The screen is big.', exampleAr: 'الشاشة كبيرة.' },
    { english: 'file', arabic: 'ملف', example: 'Save the file.', exampleAr: 'احفظ الملف.' },
    { english: 'folder', arabic: 'مجلد', example: 'Create a new folder.', exampleAr: 'أنشئ مجلداً جديداً.' }
  ],
  sentences: [
    { english: 'Install the software on your computer.', arabic: 'ثبّت البرنامج على حاسوبك.' },
    { english: 'Save the file in the correct folder.', arabic: 'احفظ الملف في المجلد الصحيح.' },
    { english: 'The keyboard and mouse are not working.', arabic: 'لوحة المفاتيح والفأرة لا تعملان.' },
    { english: 'My computer screen is very large.', arabic: 'شاشة حاسوبي كبيرة جداً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "software"؟', data: { options: ['برنامج', 'عتاد', 'شاشة', 'ملف'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Save the _____. (ملف)', data: { answer: 'file' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'keyboard', arabic: 'لوحة مفاتيح' }, { english: 'mouse', arabic: 'فأرة' }, { english: 'screen', arabic: 'شاشة' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "مجلد"؟', data: { options: ['folder', 'file', 'folder', 'software'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "hardware"؟', data: { options: ['عتاد', 'برنامج', 'ملف', 'مجلد'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Create a new _____. (مجلد)', data: { answer: 'folder' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: حاسوبي سريع.', data: { answer: 'My computer is fast.' }, points: 15 }
  ]
};

export const B1_U3_L4: LessonContent = {
  lessonId: 'B1-u03-l04',
  passingScore: 70,
  vocab: [
    { english: 'cybersecurity', arabic: 'أمن إلكتروني', example: 'Cybersecurity is important.', exampleAr: 'الأمن الإلكتروني مهم.' },
    { english: 'virus', arabic: 'فيروس', example: 'The virus infected my computer.', exampleAr: 'الفيروس أصاب حاسوبي.' },
    { english: 'hacker', arabic: 'مخترق', example: 'A hacker stole data.', exampleAr: 'مخترق سرق البيانات.' },
    { english: 'protect', arabic: 'يحمي', example: 'Protect your data.', exampleAr: 'احمِ بياناتك.' },
    { english: 'privacy', arabic: 'خصوصية', example: 'Privacy is important.', exampleAr: 'الخصوصية مهمة.' },
    { english: 'encrypt', arabic: 'يشفر', example: 'Encrypt your files.', exampleAr: 'شفّر ملفاتك.' },
    { english: 'backup', arabic: 'نسخ احتياطي', example: 'Always backup your data.', exampleAr: 'دائماً انسخ بياناتك احتياطياً.' },
    { english: 'firewall', arabic: 'جدار ناري', example: 'Enable the firewall.', exampleAr: 'فعّل الجدار الناري.' }
  ],
  sentences: [
    { english: 'Cybersecurity protects your personal data.', arabic: 'الأمن الإلكتروني يحمي بياناتك الشخصية.' },
    { english: 'A virus can damage your computer.', arabic: 'الفيروس يمكن أن يتلف حاسوبك.' },
    { english: 'Always backup your important files.', arabic: 'دائماً انسخ ملفاتك المهمة احتياطياً.' },
    { english: 'Encrypt sensitive information for privacy.', arabic: 'شفّر المعلومات الحساسة للخصوصية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "hacker"؟', data: { options: ['مخترق', 'مبرمج', 'مصمم', 'مهندس'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ your data. (احمِ)', data: { answer: 'Protect' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "خصوصية"؟', data: { options: ['privacy', 'public', 'protect', 'prevent'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['data', 'your', 'backup'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "encrypt"؟', data: { options: ['يشفر', 'يحذف', 'ينسخ', 'يرسل'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Enable the _____. (جدار ناري)', data: { answer: 'firewall' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الأمن الإلكتروني مهم.', data: { answer: 'Cybersecurity is important.' }, points: 15 }
  ]
};

export const B1_U3_L5: LessonContent = {
  lessonId: 'B1-u03-l05',
  passingScore: 70,
  vocab: [
    { english: 'artificial intelligence', arabic: 'ذكاء اصطناعي', example: 'AI is advancing fast.', exampleAr: 'الذكاء الاصطناعي يتقدم بسرعة.' },
    { english: 'robot', arabic: 'روبوت', example: 'The robot cleans the house.', exampleAr: 'الروبوت ينظف المنزل.' },
    { english: 'automation', arabic: 'أتمتة', example: 'Automation saves time.', exampleAr: 'الأتمتة توفر الوقت.' },
    { english: 'innovation', arabic: 'ابتكار', example: 'This is an innovation.', exampleAr: 'هذا ابتكار.' },
    { english: 'digital', arabic: 'رقمي', example: 'We live in a digital age.', exampleAr: 'نعيش في عصر رقمي.' },
    { english: 'virtual', arabic: 'افتراضي', example: 'Virtual meetings are common.', exampleAr: 'الاجتماعات الافتراضية شائعة.' },
    { english: 'algorithm', arabic: 'خوارزمية', example: 'The algorithm is complex.', exampleAr: 'الخوارزمية معقدة.' },
    { english: 'data', arabic: 'بيانات', example: 'Data is valuable.', exampleAr: 'البيانات قيمة.' }
  ],
  sentences: [
    { english: 'Artificial intelligence is changing many industries.', arabic: 'الذكاء الاصطناعي يغير العديد من الصناعات.' },
    { english: 'Robots are used in manufacturing.', arabic: 'الروبوتات تستخدم في التصنيع.' },
    { english: 'Virtual reality is becoming more popular.', arabic: 'الواقع الافتراضي يصبح أكثر شعبية.' },
    { english: 'Data analysis helps businesses make decisions.', arabic: 'تحليل البيانات يساعد الشركات في اتخاذ القرارات.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "robot"؟', data: { options: ['روبوت', 'حاسوب', 'هاتف', 'برنامج'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'We live in a _____ age. (رقمي)', data: { answer: 'digital' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'virtual', arabic: 'افتراضي' }, { english: 'data', arabic: 'بيانات' }, { english: 'innovation', arabic: 'ابتكار' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "أتمتة"؟', data: { options: ['automation', 'automatic', 'automobile', 'autograph'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "algorithm"؟', data: { options: ['خوارزمية', 'برنامج', 'بيانات', 'روبوت'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: '_____ is valuable. (البيانات)', data: { answer: 'Data' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الذكاء الاصطناعي يتقدم بسرعة.', data: { answer: 'AI is advancing fast.' }, points: 15 }
  ]
};

export const b1Unit3Lessons: Record<string, LessonContent> = {
  'B1-u03-l01': B1_U3_L1,
  'B1-u03-l02': B1_U3_L2,
  'B1-u03-l03': B1_U3_L3,
  'B1-u03-l04': B1_U3_L4,
  'B1-u03-l05': B1_U3_L5,
};

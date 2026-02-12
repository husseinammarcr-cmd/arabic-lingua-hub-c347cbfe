import { LessonContent } from './a1-lessons';

// Unit 8: Social Media - وسائل التواصل الاجتماعي
export const B1_U8_L1: LessonContent = {
  lessonId: 'B1-u08-l01',
  passingScore: 70,
  vocab: [
    { english: 'platform', arabic: 'منصة', example: 'Which platform do you use?', exampleAr: 'أي منصة تستخدم؟' },
    { english: 'follower', arabic: 'متابع', example: 'I have many followers.', exampleAr: 'لدي متابعون كثيرون.' },
    { english: 'post', arabic: 'منشور', example: 'I liked your post.', exampleAr: 'أعجبني منشورك.' },
    { english: 'share', arabic: 'يشارك', example: 'Share this content.', exampleAr: 'شارك هذا المحتوى.' },
    { english: 'comment', arabic: 'تعليق', example: 'Leave a comment.', exampleAr: 'اترك تعليقاً.' },
    { english: 'like', arabic: 'إعجاب', example: 'Hit the like button.', exampleAr: 'اضغط زر الإعجاب.' },
    { english: 'profile', arabic: 'ملف شخصي', example: 'Update your profile.', exampleAr: 'حدّث ملفك الشخصي.' },
    { english: 'notification', arabic: 'إشعار', example: 'I got a notification.', exampleAr: 'وصلني إشعار.' }
  ],
  sentences: [
    { english: 'I follow many accounts on this platform.', arabic: 'أتابع حسابات كثيرة على هذه المنصة.' },
    { english: 'Your post got many likes and comments.', arabic: 'منشورك حصل على إعجابات وتعليقات كثيرة.' },
    { english: 'Update your profile picture regularly.', arabic: 'حدّث صورة ملفك الشخصي بانتظام.' },
    { english: 'Share interesting content with your followers.', arabic: 'شارك محتوى مثيراً مع متابعيك.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "follower"؟', data: { options: ['متابع', 'قائد', 'صديق', 'مشترك'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Leave a _____. (تعليق)', data: { answer: 'comment' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'post', arabic: 'منشور' }, { english: 'like', arabic: 'إعجاب' }, { english: 'share', arabic: 'يشارك' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "منصة"؟', data: { options: ['platform', 'plateau', 'plate', 'place'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "profile"؟', data: { options: ['ملف شخصي', 'منشور', 'تعليق', 'إشعار'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Hit the _____ button. (إعجاب)', data: { answer: 'like' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: أي منصة تستخدم؟', data: { answer: 'Which platform do you use?' }, points: 15 }
  ]
};

export const B1_U8_L2: LessonContent = {
  lessonId: 'B1-u08-l02',
  passingScore: 70,
  vocab: [
    { english: 'content creator', arabic: 'صانع محتوى', example: 'She is a content creator.', exampleAr: 'هي صانعة محتوى.' },
    { english: 'influencer', arabic: 'مؤثر', example: 'The influencer promoted the product.', exampleAr: 'المؤثر روّج للمنتج.' },
    { english: 'engagement', arabic: 'تفاعل', example: 'Increase your engagement.', exampleAr: 'زد تفاعلك.' },
    { english: 'algorithm', arabic: 'خوارزمية', example: 'The algorithm changed.', exampleAr: 'الخوارزمية تغيرت.' },
    { english: 'viral', arabic: 'منتشر', example: 'The video went viral.', exampleAr: 'الفيديو انتشر.' },
    { english: 'hashtag', arabic: 'هاشتاغ', example: 'Use a popular hashtag.', exampleAr: 'استخدم هاشتاغ شائع.' },
    { english: 'trending', arabic: 'رائج', example: 'This topic is trending.', exampleAr: 'هذا الموضوع رائج.' },
    { english: 'subscriber', arabic: 'مشترك', example: 'I gained new subscribers.', exampleAr: 'اكتسبت مشتركين جدد.' }
  ],
  sentences: [
    { english: 'Content creators work hard to engage their audience.', arabic: 'صناع المحتوى يعملون بجد لإشراك جمهورهم.' },
    { english: 'Influencers have many followers and subscribers.', arabic: 'المؤثرون لديهم متابعون ومشتركون كثيرون.' },
    { english: 'Use trending hashtags to increase visibility.', arabic: 'استخدم هاشتاغات رائجة لزيادة الظهور.' },
    { english: 'The algorithm determines what content you see.', arabic: 'الخوارزمية تحدد المحتوى الذي تراه.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "influencer"؟', data: { options: ['مؤثر', 'متابع', 'مشترك', 'صديق'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'The video went _____. (منتشر)', data: { answer: 'viral' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "رائج"؟', data: { options: ['trending', 'trailing', 'training', 'trading'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['engagement', 'your', 'increase'], correctOrder: [2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "subscriber"؟', data: { options: ['مشترك', 'متابع', 'صانع', 'مؤثر'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Use a popular _____. (هاشتاغ)', data: { answer: 'hashtag' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هي صانعة محتوى.', data: { answer: 'She is a content creator.' }, points: 15 }
  ]
};

export const B1_U8_L3: LessonContent = {
  lessonId: 'B1-u08-l03',
  passingScore: 70,
  vocab: [
    { english: 'online', arabic: 'عبر الإنترنت', example: 'I work online.', exampleAr: 'أعمل عبر الإنترنت.' },
    { english: 'privacy', arabic: 'خصوصية', example: 'Protect your privacy.', exampleAr: 'احمِ خصوصيتك.' },
    { english: 'settings', arabic: 'إعدادات', example: 'Check your privacy settings.', exampleAr: 'راجع إعدادات خصوصيتك.' },
    { english: 'block', arabic: 'يحظر', example: 'Block unwanted accounts.', exampleAr: 'احظر الحسابات غير المرغوبة.' },
    { english: 'report', arabic: 'يبلغ', example: 'Report inappropriate content.', exampleAr: 'بلّغ عن المحتوى غير الملائم.' },
    { english: 'cyberbullying', arabic: 'تنمر إلكتروني', example: 'Cyberbullying is harmful.', exampleAr: 'التنمر الإلكتروني ضار.' },
    { english: 'secure', arabic: 'آمن', example: 'Keep your account secure.', exampleAr: 'حافظ على حسابك آمناً.' },
    { english: 'anonymous', arabic: 'مجهول', example: 'Anonymous accounts are risky.', exampleAr: 'الحسابات المجهولة محفوفة بالمخاطر.' }
  ],
  sentences: [
    { english: 'Protect your privacy online.', arabic: 'احمِ خصوصيتك عبر الإنترنت.' },
    { english: 'Block and report cyberbullying.', arabic: 'احظر وبلّغ عن التنمر الإلكتروني.' },
    { english: 'Adjust your settings to stay secure.', arabic: 'اضبط إعداداتك لتبقى آمناً.' },
    { english: 'Be careful with anonymous accounts.', arabic: 'كن حذراً مع الحسابات المجهولة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "privacy"؟', data: { options: ['خصوصية', 'عامة', 'مشاركة', 'نشر'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ unwanted accounts. (احظر)', data: { answer: 'Block' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'online', arabic: 'عبر الإنترنت' }, { english: 'secure', arabic: 'آمن' }, { english: 'report', arabic: 'يبلغ' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "تنمر إلكتروني"؟', data: { options: ['cyberbullying', 'cyberspace', 'cybercrime', 'cyberattack'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "anonymous"؟', data: { options: ['مجهول', 'معروف', 'مشهور', 'رسمي'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Check your privacy _____. (إعدادات)', data: { answer: 'settings' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: التنمر الإلكتروني ضار.', data: { answer: 'Cyberbullying is harmful.' }, points: 15 }
  ]
};

export const B1_U8_L4: LessonContent = {
  lessonId: 'B1-u08-l04',
  passingScore: 70,
  vocab: [
    { english: 'story', arabic: 'قصة', example: 'Post a story.', exampleAr: 'انشر قصة.' },
    { english: 'live stream', arabic: 'بث مباشر', example: 'Watch the live stream.', exampleAr: 'شاهد البث المباشر.' },
    { english: 'filter', arabic: 'فلتر', example: 'Add a filter.', exampleAr: 'أضف فلتر.' },
    { english: 'caption', arabic: 'تعليق توضيحي', example: 'Write a good caption.', exampleAr: 'اكتب تعليقاً توضيحياً جيداً.' },
    { english: 'tag', arabic: 'إشارة', example: 'Tag your friends.', exampleAr: 'أشر إلى أصدقائك.' },
    { english: 'repost', arabic: 'إعادة نشر', example: 'Repost interesting content.', exampleAr: 'أعد نشر المحتوى المثير.' },
    { english: 'direct message', arabic: 'رسالة مباشرة', example: 'Send a direct message.', exampleAr: 'أرسل رسالة مباشرة.' },
    { english: 'feed', arabic: 'خلاصة', example: 'Check your feed.', exampleAr: 'تفقد خلاصتك.' }
  ],
  sentences: [
    { english: 'Share your story with your followers.', arabic: 'شارك قصتك مع متابعيك.' },
    { english: 'The live stream has many viewers.', arabic: 'البث المباشر لديه مشاهدون كثيرون.' },
    { english: 'Add a creative caption to your post.', arabic: 'أضف تعليقاً توضيحياً إبداعياً لمنشورك.' },
    { english: 'Tag your friends in the photo.', arabic: 'أشر إلى أصدقائك في الصورة.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "live stream"؟', data: { options: ['بث مباشر', 'فيديو مسجل', 'صورة', 'منشور'], correct: 0 } },
    { type: 'fill_blank', promptAr: '_____ your friends. (أشر)', data: { answer: 'Tag' } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "فلتر"؟', data: { options: ['filter', 'folder', 'feather', 'feature'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب:', data: { words: ['caption', 'good', 'a', 'write'], correctOrder: [3, 2, 1, 0] } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "repost"؟', data: { options: ['إعادة نشر', 'نشر أول', 'حذف', 'إخفاء'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Send a _____ message. (مباشرة)', data: { answer: 'direct' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: انشر قصة.', data: { answer: 'Post a story.' }, points: 15 }
  ]
};

export const B1_U8_L5: LessonContent = {
  lessonId: 'B1-u08-l05',
  passingScore: 70,
  vocab: [
    { english: 'addiction', arabic: 'إدمان', example: 'Social media addiction is real.', exampleAr: 'إدمان وسائل التواصل حقيقي.' },
    { english: 'screen time', arabic: 'وقت الشاشة', example: 'Limit your screen time.', exampleAr: 'حدد وقت شاشتك.' },
    { english: 'distraction', arabic: 'تشتيت', example: 'It\'s a distraction.', exampleAr: 'إنه تشتيت.' },
    { english: 'disconnect', arabic: 'ينقطع', example: 'Disconnect sometimes.', exampleAr: 'انقطع أحياناً.' },
    { english: 'balance', arabic: 'توازن', example: 'Find a balance.', exampleAr: 'ابحث عن توازن.' },
    { english: 'mental health', arabic: 'صحة نفسية', example: 'Protect your mental health.', exampleAr: 'احمِ صحتك النفسية.' },
    { english: 'productivity', arabic: 'إنتاجية', example: 'It affects productivity.', exampleAr: 'يؤثر على الإنتاجية.' },
    { english: 'detox', arabic: 'تطهير', example: 'Try a digital detox.', exampleAr: 'جرب تطهيراً رقمياً.' }
  ],
  sentences: [
    { english: 'Social media can be a distraction from work.', arabic: 'وسائل التواصل يمكن أن تكون تشتيتاً عن العمل.' },
    { english: 'It\'s important to limit your screen time.', arabic: 'من المهم تحديد وقت شاشتك.' },
    { english: 'Find a balance between online and offline life.', arabic: 'ابحث عن توازن بين الحياة الإلكترونية والواقعية.' },
    { english: 'A digital detox can improve mental health.', arabic: 'التطهير الرقمي يمكن أن يحسن الصحة النفسية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "screen time"؟', data: { options: ['وقت الشاشة', 'وقت النوم', 'وقت العمل', 'وقت الفراغ'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Find a _____. (توازن)', data: { answer: 'balance' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'addiction', arabic: 'إدمان' }, { english: 'disconnect', arabic: 'ينقطع' }, { english: 'productivity', arabic: 'إنتاجية' }] } },
    { type: 'mcq', promptAr: 'ما الترجمة الصحيحة لـ "تشتيت"؟', data: { options: ['distraction', 'destruction', 'distribution', 'distinction'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "detox"؟', data: { options: ['تطهير', 'إدمان', 'تشتيت', 'توازن'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Protect your _____ health. (نفسية)', data: { answer: 'mental' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: حدد وقت شاشتك.', data: { answer: 'Limit your screen time.' }, points: 15 }
  ]
};

export const b1Unit8Lessons: Record<string, LessonContent> = {
  'B1-u08-l01': B1_U8_L1,
  'B1-u08-l02': B1_U8_L2,
  'B1-u08-l03': B1_U8_L3,
  'B1-u08-l04': B1_U8_L4,
  'B1-u08-l05': B1_U8_L5,
};

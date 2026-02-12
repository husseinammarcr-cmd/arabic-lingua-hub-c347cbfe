import { LessonContent } from './a1-lessons';

// A2 Unit 6: Phone & Messages - الهاتف والمراسلات
export const A2_U6_L1: LessonContent = {
  lessonId: 'A2-u06-l01',
  passingScore: 70,
  vocab: [
    { english: 'phone call', arabic: 'مكالمة هاتفية', example: 'I need to make a phone call.', exampleAr: 'أحتاج لإجراء مكالمة هاتفية.' },
    { english: 'text message', arabic: 'رسالة نصية', example: 'Send me a text message.', exampleAr: 'أرسل لي رسالة نصية.' },
    { english: 'voicemail', arabic: 'بريد صوتي', example: 'Please leave a voicemail.', exampleAr: 'من فضلك اترك بريداً صوتياً.' },
    { english: 'dial', arabic: 'يطلب رقماً', example: 'Dial this number.', exampleAr: 'اطلب هذا الرقم.' },
    { english: 'hang up', arabic: 'يغلق الخط', example: 'Don\'t hang up yet.', exampleAr: 'لا تغلق الخط بعد.' },
    { english: 'answer', arabic: 'يرد', example: 'Please answer the phone.', exampleAr: 'من فضلك رد على الهاتف.' },
  ],
  sentences: [
    { english: 'Can I call you later?', arabic: 'هل يمكنني الاتصال بك لاحقاً؟' },
    { english: 'I\'ll send you a message.', arabic: 'سأرسل لك رسالة.' },
    { english: 'Who\'s calling, please?', arabic: 'من المتصل، من فضلك؟' },
    { english: 'Hold on a moment.', arabic: 'انتظر لحظة.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "phone call"؟', data: { options: ['مكالمة هاتفية', 'رسالة نصية', 'بريد إلكتروني', 'فاكس'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Please ___ the phone.', data: { answer: 'answer', alternatives: ['Answer'] } },
    { type: 'mcq', promptAr: 'كيف تقول "أغلق الخط"؟', data: { options: ['hang up', 'pick up', 'call up', 'dial up'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: you / Can / later / call / I / ?', data: { words: ['Can', 'I', 'call', 'you', 'later', '?'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "voicemail"؟', data: { options: ['بريد صوتي', 'بريد إلكتروني', 'رسالة نصية', 'فاكس'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: I\'ll send you a ___.', data: { answer: 'message', alternatives: ['text'] }, points: 10 },
    { type: 'mcq', promptAr: 'ماذا تقول عندما تريد الانتظار؟', data: { options: ['Hold on a moment', 'Hang up now', 'Call me later', 'Send a text'], correct: 0 }, points: 10 },
  ],
};

export const A2_U6_L2: LessonContent = {
  lessonId: 'A2-u06-l02',
  passingScore: 70,
  vocab: [
    { english: 'email', arabic: 'بريد إلكتروني', example: 'Check your email.', exampleAr: 'تفقد بريدك الإلكتروني.' },
    { english: 'attachment', arabic: 'مرفق', example: 'Open the attachment.', exampleAr: 'افتح المرفق.' },
    { english: 'reply', arabic: 'رد', example: 'I\'ll reply soon.', exampleAr: 'سأرد قريباً.' },
    { english: 'forward', arabic: 'يعيد إرسال', example: 'Forward me the email.', exampleAr: 'أعد إرسال البريد لي.' },
    { english: 'subject', arabic: 'موضوع', example: 'What\'s the subject?', exampleAr: 'ما هو الموضوع؟' },
    { english: 'inbox', arabic: 'صندوق الوارد', example: 'Check your inbox.', exampleAr: 'تفقد صندوق الوارد.' },
  ],
  sentences: [
    { english: 'Did you get my email?', arabic: 'هل وصلك بريدي الإلكتروني؟' },
    { english: 'I\'ll email you the details.', arabic: 'سأرسل لك التفاصيل بالبريد.' },
    { english: 'Please check the attachment.', arabic: 'من فضلك تفقد المرفق.' },
    { english: 'I\'ll reply as soon as possible.', arabic: 'سأرد في أقرب وقت ممكن.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "attachment"؟', data: { options: ['مرفق', 'موضوع', 'رد', 'إرسال'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Check your ___.', data: { answer: 'inbox', alternatives: ['email'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'reply', arabic: 'رد' }, { english: 'forward', arabic: 'إعادة إرسال' }, { english: 'subject', arabic: 'موضوع' }] } },
    { type: 'reorder', promptAr: 'رتب: email / my / get / you / Did / ?', data: { words: ['Did', 'you', 'get', 'my', 'email', '?'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "صندوق الوارد"؟', data: { options: ['inbox', 'outbox', 'mailbox', 'textbox'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: I\'ll ___ as soon as possible.', data: { answer: 'reply', alternatives: ['respond'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: هل وصلك بريدي الإلكتروني؟', data: { answer: 'Did you get my email', alternatives: ['Did you receive my email'] }, points: 15 },
  ],
};

export const A2_U6_L3: LessonContent = {
  lessonId: 'A2-u06-l03',
  passingScore: 70,
  vocab: [
    { english: 'hold the line', arabic: 'ابق على الخط', example: 'Please hold the line.', exampleAr: 'من فضلك ابق على الخط.' },
    { english: 'put through', arabic: 'يحول المكالمة', example: 'I\'ll put you through.', exampleAr: 'سأحولك.' },
    { english: 'extension', arabic: 'تحويلة', example: 'What\'s your extension?', exampleAr: 'ما هي تحويلتك؟' },
    { english: 'busy', arabic: 'مشغول', example: 'The line is busy.', exampleAr: 'الخط مشغول.' },
    { english: 'reception', arabic: 'استقبال', example: 'Bad reception here.', exampleAr: 'الاستقبال سيء هنا.' },
    { english: 'callback', arabic: 'معاودة الاتصال', example: 'I\'ll give you a callback.', exampleAr: 'سأعاود الاتصال بك.' },
  ],
  sentences: [
    { english: 'Could you hold the line?', arabic: 'هل يمكنك البقاء على الخط؟' },
    { english: 'I\'ll put you through to him.', arabic: 'سأحولك إليه.' },
    { english: 'The line is busy, try again.', arabic: 'الخط مشغول، حاول مرة أخرى.' },
    { english: 'Can you hear me now?', arabic: 'هل تسمعني الآن؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "hold the line"؟', data: { options: ['ابق على الخط', 'أغلق الخط', 'اتصل مرة أخرى', 'اترك رسالة'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: The line is ___.', data: { answer: 'busy', alternatives: ['occupied'] } },
    { type: 'mcq', promptAr: 'كيف تقول "تحويلة"؟', data: { options: ['extension', 'connection', 'reception', 'direction'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: you / through / put / I\'ll / to / him', data: { words: ['I\'ll', 'put', 'you', 'through', 'to', 'him'], correctOrder: [0, 1, 2, 3, 4, 5] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ماذا تقول عندما الخط مشغول؟', data: { options: ['The line is busy', 'The line is free', 'Hold on', 'Hang up'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: I\'ll give you a ___.', data: { answer: 'callback', alternatives: ['call'] }, points: 10 },
    { type: 'mcq', promptAr: 'ما معنى "put through"؟', data: { options: ['يحول المكالمة', 'يغلق الخط', 'يترك رسالة', 'يرسل رسالة'], correct: 0 }, points: 10 },
  ],
};

export const A2_U6_L4: LessonContent = {
  lessonId: 'A2-u06-l04',
  passingScore: 70,
  vocab: [
    { english: 'social media', arabic: 'وسائل التواصل الاجتماعي', example: 'I use social media daily.', exampleAr: 'أستخدم وسائل التواصل يومياً.' },
    { english: 'post', arabic: 'منشور', example: 'I saw your post.', exampleAr: 'رأيت منشورك.' },
    { english: 'share', arabic: 'يشارك', example: 'Share this with friends.', exampleAr: 'شارك هذا مع الأصدقاء.' },
    { english: 'comment', arabic: 'تعليق', example: 'Leave a comment.', exampleAr: 'اترك تعليقاً.' },
    { english: 'like', arabic: 'إعجاب', example: 'I liked your photo.', exampleAr: 'أعجبتني صورتك.' },
    { english: 'follow', arabic: 'يتابع', example: 'Follow me on Instagram.', exampleAr: 'تابعني على انستغرام.' },
  ],
  sentences: [
    { english: 'Did you see my latest post?', arabic: 'هل رأيت آخر منشوراتي؟' },
    { english: 'I\'ll share it with you.', arabic: 'سأشاركه معك.' },
    { english: 'Thanks for the like!', arabic: 'شكراً على الإعجاب!' },
    { english: 'Please follow our page.', arabic: 'من فضلك تابع صفحتنا.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "post"؟', data: { options: ['منشور', 'رسالة', 'بريد', 'تعليق'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: ___ me on Instagram.', data: { answer: 'Follow', alternatives: ['follow'] } },
    { type: 'matching', promptAr: 'طابق الكلمات:', data: { pairs: [{ english: 'share', arabic: 'يشارك' }, { english: 'comment', arabic: 'تعليق' }, { english: 'like', arabic: 'إعجاب' }] } },
    { type: 'reorder', promptAr: 'رتب: post / my / see / you / Did / latest / ?', data: { words: ['Did', 'you', 'see', 'my', 'latest', 'post', '?'], correctOrder: [0, 1, 2, 3, 4, 5, 6] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "تعليق"؟', data: { options: ['comment', 'post', 'share', 'like'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: Leave a ___.', data: { answer: 'comment', alternatives: ['message'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: شكراً على الإعجاب!', data: { answer: 'Thanks for the like', alternatives: ['Thank you for the like'] }, points: 15 },
  ],
};

export const A2_U6_L5: LessonContent = {
  lessonId: 'A2-u06-l05',
  passingScore: 70,
  vocab: [
    { english: 'video call', arabic: 'مكالمة فيديو', example: 'Let\'s have a video call.', exampleAr: 'لنجر مكالمة فيديو.' },
    { english: 'screen', arabic: 'شاشة', example: 'Share your screen.', exampleAr: 'شارك شاشتك.' },
    { english: 'mute', arabic: 'كتم الصوت', example: 'Please mute your microphone.', exampleAr: 'من فضلك اكتم ميكروفونك.' },
    { english: 'camera', arabic: 'كاميرا', example: 'Turn on your camera.', exampleAr: 'شغل كاميرتك.' },
    { english: 'connection', arabic: 'اتصال', example: 'The connection is bad.', exampleAr: 'الاتصال سيء.' },
    { english: 'meeting', arabic: 'اجتماع', example: 'Join the meeting.', exampleAr: 'انضم للاجتماع.' },
  ],
  sentences: [
    { english: 'Can you see my screen?', arabic: 'هل ترى شاشتي؟' },
    { english: 'You\'re on mute.', arabic: 'صوتك مكتوم.' },
    { english: 'My camera isn\'t working.', arabic: 'كاميرتي لا تعمل.' },
    { english: 'Let\'s schedule a video call.', arabic: 'لنحدد موعد مكالمة فيديو.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "mute"؟', data: { options: ['كتم الصوت', 'رفع الصوت', 'تشغيل', 'إيقاف'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Can you see my ___?', data: { answer: 'screen', alternatives: ['camera'] } },
    { type: 'mcq', promptAr: 'ماذا تقول عندما صوت شخص مكتوم؟', data: { options: ['You\'re on mute', 'Speak louder', 'Turn on camera', 'Share screen'], correct: 0 } },
    { type: 'reorder', promptAr: 'رتب: camera / your / Turn / on', data: { words: ['Turn', 'on', 'your', 'camera'], correctOrder: [0, 1, 2, 3] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'كيف تقول "مكالمة فيديو"؟', data: { options: ['video call', 'phone call', 'voice call', 'text message'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ is bad.', data: { answer: 'connection', alternatives: ['signal'] }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: كاميرتي لا تعمل', data: { answer: 'My camera isn\'t working', alternatives: ['My camera is not working'] }, points: 15 },
  ],
};

export const a2Unit6Lessons: Record<string, LessonContent> = {
  'A2-u06-l01': A2_U6_L1,
  'A2-u06-l02': A2_U6_L2,
  'A2-u06-l03': A2_U6_L3,
  'A2-u06-l04': A2_U6_L4,
  'A2-u06-l05': A2_U6_L5,
};

import { LessonContent } from './a1-lessons';

// Unit 7: Literary Analysis - التحليل الأدبي
export const C1_U7_L1: LessonContent = {
  lessonId: 'C1-u07-l01',
  passingScore: 75,
  vocab: [
    { english: 'narrative', arabic: 'سرد', example: 'Narrative structure.', exampleAr: 'بنية السرد.' },
    { english: 'protagonist', arabic: 'بطل', example: 'The protagonist struggles.', exampleAr: 'البطل يكافح.' },
    { english: 'antagonist', arabic: 'خصم', example: 'The antagonist opposes.', exampleAr: 'الخصم يعارض.' },
    { english: 'plot', arabic: 'حبكة', example: 'Complex plot.', exampleAr: 'حبكة معقدة.' },
    { english: 'theme', arabic: 'موضوع', example: 'The main theme.', exampleAr: 'الموضوع الرئيسي.' },
    { english: 'motif', arabic: 'عنصر متكرر', example: 'A recurring motif.', exampleAr: 'عنصر متكرر.' },
    { english: 'symbolism', arabic: 'رمزية', example: 'Rich symbolism.', exampleAr: 'رمزية غنية.' },
    { english: 'allegory', arabic: 'رمزية/تمثيل', example: 'An allegory of life.', exampleAr: 'تمثيل للحياة.' }
  ],
  sentences: [
    { english: 'The narrative unfolds gradually.', arabic: 'السرد يتكشف تدريجياً.' },
    { english: 'The protagonist faces many challenges.', arabic: 'البطل يواجه تحديات كثيرة.' },
    { english: 'Symbolism adds depth to the story.', arabic: 'الرمزية تضيف عمقاً للقصة.' },
    { english: 'The main theme is redemption.', arabic: 'الموضوع الرئيسي هو الفداء.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "protagonist"؟', data: { options: ['antagonist', 'narrator', 'author', 'reader'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Narrative _____. (بنية)', data: { answer: 'structure' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'plot', arabic: 'حبكة' }, { english: 'theme', arabic: 'موضوع' }, { english: 'motif', arabic: 'عنصر متكرر' }] } },
    { type: 'mcq', promptAr: 'ما معنى "allegory"؟', data: { options: ['رمزية/تمثيل', 'حبكة', 'سرد', 'شخصية'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "symbolism"؟', data: { options: ['رمزية', 'حبكة', 'سرد', 'موضوع'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'The _____ struggles. (بطل)', data: { answer: 'protagonist' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الرمزية تضيف عمقاً للقصة.', data: { answer: 'Symbolism adds depth to the story.' }, points: 15 }
  ]
};

export const C1_U7_L2: LessonContent = {
  lessonId: 'C1-u07-l02',
  passingScore: 75,
  vocab: [
    { english: 'metaphor', arabic: 'استعارة', example: 'A powerful metaphor.', exampleAr: 'استعارة قوية.' },
    { english: 'simile', arabic: 'تشبيه', example: 'Use a simile.', exampleAr: 'استخدم تشبيهاً.' },
    { english: 'irony', arabic: 'سخرية', example: 'Dramatic irony.', exampleAr: 'سخرية درامية.' },
    { english: 'satire', arabic: 'هجاء', example: 'Political satire.', exampleAr: 'هجاء سياسي.' },
    { english: 'hyperbole', arabic: 'مبالغة', example: 'Use hyperbole for effect.', exampleAr: 'استخدم المبالغة للتأثير.' },
    { english: 'understatement', arabic: 'تقليل', example: 'A deliberate understatement.', exampleAr: 'تقليل متعمد.' },
    { english: 'personification', arabic: 'تشخيص', example: 'Personification of nature.', exampleAr: 'تشخيص الطبيعة.' },
    { english: 'alliteration', arabic: 'جناس', example: 'Alliteration in poetry.', exampleAr: 'الجناس في الشعر.' }
  ],
  sentences: [
    { english: 'The metaphor compares life to a journey.', arabic: 'الاستعارة تشبه الحياة برحلة.' },
    { english: 'Irony creates unexpected meaning.', arabic: 'السخرية تخلق معنى غير متوقع.' },
    { english: 'Satire criticizes through humor.', arabic: 'الهجاء ينتقد من خلال الفكاهة.' },
    { english: 'Personification gives human qualities to objects.', arabic: 'التشخيص يعطي صفات بشرية للأشياء.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما الفرق بين "metaphor" و "simile"؟', data: { options: ['simile يستخدم like/as', 'لا فرق', 'metaphor يستخدم like', 'كلاهما مباشر'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Dramatic _____. (سخرية)', data: { answer: 'irony' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'hyperbole', arabic: 'مبالغة' }, { english: 'satire', arabic: 'هجاء' }, { english: 'personification', arabic: 'تشخيص' }] } },
    { type: 'mcq', promptAr: 'ما معنى "alliteration"؟', data: { options: ['جناس', 'استعارة', 'تشبيه', 'سخرية'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما عكس "hyperbole"؟', data: { options: ['understatement', 'metaphor', 'simile', 'irony'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Political _____. (هجاء)', data: { answer: 'satire' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الاستعارة تشبه الحياة برحلة.', data: { answer: 'The metaphor compares life to a journey.' }, points: 15 }
  ]
};

export const C1_U7_L3: LessonContent = {
  lessonId: 'C1-u07-l03',
  passingScore: 75,
  vocab: [
    { english: 'genre', arabic: 'نوع أدبي', example: 'Literary genre.', exampleAr: 'نوع أدبي.' },
    { english: 'prose', arabic: 'نثر', example: 'Write in prose.', exampleAr: 'اكتب نثراً.' },
    { english: 'poetry', arabic: 'شعر', example: 'Modern poetry.', exampleAr: 'شعر حديث.' },
    { english: 'fiction', arabic: 'خيال', example: 'Literary fiction.', exampleAr: 'خيال أدبي.' },
    { english: 'non-fiction', arabic: 'واقعي', example: 'Non-fiction writing.', exampleAr: 'كتابة واقعية.' },
    { english: 'tragedy', arabic: 'مأساة', example: 'A Greek tragedy.', exampleAr: 'مأساة يونانية.' },
    { english: 'comedy', arabic: 'ملهاة', example: 'Romantic comedy.', exampleAr: 'ملهاة رومانسية.' },
    { english: 'epic', arabic: 'ملحمة', example: 'An epic poem.', exampleAr: 'قصيدة ملحمية.' }
  ],
  sentences: [
    { english: 'This genre explores human nature.', arabic: 'هذا النوع يستكشف الطبيعة البشرية.' },
    { english: 'Prose differs from poetry in structure.', arabic: 'النثر يختلف عن الشعر في البنية.' },
    { english: 'Tragedy evokes pity and fear.', arabic: 'المأساة تثير الشفقة والخوف.' },
    { english: 'The epic tells of heroic deeds.', arabic: 'الملحمة تحكي عن أعمال بطولية.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "fiction"؟', data: { options: ['non-fiction', 'poetry', 'prose', 'drama'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Literary _____. (نوع)', data: { answer: 'genre' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'tragedy', arabic: 'مأساة' }, { english: 'comedy', arabic: 'ملهاة' }, { english: 'epic', arabic: 'ملحمة' }] } },
    { type: 'mcq', promptAr: 'ما معنى "prose"؟', data: { options: ['نثر', 'شعر', 'ملحمة', 'مأساة'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "epic"؟', data: { options: ['ملحمة', 'ملهاة', 'مأساة', 'نثر'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'A Greek _____. (مأساة)', data: { answer: 'tragedy' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: النثر يختلف عن الشعر في البنية.', data: { answer: 'Prose differs from poetry in structure.' }, points: 15 }
  ]
};

export const C1_U7_L4: LessonContent = {
  lessonId: 'C1-u07-l04',
  passingScore: 75,
  vocab: [
    { english: 'context', arabic: 'سياق', example: 'Historical context.', exampleAr: 'سياق تاريخي.' },
    { english: 'interpretation', arabic: 'تفسير', example: 'Literary interpretation.', exampleAr: 'تفسير أدبي.' },
    { english: 'critique', arabic: 'نقد', example: 'Write a critique.', exampleAr: 'اكتب نقداً.' },
    { english: 'analysis', arabic: 'تحليل', example: 'Deep analysis.', exampleAr: 'تحليل عميق.' },
    { english: 'subtext', arabic: 'نص ضمني', example: 'Read the subtext.', exampleAr: 'اقرأ النص الضمني.' },
    { english: 'implication', arabic: 'مضمون', example: 'Hidden implications.', exampleAr: 'مضامين خفية.' },
    { english: 'connotation', arabic: 'دلالة', example: 'Word connotations.', exampleAr: 'دلالات الكلمات.' },
    { english: 'denotation', arabic: 'معنى حرفي', example: 'Literal denotation.', exampleAr: 'المعنى الحرفي.' }
  ],
  sentences: [
    { english: 'Context shapes interpretation.', arabic: 'السياق يشكل التفسير.' },
    { english: 'The subtext reveals hidden meaning.', arabic: 'النص الضمني يكشف معنى خفياً.' },
    { english: 'Connotation differs from denotation.', arabic: 'الدلالة تختلف عن المعنى الحرفي.' },
    { english: 'Literary critique requires careful analysis.', arabic: 'النقد الأدبي يتطلب تحليلاً دقيقاً.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما عكس "connotation"؟', data: { options: ['denotation', 'implication', 'subtext', 'context'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Historical _____. (سياق)', data: { answer: 'context' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'interpretation', arabic: 'تفسير' }, { english: 'subtext', arabic: 'نص ضمني' }, { english: 'implication', arabic: 'مضمون' }] } },
    { type: 'mcq', promptAr: 'ما معنى "critique"؟', data: { options: ['نقد', 'مدح', 'وصف', 'سرد'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "subtext"؟', data: { options: ['نص ضمني', 'نص صريح', 'عنوان', 'خاتمة'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Deep _____. (تحليل)', data: { answer: 'analysis' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: السياق يشكل التفسير.', data: { answer: 'Context shapes interpretation.' }, points: 15 }
  ]
};

export const C1_U7_L5: LessonContent = {
  lessonId: 'C1-u07-l05',
  passingScore: 75,
  vocab: [
    { english: 'narrator', arabic: 'راوي', example: 'Unreliable narrator.', exampleAr: 'راوي غير موثوق.' },
    { english: 'perspective', arabic: 'منظور', example: 'First-person perspective.', exampleAr: 'منظور الشخص الأول.' },
    { english: 'voice', arabic: 'صوت', example: 'Narrative voice.', exampleAr: 'الصوت السردي.' },
    { english: 'tone', arabic: 'نبرة', example: 'Somber tone.', exampleAr: 'نبرة حزينة.' },
    { english: 'mood', arabic: 'أجواء', example: 'Create a mood.', exampleAr: 'اخلق أجواء.' },
    { english: 'foreshadowing', arabic: 'تمهيد', example: 'Foreshadowing events.', exampleAr: 'التمهيد للأحداث.' },
    { english: 'flashback', arabic: 'استرجاع', example: 'A flashback scene.', exampleAr: 'مشهد استرجاع.' },
    { english: 'climax', arabic: 'ذروة', example: 'The story\'s climax.', exampleAr: 'ذروة القصة.' }
  ],
  sentences: [
    { english: 'The unreliable narrator misleads readers.', arabic: 'الراوي غير الموثوق يضلل القراء.' },
    { english: 'Perspective affects how we understand events.', arabic: 'المنظور يؤثر على فهمنا للأحداث.' },
    { english: 'Foreshadowing hints at future events.', arabic: 'التمهيد يلمح لأحداث مستقبلية.' },
    { english: 'The climax is the turning point.', arabic: 'الذروة هي نقطة التحول.' }
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "foreshadowing"؟', data: { options: ['تمهيد', 'استرجاع', 'ذروة', 'نهاية'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Unreliable _____. (راوي)', data: { answer: 'narrator' } },
    { type: 'matching', promptAr: 'طابق:', data: { pairs: [{ english: 'flashback', arabic: 'استرجاع' }, { english: 'climax', arabic: 'ذروة' }, { english: 'tone', arabic: 'نبرة' }] } },
    { type: 'mcq', promptAr: 'ما عكس "flashback"؟', data: { options: ['foreshadowing', 'climax', 'ending', 'beginning'], correct: 0 } }
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "climax"؟', data: { options: ['ذروة', 'بداية', 'نهاية', 'وسط'], correct: 0 }, points: 10 },
    { type: 'fill_blank', promptAr: 'Create a _____. (أجواء)', data: { answer: 'mood' }, points: 10 },
    { type: 'translation', promptAr: 'ترجم: الذروة هي نقطة التحول.', data: { answer: 'The climax is the turning point.' }, points: 15 }
  ]
};

export const c1Unit7Lessons: Record<string, LessonContent> = {
  'C1-u07-l01': C1_U7_L1,
  'C1-u07-l02': C1_U7_L2,
  'C1-u07-l03': C1_U7_L3,
  'C1-u07-l04': C1_U7_L4,
  'C1-u07-l05': C1_U7_L5,
};

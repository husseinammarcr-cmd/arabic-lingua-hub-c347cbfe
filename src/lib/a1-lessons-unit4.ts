// A1 Unit 4: المدرسة والعمل (School & Work)
import { LessonContent } from './a1-lessons';

export const A1_U4_L1: LessonContent = {
  lessonId: 'A1-u04-l01',
  passingScore: 70,
  vocab: [
    { english: 'School', arabic: 'مدرسة', example: 'I go to school every day.', exampleAr: 'أذهب إلى المدرسة كل يوم.' },
    { english: 'Teacher', arabic: 'معلم/معلمة', example: 'The teacher is kind.', exampleAr: 'المعلم لطيف.' },
    { english: 'Student', arabic: 'طالب/طالبة', example: 'I am a student.', exampleAr: 'أنا طالب.' },
    { english: 'Class', arabic: 'صف/فصل', example: 'My class has 20 students.', exampleAr: 'صفي به 20 طالباً.' },
    { english: 'Classroom', arabic: 'غرفة الصف', example: 'The classroom is big.', exampleAr: 'غرفة الصف كبيرة.' },
    { english: 'Book', arabic: 'كتاب', example: 'I read the book.', exampleAr: 'أقرأ الكتاب.' },
    { english: 'Notebook', arabic: 'دفتر', example: 'Write in your notebook.', exampleAr: 'اكتب في دفترك.' },
    { english: 'Pen', arabic: 'قلم', example: 'I need a pen.', exampleAr: 'أحتاج قلماً.' },
    { english: 'Pencil', arabic: 'قلم رصاص', example: 'Use a pencil to draw.', exampleAr: 'استخدم قلم رصاص للرسم.' },
    { english: 'Desk', arabic: 'مكتب', example: 'The book is on my desk.', exampleAr: 'الكتاب على مكتبي.' },
  ],
  sentences: [
    { english: 'I go to school at 7 AM.', arabic: 'أذهب إلى المدرسة الساعة 7 صباحاً.' },
    { english: 'My teacher is very good.', arabic: 'معلمي جيد جداً.' },
    { english: 'We learn English at school.', arabic: 'نتعلم الإنجليزية في المدرسة.' },
    { english: 'I have many books.', arabic: 'لدي كتب كثيرة.' },
    { english: 'The students are in the classroom.', arabic: 'الطلاب في غرفة الصف.' },
    { english: 'Please give me a pen.', arabic: 'من فضلك أعطني قلماً.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Teacher"؟', data: { options: ['معلم', 'طالب', 'مدير', 'سائق'], correct: 0 } },
    { type: 'mcq', promptAr: 'أين يدرس الطلاب؟', data: { options: ['School', 'Hospital', 'Bank', 'Restaurant'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I am a ___. (طالب)', data: { answer: 'student', hint: 'شخص يدرس' } },
    { type: 'translation', promptAr: 'ترجم: كتاب', data: { answer: 'Book', alternatives: ['book', 'a book'] } },
    { type: 'reorder', promptAr: 'رتب: to / I / go / school', data: { words: ['I', 'go', 'to', 'school'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ما الفرق بين "Pen" و "Pencil"؟', data: { options: ['القلم العادي والرصاص', 'نفس الشيء', 'الكتاب والدفتر', 'المكتب والكرسي'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Write in your ___.', data: { answer: 'notebook' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Teacher', arabic: 'معلم' }, { english: 'Student', arabic: 'طالب' }, { english: 'Book', arabic: 'كتاب' }, { english: 'Pen', arabic: 'قلم' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Classroom"؟', data: { options: ['غرفة الصف', 'المدرسة', 'المكتبة', 'الملعب'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: أذهب إلى المدرسة', data: { answer: 'I go to school', alternatives: ['i go to school'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: The ___ is on my desk.', data: { answer: 'book' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: a / I / need / pen', data: { words: ['I', 'need', 'a', 'pen'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: معلمي جيد', data: { answer: 'My teacher is good', alternatives: ['My teacher is nice'] }, points: 25 },
  ]
};

export const A1_U4_L2: LessonContent = {
  lessonId: 'A1-u04-l02',
  passingScore: 70,
  vocab: [
    { english: 'Learn', arabic: 'يتعلم', example: 'I learn English.', exampleAr: 'أتعلم الإنجليزية.' },
    { english: 'Study', arabic: 'يدرس', example: 'I study every day.', exampleAr: 'أدرس كل يوم.' },
    { english: 'Read', arabic: 'يقرأ', example: 'I read books.', exampleAr: 'أقرأ الكتب.' },
    { english: 'Write', arabic: 'يكتب', example: 'She writes in her notebook.', exampleAr: 'هي تكتب في دفترها.' },
    { english: 'Listen', arabic: 'يستمع', example: 'Listen to the teacher.', exampleAr: 'استمع للمعلم.' },
    { english: 'Speak', arabic: 'يتكلم', example: 'Speak English with me.', exampleAr: 'تكلم الإنجليزية معي.' },
    { english: 'Ask', arabic: 'يسأل', example: 'Ask the teacher.', exampleAr: 'اسأل المعلم.' },
    { english: 'Answer', arabic: 'يجيب', example: 'Answer the question.', exampleAr: 'أجب على السؤال.' },
    { english: 'Understand', arabic: 'يفهم', example: 'I understand English.', exampleAr: 'أفهم الإنجليزية.' },
    { english: 'Practice', arabic: 'يتدرب', example: 'Practice every day.', exampleAr: 'تدرب كل يوم.' },
  ],
  sentences: [
    { english: 'I learn new words every day.', arabic: 'أتعلم كلمات جديدة كل يوم.' },
    { english: 'Please read the sentence.', arabic: 'من فضلك اقرأ الجملة.' },
    { english: 'Listen and repeat after me.', arabic: 'استمع وكرر بعدي.' },
    { english: 'Can you speak Arabic?', arabic: 'هل تتكلم العربية؟' },
    { english: 'I don\'t understand this word.', arabic: 'لا أفهم هذه الكلمة.' },
    { english: 'Practice makes perfect.', arabic: 'التدريب يصنع الكمال.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Learn"؟', data: { options: ['يتعلم', 'يعلّم', 'يقرأ', 'يكتب'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما معنى "Listen"؟', data: { options: ['يستمع', 'يتكلم', 'يسأل', 'يجيب'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I ___ English every day.', data: { answer: 'study', hint: 'أدرس' } },
    { type: 'translation', promptAr: 'ترجم: اقرأ الكتاب', data: { answer: 'Read the book', alternatives: ['read the book'] } },
    { type: 'reorder', promptAr: 'رتب: question / the / Answer', data: { words: ['Answer', 'the', 'question'], correctOrder: [0, 1, 2] } },
    { type: 'mcq', promptAr: 'ما عكس "Ask"؟', data: { options: ['Answer', 'Listen', 'Speak', 'Read'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: ___ to the teacher.', data: { answer: 'Listen' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Read', arabic: 'يقرأ' }, { english: 'Write', arabic: 'يكتب' }, { english: 'Speak', arabic: 'يتكلم' }, { english: 'Listen', arabic: 'يستمع' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Understand"؟', data: { options: ['يفهم', 'يتعلم', 'يدرس', 'يقرأ'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: أتعلم الإنجليزية', data: { answer: 'I learn English', alternatives: ['I study English'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: ___ every day.', data: { answer: 'Practice' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: English / Speak / with / me', data: { words: ['Speak', 'English', 'with', 'me'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: لا أفهم', data: { answer: 'I don\'t understand', alternatives: ['I do not understand'] }, points: 25 },
  ]
};

export const A1_U4_L3: LessonContent = {
  lessonId: 'A1-u04-l03',
  passingScore: 70,
  vocab: [
    { english: 'Work', arabic: 'عمل/يعمل', example: 'I work in an office.', exampleAr: 'أعمل في مكتب.' },
    { english: 'Job', arabic: 'وظيفة', example: 'What is your job?', exampleAr: 'ما وظيفتك؟' },
    { english: 'Office', arabic: 'مكتب', example: 'The office is big.', exampleAr: 'المكتب كبير.' },
    { english: 'Doctor', arabic: 'طبيب', example: 'He is a doctor.', exampleAr: 'هو طبيب.' },
    { english: 'Engineer', arabic: 'مهندس', example: 'She is an engineer.', exampleAr: 'هي مهندسة.' },
    { english: 'Nurse', arabic: 'ممرض/ة', example: 'The nurse helps patients.', exampleAr: 'الممرضة تساعد المرضى.' },
    { english: 'Driver', arabic: 'سائق', example: 'He is a taxi driver.', exampleAr: 'هو سائق تاكسي.' },
    { english: 'Manager', arabic: 'مدير', example: 'She is the manager.', exampleAr: 'هي المديرة.' },
    { english: 'Employee', arabic: 'موظف', example: 'He is a good employee.', exampleAr: 'هو موظف جيد.' },
    { english: 'Company', arabic: 'شركة', example: 'I work for a big company.', exampleAr: 'أعمل في شركة كبيرة.' },
  ],
  sentences: [
    { english: 'What do you do?', arabic: 'ماذا تعمل؟' },
    { english: 'I am a doctor.', arabic: 'أنا طبيب.' },
    { english: 'She works in a hospital.', arabic: 'هي تعمل في مستشفى.' },
    { english: 'My father is an engineer.', arabic: 'أبي مهندس.' },
    { english: 'I like my job.', arabic: 'أحب عملي.' },
    { english: 'The manager is in the office.', arabic: 'المدير في المكتب.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Doctor"؟', data: { options: ['طبيب', 'مهندس', 'معلم', 'سائق'], correct: 0 } },
    { type: 'mcq', promptAr: 'أين يعمل الطبيب؟', data: { options: ['Hospital', 'School', 'Restaurant', 'Bank'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: What is your ___?', data: { answer: 'job', hint: 'وظيفة' } },
    { type: 'translation', promptAr: 'ترجم: أنا مهندس', data: { answer: 'I am an engineer', alternatives: ['I\'m an engineer'] } },
    { type: 'reorder', promptAr: 'رتب: a / She / is / nurse', data: { words: ['She', 'is', 'a', 'nurse'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ما معنى "Manager"؟', data: { options: ['مدير', 'موظف', 'سائق', 'عامل'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I work for a big ___.', data: { answer: 'company' } },
    { type: 'matching', promptAr: 'طابق المهن', data: { pairs: [{ english: 'Doctor', arabic: 'طبيب' }, { english: 'Engineer', arabic: 'مهندس' }, { english: 'Driver', arabic: 'سائق' }, { english: 'Nurse', arabic: 'ممرض' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Employee"؟', data: { options: ['موظف', 'مدير', 'صاحب العمل', 'زبون'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: أبي طبيب', data: { answer: 'My father is a doctor', alternatives: ['My dad is a doctor'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: She works in an ___.', data: { answer: 'office' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: you / What / do / do / ?', data: { words: ['What', 'do', 'you', 'do', '?'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: أحب عملي', data: { answer: 'I like my job', alternatives: ['I love my job'] }, points: 25 },
  ]
};

export const A1_U4_L4: LessonContent = {
  lessonId: 'A1-u04-l04',
  passingScore: 70,
  vocab: [
    { english: 'Homework', arabic: 'واجب منزلي', example: 'I do my homework.', exampleAr: 'أعمل واجبي المنزلي.' },
    { english: 'Exam', arabic: 'امتحان', example: 'The exam is tomorrow.', exampleAr: 'الامتحان غداً.' },
    { english: 'Test', arabic: 'اختبار', example: 'We have a test today.', exampleAr: 'لدينا اختبار اليوم.' },
    { english: 'Grade', arabic: 'درجة', example: 'I got a good grade.', exampleAr: 'حصلت على درجة جيدة.' },
    { english: 'Pass', arabic: 'ينجح', example: 'I passed the exam.', exampleAr: 'نجحت في الامتحان.' },
    { english: 'Fail', arabic: 'يرسب', example: 'Don\'t fail the test.', exampleAr: 'لا ترسب في الاختبار.' },
    { english: 'Easy', arabic: 'سهل', example: 'The test was easy.', exampleAr: 'كان الاختبار سهلاً.' },
    { english: 'Difficult', arabic: 'صعب', example: 'Math is difficult.', exampleAr: 'الرياضيات صعبة.' },
    { english: 'Question', arabic: 'سؤال', example: 'Answer the question.', exampleAr: 'أجب على السؤال.' },
    { english: 'Lesson', arabic: 'درس', example: 'This is lesson one.', exampleAr: 'هذا الدرس الأول.' },
  ],
  sentences: [
    { english: 'I have to do my homework.', arabic: 'يجب أن أعمل واجبي.' },
    { english: 'The exam was very easy.', arabic: 'كان الامتحان سهلاً جداً.' },
    { english: 'I passed all my tests.', arabic: 'نجحت في جميع اختباراتي.' },
    { english: 'This question is difficult.', arabic: 'هذا السؤال صعب.' },
    { english: 'What is your grade?', arabic: 'ما درجتك؟' },
    { english: 'Don\'t forget to study the lesson.', arabic: 'لا تنسَ دراسة الدرس.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Exam"؟', data: { options: ['امتحان', 'درس', 'واجب', 'سؤال'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما عكس "Easy"؟', data: { options: ['Difficult', 'Big', 'Small', 'Good'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: I do my ___ every day.', data: { answer: 'homework' } },
    { type: 'translation', promptAr: 'ترجم: نجحت في الامتحان', data: { answer: 'I passed the exam', alternatives: ['i passed the exam'] } },
    { type: 'reorder', promptAr: 'رتب: is / The / easy / test', data: { words: ['The', 'test', 'is', 'easy'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'ما عكس "Pass"؟', data: { options: ['Fail', 'Win', 'Lose', 'Try'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: Answer the ___.', data: { answer: 'question' } },
    { type: 'matching', promptAr: 'طابق الكلمات', data: { pairs: [{ english: 'Easy', arabic: 'سهل' }, { english: 'Difficult', arabic: 'صعب' }, { english: 'Pass', arabic: 'ينجح' }, { english: 'Fail', arabic: 'يرسب' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Grade"؟', data: { options: ['درجة', 'سؤال', 'امتحان', 'واجب'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: الامتحان صعب', data: { answer: 'The exam is difficult', alternatives: ['The test is difficult', 'The exam is hard'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: I got a good ___.', data: { answer: 'grade' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: homework / my / I / do', data: { words: ['I', 'do', 'my', 'homework'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: هذا الدرس سهل', data: { answer: 'This lesson is easy', alternatives: ['this lesson is easy'] }, points: 25 },
  ]
};

export const A1_U4_L5: LessonContent = {
  lessonId: 'A1-u04-l05',
  passingScore: 70,
  vocab: [
    { english: 'Morning', arabic: 'صباح', example: 'I study in the morning.', exampleAr: 'أدرس في الصباح.' },
    { english: 'Afternoon', arabic: 'بعد الظهر', example: 'School ends in the afternoon.', exampleAr: 'تنتهي المدرسة بعد الظهر.' },
    { english: 'Start', arabic: 'يبدأ', example: 'School starts at 8 AM.', exampleAr: 'تبدأ المدرسة الساعة 8 صباحاً.' },
    { english: 'Finish', arabic: 'ينتهي', example: 'Work finishes at 5 PM.', exampleAr: 'ينتهي العمل الساعة 5 مساءً.' },
    { english: 'Break', arabic: 'استراحة', example: 'We have a break at 10.', exampleAr: 'لدينا استراحة الساعة 10.' },
    { english: 'Lunch', arabic: 'غداء', example: 'Lunch is at 12 PM.', exampleAr: 'الغداء الساعة 12 ظهراً.' },
    { english: 'Late', arabic: 'متأخر', example: 'Don\'t be late.', exampleAr: 'لا تتأخر.' },
    { english: 'Early', arabic: 'مبكر', example: 'I arrive early.', exampleAr: 'أصل مبكراً.' },
    { english: 'Busy', arabic: 'مشغول', example: 'I am very busy today.', exampleAr: 'أنا مشغول جداً اليوم.' },
    { english: 'Free', arabic: 'متفرغ', example: 'Are you free now?', exampleAr: 'هل أنت متفرغ الآن؟' },
  ],
  sentences: [
    { english: 'I go to school in the morning.', arabic: 'أذهب للمدرسة في الصباح.' },
    { english: 'School starts at 8 and finishes at 2.', arabic: 'تبدأ المدرسة الساعة 8 وتنتهي الساعة 2.' },
    { english: 'I have lunch at noon.', arabic: 'أتناول الغداء في الظهيرة.' },
    { english: 'Don\'t be late for class.', arabic: 'لا تتأخر عن الصف.' },
    { english: 'I am busy in the afternoon.', arabic: 'أنا مشغول بعد الظهر.' },
    { english: 'Are you free after school?', arabic: 'هل أنت متفرغ بعد المدرسة؟' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'ما معنى "Start"؟', data: { options: ['يبدأ', 'ينتهي', 'يستمر', 'يتوقف'], correct: 0 } },
    { type: 'mcq', promptAr: 'ما عكس "Late"؟', data: { options: ['Early', 'Slow', 'Fast', 'Soon'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: School ___ at 8 AM.', data: { answer: 'starts' } },
    { type: 'translation', promptAr: 'ترجم: أنا مشغول', data: { answer: 'I am busy', alternatives: ['I\'m busy'] } },
    { type: 'reorder', promptAr: 'رتب: late / be / Don\'t', data: { words: ['Don\'t', 'be', 'late'], correctOrder: [0, 1, 2] } },
    { type: 'mcq', promptAr: 'ما عكس "Busy"؟', data: { options: ['Free', 'Full', 'Empty', 'Slow'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'أكمل: We have a ___ at 10. (استراحة)', data: { answer: 'break' } },
    { type: 'matching', promptAr: 'طابق المتضادات', data: { pairs: [{ english: 'Start', arabic: 'Finish' }, { english: 'Early', arabic: 'Late' }, { english: 'Busy', arabic: 'Free' }, { english: 'Morning', arabic: 'Afternoon' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'ما معنى "Break"؟', data: { options: ['استراحة', 'غداء', 'بداية', 'نهاية'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'ترجم: ينتهي العمل الساعة 5', data: { answer: 'Work finishes at 5', alternatives: ['Work ends at 5'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'أكمل: Are you ___ now?', data: { answer: 'free' }, points: 15 },
    { type: 'reorder', promptAr: 'رتب: the / in / morning / I / study', data: { words: ['I', 'study', 'in', 'the', 'morning'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
    { type: 'translation', promptAr: 'ترجم: لا تتأخر عن المدرسة', data: { answer: 'Don\'t be late for school', alternatives: ['Do not be late for school'] }, points: 25 },
  ]
};

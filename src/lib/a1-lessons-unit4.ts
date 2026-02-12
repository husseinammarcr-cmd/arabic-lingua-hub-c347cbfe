// A1 Unit 4: School & Work — Spanish for English Speakers
import { LessonContent } from './a1-lessons';

export const A1_U4_L1: LessonContent = {
  lessonId: 'A1-u04-l01', passingScore: 70,
  vocab: [
    { english: 'School', arabic: 'Escuela', example: 'Voy a la escuela cada día.', exampleAr: 'I go to school every day.' },
    { english: 'Teacher', arabic: 'Profesor/Profesora', example: 'El profesor es amable.', exampleAr: 'The teacher is kind.' },
    { english: 'Student', arabic: 'Estudiante', example: 'Soy estudiante.', exampleAr: 'I am a student.' },
    { english: 'Class', arabic: 'Clase', example: 'Mi clase tiene 20 estudiantes.', exampleAr: 'My class has 20 students.' },
    { english: 'Classroom', arabic: 'Aula', example: 'El aula es grande.', exampleAr: 'The classroom is big.' },
    { english: 'Book', arabic: 'Libro', example: 'Leo el libro.', exampleAr: 'I read the book.' },
    { english: 'Notebook', arabic: 'Cuaderno', example: 'Escribe en tu cuaderno.', exampleAr: 'Write in your notebook.' },
    { english: 'Pen', arabic: 'Bolígrafo', example: 'Necesito un bolígrafo.', exampleAr: 'I need a pen.' },
    { english: 'Pencil', arabic: 'Lápiz', example: 'Usa un lápiz para dibujar.', exampleAr: 'Use a pencil to draw.' },
    { english: 'Desk', arabic: 'Escritorio', example: 'El libro está en mi escritorio.', exampleAr: 'The book is on my desk.' },
  ],
  sentences: [
    { english: 'I go to school at 7 AM.', arabic: 'Voy a la escuela a las 7 de la mañana.' },
    { english: 'My teacher is very good.', arabic: 'Mi profesor es muy bueno.' },
    { english: 'We learn Spanish at school.', arabic: 'Aprendemos español en la escuela.' },
    { english: 'I have many books.', arabic: 'Tengo muchos libros.' },
    { english: 'The students are in the classroom.', arabic: 'Los estudiantes están en el aula.' },
    { english: 'Please give me a pen.', arabic: 'Por favor, dame un bolígrafo.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Teacher" in Spanish?', data: { options: ['Profesor', 'Estudiante', 'Director', 'Conductor'], correct: 0 } },
    { type: 'mcq', promptAr: 'Where do students study?', data: { options: ['Escuela', 'Hospital', 'Banco', 'Restaurante'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Soy ___. (student)', data: { answer: 'estudiante', hint: 'A person who studies' } },
    { type: 'translation', promptAr: 'Translate to Spanish: Book', data: { answer: 'Libro', alternatives: ['libro'] } },
    { type: 'reorder', promptAr: 'Arrange: a / Voy / la / escuela', data: { words: ['Voy', 'a', 'la', 'escuela'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'What is the difference between "bolígrafo" and "lápiz"?', data: { options: ['Pen vs pencil', 'Same thing', 'Book vs notebook', 'Desk vs chair'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Escribe en tu ___.', data: { answer: 'cuaderno' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Teacher', arabic: 'Profesor' }, { english: 'Student', arabic: 'Estudiante' }, { english: 'Book', arabic: 'Libro' }, { english: 'Pen', arabic: 'Bolígrafo' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Classroom" in Spanish?', data: { options: ['Aula', 'Escuela', 'Biblioteca', 'Patio'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: I go to school', data: { answer: 'Voy a la escuela', alternatives: ['Yo voy a la escuela'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: El ___ está en mi escritorio.', data: { answer: 'libro' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: un / Necesito / bolígrafo', data: { words: ['Necesito', 'un', 'bolígrafo'], correctOrder: [0, 1, 2] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: My teacher is good', data: { answer: 'Mi profesor es bueno', alternatives: ['Mi profesora es buena'] }, points: 25 },
  ]
};

export const A1_U4_L2: LessonContent = {
  lessonId: 'A1-u04-l02', passingScore: 70,
  vocab: [
    { english: 'Learn', arabic: 'Aprender', example: 'Aprendo español.', exampleAr: 'I learn Spanish.' },
    { english: 'Study', arabic: 'Estudiar', example: 'Estudio cada día.', exampleAr: 'I study every day.' },
    { english: 'Read', arabic: 'Leer', example: 'Leo libros.', exampleAr: 'I read books.' },
    { english: 'Write', arabic: 'Escribir', example: 'Ella escribe en su cuaderno.', exampleAr: 'She writes in her notebook.' },
    { english: 'Listen', arabic: 'Escuchar', example: 'Escucha al profesor.', exampleAr: 'Listen to the teacher.' },
    { english: 'Speak', arabic: 'Hablar', example: 'Habla español conmigo.', exampleAr: 'Speak Spanish with me.' },
    { english: 'Ask', arabic: 'Preguntar', example: 'Pregunta al profesor.', exampleAr: 'Ask the teacher.' },
    { english: 'Answer', arabic: 'Responder / Contestar', example: 'Contesta la pregunta.', exampleAr: 'Answer the question.' },
    { english: 'Understand', arabic: 'Entender / Comprender', example: 'Entiendo español.', exampleAr: 'I understand Spanish.' },
    { english: 'Practice', arabic: 'Practicar', example: 'Practica cada día.', exampleAr: 'Practice every day.' },
  ],
  sentences: [
    { english: 'I learn new words every day.', arabic: 'Aprendo palabras nuevas cada día.' },
    { english: 'Please read the sentence.', arabic: 'Por favor, lee la oración.' },
    { english: 'Listen and repeat after me.', arabic: 'Escucha y repite después de mí.' },
    { english: 'Can you speak Spanish?', arabic: '¿Puedes hablar español?' },
    { english: 'I don\'t understand this word.', arabic: 'No entiendo esta palabra.' },
    { english: 'Practice makes perfect.', arabic: 'La práctica hace al maestro.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Learn" in Spanish?', data: { options: ['Aprender', 'Enseñar', 'Leer', 'Escribir'], correct: 0 } },
    { type: 'mcq', promptAr: 'What is "Listen" in Spanish?', data: { options: ['Escuchar', 'Hablar', 'Preguntar', 'Contestar'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: ___ español cada día.', data: { answer: 'Estudio', hint: 'I study' } },
    { type: 'translation', promptAr: 'Translate to Spanish: Read the book', data: { answer: 'Lee el libro', alternatives: ['Leer el libro'] } },
    { type: 'reorder', promptAr: 'Arrange: la / Contesta / pregunta', data: { words: ['Contesta', 'la', 'pregunta'], correctOrder: [0, 1, 2] } },
    { type: 'mcq', promptAr: 'What is the opposite of "Preguntar"?', data: { options: ['Contestar', 'Escuchar', 'Hablar', 'Leer'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: ___ al profesor.', data: { answer: 'Escucha' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Read', arabic: 'Leer' }, { english: 'Write', arabic: 'Escribir' }, { english: 'Speak', arabic: 'Hablar' }, { english: 'Listen', arabic: 'Escuchar' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Understand" in Spanish?', data: { options: ['Entender', 'Aprender', 'Estudiar', 'Leer'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: I learn Spanish', data: { answer: 'Aprendo español', alternatives: ['Yo aprendo español'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: ___ cada día.', data: { answer: 'Practica' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: español / Habla / conmigo', data: { words: ['Habla', 'español', 'conmigo'], correctOrder: [0, 1, 2] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: I don\'t understand', data: { answer: 'No entiendo', alternatives: ['no entiendo'] }, points: 25 },
  ]
};

export const A1_U4_L3: LessonContent = {
  lessonId: 'A1-u04-l03', passingScore: 70,
  vocab: [
    { english: 'Work', arabic: 'Trabajo / Trabajar', example: 'Trabajo en una oficina.', exampleAr: 'I work in an office.' },
    { english: 'Job', arabic: 'Trabajo / Empleo', example: '¿Cuál es tu trabajo?', exampleAr: 'What is your job?' },
    { english: 'Office', arabic: 'Oficina', example: 'La oficina es grande.', exampleAr: 'The office is big.' },
    { english: 'Doctor', arabic: 'Doctor/Doctora / Médico', example: 'Él es doctor.', exampleAr: 'He is a doctor.' },
    { english: 'Engineer', arabic: 'Ingeniero/Ingeniera', example: 'Ella es ingeniera.', exampleAr: 'She is an engineer.' },
    { english: 'Nurse', arabic: 'Enfermero/Enfermera', example: 'La enfermera ayuda a los pacientes.', exampleAr: 'The nurse helps patients.' },
    { english: 'Driver', arabic: 'Conductor/Conductora', example: 'Él es conductor de taxi.', exampleAr: 'He is a taxi driver.' },
    { english: 'Manager', arabic: 'Gerente / Director', example: 'Ella es la gerente.', exampleAr: 'She is the manager.' },
    { english: 'Employee', arabic: 'Empleado/Empleada', example: 'Él es un buen empleado.', exampleAr: 'He is a good employee.' },
    { english: 'Company', arabic: 'Empresa / Compañía', example: 'Trabajo en una empresa grande.', exampleAr: 'I work for a big company.' },
  ],
  sentences: [
    { english: 'What do you do?', arabic: '¿A qué te dedicas?' },
    { english: 'I am a doctor.', arabic: 'Soy doctor.' },
    { english: 'She works in a hospital.', arabic: 'Ella trabaja en un hospital.' },
    { english: 'My father is an engineer.', arabic: 'Mi padre es ingeniero.' },
    { english: 'I like my job.', arabic: 'Me gusta mi trabajo.' },
    { english: 'The manager is in the office.', arabic: 'El gerente está en la oficina.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Doctor" in Spanish?', data: { options: ['Doctor', 'Ingeniero', 'Profesor', 'Conductor'], correct: 0 } },
    { type: 'mcq', promptAr: 'Where does a doctor work?', data: { options: ['Hospital', 'Escuela', 'Restaurante', 'Banco'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: ¿Cuál es tu ___?', data: { answer: 'trabajo', hint: 'Job' } },
    { type: 'translation', promptAr: 'Translate to Spanish: I am an engineer', data: { answer: 'Soy ingeniero', alternatives: ['Yo soy ingeniero', 'Soy ingeniera'] } },
    { type: 'reorder', promptAr: 'Arrange: es / Ella / enfermera', data: { words: ['Ella', 'es', 'enfermera'], correctOrder: [0, 1, 2] } },
    { type: 'mcq', promptAr: 'What is "Manager" in Spanish?', data: { options: ['Gerente', 'Empleado', 'Conductor', 'Trabajador'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Trabajo en una ___ grande.', data: { answer: 'empresa' } },
    { type: 'matching', promptAr: 'Match the professions', data: { pairs: [{ english: 'Doctor', arabic: 'Doctor' }, { english: 'Engineer', arabic: 'Ingeniero' }, { english: 'Driver', arabic: 'Conductor' }, { english: 'Nurse', arabic: 'Enfermero' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Employee" in Spanish?', data: { options: ['Empleado', 'Gerente', 'Jefe', 'Cliente'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: My father is a doctor', data: { answer: 'Mi padre es doctor', alternatives: ['Mi papá es doctor', 'Mi padre es médico'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: Ella trabaja en una ___.', data: { answer: 'oficina' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: qué / A / te / dedicas / ¿ / ?', data: { words: ['¿A', 'qué', 'te', 'dedicas', '?'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: I like my job', data: { answer: 'Me gusta mi trabajo', alternatives: ['me gusta mi trabajo'] }, points: 25 },
  ]
};

export const A1_U4_L4: LessonContent = {
  lessonId: 'A1-u04-l04', passingScore: 70,
  vocab: [
    { english: 'Homework', arabic: 'Tarea', example: 'Hago mi tarea.', exampleAr: 'I do my homework.' },
    { english: 'Exam', arabic: 'Examen', example: 'El examen es mañana.', exampleAr: 'The exam is tomorrow.' },
    { english: 'Test', arabic: 'Prueba', example: 'Tenemos una prueba hoy.', exampleAr: 'We have a test today.' },
    { english: 'Grade', arabic: 'Nota / Calificación', example: 'Saqué una buena nota.', exampleAr: 'I got a good grade.' },
    { english: 'Pass', arabic: 'Aprobar', example: 'Aprobé el examen.', exampleAr: 'I passed the exam.' },
    { english: 'Fail', arabic: 'Suspender / Reprobar', example: 'No suspendas la prueba.', exampleAr: 'Don\'t fail the test.' },
    { english: 'Easy', arabic: 'Fácil', example: 'La prueba fue fácil.', exampleAr: 'The test was easy.' },
    { english: 'Difficult', arabic: 'Difícil', example: 'Las matemáticas son difíciles.', exampleAr: 'Math is difficult.' },
    { english: 'Question', arabic: 'Pregunta', example: 'Contesta la pregunta.', exampleAr: 'Answer the question.' },
    { english: 'Lesson', arabic: 'Lección', example: 'Esta es la lección uno.', exampleAr: 'This is lesson one.' },
  ],
  sentences: [
    { english: 'I have to do my homework.', arabic: 'Tengo que hacer mi tarea.' },
    { english: 'The exam was very easy.', arabic: 'El examen fue muy fácil.' },
    { english: 'I passed all my tests.', arabic: 'Aprobé todas mis pruebas.' },
    { english: 'This question is difficult.', arabic: 'Esta pregunta es difícil.' },
    { english: 'What is your grade?', arabic: '¿Cuál es tu nota?' },
    { english: 'Don\'t forget to study the lesson.', arabic: 'No olvides estudiar la lección.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Exam" in Spanish?', data: { options: ['Examen', 'Lección', 'Tarea', 'Pregunta'], correct: 0 } },
    { type: 'mcq', promptAr: 'What is the opposite of "Fácil"?', data: { options: ['Difícil', 'Grande', 'Pequeño', 'Bueno'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Hago mi ___ cada día.', data: { answer: 'tarea' } },
    { type: 'translation', promptAr: 'Translate to Spanish: I passed the exam', data: { answer: 'Aprobé el examen', alternatives: ['Aprobé el exámen'] } },
    { type: 'reorder', promptAr: 'Arrange: examen / El / fácil / es', data: { words: ['El', 'examen', 'es', 'fácil'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'What is the opposite of "Aprobar"?', data: { options: ['Suspender', 'Ganar', 'Perder', 'Intentar'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Contesta la ___.', data: { answer: 'pregunta' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Easy', arabic: 'Fácil' }, { english: 'Difficult', arabic: 'Difícil' }, { english: 'Pass', arabic: 'Aprobar' }, { english: 'Fail', arabic: 'Suspender' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Grade" in Spanish?', data: { options: ['Nota', 'Pregunta', 'Examen', 'Tarea'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: The exam is difficult', data: { answer: 'El examen es difícil', alternatives: ['El exámen es difícil'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: Saqué una buena ___.', data: { answer: 'nota' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: tarea / mi / Hago', data: { words: ['Hago', 'mi', 'tarea'], correctOrder: [0, 1, 2] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: This lesson is easy', data: { answer: 'Esta lección es fácil', alternatives: ['esta lección es fácil'] }, points: 25 },
  ]
};

export const A1_U4_L5: LessonContent = {
  lessonId: 'A1-u04-l05', passingScore: 70,
  vocab: [
    { english: 'Morning', arabic: 'Mañana', example: 'Estudio por la mañana.', exampleAr: 'I study in the morning.' },
    { english: 'Afternoon', arabic: 'Tarde', example: 'La escuela termina por la tarde.', exampleAr: 'School ends in the afternoon.' },
    { english: 'Start', arabic: 'Empezar / Comenzar', example: 'La escuela empieza a las 8.', exampleAr: 'School starts at 8.' },
    { english: 'Finish', arabic: 'Terminar', example: 'El trabajo termina a las 5.', exampleAr: 'Work finishes at 5.' },
    { english: 'Break', arabic: 'Descanso / Recreo', example: 'Tenemos recreo a las 10.', exampleAr: 'We have break at 10.' },
    { english: 'Lunch', arabic: 'Almuerzo', example: 'El almuerzo es a las 12.', exampleAr: 'Lunch is at 12.' },
    { english: 'Late', arabic: 'Tarde (adv.)', example: 'No llegues tarde.', exampleAr: 'Don\'t be late.' },
    { english: 'Early', arabic: 'Temprano', example: 'Llego temprano.', exampleAr: 'I arrive early.' },
    { english: 'Busy', arabic: 'Ocupado/a', example: 'Estoy muy ocupado hoy.', exampleAr: 'I am very busy today.' },
    { english: 'Free', arabic: 'Libre', example: '¿Estás libre ahora?', exampleAr: 'Are you free now?' },
  ],
  sentences: [
    { english: 'I go to school in the morning.', arabic: 'Voy a la escuela por la mañana.' },
    { english: 'School starts at 8 and finishes at 2.', arabic: 'La escuela empieza a las 8 y termina a las 2.' },
    { english: 'I have lunch at noon.', arabic: 'Almuerzo al mediodía.' },
    { english: 'Don\'t be late for class.', arabic: 'No llegues tarde a clase.' },
    { english: 'I am busy in the afternoon.', arabic: 'Estoy ocupado por la tarde.' },
    { english: 'Are you free after school?', arabic: '¿Estás libre después de la escuela?' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Start" in Spanish?', data: { options: ['Empezar', 'Terminar', 'Continuar', 'Parar'], correct: 0 } },
    { type: 'mcq', promptAr: 'What is the opposite of "Tarde" (late)?', data: { options: ['Temprano', 'Lento', 'Rápido', 'Pronto'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: La escuela ___ a las 8.', data: { answer: 'empieza' } },
    { type: 'translation', promptAr: 'Translate to Spanish: I am busy', data: { answer: 'Estoy ocupado', alternatives: ['Estoy ocupada'] } },
    { type: 'reorder', promptAr: 'Arrange: tarde / llegues / No', data: { words: ['No', 'llegues', 'tarde'], correctOrder: [0, 1, 2] } },
    { type: 'mcq', promptAr: 'What is the opposite of "Ocupado"?', data: { options: ['Libre', 'Lleno', 'Vacío', 'Lento'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Tenemos ___ a las 10. (break)', data: { answer: 'recreo' } },
    { type: 'matching', promptAr: 'Match the opposites', data: { pairs: [{ english: 'Start', arabic: 'Finish' }, { english: 'Early', arabic: 'Late' }, { english: 'Busy', arabic: 'Free' }, { english: 'Morning', arabic: 'Afternoon' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Finish" in Spanish?', data: { options: ['Terminar', 'Empezar', 'Continuar', 'Parar'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: I arrive early', data: { answer: 'Llego temprano', alternatives: ['Yo llego temprano'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: ¿Estás ___ ahora? (free)', data: { answer: 'libre' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: a / empieza / La / las / escuela / 8', data: { words: ['La', 'escuela', 'empieza', 'a', 'las', '8'], correctOrder: [0, 1, 2, 3, 4, 5] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: I am busy in the afternoon', data: { answer: 'Estoy ocupado por la tarde', alternatives: ['Estoy ocupada por la tarde'] }, points: 25 },
  ]
};

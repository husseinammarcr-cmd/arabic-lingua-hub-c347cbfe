// Complete A1 Lesson Content Data — Spanish for English Speakers
// Structure: vocab[], sentences[], exercises[], quiz[] for each lesson
// Note: Field names like 'arabic', 'promptAr', 'exampleAr' are kept for backward
// compatibility but now contain Spanish content instead of Arabic.

export interface VocabItem {
  english: string;
  arabic: string;
  example?: string;
  exampleAr?: string;
}

export interface SentenceItem {
  english: string;
  arabic: string;
}

export interface ExerciseItem {
  type: 'mcq' | 'fill_blank' | 'reorder' | 'matching' | 'translation';
  promptAr: string;
  promptEn?: string;
  data: {
    options?: string[];
    correct?: number;
    answer?: string;
    alternatives?: string[];
    words?: string[];
    correctOrder?: number[];
    hint?: string;
    pairs?: { english: string; arabic: string }[];
  };
}

export interface QuizItem extends ExerciseItem {
  points: number;
}

export interface LessonContent {
  lessonId: string;
  vocab: VocabItem[];
  sentences: SentenceItem[];
  exercises: ExerciseItem[];
  quiz: QuizItem[];
  passingScore: number;
}

// ==========================================
// UNIT 1: Greetings & Introductions
// ==========================================

export const A1_U1_L1: LessonContent = {
  lessonId: 'A1-u01-l01',
  passingScore: 70,
  vocab: [
    { english: 'Hello', arabic: 'Hola', example: '¡Hola! ¿Cómo estás?', exampleAr: 'Hello! How are you?' },
    { english: 'Hi', arabic: 'Hola', example: '¡Hola, amigo!', exampleAr: 'Hi, friend!' },
    { english: 'Good morning', arabic: 'Buenos días', example: 'Buenos días, profesor.', exampleAr: 'Good morning, teacher.' },
    { english: 'Good afternoon', arabic: 'Buenas tardes', example: 'Buenas tardes a todos.', exampleAr: 'Good afternoon, everyone.' },
    { english: 'Good evening', arabic: 'Buenas noches', example: 'Buenas noches, señor.', exampleAr: 'Good evening, sir.' },
    { english: 'Good night', arabic: 'Buenas noches', example: 'Buenas noches, duerme bien.', exampleAr: 'Good night, sleep well.' },
    { english: 'Goodbye', arabic: 'Adiós', example: 'Adiós, hasta mañana.', exampleAr: 'Goodbye, see you tomorrow.' },
    { english: 'Bye', arabic: 'Chao', example: '¡Chao! ¡Cuídate!', exampleAr: 'Bye! Take care.' },
    { english: 'See you later', arabic: 'Hasta luego', example: '¡Hasta luego!', exampleAr: 'See you later!' },
    { english: 'Welcome', arabic: 'Bienvenido', example: 'Bienvenido a nuestra casa.', exampleAr: 'Welcome to our home.' },
  ],
  sentences: [
    { english: 'Hello! How are you?', arabic: '¡Hola! ¿Cómo estás?' },
    { english: 'Good morning. I am fine, thank you.', arabic: 'Buenos días. Estoy bien, gracias.' },
    { english: 'Nice to meet you.', arabic: 'Mucho gusto.' },
    { english: 'Goodbye! See you tomorrow.', arabic: '¡Adiós! ¡Hasta mañana!' },
    { english: 'Good night. Sleep well.', arabic: 'Buenas noches. Duerme bien.' },
    { english: 'Welcome to my house.', arabic: 'Bienvenido a mi casa.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'What is the Spanish word for "Hello"?',
      data: { options: ['Hola', 'Adiós', 'Gracias', 'Por favor'], correct: 0 }
    },
    {
      type: 'mcq',
      promptAr: 'How do you say "Good morning" in Spanish?',
      data: { options: ['Buenos días', 'Buenas noches', 'Buenas tardes', 'Adiós'], correct: 0 }
    },
    {
      type: 'matching',
      promptAr: 'Match the English words with their Spanish translations',
      data: {
        pairs: [
          { english: 'Hello', arabic: 'Hola' },
          { english: 'Goodbye', arabic: 'Adiós' },
          { english: 'Welcome', arabic: 'Bienvenido' },
          { english: 'Good night', arabic: 'Buenas noches' },
        ]
      }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Buenos ___! (Good morning)',
      data: { answer: 'días', alternatives: ['dias'], hint: 'Starts with D' }
    },
    {
      type: 'reorder',
      promptAr: 'Arrange the words: estás / Cómo / ¿ / ?',
      data: { words: ['¿Cómo', 'estás', '?'], correctOrder: [0, 1, 2] }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Hello',
      data: { answer: 'Hola', alternatives: ['hola'] }
    },
    {
      type: 'mcq',
      promptAr: 'What do you say before going to sleep?',
      data: { options: ['Buenas noches', 'Buenos días', 'Hola', 'Bienvenido'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Mucho ___! (Nice to meet you)',
      data: { answer: 'gusto', hint: 'Means "pleasure"' }
    },
  ],
  quiz: [
    {
      type: 'mcq',
      promptAr: 'What does "Buenas tardes" mean?',
      data: { options: ['Good afternoon', 'Good morning', 'Good night', 'Goodbye'], correct: 0 },
      points: 10
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Goodbye',
      data: { answer: 'Adiós', alternatives: ['Adios', 'adiós', 'adios', 'Chao'] },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ___ gusto (Nice to meet you)',
      data: { answer: 'Mucho', alternatives: ['mucho'] },
      points: 15
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: días / Buenos / !',
      data: { words: ['¡Buenos', 'días', '!'], correctOrder: [0, 1, 2] },
      points: 20
    },
    {
      type: 'mcq',
      promptAr: 'What is the appropriate response to "¿Cómo estás?"',
      data: { options: ['Estoy bien, gracias', 'Buenos días', 'Adiós', 'Bienvenido'], correct: 0 },
      points: 20
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Welcome',
      data: { answer: 'Bienvenido', alternatives: ['bienvenido'] },
      points: 20
    },
  ]
};

export const A1_U1_L2: LessonContent = {
  lessonId: 'A1-u01-l02',
  passingScore: 70,
  vocab: [
    { english: 'I am', arabic: 'Yo soy / Yo estoy', example: 'Yo soy estudiante.', exampleAr: 'I am a student.' },
    { english: 'You are', arabic: 'Tú eres / Tú estás', example: 'Tú eres mi amigo.', exampleAr: 'You are my friend.' },
    { english: 'He is', arabic: 'Él es / Él está', example: 'Él es profesor.', exampleAr: 'He is a teacher.' },
    { english: 'She is', arabic: 'Ella es / Ella está', example: 'Ella es doctora.', exampleAr: 'She is a doctor.' },
    { english: 'We are', arabic: 'Nosotros somos', example: 'Nosotros somos felices.', exampleAr: 'We are happy.' },
    { english: 'They are', arabic: 'Ellos son / Ellos están', example: 'Ellos son estudiantes.', exampleAr: 'They are students.' },
    { english: 'am/is/are (permanent)', arabic: 'ser', example: 'Yo soy alto.', exampleAr: 'I am tall.' },
    { english: 'am/is/are (temporary)', arabic: 'estar', example: 'Yo estoy feliz.', exampleAr: 'I am happy.' },
    { english: 'not', arabic: 'no', example: 'No soy triste.', exampleAr: 'I am not sad.' },
    { english: 'very', arabic: 'muy', example: 'Estoy muy bien.', exampleAr: 'I am very well.' },
  ],
  sentences: [
    { english: 'I am a student.', arabic: 'Yo soy estudiante.' },
    { english: 'She is my sister.', arabic: 'Ella es mi hermana.' },
    { english: 'We are from Mexico.', arabic: 'Somos de México.' },
    { english: 'He is not here.', arabic: 'Él no está aquí.' },
    { english: 'They are happy today.', arabic: 'Ellos están felices hoy.' },
    { english: 'You are very kind.', arabic: 'Tú eres muy amable.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'Choose the correct verb: Yo ___ estudiante.',
      data: { options: ['soy', 'estoy', 'es', 'eres'], correct: 0 }
    },
    {
      type: 'mcq',
      promptAr: 'Choose the correct verb: Ella ___ feliz.',
      data: { options: ['está', 'soy', 'son', 'somos'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Ellos ___ estudiantes.',
      data: { answer: 'son', hint: 'Use "ser" for permanent traits' }
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: soy / Yo / estudiante',
      data: { words: ['Yo', 'soy', 'estudiante'], correctOrder: [0, 1, 2] }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: I am happy',
      data: { answer: 'Estoy feliz', alternatives: ['Yo estoy feliz', 'estoy feliz'] }
    },
    {
      type: 'mcq',
      promptAr: 'Choose the correct verb: Nosotros ___ amigos.',
      data: { options: ['somos', 'estamos', 'soy', 'son'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Él no ___ aquí.',
      data: { answer: 'está', hint: 'Use "estar" for location' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: She is a doctor',
      data: { answer: 'Ella es doctora', alternatives: ['Ella es una doctora'] }
    },
  ],
  quiz: [
    {
      type: 'mcq',
      promptAr: 'Choose the correct form: Él ___ mi hermano.',
      data: { options: ['es', 'soy', 'son', 'estar'], correct: 0 },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Yo ___ de España.',
      data: { answer: 'soy' },
      points: 15
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: We are friends',
      data: { answer: 'Somos amigos', alternatives: ['Nosotros somos amigos'] },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: es / Ella / profesora',
      data: { words: ['Ella', 'es', 'profesora'], correctOrder: [0, 1, 2] },
      points: 20
    },
    {
      type: 'mcq',
      promptAr: 'Choose the correct form: Ellos no ___ aquí.',
      data: { options: ['están', 'es', 'soy', 'ser'], correct: 0 },
      points: 15
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: You are kind',
      data: { answer: 'Eres amable', alternatives: ['Tú eres amable'] },
      points: 15
    },
  ]
};

export const A1_U1_L3: LessonContent = {
  lessonId: 'A1-u01-l03',
  passingScore: 70,
  vocab: [
    { english: 'Name', arabic: 'Nombre', example: 'Mi nombre es Carlos.', exampleAr: 'My name is Carlos.' },
    { english: 'My', arabic: 'Mi', example: 'Este es mi libro.', exampleAr: 'This is my book.' },
    { english: 'Your', arabic: 'Tu', example: '¿Cuál es tu nombre?', exampleAr: 'What is your name?' },
    { english: 'His', arabic: 'Su (de él)', example: 'Su nombre es Pedro.', exampleAr: 'His name is Pedro.' },
    { english: 'Her', arabic: 'Su (de ella)', example: 'Su nombre es Ana.', exampleAr: 'Her name is Ana.' },
    { english: 'What', arabic: 'Qué / Cuál', example: '¿Qué es esto?', exampleAr: 'What is this?' },
    { english: 'Who', arabic: 'Quién', example: '¿Quién es él?', exampleAr: 'Who is he?' },
    { english: 'This', arabic: 'Este / Esta', example: 'Este es mi amigo.', exampleAr: 'This is my friend.' },
    { english: 'That', arabic: 'Ese / Esa', example: 'Esa es una casa.', exampleAr: 'That is a house.' },
    { english: 'Mr./Mrs.', arabic: 'Señor/Señora', example: 'El señor García está aquí.', exampleAr: 'Mr. García is here.' },
  ],
  sentences: [
    { english: 'My name is Carlos.', arabic: 'Me llamo Carlos.' },
    { english: 'What is your name?', arabic: '¿Cómo te llamas?' },
    { english: 'Nice to meet you, Ana.', arabic: 'Mucho gusto, Ana.' },
    { english: 'This is my friend Pedro.', arabic: 'Este es mi amigo Pedro.' },
    { english: 'Who is that?', arabic: '¿Quién es ese?' },
    { english: 'Her name is María.', arabic: 'Ella se llama María.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'How do you ask someone\'s name in Spanish?',
      data: { options: ['¿Cómo te llamas?', '¿Cómo estás?', '¿Dónde estás?', '¿Quién es él?'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ___ llamo Carlos.',
      data: { answer: 'Me', hint: 'Reflexive pronoun for "I"' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: What is your name?',
      data: { answer: '¿Cómo te llamas?', alternatives: ['Como te llamas', '¿Cuál es tu nombre?'] }
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: llamo / Me / Carlos',
      data: { words: ['Me', 'llamo', 'Carlos'], correctOrder: [0, 1, 2] }
    },
    {
      type: 'mcq',
      promptAr: 'What does "Su nombre" mean?',
      data: { options: ['His/Her name', 'My name', 'Your name', 'Our name'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ___ es mi amigo Pedro.',
      data: { answer: 'Este', hint: 'Means "This"' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Her name is María',
      data: { answer: 'Ella se llama María', alternatives: ['Su nombre es María'] }
    },
    {
      type: 'mcq',
      promptAr: 'What is the correct possessive for a female?',
      data: { options: ['Su (de ella)', 'Mi', 'Tu', 'Su (de él)'], correct: 0 }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: My name is Pedro',
      data: { answer: 'Me llamo Pedro', alternatives: ['Mi nombre es Pedro'] },
      points: 20
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ¿Cuál es ___ nombre? (his)',
      data: { answer: 'su' },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'How do you introduce your friend?',
      data: { options: ['Este es mi amigo', '¿Cómo te llamas?', '¿Cómo estás?', 'Adiós'], correct: 0 },
      points: 15
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: te / Cómo / llamas / ¿ / ?',
      data: { words: ['¿Cómo', 'te', 'llamas', '?'], correctOrder: [0, 1, 2, 3] },
      points: 25
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Who is this?',
      data: { answer: '¿Quién es este?', alternatives: ['¿Quién es?', 'Quien es este'] },
      points: 25
    },
  ]
};

export const A1_U1_L4: LessonContent = {
  lessonId: 'A1-u01-l04',
  passingScore: 70,
  vocab: [
    { english: 'Please', arabic: 'Por favor', example: 'Por favor, ayúdame.', exampleAr: 'Please help me.' },
    { english: 'Thank you', arabic: 'Gracias', example: 'Muchas gracias.', exampleAr: 'Thank you very much.' },
    { english: 'Thanks', arabic: 'Gracias', example: '¡Gracias!', exampleAr: 'Thanks!' },
    { english: "You're welcome", arabic: 'De nada', example: '¡De nada!', exampleAr: "You're welcome!" },
    { english: 'Sorry', arabic: 'Lo siento', example: 'Lo siento, llego tarde.', exampleAr: 'Sorry, I am late.' },
    { english: 'Excuse me', arabic: 'Disculpe / Perdón', example: 'Disculpe, ¿dónde está el banco?', exampleAr: 'Excuse me, where is the bank?' },
    { english: 'Yes', arabic: 'Sí', example: 'Sí, entiendo.', exampleAr: 'Yes, I understand.' },
    { english: 'No', arabic: 'No', example: 'No, gracias.', exampleAr: 'No, thank you.' },
    { english: 'OK', arabic: 'Vale / Está bien', example: 'Vale, lo haré.', exampleAr: 'OK, I will do it.' },
    { english: 'Help', arabic: 'Ayuda', example: 'Necesito ayuda.', exampleAr: 'I need help.' },
  ],
  sentences: [
    { english: 'Please open the door.', arabic: 'Por favor, abre la puerta.' },
    { english: 'Thank you for your help.', arabic: 'Gracias por tu ayuda.' },
    { english: "Sorry, I don't understand.", arabic: 'Lo siento, no entiendo.' },
    { english: 'Excuse me, can you help me?', arabic: 'Disculpe, ¿puede ayudarme?' },
    { english: "You're welcome!", arabic: '¡De nada!' },
    { english: 'No problem.', arabic: 'No hay problema.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'What do you say when someone helps you?',
      data: { options: ['Gracias', 'Lo siento', 'Adiós', 'Hola'], correct: 0 }
    },
    {
      type: 'mcq',
      promptAr: 'What do you say to be polite when asking for something?',
      data: { options: ['Por favor', 'Lo siento', 'Gracias', 'Sí'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ___, ¿dónde está la estación?',
      data: { answer: 'Disculpe', hint: 'Means "Excuse me"' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Thank you very much',
      data: { answer: 'Muchas gracias', alternatives: ['muchas gracias'] }
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: por / Gracias / tu / ayuda',
      data: { words: ['Gracias', 'por', 'tu', 'ayuda'], correctOrder: [0, 1, 2, 3] }
    },
    {
      type: 'mcq',
      promptAr: 'What is the response to "Gracias"?',
      data: { options: ['De nada', 'Gracias', 'Lo siento', 'Por favor'], correct: 0 }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Sorry',
      data: { answer: 'Lo siento', alternatives: ['lo siento', 'Perdón', 'perdón'] }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: No hay ___. (No problem)',
      data: { answer: 'problema', hint: 'Means "problem"' }
    },
  ],
  quiz: [
    {
      type: 'mcq',
      promptAr: 'What does "Disculpe" mean?',
      data: { options: ['Excuse me', 'Thank you', 'Sorry', 'Please'], correct: 0 },
      points: 15
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Please help me',
      data: { answer: 'Por favor, ayúdame', alternatives: ['Por favor ayudame', 'Ayúdame por favor'] },
      points: 20
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ¡De ___!',
      data: { answer: 'nada' },
      points: 15
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: siento / Lo / tarde / llego',
      data: { words: ['Lo', 'siento,', 'llego', 'tarde'], correctOrder: [0, 1, 2, 3] },
      points: 25
    },
    {
      type: 'mcq',
      promptAr: 'What is the opposite of "Sí"?',
      data: { options: ['No', 'Vale', 'Por favor', 'Gracias'], correct: 0 },
      points: 10
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: I don\'t understand',
      data: { answer: 'No entiendo', alternatives: ['no entiendo'] },
      points: 15
    },
  ]
};

export const A1_U1_L5: LessonContent = {
  lessonId: 'A1-u01-l05',
  passingScore: 70,
  vocab: [
    { english: 'Where', arabic: 'Dónde', example: '¿De dónde eres?', exampleAr: 'Where are you from?' },
    { english: 'From', arabic: 'De', example: 'Soy de México.', exampleAr: 'I am from Mexico.' },
    { english: 'Country', arabic: 'País', example: 'España es un país bonito.', exampleAr: 'Spain is a beautiful country.' },
    { english: 'City', arabic: 'Ciudad', example: 'Vivo en una ciudad grande.', exampleAr: 'I live in a big city.' },
    { english: 'Live', arabic: 'Vivir', example: 'Vivo en Madrid.', exampleAr: 'I live in Madrid.' },
    { english: 'Speak', arabic: 'Hablar', example: 'Hablo español.', exampleAr: 'I speak Spanish.' },
    { english: 'Language', arabic: 'Idioma', example: 'El español es un idioma.', exampleAr: 'Spanish is a language.' },
    { english: 'Spanish', arabic: 'Español', example: 'Hablo español.', exampleAr: 'I speak Spanish.' },
    { english: 'English', arabic: 'Inglés', example: 'Estoy aprendiendo inglés.', exampleAr: 'I am learning English.' },
    { english: 'Learn', arabic: 'Aprender', example: 'Quiero aprender.', exampleAr: 'I want to learn.' },
  ],
  sentences: [
    { english: 'Where are you from?', arabic: '¿De dónde eres?' },
    { english: 'I am from the United States.', arabic: 'Soy de Estados Unidos.' },
    { english: 'I live in Barcelona.', arabic: 'Vivo en Barcelona.' },
    { english: 'I speak English and Spanish.', arabic: 'Hablo inglés y español.' },
    { english: 'What language do you speak?', arabic: '¿Qué idioma hablas?' },
    { english: 'I am learning Spanish.', arabic: 'Estoy aprendiendo español.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'How do you ask someone where they\'re from in Spanish?',
      data: { options: ['¿De dónde eres?', '¿Cómo te llamas?', '¿Cómo estás?', '¿Quién eres?'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Soy ___ México.',
      data: { answer: 'de', hint: 'Means "from"' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: I live in Madrid',
      data: { answer: 'Vivo en Madrid', alternatives: ['Yo vivo en Madrid'] }
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: dónde / De / eres / ¿ / ?',
      data: { words: ['¿De', 'dónde', 'eres', '?'], correctOrder: [0, 1, 2, 3] }
    },
    {
      type: 'mcq',
      promptAr: 'What does "Hablo español" mean?',
      data: { options: ['I speak Spanish', 'I learn Spanish', 'I like Spanish', 'I write Spanish'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ___ en una ciudad grande.',
      data: { answer: 'Vivo', hint: 'Means "I live"' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: I am learning Spanish',
      data: { answer: 'Estoy aprendiendo español', alternatives: ['Aprendo español'] }
    },
    {
      type: 'mcq',
      promptAr: 'What does "país" mean?',
      data: { options: ['Country', 'City', 'Language', 'Name'], correct: 0 }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Where are you from?',
      data: { answer: '¿De dónde eres?', alternatives: ['De donde eres'] },
      points: 20
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ___ español e inglés.',
      data: { answer: 'Hablo' },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'What does "Soy de Colombia" mean?',
      data: { options: ['I am from Colombia', 'I live in Colombia', 'I like Colombia', 'I visit Colombia'], correct: 0 },
      points: 15
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: en / Vivo / Barcelona',
      data: { words: ['Vivo', 'en', 'Barcelona'], correctOrder: [0, 1, 2] },
      points: 25
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: I speak three languages',
      data: { answer: 'Hablo tres idiomas', alternatives: ['Yo hablo tres idiomas'] },
      points: 25
    },
  ]
};

// ==========================================
// UNIT 2: Numbers & Time
// ==========================================

export const A1_U2_L1: LessonContent = {
  lessonId: 'A1-u02-l01',
  passingScore: 70,
  vocab: [
    { english: 'One', arabic: 'Uno', example: 'Tengo un libro.', exampleAr: 'I have one book.' },
    { english: 'Two', arabic: 'Dos', example: 'Tengo dos hermanos.', exampleAr: 'I have two brothers.' },
    { english: 'Three', arabic: 'Tres', example: 'Tres manzanas.', exampleAr: 'Three apples.' },
    { english: 'Four', arabic: 'Cuatro', example: 'Cuatro sillas.', exampleAr: 'Four chairs.' },
    { english: 'Five', arabic: 'Cinco', example: 'Cinco dedos.', exampleAr: 'Five fingers.' },
    { english: 'Six', arabic: 'Seis', example: 'Seis días.', exampleAr: 'Six days.' },
    { english: 'Seven', arabic: 'Siete', example: 'Siete colores.', exampleAr: 'Seven colors.' },
    { english: 'Eight', arabic: 'Ocho', example: 'Ocho horas.', exampleAr: 'Eight hours.' },
    { english: 'Nine', arabic: 'Nueve', example: 'Nueve estudiantes.', exampleAr: 'Nine students.' },
    { english: 'Ten', arabic: 'Diez', example: 'Diez preguntas.', exampleAr: 'Ten questions.' },
  ],
  sentences: [
    { english: 'I am twenty years old.', arabic: 'Tengo veinte años.' },
    { english: 'There are five people here.', arabic: 'Hay cinco personas aquí.' },
    { english: 'I have three sisters.', arabic: 'Tengo tres hermanas.' },
    { english: 'She has two cats.', arabic: 'Ella tiene dos gatos.' },
    { english: 'We need six chairs.', arabic: 'Necesitamos seis sillas.' },
    { english: 'Count from one to ten.', arabic: 'Cuenta de uno a diez.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'What is "Five" in Spanish?',
      data: { options: ['Cinco', 'Cuatro', 'Seis', 'Siete'], correct: 0 }
    },
    {
      type: 'mcq',
      promptAr: 'How do you say "Three" in Spanish?',
      data: { options: ['Tres', 'Trece', 'Treinta', 'Diez'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Uno, Dos, ___',
      data: { answer: 'Tres', alternatives: ['tres'] }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Ten',
      data: { answer: 'Diez', alternatives: ['diez'] }
    },
    {
      type: 'mcq',
      promptAr: 'What number comes after "Siete"?',
      data: { options: ['Ocho', 'Nueve', 'Seis', 'Diez'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Seis, Siete, ___, Nueve',
      data: { answer: 'Ocho', alternatives: ['ocho'] }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: I have four books',
      data: { answer: 'Tengo cuatro libros', alternatives: ['Yo tengo cuatro libros'] }
    },
    {
      type: 'mcq',
      promptAr: 'What is "Nine" in Spanish?',
      data: { options: ['Nueve', 'Ocho', 'Diez', 'Siete'], correct: 0 }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: One',
      data: { answer: 'Uno', alternatives: ['uno'] },
      points: 10
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Cuatro, ___, Seis',
      data: { answer: 'Cinco', alternatives: ['cinco'] },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'What is "Two" in Spanish?',
      data: { options: ['Dos', 'Uno', 'Tres', 'Diez'], correct: 0 },
      points: 15
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Eight',
      data: { answer: 'Ocho', alternatives: ['ocho'] },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: tres / Tengo / libros',
      data: { words: ['Tengo', 'tres', 'libros'], correctOrder: [0, 1, 2] },
      points: 20
    },
    {
      type: 'mcq',
      promptAr: 'What number comes after "Nueve"?',
      data: { options: ['Diez', 'Ocho', 'Once', 'Siete'], correct: 0 },
      points: 20
    },
  ]
};

export const A1_U2_L2: LessonContent = {
  lessonId: 'A1-u02-l02',
  passingScore: 70,
  vocab: [
    { english: 'Eleven', arabic: 'Once' },
    { english: 'Twelve', arabic: 'Doce' },
    { english: 'Thirteen', arabic: 'Trece' },
    { english: 'Fourteen', arabic: 'Catorce' },
    { english: 'Fifteen', arabic: 'Quince' },
    { english: 'Sixteen', arabic: 'Dieciséis' },
    { english: 'Seventeen', arabic: 'Diecisiete' },
    { english: 'Eighteen', arabic: 'Dieciocho' },
    { english: 'Nineteen', arabic: 'Diecinueve' },
    { english: 'Twenty', arabic: 'Veinte' },
  ],
  sentences: [
    { english: 'I am fifteen years old.', arabic: 'Tengo quince años.' },
    { english: 'There are twenty students.', arabic: 'Hay veinte estudiantes.' },
    { english: 'The book has twelve chapters.', arabic: 'El libro tiene doce capítulos.' },
    { english: 'She is sixteen years old.', arabic: 'Ella tiene dieciséis años.' },
    { english: 'We have eleven players.', arabic: 'Tenemos once jugadores.' },
    { english: 'The month has thirty days.', arabic: 'El mes tiene treinta días.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'What is "Twelve" in Spanish?',
      data: { options: ['Doce', 'Once', 'Veinte', 'Trece'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Diez, Once, ___',
      data: { answer: 'Doce', alternatives: ['doce'] }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Fifteen',
      data: { answer: 'Quince', alternatives: ['quince'] }
    },
    {
      type: 'mcq',
      promptAr: 'How do you write 20 in Spanish?',
      data: { options: ['Veinte', 'Doce', 'Viente', 'Vinte'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Dieciocho, Diecinueve, ___',
      data: { answer: 'Veinte', alternatives: ['veinte'] }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: I am sixteen years old',
      data: { answer: 'Tengo dieciséis años', alternatives: ['Tengo dieciseis años'] }
    },
    {
      type: 'mcq',
      promptAr: 'What number comes before "Catorce"?',
      data: { options: ['Trece', 'Quince', 'Doce', 'Once'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Dieciséis, Diecisiete, ___',
      data: { answer: 'Dieciocho', alternatives: ['dieciocho'] }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Twenty',
      data: { answer: 'Veinte', alternatives: ['veinte'] },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Trece, ___, Quince',
      data: { answer: 'Catorce', alternatives: ['catorce'] },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'What is "Seventeen" in Spanish?',
      data: { options: ['Diecisiete', 'Dieciséis', 'Dieciocho', 'Diecinueve'], correct: 0 },
      points: 20
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Eleven',
      data: { answer: 'Once', alternatives: ['once'] },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: dieciocho / Tengo / años',
      data: { words: ['Tengo', 'dieciocho', 'años'], correctOrder: [0, 1, 2] },
      points: 30
    },
  ]
};

export const A1_U2_L3: LessonContent = {
  lessonId: 'A1-u02-l03',
  passingScore: 70,
  vocab: [
    { english: 'Time', arabic: 'Hora / Tiempo', example: '¿Qué hora es?', exampleAr: 'What time is it?' },
    { english: 'Hour', arabic: 'Hora', example: 'Una hora.', exampleAr: 'One hour.' },
    { english: 'Minute', arabic: 'Minuto', example: 'Cinco minutos.', exampleAr: 'Five minutes.' },
    { english: "O'clock", arabic: 'En punto', example: 'Son las tres en punto.', exampleAr: "It is three o'clock." },
    { english: 'Half', arabic: 'Media', example: 'Son las dos y media.', exampleAr: 'It is half past two.' },
    { english: 'Quarter', arabic: 'Cuarto', example: 'Son las cinco y cuarto.', exampleAr: 'It is quarter past five.' },
    { english: 'Morning', arabic: 'Mañana', example: 'Por la mañana.', exampleAr: 'In the morning.' },
    { english: 'Afternoon', arabic: 'Tarde', example: 'Por la tarde.', exampleAr: 'In the afternoon.' },
    { english: 'Evening', arabic: 'Noche', example: 'Por la noche.', exampleAr: 'In the evening.' },
    { english: 'Night', arabic: 'Noche', example: 'De noche.', exampleAr: 'At night.' },
  ],
  sentences: [
    { english: 'What time is it?', arabic: '¿Qué hora es?' },
    { english: "It is eight o'clock.", arabic: 'Son las ocho en punto.' },
    { english: 'It is half past nine.', arabic: 'Son las nueve y media.' },
    { english: 'I wake up at seven.', arabic: 'Me despierto a las siete.' },
    { english: 'See you at three in the afternoon.', arabic: 'Te veo a las tres de la tarde.' },
    { english: 'I sleep at ten at night.', arabic: 'Duermo a las diez de la noche.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'How do you ask the time in Spanish?',
      data: { options: ['¿Qué hora es?', '¿Dónde es?', '¿Cómo es?', '¿Cuánto es?'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Son las tres en ___. (o\'clock)',
      data: { answer: 'punto', alternatives: ['Punto'] }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: It is five o\'clock',
      data: { answer: 'Son las cinco en punto', alternatives: ['Son las cinco'] }
    },
    {
      type: 'mcq',
      promptAr: 'What does "las dos y media" mean?',
      data: { options: ['Half past two', 'Quarter past two', 'Two o\'clock', 'Quarter to two'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Me despierto por la ___. (morning)',
      data: { answer: 'mañana' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: What time is it?',
      data: { answer: '¿Qué hora es?', alternatives: ['Que hora es'] }
    },
    {
      type: 'mcq',
      promptAr: 'What does "cuarto" mean in telling time?',
      data: { options: ['Quarter', 'Half', 'Hour', 'Minute'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Duermo de ___. (night)',
      data: { answer: 'noche' }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: It is half past seven',
      data: { answer: 'Son las siete y media', alternatives: ['son las siete y media'] },
      points: 20
    },
    {
      type: 'mcq',
      promptAr: 'What does "por la tarde" mean?',
      data: { options: ['In the afternoon', 'In the morning', 'In the evening', 'At night'], correct: 0 },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Son las tres y ___.',
      data: { answer: 'cuarto', hint: 'Quarter past' },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: hora / Qué / es / ¿ / ?',
      data: { words: ['¿Qué', 'hora', 'es', '?'], correctOrder: [0, 1, 2, 3] },
      points: 20
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: I wake up at six in the morning',
      data: { answer: 'Me despierto a las seis de la mañana', alternatives: ['Me despierto a las 6 de la mañana'] },
      points: 25
    },
  ]
};

export const A1_U2_L4: LessonContent = {
  lessonId: 'A1-u02-l04',
  passingScore: 70,
  vocab: [
    { english: 'Sunday', arabic: 'Domingo' },
    { english: 'Monday', arabic: 'Lunes' },
    { english: 'Tuesday', arabic: 'Martes' },
    { english: 'Wednesday', arabic: 'Miércoles' },
    { english: 'Thursday', arabic: 'Jueves' },
    { english: 'Friday', arabic: 'Viernes' },
    { english: 'Saturday', arabic: 'Sábado' },
    { english: 'Today', arabic: 'Hoy' },
    { english: 'Tomorrow', arabic: 'Mañana' },
    { english: 'Yesterday', arabic: 'Ayer' },
  ],
  sentences: [
    { english: 'Today is Monday.', arabic: 'Hoy es lunes.' },
    { english: 'Tomorrow is Tuesday.', arabic: 'Mañana es martes.' },
    { english: 'I work from Monday to Friday.', arabic: 'Trabajo de lunes a viernes.' },
    { english: 'Saturday is a holiday.', arabic: 'El sábado es festivo.' },
    { english: 'What day is today?', arabic: '¿Qué día es hoy?' },
    { english: 'Yesterday was Sunday.', arabic: 'Ayer fue domingo.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'What is "Monday" in Spanish?',
      data: { options: ['Lunes', 'Martes', 'Domingo', 'Miércoles'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Domingo, ___, Martes',
      data: { answer: 'Lunes' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Today is Thursday',
      data: { answer: 'Hoy es jueves', alternatives: ['hoy es jueves'] }
    },
    {
      type: 'mcq',
      promptAr: 'What day comes after "Viernes"?',
      data: { options: ['Sábado', 'Domingo', 'Jueves', 'Lunes'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ___ es jueves. (Tomorrow)',
      data: { answer: 'Mañana' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Friday',
      data: { answer: 'Viernes', alternatives: ['viernes'] }
    },
    {
      type: 'mcq',
      promptAr: 'What does "Ayer" mean?',
      data: { options: ['Yesterday', 'Today', 'Tomorrow', 'Week'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Viernes, Sábado, ___',
      data: { answer: 'Domingo' }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: Wednesday',
      data: { answer: 'Miércoles', alternatives: ['miércoles', 'miercoles'] },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'What day comes before "Jueves"?',
      data: { options: ['Miércoles', 'Viernes', 'Martes', 'Sábado'], correct: 0 },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: ___ fue domingo. (Yesterday)',
      data: { answer: 'Ayer' },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: día / Qué / es / hoy / ¿ / ?',
      data: { words: ['¿Qué', 'día', 'es', 'hoy', '?'], correctOrder: [0, 1, 2, 3, 4] },
      points: 25
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: I work on Saturday',
      data: { answer: 'Trabajo el sábado', alternatives: ['Yo trabajo el sábado'] },
      points: 25
    },
  ]
};

export const A1_U2_L5: LessonContent = {
  lessonId: 'A1-u02-l05',
  passingScore: 70,
  vocab: [
    { english: 'January', arabic: 'Enero' },
    { english: 'February', arabic: 'Febrero' },
    { english: 'March', arabic: 'Marzo' },
    { english: 'April', arabic: 'Abril' },
    { english: 'May', arabic: 'Mayo' },
    { english: 'June', arabic: 'Junio' },
    { english: 'Month', arabic: 'Mes' },
    { english: 'Year', arabic: 'Año' },
    { english: 'Birthday', arabic: 'Cumpleaños' },
    { english: 'Date', arabic: 'Fecha' },
  ],
  sentences: [
    { english: 'My birthday is in January.', arabic: 'Mi cumpleaños es en enero.' },
    { english: 'There are twelve months in a year.', arabic: 'Hay doce meses en un año.' },
    { english: 'What is the date today?', arabic: '¿Cuál es la fecha de hoy?' },
    { english: 'It is March 15th.', arabic: 'Es el quince de marzo.' },
    { english: 'Summer is in June.', arabic: 'El verano es en junio.' },
    { english: 'The new year starts in January.', arabic: 'El año nuevo empieza en enero.' },
  ],
  exercises: [
    {
      type: 'mcq',
      promptAr: 'What is the first month of the year in Spanish?',
      data: { options: ['Enero', 'Febrero', 'Marzo', 'Diciembre'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Enero, Febrero, ___',
      data: { answer: 'Marzo' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: My birthday is in April',
      data: { answer: 'Mi cumpleaños es en abril', alternatives: ['Mi cumpleanos es en abril'] }
    },
    {
      type: 'mcq',
      promptAr: 'What does "Mes" mean?',
      data: { options: ['Month', 'Year', 'Day', 'Week'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Abril, ___, Junio',
      data: { answer: 'Mayo' }
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: June',
      data: { answer: 'Junio', alternatives: ['junio'] }
    },
    {
      type: 'mcq',
      promptAr: 'How many months are in a year?',
      data: { options: ['Doce', 'Diez', 'Siete', 'Treinta'], correct: 0 }
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Mi ___ es en marzo.',
      data: { answer: 'cumpleaños' }
    },
  ],
  quiz: [
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: February',
      data: { answer: 'Febrero', alternatives: ['febrero'] },
      points: 15
    },
    {
      type: 'mcq',
      promptAr: 'What month comes after "Abril"?',
      data: { options: ['Mayo', 'Junio', 'Marzo', 'Julio'], correct: 0 },
      points: 15
    },
    {
      type: 'fill_blank',
      promptAr: 'Complete: Hay doce ___ en un año.',
      data: { answer: 'meses' },
      points: 20
    },
    {
      type: 'reorder',
      promptAr: 'Arrange: cumpleaños / Mi / en / es / mayo',
      data: { words: ['Mi', 'cumpleaños', 'es', 'en', 'mayo'], correctOrder: [0, 1, 2, 3, 4] },
      points: 25
    },
    {
      type: 'translation',
      promptAr: 'Translate to Spanish: What is the date today?',
      data: { answer: '¿Cuál es la fecha de hoy?', alternatives: ['Cual es la fecha de hoy'] },
      points: 25
    },
  ]
};

// Import additional units
import { A1_U3_L1, A1_U3_L2, A1_U3_L3, A1_U3_L4, A1_U3_L5 } from './a1-lessons-unit3';
import { A1_U4_L1, A1_U4_L2, A1_U4_L3, A1_U4_L4, A1_U4_L5 } from './a1-lessons-unit4';
import { A1_U5_L1, A1_U5_L2, A1_U5_L3, A1_U5_L4, A1_U5_L5 } from './a1-lessons-unit5';
import { a1Unit6Lessons } from './a1-lessons-unit6';
import { a1Unit7Lessons } from './a1-lessons-unit7';
import { a1Unit8Lessons } from './a1-lessons-unit8';
import { a1Unit9Lessons } from './a1-lessons-unit9';
import { a1Unit10Lessons } from './a1-lessons-unit10';

// Export all lessons in a map for easy access
export const A1_LESSONS_CONTENT: Record<string, LessonContent> = {
  'A1-u01-l01': A1_U1_L1,
  'A1-u01-l02': A1_U1_L2,
  'A1-u01-l03': A1_U1_L3,
  'A1-u01-l04': A1_U1_L4,
  'A1-u01-l05': A1_U1_L5,
  'A1-u02-l01': A1_U2_L1,
  'A1-u02-l02': A1_U2_L2,
  'A1-u02-l03': A1_U2_L3,
  'A1-u02-l04': A1_U2_L4,
  'A1-u02-l05': A1_U2_L5,
  'A1-u03-l01': A1_U3_L1,
  'A1-u03-l02': A1_U3_L2,
  'A1-u03-l03': A1_U3_L3,
  'A1-u03-l04': A1_U3_L4,
  'A1-u03-l05': A1_U3_L5,
  'A1-u04-l01': A1_U4_L1,
  'A1-u04-l02': A1_U4_L2,
  'A1-u04-l03': A1_U4_L3,
  'A1-u04-l04': A1_U4_L4,
  'A1-u04-l05': A1_U4_L5,
  'A1-u05-l01': A1_U5_L1,
  'A1-u05-l02': A1_U5_L2,
  'A1-u05-l03': A1_U5_L3,
  'A1-u05-l04': A1_U5_L4,
  'A1-u05-l05': A1_U5_L5,
  ...a1Unit6Lessons,
  ...a1Unit7Lessons,
  ...a1Unit8Lessons,
  ...a1Unit9Lessons,
  ...a1Unit10Lessons,
};

// Import A2, B1, B2, and C1 lessons for unified access
import { A2_LESSONS_CONTENT } from './a2-lessons';
import { B1_LESSONS_CONTENT } from './b1-lessons';
import { B2_LESSONS_CONTENT } from './b2-lessons';
import { C1_LESSONS_CONTENT } from './c1-lessons';

// Unified lesson content registry
export const ALL_LESSONS_CONTENT: Record<string, LessonContent> = {
  ...A1_LESSONS_CONTENT,
  ...A2_LESSONS_CONTENT,
  ...B1_LESSONS_CONTENT,
  ...B2_LESSONS_CONTENT,
  ...C1_LESSONS_CONTENT,
};

export function getLessonContent(lessonId: string): LessonContent | undefined {
  return ALL_LESSONS_CONTENT[lessonId];
}

// Complete A1-C2 Spanish Learning Curriculum for English Speakers

export interface CurriculumLesson {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  xpReward: number;
  hasRealExercises?: boolean;
}

export interface CurriculumUnit {
  id: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  icon: string;
  lessons: CurriculumLesson[];
}

export interface CurriculumLevel {
  id: string;
  code: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  color: string;
  units: CurriculumUnit[];
}

// Unit titles per level
const A1_UNITS = [
  { titleAr: 'Saludos y presentaciones', titleEn: 'Greetings & Introductions', icon: 'hand-wave' },
  { titleAr: 'Números y tiempo', titleEn: 'Numbers & Time', icon: 'clock' },
  { titleAr: 'Familia y hogar', titleEn: 'Family & Home', icon: 'home' },
  { titleAr: 'Escuela y trabajo', titleEn: 'School & Work', icon: 'briefcase' },
  { titleAr: 'Comida y bebidas', titleEn: 'Food & Drinks', icon: 'utensils' },
  { titleAr: 'Lugares y direcciones', titleEn: 'Places & Directions', icon: 'map' },
  { titleAr: 'Rutina diaria', titleEn: 'Daily Routine', icon: 'sun' },
  { titleAr: 'Pasatiempos', titleEn: 'Hobbies', icon: 'gamepad' },
  { titleAr: 'De compras', titleEn: 'Shopping', icon: 'shopping-cart' },
  { titleAr: 'Repaso A1', titleEn: 'A1 Review', icon: 'check-circle' },
];

const A2_UNITS = [
  { titleAr: 'Pretérito simple', titleEn: 'Simple Past', icon: 'history' },
  { titleAr: 'Futuro y planes', titleEn: 'Future & Plans', icon: 'calendar' },
  { titleAr: 'Viajes', titleEn: 'Travel', icon: 'plane' },
  { titleAr: 'Salud', titleEn: 'Health', icon: 'heart-pulse' },
  { titleAr: 'Descripciones y comparaciones', titleEn: 'Descriptions & Comparisons', icon: 'scale' },
  { titleAr: 'Teléfono y mensajes', titleEn: 'Phone & Messages', icon: 'phone' },
  { titleAr: 'En el restaurante', titleEn: 'At the Restaurant', icon: 'utensils' },
  { titleAr: 'En el hotel', titleEn: 'At the Hotel', icon: 'building' },
  { titleAr: 'Costumbres y tradiciones', titleEn: 'Customs & Traditions', icon: 'globe' },
  { titleAr: 'Repaso A2', titleEn: 'A2 Review', icon: 'check-circle' },
];

const B1_UNITS = [
  { titleAr: 'Narrar historias', titleEn: 'Storytelling', icon: 'book-open' },
  { titleAr: 'Opiniones y debate', titleEn: 'Opinions & Discussion', icon: 'message-circle' },
  { titleAr: 'Trabajo y estudio', titleEn: 'Work & Study', icon: 'graduation-cap' },
  { titleAr: 'Problemas y soluciones', titleEn: 'Problems & Solutions', icon: 'lightbulb' },
  { titleAr: 'Medios de comunicación', titleEn: 'Media & Content', icon: 'tv' },
  { titleAr: 'Tecnología', titleEn: 'Technology', icon: 'laptop' },
  { titleAr: 'Medio ambiente', titleEn: 'Environment', icon: 'leaf' },
  { titleAr: 'Relaciones', titleEn: 'Relationships', icon: 'users' },
  { titleAr: 'Entrevistas de trabajo', titleEn: 'Interview Skills', icon: 'user-check' },
  { titleAr: 'Repaso B1', titleEn: 'B1 Review', icon: 'check-circle' },
];

const B2_UNITS = [
  { titleAr: 'Estilos de escritura', titleEn: 'Writing Styles', icon: 'pen-tool' },
  { titleAr: 'Debates avanzados', titleEn: 'Advanced Discussions', icon: 'message-square' },
  { titleAr: 'Términos de negocios', titleEn: 'Business Terms', icon: 'briefcase' },
  { titleAr: 'Presentaciones', titleEn: 'Presentations', icon: 'presentation' },
  { titleAr: 'Artículos e informes', titleEn: 'Articles & Reports', icon: 'file-text' },
  { titleAr: 'Argumentos y persuasión', titleEn: 'Arguments & Persuasion', icon: 'target' },
  { titleAr: 'Modismos y frases hechas', titleEn: 'Idioms & Phrasal Verbs', icon: 'puzzle' },
  { titleAr: 'Formal e informal', titleEn: 'Formal/Informal', icon: 'layers' },
  { titleAr: 'Examen integral', titleEn: 'Comprehensive Test', icon: 'clipboard-check' },
  { titleAr: 'Repaso B2', titleEn: 'B2 Review', icon: 'check-circle' },
];

const C1_UNITS = [
  { titleAr: 'Expresión matizada', titleEn: 'Nuanced Expression', icon: 'feather' },
  { titleAr: 'Escritura académica', titleEn: 'Academic Writing', icon: 'scroll' },
  { titleAr: 'Medios y periodismo', titleEn: 'Media & Journalism', icon: 'newspaper' },
  { titleAr: 'Derecho y política', titleEn: 'Law & Politics', icon: 'gavel' },
  { titleAr: 'Ciencia y tecnología', titleEn: 'Science & Technology', icon: 'flask' },
  { titleAr: 'Filosofía y pensamiento abstracto', titleEn: 'Philosophy & Abstract Thinking', icon: 'brain' },
  { titleAr: 'Análisis literario', titleEn: 'Literary Analysis', icon: 'book-open' },
  { titleAr: 'Colocaciones avanzadas', titleEn: 'Advanced Collocations', icon: 'link' },
  { titleAr: 'Comunicación profesional', titleEn: 'Professional Communication', icon: 'building-2' },
  { titleAr: 'Repaso C1', titleEn: 'C1 Review', icon: 'check-circle' },
];

const C2_UNITS = [
  { titleAr: 'Dominio del idioma', titleEn: 'Language Mastery', icon: 'crown' },
  { titleAr: 'Literatura y poesía', titleEn: 'Literature & Poetry', icon: 'book-heart' },
  { titleAr: 'Retórica y persuasión', titleEn: 'Rhetoric & Persuasion', icon: 'mic' },
  { titleAr: 'Traducción avanzada', titleEn: 'Advanced Translation', icon: 'languages' },
  { titleAr: 'Dialectos y diversidad lingüística', titleEn: 'Dialects & Linguistic Diversity', icon: 'globe-2' },
  { titleAr: 'Escritura creativa', titleEn: 'Creative Writing', icon: 'feather' },
  { titleAr: 'Crítica y análisis', titleEn: 'Criticism & Analysis', icon: 'search' },
  { titleAr: 'Comunicación diplomática', titleEn: 'Diplomatic Communication', icon: 'handshake' },
  { titleAr: 'Contextos especializados', titleEn: 'Specialized Contexts', icon: 'briefcase' },
  { titleAr: 'Repaso C2', titleEn: 'C2 Review', icon: 'award' },
];

// Lesson templates per unit position
const LESSON_TEMPLATES = [
  { suffix: 'Vocabulario', suffixEn: 'Vocabulary' },
  { suffix: 'Gramática', suffixEn: 'Grammar' },
  { suffix: 'Comprensión auditiva', suffixEn: 'Listening' },
  { suffix: 'Conversación', suffixEn: 'Conversation' },
  { suffix: 'Práctica', suffixEn: 'Practice' },
];

function generateUUID(level: string, unitIndex: number, lessonIndex?: number): string {
  const base = `${level}-u${unitIndex.toString().padStart(2, '0')}`;
  if (lessonIndex !== undefined) {
    return `${base}-l${lessonIndex.toString().padStart(2, '0')}`;
  }
  return base;
}

function generateLessons(levelCode: string, unitIndex: number, unitTitleAr: string): CurriculumLesson[] {
  return LESSON_TEMPLATES.map((template, lessonIndex) => ({
    id: generateUUID(levelCode, unitIndex, lessonIndex + 1),
    titleAr: `${template.suffix}`,
    titleEn: template.suffixEn,
    descriptionAr: `${template.suffixEn} lesson in ${unitTitleAr}`,
    xpReward: 10 + (lessonIndex * 2),
    hasRealExercises: levelCode === 'A1' && unitIndex === 1 && lessonIndex === 0,
  }));
}

function generateUnits(levelCode: string, unitTemplates: typeof A1_UNITS): CurriculumUnit[] {
  return unitTemplates.map((unit, index) => ({
    id: generateUUID(levelCode, index + 1),
    titleAr: unit.titleAr,
    titleEn: unit.titleEn,
    descriptionAr: `Learn ${unit.titleEn} in Spanish`,
    icon: unit.icon,
    lessons: generateLessons(levelCode, index + 1, unit.titleAr),
  }));
}

export const CURRICULUM: CurriculumLevel[] = [
  {
    id: 'level-a1',
    code: 'A1',
    titleAr: 'Principiante',
    titleEn: 'Beginner',
    descriptionAr: 'Learn the basics of Spanish from scratch',
    color: 'emerald',
    units: generateUnits('A1', A1_UNITS),
  },
  {
    id: 'level-a2',
    code: 'A2',
    titleAr: 'Elemental',
    titleEn: 'Elementary',
    descriptionAr: 'Expand your vocabulary and learn basic expressions',
    color: 'sky',
    units: generateUnits('A2', A2_UNITS),
  },
  {
    id: 'level-b1',
    code: 'B1',
    titleAr: 'Intermedio',
    titleEn: 'Intermediate',
    descriptionAr: 'Learn conversation and expressing opinions',
    color: 'violet',
    units: generateUnits('B1', B1_UNITS),
  },
  {
    id: 'level-b2',
    code: 'B2',
    titleAr: 'Intermedio alto',
    titleEn: 'Upper Intermediate',
    descriptionAr: 'Master Spanish for work and study',
    color: 'amber',
    units: generateUnits('B2', B2_UNITS),
  },
  {
    id: 'level-c1',
    code: 'C1',
    titleAr: 'Avanzado',
    titleEn: 'Advanced',
    descriptionAr: 'Master Spanish at an academic and professional level',
    color: 'rose',
    units: generateUnits('C1', C1_UNITS),
  },
  {
    id: 'level-c2',
    code: 'C2',
    titleAr: 'Maestría',
    titleEn: 'Proficiency',
    descriptionAr: 'Native-level proficiency — full mastery of Spanish',
    color: 'fuchsia',
    units: generateUnits('C2', C2_UNITS),
  },
];

// Helper functions
export function getLevelByCode(code: string): CurriculumLevel | undefined {
  return CURRICULUM.find(level => level.code.toLowerCase() === code.toLowerCase());
}

export function getUnitById(levelCode: string, unitId: string): CurriculumUnit | undefined {
  const level = getLevelByCode(levelCode);
  return level?.units.find(unit => unit.id === unitId);
}

export function getLessonById(lessonId: string): { level: CurriculumLevel; unit: CurriculumUnit; lesson: CurriculumLesson } | undefined {
  for (const level of CURRICULUM) {
    for (const unit of level.units) {
      const lesson = unit.lessons.find(l => l.id === lessonId);
      if (lesson) {
        return { level, unit, lesson };
      }
    }
  }
  return undefined;
}

export function getAllLessons(): Array<{ levelCode: string; unitId: string; lesson: CurriculumLesson }> {
  const lessons: Array<{ levelCode: string; unitId: string; lesson: CurriculumLesson }> = [];
  for (const level of CURRICULUM) {
    for (const unit of level.units) {
      for (const lesson of unit.lessons) {
        lessons.push({ levelCode: level.code, unitId: unit.id, lesson });
      }
    }
  }
  return lessons;
}

export function getTotalLessonsCount(): number {
  return CURRICULUM.reduce((total, level) => 
    total + level.units.reduce((unitTotal, unit) => unitTotal + unit.lessons.length, 0), 0
  );
}

// Real exercises for A1 Unit 1 Lesson 1
export const A1_UNIT1_LESSON1_EXERCISES = [
  {
    id: 'ex-a1-u1-l1-1',
    type: 'mcq' as const,
    promptAr: 'What is the Spanish word for "Hello"?',
    promptEn: 'What is the Spanish word for "Hello"?',
    data_json: {
      question: 'What is the Spanish word for "Hello"?',
      options: ['Hola', 'Adiós', 'Gracias', 'Por favor'],
      correctIndex: 0,
      explanation: '"Hola" means "Hello" and is the most common greeting in Spanish.',
    },
  },
  {
    id: 'ex-a1-u1-l1-2',
    type: 'mcq' as const,
    promptAr: 'How do you say "Good morning" in Spanish?',
    promptEn: 'How do you say "Good morning" in Spanish?',
    data_json: {
      question: 'How do you say "Good morning" in Spanish?',
      options: ['Buenos días', 'Buenas noches', 'Buenas tardes', 'Adiós'],
      correctIndex: 0,
      explanation: '"Buenos días" is the morning greeting in Spanish.',
    },
  },
  {
    id: 'ex-a1-u1-l1-3',
    type: 'reorder' as const,
    promptAr: 'Arrange the words to form a correct Spanish sentence',
    promptEn: 'Arrange the words to form a correct sentence',
    data_json: {
      words: ['Me', 'llamo', 'María'],
      correctOrder: [0, 1, 2],
      translation: 'My name is María',
    },
  },
  {
    id: 'ex-a1-u1-l1-4',
    type: 'fill_blank' as const,
    promptAr: 'Complete the sentence: ¿Cómo te ___?',
    promptEn: 'Complete the sentence',
    data_json: {
      sentence: '¿Cómo te ___?',
      answer: 'llamas',
      hint: 'This phrase means "What is your name?"',
      translation: 'What is your name?',
    },
  },
  {
    id: 'ex-a1-u1-l1-5',
    type: 'mcq' as const,
    promptAr: 'What do you say when leaving someone?',
    promptEn: 'What do you say when leaving someone?',
    data_json: {
      question: 'What do you say when leaving someone?',
      options: ['Adiós', 'Hola', 'Gracias', 'Por favor'],
      correctIndex: 0,
      explanation: '"Adiós" means "Goodbye" in Spanish.',
    },
  },
  {
    id: 'ex-a1-u1-l1-6',
    type: 'translation' as const,
    promptAr: 'Translate to Spanish: How are you?',
    promptEn: 'Translate to Spanish',
    data_json: {
      sourceText: 'How are you?',
      correctAnswers: ['¿Cómo estás?', '¿Cómo estas?', 'Como estas'],
      hint: '¿Cómo...',
    },
  },
  {
    id: 'ex-a1-u1-l1-7',
    type: 'reorder' as const,
    promptAr: 'Arrange the words: estás / Cómo / ¿ / ?',
    promptEn: 'Arrange the words',
    data_json: {
      words: ['¿Cómo', 'estás', '?'],
      correctOrder: [0, 1, 2],
      translation: 'How are you?',
    },
  },
  {
    id: 'ex-a1-u1-l1-8',
    type: 'mcq' as const,
    promptAr: 'What is the appropriate response to "¿Cómo estás?"',
    promptEn: 'What is the appropriate response?',
    data_json: {
      question: 'What is the appropriate response to "¿Cómo estás?"',
      options: ['Estoy bien, gracias', 'Me llamo...', 'Adiós', 'Buenos días'],
      correctIndex: 0,
      explanation: 'The appropriate response is "Estoy bien, gracias" meaning "I am fine, thank you."',
    },
  },
];

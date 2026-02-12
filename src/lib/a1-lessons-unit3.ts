// A1 Unit 3: Family & Home — Spanish for English Speakers
import { LessonContent } from './a1-lessons';

export const A1_U3_L1: LessonContent = {
  lessonId: 'A1-u03-l01',
  passingScore: 70,
  vocab: [
    { english: 'Family', arabic: 'Familia', example: 'Mi familia es grande.', exampleAr: 'My family is big.' },
    { english: 'Father', arabic: 'Padre', example: 'Mi padre es profesor.', exampleAr: 'My father is a teacher.' },
    { english: 'Mother', arabic: 'Madre', example: 'Mi madre cocina bien.', exampleAr: 'My mother cooks well.' },
    { english: 'Brother', arabic: 'Hermano', example: 'Tengo un hermano.', exampleAr: 'I have one brother.' },
    { english: 'Sister', arabic: 'Hermana', example: 'Ella es mi hermana.', exampleAr: 'She is my sister.' },
    { english: 'Son', arabic: 'Hijo', example: 'Él es su hijo.', exampleAr: 'He is their son.' },
    { english: 'Daughter', arabic: 'Hija', example: 'Ella es mi hija.', exampleAr: 'She is my daughter.' },
    { english: 'Grandfather', arabic: 'Abuelo', example: 'Mi abuelo es mayor.', exampleAr: 'My grandfather is old.' },
    { english: 'Grandmother', arabic: 'Abuela', example: 'Mi abuela vive con nosotros.', exampleAr: 'My grandmother lives with us.' },
    { english: 'Parents', arabic: 'Padres', example: 'Mis padres son amables.', exampleAr: 'My parents are kind.' },
  ],
  sentences: [
    { english: 'I love my family.', arabic: 'Amo a mi familia.' },
    { english: 'My father works in a bank.', arabic: 'Mi padre trabaja en un banco.' },
    { english: 'I have two brothers and one sister.', arabic: 'Tengo dos hermanos y una hermana.' },
    { english: 'My grandmother makes delicious food.', arabic: 'Mi abuela hace comida deliciosa.' },
    { english: 'We visit our grandparents every week.', arabic: 'Visitamos a nuestros abuelos cada semana.' },
    { english: 'My parents love me.', arabic: 'Mis padres me quieren.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Father" in Spanish?', data: { options: ['Padre', 'Madre', 'Hermano', 'Hermana'], correct: 0 } },
    { type: 'mcq', promptAr: 'What is "Sister" in Spanish?', data: { options: ['Hermana', 'Hermano', 'Hija', 'Madre'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Mi ___ es doctora. (mother)', data: { answer: 'madre', hint: 'Starts with M' } },
    { type: 'translation', promptAr: 'Translate to Spanish: My father', data: { answer: 'Mi padre', alternatives: ['mi padre'] } },
    { type: 'reorder', promptAr: 'Arrange: dos / Tengo / hermanos', data: { words: ['Tengo', 'dos', 'hermanos'], correctOrder: [0, 1, 2] } },
    { type: 'mcq', promptAr: 'What is "Grandfather" in Spanish?', data: { options: ['Abuelo', 'Padre', 'Tío', 'Hermano'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Ella es mi ___. (sister)', data: { answer: 'hermana' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Father', arabic: 'Padre' }, { english: 'Mother', arabic: 'Madre' }, { english: 'Brother', arabic: 'Hermano' }, { english: 'Sister', arabic: 'Hermana' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Grandmother" in Spanish?', data: { options: ['Abuela', 'Madre', 'Hermana', 'Tía'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: My family is big', data: { answer: 'Mi familia es grande', alternatives: ['mi familia es grande'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: Amo a mi ___.', data: { answer: 'familia' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: es / Él / mi / hermano', data: { words: ['Él', 'es', 'mi', 'hermano'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: My mother and father', data: { answer: 'Mi madre y padre', alternatives: ['Mi mamá y papá', 'Mis padres'] }, points: 25 },
  ]
};

export const A1_U3_L2: LessonContent = {
  lessonId: 'A1-u03-l02',
  passingScore: 70,
  vocab: [
    { english: 'Uncle', arabic: 'Tío', example: 'Mi tío es divertido.', exampleAr: 'My uncle is funny.' },
    { english: 'Aunt', arabic: 'Tía', example: 'Mi tía vive en Madrid.', exampleAr: 'My aunt lives in Madrid.' },
    { english: 'Cousin', arabic: 'Primo/Prima', example: 'Él es mi primo.', exampleAr: 'He is my cousin.' },
    { english: 'Husband', arabic: 'Esposo / Marido', example: 'Él es su esposo.', exampleAr: 'He is her husband.' },
    { english: 'Wife', arabic: 'Esposa / Mujer', example: 'Ella es su esposa.', exampleAr: 'She is his wife.' },
    { english: 'Baby', arabic: 'Bebé', example: 'El bebé está durmiendo.', exampleAr: 'The baby is sleeping.' },
    { english: 'Child', arabic: 'Niño/Niña', example: 'El niño está jugando.', exampleAr: 'The child is playing.' },
    { english: 'Children', arabic: 'Niños', example: 'Los niños están felices.', exampleAr: 'The children are happy.' },
    { english: 'Nephew', arabic: 'Sobrino', example: 'Mi sobrino es joven.', exampleAr: 'My nephew is young.' },
    { english: 'Niece', arabic: 'Sobrina', example: 'Mi sobrina es inteligente.', exampleAr: 'My niece is smart.' },
  ],
  sentences: [
    { english: 'My uncle has three children.', arabic: 'Mi tío tiene tres hijos.' },
    { english: 'I visit my aunt every Friday.', arabic: 'Visito a mi tía cada viernes.' },
    { english: 'My cousin is my best friend.', arabic: 'Mi primo es mi mejor amigo.' },
    { english: 'The baby is very cute.', arabic: 'El bebé es muy lindo.' },
    { english: 'She is a good wife.', arabic: 'Ella es una buena esposa.' },
    { english: 'My nephew likes soccer.', arabic: 'A mi sobrino le gusta el fútbol.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Uncle" in Spanish?', data: { options: ['Tío', 'Padre', 'Abuelo', 'Hermano'], correct: 0 } },
    { type: 'mcq', promptAr: 'What is "Wife" in Spanish?', data: { options: ['Esposa', 'Esposo', 'Hermana', 'Madre'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Mi ___ es la hermana de mi madre.', data: { answer: 'tía', hint: 'Mother\'s sister' } },
    { type: 'translation', promptAr: 'Translate to Spanish: My cousin', data: { answer: 'Mi primo', alternatives: ['mi primo', 'Mi prima'] } },
    { type: 'reorder', promptAr: 'Arrange: es / Ella / su / esposa', data: { words: ['Ella', 'es', 'su', 'esposa'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'What is the plural of "niño"?', data: { options: ['Niños', 'Niñas', 'Niñes', 'Niño'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: El ___ está durmiendo. (baby)', data: { answer: 'bebé' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Uncle', arabic: 'Tío' }, { english: 'Aunt', arabic: 'Tía' }, { english: 'Husband', arabic: 'Esposo' }, { english: 'Wife', arabic: 'Esposa' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Nephew" in Spanish?', data: { options: ['Sobrino', 'Primo', 'Hermano', 'Tío'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: My uncle has two children', data: { answer: 'Mi tío tiene dos hijos', alternatives: ['Mi tio tiene dos hijos'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: Él es su ___.', data: { answer: 'esposo' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: niños / Los / felices / están', data: { words: ['Los', 'niños', 'están', 'felices'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: My aunt is a doctor', data: { answer: 'Mi tía es doctora', alternatives: ['Mi tia es doctora'] }, points: 25 },
  ]
};

export const A1_U3_L3: LessonContent = {
  lessonId: 'A1-u03-l03',
  passingScore: 70,
  vocab: [
    { english: 'House', arabic: 'Casa', example: 'Esta es mi casa.', exampleAr: 'This is my house.' },
    { english: 'Home', arabic: 'Hogar', example: 'Estoy en casa.', exampleAr: 'I am at home.' },
    { english: 'Room', arabic: 'Habitación', example: 'Mi habitación es grande.', exampleAr: 'My room is big.' },
    { english: 'Bedroom', arabic: 'Dormitorio', example: 'Duermo en mi dormitorio.', exampleAr: 'I sleep in my bedroom.' },
    { english: 'Bathroom', arabic: 'Baño', example: 'El baño está limpio.', exampleAr: 'The bathroom is clean.' },
    { english: 'Kitchen', arabic: 'Cocina', example: 'Mi madre está en la cocina.', exampleAr: 'My mother is in the kitchen.' },
    { english: 'Living room', arabic: 'Sala de estar', example: 'Vemos la tele en la sala.', exampleAr: 'We watch TV in the living room.' },
    { english: 'Garden', arabic: 'Jardín', example: 'Tenemos un pequeño jardín.', exampleAr: 'We have a small garden.' },
    { english: 'Door', arabic: 'Puerta', example: 'Por favor, cierra la puerta.', exampleAr: 'Please close the door.' },
    { english: 'Window', arabic: 'Ventana', example: 'Abre la ventana, por favor.', exampleAr: 'Open the window, please.' },
  ],
  sentences: [
    { english: 'I live in a big house.', arabic: 'Vivo en una casa grande.' },
    { english: 'My bedroom has two windows.', arabic: 'Mi dormitorio tiene dos ventanas.' },
    { english: 'The kitchen is next to the bathroom.', arabic: 'La cocina está al lado del baño.' },
    { english: 'We eat in the living room.', arabic: 'Comemos en la sala de estar.' },
    { english: 'The garden is very beautiful.', arabic: 'El jardín es muy bonito.' },
    { english: 'Please close the door.', arabic: 'Por favor, cierra la puerta.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Kitchen" in Spanish?', data: { options: ['Cocina', 'Baño', 'Dormitorio', 'Jardín'], correct: 0 } },
    { type: 'mcq', promptAr: 'Where do you sleep?', data: { options: ['Dormitorio', 'Cocina', 'Baño', 'Jardín'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Estoy en ___.', data: { answer: 'casa', hint: 'Home' } },
    { type: 'translation', promptAr: 'Translate to Spanish: Living room', data: { answer: 'Sala de estar', alternatives: ['sala de estar', 'Sala'] } },
    { type: 'reorder', promptAr: 'Arrange: habitación / Mi / es / grande', data: { words: ['Mi', 'habitación', 'es', 'grande'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'What is "Window" in Spanish?', data: { options: ['Ventana', 'Puerta', 'Techo', 'Pared'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: El ___ es bonito. (garden)', data: { answer: 'jardín' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Kitchen', arabic: 'Cocina' }, { english: 'Bathroom', arabic: 'Baño' }, { english: 'Door', arabic: 'Puerta' }, { english: 'Window', arabic: 'Ventana' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Bedroom" in Spanish?', data: { options: ['Dormitorio', 'Cocina', 'Baño', 'Sala'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: My house is big', data: { answer: 'Mi casa es grande', alternatives: ['mi casa es grande'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: Abre la ___, por favor.', data: { answer: 'puerta' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: en / Vivo / casa / una / grande', data: { words: ['Vivo', 'en', 'una', 'casa', 'grande'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: My mother is in the kitchen', data: { answer: 'Mi madre está en la cocina', alternatives: ['Mi mamá está en la cocina'] }, points: 25 },
  ]
};

export const A1_U3_L4: LessonContent = {
  lessonId: 'A1-u03-l04',
  passingScore: 70,
  vocab: [
    { english: 'Table', arabic: 'Mesa', example: 'El libro está en la mesa.', exampleAr: 'The book is on the table.' },
    { english: 'Chair', arabic: 'Silla', example: 'Siéntate en la silla.', exampleAr: 'Sit on the chair.' },
    { english: 'Bed', arabic: 'Cama', example: 'Duermo en mi cama.', exampleAr: 'I sleep in my bed.' },
    { english: 'Sofa', arabic: 'Sofá', example: 'El sofá es cómodo.', exampleAr: 'The sofa is comfortable.' },
    { english: 'TV', arabic: 'Televisión / Tele', example: 'Veo la tele cada día.', exampleAr: 'I watch TV every day.' },
    { english: 'Lamp', arabic: 'Lámpara', example: 'Enciende la lámpara.', exampleAr: 'Turn on the lamp.' },
    { english: 'Carpet', arabic: 'Alfombra', example: 'La alfombra es roja.', exampleAr: 'The carpet is red.' },
    { english: 'Fridge', arabic: 'Nevera / Refrigerador', example: 'La leche está en la nevera.', exampleAr: 'The milk is in the fridge.' },
    { english: 'Stove', arabic: 'Estufa / Cocina', example: 'Cuidado, la estufa está caliente.', exampleAr: 'Be careful, the stove is hot.' },
    { english: 'Mirror', arabic: 'Espejo', example: 'Me miro en el espejo.', exampleAr: 'I look in the mirror.' },
  ],
  sentences: [
    { english: 'The table is in the kitchen.', arabic: 'La mesa está en la cocina.' },
    { english: 'I sit on the sofa and watch TV.', arabic: 'Me siento en el sofá y veo la tele.' },
    { english: 'My bed is very comfortable.', arabic: 'Mi cama es muy cómoda.' },
    { english: 'Please turn on the lamp.', arabic: 'Por favor, enciende la lámpara.' },
    { english: 'The food is in the fridge.', arabic: 'La comida está en la nevera.' },
    { english: 'There is a mirror in the bathroom.', arabic: 'Hay un espejo en el baño.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Table" in Spanish?', data: { options: ['Mesa', 'Silla', 'Cama', 'Sofá'], correct: 0 } },
    { type: 'mcq', promptAr: 'Where do you keep cold food?', data: { options: ['Nevera', 'Estufa', 'Mesa', 'Sofá'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Duermo en la ___.', data: { answer: 'cama', hint: 'Bed' } },
    { type: 'translation', promptAr: 'Translate to Spanish: Television', data: { answer: 'Televisión', alternatives: ['Tele', 'televisión'] } },
    { type: 'reorder', promptAr: 'Arrange: sofá / El / cómodo / es', data: { words: ['El', 'sofá', 'es', 'cómodo'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'What is "Lamp" in Spanish?', data: { options: ['Lámpara', 'Alfombra', 'Espejo', 'Ventana'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: La ___ es roja. (carpet)', data: { answer: 'alfombra' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Table', arabic: 'Mesa' }, { english: 'Chair', arabic: 'Silla' }, { english: 'Bed', arabic: 'Cama' }, { english: 'Sofa', arabic: 'Sofá' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Mirror" in Spanish?', data: { options: ['Espejo', 'Ventana', 'Puerta', 'Lámpara'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: The book is on the table', data: { answer: 'El libro está en la mesa', alternatives: ['el libro está en la mesa'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: Enciende la ___.', data: { answer: 'lámpara' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: en / Siéntate / la / silla', data: { words: ['Siéntate', 'en', 'la', 'silla'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: The milk is in the fridge', data: { answer: 'La leche está en la nevera', alternatives: ['La leche esta en la nevera'] }, points: 25 },
  ]
};

export const A1_U3_L5: LessonContent = {
  lessonId: 'A1-u03-l05',
  passingScore: 70,
  vocab: [
    { english: 'Big', arabic: 'Grande', example: 'La casa es grande.', exampleAr: 'The house is big.' },
    { english: 'Small', arabic: 'Pequeño/a', example: 'Mi habitación es pequeña.', exampleAr: 'My room is small.' },
    { english: 'Clean', arabic: 'Limpio/a', example: 'La cocina está limpia.', exampleAr: 'The kitchen is clean.' },
    { english: 'Dirty', arabic: 'Sucio/a', example: 'El suelo está sucio.', exampleAr: 'The floor is dirty.' },
    { english: 'New', arabic: 'Nuevo/a', example: 'Tenemos una tele nueva.', exampleAr: 'We have a new TV.' },
    { english: 'Old', arabic: 'Viejo/a', example: 'El sofá es viejo.', exampleAr: 'The sofa is old.' },
    { english: 'Comfortable', arabic: 'Cómodo/a', example: 'La cama es cómoda.', exampleAr: 'The bed is comfortable.' },
    { english: 'Beautiful', arabic: 'Bonito/a / Hermoso/a', example: 'El jardín es bonito.', exampleAr: 'The garden is beautiful.' },
    { english: 'Quiet', arabic: 'Tranquilo/a', example: 'La casa es tranquila.', exampleAr: 'The house is quiet.' },
    { english: 'Noisy', arabic: 'Ruidoso/a', example: 'La calle es ruidosa.', exampleAr: 'The street is noisy.' },
  ],
  sentences: [
    { english: 'Our house is big and beautiful.', arabic: 'Nuestra casa es grande y bonita.' },
    { english: 'Please keep the room clean.', arabic: 'Por favor, mantén la habitación limpia.' },
    { english: 'The new sofa is very comfortable.', arabic: 'El sofá nuevo es muy cómodo.' },
    { english: 'My grandmother lives in an old house.', arabic: 'Mi abuela vive en una casa vieja.' },
    { english: 'The neighborhood is quiet at night.', arabic: 'El barrio es tranquilo por la noche.' },
    { english: 'The children are noisy.', arabic: 'Los niños son ruidosos.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is the opposite of "Grande"?', data: { options: ['Pequeño', 'Viejo', 'Nuevo', 'Limpio'], correct: 0 } },
    { type: 'mcq', promptAr: 'What is the opposite of "Limpio"?', data: { options: ['Sucio', 'Grande', 'Pequeño', 'Nuevo'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: La casa es ___ y tranquila. (beautiful)', data: { answer: 'bonita' } },
    { type: 'translation', promptAr: 'Translate to Spanish: My room is small', data: { answer: 'Mi habitación es pequeña', alternatives: ['Mi cuarto es pequeño'] } },
    { type: 'reorder', promptAr: 'Arrange: cama / La / cómoda / es', data: { words: ['La', 'cama', 'es', 'cómoda'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'What is the opposite of "Nuevo"?', data: { options: ['Viejo', 'Limpio', 'Grande', 'Pequeño'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: La calle es ___. (noisy)', data: { answer: 'ruidosa' } },
    { type: 'matching', promptAr: 'Match the opposites', data: { pairs: [{ english: 'Big', arabic: 'Small' }, { english: 'Clean', arabic: 'Dirty' }, { english: 'New', arabic: 'Old' }, { english: 'Quiet', arabic: 'Noisy' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Comfortable" in Spanish?', data: { options: ['Cómodo', 'Limpio', 'Grande', 'Bonito'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: The house is big', data: { answer: 'La casa es grande', alternatives: ['la casa es grande'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: El sofá ___ es cómodo. (new)', data: { answer: 'nuevo' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: tranquilo / barrio / El / es', data: { words: ['El', 'barrio', 'es', 'tranquilo'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: My grandmother lives in a house', data: { answer: 'Mi abuela vive en una casa', alternatives: ['mi abuela vive en una casa'] }, points: 25 },
  ]
};

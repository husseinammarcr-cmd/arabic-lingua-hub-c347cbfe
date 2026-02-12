// A1 Unit 5: Food & Drinks — Spanish for English Speakers
import { LessonContent } from './a1-lessons';

export const A1_U5_L1: LessonContent = {
  lessonId: 'A1-u05-l01', passingScore: 70,
  vocab: [
    { english: 'Food', arabic: 'Comida', example: 'La comida es deliciosa.', exampleAr: 'The food is delicious.' },
    { english: 'Bread', arabic: 'Pan', example: 'Como pan cada día.', exampleAr: 'I eat bread every day.' },
    { english: 'Rice', arabic: 'Arroz', example: 'El arroz es mi comida favorita.', exampleAr: 'Rice is my favorite food.' },
    { english: 'Meat', arabic: 'Carne', example: 'Me gusta la carne.', exampleAr: 'I like meat.' },
    { english: 'Chicken', arabic: 'Pollo', example: 'El pollo es saludable.', exampleAr: 'Chicken is healthy.' },
    { english: 'Fish', arabic: 'Pescado', example: 'El pescado es bueno para ti.', exampleAr: 'Fish is good for you.' },
    { english: 'Egg', arabic: 'Huevo', example: 'Como huevos en el desayuno.', exampleAr: 'I have eggs for breakfast.' },
    { english: 'Cheese', arabic: 'Queso', example: 'Me gusta el queso.', exampleAr: 'I like cheese.' },
    { english: 'Vegetables', arabic: 'Verduras', example: 'Come tus verduras.', exampleAr: 'Eat your vegetables.' },
    { english: 'Fruits', arabic: 'Frutas', example: 'Las frutas son saludables.', exampleAr: 'Fruits are healthy.' },
  ],
  sentences: [
    { english: 'I like to eat rice and chicken.', arabic: 'Me gusta comer arroz y pollo.' },
    { english: 'Vegetables are good for your health.', arabic: 'Las verduras son buenas para tu salud.' },
    { english: 'I have eggs and bread for breakfast.', arabic: 'Desayuno huevos y pan.' },
    { english: 'My mother cooks delicious food.', arabic: 'Mi madre cocina comida deliciosa.' },
    { english: 'Fish is my favorite food.', arabic: 'El pescado es mi comida favorita.' },
    { english: 'Do you like meat?', arabic: '¿Te gusta la carne?' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Bread" in Spanish?', data: { options: ['Pan', 'Arroz', 'Carne', 'Queso'], correct: 0 } },
    { type: 'mcq', promptAr: 'What is "Vegetables" in Spanish?', data: { options: ['Verduras', 'Frutas', 'Carnes', 'Dulces'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Me gusta comer ___ y arroz.', data: { answer: 'pollo', hint: 'Chicken' } },
    { type: 'translation', promptAr: 'Translate to Spanish: The food is delicious', data: { answer: 'La comida es deliciosa', alternatives: ['La comida está deliciosa'] } },
    { type: 'reorder', promptAr: 'Arrange: huevos / Como / desayuno / en / el', data: { words: ['Como', 'huevos', 'en', 'el', 'desayuno'], correctOrder: [0, 1, 2, 3, 4] } },
    { type: 'mcq', promptAr: 'What do we usually eat for breakfast?', data: { options: ['Huevos', 'Arroz', 'Pescado', 'Sopa'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: El ___ es bueno para ti.', data: { answer: 'pescado' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Bread', arabic: 'Pan' }, { english: 'Rice', arabic: 'Arroz' }, { english: 'Meat', arabic: 'Carne' }, { english: 'Fish', arabic: 'Pescado' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Chicken" in Spanish?', data: { options: ['Pollo', 'Pescado', 'Carne', 'Huevo'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: I like Spanish food', data: { answer: 'Me gusta la comida española', alternatives: ['Me encanta la comida española'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: Las ___ son saludables.', data: { answer: 'frutas' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: gusta / te / carne / ¿ / la / ?', data: { words: ['¿Te', 'gusta', 'la', 'carne', '?'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: I eat bread every day', data: { answer: 'Como pan cada día', alternatives: ['Yo como pan cada día', 'Como pan todos los días'] }, points: 25 },
  ]
};

export const A1_U5_L2: LessonContent = {
  lessonId: 'A1-u05-l02', passingScore: 70,
  vocab: [
    { english: 'Water', arabic: 'Agua', example: 'Bebo agua.', exampleAr: 'I drink water.' },
    { english: 'Juice', arabic: 'Jugo / Zumo', example: 'El jugo de naranja es sabroso.', exampleAr: 'Orange juice is tasty.' },
    { english: 'Milk', arabic: 'Leche', example: 'La leche es buena para los huesos.', exampleAr: 'Milk is good for bones.' },
    { english: 'Tea', arabic: 'Té', example: 'Bebo té cada mañana.', exampleAr: 'I drink tea every morning.' },
    { english: 'Coffee', arabic: 'Café', example: 'Necesito café para despertar.', exampleAr: 'I need coffee to wake up.' },
    { english: 'Drink', arabic: 'Beber / Bebida', example: 'Bebe más agua.', exampleAr: 'Drink more water.' },
    { english: 'Cup', arabic: 'Taza', example: 'Una taza de café, por favor.', exampleAr: 'A cup of coffee, please.' },
    { english: 'Glass', arabic: 'Vaso', example: 'Un vaso de agua.', exampleAr: 'A glass of water.' },
    { english: 'Hot', arabic: 'Caliente', example: 'El té está caliente.', exampleAr: 'The tea is hot.' },
    { english: 'Cold', arabic: 'Frío/a', example: 'El agua está fría.', exampleAr: 'The water is cold.' },
  ],
  sentences: [
    { english: 'I drink water every day.', arabic: 'Bebo agua cada día.' },
    { english: 'Would you like tea or coffee?', arabic: '¿Quieres té o café?' },
    { english: 'I prefer cold juice.', arabic: 'Prefiero jugo frío.' },
    { english: 'A glass of milk, please.', arabic: 'Un vaso de leche, por favor.' },
    { english: 'The coffee is too hot.', arabic: 'El café está muy caliente.' },
    { english: 'Drink more water in summer.', arabic: 'Bebe más agua en verano.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Water" in Spanish?', data: { options: ['Agua', 'Jugo', 'Leche', 'Té'], correct: 0 } },
    { type: 'mcq', promptAr: 'What is the opposite of "Caliente"?', data: { options: ['Frío', 'Tibio', 'Templado', 'Caliente'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Bebo ___ cada mañana.', data: { answer: 'té', hint: 'Tea' } },
    { type: 'translation', promptAr: 'Translate to Spanish: A cup of coffee', data: { answer: 'Una taza de café', alternatives: ['Taza de café'] } },
    { type: 'reorder', promptAr: 'Arrange: agua / El / fría / está', data: { words: ['El', 'agua', 'está', 'fría'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'What do we drink coffee from?', data: { options: ['Taza', 'Vaso', 'Plato', 'Bol'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: La ___ es buena para los huesos.', data: { answer: 'leche' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Water', arabic: 'Agua' }, { english: 'Tea', arabic: 'Té' }, { english: 'Coffee', arabic: 'Café' }, { english: 'Milk', arabic: 'Leche' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Juice" in Spanish?', data: { options: ['Jugo', 'Agua', 'Leche', 'Té'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: I drink water', data: { answer: 'Bebo agua', alternatives: ['Yo bebo agua'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: El té está muy ___.', data: { answer: 'caliente' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: quieres / ¿ / té / ?', data: { words: ['¿Quieres', 'té', '?'], correctOrder: [0, 1, 2] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: A glass of cold water', data: { answer: 'Un vaso de agua fría', alternatives: ['Vaso de agua fría'] }, points: 25 },
  ]
};

export const A1_U5_L3: LessonContent = {
  lessonId: 'A1-u05-l03', passingScore: 70,
  vocab: [
    { english: 'Apple', arabic: 'Manzana', example: 'Como una manzana cada día.', exampleAr: 'I eat an apple every day.' },
    { english: 'Orange', arabic: 'Naranja', example: 'Las naranjas son dulces.', exampleAr: 'Oranges are sweet.' },
    { english: 'Banana', arabic: 'Plátano / Banana', example: 'Los plátanos son amarillos.', exampleAr: 'Bananas are yellow.' },
    { english: 'Grapes', arabic: 'Uvas', example: 'Me encantan las uvas.', exampleAr: 'I love grapes.' },
    { english: 'Watermelon', arabic: 'Sandía', example: 'La sandía es refrescante.', exampleAr: 'Watermelon is refreshing.' },
    { english: 'Tomato', arabic: 'Tomate', example: 'El tomate es una verdura.', exampleAr: 'Tomato is a vegetable.' },
    { english: 'Potato', arabic: 'Papa / Patata', example: 'Me gustan las papas fritas.', exampleAr: 'I like fried potatoes.' },
    { english: 'Onion', arabic: 'Cebolla', example: 'Las cebollas te hacen llorar.', exampleAr: 'Onions make you cry.' },
    { english: 'Carrot', arabic: 'Zanahoria', example: 'Las zanahorias son naranjas.', exampleAr: 'Carrots are orange.' },
    { english: 'Cucumber', arabic: 'Pepino', example: 'Los pepinos son frescos.', exampleAr: 'Cucumbers are fresh.' },
  ],
  sentences: [
    { english: 'An apple a day keeps the doctor away.', arabic: 'Una manzana al día mantiene al doctor lejos.' },
    { english: 'I like to eat fresh fruits.', arabic: 'Me gusta comer frutas frescas.' },
    { english: 'Bananas are good for energy.', arabic: 'Los plátanos son buenos para la energía.' },
    { english: 'Please buy some vegetables.', arabic: 'Por favor, compra verduras.' },
    { english: 'The salad has tomatoes and cucumbers.', arabic: 'La ensalada tiene tomates y pepinos.' },
    { english: 'I drink orange juice in the morning.', arabic: 'Bebo jugo de naranja por la mañana.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Apple" in Spanish?', data: { options: ['Manzana', 'Naranja', 'Plátano', 'Uvas'], correct: 0 } },
    { type: 'mcq', promptAr: 'What color are bananas?', data: { options: ['Amarillo', 'Rojo', 'Verde', 'Naranja'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Como una ___ cada día.', data: { answer: 'manzana', hint: 'Apple' } },
    { type: 'translation', promptAr: 'Translate to Spanish: Fruits are healthy', data: { answer: 'Las frutas son saludables', alternatives: ['Las frutas son sanas'] } },
    { type: 'reorder', promptAr: 'Arrange: son / plátanos / Los / amarillos', data: { words: ['Los', 'plátanos', 'son', 'amarillos'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'Which one is NOT a fruit?', data: { options: ['Papa', 'Manzana', 'Naranja', 'Plátano'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Las ___ son naranjas.', data: { answer: 'zanahorias' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Apple', arabic: 'Manzana' }, { english: 'Orange', arabic: 'Naranja' }, { english: 'Tomato', arabic: 'Tomate' }, { english: 'Potato', arabic: 'Papa' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Watermelon" in Spanish?', data: { options: ['Sandía', 'Melón', 'Uva', 'Manzana'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: I like fruits', data: { answer: 'Me gustan las frutas', alternatives: ['Me encantan las frutas'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: Las ___ te hacen llorar.', data: { answer: 'cebollas' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: pepino / fresco / El / es', data: { words: ['El', 'pepino', 'es', 'fresco'], correctOrder: [0, 1, 2, 3] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: Oranges are sweet', data: { answer: 'Las naranjas son dulces', alternatives: ['Naranjas son dulces'] }, points: 25 },
  ]
};

export const A1_U5_L4: LessonContent = {
  lessonId: 'A1-u05-l04', passingScore: 70,
  vocab: [
    { english: 'Breakfast', arabic: 'Desayuno', example: 'El desayuno es importante.', exampleAr: 'Breakfast is important.' },
    { english: 'Lunch', arabic: 'Almuerzo / Comida', example: 'El almuerzo es a las 12.', exampleAr: 'Lunch is at 12.' },
    { english: 'Dinner', arabic: 'Cena', example: 'Cenamos a las 7.', exampleAr: 'We eat dinner at 7.' },
    { english: 'Hungry', arabic: 'Hambriento/a / Con hambre', example: 'Tengo hambre.', exampleAr: 'I am hungry.' },
    { english: 'Thirsty', arabic: 'Sediento/a / Con sed', example: 'Tengo sed.', exampleAr: 'I am thirsty.' },
    { english: 'Full', arabic: 'Lleno/a', example: 'Estoy lleno, gracias.', exampleAr: 'I am full, thank you.' },
    { english: 'Eat', arabic: 'Comer', example: 'Como tres comidas al día.', exampleAr: 'I eat three meals a day.' },
    { english: 'Cook', arabic: 'Cocinar', example: 'Mi mamá cocina bien.', exampleAr: 'My mom cooks well.' },
    { english: 'Taste', arabic: 'Sabor / Probar', example: 'La comida tiene buen sabor.', exampleAr: 'The food tastes good.' },
    { english: 'Meal', arabic: 'Comida (meal)', example: 'Esta es una comida saludable.', exampleAr: 'This is a healthy meal.' },
  ],
  sentences: [
    { english: 'I am hungry. Let\'s eat.', arabic: 'Tengo hambre. Vamos a comer.' },
    { english: 'I have three meals a day.', arabic: 'Como tres comidas al día.' },
    { english: 'What do you eat for breakfast?', arabic: '¿Qué comes en el desayuno?' },
    { english: 'My mother cooks delicious food.', arabic: 'Mi madre cocina comida deliciosa.' },
    { english: 'I am full, I can\'t eat more.', arabic: 'Estoy lleno, no puedo comer más.' },
    { english: 'Are you thirsty?', arabic: '¿Tienes sed?' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'How do you say "I am hungry" in Spanish?', data: { options: ['Tengo hambre', 'Tengo sed', 'Estoy lleno', 'Estoy cansado'], correct: 0 } },
    { type: 'mcq', promptAr: 'What is the first meal of the day?', data: { options: ['Desayuno', 'Almuerzo', 'Cena', 'Merienda'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Tengo ___. Necesito agua.', data: { answer: 'sed' } },
    { type: 'translation', promptAr: 'Translate to Spanish: I am hungry', data: { answer: 'Tengo hambre', alternatives: ['tengo hambre'] } },
    { type: 'reorder', promptAr: 'Arrange: comida / La / deliciosa / es', data: { words: ['La', 'comida', 'es', 'deliciosa'], correctOrder: [0, 1, 2, 3] } },
    { type: 'mcq', promptAr: 'What is the opposite of "Hambre"?', data: { options: ['Lleno', 'Sed', 'Vacío', 'Cansado'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Mi mamá ___ muy bien.', data: { answer: 'cocina' } },
    { type: 'matching', promptAr: 'Match the words', data: { pairs: [{ english: 'Breakfast', arabic: 'Desayuno' }, { english: 'Lunch', arabic: 'Almuerzo' }, { english: 'Dinner', arabic: 'Cena' }, { english: 'Hungry', arabic: 'Hambre' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Cook" in Spanish?', data: { options: ['Cocinar', 'Comer', 'Beber', 'Hambre'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: I am full', data: { answer: 'Estoy lleno', alternatives: ['Estoy llena'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: ¿Qué comes en el ___?', data: { answer: 'desayuno' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: hambre / Tengo', data: { words: ['Tengo', 'hambre'], correctOrder: [0, 1] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: The meal is delicious', data: { answer: 'La comida es deliciosa', alternatives: ['La comida está deliciosa'] }, points: 25 },
  ]
};

export const A1_U5_L5: LessonContent = {
  lessonId: 'A1-u05-l05', passingScore: 70,
  vocab: [
    { english: 'Delicious', arabic: 'Delicioso/a', example: 'Esta comida es deliciosa.', exampleAr: 'This food is delicious.' },
    { english: 'Tasty', arabic: 'Sabroso/a', example: 'El pastel es sabroso.', exampleAr: 'The cake is tasty.' },
    { english: 'Sweet', arabic: 'Dulce', example: 'Me gusta la comida dulce.', exampleAr: 'I like sweet food.' },
    { english: 'Salty', arabic: 'Salado/a', example: 'La sopa está muy salada.', exampleAr: 'The soup is too salty.' },
    { english: 'Spicy', arabic: 'Picante', example: 'La comida mexicana es picante.', exampleAr: 'Mexican food is spicy.' },
    { english: 'Sour', arabic: 'Agrio/a / Ácido/a', example: 'Los limones son ácidos.', exampleAr: 'Lemons are sour.' },
    { english: 'Fresh', arabic: 'Fresco/a', example: 'Me gustan las verduras frescas.', exampleAr: 'I like fresh vegetables.' },
    { english: 'Favorite', arabic: 'Favorito/a', example: 'La pizza es mi favorita.', exampleAr: 'Pizza is my favorite.' },
    { english: 'Healthy', arabic: 'Saludable / Sano/a', example: 'Come comida saludable.', exampleAr: 'Eat healthy food.' },
    { english: 'Unhealthy', arabic: 'No saludable / Poco sano', example: 'La comida rápida no es saludable.', exampleAr: 'Fast food is unhealthy.' },
  ],
  sentences: [
    { english: 'This restaurant serves delicious food.', arabic: 'Este restaurante sirve comida deliciosa.' },
    { english: 'I don\'t like spicy food.', arabic: 'No me gusta la comida picante.' },
    { english: 'Fresh fruits are healthy.', arabic: 'Las frutas frescas son saludables.' },
    { english: 'What is your favorite food?', arabic: '¿Cuál es tu comida favorita?' },
    { english: 'The lemon is too sour.', arabic: 'El limón es muy ácido.' },
    { english: 'I prefer sweet desserts.', arabic: 'Prefiero los postres dulces.' },
  ],
  exercises: [
    { type: 'mcq', promptAr: 'What is "Delicious" in Spanish?', data: { options: ['Delicioso', 'Salado', 'Picante', 'Ácido'], correct: 0 } },
    { type: 'mcq', promptAr: 'What does a lemon taste like?', data: { options: ['Ácido', 'Dulce', 'Salado', 'Picante'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: Esta comida es muy ___.', data: { answer: 'deliciosa', hint: 'Delicious' } },
    { type: 'translation', promptAr: 'Translate to Spanish: I like sweet food', data: { answer: 'Me gusta la comida dulce', alternatives: ['Me encanta la comida dulce'] } },
    { type: 'reorder', promptAr: 'Arrange: comida / es / tu / favorita / Cuál / ¿ / ?', data: { words: ['¿Cuál', 'es', 'tu', 'comida', 'favorita', '?'], correctOrder: [0, 1, 2, 3, 4, 5] } },
    { type: 'mcq', promptAr: 'What is the opposite of "Saludable"?', data: { options: ['No saludable', 'Saludable', 'Fresco', 'Sabroso'], correct: 0 } },
    { type: 'fill_blank', promptAr: 'Complete: La sopa está muy ___. (salty)', data: { answer: 'salada' } },
    { type: 'matching', promptAr: 'Match the flavors', data: { pairs: [{ english: 'Sweet', arabic: 'Dulce' }, { english: 'Salty', arabic: 'Salado' }, { english: 'Spicy', arabic: 'Picante' }, { english: 'Sour', arabic: 'Ácido' }] } },
  ],
  quiz: [
    { type: 'mcq', promptAr: 'What is "Fresh" in Spanish?', data: { options: ['Fresco', 'Sabroso', 'Dulce', 'Salado'], correct: 0 }, points: 15 },
    { type: 'translation', promptAr: 'Translate to Spanish: Mexican food is spicy', data: { answer: 'La comida mexicana es picante', alternatives: ['la comida mexicana es picante'] }, points: 20 },
    { type: 'fill_blank', promptAr: 'Complete: ¿Cuál es tu comida ___?', data: { answer: 'favorita' }, points: 15 },
    { type: 'reorder', promptAr: 'Arrange: frescas / frutas / Las / saludables / son', data: { words: ['Las', 'frutas', 'frescas', 'son', 'saludables'], correctOrder: [0, 1, 2, 3, 4] }, points: 25 },
    { type: 'translation', promptAr: 'Translate to Spanish: I prefer sweet desserts', data: { answer: 'Prefiero los postres dulces', alternatives: ['Prefiero postres dulces'] }, points: 25 },
  ]
};

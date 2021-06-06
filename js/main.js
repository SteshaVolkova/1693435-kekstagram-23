const USER_PHOTO_QUANTITY = 25;
const USER_AVATAR_QUANTITY = 6;

const NAMES = [
  'Вася',
  'Лена',
  'Андрей',
  'Анастасия',
  'Варвара',
  'Глеб',
  'Люба',
  'Самён',
];

const USER_DESCRIPTIONS = [
  'Hppyness...',
  'Хорошая погода',
  'Спокойствие, только спокойствие',
  'Лето на дворе',
  'Когда радости нет предела.',
  'Грусть, я тебя не боюсь.',
  'Поднимаю настроение мини–фотосессией.',
  'Любовь в каждом пикселе.',
  'Фото, заряженное на позитив.',
  'Улыбаюсь новому дню.',
  'Я не плачу — это просто дождь.',
  'Карабас–Барабас или «я в плохом расположении духа».',
  'Как мало нужно для счастья.',
  'Теплые воспоминания в холодное время года.',
  'В гневе я страшен.',
  'Знали бы вы, что у меня на уме.',
  'В диком восторге от происходящего.',
  'Поймал дзен.',
  'Досадно, но ладно.',
  'Если смогу, я сделаю это. Конец истории.',
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.',
  'Не позволяйте кому-то затушить ваши искры только потому, что их свет сияет в чьих-то глазах.',
  'Улыбка — единственный тренд в моде, который актуален всегда.',
];

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const calculateLengthComment = function(commentText, maxLengthComment) {
  return commentText.length <= maxLengthComment;
};

calculateLengthComment('Какой-то комментарий пользователя',140);

// Задача: На основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания
// массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

// Функция для получения случайного числа из указанного интервала.
// Решила использовать функцию Кекса :) Она более краткая и понятная.
function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

// Получение случайного числа из массива
const getRandomArrayElement = function(elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// Получаем массив для дальнейшего его перемешивания.
function getArray(min, max) {
  return Array.from(Array(max - min + 1).keys(), (x) => (x + min));
}

// Функция для перемешивания массива (использовала для получения случайного, но не повторяющегося фото из массива).
function shuffleArray(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Добавила объект комментария под добавленным фото
const addCommentPhoto = function(indexComment) {
  return {
    id: indexComment,
    avatar: `img/avatar-${getRandomPositiveInteger(1,USER_AVATAR_QUANTITY)}.svg`,
    message: getRandomArrayElement(COMMENT_MESSAGES),
    name: getRandomArrayElement(NAMES),
  };
};

// Добавила объект для фото
const addUserPhoto = function(index) {
  return {
    id: index,
    url: `photos/${shuffleArray(getArray(1,USER_PHOTO_QUANTITY))[index - 1]}.jpg`,
    description: USER_DESCRIPTIONS[index - 1],
    likes: getRandomPositiveInteger(15, 200),
    comments: new Array(getRandomPositiveInteger(1,5)).fill(null).map((item,indexComment) => addCommentPhoto(indexComment + 1)),
  };
};

new Array(USER_PHOTO_QUANTITY).fill(null).map((item,index) => addUserPhoto(index + 1));

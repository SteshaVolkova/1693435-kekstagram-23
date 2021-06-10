import {addCommentPhoto} from './show-comments.js';
import {getRandomPositiveInteger} from './utils.js';

const USER_PHOTO_QUANTITY = 25;
const MIN_LIKES_QUANTI = 15;
const MAX_LIKES_QUANTITY = 200;
const MAX_COMMENT_QUANTITY = 5;

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

// Добавила объект для фото
const addUserPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: USER_DESCRIPTIONS[index - 1],
  likes: getRandomPositiveInteger(MIN_LIKES_QUANTI, MAX_LIKES_QUANTITY),
  comments: new Array(getRandomPositiveInteger(1,MAX_COMMENT_QUANTITY)).fill(null).map((item,indexComment) => addCommentPhoto(indexComment + 1)),
});

new Array(USER_PHOTO_QUANTITY).fill(null).map((item,index) => addUserPhoto(index + 1));

import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

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

const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Добавила объект комментария под добавленным фото
const addCommentPhoto = (indexComment) => ({
  id: indexComment,
  avatar: `img/avatar-${getRandomPositiveInteger(1,USER_AVATAR_QUANTITY)}.svg`,
  message: getRandomArrayElement(COMMENT_MESSAGES),
  name: getRandomArrayElement(NAMES),
});

export {addCommentPhoto};

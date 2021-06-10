const MAX_QUANTITY_SYMBOL = 140;

// Функция для получения случайного числа из указанного интервала.
// Решила использовать функцию Кекса :) Она более краткая и понятная.
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Получение случайного числа из массива
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

export {getRandomPositiveInteger, getRandomArrayElement};

// Вычисляем длину строки
const calculateLengthComment = (commentText, maxLengthComment) =>
  commentText.length <= maxLengthComment;

export {calculateLengthComment};

calculateLengthComment('Какой-то комментарий пользователя' , MAX_QUANTITY_SYMBOL);

const ESCAPE_BUTTON_NUMBER = 27;

// Функция для получения случайного числа из указанного интервала.
// Решила использовать функцию Кекса :) Она более краткая и понятная.
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Вычисляем длину строки
const calculateLengthComment = (commentText, maxLengthComment) => commentText.length <= maxLengthComment;

// Получение случайного числа из массива
const getRandomArrayElement = (elements) =>
  elements[getRandomPositiveInteger(0, elements.length - 1)];

// Алгоритм под названием Тасование Фишера — Йетса.
// Пример взят c https://learn.javascript.ru/task/shuffle
const shuffle = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
};

// Сортировка объектов массива по имени ключа объекта (по возрастанию)
// Подсказку нашла тут (https://learn.javascript.ru/task/sort-by-field)
const sortByField = (field) => (a, b) => a[field] > b[field] ? 1 : -1;

// Проверка нажатия на кнопку Esc
const isEscEvent = (evt) => evt.keyCode === ESCAPE_BUTTON_NUMBER;

export {calculateLengthComment, getRandomPositiveInteger, getRandomArrayElement, shuffle, sortByField, isEscEvent};

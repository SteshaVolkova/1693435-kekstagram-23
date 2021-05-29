const getRandomNumber = function (startNumber, finishNumber) {
  if(startNumber >= 0 && finishNumber >= 0) {
    if(finishNumber > startNumber) {
      startNumber = Math.ceil(startNumber);
      finishNumber = Math.floor(finishNumber);
      return Math.floor(Math.random() * (finishNumber - startNumber + 1)) + startNumber;
    }

    // Так как значиние "до" меньше или равно значению "от", поменяем аргументы в функции местами.
    const newFinishNumber = startNumber;
    const newStartNumber = finishNumber;
    return Math.floor(Math.random() * (newFinishNumber - newStartNumber + 1)) + newStartNumber;
  }

  return 'Приведённые значения не подходят!';
};

getRandomNumber();

const calculateLengtComment = function(commentText, maxLenghtComment) {
  return commentText.length <= maxLenghtComment;
};

calculateLengtComment('Какой-то комментарий пользователя',140);

import {calculateLengthComment} from'./utils.js';

const MAX_QUANTITY_SYMBOL = 140;
const ERROR_BORDER_COLOR = 'red';
const DEFAULT_BORDER_COLOR = 'black';

const userUploadPhoto = document.querySelector('.img-upload__overlay');
const commentDescription = userUploadPhoto.querySelector('.text__description');

const onFormDescriptionCheck = (evt) => {
  const textDescriptionLength = calculateLengthComment(commentDescription.value, MAX_QUANTITY_SYMBOL);

  if(!textDescriptionLength) {
    commentDescription.setCustomValidity(`Удалите лишние ${commentDescription.value.length - MAX_QUANTITY_SYMBOL} симв.`);
    commentDescription.style.borderColor = ERROR_BORDER_COLOR;
    commentDescription.style.outlineColor = ERROR_BORDER_COLOR;
    evt.preventDefault();
  } else {
    commentDescription.setCustomValidity('');
    commentDescription.style.borderColor = DEFAULT_BORDER_COLOR;
    commentDescription.style.outlineColor = DEFAULT_BORDER_COLOR;
  }

  commentDescription.reportValidity();
};

commentDescription.addEventListener('input', onFormDescriptionCheck);

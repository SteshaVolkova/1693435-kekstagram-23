import {isEscEvent} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentInput = bigPicture.querySelector('.social__footer-text');
const userUploadPhoto = document.querySelector('.img-upload__overlay');
const commentDescription = userUploadPhoto.querySelector('.text__description');
const textHashtag = document.querySelector('.text__hashtags');
const uploadFile = document.querySelector('#upload-file');

const onCloseButtonClick = () => {
  userUploadPhoto.classList.add('hidden');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
  uploadFile.value = '';
};

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    if(commentDescription === document.activeElement) {
      evt.stopPropagation();
    } else if(textHashtag === document.activeElement) {
      evt.stopPropagation();
    } else {
      onCloseButtonClick();
      commentInput.value = '';
      uploadFile.value = '';
    }
  }
});

export {onCloseButtonClick};

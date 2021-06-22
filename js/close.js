import {isEscEvent} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentInput = bigPicture.querySelector('.social__footer-text');
const userUploadPhoto = document.querySelector('.img-upload__overlay');
const commentDescription = userUploadPhoto.querySelector('.text__description');
const textHashtag = document.querySelector('.text__hashtags');
const uploadFile = document.querySelector('#upload-file');

const closeModal = () => {
  userUploadPhoto.classList.add('hidden');
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
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
      closeModal();
      commentInput.value = '';
      uploadFile.value = '';
    }
  }
});

export {closeModal};

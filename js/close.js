import {isEscEvent} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentInput = bigPicture.querySelector('.social__footer-text');
const userUploadPhoto = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');

const closeBigPhoto = () => {
  bigPicture.classList.add('hidden');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  commentInput.value = '';
};

const closeUploadUserPhoto = () => {
  userUploadPhoto.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadFile.value = '';
};

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closeUploadUserPhoto();
    uploadFile.value = '';
  }
});

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closeBigPhoto();
  }
});

export {closeBigPhoto, closeUploadUserPhoto};

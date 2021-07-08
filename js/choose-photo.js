import {onCloseButtonClick, onEscButtonClick} from './close.js';

const userUploadPhoto = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeUploadFile = document.querySelector('#upload-cancel');

const onUploadButtonClick = () => {
  userUploadPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscButtonClick);
  closeUploadFile.addEventListener('click', onCloseButtonClick);
};

uploadFile.addEventListener('change', onUploadButtonClick);

import {closeModal} from './close.js';

const userUploadPhoto = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeUploadFile = document.querySelector('#upload-cancel');

const uploadUserPhoto = () => {
  userUploadPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeUploadFile.addEventListener('click', closeModal);
};

uploadFile.addEventListener('change', uploadUserPhoto);

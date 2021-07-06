import {onCloseButtonClick, closeModalByButton} from './close.js';
import {isEscEvent} from './utils.js';

const userUploadPhoto = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const closeUploadFile = document.querySelector('#upload-cancel');

const onUploadButtonClick = () => {
  userUploadPhoto.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeUploadFile.addEventListener('click', onCloseButtonClick);
};
closeUploadFile.removeEventListener('click', onCloseButtonClick);

document.removeEventListener('keydown', (evt) => {
  if (isEscEvent(evt)) {
    closeModalByButton(evt);
  }
});

uploadFile.addEventListener('change', onUploadButtonClick);

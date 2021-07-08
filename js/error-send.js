import {onCloseButtonClick, closeErrorMessageModal, removeListenerErrorMessage} from './close.js';

const errorUploadImage = document.querySelector('#error').content.querySelector('section');
const errorFragment = document.createDocumentFragment();
const errorUploadImageTemplate = errorUploadImage.cloneNode(true);
const errorButtonTemplate = errorUploadImageTemplate.querySelector('.error__button');

const onFormErrorSend = () => {
  onCloseButtonClick();

  errorFragment.appendChild(errorUploadImageTemplate);
  document.body.appendChild(errorFragment);

  closeErrorMessageModal(errorUploadImageTemplate, errorButtonTemplate);
};
removeListenerErrorMessage(errorUploadImageTemplate, errorButtonTemplate);

export {onFormErrorSend};

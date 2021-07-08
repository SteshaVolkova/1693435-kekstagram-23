import {onCloseButtonClick, closeErrorMessageModal} from './close.js';

const errorUploadImage = document.querySelector('#error').content.querySelector('section');
const errorFragment = document.createDocumentFragment();
const errorUploadImageTemplate = errorUploadImage.cloneNode(true);

const onFormErrorSend = () => {
  onCloseButtonClick();

  errorFragment.appendChild(errorUploadImageTemplate);
  document.body.appendChild(errorFragment);

  closeErrorMessageModal();
};

export {onFormErrorSend};

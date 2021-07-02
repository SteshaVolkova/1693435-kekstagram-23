import {onCloseButtonClick, closeMessageModal} from './close.js';

const errorUploadImage = document.querySelector('#error').content.querySelector('section');
const errorFragment = document.createDocumentFragment();

const onFormErrorSend = () => {

  onCloseButtonClick();

  const showErrorMessage = () => {
    const errorUploadImageTemplate = errorUploadImage.cloneNode(true);
    const errorButtonTemplate = errorUploadImageTemplate.querySelector('.error__button');
    const errorInnerTemplate = errorUploadImageTemplate.querySelector('.error__inner');
    errorFragment.appendChild(errorUploadImageTemplate);
    document.body.appendChild(errorFragment);

    closeMessageModal(errorUploadImageTemplate, errorButtonTemplate, errorInnerTemplate);
  };

  showErrorMessage();
};

export {onFormErrorSend};

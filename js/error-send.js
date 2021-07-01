import {isEscEvent} from './utils.js';

const errorUploadImage = document.querySelector('#error').content.querySelector('section');
const errorFragment = document.createDocumentFragment();

const onFormErrorSend = () => {

  const showErrorMessage = () => {
    const errorUploadImageTemplate = errorUploadImage.cloneNode(true);
    const errorButtonTemplate = errorUploadImageTemplate.querySelector('.error__button');
    const errorInnerTemplate = errorUploadImageTemplate.querySelector('.error__inner');
    errorFragment.appendChild(errorUploadImageTemplate);
    document.body.appendChild(errorFragment);
    errorButtonTemplate.addEventListener('click', () => {
      errorUploadImageTemplate.remove();
    });
    document.addEventListener('keydown', (evt) => {
      if (isEscEvent(evt)) {
        errorUploadImageTemplate.remove();
      }
    });
    errorUploadImageTemplate.addEventListener('click', (evt) => {
      const isClickInside = errorInnerTemplate.contains(evt.target);

      if (!isClickInside) {
        errorUploadImageTemplate.remove();
      }
    });
  };

  showErrorMessage();
};

export {onFormErrorSend};

import {closeMessageModal} from './close.js';

const ERROR_GET_MESSAGE ='Что-то пошло не так, не переживайте, скоро все исправим!';
const ERROR_GET_BUTTON ='Хорошо';
const errorGetImage = document.querySelector('#error').content.querySelector('section');
const errorFragment = document.createDocumentFragment();

const getErrorData = () => {

  const showErrorMessage = () => {
    const errorGetImageTemplate = errorGetImage.cloneNode(true);
    const errorButtonTemplate = errorGetImageTemplate.querySelector('.error__button');
    const errorTitileTemplate = errorGetImageTemplate.querySelector('.error__title');
    const errorInnerTemplate = errorGetImageTemplate.querySelector('.error__inner');
    errorTitileTemplate.textContent = ERROR_GET_MESSAGE;
    errorButtonTemplate.textContent = ERROR_GET_BUTTON;

    errorFragment.appendChild(errorGetImageTemplate);
    document.body.appendChild(errorFragment);

    closeMessageModal(errorGetImageTemplate, errorButtonTemplate, errorInnerTemplate);
  };

  showErrorMessage();
};

export {getErrorData};

import {closeErrorMessageModal, removeListenerErrorMessage} from './close.js';

const ERROR_GET_MESSAGE ='Упс, фото не подгрузились!';
const ERROR_GET_BUTTON ='Жду';
const errorGetImage = document.querySelector('#error').content.querySelector('section');
const errorFragment = document.createDocumentFragment();
const errorGetImageTemplate = errorGetImage.cloneNode(true);
const errorButtonTemplate = errorGetImageTemplate.querySelector('.error__button');
const errorTitileTemplate = errorGetImageTemplate.querySelector('.error__title');

const getErrorData = () => {

  const showErrorMessage = () => {
    errorTitileTemplate.textContent = ERROR_GET_MESSAGE;
    errorButtonTemplate.textContent = ERROR_GET_BUTTON;

    errorFragment.appendChild(errorGetImageTemplate);
    document.body.appendChild(errorFragment);

    closeErrorMessageModal(errorGetImageTemplate, errorButtonTemplate);
  };

  showErrorMessage();
};
removeListenerErrorMessage(errorGetImageTemplate, errorButtonTemplate);

export {getErrorData};

import {onCloseButtonClick, closeSuccessMessageModal, removeListenerSuccessMessage} from './close.js';

const successUploadImage = document.querySelector('#success').content.querySelector('section');
const successFragment = document.createDocumentFragment();
const successUploadImageTemplate = successUploadImage.cloneNode(true);
const successButtonTemplate = successUploadImageTemplate.querySelector('.success__button');

const onFormSuccessSend = () => {
  onCloseButtonClick();
  successFragment.appendChild(successUploadImageTemplate);
  document.body.appendChild(successFragment);

  closeSuccessMessageModal(successUploadImageTemplate, successButtonTemplate);
};
removeListenerSuccessMessage(successUploadImageTemplate, successButtonTemplate);

export {onFormSuccessSend};

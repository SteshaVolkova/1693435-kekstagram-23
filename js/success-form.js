import {onCloseButtonClick, closeSuccessMessageModal} from './close.js';

const successUploadImage = document.querySelector('#success').content.querySelector('section');
const successFragment = document.createDocumentFragment();
const successUploadImageTemplate = successUploadImage.cloneNode(true);

const onFormSuccessSend = () => {
  onCloseButtonClick();
  successFragment.appendChild(successUploadImageTemplate);
  document.body.appendChild(successFragment);

  closeSuccessMessageModal();
};

export {onFormSuccessSend};

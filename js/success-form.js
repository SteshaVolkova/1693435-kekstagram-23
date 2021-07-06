import {onCloseButtonClick, closeMessageModal} from './close.js';

const successUploadImage = document.querySelector('#success').content.querySelector('section');
const successFragment = document.createDocumentFragment();

const onFormSuccessSend = () => {
  onCloseButtonClick();

  const showSuccessMessage = () => {
    const successUploadImageTemplate = successUploadImage.cloneNode(true);
    const successButtonTemplate = successUploadImageTemplate.querySelector('.success__button');
    const successInnerTemplate = successUploadImageTemplate.querySelector('.success__inner');
    successFragment.appendChild(successUploadImageTemplate);
    document.body.appendChild(successFragment);

    closeMessageModal(successUploadImageTemplate, successButtonTemplate, successInnerTemplate);
  };

  showSuccessMessage();
};

export {onFormSuccessSend};

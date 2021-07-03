import {renderSimilarPhoto} from './render-images.js';
import {renderPhotoFilter} from './filter-photos.js';
import {addBigPhotoComments} from './big-picture.js';
import {getErrorData} from './error-get-data.js';

const URL_FOR_GET_IMAGES = 'https://23.javascript.pages.academy/kekstagram/data';

const getUserPhotos = (onError) => {
  fetch(URL_FOR_GET_IMAGES)
    .then((response) => response.json())
    .then((userPhotos) => {
      renderSimilarPhoto(userPhotos);
      renderPhotoFilter(userPhotos);
      addBigPhotoComments(userPhotos);
    })
    .catch(() => onError());
};

getUserPhotos(getErrorData);

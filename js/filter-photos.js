import {shuffle, sortByField} from './utils.js';
import {renderSimilarPhoto} from './render-images.js';
import {addBigPhotoComments} from './big-picture.js';
import {debounce} from './debounce.js';

const RERENDER_DELAY = 500;
const RANDOM_PHOTOS_LENGTH = 10;

const picturesContainer = document.querySelector('.pictures');
const imgFilter = document.querySelector('.img-filters');
const imgFilterButtons = imgFilter.querySelectorAll('.img-filters__button');
const imgFilterDefault = imgFilter.querySelector('#filter-default');
const imgFilterRandom = imgFilter.querySelector('#filter-random');
const imgFilterDiscussed = imgFilter.querySelector('#filter-discussed');

const applyFilterImages = (filterButton) => {
  imgFilterButtons.forEach((imgFilterButton) => {
    imgFilterButton.classList.remove('img-filters__button--active');
  });
  filterButton.classList.add('img-filters__button--active');
};

const renderFilteredPhotoList = (debounce(
  (photoList) => {
    const pictures = picturesContainer.querySelectorAll('.picture');

    pictures.forEach((picture) => {
      picture.remove();
    });

    renderSimilarPhoto(photoList);
    addBigPhotoComments(photoList);
  },
  RERENDER_DELAY,
));

const renderPhotoFilter = (userPhotos) => {
  imgFilterDefault.addEventListener('click', () => {
    applyFilterImages(imgFilterDefault);
    const defaultOrderPhotos = userPhotos.sort(sortByField('id'));

    renderFilteredPhotoList(defaultOrderPhotos);
  });

  imgFilterRandom.addEventListener('click', () => {
    applyFilterImages(imgFilterRandom);

    shuffle(userPhotos);
    const slicedRandomPhotos = userPhotos.slice(0, RANDOM_PHOTOS_LENGTH);

    renderFilteredPhotoList(slicedRandomPhotos);
  });

  imgFilterDiscussed.addEventListener('click', () => {
    applyFilterImages(imgFilterDiscussed);
    const disscusedOrderPhotosReverce = userPhotos.sort(sortByField('comments'));
    const disscusedOrderPhotos = disscusedOrderPhotosReverce.reverse();

    renderFilteredPhotoList(disscusedOrderPhotos);
  });
};

export {renderPhotoFilter};

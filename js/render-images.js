const pictures = document.querySelector('.pictures');
const pictureTemplateFragment = document.querySelector('#picture').content.querySelector('a');
const pictureFragment = document.createDocumentFragment();
const imgFilters = document.querySelector('.img-filters');

const renderSimilarPhoto = (userPhotos) => {
  userPhotos.forEach(({ url, likes, comments }) => {
    const element = pictureTemplateFragment.cloneNode(true);
    const elementPicture = element.querySelector('.picture__img');
    const elementLikes = element.querySelector('.picture__likes');
    const elementComments = element.querySelector('.picture__comments');

    elementPicture.src = url;
    elementLikes.textContent = likes;
    elementComments.textContent = comments.length;

    pictureFragment.appendChild(element);
  });

  pictures.appendChild(pictureFragment);
  imgFilters.classList.remove('img-filters--inactive');
};

export {renderSimilarPhoto, pictures};

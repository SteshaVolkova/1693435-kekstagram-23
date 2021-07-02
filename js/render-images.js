const pictures = document.querySelector('.pictures');
const pictureTemplateFragment = document.querySelector('#picture').content.querySelector('a');
const pictureFragment = document.createDocumentFragment();


const renderSimilarPhoto = (userPhotos) =>  {
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
};

export {renderSimilarPhoto, pictures};

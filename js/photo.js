import {showBigPicture} from './show-picture';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const listOfPictures = document.querySelector('.pictures');

const createTemplate = (picture) => {
  const {url, description, likes, comments} = picture;
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  const onPictureElementClick = (evt) => {
    evt.preventDefault();
    showBigPicture(picture);
  };
  pictureElement.addEventListener('click', onPictureElementClick);
  return pictureElement;
};

const fillTemplates = (pictureData) => {
  const fragmentOfPictures = document.createDocumentFragment();
  pictureData.forEach((element) => {
    const template = createTemplate(element);
    fragmentOfPictures.append(template);
  });
  listOfPictures.appendChild(fragmentOfPictures);
};

export {fillTemplates};

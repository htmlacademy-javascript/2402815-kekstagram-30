import {createPhotoArray} from './data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('picture');
const fragmentOfPictures = document.createDocumentFragment();
const listOfPictures = document.querySelector('.pictures');

const addPicture = createPhotoArray();
const showPicures = () => {
  addPicture.forEach(({url, description, likes, comments}) => {
    const pictureElement = templatePicture.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    fragmentOfPictures.append(pictureElement);
  });
  listOfPictures.append(fragmentOfPictures);
};

export {showPicures};

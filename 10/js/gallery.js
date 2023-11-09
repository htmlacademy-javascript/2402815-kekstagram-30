import {fillTemplates} from './photo.js';
import {showBigPicture} from './show-pictures.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {

    const thumbnail = evt.target.closest('[data-picture-id]');
    if(!thumbnail){
      return;
    }
    evt.preventDefault();
    const thumbnailId = +thumbnail.dataset.pictureId;
    const pictureData = pictures.find(({id}) => id === thumbnailId);

    showBigPicture(pictureData);
  });

  fillTemplates(pictures);
};

export {renderGallery};

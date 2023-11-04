const container = document.querySelector('.pictures');
const bigPictureView = document.querySelector('.big-picture');
//const bigPictureElement = document.querySelector('.big-picture__img');
const closePictureButton = document.querySelector('.big-picture__cancel');

const closeBigPicture = () => {
  bigPictureView.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onBigPictureEscKeydown = (evt) => {
  if (evt.key === 'Escape'){
    closeBigPicture();

    document.removeEventListener('keydown', onBigPictureEscKeydown);
  }
};

const onCloseButtonClick = () => {
  closeBigPicture();

  closePictureButton.removeEventListener('click', onCloseButtonClick);
};

const showPicture = (pictureData) => {
  bigPictureView.querySelector('.big-picture__img img').src = pictureData.url;
  bigPictureView.querySelector('.big-picture__img img').alt = pictureData.description;
  bigPictureView.querySelector('.social__caption').textContent = pictureData.description;
  bigPictureView.querySelector('.likes-count').textContent = pictureData.likes;
};

const showBigPicture = (pictureData) => {
  bigPictureView.classList.remove('hidden');
  document.body.classList.add('modal-open');
  showPicture(pictureData);

  container.addEventListener('keydown', onBigPictureEscKeydown);
  closePictureButton.addEventListener('click', onCloseButtonClick);
};

export {showBigPicture};

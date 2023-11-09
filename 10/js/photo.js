const container = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture')
  .content.querySelector('.picture');

const createTemplate = (picture) => {
  const {url, description, likes, comments, id} = picture;
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.pictureId = id;

  return pictureElement;
};

const fillTemplates = (pictureData) => {
  const fragmentOfPictures = document.createDocumentFragment();
  pictureData.forEach((element) => {
    const template = createTemplate(element);
    fragmentOfPictures.append(template);
  });
  container.appendChild(fragmentOfPictures);
};

export {fillTemplates};

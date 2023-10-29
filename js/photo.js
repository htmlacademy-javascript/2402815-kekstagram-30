const templatePicture = document.querySelector('#picture').content.querySelector('picture');
const listOfPictures = document.querySelector('.pictures');

const createTemplate = ({url, description, likes, comments}) => {
  const pictureElement = templatePicture.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  return pictureElement;
};

const fillTemplates = (pictureData) => {
  const fragmentOfPictures = document.createDocumentFragment();
  pictureData.forEach((element) => {
    const template = createTemplate(element);
    fragmentOfPictures.append(template);
  });
  listOfPictures.append(fragmentOfPictures);
};

export {fillTemplates};

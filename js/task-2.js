const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesGallery = document.querySelector('.js-gallery');

const myElements = [];

for (const obj of images) {
  const myElem = document.createElement('li');
  myElem.classList.add('image-item');

  const firstChild = document.createElement('img');
  firstChild.setAttribute('src', obj.url);
  firstChild.setAttribute('alt', obj.alt);
  firstChild.setAttribute('width', "360px");
  firstChild.setAttribute('height', "300px");

  myElem.append(firstChild);

  myElements.push(myElem);
}

imagesGallery.append(...myElements);



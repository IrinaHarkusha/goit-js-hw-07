// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


const refs = {
  input: document.querySelector('#controls > input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes')
}

refs.buttonCreate.addEventListener('click', onInputCreateBtn);

function onInputCreateBtn(e) {
  const query = refs.input.value;
  if (query <= 0 || query > 100) return alert('Please enter number from 1 to 100');

  onInputDestroyBtn();

  let colorAll = randomColorNum(+ query);
  refs.box.prepend(...colorAll);
}

refs.buttonDestroy.addEventListener('click', onInputDestroyBtn);

function onInputDestroyBtn() {
  refs.input.value = "";
  refs.box.innerHTML = ""; 
}

function randomColorNum(num) {
  
  const colorAll = [];
  let pix = 20;

  for (let i = 1; i <= num; i += 1){
    pix += 10;

    const myColorElem = document.createElement('div');
    myColorElem.style.backgroundColor = getRandomHexColor();
    myColorElem.style.height = `${pix}px`;
    myColorElem.style.width = `${pix}px`;
    colorAll.push(myColorElem);
  }
  return colorAll;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
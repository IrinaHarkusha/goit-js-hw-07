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
  refs.box.append(...colorAll);
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
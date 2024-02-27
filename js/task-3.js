const userNameEl = document.querySelector('#name-input');
const h1Elem = document.querySelector('#name-output');

userNameEl.addEventListener('input', onUserNameInput);

function onUserNameInput() {
    const userName = userNameEl.value.trim() || 'Anonymous';
    h1Elem.textContent = userName;
}
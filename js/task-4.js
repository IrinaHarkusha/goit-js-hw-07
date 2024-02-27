const formElem = document.querySelector('.js-login-form');

formElem.addEventListener('submit', onFormElemSubmit);

function onFormElemSubmit(evt) {
    evt.preventDefault();
    
    const data = {
        email: formElem.elements.email.value,
        password: formElem.elements.password.value,

    }
    console.log(data);
    if (data.email === '' || data.password === '') {
        alert('All form fields must be filled in');
        return;
    }
    evt.currentTarget.reset();
}


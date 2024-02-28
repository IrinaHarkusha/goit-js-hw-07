const formElem = document.querySelector('.js-login-form');

formElem.addEventListener('submit', onFormElemSubmit);

function onFormElemSubmit(evt) {
    evt.preventDefault();
    
    const emailValue = formElem.elements.email.value.trim();
    const passwordValue = formElem.elements.password.value.trim();

    
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }
    const data = {
        email: emailValue,
        password: passwordValue,
    }
    console.log(data);

    evt.currentTarget.reset();
}


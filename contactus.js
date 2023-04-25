const form = document.getElementById('contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm() 
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === '') {
        setError(name, 'Name cannot be empty');
    } else {
        setSuccess(name);
    }

    if (emailValue === '') {
        setError(email, 'Email Address cannot be empty');
    } else if (!isEmailValid(emailValue)) {
        setError(email, 'Email Address is not valid');
    } else {
        setSuccess(email);
    }

    if (phoneValue === '') {
        setError(phone, 'Phone Number cannot be empty');
    } else {
        setSuccess(phone);
    }

    if (messageValue === '') {
        setError(message, 'Message cannot be empty');
    } 

import { save, load } from './storage';
var throttle = require('lodash.throttle');
//import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
console.log(form);

const LOCALSTORAGE_KEY = 'feedback-form-state';
//const inputEl = document.querySelector('.feedback-form [name="email"]');
//console.log(inputEl);
//const textareaInput = document.querySelector('.feedback-form [name="message"]');

const formData = {
  email: (email = ''),
  message: (message = ''),
};
console.log(formData);
function noSubmitInsertEmailMessage() {
  //console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  const dataForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '');
  //console.log(dataForm);
  //console.log(dataForm.email);

  input.setAttribute('value', dataForm.email);
  textareaInput.textContent = dataForm.message;
}
noSubmitInsertEmailMessage();
console.log(formData);

//const onInput = event => {
const onInput = event => {
  event.preventDefault();

  if (
    event.target.nodeName !== 'INPUT' &&
    event.target.nodeName !== 'TEXTAREA'
  ) {
    return alert('Please fill in all the fields!');
  } else {
    const {
      elements: { email, message },
    } = event.currentTarget;

    if (event.target.nodeName === 'INPUT') {
      formData.email = email.value;
    } else {
      formData.message = message.value;
    }
  }

  const dataForm = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, dataForm);
  //const dataForm = JSON.stringify(formData);
  //localStorage.setItem(LOCALSTORAGE_KEY, dataForm);
  //console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(formData);
};

form.addEventListener('input', () => throttle(onInput, 500));
//---------------------------------------------------------------------------------

const onSubmit = event => {
  event.preventDefault();

  console.log(formData);
  form.reset();
  event.currentTarget.reset();
  formData.email = email.value;
  formData.message = message.value;
  input.setAttribute('value', '');
  textareaInput.textContent = '';
  console.log(formData);
};
form.addEventListener('submit', onSubmit);

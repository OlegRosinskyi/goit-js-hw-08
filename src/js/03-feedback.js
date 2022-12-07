//import { save, load } from './storage';
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
console.log(form);
const key = 'feedback-form-state';
const value = 'TimeRanges';

const input = document.querySelector('.feedback-form [name="email"]');
console.log(input);
const textareaInput = document.querySelector('.feedback-form [name="message"]');

let formData = {};
let emailV = '';
let messageV = '';

function noSubmitInsertEmailMessage() {
  //console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(localStorage.getItem(key) !== '');
  if (localStorage.getItem(key) !== '') {
    const formData = JSON.parse(localStorage.getItem(key));
    //console.log(dataForm);
    //console.log(dataForm.email);

    input.setAttribute('value', formData.email);
    textareaInput.textContent = formData.message;
  }
}
noSubmitInsertEmailMessage();

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
      emailV = email.value;
    } else {
      messageV = message.value;
    }
  }
  formData.email = emailV;
  formData.message = messageV;

  const dataForm = JSON.stringify(formData);
  localStorage.setItem(key, dataForm);
};

form.addEventListener('input', throttle(onInput, 100));
//throttle(onInput, 500);
//---------------------------------------------------------------------------------

const onSubmit = event => {
  event.preventDefault();
  //console.log(formData);

  event.currentTarget.reset();

  emailV = '';
  messageV = '';
  if (input.hasAttribute(value)) {
    input.setAttribute(value, '');
  }
  if (textareaInput.textContent !== '') {
    textareaInput.textContent = '';
  }
  event.currentTarget.reset();
  form.reset();
};
form.addEventListener('submit', onSubmit);

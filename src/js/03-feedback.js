//import { save, load } from './storage';
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
//console.log(form);
const key = 'feedback-form-state';
const value = 'TimeRanges';

const input = document.querySelector('.feedback-form [name="email"]');
//console.log(input);
const textareaInput = document.querySelector('.feedback-form [name="message"]');
let emailV = '';
let messageV = '';
let formData = { email: emailV, message: messageV };
//console.log(formData);

function noSubmitInsertEmailMessage() {
  //console.log(formData);

  if (localStorage.getItem(key) !== null) {
    const DataForm = JSON.parse(localStorage.getItem(key));
    //console.log('Restart', DataForm);

    input.setAttribute('value', DataForm.email);
    textareaInput.textContent = DataForm.message;
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

    formData.email = email.value;
    formData.message = message.value;
  }

  //console.log('Input2', formData);
  const dataForm = JSON.stringify(formData);
  localStorage.setItem(key, dataForm);
};

form.addEventListener('input', throttle(onInput, 1));
//throttle(onInput, 500);
//---------------------------------------------------------------------------------

const onSubmit = event => {
  event.preventDefault();
  const formData = JSON.parse(localStorage.getItem(key));

  if (formData.email === '' || formData.message === '') {
    return alert('Please fill in all the fields!');
  } else {
    console.log('Submit', formData);

    event.currentTarget.reset();

    input.setAttribute('value', '');
    textareaInput.textContent = '';

    localStorage.removeItem(key);
    event.currentTarget.reset();
    form.reset();
  }
};
form.addEventListener('submit', onSubmit);

//function OutConsol() {

//import { save, load } from './storage';
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
console.log(form);
const key = 'feedback-form-state';
const value = 'TimeRanges';

const input = document.querySelector('.feedback-form [name="email"]');
console.log(input);
const textareaInput = document.querySelector('.feedback-form [name="message"]');
let emailV = '';
let messageV = '';
let formData = { email: emailV, message: messageV };

function noSubmitInsertEmailMessage() {
  console.log(localStorage.getItem(key));
  console.log(localStorage.getItem(key) !== null);
  if (localStorage.getItem(key) !== null) {
    const DataForm = JSON.parse(localStorage.getItem(key));
    console.log('Restart', DataForm);

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
    // formData = JSON.parse(localStorage.getItem(key));
    // console.log('Input1', formData);
    // if (event.target.nodeName === 'INPUT') {
    //   console.log('EMAIL I', email.value || formData.email);
    //    emailV = email.value || formData.email;
    // } else {
    //   messageV = message.value || formData.message;
    //   console.log('MESSAGE I', message.value || formData.message);
    // }
    formData.email = email.value;
    formData.message = message.value;
  }

  console.log('Input2', formData);
  const dataForm = JSON.stringify(formData);
  localStorage.setItem(key, dataForm);
};

form.addEventListener('input', throttle(onInput, 100));
//throttle(onInput, 500);
//---------------------------------------------------------------------------------

const onSubmit = event => {
  event.preventDefault();
  console.log('Submit', formData);

  event.currentTarget.reset();

  //emailV = '';
  // messageV = '';
  if (input.hasAttribute(value)) {
    input.setAttribute(value, '');
  }
  if (textareaInput.textContent !== '') {
    textareaInput.textContent = '';
  }
  localStorage.removeItem(key);
  event.currentTarget.reset();
  form.reset();
};
form.addEventListener('submit', onSubmit);

import { save, load } from './storage';
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
console.log(form);
const key = 'feedback-form-state';
const value = 'TimeRanges';

const input = document.querySelector('.feedback-form [name="email"]');
console.log(input);
const textareaInput = document.querySelector('.feedback-form [name="message"]');

const formData = {
  emailV: (emailV = ''),
  messageV: (messageV = ''),
};

function noSubmitInsertEmailMessage() {
  //console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(localStorage.getItem(key) !== '');
  if (localStorage.getItem(key) !== '') {
    const dataForm = JSON.parse(localStorage.getItem(key)); //JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || '');
    //console.log(dataForm);
    //console.log(dataForm.email);

    input.setAttribute('value', dataForm.emailV);
    textareaInput.textContent = dataForm.messageV;
  }
}
noSubmitInsertEmailMessage();
console.log(formData);

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
      formData.emailV = email.value;
    } else {
      formData.messageV = message.value;
    }
  }

  const dataForm = JSON.stringify(formData);
  localStorage.setItem(key, dataForm);

  //const dataForm = JSON.stringify(formData);
  //localStorage.setItem(LOCALSTORAGE_KEY, dataForm);
  //console.log(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(formData);
};

form.addEventListener('input', throttle(onInput, 500));
//throttle(onInput, 500);
//---------------------------------------------------------------------------------

const onSubmit = event => {
  //event.preventDefault();

  console.log(formData);

  event.currentTarget.reset();
  formData.emailV = '';
  formData.messageV = '';
  if (input.hasAttribute(value)) {
    input.removeAttribute(value);
  }
  if (textareaInput.textContent !== '') {
    textareaInput.textContent = '';
  }
  form.reset();
  console.log(formData);
};
form.addEventListener('submit', onSubmit);

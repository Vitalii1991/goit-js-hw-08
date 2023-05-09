import { throttle } from 'lodash';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};

refs.form.addEventListener('input', throttle(onInputData, 500));
refs.form.addEventListener('submit', onFormSubmit);

const LOCALSTORAGE_KEY = 'feedback-form-state';
let formData = {};
reloadPage();

function onInputData() {
  formData = {
    email: refs.input.value.trim(),
    message: refs.textarea.value.trim(),
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  const { email, message } = e.currentTarget.elements;

  if (email.value === '' || message.value === '') {
    alert('Все поля должны быть заполнены!');
  }

  const valueForm = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  console.log(valueForm);

  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }

  refs.form.reset();
  formData = {};
}

function reloadPage() {
  const localStorageValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    refs.input.value = localStorageValue.email;
    refs.textarea.value = localStorageValue.message;
  }
}

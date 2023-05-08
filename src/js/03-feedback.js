import { debounce, throttle } from 'lodash';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', debounce(onInputValue, 1000));

const LOCALSTORAGE_KEY = 'feedback-form-state';
const inputLocalStorage = localStorage.getItem(LOCALSTORAGE_KEY);

const settings = {
  name: '',
  message: '',
};

function onInputValue(e) {
  e.preventDefault();

  if (e.target.name === 'email') {
    settings.name = e.target.value;
    console.log('Input name: ', settings.name);
  }

  if (e.target.name === 'message') {
    settings.message = e.target.value;
    console.log('Input message: ', settings.message);
  }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(settings));
  console.log(inputLocalStorage);
}

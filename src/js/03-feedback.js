import { debounce, throttle } from 'lodash';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', debounce(onInputValue, 1000));

function onInputValue(e) {
  if (e.target.name === 'email') {
    console.log('Input name: ', e.target.value);
  }

  if (e.target.name === 'message') {
    console.log('Input message: ', e.target.value);
  }
}

// const inputLocalStorage = localStorage.getItem('feedback-form-state');

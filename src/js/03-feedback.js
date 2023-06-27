
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = "feedback-form-state";


function onInput(e) {
    const formData = {};
    formData[e.target.name] =  e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  
}

updateFormFields();

function updateFormFields() {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      inputEl.value = parsedData.email;
      messageEl.value = parsedData.message;
    }
  }
  

 function onFormSubmit(e) {
    e.preventDefault();
    
    console.log({email: inputEl.value, message: messageEl.value});
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}



import throttle from 'lodash.throttle';

const KEY_STORAGE = 'feedback-form-state';

const input = document.querySelector(".feedback-form")
input.addEventListener("input", throttle(onFormsInput, 500))
input.addEventListener("submit", onFormsSubmit)
const reload = localStorage.getItem(KEY_STORAGE);
let formData = reload ? JSON.parse(reload):{};
reloading();
function onFormsInput(ev) {
    
    const { name, value } = ev.target;
    formData[name] = value;
    try {
    localStorage.setItem(KEY_STORAGE, JSON.stringify(formData));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
function onFormsSubmit(ev) {
     ev.preventDefault();
    console.log(formData)
    ev.target.reset();
    localStorage.removeItem(KEY_STORAGE)
    formData = {}
}
function reloading() {
    const data = JSON.parse(localStorage.getItem(KEY_STORAGE));
    if(!data) {
        return
    }
    const refectory = Object.entries(data);
    refectory.forEach(([name, value]) => {
    input.elements[name].value = value;
  });
}
 
import Vue  from 'vue'

window.debounce = (func, wait, immediate)=> {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;

    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

window.languages = Vue.prototype.languages = ['en', 'de'];
window.languagesObject = Vue.prototype.languagesObject = {'en':null,'de':null};

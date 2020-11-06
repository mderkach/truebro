import './inputField.scss';

const inputField = {
  el: document.querySelectorAll('input'),
  placeholder(input) {
    const placeholder = input.getAttribute('placeholder');
    if (placeholder) {
      input.addEventListener('focus', () => {
        input.setAttribute('placeholder', '');
      });
      input.addEventListener('blur', () => {
        input.setAttribute('placeholder', placeholder);
      });
    }
  },
  init() {
    inputField.el.forEach((el) => {
      inputField.placeholder(el);
    });
  },
};

export default inputField;

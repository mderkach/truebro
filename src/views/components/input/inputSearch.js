// eslint-disable-next-line no-unused-vars
import API from '~/js/API';

import './inputSearch.scss';

const inputSearch = {
  el: '.input-search-wrapper',
  trigger: '.input-search-button',
  setLoading(bool, elm) {
    if (bool) {
      elm.classList.add('is-loading');
      inputSearch.setLoadingIcon(true, elm.querySelector('.input-search-button'));
    } else {
      elm.classList.remove('is-loading');
      inputSearch.setLoadingIcon(false, elm.querySelector('.input-search-button'));
    }
  },
  setLoadingIcon(bool, btn) {
    const xlinkHref = './assets/img/svg/sprite.svg';
    const svgXlink = 'http://www.w3.org/1999/xlink';
    const loadIcon = '#loading-icon';
    const searchIcon = '#loupe-icon';
    const targetIconEl = btn.querySelector('svg').querySelector('use');

    if (bool) {
      targetIconEl.setAttributeNS(svgXlink, 'xlink:href', `${xlinkHref}${loadIcon}`);
    } else {
      targetIconEl.setAttributeNS(svgXlink, 'xlink:href', `${xlinkHref}${searchIcon}`);
    }
  },
  expandForm(elm) {
    if (elm.classList.contains('is-expanded')) {
      // submit logic here
      //
      // API.post().then(res => console.log(res.data)).catch(err => console.log(err))
      //
      // while searching set loading icon
      inputSearch.setLoading(true, elm);
      // after submit remove settimeout and move nested function to upper scope
      setTimeout(() => {
        inputSearch.setLoading(false, elm);
        elm.classList.remove('is-expanded');
        elm.querySelector('.input-search').setAttribute('value', '');
        elm.querySelector('.input-search').blur();
      }, 2500);
    } else {
      elm.classList.add('is-expanded');
      elm.querySelector('.input-search').focus();
    }
  },
  init() {
    const elements = document.querySelectorAll(this.el);
    if (elements) {
      elements.forEach((form) => {
        const trigger = form.querySelector(inputSearch.trigger);

        trigger.addEventListener('click', (e) => {
          e.preventDefault();

          inputSearch.expandForm(form);
        });
      });
    }
  },
};

export default inputSearch;

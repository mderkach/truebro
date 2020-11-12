import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// style
import './header.scss';

const header = {
  mobile: document.querySelector('.header__mobile'),
  menu: document.querySelector('.header__mobile-menu-wrapper'),
  menuTrigger: document.querySelector('.header__nav-trigger'),
  closeMenuTrigger: document.querySelector('.header__mobile-menu-close'),
  toggleMenu() {
    this.mobile.classList.toggle('is-active');

    if (this.mobile.classList.contains('is-active')) {
      disableBodyScroll(this.menu);
    } else {
      enableBodyScroll(this.menu);
    }
  },
  isMobile() {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0,
    );
    if (vw <= 1366) return true;
    return false;
  },
  init() {
    if (this.mobile && this.menuTrigger && this.closeMenuTrigger) {
      const mobile = this.isMobile();

      if (mobile) {
        this.menuTrigger.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleMenu();
        });

        this.closeMenuTrigger.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleMenu();
        });
      }
    }
  },
};
export default header;

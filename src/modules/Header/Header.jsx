import React, { createRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// components
import Wrapper from '~cmp/Wrapper/Wrapper';
import Icon from '~cmp/Icon/Icon';
import Button from '~cmp/Button/Button';
import InputSearch from '~cmp/Input/InputSearch/InputSearch';
// utils
// styles
import styles from './header.local';

const HeaderDesktop = (props) => {
  const { nav, socials, ToggleMenu } = props;

  return (
    <>
      <header className={styles.Header}>
        <Wrapper extClass={styles.HeaderContainer}>
          <Link className={styles.HeaderBrand} to="/">
            <Icon cls={styles.HeaderBrandLogo} name="logo" />
          </Link>
          <div className={styles.HeaderNavWrapper}>
            <Button
              onClick={(e) => ToggleMenu(e)}
              variant="primary"
              type="link"
              cls={styles.HeaderNavTrigger}
            >
              <Icon cls={styles.HeaderNavTriggerIcon} name="hamburger-icon" />
            </Button>
            <nav className={styles.HeaderNav}>
              {nav.map((item) => (
                <NavLink
                  key={item.label}
                  className={`h3 ${styles.HeaderNavLink}`}
                  activeClassName={styles.HeaderNavLinkActive}
                  to={item.path}
                  exact={item.exact}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className={styles.HeaderSocialsWrapper}>
            <InputSearch name="search-header" />
            {socials.map((item) => (
              <a
                key={item.icon}
                className={styles.HeaderSocialsItem}
                href={item.path}
                target="_blank"
                rel="nofollow noreferrer"
              >
                <Icon cls={styles.HeaderSocialsIcon} name={item.icon} />
              </a>
            ))}
          </div>
        </Wrapper>
      </header>
    </>
  );
};

const HeaderMobile = (props) => {
  const { nav, socials, ToggleMenu, expanded, mobileMenu } = props;

  return (
    <>
      <header className={styles.HeaderMobile}>
        <div data-expanded={expanded} className={styles.HeaderMobileBackdrop} />
        <div data-expanded={expanded} ref={mobileMenu} className={styles.HeaderMobileMenuWrapper}>
          <div className={styles.HeaderMobileMenuControls}>
            <InputSearch name="search-header-mobile" />
            <a onClick={(e) => ToggleMenu(e)} className={styles.HeaderMobileMenuClose} href="/">
              <Icon cls={styles.HeaderMobileMenuCloseIcon} name="cross-icon" />
            </a>
          </div>
          <nav className={styles.HeaderMobileMenu}>
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-regular ${styles.HeaderMobileMenuLink}`}
              >
                <span>{item.label}</span>
                <Icon cls={styles.HeaderSocialsIcon} name="chevron-right-icon" />
              </Link>
            ))}
          </nav>
          <div className={styles.HeaderMobileMenuBottom}>
            <div className={styles.HeaderSocialsWrapper}>
              {socials.map((item) => (
                <a
                  key={item.icon}
                  className={styles.HeaderSocialsItem}
                  href={item.path}
                  target="_blank"
                  rel="nofollow noreferrer"
                >
                  <Icon cls={styles.HeaderSocialsIcon} name={item.icon} />
                </a>
              ))}
            </div>
            <p className={`text-extrasmall ${styles.HeaderMobileMenuBottomText}`}>
              Присоединяйтесь!
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

const Header = (props) => {
  const { nav, socials } = props;
  const [expanded, setExpanded] = useState(false);

  const mobileMenu = createRef();

  const ToggleMenu = (e) => {
    e.preventDefault();

    setExpanded(!expanded);

    if (expanded) {
      disableBodyScroll(mobileMenu.current);
    } else {
      enableBodyScroll(mobileMenu.current);
    }
  };

  return (
    <>
      <HeaderDesktop nav={nav} socials={socials} ToggleMenu={ToggleMenu} />
      <HeaderMobile
        nav={nav}
        socials={socials}
        ToggleMenu={ToggleMenu}
        expanded={expanded}
        mobileMenu={mobileMenu}
      />
    </>
  );
};

export default Header;

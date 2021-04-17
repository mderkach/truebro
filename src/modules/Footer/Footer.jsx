import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
// components
import Wrapper from '/src/components/Wrapper/Wrapper';
import Icon from '/src/components/Icon/Icon';
// styles
import styles from './Footer.local';

const Footer = ({ nav, socials, text }) => {
  return (
    <footer className={styles.Footer}>
      <Wrapper cls={styles.FooterContainer}>
        <div className={styles.FooterTop}>
          <nav className={styles.FooterNav}>
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={classNames('h3', styles.FooterNavLink)}
              >
                <span>{item.label}</span>
                <Icon cls={styles.FooterNavIcon} name="chevron-right-icon" />
              </Link>
            ))}
          </nav>
          <div className={styles.FooterSocialsWrapper}>
            <p
              className={classNames('text-extrasmall', styles.FooterText, styles.FooterSocialsText)}
            >
              Присоединяйтесь!
            </p>
            {socials.map((item) => (
              <a
                key={item.icon}
                href={item.path}
                target="_blank"
                rel="nofollow noreferrer"
                className={classNames('h3', styles.FooterSocialsItem)}
              >
                <Icon cls={styles.FooterSocialsIcon} name={item.icon} />
              </a>
            ))}
          </div>
        </div>
        <p className={classNames('text-extrasmall', styles.FooterText)}>{text}</p>
        <Link to="/" className={styles.FooterBrand}>
          <Icon cls={styles.FooterBrandLogo} name="logo" />
        </Link>
      </Wrapper>
    </footer>
  );
};

export default Footer;

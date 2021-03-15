import React from 'react';
import { Link } from 'react-router-dom';
// components
import Wrapper from '/src/components/Wrapper/Wrapper';
import Icon from '/src/components/Icon/Icon';
// styles
import styles from './Footer.local';

const Footer = (props) => {
  const { nav, socials } = props;

  return (
    <footer className={styles.Footer}>
      <Wrapper cls={styles.FooterContainer}>
        <div className={styles.FooterTop}>
          <nav className={styles.FooterNav}>
            {nav.map((item) => (
              <Link key={item.label} to={item.path} className={`h3 ${styles.FooterNavLink}`}>
                <span>{item.label}</span>
                <Icon cls={styles.FooterNavIcon} name="chevron-right-icon" />
              </Link>
            ))}
          </nav>
          <div className={styles.FooterSocialsWrapper}>
            <p className={`text-extrasmall ${styles.FooterText} ${styles.FooterSocialsText}`}>
              Присоединяйтесь!
            </p>
            {socials.map((item) => (
              <a
                key={item.icon}
                href={item.path}
                target="_blank"
                rel="nofollow noreferrer"
                className={`h3 ${styles.FooterSocialsItem}`}
              >
                <Icon cls={styles.FooterSocialsIcon} name={item.icon} />
              </a>
            ))}
          </div>
        </div>
        <p className={`text-extrasmall ${styles.FooterText}`}>
          Основание для выбора компании должно быть комплексным. Вас должны удовлетворять все
          критерии: авторитетность и имидж брокера на рынке, история работы в России и наличие
          обучающих материалов. Важной характеристикой в рейтинге брокеров Форекс является удобство
          и бесперебойность торговой платформы, быстрая техническая поддержка и наконец, низкие
          спреды. Если вы планируете сделку с долгосрочной перспективой высокий спред может
          потратить значительную часть депозита.
        </p>
        <Link to="/" className={styles.FooterBrand}>
          <Icon cls={styles.FooterBrandLogo} name="logo" />
        </Link>
      </Wrapper>
    </footer>
  );
};

export default Footer;

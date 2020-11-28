import React from 'react';
import { useHistory } from 'react-router-dom';
// components
import Wrapper from '~cmp/Wrapper/Wrapper';
import Icon from '~cmp/Icon/Icon';
// styles
import styles from './Footer.local';

const Footer = (props) => {
  const { nav, socials } = props;
  const history = useHistory();

  const redirectInternal = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute('href');
    history.push(target);
  };

  const redirectExternal = (e, ...args) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    window.open(target, '_blank', args);
  };

  return (
    <footer className={styles.Footer}>
      <Wrapper cls={styles.FooterContainer}>
        <div className={styles.FooterTop}>
          <nav className={styles.FooterNav}>
            {nav.map((item) => (
              <a
                key={item.label}
                onClick={(e) => redirectInternal(e)}
                href={item.path}
                className={`h3 ${styles.FooterNavLink}`}
              >
                <span>{item.label}</span>
                <Icon cls={styles.FooterNavIcon} name="chevron-right-icon" />
              </a>
            ))}
          </nav>
          <div className={styles.FooterSocialsWrapper}>
            <p className={`text-extrasmall ${styles.FooterText} ${styles.FooterSocialsText}`}>
              Присоединяйтесь!
            </p>
            {socials.map((item) => (
              <a
                key={item.icon}
                onClick={(e) => redirectExternal(e)}
                href={item.path}
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
        <a href="/" className={styles.FooterBrand}>
          <Icon cls={styles.FooterBrandLogo} name="logo" />
        </a>
      </Wrapper>
    </footer>
  );
};

export default Footer;

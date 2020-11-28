import React from 'react';
// components
import Wrapper from '~cmp/Wrapper/Wrapper';
import Button from '~cmp/Button/Button';
import Icon from '~cmp/Icon/Icon';
import InputField from '~cmp/Input/InputField/InputField';
// styles
import styles from './ScreenBroker.local';

const ScreenBroker = (props) => {
  const { title, descr, containerClass, svg, action } = props;

  return (
    <section className={styles.ScreenBroker}>
      <Wrapper extClass={`${styles.ScreenBrokerContainer} ${containerClass || ''}`}>
        <div className={styles.ScreenBrokerOuter}>
          <Icon cls={styles.ScreenBrokerBrand} name={svg} />
          <div>
            <h2 className="h2 bold">{title}</h2>
            <p className="text-regular">{descr}</p>
          </div>
          <div className={styles.ScreenBrokerDivider} />
          <form action={action} method="POST" className={styles.ScreenBrokerForm}>
            <h2 className="h2 bold">Подпишитесь на рассылки и обновления TrueBRO</h2>
            <div className={styles.ScreenBrokerFormBody}>
              <InputField type="email" name="email" placeholder="Пожалуйста, введите ваш е-мail" />
              <Button variant="primary" type="submit" text="Подписаться" />
              <p className={`text-small ${styles.ScreenBrokerFormAgreement}`}>
                Нажимая на кнопку «Подписаться» я даю согласие на обработку персональных данных и
                подтверждаю что мне есть 18 лет.
              </p>
            </div>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default ScreenBroker;

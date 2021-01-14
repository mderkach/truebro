import React from 'react';
import classNames from 'classnames/bind';
// components
import Button from '~cmp/Button/Button';
import InputField from '~cmp/Input/InputField/InputField';
// styles
import styles from './ScreenSubscribe.local';

console.log(styles);
const classes = classNames.bind(styles);

const AgreementClass = classes({
  'text-small': true,
  ScreenSubscribeAgreement: true,
});

const ScreenSubscribe = ({ action }) => {
  return (
    <form action={action} method="POST" className={styles.ScreenSubscribe}>
      <h2 className="h2 bold">Подпишитесь на рассылки и обновления TrueBRO</h2>
      <div className={styles.ScreenSubscribeBody}>
        <InputField type="email" name="email" placeholder="Пожалуйста, введите ваш е-мail" />
        <Button variant="primary" type="submit" text="Подписаться" />
        <p className={AgreementClass}>
          Нажимая на кнопку «Подписаться» я даю согласие на обработку персональных данных и
          подтверждаю что мне есть 18 лет.
        </p>
      </div>
    </form>
  );
};

export default ScreenSubscribe;

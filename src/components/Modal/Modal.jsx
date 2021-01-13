/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
// components
import Icon from '~cmp/Icon/Icon';
import InputField from '~cmp/Input/InputField/InputField';
import InputTextArea from '~cmp/Input/InputTextArea/InputTextArea';
import Button from '~cmp/Button/Button';
// styles
import styles from './Modal.local';

const classes = classNames.bind(styles);

const Header = classes({
  medium: true,
  Header: true,
});

const Agreement = classes({
  'text-small': true,
  Agreement: true,
});

const Modal = observer(() => {
  return (
    <div className={styles.Modal}>
      <div className={styles.Body}>
        <div className={styles.Head}>
          <p className={Header}>Оформите претензию</p>
          <Icon cls={styles.Icon} name="cross-icon" />
        </div>
        <InputField name="name" labeled labelText={<span className="text-regular">Имя:</span>} />
        <InputField
          type="email"
          name="mail"
          labeled
          labelText={<span className="text-regular">E-mail:</span>}
        />
        <InputField
          type="number"
          name="sum"
          placeholder="100"
          labeled
          labelText={<span className="text-regular">Сумма петензии:</span>}
        />
        <InputTextArea
          name="pretension"
          rows={2}
          labeled
          labelText={<span className="text-regular">Опишите претензию:</span>}
        />
        <p className={Agreement}>
          Нажимая на кнопку «Отправить» я даю согласие на обработку персональных данных и
          подтверждаю что мне есть 18 лет.
        </p>
        <Button variant="primary" cls={styles.Submit} type="button" text="Отправить" />
      </div>
    </div>
  );
});

export default Modal;

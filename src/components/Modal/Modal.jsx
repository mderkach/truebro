/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// components
import Icon from '/src/components/Icon/Icon';
import InputField from '/src/components/Input/InputField/InputField';
import InputTextArea from '/src/components/Input/InputTextarea/InputTextarea';
import Button from '/src/components/Button/Button';
import Rating from '/src/components/Rating/Rating';
// styles
import styles from './Modal.local';
// store
import Store from '/src/utils/Store';

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
  const ModalWrapper = classes({
    'is-active': Store.isModalShowed,
    Modal: true,
  });

  if (Store.isModalShowed) {
    disableBodyScroll(document.documentElement);
  } else {
    enableBodyScroll(document.documentElement);
  }

  const [rating, setRating] = useState(1);

  return (
    <div
      role="presentation"
      className={ModalWrapper}
      onClick={(e) => {
        e.preventDefault();
        Store.showModal();
      }}
    >
      <div
        role="presentation"
        className={styles.Body}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className={styles.Head}>
          <p className={Header}>
            {Store.modalVariant === 'pretension' ? 'Оформите претензию' : 'Написать отзыв'}
          </p>
          <Icon
            cls={styles.Icon}
            name="cross-icon"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              Store.showModal();
            }}
          />
        </div>
        <InputField name="name" labeled labelText={<span className="text-regular">Имя:</span>} />
        <InputField
          type="email"
          name="mail"
          labeled
          labelText={<span className="text-regular">E-mail:</span>}
        />
        {Store.modalVariant === 'pretension' && (
          <InputField
            type="number"
            name="sum"
            placeholder="100"
            labeled
            labelText={<span className="text-regular">Сумма петензии:</span>}
          />
        )}
        {Store.modalVariant === 'feedback' && (
          <div className={styles.Rating}>
            {[...Array(5)].map((_, i) => (
              <Button
                // eslint-disable-next-line react/no-array-index-key
                key={`${i}-RatingModal`}
                variant="secondary"
                type="button"
                text={i + 1}
                cls={classes(styles.RatingButton, rating === i + 1 ? 'is-active' : null)}
                onClick={(e) => {
                  e.preventDefault();
                  setRating(i + 1);
                }}
              />
            ))}
            <Rating rating={rating} hiddenClass={styles.RatingHide} />
          </div>
        )}
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

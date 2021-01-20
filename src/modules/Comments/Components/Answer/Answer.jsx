import React from 'react';
// components
import Button from '~cmp/Button/Button';
import InputField from '~cmp/Input/InputField/InputField';

import styles from './Anser.local.scss';

const Answer = ({ id }) => {
  return (
    <div className={styles.Answer}>
      <InputField
        placeholder="Пожалуйста, добавьте ваш комментарий"
        type="text"
        name={id}
        labeled
        labelClass={styles.Field}
      />
      <Button cls={styles.Decline} variant="tertiary" text="Отменить" />
      <Button cls={styles.Public} variant="primary" text="Публиковать" />
    </div>
  );
};

export default Answer;

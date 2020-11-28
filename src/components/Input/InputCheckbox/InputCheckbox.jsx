import React from 'react';

import Icon from '~cmp/Icon/Icon';

import styles from './InputCheckbox.local';

const InputCheckbox = (props) => {
  const { name, description, mapIndex = 0, ...rest } = props;

  return (
    <label htmlFor={name + mapIndex} className={styles.InputCheckbox} {...rest}>
      <input type="checkbox" name={name} id={name + mapIndex} />
      <div className={styles.InputCheckboxBox} />
      <Icon cls={styles.InputCheckboxIcon} name="check-icon-input" />
      {description && <p className="text-regular">{description}</p>}
    </label>
  );
};

export default InputCheckbox;

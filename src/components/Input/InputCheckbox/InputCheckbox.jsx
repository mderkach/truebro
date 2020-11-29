import React, { useState } from 'react';

import Icon from '~cmp/Icon/Icon';

import styles from './InputCheckbox.local';

const InputCheckbox = (props) => {
  const { name, description, mapIndex = 0, checked = false, onChange, ...rest } = props;
  const [isChecked, setChecked] = useState(checked);

  const onCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <label htmlFor={name + mapIndex} className={styles.InputCheckbox}>
      <input
        type="checkbox"
        name={name}
        id={name + mapIndex}
        checked={isChecked}
        onChange={(e) => {
          onCheckboxChange(e);
          if (onChange) onChange(e);
        }}
        {...rest}
      />
      <div className={styles.InputCheckboxBox} />
      <Icon cls={styles.InputCheckboxIcon} name="check-icon-input" />
      {description && <p className="text-regular">{description}</p>}
    </label>
  );
};

export default InputCheckbox;

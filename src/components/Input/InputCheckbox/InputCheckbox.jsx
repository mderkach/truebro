import React, { useState } from 'react';

import Icon from '/src/components/Icon/Icon';

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
      <span className={styles.InputCheckboxBox} />
      <Icon cls={styles.InputCheckboxIcon} name="check-icon-input" />
      {description && <span className="text-regular">{description}</span>}
    </label>
  );
};

export default InputCheckbox;

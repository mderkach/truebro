import React from 'react';

import styles from './InputField.local';

const InputField = (props) => {
  const { type, name, placeholder } = props;

  const onFocusHandler = (e) => {
    e.target.setAttribute('placeholder', '');
  };

  const onBlurHandler = (e) => {
    e.target.setAttribute('placeholder', placeholder);
  };

  return (
    <input
      className={`text-small ${styles.InputField}`}
      type={type}
      name={name}
      placeholder={placeholder}
      onFocus={(e) => onFocusHandler(e)}
      onBlur={(e) => onBlurHandler(e)}
    />
  );
};

export default InputField;

import React from 'react';
import classNames from 'classnames/bind';
// styles
import styles from './InputField.local';

const classes = classNames.bind(styles);

const InputField = (props) => {
  const { type, name, placeholder } = props;

  const onFocusHandler = (e) => {
    e.target.setAttribute('placeholder', '');
  };

  const onBlurHandler = (e) => {
    e.target.setAttribute('placeholder', placeholder);
  };

  const input = classes({
    'text-small': true,
    InputField: true,
  });

  return (
    <input
      className={input}
      type={type}
      name={name}
      placeholder={placeholder}
      onFocus={(e) => onFocusHandler(e)}
      onBlur={(e) => onBlurHandler(e)}
    />
  );
};

export default InputField;

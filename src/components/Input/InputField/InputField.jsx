import React from 'react';
import classNames from 'classnames/bind';
// styles
import styles from './InputField.local';

const classes = classNames.bind(styles);

const input = classes({
  'text-small': true,
  InputField: true,
});

const InputField = (props) => {
  const {
    type,
    name,
    placeholder,
    onChange,
    onFocus,
    onBlur,
    labeled,
    labelClass,
    labelText,
  } = props;

  const onFocusHandler = (e) => {
    e.target.setAttribute('placeholder', '');
    if (onFocus) onFocus(e);
  };

  const onBlurHandler = (e) => {
    e.target.setAttribute('placeholder', placeholder || '');
    if (onBlur) onBlur(e);
  };

  const onChangeHandler = (e) => {
    if (onChange) onChange(e);
  };

  const Input = (
    <input
      className={input}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e)}
      onFocus={(e) => onFocusHandler(e)}
      onBlur={(e) => onBlurHandler(e)}
    />
  );

  if (labeled) {
    return (
      <label htmlFor={name} className={labelClass}>
        {labelText}
        {Input}
      </label>
    );
  }

  return Input;
};

export default InputField;

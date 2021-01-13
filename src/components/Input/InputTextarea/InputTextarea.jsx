import React from 'react';
import classNames from 'classnames/bind';
// styles
import styles from './InputTextArea.local';

const classes = classNames.bind(styles);

const input = classes({
  'text-small': true,
  InputTextArea: true,
});

const InputTextArea = (props) => {
  const { type, name, rows, onChange, onFocus, onBlur, labeled, labelClass, labelText } = props;

  const onFocusHandler = (e) => {
    if (onFocus) onFocus(e);
  };

  const onBlurHandler = (e) => {
    if (onBlur) onBlur(e);
  };

  const onChangeHandler = (e) => {
    if (onChange) onChange(e);
  };

  const Textarea = (
    <textarea
      className={input}
      type={type}
      name={name}
      id={name}
      rows={rows || 2}
      onChange={(e) => onChangeHandler(e)}
      onFocus={(e) => onFocusHandler(e)}
      onBlur={(e) => onBlurHandler(e)}
    />
  );

  if (labeled) {
    return (
      <label htmlFor={name} className={labelClass}>
        {labelText}
        {Textarea}
      </label>
    );
  }

  return Textarea;
};

export default InputTextArea;

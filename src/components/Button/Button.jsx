import React from 'react';
import classNames from 'classnames/bind';
// styles
import styles from './Button.local';

const classes = classNames.bind(styles);

const Button = (props) => {
  const { children, cls, type, href, variant = 'primary', text, ...rest } = props;

  const btnClass = classes({
    'text-small': true,
    medium: true,
    ButtonPrimary: variant === 'primary',
    ButtonSecondary: variant !== 'primary',
    [cls]: cls,
  });

  return (
    <>
      {type === 'submit' && (
        <button type="submit" className={btnClass} {...rest}>
          {text}
          {children}
        </button>
      )}
      {type === 'link' && (
        <a href={href} className={btnClass} {...rest}>
          {text}
          {children}
        </a>
      )}
      {type === 'button' && (
        <button type="button" className={btnClass} {...rest}>
          <span>{text}</span>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

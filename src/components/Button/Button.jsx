import React from 'react';
import { Link } from 'react-router-dom';
// utils
import classNames from 'classnames/bind';
// styles
import styles from './Button.local';

const classes = classNames.bind(styles);

const Button = (props) => {
  const { children, cls, type = 'button', href, variant = 'primary', text, ...rest } = props;

  const btnClass = classes({
    'text-small': true,
    'text-regular': type === 'router',
    medium: variant !== 'chip',
    ButtonPrimary: variant === 'primary' && type !== 'router',
    ButtonSecondary: variant === 'secondary',
    ButtonTertiary: variant === 'tertiary' || type === 'router',
    ButtonChip: variant === 'chip',
    [cls]: cls,
  });

  return (
    <>
      {type === 'submit' && (
        <button type="submit" className={btnClass} {...rest}>
          {text && <span>{text}</span>}
          {children}
        </button>
      )}
      {type === 'link' && (
        <a href={href} className={btnClass} {...rest}>
          {text && <span>{text}</span>}
          {children}
        </a>
      )}
      {type === 'button' && (
        <button type="button" className={btnClass} {...rest}>
          {text && <span>{text}</span>}
          {children}
        </button>
      )}
      {type === 'router' && (
        <Link className={btnClass} {...rest}>
          {text && <span>{text}</span>}
          {children}
        </Link>
      )}
    </>
  );
};

export default Button;

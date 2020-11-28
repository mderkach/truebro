import React from 'react';

import styles from './Button.local';

const Button = (props) => {
  const { children, cls, type, href, variant = 'primary', text, ...rest } = props;

  return (
    <>
      {type === 'submit' && (
        <button
          type="submit"
          className={`text-small medium ${
            variant === 'primary' ? styles.ButtonPrimary : styles.ButtonSecondary
          } ${cls}`}
          {...rest}
        >
          {text}
          {children}
        </button>
      )}
      {type === 'link' && (
        <a
          href={href}
          className={`text-small medium ${
            variant === 'primary' ? styles.ButtonPrimary : styles.ButtonSecondary
          } ${cls}`}
          {...rest}
        >
          {text}
          {children}
        </a>
      )}
      {type === 'button' && (
        <button
          type="button"
          className={`text-small medium ${
            variant === 'primary' ? styles.ButtonPrimary : styles.ButtonSecondary
          } ${cls}`}
          {...rest}
        >
          {text}
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

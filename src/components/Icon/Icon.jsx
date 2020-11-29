import React from 'react';

const Icon = (props) => {
  const { cls, name, ...rest } = props;

  return (
    <svg className={cls} {...rest}>
      <use xlinkHref={`./assets/img/svg/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;

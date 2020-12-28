import React from 'react';

const Icon = (props) => {
  const { cls, name, fill, ...rest } = props;

  return (
    <svg className={cls} fill={fill} {...rest}>
      <use xlinkHref={`./assets/img/svg/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;

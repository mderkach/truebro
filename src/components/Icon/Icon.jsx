import React from 'react';

const Icon = (props) => {
  const { cls, name } = props;

  return (
    <svg className={cls}>
      <use xlinkHref={`./assets/img/svg/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;

import React from 'react';
import classNames from 'classnames/bind';
// styles
import styles from './Wrapper.local';

const classes = classNames.bind(styles);

const Wrapper = (props) => {
  const { children, extClass } = props;

  const WrapperClass = classes({
    container: true,
    [extClass]: extClass,
  });

  return (
    <>
      <div className={WrapperClass}>{children}</div>
    </>
  );
};

export default Wrapper;

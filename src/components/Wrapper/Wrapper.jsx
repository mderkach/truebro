import React from 'react';
import styles from './Wrapper.local';

const Wrapper = (props) => {
  const { children, extClass } = props;

  return (
    <>
      <div className={extClass ? `${styles.container} ${extClass}` : styles.container}>
        {children}
      </div>
    </>
  );
};

export default Wrapper;

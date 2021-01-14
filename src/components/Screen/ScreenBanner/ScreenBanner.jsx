import React from 'react';

import Wrapper from '~cmp/Wrapper/Wrapper';

import styles from './ScreenBanner.local';

const ScreenBanner = (props) => {
  const { title, descr, containerClass } = props;

  return (
    <section className={styles.ScreenBanner}>
      <Wrapper extClass={containerClass || ''}>
        <div className={styles.ScreenBannerOuter}>
          <h1 className="h1 bold">{title}</h1>
          {descr && <p className="text-regular">{descr}</p>}
        </div>
      </Wrapper>
    </section>
  );
};

export default ScreenBanner;

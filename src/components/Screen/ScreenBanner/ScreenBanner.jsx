import React from 'react';
import classNames from 'classnames/bind';
import Wrapper from '/src/components/Wrapper/Wrapper';

import styles from './ScreenBanner.local';

const ScreenBanner = ({ title, descr, containerClass, fluid }) => (
  <section className={styles.ScreenBanner}>
    <Wrapper extClass={containerClass || ''}>
      <div className={classNames(styles.ScreenBannerOuter, fluid === true ? 'fluid' : null)}>
        <h1 className="h1 bold">{title}</h1>
        {descr && <p className="text-regular">{descr}</p>}
      </div>
    </Wrapper>
  </section>
);

export default ScreenBanner;

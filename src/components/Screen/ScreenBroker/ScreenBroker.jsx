import React from 'react';
import classNames from 'classnames/bind';
// components
import Wrapper from '~cmp/Wrapper/Wrapper';
import Icon from '~cmp/Icon/Icon';
import ScreenSubscribe from '~cmp/Screen/ScreenSubscribe/ScreenSubscribe';
// styles
import styles from './ScreenBroker.local';

const classes = classNames.bind(styles);

const ScreenBroker = (props) => {
  const { title, descr, containerClass, svg, action } = props;

  const WrapperClass = classes({
    ScreenBrokerContainer: true,
    [containerClass]: containerClass,
  });

  return (
    <section className={styles.ScreenBroker}>
      <Wrapper extClass={WrapperClass}>
        <div className={styles.ScreenBrokerOuter}>
          <Icon cls={styles.ScreenBrokerBrand} name={svg} />
          <div>
            <h2 className="h2 bold">{title}</h2>
            <p className="text-regular">{descr}</p>
          </div>
          <div className={styles.ScreenBrokerDivider} />
          <ScreenSubscribe action={action} />
        </div>
      </Wrapper>
    </section>
  );
};

export default ScreenBroker;

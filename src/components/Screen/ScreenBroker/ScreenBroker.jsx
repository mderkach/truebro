import React from 'react';
import classNames from 'classnames/bind';
// components
import Wrapper from '/src/components/Wrapper/Wrapper';
// import Icon from '/src/components/Icon/Icon';
import Picture from '/src/components/Picture/Picture';
import ScreenSubscribe from '/src/components/Screen/ScreenSubscribe/ScreenSubscribe';
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
          {/* <Icon cls={styles.ScreenBrokerBrand} name={svg} /> */}
          <Picture cls={styles.ScreenBrokerBrand} src={svg} />
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

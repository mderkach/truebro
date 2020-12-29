import React from 'react';
import Picture from '~cmp/Picture/Picture';
import styles from './BrokerPaymentSystems.local';

const BrokerPaymentSystems = (props) => {
  const { items } = props;

  return (
    <>
      <div className={styles.Wrapper}>
        <h3 className="h3 medium">Платежные системы</h3>
        <div className={styles.PictureWrapper}>
          {items.map(
            (i, index) => index < 12 && <Picture key={i.src} src={i.src} cls={styles.Picture} />,
          )}
        </div>
      </div>
    </>
  );
};

export default BrokerPaymentSystems;

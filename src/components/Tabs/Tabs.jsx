import React, { useState } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
// styles
import styles from './Tabs.local';

const classes = classNames.bind(styles);

const TabsButton = (props) => {
  const { text, cls, ...rest } = props;

  const ButtonClass = classes({
    'text-small': true,
    TabsButton: true,
    [cls]: cls,
  });

  return (
    <>
      <button type="button" className={ButtonClass} {...rest}>
        {text}
      </button>
    </>
  );
};

const TabContent = (props) => {
  const { children, cls } = props;

  const ContentClass = classes({
    TabsContent: true,
    [cls]: cls,
  });

  return <div className={ContentClass}>{children}</div>;
};

const Tabs = (props) => {
  const { children } = props;

  const [activeTab, setActiveTab] = useState(children[0].key);

  const isActive = (bool) =>
    classes({
      'is-active': bool,
    });

  return (
    <>
      <div className={styles.TabsWrapper}>
        <div className={styles.TabsHead}>
          {children.map((item) => (
            <TabsButton
              key={item.key}
              text={item.key}
              cls={isActive(activeTab === item.key)}
              onClick={() => {
                setActiveTab(item.key);
              }}
            />
          ))}
        </div>
        <div className={styles.TabsBody}>
          {children.map((item) => (
            <TabContent key={item.key} cls={isActive(activeTab === item.key)}>
              {item}
            </TabContent>
          ))}
        </div>
      </div>
    </>
  );
};

export default observer(Tabs);

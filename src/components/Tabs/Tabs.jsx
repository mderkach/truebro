import React, { useState } from 'react';
import { observer } from 'mobx-react';
// styles
import styles from './Tabs.local';

const TabsButton = (props) => {
  const { text, cls, ...rest } = props;
  return (
    <>
      <button type="button" className={`text-small ${styles.TabsButton} ${cls}`} {...rest}>
        {text}
      </button>
    </>
  );
};

const TabContent = (props) => {
  const { children, cls } = props;
  return <div className={`${styles.TabsContent} ${cls}`}>{children}</div>;
};

const Tabs = (props) => {
  const { children } = props;

  const [activeTab, setActiveTab] = useState(children[0].key);

  return (
    <>
      <div className={styles.TabsWrapper}>
        <div className={styles.TabsHead}>
          {children.map((item) => (
            <TabsButton
              key={item.key}
              text={item.key}
              cls={activeTab === item.key ? 'is-active' : ''}
              onClick={() => {
                setActiveTab(item.key);
              }}
            />
          ))}
        </div>
        <div className={styles.TabsBody}>
          {children.map((item) => (
            <TabContent key={item.key} cls={activeTab === item.key ? 'is-active' : ''}>
              {item}
            </TabContent>
          ))}
        </div>
      </div>
    </>
  );
};

export default observer(Tabs);

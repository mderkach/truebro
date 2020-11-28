import React from 'react';
import { Link } from 'react-router-dom';
// components
import Wrapper from '~cmp/Wrapper/Wrapper';
// styles
import styles from './Breadcrumbs.local';

const breadcrumbs = (props) => {
  const { links } = props;

  return (
    <Wrapper>
      <nav className={styles.Breadcrumbs}>
        {links.map((link, index) => (
          <div key={link.descr}>
            <Link className={`text-regular ${styles.BreadcrumbsItem}`} to={link.href}>
              {link.descr}
            </Link>
            {index !== links.length - 1 && (
              <span className={styles.BreadcrumbsDivider}>&nbsp;/&nbsp;</span>
            )}
          </div>
        ))}
      </nav>
    </Wrapper>
  );
};

export default breadcrumbs;

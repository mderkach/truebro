import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
// components
import Wrapper from '/src/components/Wrapper/Wrapper';
// styles
import styles from './Breadcrumbs.local';

const classes = classNames.bind(styles);

const breadcrumbs = (props) => {
  const { links } = props;

  const cls = classes({
    'text-regular': true,
    BreadcrumbsItem: true,
  });

  return (
    <Wrapper>
      <nav className={styles.Breadcrumbs}>
        {links.map((link, index) => (
          <div key={link.descr}>
            <Link className={cls} to={link.href}>
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

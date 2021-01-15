import React from 'react';
import classnames from 'classnames';
// components
import Button from '~cmp/Button/Button';
import Icon from '~cmp/Icon/Icon';
// styles
import styles from './Likes.local';

const Likes = ({ like, dislike }) => {
  return (
    <div className={styles.Wrapper}>
      <Button variant="tretiary" cls={styles.Button} text={like}>
        <Icon name="like-icon" cls={classnames('icon', styles.Like)} />
      </Button>
      <Button variant="tretiary" cls={styles.Button} text={dislike}>
        <Icon name="like-icon" cls={classnames('icon', styles.Dislike)} />
      </Button>
    </div>
  );
};

export default Likes;

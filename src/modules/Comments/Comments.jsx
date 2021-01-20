import React from 'react';
import Item from './Components/Item/Item';
// styles
import styles from './Comments.local';
// store

const Comments = () => (
  <div className={styles.CommentsWrapper}>
    <Item rating={1} id={1} />
    <Item nested id={2} />
    <Item rating={4} id={3} />
    <Item nested id={4} />
  </div>
);

export default Comments;

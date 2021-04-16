import React from 'react';
import classNames from 'classnames/bind';
import Item from './Components/Item/Item';
// styles
import styles from './Comments.local';
// store

const Comments = ({ className, data }) => (
  <div className={classNames(styles.CommentsWrapper, className)}>
    {data && data.sort((a,b) => b.id - a.id).map((item) => (
      <Item
        rating={item.rating}
        id={item.id}
        nested={item.parent_review}
        like={item.like}
        dislike={item.dislike}
        text={item.text}
        date={item.date}
        name={item.name}
      />
    ))}
  </div>
);

export default Comments;

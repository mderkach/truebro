import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
// components
import Button from '/src/components/Button/Button';
import DateTime from '/src/components/DateTime/DateTime';
import Rating from '/src/components/Rating/Rating';
import Likes from '/src/components/Likes/Likes';
import Answer from '~m/Comments/Components/Answer/Answer';
// styles
import styles from './Item.local';

const classes = classNames.bind(styles);

const Item = observer(({ nested, rating, id, name, like, dislike, text, date }) => {
  const Comment = classes({
    CommentItem: true,
    Nested: nested,
  });

  return (
    <div className={Comment}>
      <div className={styles.CommentItemHead}>
        <p className="h3 medium">{name}</p>
        <DateTime date={date} />
      </div>
      {rating && <Rating rating={rating} />}
      <p className="text-regular">{text}</p>
      <div className={styles.CommentItemControls}>
        <Button variant="tretiary" cls={styles.Reply} text="Ответить" />
        <Likes like={like} dislike={dislike} />
      </div>
      <Answer id={id} />
    </div>
  );
});

export default Item;

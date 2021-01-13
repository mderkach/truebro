import React from 'react';
// components
import ScrollContainer from 'react-indiana-drag-scroll';
import Button from '~cmp/Button/Button';
import CommentItem from './Components/CommentsItem';
// styles
import styles from './Comments.local';
// store
import Store from '~u/Store';

const Comments = () => {
  return (
    <div className="">
      <div className={styles.CommentsControlsWrapper}>
        <ScrollContainer className={styles.CommentsControls}>
          <Button type="button" variant="chip" cls="is-active" text="Новые" />
          <Button type="button" variant="chip" text="Положительныее" />
          <Button type="button" variant="chip" text="Отрицательные" />
          <Button type="button" variant="chip" text="Все отзывы" />
        </ScrollContainer>
        <Button
          type="button"
          variant="tertiary"
          text="Написать отзыв"
          onClick={() => Store.showModal('feedback')}
        />
      </div>
      <div className={styles.CommentsWrapper}>
        <CommentItem rating={1} />
        <CommentItem nested />
        <CommentItem rating={4} />
        <CommentItem nested />
      </div>
    </div>
  );
};

export default Comments;

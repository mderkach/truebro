import React from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames/bind';
// components
import Button from '~cmp/Button/Button';
import Icon from '~cmp/Icon/Icon';
import Date from '~cmp/Date/Date';
import Rating from '~cmp/Rating/Rating';
import Likes from '~cmp/Likes/Likes';
// styles
import styles from './CommentsItem.local';

const classes = classNames.bind(styles);

const CommentItem = observer((props) => {
  const { nested, rating } = props;

  const Comment = classes({
    CommentItem: true,
    Nested: nested,
  });

  return (
    <div className={Comment}>
      <div className={styles.CommentItemHead}>
        <p className="h3 medium">Name</p>
        <Date />
      </div>
      {rating && <Rating rating={rating} />}
      <p className="text-regular">
        Альпари кидалово!!! Переел средства на счет, они мне дали кредит 100% моего счета. У меня
        были открыты позиции. Мой счет прилижался к нулю, а кредит был на счете. В итоге я решил
        вечером пополнить баланс для поддержания позиции. Но ничего не вышло. Мои средства
        закончились из-за резкого скачка, а кредит не дал возможности поддержать позицию. Я деньги
        соответственно я закинуть не успел, рынок вернулся обратно. Спрашивается зачем даете кредит,
        если им нельзя воспользоваться. Спреды в ночное время по Москве у них могут быть и по 200
        пунктов, так что не удивляйтесь, если вы хотеле на тренде взять 300 пунктов (новых пунктов),
        возьмете 100 и то если успеете, обычно резкие колебания проскакивают. Как говорится,
        Центральный банк не зря отозвал лицензию, есть за что. Альпари выжмет с вас бабки.
      </p>
      <div className={styles.CommentItemControls}>
        <Button variant="tretiary" cls={styles.Reply} text="Ответить" />
        <Likes />
      </div>
    </div>
  );
});

export default CommentItem;

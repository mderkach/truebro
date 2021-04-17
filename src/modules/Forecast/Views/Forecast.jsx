import React from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
// modules
import Comments from '/src/modules/Comments/Comments';
import Answer from '/src/modules/Comments/Components/Answer/Answer';
// components
import Button from '/src/components/Button/Button';
import Icon from '/src/components/Icon/Icon';
import Likes from '/src/components/Likes/Likes';
import Picture from '/src/components/Picture/Picture';
import PrognosisQuotes from '/src/modules/Prognosis/Components/PrognosisQuotes/PrognosisQuotes';
// styles
import s from './Forecast.local.scss';
// store
import Store from '/src/modules/Forecast/Utils/Store';
import MainStore from '/src/utils/Store';

const ForecastView = observer(() => {
  const history = useHistory();

  return (
    <div className={s.PageGrid}>
      <main className={s.Main}>
        <article className={s.Article}>
          <Likes like={Store.like} dislike={Store.dislike} />
          <header>
            <h2 className="h2 medium">{Store.subtitle}</h2>
          </header>
          <p className="text-regular">{Store.paragraph}</p>
          <Picture cls={s.Picture} src={Store.image} />
          <p className="text-regular">{Store.paragraph2}</p>
          <h3 className="h3 medium">Сценарий</h3>
          <p className="text-regular">
            Таймфрейм {Store.scenario.timeframe}
            <br />
            Рекомендации {Store.scenario.recomendations}
            <br />
            Точка входа {Store.scenario.entrypoint}
            <br />
            Take Profit {Store.scenario.profit}
            <br />
            Stop Loss {Store.scenario.loss}
            <br />
            Ключевые уровни {Store.scenario.level}
          </p>
          <h3 className="h3 medium">Альтернативный сценарий</h3>
          <p className="text-regular">
            Рекомендации {Store.scenario.recomendations}
            <br />
            Точка входа {Store.scenario.entrypoint}
            <br />
            Take Profit {Store.scenario.profit}
            <br />
            Stop Loss {Store.scenario.loss}
            <br />
            Ключевые уровни {Store.scenario.level}
          </p>
          <footer className={s.Footer}>
            <Icon cls={s.Icon} name="vk-color" />
            <Icon cls={s.Icon} name="fb-color" />
            <Icon cls={s.Icon} name="tw-color" />
            <Icon cls={s.Icon} name="ok-color" />
            <Icon cls={s.Icon} name="yt-color" />
            <Icon cls={s.Icon} name="ig-color" />
            <Icon cls={s.Icon} name="tg-color" />
          </footer>
          <div className={s.Controls}>
            <Button
              cls={s.ControlsButton}
              variant="tertiary"
              type="button"
              onClick={() => history.push(`/forecast/${id - 1}`)}
            >
              <Icon cls={s.ControlsIcon} name="chevron-right-icon" />
              <span>Педыдущий</span>
            </Button>
            <Button
              cls={s.ControlsButton}
              variant="tertiary"
              type="button"
              onClick={() => history.push(`/forecast/${id + 1}`)}
            >
              <span>Следующий</span>
              <Icon cls={s.ControlsIcon} name="chevron-right-icon" />
            </Button>
          </div>
        </article>
      </main>
      <aside className={s.Aside}>
        <Picture cls={s.Picture} src="/assets/img/forecast2.jpg" />
        <PrognosisQuotes />
        {MainStore.banner && (
          <Picture cls={s.Picture} src={MainStore.banner[0].src} media={MainStore.banner} />
        )}
      </aside>
      <div className={s.Comments}>
        <h2 className="h2 medium">Комментарии</h2>
        <Button variant="tertiary" text="Комментировать" />
        <Answer id="new-top" />
      </div>
      <Comments className={s.Main} />
      <div className={s.CommentsAfter}>
        <Button variant="tertiary" text="Комментировать" />
        <Answer id="new-bottom" />
      </div>
    </div>
  );
});

export default ForecastView;

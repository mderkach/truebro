import React from 'react';
// modules
import Comments from '~m/Comments/Comments';
import Answer from '~m/Comments/Components/Answer/Answer';
// components
import Button from '/src/components/Button/Button';
import Icon from '/src/components/Icon/Icon';
import Likes from '/src/components/Likes/Likes';
import Picture from '/src/components/Picture/Picture';
import PrognosisQuotes from '~m/Prognosis/Components/PrognosisQuotes/PrognosisQuotes';
// styles
import s from './Forecast.local.scss';

const imgPath = './assets/img/';
const banner = [
  {
    src: `${imgPath}banner-big.jpg`,
    media: '(min-width: 1680px)',
  },
  {
    src: `${imgPath}banner-medium.jpg`,
    media: '(min-width: 1366px) and (max-width: 1679px)',
  },
  {
    src: `${imgPath}banner-small.jpg`,
    media: '(min-width: 767px) and (max-width: 1365px)',
  },
  {
    src: `${imgPath}banner-medium.jpg`,
    media: '(max-width: 767px)',
  },
];

const ForecastView = () => {
  return (
    <div className={s.PageGrid}>
      <main className={s.Main}>
        <article className={s.Article}>
          <Likes like={345} dislike={2} />
          <header>
            <h2 className="h2 medium">Вероятность роста пары сохраняется. </h2>
          </header>
          <p className="text-regular">
            На 4-часовом графике идёт развитие первой волны старшего уровня 1 of (1) of 3, в составе
            которой завершилось формирование локальной коррекции ii of 1. В настоящий момент
            началось развитие третьей волны iii of 1, в составе которой сформирована волна младшего
            уровня (i) of iii . Если предположение верно, то пара вырастет к отметкам 1.1181–1.1281.
            Критическим уровнем стоп-лосса для данного сценария является отметка 1.0986.
          </p>
          <Picture cls={s.Picture} src="/assets/img/forecast1.jpg" />
          <p className="text-regular">
            Дополнительным сигналом в пользу роста котировок EUR/USD выступит отскок от восходящей
            линии тренда на индикаторе относительной силы (RSI). Вторым сигналом станет отскок от
            нижней границы восходящего канала. Отменой варианта роста котировок валютной пары Евро
            Доллар станет падение и пробой уровня 1.0935. Это укажет на пробой области поддержки и
            продолжение падения в область на уровне 1.0815. Ожидать ускорения роста по паре EUR/USD
            стоит с пробоем верхней границы нисходящего канала и закрытием выше уровня 1.1135.
          </p>
          <p className="text-regular">
            Среди важных новостей из Европы и Америки, которые могут оказать влияние на курс пары
            EUR/USD, стоит выделить: Изменение запасов сырой нефти в США от EIA (EIA United States
            Crude Oil Stocks Change).
          </p>
          <p className="text-regular">
            Таким образом, EUR/USD прогноз Евро Доллар на 20 ноября 2019 предполагает развитие
            коррекции и тест области поддержки вблизи уровня 1.1005. Откуда стоит ожидать отскок и
            попытку продолжения роста пары в область выше уровня 1.1235. В пользу подъёма валютной
            пары выступит тест линии тренда на индикаторе относительной силы. Отменой варианта роста
            EUR/USD станет падение и пробой уровня 1.0935. Это укажет на пробой поддержки и
            продолжение падения пары в область ниже уровня 1.0815.
          </p>
          <h3 className="h3 medium">Сценарий</h3>
          <p className="text-regular">
            Таймфрейм Недельный
            <br />
            Рекомендации BUY
            <br />
            Точка входа 1.1081
            <br />
            Take Profit 1.1181, 1.1281
            <br />
            Stop Loss 1.0986
            <br />
            Ключевые уровни 1.0750, 1.0800, 1.0986, 1.1181, 1.1281
          </p>
          <h3 className="h3 medium">Альтернативный сценарий</h3>
          <p className="text-regular">
            Рекомендации SELL
            <br />
            Точка входа 1.0980
            <br />
            Take Profit 1.0800, 1.0750
            <br />
            Stop Loss 1.1040
            <br />
            Ключевые уровни 1.0750, 1.0800, 1.0986, 1.1181, 1.1281
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
            <Button cls={s.ControlsButton} variant="tertiary" type="button">
              <Icon cls={s.ControlsIcon} name="chevron-right-icon" />
              <span>Педыдущий</span>
            </Button>
            <Button cls={s.ControlsButton} variant="tertiary" type="button">
              <span>Следующий</span>
              <Icon cls={s.ControlsIcon} name="chevron-right-icon" />
            </Button>
          </div>
        </article>
      </main>
      <aside className={s.Aside}>
        <Picture cls={s.Picture} src="/assets/img/forecast2.jpg" />
        <PrognosisQuotes />
        <Picture cls={s.Picture} src={banner[0].src} media={banner} />
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
};

export default ForecastView;

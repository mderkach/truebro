import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
// components
import ScreenBanner from '/src/components/Screen/ScreenBanner/ScreenBanner';
import Wrapper from '/src/components/Wrapper/Wrapper';
import ForecastView from '/src/modules/Forecast/Views/Forecast';
import Loader from '/src/components/Loader/Loader';
// store
import Store from '/src/modules/Forecast/Utils/Store';
import MainStore from '/src/utils/Store';

const Forecast = observer((props) => {
  const { id } = props;
  const { fetchForecast } = Store;

  const history = useHistory();

  const retryHandler = () => {
    if (id) {
      fetchForecast(`/forecast?id=${id}`);
    } else {
      fetchForecast('/forecast');
    }
    if (!MainStore.banner) MainStore.fetchBanner();
  };

  useEffect(() => {
    if (id !== null && id !== undefined  && !isNaN(id)) {
      if (id !== Store.id) {
        fetchForecast(`/forecast?id=${id}`);
        history.push(`/forecast/${id}`);
      }
    } else {
      fetchForecast('/forecast');

      if (Store.id) {
        history.push(`/forecast/${Store.id}`);
      }
    }

    if (!MainStore.banner) MainStore.fetchBanner();
  }, [id]);

  return (
    <>
      <ScreenBanner fluid title={Store.title || ''} />
      <Wrapper>
        {!Store.forecastLoaded && !Store.isError && (
          <Loader text="Загрузка..." icon="loading-icon" />
        )}
        {!Store.forecastLoaded && Store.isError && (
          <Loader
            text="Произошла ошибка! Попробуйте снова"
            action={retryHandler}
            actionText="Повторить"
            icon="loading-icon"
          />
        )}
        {Store.forecastLoaded && !Store.isError && <ForecastView />}
      </Wrapper>
    </>
  );
});

export default Forecast;

import React from 'react';
import { observer } from 'mobx-react';
// components
import ScreenBanner from '/src/components/Screen/ScreenBanner/ScreenBanner';
import Wrapper from '/src/components/Wrapper/Wrapper';
import ForecastView from '/src/modules/Forecast/Views/Forecast';

const Forecast = observer(() => (
  <>
    <ScreenBanner fluid title="EUR/USD прогноз Евро Доллар на 20 Ноября 2019" />
    <Wrapper>
      <ForecastView />
    </Wrapper>
  </>
));

export default Forecast;

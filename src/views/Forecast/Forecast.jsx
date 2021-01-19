import React from 'react';
import { observer } from 'mobx-react';
// components
import ScreenBanner from '~cmp/Screen/ScreenBanner/ScreenBanner';
import Wrapper from '~cmp/Wrapper/Wrapper';
import ForecastView from '~m/Forecast/Views/Forecast';

const Forecast = observer(() => (
  <>
    <ScreenBanner fluid title="EUR/USD прогноз Евро Доллар на 20 Ноября 2019" />
    <Wrapper>
      <ForecastView />
    </Wrapper>
  </>
));

export default Forecast;

/* eslint-disable camelcase */
import { observable, makeAutoObservable, action } from 'mobx';

import API from '/src/utils/API';
// utils

class StoreProto {
  constructor() {
    makeAutoObservable(this);
  }

  @observable id = null;

  @observable forecastLoaded = false;

  @observable isError = false;

  @observable title = '';

  @observable like = 0;

  @observable dislike = 0;

  @observable subtitle = '';

  @observable paragraph = '';

  @observable paragraph2 = '';

  @observable image = '';

  @observable scenario = {};

  @observable scenarioAlt = {};

  @action fetchForecast = (query) => {
    this.forecastLoaded = false;
    this.isError = false;
    API.get(query)
      .then(({ data }) => {
        if (data.length === 0) {
          this.isError = true;
          return
        }
        const {
          id,
          title,
          like,
          dislike,
          subtitle,
          content_text,
          content_text2,
          content_image,
          scenario_timeframe,
          scenario_recommendations,
          scenario_endpoint,
          scenario_takeProfit,
          scenario_stopLoss,
          scenario_leveles,
          alternative_recommendations,
          alternative_endpoint,
          alternative_takeProfit,
          alternative_stopLoss,
          alternative_levels,
        } = data;
        this.id = id;
        this.like = like;
        this.dislike = dislike;
        this.title = title;
        this.subtitle = subtitle;
        this.paragraph = content_text;
        this.paragraph2 = content_text2;
        this.image = content_image;
        this.scenario = {
          timeframe: scenario_timeframe,
          endopint: scenario_endpoint,
          recommendations: scenario_recommendations,
          profit: scenario_takeProfit,
          loss: scenario_stopLoss,
          level: scenario_leveles,
        };
        this.scenarioAlt = {
          endopint: alternative_endpoint,
          recommendations: alternative_recommendations,
          profit: alternative_takeProfit,
          loss: alternative_stopLoss,
          level: alternative_levels,
        };

        this.forecastLoaded = true;
      })
      .catch((err) => {
        this.isError = true;
        console.error(err);
      });
  };

  @action changeId = (id) => {
    this.id += id;
  };
}

const ForecastStore = new StoreProto();

export default ForecastStore;

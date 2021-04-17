/* eslint-disable camelcase */
import { observable, makeAutoObservable, action } from 'mobx';

import API from '/src/utils/API';
// utils

class StoreProto {
  constructor() {
    makeAutoObservable(this);
  }

  @observable prognosisLoaded = false;

  @observable isError = false;

  @observable categories = [];

  @observable cards = [];

  @observable brokers = null;

  @observable text = [
    {
      header: 'FOREX прогноз EUR/USD',
      type: 0,
      text: 'параграф',
    },
    {
      header: 'Форекс прогноз Евро Доллар (EUR/USD) на завтра',
      text: 'параграф',
      type: 1,
    },
  ];

  @observable quotesCategories = ['Forex', 'Durex'];

  @observable quotes = [
    {
      broker: 'Forex',
      ticker: 'EUR/USD',
      price: '1.1023',
      trend: 1,
    },
    {
      broker: 'Forex',
      ticker: 'USD/JPI',
      price: '70.4062',
      trend: 0,
    },
  ];

  @action fetchPrognosis = () => {
    API.get('/prognosis')
      .then(({ data }) => {
        const arr = Object.entries(data);
        arr.forEach((item) => {
          this.categories.push(item[0]);
        });
        this.cards = data;
        this.prognosisLoaded = true;
      })
      .catch((err) => {
        this.isError = true;
        console.error(err);
      });
  };

  @action fetchBest = () => {
    API.get('/bestForexBrokers').then(({ data }) => (this.brokers = data));
  };
}

const PrognosisStore = new StoreProto();

export default PrognosisStore;

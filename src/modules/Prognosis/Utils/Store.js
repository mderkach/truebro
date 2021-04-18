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

  @action fetchPrognosisText = () => {
    API.get('/prognosText')
      .then(({ data }) => {
        this.text = data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  @action fetchBest = () => {
    API.get('/bestForexBrokers').then(({ data }) => (this.brokers = data));
  };
}

const PrognosisStore = new StoreProto();

export default PrognosisStore;

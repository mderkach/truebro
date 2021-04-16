/* eslint-disable camelcase */
import { observable, makeAutoObservable, action } from 'mobx';

import API from '/src/utils/API';
// utils

class StoreProto {
  constructor() {
    makeAutoObservable(this);
  }

  @observable brokerLoaded = false;

  @observable isError = false;

  @observable Broker = null;

  @observable mainInfo = null;

  @observable headerInfo = null;

  @observable tabsInfo = null;

  @observable text = null;

  @observable banner = null;

  @observable pay = null;

  @observable specials = null;

  @observable news = null;

  @observable webinar = null;

  @observable bonus = null;

  @observable claim = null;

  @action setCurrentBroker = (name) => {
    this.Broker = name;
  };

  @action fetchBroker = () => {
    this.brokerLoaded = false;
    this.isError = false;
    const headerInfo = () => API.get(`/brokerHeaderInfo?broker=${this.Broker}`);
    const mainInfo = () => API.get(`/brokerMainInfo?broker=${this.Broker}`);
    const tabsInfo = () => API.get(`/brokerTabsInfo?broker=${this.Broker}`);
    const text = () => API.get(`/brokerText?broker=${this.Broker}`);
    const banner = () => API.get(`/bannerImg`);
    const pay = () => API.get(`/brokerPaymentSystem?broker=${this.Broker}`);
    const specials = () => API.get(`/brokerCharacteristics?broker=${this.Broker}`);

    Promise.all([headerInfo(), mainInfo(), tabsInfo(), text(), banner(), pay(), specials()])
      .then((res) => {
        this.headerInfo = res[0].data;
        this.mainInfo = res[1].data;
        this.tabsInfo = res[2].data;
        this.text = res[3].data;
        this.banner = res[4].data;
        this.pay = res[5].data;
        this.specials = res[6].data;

        this.brokerLoaded = true;
      })
      .catch((err) => {
        this.isError = true;
        console.error(err);
      });
  };

  @action fetchBrokerAdditional = () => {
    API.get(`/brokerBonus?broker=${this.Broker}`)
      .then(({ data }) => {
        this.bonus = data;
      })
      .catch((err) => {
        console.error(err);
      });
    API.get(`/brokerWebinar?broker=${this.Broker}`)
      .then(({ data }) => {
        this.webinar = data;
      })
      .catch((err) => {
        console.error(err);
      });
    API.get(`/brokerNew?broker=${this.Broker}`)
      .then(({ data }) => {
        this.news = data;
      })
      .catch((err) => {
        console.error(err);
      });
    API.get(`/brokerClaim?broker=${this.Broker}`)
      .then(({ data }) => {
        data.forEach(item => {
          if (item.status === 'Решена') {
            return item.color = '#2ACC50'
          }
          if (item.status === 'На рассмотрении') {
            return item.color = '#EED346';
          }

          return item.color = '#FF724B';
        })
        this.claim = data;
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

const BrokerStore = new StoreProto();

export default BrokerStore;

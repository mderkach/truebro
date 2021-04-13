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

    Promise.all([
      headerInfo(),
      mainInfo(),
      tabsInfo(),
      text(),
      banner(),
      pay(),
    ])
      .then((res) => {
        this.headerInfo = res[0].data;
        this.mainInfo = res[1].data;
        this.tabsInfo = res[2].data;
        this.text = res[3].data;
        this.banner = res[4].data;
        this.pay = res[5].data;

        this.brokerLoaded = true;
      })
      .catch((err) => {
        this.isError = true;
        console.error(err);
      });
  };
}

const BrokerStore = new StoreProto();

export default BrokerStore;

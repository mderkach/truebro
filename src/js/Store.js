/* eslint-disable camelcase */
import { observable, makeAutoObservable, action } from 'mobx';

import API from './API';
// utils

class StoreProto {
  constructor() {
    makeAutoObservable(this);
  }

  @observable tableLoading = true;

  @observable fetchFailed = false;

  @observable tableRows = [];

  @observable sortKey = '';

  @observable filter = [];

  @observable compared = [];

  @action toggleTableLoading = (bool) => {
    if (bool) this.tableLoading = bool;
    else this.tableLoading = !this.tableLoading;
  };

  @action toggleFetchError = (bool) => {
    this.fetchFailed = bool;
  };

  @action fetchData() {
    this.toggleFetchError(false);
    const table = () => API.get('/table');
    const filter = () => API.get('/filter');
    Promise.all([table(), filter()])
      .then((res) => {
        this.tableRows = res[0].data;
        this.filter = res[1].data;
        this.toggleTableLoading();
      })
      .catch((err) => {
        this.toggleFetchError(true);
        this.toggleTableLoading(false);
        console.log(err);
      });
  }

  @action updateRows(data) {
    this.tableRows = data;
  }

  @action setCompare(item, isComparing) {
    if (isComparing) {
      this.compared.push(item);
    } else {
      this.compared = this.compared.filter((row) => row !== item);
    }
  }
}

const Store = new StoreProto();

export default Store;

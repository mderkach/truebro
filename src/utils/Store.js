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

  @observable isModalShowed = false;

  @observable modalVariant = 'pretension';

  @observable staticBlock = {
    image: null,
    text: null,
    title: null,
  }

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
    const staticBlock = () => API.get('/staticBlock');
    Promise.all([table(), filter(), staticBlock()])
      .then((res) => {
        this.tableRows = res[0].data;
        this.filter = res[1].data;
        this.staticBlock = res[2].data; //mobx stirct mode warn FIXME
        this.toggleTableLoading();
      })
      .catch((err) => {
        this.toggleFetchError(true);
        this.toggleTableLoading(false);
        console.log(err);
      });
  }

  @action fetchStaticBlock() {
    API.get('/staticBlock').then((res) => {
      this.staticBlock = res.data;
    })
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

  @action showModal = (variant = 'pretension') => {
    this.isModalShowed = !this.isModalShowed;
    this.modalVariant = variant;
  };
}

const Store = new StoreProto();

export default Store;

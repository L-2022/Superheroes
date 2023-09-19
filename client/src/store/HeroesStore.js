import { makeAutoObservable } from "mobx";

export default class HeroesStore {
  constructor() {
    this._listSuperhero = [];
    this._page = 1;
    this._totalCount = 1;
    this._limit = 5;
    makeAutoObservable(this);
  }

  setPage(page) {
    this._page = page;
  }
  setLimits(limit) {
    this._limit = limit;
  }

  setTotalCount(count) {
    this._totalCount = count;
  }

  setListSuperhero(listSuperhero) {
    console.log("listSuperhero", listSuperhero);
    this._listSuperhero = listSuperhero;
  }

  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }

  get listSuperhero() {
    return this._listSuperhero;
  }
  
}

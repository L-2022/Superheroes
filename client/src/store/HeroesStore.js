import { makeAutoObservable } from "mobx";

export default class HeroesStore {
  constructor() {
    this._listSuperhero = [];
    this._page = 1;
    this._totalCount = 1;
    this._limit = 5;
    this._searchText = "";
    this._dateCreation = "new";
    makeAutoObservable(this);
  }

  setPage(page) {
    this._page = page;
  }
  setLimits(limit) {
    this._limit = limit;
  }
  setSearchText(searchText) {
    this._searchText = searchText;
  }
  setDateCreation(dateCreation) {
    this._dateCreation = dateCreation;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  setListSuperhero(listSuperhero) {
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
  get searchText() {
    return this._searchText;
  }
  get dateCreation() {
    return this._dateCreation;
  }
  get listSuperhero() {
    return this._listSuperhero;
  }
}

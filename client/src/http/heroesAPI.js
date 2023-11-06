import axios, { get, put, post} from "axios";
const $host = `http://localhost:5000/`;

export const fetchHeroes = async (page, limit, dateCreation, searchText) => {
  try {
    const url = `api/heroes/?page=${page}&limit=${limit}&dateCreation=${dateCreation}&searchText=${searchText}`;

    const { data } = await get($host + url);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createHero = async (hero) => {
  const { data } = await post($host + "api/heroes/", hero);
  return data;
};

export const changeHero = async (changedHero, id) => {
  try {
  const { data } = await put($host + "api/heroes/" + id, changedHero);
  return data;}catch  (error) {
    console.error("error when creating the hero:", error);
  }
};

export const fetchOneHero = async (id) => {
  try {
    const { data } = await get($host + "api/heroes/" + id);
    return data;
  } catch (error) {
    console.error("error when rendering the hero:", error);
  }
};

export const deleteHero = async (id) => {
  try {
    const { data } = await axios.delete($host + "api/heroes/" + id);
    return data;
  } catch (error) {
    console.error("error when deleting the hero:", error);
    throw error;
  }
};

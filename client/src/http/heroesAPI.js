import { $host } from "./index";
import {createHeroDemo, deleteHeroDemo, getHeroesDemo, getOneHeroDemo} from "./defaultHeroes";

let DEMO_MODE = !!process.env.REACT_APP_API_URL_LOCAL && process.env.REACT_APP_API_URL_LOCAL !== "false";

export const fetchHeroes = async (page, limit, dateCreation, searchText) => {
  if (DEMO_MODE) {
    return getHeroesDemo(page, limit, dateCreation, searchText);
  }

  try {
    const url = `/api/heroes/?page=${page}&limit=${limit}&dateCreation=${dateCreation}&searchText=${searchText}`;
    const { data } = await $host.get(url);
    console.log("Fetched heroes:", data);
    return data;
  } catch (e) {
    console.error("Error fetching heroes:", e);
    return { superheroes: [], total: 0 };
  }
};

export const createHero = async (hero) => {
  if (DEMO_MODE) {
    return createHeroDemo(hero);
  }

  try {
    const { data } = await $host.post("/api/heroes/", hero);
    return data;
  } catch (error) {
    console.error("Error creating hero:", error);
    throw error;
  }
};

export const changeHero = async (changedHero, id) => {

  try {
    const { data } = await $host.put(`/api/heroes/${id}`, changedHero);
    return data;
  } catch (error) {
    console.error("Error updating hero:", error);
    throw error;
  }
};

export const fetchOneHero = async (id) => {
  if (DEMO_MODE) {
    return getOneHeroDemo(id);
  }

  try {
    const { data } = await $host.get(`/api/heroes/${id}`);
    console.log("Fetched one hero:", data);
    return data;
  } catch (error) {
    console.error("Error fetching one hero:", error);
    return null;
  }
};

export const deleteHero = async (id) => {
  if (DEMO_MODE) {
    return deleteHeroDemo(id);
  }
  try {
    const { data } = await $host.delete(`/api/heroes/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting hero:", error);
    throw error;
  }
};

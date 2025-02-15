import { $host } from "./index";

export const fetchHeroes = async (page, limit, dateCreation, searchText) => {
  try {
    const url = `/api/heroes/?page=${page}&limit=${limit}&dateCreation=${dateCreation}&searchText=${searchText}`;
    const { data } = await $host.get(url);
    console.log("Fetched heroes:", data); // Додано для налагодження
    return data;
  } catch (e) {
    console.error("Error fetching heroes:", e);
    return { superheroes: [] }; // Запобігання помилці при відсутності даних
  }
};

export const createHero = async (hero) => {
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
  try {
    const { data } = await $host.get(`/api/heroes/${id}`);
    console.log("Fetched one hero:", data); // Додано для налагодження
    return data;
  } catch (error) {
    console.error("Error fetching one hero:", error);
    return null; // Запобігання помилці при відсутності даних
  }
};

export const deleteHero = async (id) => {
  try {
    const { data } = await $host.delete(`/api/heroes/${id}`);
    return data;
  } catch (error) {
    console.error("Error deleting hero:", error);
    throw error;
  }
};

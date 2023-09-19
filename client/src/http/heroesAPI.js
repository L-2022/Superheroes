import { $host } from "./index";

export const fetcLogOut = async () => {
  const { data } = await $host.get("api/user/logout");
  return data;
};

export const fetchUserInfo = async () => {
  const { data } = await $host.get("api/user/profile");
  return data;
};

export const fetchHeroes = async (page, limit) => {
  const { data } = await $host.get("api/heroes", {params: { page, limit
}});
  return data;
};

export const createHero = async (hero) => {  
  const { data } = await $host.post("api/heroes/create", hero);
  return data;
};

export const changeHero = async (changedHero, id) => {    
  const { data } = await $host.put("api/heroes/changeHero/" + id, changedHero);
  return data;
};

export const fetchOneHero = async (id) => {
  const { data } = await $host.get("api/heroes/" + id);
  return data;
};

export const deleteHero = async (id) => {
  try {
    const { data } = await $host.delete("api/heroes/" + id);
    return data;
  } catch (error) {
    console.error("error when deleting the hero:", error);
    throw error;
  }
};

import { defaultHeroes } from "./heroesData";

export const getHeroesDemo = (page, limit, dateCreation = "new", searchText) => {
    let filteredHeroes = defaultHeroes.filter(hero =>
            hero.nickname && searchText ? hero.nickname.toLowerCase().includes(searchText.toLowerCase()) : true
    );

    if (dateCreation === "new") {
        filteredHeroes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (dateCreation === "old") {
        filteredHeroes.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    const startIndex = (page - 1) * limit;
    const paginatedHeroes = filteredHeroes.slice(startIndex, startIndex + limit);

    return { superheroes: paginatedHeroes, total: filteredHeroes.length, mode: true };
};


export const getOneHeroDemo = (id) => {
    return defaultHeroes.find(hero => String(hero.id) === String(id)) || null;
};

export const createHeroDemo = (hero) => {
    console.log(hero);

    const newHero = {
        ...hero,
        id: defaultHeroes.length ? Math.max(...defaultHeroes.map(h => h.id)) + 1 : 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        listSuperpowers: hero.superpowers
                ? hero.superpowers.split(', ').map(power => ({ titleSuperpower: power }))
                : [],
        SuperheroImages: hero.SuperheroImages
                ? hero.SuperheroImages.map(img => ({ image: img.image }))
                : [],
    };

    defaultHeroes.push(newHero);
    return newHero;
};

export const deleteHeroDemo = (id) => {
    const index = defaultHeroes.findIndex(hero => String(hero.id) === String(id));
    if (index === -1) {
        console.warn(`Demo mode: Hero with id ${id} not found.`);
        return null;
    }
    return defaultHeroes.splice(index, 1)[0];
};

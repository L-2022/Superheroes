const importAll = (r) => {
    let images = {};
    r.keys().forEach((item) => {
        images[item.replace("./", "")] = r(item);
    });
    return images;
};

const images = importAll(require.context("../assets", false, /\.(webp|png|jpg|jpeg)$/));

export const defaultHeroes = [
    {
        id: 0,
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "A powerful alien from Krypton",
        superpowers: "Super strength, flight, heat vision",
        catch_phrase: "Up, up and away!",
        listSuperpowers: [
            { titleSuperpower: "Super strength" },
            { titleSuperpower: "Flight" },
            { titleSuperpower: "Heat vision" }
        ],
        SuperheroImages: [{ image: images["image1.webp"] }, { image: images["image2.webp"] }],
        createdAt: "2025-02-15T12:29:04.033Z",
        updatedAt: "2025-02-16T15:04:22.413Z"
    },
    {
        id: 1,
        nickname: "Superman",
        real_name: "Clark Kent",
        origin_description: "A powerful alien from Krypton",
        superpowers: "Super strength, flight, heat vision",
        catch_phrase: "Up, up and away!",
        listSuperpowers: [
            { titleSuperpower: "Super strength" },
            { titleSuperpower: "Flight" },
            { titleSuperpower: "Heat vision" }
        ],
        SuperheroImages: [{ image: images["image1.webp"] }, { image: images["image2.webp"] }],
        createdAt: "2025-02-14T10:15:30.500Z",
        updatedAt: "2025-02-16T18:20:10.120Z"
    },
    {
        id: 2,
        nickname: "Batman",
        real_name: "Bruce Wayne",
        origin_description: "A billionaire vigilante with exceptional detective skills",
        superpowers: "Genius intellect, martial arts, high-tech gadgets",
        catch_phrase: "I am Batman!",
        listSuperpowers: [
            { titleSuperpower: "Genius intellect" },
            { titleSuperpower: "Martial arts" },
            { titleSuperpower: "High-tech gadgets" }
        ],
        SuperheroImages: [{ image: images["image3.webp"] }, { image: images["image4.webp"] }],
        createdAt: "2025-02-13T08:45:12.789Z",
        updatedAt: "2025-02-15T14:35:45.321Z"
    },
    {
        id: 3,
        nickname: "Batman",
        real_name: "Bruce Wayne",
        origin_description: "A billionaire vigilante with exceptional detective skills",
        superpowers: "Genius intellect, martial arts, high-tech gadgets",
        catch_phrase: "I am Batman!",
        listSuperpowers: [
            { titleSuperpower: "Genius intellect" },
            { titleSuperpower: "Martial arts" },
            { titleSuperpower: "High-tech gadgets" }
        ],
        SuperheroImages: [{ image: images["image3.webp"] }, { image: images["image4.webp"] }],
        createdAt: "2025-02-12T09:12:33.456Z",
        updatedAt: "2025-02-14T20:50:29.678Z"
    },
    {
        id: 4,
        nickname: "Batman",
        real_name: "Bruce Wayne",
        origin_description: "A billionaire vigilante with exceptional detective skills",
        superpowers: "Genius intellect, martial arts, high-tech gadgets",
        catch_phrase: "I am Batman!",
        listSuperpowers: [
            { titleSuperpower: "Genius intellect" },
            { titleSuperpower: "Martial arts" },
            { titleSuperpower: "High-tech gadgets" }
        ],
        SuperheroImages: [{ image: images["image3.webp"] }, { image: images["image4.webp"] }],
        createdAt: "2025-02-11T07:30:44.910Z",
        updatedAt: "2025-02-13T16:40:55.789Z"
    },
    {
        id: 5,
        nickname: "Batman",
        real_name: "Bruce Wayne",
        origin_description: "A billionaire vigilante with exceptional detective skills",
        superpowers: "Genius intellect, martial arts, high-tech gadgets",
        catch_phrase: "I am Batman!",
        listSuperpowers: [
            { titleSuperpower: "Genius intellect" },
            { titleSuperpower: "Martial arts" },
            { titleSuperpower: "High-tech gadgets" }
        ],
        SuperheroImages: [{ image: images["image3.webp"] }, { image: images["image4.webp"] }],
        createdAt: "2025-02-10T06:20:38.543Z",
        updatedAt: "2025-02-12T12:30:29.321Z"
    },
    {
        id: 6,
        nickname: "Batman",
        real_name: "Bruce Wayne",
        origin_description: "A billionaire vigilante with exceptional detective skills",
        superpowers: "Genius intellect, martial arts, high-tech gadgets",
        catch_phrase: "I am Batman!",
        listSuperpowers: [
            { titleSuperpower: "Genius intellect" },
            { titleSuperpower: "Martial arts" },
            { titleSuperpower: "High-tech gadgets" }
        ],
        SuperheroImages: [{ image: images["image3.webp"] }, { image: images["image4.webp"] }],
        createdAt: "2025-02-09T05:10:28.654Z",
        updatedAt: "2025-02-11T11:15:49.987Z"
    }
];

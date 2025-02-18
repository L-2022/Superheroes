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
        id: 1,
        nickname: "AeroStrike",
        real_name: "Ethan Gale",
        origin_description: "A master of the winds, using his aerial prowess to patrol the skies and protect the innocent.",
        superpowers: "Aerokinesis, high-speed flight, air pressure manipulation",
        catch_phrase: "The wind is my ally!",
        listSuperpowers: [
            { titleSuperpower: "Aerokinesis" },
            { titleSuperpower: "High-speed flight" },
            { titleSuperpower: "Air pressure manipulation" }
        ],
        SuperheroImages: [{ image: images["image1.webp"] }, { image: images["image1.webp"] }],
        createdAt: "2025-02-09T05:10:28.654Z",
        updatedAt: "2025-02-11T11:15:49.987Z"
    },
    {
        id: 2,
        nickname: "Shadow Blade",
        real_name: "Dante Kuro",
        origin_description: "A deadly ninja warrior, trained in the ancient arts of stealth and assassination.",
        superpowers: "Shadow manipulation, enhanced agility, master swordsmanship",
        catch_phrase: "From the darkness, I strike!",
        listSuperpowers: [
            { titleSuperpower: "Shadow manipulation" },
            { titleSuperpower: "Enhanced agility" },
            { titleSuperpower: "Master swordsmanship" }
        ],
        SuperheroImages: [{ image: images["image2.webp"] }],
        createdAt: "2025-02-09T05:10:28.654Z",
        updatedAt: "2025-02-11T11:15:49.987Z"
    },
    {
        id: 3,
        nickname: "Crystal Empress",
        real_name: "Seraphina Astra",
        origin_description: "A powerful sorceress who wields the ancient magic of crystals.",
        superpowers: "Crystal manipulation, energy shields, teleportation",
        catch_phrase: "With the power of the stars, I reign!",
        listSuperpowers: [
            { titleSuperpower: "Crystal manipulation" },
            { titleSuperpower: "Energy shields" },
            { titleSuperpower: "Teleportation" }
        ],
        SuperheroImages: [{ image: images["image8.webp"] }],
        createdAt: "2025-02-09T05:10:28.654Z",
        updatedAt: "2025-02-11T11:15:49.987Z"
    },
    {
        id: 4,
        nickname: "Nightshade",
        real_name: "Vera Noctis",
        origin_description: "A cunning spy and master of deception, using her intelligence and stealth to outmaneuver foes.",
        superpowers: "Invisibility, heightened reflexes, expert marksmanship",
        catch_phrase: "You won't see me coming.",
        listSuperpowers: [
            { titleSuperpower: "Invisibility" },
            { titleSuperpower: "Heightened reflexes" },
            { titleSuperpower: "Expert marksmanship" }
        ],
        SuperheroImages: [{ image: images["image4.webp"] }, { image: images["image4.webp"] }],
        createdAt: "2025-02-09T05:10:28.654Z",
        updatedAt: "2025-02-11T11:15:49.987Z"
    },
    {
        id: 5,
        nickname: "Iron Howl",
        real_name: "Logan Wolfe",
        origin_description: "A warrior cursed with lycanthropy, using his power to protect the innocent.",
        superpowers: "Enhanced strength, heightened senses, mystical claw energy",
        catch_phrase: "The moon guides my fury!",
        listSuperpowers: [
            { titleSuperpower: "Enhanced strength" },
            { titleSuperpower: "Heightened senses" },
            { titleSuperpower: "Mystical claw energy" }
        ],
        SuperheroImages: [{ image: images["image5.webp"] }, { image: images["image5.webp"] }],
        createdAt: "2025-02-09T05:10:28.654Z",
        updatedAt: "2025-02-11T11:15:49.987Z"
    },
    {
        id: 6,
        nickname: "Solar Sentinel",
        real_name: "Helios Rayner",
        origin_description: "A cosmic guardian harnessing the power of the sun to maintain balance in the universe.",
        superpowers: "Solar energy manipulation, flight, plasma blasts",
        catch_phrase: "The sun never sets on justice!",
        listSuperpowers: [
            { titleSuperpower: "Solar energy manipulation" },
            { titleSuperpower: "Flight" },
            { titleSuperpower: "Plasma blasts" }
        ],
        SuperheroImages: [{ image: images["image6.webp"] }, { image: images["image6.webp"] }],
        createdAt: "2025-02-09T05:10:28.654Z",
        updatedAt: "2025-02-11T11:15:49.987Z"
    },
    {
        id: 7,
        nickname: "Phantom Gear",
        real_name: "Kai Mercer",
        origin_description: "A cybernetic assassin turned hero, using his advanced exosuit to fight crime.",
        superpowers: "Cybernetic enhancements, invisibility cloak, energy dagger",
        catch_phrase: "In the shadows, I strike!",
        listSuperpowers: [
            { titleSuperpower: "Cybernetic enhancements" },
            { titleSuperpower: "Invisibility cloak" },
            { titleSuperpower: "Energy dagger" }
        ],
        SuperheroImages: [{ image: images["image7.webp"] }, { image: images["image7.webp"] }],
        createdAt: "2025-02-09T05:10:28.654Z",
        updatedAt: "2025-02-11T11:15:49.987Z"
    },
    {
        id: 8,
        nickname: "Frost Veil",
        real_name: "Seraphina Astra",
        origin_description: "A legendary ice empress who rules over the frozen realms. Gifted with the power of eternal winter, she harnesses the magic of ice to protect her kingdom and maintain balance in the world.",
        superpowers: "Cryokinesis, Ice Constructs, Blizzard Summoning, Arctic Immortality",
        catch_phrase: "Winter bows to me, and so shall you!",
        listSuperpowers: [
            { titleSuperpower: "Cryokinesis" },
            { titleSuperpower: "Ice Constructs" },
            { titleSuperpower: "Blizzard Summoning" },
            { titleSuperpower: "Arctic Immortality" }
        ],
        SuperheroImages: [{ image: images["image10.webp"] }, { image: images["image10.webp"] }],
        createdAt: "2025-02-14T08:30:00.000Z",
        updatedAt: "2025-02-14T08:45:00.000Z"
    }
];

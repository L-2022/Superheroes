const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Superheroes = sequelize.define("superheroes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nickname: { type: DataTypes.STRING,  allowNull: false },
  real_name: { type: DataTypes.STRING, },
  origin_description: { type: DataTypes.TEXT },
  superpowers: { type: DataTypes.TEXT },
  catch_phrase: { type: DataTypes.TEXT },
});

const ListSuperpowers = sequelize.define("list_superpowers", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  titleSuperpower: { type: DataTypes.STRING, allowNull: false },
  value: { type: DataTypes.INTEGER, defaultValue: 0 },    
});

const Superhero_images = sequelize.define("superhero_images", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  image: { type: DataTypes.STRING, allowNull: false },
});

Superheroes.hasMany(Superhero_images, { as: "SuperheroImages" });
Superhero_images.belongsTo(Superheroes);

Superheroes.hasMany(ListSuperpowers, { as: "listSuperpowers" });
ListSuperpowers.belongsTo(Superheroes);

module.exports = {
  ListSuperpowers,
  Superheroes,
  Superhero_images,
};
const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Superheroes = sequelize.define("superheroes", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nickname: { type: DataTypes.STRING,  allowNull: false },
  real_name: { type: DataTypes.STRING, },// unique: true, allowNull: false
  origin_description: { type: DataTypes.TEXT },
  superpowers: { type: DataTypes.TEXT },
  catch_phrase: { type: DataTypes.TEXT },
});

const Superhero_images = sequelize.define("superhero_images", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  image: { type: DataTypes.STRING, allowNull: false },
});

Superheroes.hasMany(Superhero_images, { as: "SuperheroImages" });
Superhero_images.belongsTo(Superheroes);

module.exports = {
  Superheroes,
  Superhero_images,
};
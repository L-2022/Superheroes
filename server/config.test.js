// config.test.js
const {Sequelize} = require('sequelize')

module.exports = {
    database: 'DB_NAME',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres', 
  };

  module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json'],
    transform: {
      '^.+\\.js$': 'babel-jest', // Додайте це правило для трансформації коду ES модулів
    },
    testMatch: ['**/*.test.js'],
    verbose: true,
  };

  
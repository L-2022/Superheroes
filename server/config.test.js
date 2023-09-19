// config.test.js
const {Sequelize} = require('sequelize')

module.exports = {
    database: 'DB_NAME',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: 'postgres', 
  };

  test('це опис тесту', () => {
    // Тестовий код
    expect(1 + 1).toBe(2);
  });

  
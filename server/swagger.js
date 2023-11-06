// swagger.js

const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0', // версія OpenAPI
  info: {
    title: 'My API', // Назва вашого API
    version: '1.0.0', // Версія вашого API
    description: 'Опис вашого API',
  },
};

const options = {
  swaggerDefinition,
  // Файли з описами API в форматі JSDoc
  apis: ['./routes/*.js'], // Вказуйте шляхи до вашого коду, де описи ендпоінтів
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

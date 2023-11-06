// middleware/loggerMiddleware.js

function loggerMiddleware(req, res, next) {
    // Отримуємо інформацію про запит
    const { method, url, params, query, body, headers } = req;
  
    // Отримуємо поточну дату та час
    const timestamp = new Date().toISOString();
  
    // Виводимо лог у консоль
    console.log(
      `${timestamp} - ${method} ${url}\n`,
      `Headers: ${JSON.stringify(headers)}\n`,
      `Query: ${JSON.stringify(query)}\n`,
      `Params: ${JSON.stringify(params)}\n`,
      `Body: ${JSON.stringify(body)}\n`
    );
  
    // Передаємо управління наступному Middleware або обробнику маршруту
    next();
  }
  
  module.exports = loggerMiddleware;
  
// middleware/cacheMiddleware.js

const cache = new Map(); // Об'єкт для зберігання кешованих даних

function cacheMiddleware(req, res, next) {
  const { method, url } = req;

  // Генеруємо унікальний ключ для кешування на основі методу та URL запиту
  const cacheKey = `${method}-${url}`;

  // Перевіряємо, чи є дані у кеші для даного ключа
  if (cache.has(cacheKey)) {
    // Якщо дані знайдені в кеші, повертаємо їх замість виконання запиту
    const cachedData = cache.get(cacheKey);
    return res.json(cachedData);
  }

  // Якщо дані не знайдені в кеші, продовжуємо виконання запиту
  next();
}

// Функція для зберігання даних у кеші
function addToCache(req, data) {
  const { method, url } = req;
  const cacheKey = `${method}-${url}`;
  cache.set(cacheKey, data);
}

module.exports = { cacheMiddleware, addToCache };

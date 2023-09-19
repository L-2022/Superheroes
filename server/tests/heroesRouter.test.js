const request = require('supertest');
const express = require('express');
const heroesRouter = require('../routes/heroesRouter');

const app = express();
app.use(express.json());
app.use('/api/heroes', heroesRouter); 

describe('Heroes Router', () => {
  it('should get a list of superheroes', async () => {
    const response = await request(app).get('/api/heroes');

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('total'); 
    expect(response.body).toHaveProperty('superheroes'); 
  });

  it('should get a superhero by ID', async () => {
    const heroId = 35; // ID героя, якого ми хочемо отримати

    const response = await request(app).get(`/api/heroes/${heroId}`);

    expect(response.status).toBe(200); 
    expect(response.body).toHaveProperty('id', heroId);
  });
});

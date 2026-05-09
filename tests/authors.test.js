const request = require('supertest');
const app = require('../src/app');

describe('Authors API', () => {

  it('GET /authors debería responder 200', async () => {
    const res = await request(app).get('/authors');
    expect(res.statusCode).toBe(200);
  });

});

afterAll(() => {
  const pool = require('../src/db');
  pool.end();
});

it('POST /authors debería crear un author', async () => {
  const res = await request(app)
    .post('/authors')
    .send({
      name: 'Test User',
      email: `test${Date.now()}@mail.com`,
      bio: 'Test bio'
    });

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty('id');
});
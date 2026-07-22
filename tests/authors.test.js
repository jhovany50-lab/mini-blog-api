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

it('GET /authors/:id debería responder con 200', async () => {
  const res = await request(app).get('/authors/1');

  expect(res.statusCode).toBe(200);
  expect(res.body).toHaveProperty('id');
});

it('GET /authors/:id inexistente debería responder 404', async () => {
  const res = await request(app).get('/authors/99999');

  expect(res.statusCode).toBe(404);
});

it('PUT /authors/:id debería actualizar un autor', async () => {
  const res = await request(app)
    .put('/authors/1')
    .send({
      name: 'Autor Actualizado',
      email: `update${Date.now()}@mail.com`,
      bio: 'Nueva biografía'
    });

  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe('Autor Actualizado');
});

it('DELETE /authors/:id debería eliminar un autor', async () => {
  // Crear un autor temporal
  const created = await request(app)
    .post('/authors')
    .send({
      name: 'Eliminar',
      email: `delete${Date.now()}@mail.com`,
      bio: 'Temporal'
    });

  const id = created.body.id;

  const res = await request(app)
    .delete(`/authors/${id}`);

  expect(res.statusCode).toBe(200);
});

it('POST /authors debería responder 400 si faltan campos', async () => {
  const res = await request(app)
    .post('/authors')
    .send({
      name: ''
    });

  expect(res.statusCode).toBe(400);
});

it('POST /authors debería responder 409 si el email ya existe', async () => {

  const email = `duplicado${Date.now()}@mail.com`;

  await request(app)
    .post('/authors')
    .send({
      name: 'Autor 1',
      email,
      bio: 'Bio'
    });

  const res = await request(app)
    .post('/authors')
    .send({
      name: 'Autor 2',
      email,
      bio: 'Bio'
    });
  
  console.log(res.statusCode, res.body);

  expect(res.statusCode).toBe(409);
});
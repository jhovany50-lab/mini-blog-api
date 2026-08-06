import { describe, it, expect, afterAll } from 'vitest';
import request from 'supertest';

import app from '../src/app.js';
import pool from '../src/config/db.js';

describe('Authors API', () => {

  it('GET /authors debería responder 200', async () => {
    const res = await request(app).get('/authors');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /authors debería crear un autor', async () => {
    const res = await request(app)
      .post('/authors')
      .send({
        name: 'Test User',
        email: `test${Date.now()}@mail.com`,
        bio: 'Test bio'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toBe('Test User');
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

    expect(res.statusCode).toBe(409);
    expect(res.body.error).toBe('El email ya existe');
  });

  it('GET /authors/:id debería responder 200', async () => {

    const res = await request(app).get('/authors/1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
  });

  it('GET /authors/:id inexistente debería responder 404', async () => {

    const res = await request(app).get('/authors/99999');

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Autor no encontrado');
  });

  it('PUT /authors/:id debería actualizar un autor', async () => {

    const updatedAuthor = {
      name: 'Autor actualizado',
      email: `update${Date.now()}@mail.com`,
      bio: 'Nueva biografía'
    };

    const res = await request(app)
      .put('/authors/1')
      .send(updatedAuthor);

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(updatedAuthor.name);
    expect(res.body.email).toBe(updatedAuthor.email);
    expect(res.body.bio).toBe(updatedAuthor.bio);
  });

  it('PUT /authors/:id inexistente debería responder 404', async () => {

    const updatedAuthor = {
      name: 'Autor actualizado',
      email: `update${Date.now()}@mail.com`,
      bio: 'Nueva biografía'
    };

    const res = await request(app)
      .put('/authors/99999')
      .send(updatedAuthor);

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Autor no encontrado');
  });

  it('DELETE /authors/:id debería eliminar un autor', async () => {

    const created = await request(app)
      .post('/authors')
      .send({
        name: 'Autor temporal',
        email: `delete${Date.now()}@mail.com`,
        bio: 'Temporal'
      });

    const res = await request(app)
      .delete(`/authors/${created.body.id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Autor eliminado correctamente');
  });

  it('DELETE /authors/:id inexistente debería responder 404', async () => {

    const res = await request(app)
      .delete('/authors/99999');

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Autor no encontrado');
  });

});

afterAll(async () => {
  await pool.end();
});
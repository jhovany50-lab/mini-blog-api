import { describe, it, expect, afterAll } from 'vitest';
import request from 'supertest';

import app from '../src/app.js';
import pool from '../src/db/index.js';

describe('Posts API', () => {

  it('GET /posts debería responder 200', async () => {
    const res = await request(app).get('/posts');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /posts/:id debería responder 200', async () => {
    const res = await request(app).get('/posts/1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');
  });

  it('GET /posts/:id inexistente debería responder 404', async () => {
    const res = await request(app).get('/posts/99999');

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Post no encontrado');
  });

  it('GET /posts/author/:authorId debería responder 200', async () => {
    const res = await request(app).get('/posts/author/3');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /posts debería crear un post', async () => {

    const newPost = {
      title: `Post ${Date.now()}`,
      content: 'Contenido de prueba',
      author_id: 3
    };

    const res = await request(app)
      .post('/posts')
      .send(newPost);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe(newPost.title);

  });

  it('POST /posts debería responder 400 si el autor no existe', async () => {

    const newPost = {
      title: `Post ${Date.now()}`,
      content: 'Contenido de prueba',
      author_id: 99999
    };

    const res = await request(app)
      .post('/posts')
      .send(newPost);

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('El autor especificado no existe');

  });

  it('POST /posts debería responder 400 si faltan campos', async () => {

    const res = await request(app)
      .post('/posts')
      .send({
        title: ''
      });

    expect(res.statusCode).toBe(400);

  });

  it('PUT /posts/:id debería actualizar un post', async () => {

    const updatedPost = {
      title: `Actualizado ${Date.now()}`,
      content: 'Contenido actualizado',
      author_id: 3
    };

    const res = await request(app)
      .put('/posts/1')
      .send(updatedPost);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(updatedPost.title);
    expect(res.body.content).toBe(updatedPost.content);

  });

  it('PUT /posts/:id debería responder 400 si el autor no existe', async () => {

    const created = await request(app)
      .post('/posts')
      .send({
        title: `Temporal ${Date.now()}`,
        content: 'Contenido temporal',
        author_id: 3
      });

    const updatedPost = {
      title: 'Actualizado',
      content: 'Contenido actualizado',
      author_id: 99999
    };

    const res = await request(app)
      .put(`/posts/${created.body.id}`)
      .send(updatedPost);

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('El autor especificado no existe');

  });

  it('PUT /posts/:id inexistente debería responder 404', async () => {

    const updatedPost = {
      title: 'No existe',
      content: 'Nada',
      author_id: 3
    };

    const res = await request(app)
      .put('/posts/99999')
      .send(updatedPost);

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Post no encontrado');

  });

  it('DELETE /posts/:id debería eliminar un post', async () => {

    const created = await request(app)
      .post('/posts')
      .send({
        title: `Eliminar ${Date.now()}`,
        content: 'Temporal',
        author_id: 3
      });

    const res = await request(app)
      .delete(`/posts/${created.body.id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Post eliminado correctamente');

  });

  it('DELETE /posts/:id inexistente debería responder 404', async () => {

    const res = await request(app)
      .delete('/posts/99999');

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Post no encontrado');

  });

});

afterAll(async () => {
  await pool.end();
});
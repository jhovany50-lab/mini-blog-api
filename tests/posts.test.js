const request = require('supertest');
const app = require('../src/app');

describe('Posts API', () => {

  // ============================
  // GET /posts
  // ============================
  it('GET /posts debería responder 200', async () => {

    const res = await request(app).get('/posts');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

  });

  // ============================
  // GET /posts/:id
  // ============================
  it('GET /posts/:id debería responder 200', async () => {

    const res = await request(app).get('/posts/1');

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id');

  });

  // ============================
  // GET /posts/:id (404)
  // ============================
  it('GET /posts/:id inexistente debería responder 404', async () => {

    const res = await request(app).get('/posts/99999');

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Post no encontrado');

  });

  // ============================
  // GET /posts/author/:authorId
  // ============================
  it('GET /posts/author/:authorId debería responder 200', async () => {

    const res = await request(app).get('/posts/author/3');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

  });

  // ============================
  // POST /posts
  // ============================
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

  // ============================
  // POST /posts (400)
  // ============================
  it('POST /posts debería responder 400 si faltan campos', async () => {

    const res = await request(app)
      .post('/posts')
      .send({
        title: ''
      });

    expect(res.statusCode).toBe(400);

  });

  // ============================
  // PUT /posts/:id
  // ============================
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

  // ============================
  // PUT /posts/:id (404)
  // ============================
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

  // ============================
  // DELETE /posts/:id
  // ============================
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

  // ============================
  // DELETE /posts/:id (404)
  // ============================
  it('DELETE /posts/:id inexistente debería responder 404', async () => {

    const res = await request(app)
      .delete('/posts/99999');

    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe('Post no encontrado');

  });

});

afterAll(async () => {
  const pool = require('../src/db');
  await pool.end();
});
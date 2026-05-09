const request = require('supertest');
const app = require('../src/app');

describe('Posts API', () => {

  it('GET /posts debería responder con 200', async () => {
    const res = await request(app).get('/posts');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /posts debería crear un post', async () => {
    const newPost = {
      title: 'Test post',
      content: 'Contenido de prueba',
      author_id: 3
    };

    const res = await request(app)
      .post('/posts')
      .send(newPost);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

});
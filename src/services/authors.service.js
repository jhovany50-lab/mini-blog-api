import pool from '../db/index.js';

const getAll = async () => {
  const result = await pool.query('SELECT * FROM authors');
  return result.rows;
};

const getById = async (id) => {
  const result = await pool.query(
    'SELECT * FROM authors WHERE id = $1',
    [id]
  );

  return result.rows[0];
};

const create = async ({ name, email, bio }) => {
  try {
    const result = await pool.query(
      `INSERT INTO authors (name, email, bio)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, email, bio]
    );

    return result.rows[0];

  } catch (error) {

    if (error.code === '23505') {
      throw {
        status: 409,
        message: 'El email ya existe'
      };
    }

    throw error;
  }
};

const update = async (id, { name, email, bio }) => {
  const result = await pool.query(
    `UPDATE authors
     SET name = $1,
         email = $2,
         bio = $3
     WHERE id = $4
     RETURNING *`,
    [name, email, bio, id]
  );

  return result.rows[0];
};

const remove = async (id) => {
  const result = await pool.query(
    'DELETE FROM authors WHERE id = $1 RETURNING *',
    [id]
  );

  return result.rows[0];
};

const getPostsByAuthor = async (authorId) => {
  const result = await pool.query(
    `SELECT posts.*, authors.name
     FROM posts
     JOIN authors ON posts.author_id = authors.id
     WHERE authors.id = $1`,
    [authorId]
  );

  return result.rows;
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
  getPostsByAuthor
};
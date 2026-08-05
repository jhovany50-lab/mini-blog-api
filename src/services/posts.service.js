import pool from '../db/index.js';

const getAll = async () => {
  const result = await pool.query('SELECT * FROM posts');
  return result.rows;
};

const getById = async (id) => {
  const result = await pool.query(
    'SELECT * FROM posts WHERE id = $1',
    [id]
  );

  return result.rows[0];
};

const getByAuthor = async (authorId) => {
  const result = await pool.query(
    'SELECT * FROM posts WHERE author_id = $1',
    [authorId]
  );

  return result.rows;
};

const create = async ({ title, content, author_id }) => {
  try {
    const result = await pool.query(
      `INSERT INTO posts (title, content, author_id)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [title, content, author_id]
    );

    return result.rows[0];

  } catch (error) {

    if (error.code === '23503') {
      throw {
        status: 400,
        message: 'El autor especificado no existe'
      };
    }

    throw error;
  }
};

const update = async (id, { title, content, author_id }) => {
  try {
    const result = await pool.query(
      `UPDATE posts
       SET title = $1,
           content = $2,
           author_id = $3
       WHERE id = $4
       RETURNING *`,
      [title, content, author_id, id]
    );

    return result.rows[0];

  } catch (error) {

    if (error.code === '23503') {
      throw {
        status: 400,
        message: 'El autor especificado no existe'
      };
    }

    throw error;
  }
};

const remove = async (id) => {
  const result = await pool.query(
    'DELETE FROM posts WHERE id = $1 RETURNING *',
    [id]
  );

  return result.rows[0];
};

export default {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove
};
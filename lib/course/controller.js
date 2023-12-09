const knex = require('../database');

const selectAll = async (req, res) => {
  try {
    const courses = await knex('courses').select('name');
    res.json(courses);
  } catch (err) {
    res.sendStatus(500);
  }
};

const select = async (req, res) => {
  try {
    const { id } = req.params;
    const [course] = await knex('courses').select('name').where({ id });
    res.json(course);
  } catch (err) {
    res.sendStatus(500);
  }
};

const insert = async (req, res) => {
  try {
    const { body } = req;
    await knex('courses').insert(body);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await knex('courses').update(body).where({ id });
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await knex('courses').delete().where({ id });
    res.sendStatus(204)
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { selectAll, select, insert, update, remove };

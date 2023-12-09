const knex = require('../database');

const selectAll = async (req, res) => {
  try {
    const students = await knex('students').select('name');
    res.json(students);
  } catch (err) {
    res.sendStatus(500);
  }
};

const select = async (req, res) => {
  try {
    const { id } = req.params;
    const [student] = await knex('students').select('name').where({ id });
    res.json(student);
  } catch (err) {
    res.sendStatus(500);
  }
};

const insert = async (req, res) => {
  try {
    const { body } = req;
    await knex('students').insert(body);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    await knex('students').update(body).where({ id });
    res.sendStatus(204);
  } catch (err) {
    res.sendStatus(500);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await knex('students').delete().where({ id });
    res.sendStatus(204)
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { selectAll, select, insert, update, remove };

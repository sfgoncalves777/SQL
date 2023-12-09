const knex = require('../database');

const select = async (req, res) => {
  try {
    const { course_id } = req.query;
    const query =  course_id ? { course_id } : {};
    const registeredResultDb = await knex('registered')
      .join('courses', 'registered.course_id', '=', 'courses.id')
      .join('students', 'registered.student_id', '=', 'students.id')
      .select('courses.name as course', 'students.name as student')
      .where(query);
    const registered = []; // [{ course: nameCourse, students[] }];
    for(let i = 0; i < registeredResultDb.length; i++) {
      const line = registeredResultDb[i];
      const { course, student } = line;
      const courseReg = registered.find((reg) => reg.course === course);
      if (!courseReg) {
        registered.push({ course, students: [student] });
      }
      courseReg?.students.push(student);
    }
    res.json(registered)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
};

const insert = async (req, res) => {
  try {
    const { body } = req;
    await knex('registered').insert(body);
    res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500)
  }
};

module.exports = { select, insert };

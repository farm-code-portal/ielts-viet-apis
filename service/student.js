const { studentModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getAllStudents() {
  return studentModel.find({});
}

async function getStudent(id) {
  const student = await studentModel.findOne({ _id: new ObjectId(id) });
  return student;
}

async function checkStudent(dataInsert) {
  const { name, avatar, introduction, school, description, level, resources } = dataInsert;
  const student = await studentModel.findOne({ name: name, avatar: avatar, introduction: introduction, school: school, description: description, level: new ObjectId(level)});
  return student;
}

async function deleteStudent(id) {
  const student = await studentModel.deleteOne({ _id: new ObjectId(id) });
  return student;
}

async function updateStudent({ id, dataUpdate }) {
  const student = await studentModel.updateOne({ _id: new ObjectId(id) }, dataUpdate);
  return student;
}

async function insertStudent(dataInsert) {
  const { name, avatar, introduction, school, description, level, resources } = dataInsert;
  const createData = {
    ...(name && { name }),
    ...(avatar && { avatar }),
    ...(introduction && { introduction }),
    ...(school && { school }),
    ...(description && { description }),
    ...(level && { level: new ObjectId(level) }),
    ...(resources && { resources }),
  };
  const student = await studentModel.insertOne(createData);
  return student;
}

module.exports = {
  getAllStudents,
  getStudent,
  deleteStudent,
  updateStudent,
  insertStudent,
  checkStudent,
};

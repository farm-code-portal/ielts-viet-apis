const { teacherModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getAllTeachers() {
  return teacherModel.find({});
}

async function getTeacher(id) {
  const teacher = await teacherModel.findOne({ _id: new ObjectId(id) });
  return teacher;

}

async function checkTeacher(dataInsert) {
  const { name, avatar, introduction, nationality, experiences, certificates } = dataInsert;
  const teacher = await teacherModel.findOne({ name: name, avatar: avatar, introduction: introduction, nationality: nationality, experiences: experiences, certificates: certificates });
  return teacher;
}

async function deleteTeacher(id) {
  const teacher = await teacherModel.deleteOne({ _id: new ObjectId(id) });
  return teacher;
}

async function updateTeacher({ id, dataUpdate }) {
  const teacher = await teacherModel.updateOne({ _id: new ObjectId(id) }, dataUpdate);
  return teacher;
}

async function insertTeacher(dataInsert) {
  const { name, avatar, introduction, nationality, experiences, certificates } = dataInsert;
  const createData = {
    ...(name && { name }),
    ...(avatar && { avatar }),
    ...(introduction && { introduction }),
    ...(nationality && { nationality }),
    ...(experiences && { experiences }),
    ...(certificates && { certificates }),
  };
  const teacher = await teacherModel.insertOne(createData);
  return teacher;
}

module.exports = {
  getAllTeachers,
  getTeacher,
  deleteTeacher,
  updateTeacher,
  insertTeacher,
  checkTeacher,
};

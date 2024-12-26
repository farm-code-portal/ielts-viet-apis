const { courseModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getAllCourses() {
  return courseModel.find({});
}

async function getCourse(id) {
  const course = await courseModel.findOne({ _id: new ObjectId(id) });
  return course;
}

async function checkCourse(dataInsert) {
  const { name, thumbnail, price, duration, level_begin, level_end, category, goal } = dataInsert;
  const course = await courseModel.findOne({ name: name, thumbnail: thumbnail, price: price, duration: duration, level_begin: new ObjectId(level_begin), level_end: new ObjectId(level_end), category: new ObjectId(category), goal: goal });
  return course;
}

async function deleteCourse(id) {
  const course = await courseModel.deleteOne({ _id: new ObjectId(id) });
  return course;
}

async function updateCourse({ id, dataUpdate }) {
  const course = await courseModel.updateOne({ _id: new ObjectId(id) }, dataUpdate);
  return course;
}

async function insertCourse(dataInsert) {
  const { name, thumbnail, price, duration, level_begin, level_end, category, goal } = dataInsert;
  const createData = {
    ...(name && { name }),
    ...(thumbnail && { thumbnail }),
    ...(price && { price }),
    ...(duration && { duration }),
    ...(level_begin && { level_begin: new ObjectId(level_begin) }),
    ...(level_end && { level_end: new ObjectId(level_end) }),
    ...(category && { category: new ObjectId(category) }),
    ...(goal && { goal }),
  };
  const course = await courseModel.insertOne(createData);
  return course;
}

module.exports = {
  getAllCourses,
  getCourse,
  deleteCourse,
  updateCourse,
  insertCourse,
  checkCourse,
};

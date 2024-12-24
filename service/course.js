const { courseModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getAllCourses() {
  return courseModel.find({});
}

async function getCourse(id) { 
    const course = await courseModel.findOne({ _id: new ObjectId(id) });
    return course;

}

async function deleteCourse(id) { 
    const course = await courseModel.deleteOne({ _id: new ObjectId(id) });
    return course;
}

async function updateCourse({id, data_course}) { 

  const course = await courseModel.updateOne({ _id: new ObjectId(id) }, data_course);
  return course;
}

async function insertCourse(data_course) { 
    const { name, thumbnail, price, duration, level_begin, level_end, category, goal } = data_course;
    const createData = {
      ...(name && { name }),
      ...(thumbnail && { thumbnail }),
      ...(price && { price }),
      ...(duration && { duration }),
      ...(level_begin && { level_begin }),
      ...(level_end && { level_end }),
      ...(category && { category }),
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

};

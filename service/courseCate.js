const { courseCateModel } = require('~/model');

async function getAllCourseCategories() {
  return courseCateModel.find({});
}

module.exports = {
    getAllCourseCategories,
};

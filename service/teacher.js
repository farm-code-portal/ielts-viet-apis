const { teacherModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getAllTeachers() {
  return teacherModel.find({});
}

async function getTeacher(id) { 
    const course = await teacherModel.findOne({ _id: new ObjectId(id) });
    return course;

}

async function deleteTeacher(id) { 
    const course = await teacherModel.deleteOne({ _id: new ObjectId(id) });
    return course;
}

async function updateTeacher({id, data_teacher}) { 

  const course = await teacherModel.updateOne({ _id: new ObjectId(id) }, data_teacher);
  return course;
}

async function insertTeacher(data_teacher) { 
    const { name, avatar, introduction,  nationality, experiences, certificate_ids } = data_teacher;
    const createData = {
      ...(name && { name }),
      ...(avatar && { avatar }),
      ...(introduction && { introduction }),
      ...(nationality && { nationality }),
      ...(experiences && { experiences }),
      ...(certificate_ids && { certificate_ids }),
    };
    const course = await teacherModel.insertOne(createData);
    return course;
  }
module.exports = {
    getAllTeachers,
    getTeacher,
    deleteTeacher,
    updateTeacher,
    insertTeacher,
};

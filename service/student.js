const { studentModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getAllStudents() {
  return studentModel.find({});
}

async function getStudent(id) { 
    const course = await studentModel.findOne({ _id: new ObjectId(id) });
    return course;

}

async function deleteStudent(id) { 
    const course = await studentModel.deleteOne({ _id: new ObjectId(id) });
    return course;
}

async function updateStudent({id, data_student}) { 

  const course = await studentModel.updateOne({ _id: new ObjectId(id) }, data_student);
  return course;
}

async function insertStudent(data_student) { 
    const { name, avatar, introduction, school, description, level, resources} = data_student;
    const createData = {
      ...(name && { name }),
      ...(avatar && { avatar }),
      ...(introduction && { introduction }),
      ...(school && { school }),
      ...(description && { description }),
      ...(level && { level }),
      ...(resources && { resources }),
    };
    const course = await studentModel.insertOne(createData);
    return course;
  }
module.exports = {
    getAllStudents,
    getStudent,
    deleteStudent,
    updateStudent,
    insertStudent,

};

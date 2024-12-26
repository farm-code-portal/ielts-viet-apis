

function validate(data, schema, reply) {
  try {
    const { error, value } = schema.validate(data, {
      abortEarly: false,
    });
    if (error) throw error;
    return value;
  } catch (error) {
    const message = error.details
      .map((item) => item.message)
      .join(', ');
    console.log(message);
    return false;
  }
}

module.exports = {
  validate,
  authSchema: require('~/validate/auth'),
  blogSchema: require('~/validate/blog'),
  courseSchema: require('~/validate/course'),
  studentSchema: require('~/validate/student'),
  teacherSchema: require('~/validate/teacher'),
  organizationSchema: require('~/validate/organization'),
};

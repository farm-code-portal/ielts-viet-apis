const { blogModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getAllBlogs() {
  return blogModel.find({});
}

async function getBlog(id) {
  const blog = await blogModel.findOne({ _id: new ObjectId(id) });
  return blog;
}

async function deleteBlog(id) {
  const blog = await blogModel.deleteOne({ _id: new ObjectId(id) });
  return blog;
}

async function updateBlog({ id, dataUpdate }) {
  const blog = await blogModel.updateOne({ _id: new ObjectId(id) }, dataUpdate);
  return blog;
}

async function insertBlog(dataInsert) {
  const { title, author, description, thumbnail, blogDetail } = dataInsert;
  const createData = {
    ...(title && { title }),
    ...(author && { author }),
    ...(description && { description }),
    ...(thumbnail && { thumbnail }),
    ...(blogDetail && { blogDetail }),
  };
  const blog = await blogModel.insertOne(createData);
  return blog;
}

module.exports = {
  getAllBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
  insertBlog,
};

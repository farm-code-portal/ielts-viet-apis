const { blogModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getAllBlogs() {
  return blogModel.find({});
}

async function getBlog(id) { 
    const course = await blogModel.findOne({ _id: new ObjectId(id) });
    return course;

}

async function deleteBlog(id) { 
    const course = await blogModel.deleteOne({ _id: new ObjectId(id) });
    return course;
}

async function updateBlog({id, data_blog}) { 

  const course = await blogModel.updateOne({ _id: new ObjectId(id) }, data_blog);
  return course;
}

async function insertBlog(data_blog) { 
    const { title, author, description, thumbnail,  Blog_detail } = data_blog;
    const createData = {
      ...(title && { title }),
      ...(author && { author }),
      ...(description && { description }),
      ...(thumbnail && { thumbnail }),
      ...(Blog_detail && { Blog_detail }),
    };
    const course = await blogModel.insertOne(createData);
    return course;
  }
module.exports = {
    getAllBlogs,
    getBlog,
    deleteBlog,
    updateBlog,
    insertBlog,

};

const database = require('~/integrate/connectMongoDB');

async function find(query) {
  return database.teacherCol().find(query).toArray();
}
async function insertOne(data) {
  return database.teacherCol().insertOne({
    ...data,
    created_at: new Date(),
  });
}

async function deleteOne(query) {
  return database.teacherCol().deleteOne(query);
}

async function findOne(query) {
  return database.teacherCol().findOne(query);
}

async function updateOne(query, data) {
  return database.teacherCol().updateOne(query, { $set: data });
}

async function findAccountWithPagination(
  query,
  paginate,
  { projection = { password: 0 } } = {}
) {
  const {
    sort = { created_at: -1 },
    skip = 0,
    parsedPageSize = 10,
  } = paginate;
  return await database
    .teacherCol()
    .find(query, { projection })
    .sort(sort)
    .skip(skip)
    .limit(parsedPageSize)
    .toArray();
}

async function countDocument(query) {
  return await database.teacherCol().count(query);
}

module.exports = {
  find,
  insertOne,
  findOne,
  updateOne,
  findAccountWithPagination,
  countDocument,
  deleteOne,
};

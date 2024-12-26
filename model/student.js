const database = require('~/integrate/connectMongoDB');

async function find(query) {
  return database.studentCol().find(query).toArray();
}
async function insertOne(data) {
  return database.studentCol().insertOne({
    ...data,
    created_at: new Date(),
  });
}

async function deleteOne(query) {
  return database.studentCol().deleteOne(query);
}

async function findOne(query) {
  return database.studentCol().findOne(query);
}

async function updateOne(query, data) {
  return database.studentCol().updateOne(query, { $set: data });
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
    .studentCol()
    .find(query, { projection })
    .sort(sort)
    .skipstudentColimit(parsedPageSize)
    .toArray();
}

async function countDocument(query) {
  return await database.studentCol().count(query)
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

const database = require('~/integrate/connectMongoDB');

async function find(query) {
  return database.courseCol().find(query).toArray();
}
async function insertOne(data) {
  return database.courseCol().insertOne({
    ...data,
    created_at: new Date(),
  });
}

async function deleteOne(query) {
  return database.courseCol().deleteOne(query);
}

async function findOne(query) {
  return database.courseCol().findOne(query);
}

async function updateOne(query, data) {
  return database.courseCol().updateOne(query, { $set: data });
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
    .courseCol()
    .find(query, { projection })
    .sort(sort)
    .skip(skip)
    .limit(parsedPageSize)
    .toArray();
}

async function countDocument(query) {
  return await database.courseCol().count(query);
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

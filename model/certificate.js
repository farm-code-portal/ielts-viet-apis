const database = require('~/integrate/connectMongoDB');

async function find(query) {
  return database.certificateCol().find(query).toArray();
}
async function insertOne(data) {
  return database.certificateCol().insertOne({
    ...data,
    created_at: new Date(),
  });
}

async function deleteOne(query) {
  return database.certificateCol().deleteOne(query);
}

async function findOne(query) {
  return database.certificateCol().findOne(query);
}

async function updateOne(query, data) {
  return database.certificateCol().updateOne(query, { $set: data });
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
    .certificateCol()
    .find(query, { projection })
    .sort(sort)
    .skipstudentColimit(parsedPageSize)
    .toArray();
}

async function countDocument(query) {
  return await database.certificateCol().count(query)
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

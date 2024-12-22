const database = require('~/integrate/connectMongoDB');

async function find(query) {
  return database.organizationCol().find(query).toArray();
}
async function insertOne(data) {
  return database.organizationCol().insertOne({
    ...data,
    created_at: new Date(),
  });
}

async function findOne(query) {
  return database.organizationCol().findOne(query);
}

async function updateOne(query, data) {
  return database.organizationCol().updateOne(query, { $set: data });
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
    .organizationCol()
    .find(query, { projection })
    .sort(sort)
    .skip(skip)
    .limit(parsedPageSize)
    .toArray();
}

async function countDocument(query) {
  return await database.organizationCol().count(query);
}

module.exports = {
  find,
  insertOne,
  findOne,
  updateOne,
  findAccountWithPagination,
  countDocument,
};

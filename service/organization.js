const { organizationModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getInfo() {
  return organizationModel.find({});
}

async function check(id) {
  const organization = await organizationModel.findOne({ _id: new ObjectId(id) });
  if (organization) return true;
  else return false;
}

async function updateInfo({ id, dataUpdate }) {
  const organization = await organizationModel.updateOne({ _id: new ObjectId(id) }, dataUpdate);
  return organization;
}
module.exports = {
  getInfo,
  updateInfo,
  check,
};

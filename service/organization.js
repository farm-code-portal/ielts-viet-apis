const { organizationModel } = require('~/model');
const { ObjectId } = require('mongodb');

async function getInfo() {
  return organizationModel.find({});
}

async function updateInfo({id, data_organization}) { 

  const product = await organizationModel.updateOne({ _id: new ObjectId(id) }, data_organization);
  return product;
}
module.exports = {
  getInfo,
  updateInfo,

};

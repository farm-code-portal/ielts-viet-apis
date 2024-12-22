const { organizationModel } = require('~/model');

async function getInfo() {
  return organizationModel.find({});
}

module.exports = {
  getInfo,
};

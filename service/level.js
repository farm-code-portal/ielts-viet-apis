const { levelModel } = require('~/model');

async function getAllLevels() {
  return levelModel.find({});
}

module.exports = {
    getAllLevels,
};

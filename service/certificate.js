const { certificateModel } = require('~/model');

async function getAllCertificates() {
  return certificateModel.find({});
}


module.exports = {
    getAllCertificates,


};

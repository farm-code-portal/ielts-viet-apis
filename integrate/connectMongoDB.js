const { MongoClient } = require('mongodb');
require('dotenv').config();

const mongoDBUrl = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let marketWarehouse = null;
let client = null;
let db = null;
let _organizationCol = null;
let _courseCol = null;
let _teacherCol = null;
let _studentCol = null;
let _blogCol = null;
let _certificateCol = null;
let _courseCateCol = null;
async function connectDatabase(cb) {
  if (db) {
    console.log('>>>>>> Reusing existing DB connection <<<<<<');
    cb();
    return;
  }
  client = new MongoClient(mongoDBUrl, connectOptions);
  try {
    await client.connect();
    db = client.db(dbName);
    marketWarehouse = db.collection('market_warehouses');
    _organizationCol = db.collection('organization');
    _teacherCol = db.collection('teachers');
    _courseCol = db.collection('courses');
    _studentCol = db.collection('students');
    _blogCol = db.collection('blogs');
    _certificateCol = db.collection('certificates');
    _levelCol = db.collection('levels');
    _courseCateCol = db.collection('course_categories');
    await marketWarehouse.createIndex({
      created_at: 1,
      updated_at: 1,
      created_by: 1,
      updated_by: 1,
    });
    console.log('>>>>>>>> Connected to DB Successfully <<<<<<<<');
    cb();
  } catch (e) {
    console.error('Connection error:', e);
  }
}

const organizationCol = () => _organizationCol;
const courseCol = () => _courseCol;
const teacherCol = () => _teacherCol;
const studentCol = () => _studentCol;
const blogCol = () => _blogCol;
const certificateCol = () => _certificateCol;
const levelCol = () => _levelCol;
const courseCateCol = () => _courseCateCol;
module.exports = {
  connectDatabase,
  organizationCol,
  courseCol,
  teacherCol,
  studentCol,
  blogCol,
  certificateCol,
  levelCol,
  courseCateCol,
};

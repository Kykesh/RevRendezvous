const models = require('../models');
const db = require('./connection');

module.exports = async (modelName, collectionName) => {
  try {
    let modelExists = await models[modelName].db.db.listCollections({
      name: collectionName
    }).toArray();

    if (modelExists.length > 0) {
      await db.dropCollection(collectionName);
      console.log(`Dropped existing collection: ${collectionName}`);
    }
  } catch (err) {
    console.error('Error in revDB.js:', err);
    throw err;
  }
}

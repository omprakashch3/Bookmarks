/**
 *
 * @param {*} data  This parameter holds data which we want to insert  in DB.
 * @param {*} option This parameter holds the details related to database.
 * @param {*} collectionName This parameter holds the name of the collection
 * @description This method has been created to insert the data into given collection.
 */
module.exports.create = async (data, option, collectionName) => {
  let db = option.db;
  try {
    return db.collection(collectionName).insertOne(data);
  } catch (error) {
    console.error(new Error(error).message);
    return error;
  }
};
/**
 *
 * @param {*} selectionCriteria This parameter holds the condition on which we want to filter the documents in collection
 * @param {*} option This parameter holds the details related to database.
 * @param {*} collectionName This parameter holds the name of the collection
 * @description This method has been created to delete the data from given collection
 */
module.exports.delete = async (selectionCriteria, option, collectionName) => {
  let db = option.db;
  try {
    return db.collection(collectionName).deleteOne(selectionCriteria);
  } catch (error) {
    console.error(new Error(error).message);
    return error;
  }
};
/**
 *
 * @param {*} selectionCriteria This parameter holds the condition on which we want to filter the documents in collection
 * @param {*} option This parameter holds the details related to database.
 * @param {*} collectionName This parameter holds the name of the collection
 * @description This method has been creted to show all the data present in their respective collection.
 */

module.exports.retrieveAll = async (
  selectionCriteria,
  option,
  collectionName
) => {
  let db = option.db;
  try {
    return db.collection(collectionName).find(selectionCriteria).toArray();
  } catch (err) {
    console.error(err);
    return err;
  }
};
/**
 *
 * @param {*} filterCriteria This parameter holds the condition on which we want to filter the documents in collection
 * @param {*} option This parameter holds the details related to database.
 * @param {*} change This parameter holds Tag we want to attach to the bookmarks.
 * @description This method has been creted to add tags on given bookmark
 */
module.exports.attachTagToBookmark = async (filterCriteria, option, change) => {
  let db = option.db;
  try {
    // console.log("db, change, filterCriteria");
    // console.log(db, change, filterCriteria);
    return db.collection("bookmarks").updateOne(filterCriteria, change);
  } catch (error) {
    console.error(new Error(error).message);
    return error;
  }
};
/**
 *
 * @param {*} filterCriteria This parameter holds the condition on which we want to filter the documents in collection
 * @param {*} option This parameter holds the details related to database.
 */

module.exports.removeTag = async (filterCriteria, option) => {
  let db = option.db;
  try {
    return db.collection("bookmarks").deleteOne(filterCriteria, option);
  } catch (error) {
    console.error(new Error(error).message);
    return error;
  }
};

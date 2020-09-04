module.exports.create = async (data, option, collectionName) => {
  let db = option.db;
  try {
    return db.collection(collectionName).insertOne(data);
  } catch (error) {
    console.error(new Error(error).message);
    return error;
  }
};

module.exports.delete = async (selectionCriteria, option, collectionName) => {
  let db = option.db;
  try {
    return db.collection(collectionName).deleteOne(selectionCriteria);
  } catch (error) {
    console.error(new Error(error).message);
    return error;
  }
};

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

module.exports.removeTag = async (filterCriteria, option) => {
  let db = option.db;
  try {
    return db.collection("bookmarks").deleteOne(filterCriteria, option);
  } catch (error) {
    console.error(new Error(error).message);
    return error;
  }
};

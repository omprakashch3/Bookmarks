const mongodb = require("mongodb");

/**
 * @description This method has been created to establish the connection between application & the database
 * @implements This methods implements the indexing of link & title key in bookmarks & Tags collection respectively.
 * @implements Here the unique key constraint has been applied on the link & title attribut in bookmarks & Tags collection respectively
 */
module.exports.connect = async () => {
  try {
    let db = await mongodb.MongoClient.connect(process.env.DB, {
      useUnifiedTopology: true,
    });

    await db
      .db("test")
      .collection("bookmarks")
      .createIndex({ link: 1 }, { unique: true });

    await db
      .db("test")
      .collection("Tags")
      .createIndex({ title: 1 }, { unique: true });

    return db.db("test");
  } catch (err) {
    return err;
  }
};

const mongodb = require("mongodb");
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
    console.error(err);
    return err;
  }
};

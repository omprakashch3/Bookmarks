const mongodb = require("mongodb");
module.exports.connect = async () => {
  try {
    let db = await mongodb.MongoClient.connect(process.env.DB, {
      useUnifiedTopology: true,
    });

    return db.db("test");
  } catch (err) {
    console.error(err);
    return err;
  }
};

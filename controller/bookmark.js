const model = require("../model");
const util = require("../utils");
const ObjectId = require("mongodb").ObjectID;

/**
 *
 * @param {*} req This parameter holds request object that the server recieves from client
 * @param {*} res This parameter holds the response object using which the server responds to the client.
 * @description This method has been created to handle the creation of bookmarks.
 */
module.exports.createBookmark = async (req, res) => {
  let options = req.headers.options;
  try {
    const { title, link, tag, publisher } = req.body;
    if (title && link) {
      let body = {
        title,
        link,
        tag,
        publisher,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      let response = await model.create(body, options, "bookmarks");
      util.responseOnSucess(response, "Bookmark created successfully", res);
    } else {
      util.responseOnFailure(
        {},
        "Title & Links are required to create bookmarks",
        res
      );
    }
  } catch (err) {
    if (err.code === 11000) {
      util.responseOnFailure({}, "Duplicate link error", res);
    } else {
      util.responseOnFailure({}, err, res);
    }
  }
};

module.exports.deleteBookmark = async (req, res) => {
  let options = req.headers.options;
  try {
    let selectionCriteria = { _id: ObjectId(req.params.id) };
    let response = await model.delete(selectionCriteria, options, "bookmarks");
    util.responseOnSucess(response, "Bookmark deleted Successfully.", res);
  } catch (err) {
    util.responseOnFailure({}, err, res);
  }
};
module.exports.addTag = async (req, res) => {
  let options = req.headers.options;
  const { tag } = req.body;
  try {
    let selectionCriteria = { _id: ObjectId(req.params.id) };
    let change = { $set: { tag } };
    let response = await model.attachTagToBookmark(
      selectionCriteria,
      options,
      change
    );
    util.responseOnSucess(response, "added tag  Successfully.", res);
  } catch (err) {
    util.responseOnFailure({}, err, res);
  }
};
module.exports.removeTag = async (req, res) => {
  let options = req.headers.options;
  const { tag } = req.body;
  try {
    let selectionCriteria = { _id: ObjectId(req.params.id) };
    let change = { $pull: { tag: tag } };
    let response = await model.attachTagToBookmark(
      selectionCriteria,
      options,
      change
    );
    util.responseOnSucess(response, "added tag  Successfully.", res);
  } catch (err) {
    util.responseOnFailure({}, err, res);
  }
};
module.exports.getAllBookmarks = async (req, res) => {
  try {
    let options = req.headers.options;
    let selectionCriteria = {};
    let response = await model.retrieveAll(
      selectionCriteria,
      options,
      "bookmarks"
    );
    util.responseOnSucess(response, "bookmarks fetched successfully", res);
  } catch (err) {
    util.responseOnFailure({}, err, res);
  }
};

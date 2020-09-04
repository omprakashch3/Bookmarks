const model = require("../model");
const util = require("../utils");
const { options } = require("../routes");
const ObjectId = require("mongodb").ObjectID;

module.exports.createBookmark = async (req, res) => {
  let options = req.headers.options;

  try {
    let body = {
      ...req.body,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    let response = await model.create(body, options, "bookmarks");
    util.responseOnSucess(response, "Bookmark created successfully", res);
  } catch (err) {
    console.error(err);
    util.responseOnFailure({}, err, res);
  }
};

module.exports.deleteBookmark = async (req, res) => {
  let options = req.headers.options;

  try {
    let selectionCriteria = { _id: ObjectId(req.params.id) };
    let response = await model.delete(selectionCriteria, options, "bookkmarks");
    util.responseOnSucess(response, "Action Items deleted Successfully.", res);
  } catch (err) {
    console.error(err);
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
    console.error(err);
    util.responseOnFailure({}, err, res);
  }
};
module.exports.removeTag = async (req, res) => {
  let options = req.headers.options;
  const { tag } = req.body;
  try {
    let selectionCriteria = { _id: ObjectId(req.params.id) };
    let change = { $pull: { tag: "politics" } };
    let response = await model.attachTagToBookmark(
      selectionCriteria,
      options,
      change
    );
    util.responseOnSucess(response, "added tag  Successfully.", res);
  } catch (err) {
    console.error(err);
    util.responseOnFailure({}, err, res);
  }
};
module.exports.gatAllBookmarks = async (req, res) => {
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
    console.error(err);
    util.responseOnFailure({}, err, res);
  }
};

const model = require("../model");
const util = require("../utils");
const ObjectId = require("mongodb").ObjectID;

module.exports.createTag = async (req, res) => {
  let options = req.headers.options;

  try {
    let body = {
      ...req.body,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    let response = await model.create(body, options, "Tags");
    util.responseOnSucess(response, "Tag created successfully", res);
  } catch (err) {
    console.error(err);
    util.responseOnFailure({}, err, res);
  }
};

module.exports.deleteTag = async (req, res) => {
  let options = req.headers.options;

  try {
    let selectionCriteria = { _id: ObjectId(req.params.id) };
    let response = await model.delete(selectionCriteria, options, "Tag");
    util.responseOnSucess(
      response,
      "Tag deleted  from bookmark Successfully.",
      res
    );
  } catch (err) {
    console.error(err);
    util.responseOnFailure({}, err, res);
  }
};

module.exports.gatAllTag = async (req, res) => {
  try {
    let options = req.headers.options;
    let selectionCriteria = {};
    let response = await model.retrieveAll(selectionCriteria, options, "Tags");
    util.responseOnSucess(response, "tags fetched successfully", res);
  } catch (err) {
    console.error(err);
    util.responseOnFailure({}, err, res);
  }
};

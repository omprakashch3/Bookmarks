const model = require("../model");
const util = require("../utils");
const ObjectId = require("mongodb").ObjectID;

/**
 *
 * @param {*} req This parameter holds request object that the server recieves from client
 * @param {*} res This parameter holds the response object using which the server responds to the client.
 * @description This method has been created to handle the creation of tags document in *Tags* collection
 */
module.exports.createTag = async (req, res) => {
  let options = req.headers.options;
  const { title } = req.body;
  try {
    if (title) {
      let body = {
        title,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      let response = await model.create(body, options, "Tags");
      util.responseOnSucess(response, "Tag created successfully", res);
    } else {
      util.responseOnFailure({}, "Title is mandatory", res);
    }
  } catch (err) {
    if (err.code === 11000) {
      util.responseOnFailure({}, "Duplicate Title error", res);
    } else {
      util.responseOnFailure({}, err, res);
    }
  }
};
/**
 *
 * @param {*} req This parameter holds request object that the server recieves from client
 * @param {*} res This parameter holds the response object using which the server responds to the client.
 * @description This method has been created to handle the Removal of tags from the selected bookmark.
 * */

module.exports.deleteTag = async (req, res) => {
  let options = req.headers.options;
  try {
    let selectionCriteria = { _id: ObjectId(req.params.id) };
    let response = await model.delete(selectionCriteria, options, "Tags");
    util.responseOnSucess(
      response,
      "Tag deleted  from bookmark Successfully.",
      res
    );
  } catch (err) {
    util.responseOnFailure({}, err, res);
  }
};
/**
 *
 * @param {*} req This parameter holds request object that the server recieves from client
 * @param {*} res This parameter holds the response object using which the server responds to the client.
 * @description This method has been created to fetch all tags from database
 */

module.exports.gatAllTag = async (req, res) => {
  try {
    let options = req.headers.options;
    let selectionCriteria = {};
    let response = await model.retrieveAll(selectionCriteria, options, "Tags");
    util.responseOnSucess(response, "tags fetched successfully", res);
  } catch (err) {
    util.responseOnFailure({}, err, res);
  }
};

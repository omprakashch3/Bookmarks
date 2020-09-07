/**
 *
 * @param {*} payload This holds a data that has to be sent in response.
 * @param {*} msg This parameter holds the message that has to shown on response
 * @param {*} res This is response object that has been used to send response.
 * @description This method can be used to send response on success.
 */
module.exports.responseOnSucess = (payload, msg, res) => {
  let response = {
    data: payload,
    message: msg,
    status: 200,
    error: null,
  };
  res.send(response);
};
/**
 *
 * @param {*} payload This holds a data that has to be sent in response.
 * @param {*} msg This parameter holds the message that has to shown on response
 * @param {*} res This is response object that has been used to send response.
 * @description This method can be used to send response on Failure.
 */
module.exports.responseOnFailure = (payload, msg, res) => {
  let response = {
    data: payload,
    message: null,
    status: 404,
    error: msg,
  };
  res.send(response);
};
/**
 *
 * @param {*} req This parameter holds the request object that the server recieves from client
 * @param {*} res This is response object that has been used to send response.
 * @description This is the default response that has to be shown to the user when none of the given routes are passed.
 */
module.exports.defeultResponseOnServer = (req, res) => {
  this.responseOnSucess({}, "server is running successfully", res);
};

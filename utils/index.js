module.exports.responseOnSucess = (payload, msg, res) => {
  let response = {
    data: payload,
    message: msg,
    status: 200,
    error: null,
  };
  res.send(response);
};
module.exports.responseOnFailure = (payload, msg, res) => {
  let response = {
    data: payload,
    message: null,
    status: 404,
    error: msg,
  };
  res.send(response);
};

module.exports.defeultResponseOnServer = (req, res) => {
  this.responseOnSucess({}, "server is running successfully", res);
};

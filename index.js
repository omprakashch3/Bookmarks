require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
config
  .connect()
  .then((response) => {
    // console.log("DataBase connected suceesfully");
    // console.log(response);
    app.use((req, res, next) => {
      let options = {
        db: response,
      };
      req.headers.options = options;
      next();
    });
    app.use("/", [require("./routes")]);
    app.listen(process.env.PORT, (err) => {
      if (err) {
        console.error(new Error(err).message);
      } else {
        console.log(`listning on port ${process.env.PORT}`);
      }
    });
  })
  .catch((err) => {
    console.error(err);
  });

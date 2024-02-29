var express = require("express"); // nodejs framework for creating servers
var mongoose = require("mongoose");
var cors = require("cors"); // enforces security between 2 endpoints
var dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 5000;

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log("mongodb has error: ", err);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log(`server is running on port ${port}`);
});

// deploy sites
// -horuku
// -render.com
//

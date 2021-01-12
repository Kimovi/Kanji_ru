const express = require("express")
const mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();

const app = express();

const uri = process.env.ATLAS_URI;
mongoose
  .connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection");
  });

app.use(cors());

app.use("/api", require("./api")); // we can use router from api.js// and add "api" url

// app.use(function (err, req, res, next) {
//   res.status(422).send({ error: err._message });
// });

app.listen(process.env.PORT || 4000, () => {
  console.log("now listening for request");
});
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const route = require("./routes/route");

const app = express();

const port = 3000;

//database connection
mongoose.connect("mongodb://localhost:27017/contactlist");

mongoose.connection.on("success", () => {
  console.log("mongodb connected successfully");
});

mongoose.connection.on("error", err => {
  console.log("error");
});

//adding middleware
app.use(cors());

app.use(bodyParser.json());

//static files

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", route);

app.listen(port, () => {
  console.log("server started at port" + port);
});

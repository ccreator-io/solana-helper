require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const base58Routes = require("./helper/base58");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/base58", base58Routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

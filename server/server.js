"use strict";
const express = require("express");
const cors = require("cors");

const auth = require("./routes/auth");

const { port } = require("./dbconfig");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", auth);

app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

const routes = require("./Routes");

mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DATABSE CONNECT"))
  .catch((err) => console.log(err.message));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

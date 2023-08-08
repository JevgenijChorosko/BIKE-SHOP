/* eslint-disable no-template-curly-in-string */
const express = require("express");
const mongoose = require("mogoose");
const authRouter = require("./authRouter");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use("/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://f84:Darbas2023@cluster.cresilb.mongodb.net/"
    );
    app.listen(PORT, () => console.log("server is started on port ${PORT}"));
  } catch (e) {
    console.log(e);
  }
};

start();

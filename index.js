const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const PORT = config.get(`port`) || 5000;
const DB_URL = config.get(`mongoUrl`);

const app = express();

app.use(express.json());

app.use(`/api/tasks`, require("./routes/tasks-routes"));

const startServer = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    app.listen(PORT, () => {
      console.log(`Server has bean started on port ${PORT}...`);
    })
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
};

startServer();
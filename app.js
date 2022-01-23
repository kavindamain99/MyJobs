const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

//routers
const authRouter = require("./routes/auth");
const jobRouter = require("./routes/jobs");
app.use("/api/auth", authRouter);
app.use("/api/jobs", jobRouter);

//connect with mongodb
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongoDb connected");
  })
  .catch((err) => {
    console.log(err);
  });

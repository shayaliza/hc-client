//#server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//@cors function
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

//@middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

//@database connection
try {
  mongoose.connect(process.env.MONGO_DB_URL);
  console.log("MongoDB connected...");
} catch (error) {
  console.log(error);
}

//@ Routes Imports
const authRoutes = require("./routes/authRoutes");
const getRoutes = require("./routes/getRoutes");
// const delRoutes = require("./routes/delRoutes");
// const postRoutes = require("./routes/postRoutes");

//@Routes using as midddlesware
app.use("/api", getRoutes);
// app.use("/api", delRoutes);
app.use("/api", authRoutes);
// app.use("/api", postRoutes);

//@Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

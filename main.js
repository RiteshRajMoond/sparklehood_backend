const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const connectDB = require("./config/db");
const incidentRoutes = require("./routes/incident-routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("", incidentRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error.message);
  });

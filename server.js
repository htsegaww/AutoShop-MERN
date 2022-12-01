const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const mechanicRoute = require("./routes/mechanicsRoute");
const path = require("path");

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/mechanic", mechanicRoute);
const port = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  app.use("/".express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
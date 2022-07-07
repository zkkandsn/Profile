const express = require("express");
const app = express();
const fs = require("fs");

const cors = require("cors");
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.get("/api", cors(), (req, res) => {
  fs.readFile("./data/profile.json", "utf-8", (err, data) => {
    if (err) {
      console.log("error on reading");
    } else {
      res.send(JSON.parse(data));
    }
  });
});
app.listen(3000);

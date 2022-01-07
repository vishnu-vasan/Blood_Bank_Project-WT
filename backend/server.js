var mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 7800;

app.use(bodyParser());
app.use(cors());

var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "web_tech_proj",
});

pool.getConnection(function (err) {
  if (err) console.log(err);
  console.log("Connected!");
});

app.post("/addUser", function (req, res) {
  console.log("---inside post");
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log("connection issues");
      res.status(500).send("DB connection error");
    }
    console.log("-------" + req.body);
    let val = [
      [
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.mobile,
        req.body.bgroup,
      ],
    ];
    connection.query(
      "INSERT INTO donors (fname,lname,email,mobile,bgroup) VALUES ?",
      [val],
      function (error, results, fields) {
        connection.release();
        if (error) {
          console.log(error);
          res.status(500).send(error);
        }
        res.send(results);
      }
    );
  });
});

app.listen(port, () => console.log(`example app listening on port ${port}!`));

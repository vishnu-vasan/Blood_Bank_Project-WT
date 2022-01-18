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
        req.body.area
      ],
    ];
    connection.query(
      "INSERT INTO donors (fname,lname,email,mobile,bgroup,area) VALUES ?",
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

app.get("/donorInfo", function (req, res) {
  console.log("---inside get");
  //var area = req.params.area;
  //console.log(area); 
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log("connection issues");
      res.status(500).send("DB connection error");
    }
    //console.log(req.params);
    //if(area == "All")
    connection.query(
      "SELECT * from donors",
      function (error, results, fields) {
        connection.release();
        if (error) {
          console.log(error);
          res.status(500).send(error);
        }
        res.send(results);
        console.log(results);
      }
    );
    /*else
    {
      connection.query(
        `SELECT * from donors WHERE area='${area}'` ,
        function (error, results, fields) {
          connection.release();
          if (error) {
            console.log(error);
            res.status(500).send(error);
          }
          res.send(results);
          console.log(results);
        }
      );
    }*/

  });
});


app.listen(port, () => console.log(`example app listening on port ${port}!`));

var express = require('express');
var router = express.Router();

//import mongodb package
var mongodb = require("mongodb");

//MongoDB connection URL - mongodb://host:port/dbName
var dbHost = "mongodb://";

//DB Object
var dbObject;

//get instance of MongoClient to establish connection
var MongoClient = mongodb.MongoClient;

//Connecting to the Mongodb instance.
//Make sure your mongodb daemon mongod is running on port 27017 on localhost
MongoClient.connect(dbHost, function (err, db) {
    if (err) throw err;
    console.log(err);
    console.log("Succesfuly connected");
    dbObject = db;
});




module.exports = router;
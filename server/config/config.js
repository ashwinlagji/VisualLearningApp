var mongoose = require('mongoose')
var db       = mongoose.connection;
var connection;


var connectionUrl = "mongodb://localhost:27017/tutorials"

connection  =  mongoose.connect(connectionUrl);


db.on('error', function (err) {
    if(err) {
        throw err;
    }
});

db.once('open', function() {
    console.log("connected successfully");
});


module.exports = connection;
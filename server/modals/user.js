var mongoose = require('mongoose');
var schema = mongoose.Schema
var connection = require("./../config/config")

var userSchema = {

    userName: {
        type: String
        , requried: true
    }
    , password: {
        type: String
        , requried: true
        , minlength: 8
    }
    , email: {
        type: String
        , match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        
        , requried: true
    }
};

var userSchemaObj = new connection.Schema(userSchema, {
    collection: "users"
    , versionKey: false
})

var user = connection.model('user', userSchemaObj)

module.exports = user
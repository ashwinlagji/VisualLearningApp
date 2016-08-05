var mongoose = require('mongoose')
var schema = mongoose.Schema
var connection = require("../config/config")

var tutSchema = {

    title: {
        type: String
        , requried: true
    }
    , category: {
        type: String
        , requried: true
    }
    , content: {
        videoLink: String
        , gif: String
        , text: {
            type: String
            , requried: true
        }
    }
    , comments: [{
        name: String
        , date: {
            type: Date
            , default: Date.now
        }
        , comment: String
    }]
}

var tutSchemaObj = new connection.Schema(tutSchema, {
    collection: "tutorials"
    , versionKey: false
});

var tutorial = connection.model('tutorial', tutSchemaObj)

module.exports = tutorial
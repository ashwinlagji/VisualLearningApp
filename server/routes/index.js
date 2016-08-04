var express = require('express');
var router = express.Router();


function getAllTutorials(res){
    
    console.log("request")
    
    var response = {
        "name": "response"
        , "children": response_items
    };
    res.json(response);
}


router.get("/getAllTutorials", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log("request")
    getAllTutorials(res);
});

module.exports = router;
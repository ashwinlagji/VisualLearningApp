var express = require('express');
var router = express.Router();
var user = require("./../modals/user");
var Tutorial = require("./../modals/tutorial");




function getAllTutorials(res){
   
    Tutorial.find({},function(err,response){
        
        res.json(response); 
    })
}


function addtutorial(req,res){
    
    var title=req.body.title;
    var category=req.body.category;
    var videolink=req.body.videolink;
    var gif=req.body.gif;
    var text=req.body.text;
    
    
    var newTutorial = new Tutorial({
        title:title
        ,category:category
        ,content:{
            videoLink:videolink
            ,gif:gif
            ,text:text
        },
        comments:[]        
    })
    
    newTutorial.save(function(err,data){
        
        if(err!=null){
            res.json(err);
        }
        else
            res.json(data)
    })
}

function deletetutorial(req,res){
    
    title=req.body.title;
    
    Tutorial.remove({ title:title }, function(err,data) {
        if (!err) {
            res.json({status:"ok"})
        }
    });
    
}

function addcomment(req,res){
    
    var title=req.body.title;
    
    var message={
        name:req.body.name,
        comment:req.body.comment
    }
    
    var conditions = { title: title }
    , update = {$push:{comments:message}}
    , options = {};

    Tutorial.update(conditions, update, options, callback);

    function callback (err, numAffected) {
        res.json(numAffected)
    }
    
}


router.get("/getAllTutorials", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    getAllTutorials(res);
});

router.post("/addtutorial", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log("add tutorial")
    addtutorial(req,res);
});


router.post("/deletetutorial", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log("delete")
    deletetutorial(req,res);
});


router.post("/addcomment", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log("add comment ")
    addcomment(req,res);
})

module.exports = router;
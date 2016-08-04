var express = require('express');
var router = express.Router();
var user= require("./../modals/user");


function addUser(req,res){
    
    userName=req.body.username;
    email=req.body.email
    password=req.body.password
    
    var newUser = new user({
        userName:userName,
        password:password,
        email:email
    });
    
    newUser.save(function(err){
        
        if(err!=null){
            console.log(err.message);
        }
        console.log("success")
        res.json({"data":"success"})
    })
}


router.post('/login', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
//    req.body.variable_name
//    req.param.variable_name
    
});

router.post('/adduser',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.log("request")
    addUser(req,res);
    
});

router.post('/DeleteUser',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


});

router.post('/UpdateUser',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


});



module.exports = router;

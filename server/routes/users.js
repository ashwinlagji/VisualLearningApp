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
    
    newUser.save(function(err,data){
        
        if(err!=null){
            console.log(err.message);
        }
        console.log(data)
        res.json({"data":data})
    })
}


function deleteUser(req,res){
    
    
}


router.post('/login', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    

    
});

router.post('/adduser',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    console.log("Add user request")
    addUser(req,res);
    
});

router.post('/DeleteUser',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    console.log("delete req ")
    deleteUser(req,res);
});

router.post('/UpdateUser',function(req,res,next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    
});



module.exports = router;

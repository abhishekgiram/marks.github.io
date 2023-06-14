var express = require('express');
var router = express.Router();
const userModel = require('../models/user.model');

/* GET users listing. */


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {

    let userObj = new userModel({
        firstname:'Abhishek',
        lastname:'Giram',
        phone:'9322027715',
        email:'abhishek.giram11@gmail.com'   
    })
    // userObj.save(function(err,userObj){
    //     if(err){
    //        res.send({status:500, message:'unable to add data'});
    //     }
    //     else{
    //       console.log("data sending sucessfully !",userObj)
    //         res.send({status:200, message:'data added sucessfully',userDetails:userObj})
    //     }
    // })
    res.send({status:200, message:'data added sucessfully',userDetails:userObj})
  });
  
module.exports = router;

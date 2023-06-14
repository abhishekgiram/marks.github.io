var express = require('express');
var router2019 = express.Router();
var mongoose = require('mongoose');
const url= "mongodb+srv://abhishek:abhishek@cluster0.nrg0uz7.mongodb.net/database"

try {
  // Connect to the MongoDB cluster
   mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );

} catch (e) {
  console.log("could not connect");
}

router2019.get('/getAll', function (req, res) {

    // BAD! Creates a new connection pool for every request
    console.log('connected');
    mongoose.createConnection(url, function (err, db) {
        if (err) throw err;
    
        var coll = db.collection('marks');
    
        coll.find({}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {
    
                res.send(JSON.stringify(result));
            }
        })
    
    });
});


router2019.get("/getAll/:institute",(req,res)=>{
    mongoose.createConnection(url, function (err, db) {
        if (err) throw err;
        const findByInstitute= req.params.institute
        console.log(findByInstitute)
         db.collection('marks').find({'Institute': { $regex:'.*'+findByInstitute+'.*'} }).toArray((err,result) => {
            
        if(!err) {
           res.send(JSON.stringify(result));
        } else {
            console.log(err);
        }
   
      });
    })
})

// db.foo.find( { 'bad' : { $type : 1 } } ).forEach( function (x) {   
//     x.bad = new String(x.bad); // convert field to string
//     db.foo.save(x);
//   });

module.exports = router2019;

var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../module/config');

const fs = require('fs');
var sprintf = require("sprintf-js").sprintf,
    vsprintf = require("sprintf-js").vsprintf;


/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Express' });
});

router.get('/student-a', function(req, res, next) {
    fs.readFile('public/student.html', function(err, data) {                
        var str = data.toString();
   
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(str);
        res.end();
    });
});


router.post('/createcamera', function(req, res, next) {	
	var camera_id = req.body.camera_id;

    //some err occurred
    // console.error(err);
    // var data = {'error' : err};
    // res.send(data);
    var data = {code : 200};
    res.send(data);
});


module.exports = router;

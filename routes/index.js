// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
const fs = require('fs');
var storedData={};
storedData.result = []
module.exports = function(app){
  app.get('/sensor',(req,res)=>{
    res.send({ 'res': 'sensor get' }); 
    console.log(storedData);
    fs.writeFileSync(`${Date.now()}.json`,JSON.stringify(storedData));
    console.log("Data stored");
    storedData=[];
    return res.end();
  });
  app.get('/test',(req,res)=>{
    console.log("sensor get!");
    res.send({ 'res': 'sensor post' }); 
    return res.end();
  });
  app.post('/sensor',(req,res)=>{
    console.log("sensor post!");
    console.log(req.body);
    storedData.result.push(req.body);
    res.send({ 'res': 'sensor post' }); 
    return res.end();
  });
};

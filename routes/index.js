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

  app.post('/sensor',(req,res)=>{
    console.log("sensor post!");
    console.log(req.body);
    storedData.result.push(req.body);
    res.send({ 'res': 'receive a post from the sensor!' }); 
    return res.end();
  });
};

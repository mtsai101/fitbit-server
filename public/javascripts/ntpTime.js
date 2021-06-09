var timesync = require('timesync/dist/timesync');
// import { timesync } from "timesync";
 
// create a timesync client
var ts = timesync.create({
  server: 'http://localhost:3000/timesync',
  interval: 1000000,
  repeat:1
});

// get notified on changes in the offset
ts.on('change', function (offset) {
  console.log('changed offset: ' + offset + ' ms');
});
ts.on('sync', function (status) {
  console.log('sync '+ status);
});
// get synchronized time
setInterval(function () {
  var now = new Date(ts.now());
  console.log('now: ' + now.toISOString()+ ' ms');
}, 1000);

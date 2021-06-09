# fitbit-server
This is the API server for collecting sensor data from smartwatch sensor

## Requirements
node v10.21.0

## Installation
```
npm install
```

## How to run
```
npm start
```

## Collection Procedure
1. First, please make sure the API server, smartphone, smartwatch under the same subnet. 
2. The API server (at http://172.20.10.6:3000) starts to wait for the recording began.
3. Once receiving the http posts, the data of sensors would be push to the array *storedData*
4. The recording stops once the toggle button on smartphone switch to off
5. No need to touch anything, the recording results would be save to <current time stamp>.json


# Fitbit-server
This is the API server for collecting sensor data from smartwatch sensor

## Requirements
Node.js 8+

## Installation
```
npm install
```

## How to run
```
npm start
```

## Collection Walkthrough  
1. Make sure the API server, smartphone, smartwatch under the same subnet. 
2. The API server (at http://172.20.10.6:3000) starts to wait for the recording began.
3. Once receiving the http posts, the data of sensors would be pushed to the array *storedData*.
4. The recording stops once the toggle button on smartphone is switched to off. T
5. he recording results would be saved to <current time stamp>.json
  
  


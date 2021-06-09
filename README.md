# Fitbit-server
This is the API server for collecting sensor data from smartwatch sensor

## Build & Run
### Requirements
Node.js 8+

### Installation
```
npm install
```

### How to run
```
npm start
```
### Collection walkthrough  
1. Make sure the API server, smartphone, smartwatch under the same subnet. 
2. The API server (at http://172.20.10.6:3000) starts to wait for the recording began.
3. Once receiving the http posts, the sensor data would be pushed to the array *storedData*.
4. Turn off toggle button on smartphone to stop
5. The results would be saved to <current time stamp>.json once the recording stops

  
## Code & Script
app.js: Define the Middleware
routes/index.js: Handle http get/post


  
  

//import node js libraries
var fs = require('fs'),
    path = require('path');

//load local libraries
var endpointScanner = require('./SingleFileEndpointDiscovery');

var filePath = path.join(__dirname,'demo.java');

console.log(endpointScanner.getFileEndpoints(filePath));



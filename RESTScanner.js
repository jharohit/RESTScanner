var fs = require('fs'),
    path = require('path');

var filePath = path.join(__dirname,'demo.java');

var outputJSON = [];

fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err){

    	outputJSON.push({
    		"no. of lines": data.split('\n').length,
    		"occurences of word 'demo'": data.match(/demo/g).length
    	});

    	console.log(JSON.stringify(outputJSON,null,1));

    }else{
        console.log(err);
    }

});

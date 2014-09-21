//module level node js libraries
var fs = require('fs');   

module.exports = {
	getFileEndpoints: function(filePath) {
		var getArray = [],
		    postArray = [],
		    responseArray = [],
		    uriPaths = [],
		    restType = [];


		fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
		    if (!err){

		    	restType = data.match(/[@](GET|POST)/g);
		    	uriPaths = data.match(/(?:"\/(.*)")/g);

		    	console.log(JSON.stringify(uriPaths,null,1));
		    	console.log(JSON.stringify(restType,null,1));

		    }else{
		        console.log(err);
		    }

		});
	}

};
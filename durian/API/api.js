var http = require('http');
// http://m.breadtrip.com/hunter/feature
// 

function spider(path,callback){
	var travel = {
		hostname : 'm.breadtrip.com',
		port : 80,
		path : path,
		method : 'get'
	};

	var req = http.request(travel,function (res){
		var alldata = "";
		res.on("data",function (sum){
			alldata += sum;
		})

		res.on('end',function (){
			callback(alldata);
		})
	})
	req.end();

} 

module.exports = spider;


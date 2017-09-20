var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var spider = require('../API/api.js');

// router.get('/',function (req,res){
// 		http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82
// })

router.get('/list',function (req,res){
    console.log("req.url : " + req.url)
    console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    console.log(str1);
    spider('/api/hunter/products/newstyle/v2/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82' ,function (data) {
        res.send(data);
    })   
});

router.get('/map',function (req,res){
    console.log("req.url : " + req.url)
    console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    console.log(str1);
    spider('/api/hunter/products/v2/metadata/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82&with_citydata=true&with_sortdata=false' ,function (data) {
        res.send(data);
    })   
});

router.get('/pic',function (req,res){
    console.log("req.url : " + req.url)
    console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    console.log(str1);
    spider('/api/hunter/products/newstyle/v2/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82' ,function (data) {
        res.send(data);
    })   
});

router.get('/routs',function (req,res){
    console.log("req.url : " + req.url)
    console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    console.log(str1);
    spider('/api/hunter/search/index/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82' ,function (data) {
        res.send(data);
    })   
});
// http://m.breadtrip.com/api/hunter/search/index/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82

// http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82
module.exports = router;


// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/29/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82&module_name=%E7%BA%BF%E4%B8%8A%E4%BA%A7%E5%93%81&module_id=-7&lng=&lat=&start=0&publish_date=
// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/29/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82&module_name=%E7%BA%BF%E4%B8%8A%E4%BA%A7%E5%93%81&module_id=-7&lng=&lat=&start=0&publish_date=
// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/29/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=&start=0&publish_date=


// http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E4%B8%8A%E6%B5%B7  %e5%8c%97%e4%ba%ac
// http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E5%8C%97%E4%BA%AC
// http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E6%B7%B1%E5%9C%B3
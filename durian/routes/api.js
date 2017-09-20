var express = require('express');
var router = express.Router();
var url = require('url');
var querystring = require('querystring');
var spider = require('../API/api.js');

// router.get('/',function (req,res){
// 		http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82
// })

router.get('/address',function (req,res){
    // console.log("req.url : " + req.url)
    // console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    // console.log(str1);
    spider('/api/hunter/products/newstyle/v2/?city_name=%E5%8C%97%E4%BA%AC' ,function (data) {
        res.send(data);
    })   
});


router.get('/map',function (req,res){
    // console.log("req.url : " + req.url)
    // console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    // console.log(str1);
    spider('/api/hunter/products/v2/metadata/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82&with_citydata=true&with_sortdata=false' ,function (data) {
        res.send(data);
    })   
});

// router.get('/pic',function (req,res){
//     // console.log("req.url : " + req.url)
//     // console.log("url.parse(req.url).query : " + url.parse(req.url).query);
//     var str = url.parse(req.url).query;
//     var str1 = querystring.parse(str);
//     // console.log(str1);
//     spider('/api/hunter/products/newstyle/v2/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82' ,function (data) {
//         res.send(data);
//     })   
// });

// router.get('/routs',function (req,res){
//     // console.log("req.url : " + req.url)
//     // console.log("url.parse(req.url).query : " + url.parse(req.url).query);
//     var str = url.parse(req.url).query;
//     var str1 = querystring.parse(str);
//     // console.log(str1);
//     spider('/api/hunter/search/index/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82' ,function (data) {
//         res.send(data);
//     })   
// });


router.get('/city',function (req,res){
    // console.log("req.url : " + req.url)
    // console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    // console.log(encodeURI(str1.name));
    spider('/api/hunter/products/newstyle/v2/?city_name=' + encodeURI(str1.name)  ,function (data) {
        res.send(data);
    })   
});

router.get('/list',function (req,res){
    // console.log("req.url : " + req.url)
    console.log("url.parse(req.url).query : " + url.parse(req.url).query);
    // console.log(req);
    var str = url.parse(req.url).query;
    var str1 = querystring.parse(str);
    // console.log(encodeURI(str1.name));
    spider('/api/hunter/products/newstyle/product_module/v2/38/?' + url.parse(req.url).query  ,function (data) {
        res.send(data);
    })   
});




// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/38/?city_name=%E4%B8%8A%E6%B5%B7&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=&start=0&publish_date=



// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/38/?city_name=%E4%B8%8A%E6%B5%B7&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=&start=0&publish_date=
// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/38/?city_name=上海&module_name=城市探索&module_id=67&lng=&lat=
// 
// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/38/?city_name=%E4%B8%8A%E6%B5%B7&module_name=%E5%A5%BD%E7%8E%A9%E5%AE%9A%E5%88%B6&module_id=124&lng=&lat=&start=0&publish_date=
// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/38/?city_name=%E4%B8%8A%E6%B5%B7&module_name=%E7%BA%BF%E4%B8%8A%E4%BA%A7%E5%93%81&module_id=-7&lng=&lat=&start=0&publish_date=


// url.parse(req.url).query : city_name=%E6%B7%B1%E5%9C%B3&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=

// url.parse(req.url).query : city_name=%E5%8C%97%E4%BA%AC&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=







// http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E5%8C%97%E4%BA%AC
// http://m.breadtrip.com/api/hunter/search/index/?city_name=%E5%8C%97%E4%BA%AC

// http://m.breadtrip.com/api/hunter/search/index/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82

// http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82
module.exports = router;


// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/29/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82&module_name=%E7%BA%BF%E4%B8%8A%E4%BA%A7%E5%93%81&module_id=-7&lng=&lat=&start=0&publish_date=
// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/29/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82&module_name=%E7%BA%BF%E4%B8%8A%E4%BA%A7%E5%93%81&module_id=-7&lng=&lat=&start=0&publish_date=
// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/29/?city_name=%E5%85%A8%E9%83%A8%E5%9F%8E%E5%B8%82&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=&start=0&publish_date=


// http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E4%B8%8A%E6%B5%B7  %e5%8c%97%e4%ba%ac
// http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E5%8C%97%E4%BA%AC
// http://m.breadtrip.com/api/hunter/products/newstyle/v2/?city_name=%E6%B7%B1%E5%9C%B3


// url.parse(req.url).query : city_name=%E5%8C%97%E4%BA%AC&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=
// url.parse(req.url).query : city_name=%E4%B8%8A%E6%B5%B7&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=
// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/30/?city_name=%E5%8C%97%E4%BA%AC&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=&start=0&publish_date=
// http://api.breadtrip.com/hunter/products/newstyle/product_module/v2/38/?city_name=%E4%B8%8A%E6%B5%B7&module_name=%E5%9F%8E%E5%B8%82%E6%8E%A2%E7%B4%A2&module_id=67&lng=&lat=&start=0&publish_date=
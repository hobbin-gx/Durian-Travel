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

router.post('/list',function (req,res){
    console.log( req.body.str2 )
    spider('/api/' + req.body.str2 ,function (data) {
        res.send(data);
    })   
});


    // http://web.breadtrip.com/hunter/product/16133/comments/more/?start=0&count=20&public=1

router.post('/details',function (req,res){
    console.log( req.body.str )
    spider('/api/hunter/product/' + req.body.str  + '/comments/more/?start=0&count=20&public=1',function (data) {
        res.send(data);
    })   
});







router.post("/register",function(req,res,next){
    //req.body 接受前端的post请求；

    console.log(req.body);
    //将用户名存入数据库 mongodb  <= mongoose模块

    //利用dbhandler.user  ,先find 查找是否有同名用户邮箱，
    dbhandler.user.findOne({
        name:req.body.username
    },function(error,data){
        if(data){
            res.send(false);
        }else{
            dbhandler.user.create({
                name:req.body.username,
                password:req.body.password
            },function(error,result){
                if(!error){
                    res.redirect("/"); //重定向
                }else{
                    console.log(error);
                }
            }) 
        }
    })
    
})


router.post("/login",function(req,res){
    //req.body
    //findone 如果匹配到 ，返回的是对象， find如果匹配到返回的是数组
    dbhandler.user.findOne({
        name:req.body.name,
        password:req.body.password
    },function(error,data){
        console.log(data);
        if(data){
            console.log("success");
            //验证用户名和密码正确，将sessionid 对象的session 设置为有效
            // req.session.zlz = true;

            res.cookie("name",data.name);
            res.redirect("/");
        }else{
            res.render('login', { title: '登录页面',isShow:true });
        }
    })
});









// http://api.breadtrip.com/v2/new_trip/spot/list/newstyle?city_name=%E5%B9%BF%E5%B7%9E&start=0&count=20
// http://api.breadtrip.com/v2/new_trip/spot/list/newstyle?city_name=北京
//                  v2/new_trip/spot/list/newstyle?city_name=%E5%8C%97%E4%BA%AC

module.exports = router;


